// app/components/Projects.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Seus dados de projeto continuam perfeitos. Nenhuma mudança aqui.
const projectsData = [
  { category: 'Backend', title: 'LEGACY', description: 'Projeto Ecommerce utilizando java web e postgres', image: '/IMGS/Legacy.png', repoUrl: 'https://github.com/ViniciusSPDP/Legacy---E-commerce-em-Java-com-CRUD-completo', deployUrl: null, bgColor: '#FFFFFF', imagePadding: 'p-8' },
  { category: 'Backend', title: 'BlogNode', description: 'Blog feito com Node.js, Express e MongoDB, com funcionalidades de CRUD para posts e comentários.', image: '/IMGS/BlogNode.jpg', repoUrl: 'https://github.com/ViniciusSPDP/BlogNode', deployUrl: null, bgColor: '#FFBE00', imagePadding: '' },
  { category: 'Frontend', title: 'Saraiva Music', description: 'Este projeto foi feito usando 100% HTML.', image: '/IMGS/1.jpg', repoUrl: 'https://github.com/ViniciusSPDP/Saraiva-Music-100-HTML', deployUrl: 'https://viniciusspdp.github.io/Saraiva-Music-100-HTML/', bgColor: '#001822', imagePadding: '' },
  { category: 'Frontend', title: 'G1 Replica', description: 'Um clone da interface da G1 para praticar habilidades de layout e estilização com CSS.', image: '/IMGS/Logo g1.jpg', repoUrl: 'https://github.com/ViniciusSPDP/G1-Replica', deployUrl: 'https://viniciusspdp.github.io/G1-Replica/', bgColor: '#A0000C', imagePadding: 'p-8' },
  { category: 'Frontend', title: 'Tipo Sanguíneo e Fator RH', description: 'Projeto simples para praticar lógica de programação.', image: '/IMGS/Logo Laranja.png', repoUrl: 'https://github.com/ViniciusSPDP/Projeto-Tipo-Sanguineo-e-Fator-RH', deployUrl: 'https://viniciusspdp.github.io/Projeto-Tipo-Sanguineo-e-Fator-RH/', bgColor: '#051922', imagePadding: 'p-8' },
];


// --- O NOVO CARD DE PROJETO "SUPER TOP" ---
const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => (
  <div 
    className="group relative w-full max-w-sm rounded-2xl overflow-hidden 
               border border-white/20 bg-black/25 backdrop-blur-lg
               transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
  >
    {/* Container da Imagem: Cor de fundo customizada */}
    <div
      className={`relative w-full h-52 flex items-center justify-center ${project.imagePadding}`}
      style={{ backgroundColor: project.bgColor }}
    >
      <Image
        src={project.image}
        alt={`Imagem do projeto ${project.title}`}
        width={250}
        height={180}
        className="object-contain max-h-full max-w-full"
      />
    </div>

    {/* Container do Conteúdo */}
    <div className="p-6 flex flex-col text-white">
      <h4 className="text-lg font-bold mb-2 truncate" title={project.title}>{project.title}</h4>
      
      {/* Conteúdo que aparece no hover */}
      <div className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-96">
        <p className="text-gray-300 mb-4 text-sm h-20">{project.description}</p>
        
        {/* Botões com novo estilo */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/20">
          <Link href={project.repoUrl} target="_blank" className="flex items-center gap-2 px-3 py-1.5 border-2 border-transparent rounded-lg text-gray-300 hover:text-white hover:border-white/50 transition-colors text-sm">
            <FaGithub />
            <span>Repositório</span>
          </Link>
          {project.deployUrl && (
            <Link href={project.deployUrl} target="_blank" className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border-2 border-transparent rounded-lg text-white hover:bg-white/20 transition-colors text-sm">
              <FaExternalLinkAlt />
              <span>Ver Deploy</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);


// Componente principal da seção
export default function Projects() {
  const backendProjects = projectsData.filter(p => p.category === 'Backend');
  const frontendProjects = projectsData.filter(p => p.category === 'Frontend');

  return (
    <section 
      id="projetos" 
      className="relative py-24 bg-cover bg-center" // O fundo com imagem que você já tinha
      style={{ backgroundImage: "url('/IMGS/SARAIVA (1).jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      <div className="relative container mx-auto px-6 z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-4">MEUS PROJETOS</h2>
        <p className="text-lg text-center text-gray-400 mb-16">Explore alguns dos trabalhos que desenvolvi.</p>

        {/* Seção Backend */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-blue-400 mb-8">Projetos Backend</h3>
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {backendProjects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Seção Frontend */}
        <div>
          <h3 className="text-3xl font-semibold text-center text-blue-400 mb-8">Projetos Frontend</h3>
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {frontendProjects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}