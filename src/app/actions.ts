'use server';

import { SignJWT } from 'jose';
import { redirect } from 'next/navigation';

// Define a estrutura dos dados do formulário
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define a estrutura da resposta da nossa ação
interface ActionResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  // Pega as variáveis de ambiente (só o servidor tem acesso)
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  const jwtSecret = process.env.N8N_JWT_SECRET;

  if (!webhookUrl || !jwtSecret) {
    console.error('Variáveis de ambiente N8N não configuradas.');
    return { success: false, message: 'Erro no servidor. Tente novamente mais tarde.' };
  }

  try {
    // 1. Criar o "Secret" como um objeto Uint8Array
    const secretKey = new TextEncoder().encode(jwtSecret);

    // 2. Criar o Token JWT (Payload)
    // O JWT é apenas para AUTENTICAÇÃO. Os dados do formulário irão no corpo.
    // Vamos criar um payload simples.
    const token = await new SignJWT({ 
      issuer: 'portfolio-nextjs', // Apenas uma identificação
    })
      .setProtectedHeader({ alg: 'HS256' }) // Algoritmo (igual da sua imagem)
      .setIssuedAt() // Quando foi criado
      .setExpirationTime('2m') // Validade de 2 minutos
      .sign(secretKey); // Assina com o segredo

    // 3. Enviar a requisição para o N8N
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        // --- MUDANÇA AQUI ---
        // Colocamos o token no header, como o N8N espera
        'Authorization': `Bearer ${token}`, 
        // Avisamos que o CORPO da requisição é um JSON
        'Content-Type': 'application/json',
      },
      // --- MUDANÇA AQUI ---
      // Enviamos os dados do formulário no corpo, como um JSON
      body: JSON.stringify(formData), 
    });

    if (!response.ok) {
      // Se o N8N der erro (ex: 401, 500)
      const errorText = await response.text();
      console.error('Erro ao enviar para o N8N:', response.status, errorText);
      // Se o erro for 401 agora, é provável que seu "Secret" no .env.local esteja errado
      if (response.status === 401) {
         console.error('ERRO 401: Verifique se o N8N_JWT_SECRET no seu .env.local está IDÊNTICO ao do N8N.');
         return { success: false, message: 'Falha na autenticação com o servidor.' };
      }
      return { success: false, message: 'Falha ao enviar sua mensagem. Tente novamente.' };
    }

    // Se deu tudo certo
  } catch (error) {
    console.error('Erro de rede ou ao criar JWT:', error);
    return { success: false, message: 'Um erro inesperado ocorreu.' };
  }
  
  // 4. Se a submissão foi um sucesso, redirecionamos
  redirect('/thank-you');

  // Este retorno é mais para TypeScript, o redirect() vai acontecer antes
  return { success: true, message: 'Mensagem enviada!' };
}