// app/components/Contact.tsx
'use client';

import { useState, useEffect, useTransition } from 'react'; // 1. Importar useTransition
import { submitContactForm } from '@/app/actions'; // 2. Importar sua Server Action

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  
  const [isPending, startTransition] = useTransition();
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const { name, email, message } = formData;
    const isValidEmail = email.includes('@') && email.includes('.');
    if (name.trim() !== '' && isValidEmail && message.trim() !== '') {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impedir o envio padrão
    if (!isFormValid || isPending) return;

    setStatusMessage(''); // Limpar erros antigos

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (!result.success) {
        setStatusMessage(result.message);
      }
    });
  };

  
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">ENTRE EM CONTATO</h2>
        <p className="text-lg text-gray-600 mb-12">
          Tem alguma pergunta ou quer trabalhar comigo? Preencha o formulário abaixo.
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          {statusMessage && (
            <p className="mt-4 text-red-600">
              {statusMessage}
            </p>
          )}

          <button 
            type="submit" 
            disabled={!isFormValid || isPending} 
            className="mt-8 w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-md transition-all duration-300 hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isPending ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
}