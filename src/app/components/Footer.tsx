// app/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

// O componente de Logo continua o mesmo
const Logo = ({ className }: { className?: string }) => ( <svg width="32.25" height="45.25" viewBox="0 0 129 181" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}> <path d="M105 127.5L3 73.5L26.5 55L126 106.5L105 127.5Z" fill="#666666" /> <path d="M66 34V0L129 42V74L66 34Z" fill="#333" /> <path d="M66 34L66 0L3 42L3 74L66 34Z" fill="#444" /> <path d="M63.2287 146.361L63.4241 180.361L0.183792 138.724L-7.14483e-05 106.724L63.2287 146.361Z" fill="#555" /> <path d="M63.2287 146.361L63.4241 180.361L126.182 138L125.998 106L63.2287 146.361Z" fill="#222" /> </svg> );

// O componente de SocialLinks continua o mesmo
const SocialLinks = () => ( <div className="flex items-center gap-6"> <a href="https://www.linkedin.com/in/vinicius-saraiva-55255a199/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"> <Image src="/IMGS/linkedin.svg" alt="Icone Linkedin" width={24} height={24} className="filter invert" /> </a> <a href="https://github.com/ViniciusSPDP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"> <Image src="/IMGS/github.svg" alt="Icone Github" width={24} height={24} className="filter invert" /> </a> <a href="https://www.youtube.com/@seu-canal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"> <Image src="/IMGS/youtube.svg" alt="Icone Youtube" width={24} height={24} className="filter invert" /> </a> </div> );

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 pt-16 pb-8">
        
        {/* --- SEÇÃO SUPERIOR: Logo e Links --- */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Coluna da Marca */}
          <div className="max-w-sm text-center md:text-left">
            <Link href="#header" className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Logo />
                {/* Removi o itálico para um look mais limpo */}
                <p className="text-2xl font-semibold text-white">SARAIVA</p>
            </Link>
            <p className="text-gray-500">
              Desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
            </p>
          </div>

          {/* Coluna do Sitemap */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="#header" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="#tec" className="hover:text-white transition-colors">Tecnologias</Link></li>
              <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link href="#projetos" className="hover:text-white transition-colors">Projetos</Link></li>
              <li><Link href="#contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        {/* --- BARRA INFERIOR: Copyright e Redes Sociais --- */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col-reverse sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 mt-4 sm:mt-0">
            © {currentYear} Vinicius Saraiva. Todos os direitos reservados.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}