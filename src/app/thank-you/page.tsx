// app/thank-you/page.tsx
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Obrigado!</h1>
      <p className="text-xl text-gray-300 mb-8">Sua mensagem foi enviada com sucesso. Retornarei em breve.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}