// app/components/Technologies.tsx
import Image from 'next/image';

// Dados das tecnologias (sem alterações aqui)
const technologiesData = [
  { name: 'HTML', image: '/IMGS/HTML.svg', description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.', bgColor: '#F16529', textColor: 'text-white' },
  { name: 'CSS', image: '/IMGS/CSS.svg', description: 'CSS é um mecanismo para adicionar estilo a um documento web.', bgColor: '#2965F1', textColor: 'text-white' },
  { name: 'JavaScript', image: '/IMGS/JS.svg', description: 'JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas.', bgColor: '#F7DF1E', textColor: 'text-black' },
  { name: 'Java', image: '/IMGS/JAVA.svg', description: 'Java é uma linguagem de programação orientada a objetos, popular para aplicações de larga escala.', bgColor: '#FFFFFF', textColor: 'text-black' },
  { name: 'PostgreSQL', image: '/IMGS/POSTGREE.svg', description: 'PostgreSQL é um sistema de gerenciamento de banco de dados objeto-relacional.', bgColor: '#5A81A2', textColor: 'text-white' },
];

// Card de Tecnologia com a alteração
const TechnologyCard = ({ name, image, description, bgColor, textColor }: (typeof technologiesData[0])) => (
  <div className="group relative w-72 h-72 rounded-lg overflow-hidden shadow-2xl cursor-pointer">
    {/* Camada da Imagem (fundo padrão) --- ALTERAÇÃO AQUI --- */}
    <div 
      className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
      style={{ backgroundColor: bgColor }} // Usamos a cor customizada aqui
    >
      <Image src={image} alt={`Logo ${name}`} width={128} height={128} className="w-32 h-32 object-contain" />
    </div>

    {/* Camada do Conteúdo (continua a mesma) */}
    <div
      className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-center 
                 translate-y-full transition-transform duration-500 ease-in-out 
                 group-hover:translate-y-0 ${textColor}`}
      style={{ backgroundColor: bgColor }}
    >
      <h3 className="text-3xl font-extrabold mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>{name}</h3>
      <p className="font-medium">{description}</p>
    </div>
  </div>
);

// O resto do arquivo continua o mesmo
export default function Technologies() {
  return (
    <section 
      id="tec" 
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/IMGS/SARAIVA (1).jpg')" }} 
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative container mx-auto px-6 text-center z-10">
        <h2 className="text-4xl font-bold mb-2 text-white">TECNOLOGIAS</h2>
        <p className="text-lg text-gray-300 mb-12">Passe o mouse sobre o card para ver a descrição</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {technologiesData.map((tech) => (
            <TechnologyCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}