// app/components/About.tsx
import Image from 'next/image';

export default function About() {
  return (
    // FUNDO ALTERADO para branco
    <section id="sobre" className="py-24 bg-white"> 
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Coluna da Esquerda: Texto */}
          <div className="lg:w-1/2 max-w-xl text-center lg:text-left">
            {/* COR DO TEXTO ALTERADA para escuro */}
            <h2 className="text-4xl font-bold mb-6 text-gray-800">QUEM SOU EU</h2>
            <p className=" text-gray-600 mb-4">
              Me chamo Vinicius Saraiva, tenho 21 anos e estou sempre em busca de novos aprendizados e desafios. Sou um apaixonado por tecnologia e programação, e essa paixão me levou a mergulhar no mundo do desenvolvimento de software.
            </p>
            <p className=" text-gray-600 mb-4">
              Atualmente, estou focado em aprimorar minhas habilidades em tecnologias de back-end, mas também tenho um grande interesse e conhecimento em desenvolvimento front-end. Acredito que a combinação dessas duas áreas me permite criar soluções completas e robustas.
            </p>
            <p className="text-gray-600">
              Estou cursando Sistemas Para Internet, o que me proporciona uma base sólida de conhecimento teórico e prático para enfrentar os desafios do mercado de trabalho.
            </p>
          </div>

          {/* Coluna da Direita: Imagem */}
          <div className="lg:w-1/3 flex justify-center">
            <Image
              src="/IMGS/eu.png"
              alt="Foto de Vinicius Saraiva"
              width={350}
              height={350}
              className="rounded-2xl shadow-2xl object-cover transform transition-transform duration-300 hover:scale-105"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}