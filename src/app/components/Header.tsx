// app/components/Header.tsx
'use client';

import { useState, useEffect, useRef } from 'react'; // 1. Importar o useRef
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

// Componentes Logo, NavLinks, e SocialLinks continuam os mesmos
const Logo = ({ className }: { className?: string }) => ( <svg width="32.25" height="45.25" viewBox="0 0 129 181" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}> <path d="M105 127.5L3 73.5L26.5 55L126 106.5L105 127.5Z" fill="#666666" /> <path d="M66 34V0L129 42V74L66 34Z" fill="#333" /> <path d="M66 34L66 0L3 42L3 74L66 34Z" fill="#444" /> <path d="M63.2287 146.361L63.4241 180.361L0.183792 138.724L-7.14483e-05 106.724L63.2287 146.361Z" fill="#555" /> <path d="M63.2287 146.361L63.4241 180.361L126.182 138L125.998 106L63.2287 146.361Z" fill="#222" /> </svg> );
const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => ( <> <Link href="#header" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors">Inicio</Link> <Link href="#tec" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors">Tecnologia</Link> <Link href="#sobre" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors">Sobre</Link> <Link href="#projetos" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors">Projetos</Link> <Link href="#contato" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors">Contato</Link> </> );
const SocialLinks = () => ( <div className="flex items-center gap-6"> <a href="https://www.linkedin.com/in/vinicius-saraiva-55255a199/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity"> <Image src="/IMGS/linkedin.svg" alt="Icone Linkedin" width={24} height={24} /> </a> <a href="https://github.com/ViniciusSPDP" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity"> <Image src="/IMGS/github.svg" alt="Icone Github" width={24} height={24} /> </a> <a href="https://www.youtube.com/@s4r41v4" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity"> <Image src="/IMGS/youtube.svg" alt="Icone Youtube" width={24} height={24} /> </a> </div> );


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Criar uma referência para o painel do menu
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // 3. Efeito para detectar cliques fora do menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Se o menu estiver aberto e o clique não for dentro do ref do menu
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    // Adiciona o listener somente quando o menu está aberto
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    // Remove o listener ao limpar o efeito
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
    <header id="header" className="relative h-screen">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
              <Link href="#header" className="flex items-center gap-3 z-50" onClick={() => setIsMenuOpen(false)}>
                  <Logo />
                  <p className="text-xl font-semibold text-white">SARAIVA</p>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                  <NavLinks />
              </div>
              <div className="hidden md:flex items-center gap-6">
                <SocialLinks />
              </div>

              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl z-50">
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
          </div>
      </nav>

      {/* Painel do Menu Móvel com as alterações */}
      <div 
        ref={menuRef} // 4. Anexar a referência ao painel
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm 
                   bg-black/90 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-40
                   ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl"> {/* Fonte diminuída */}
          <NavLinks onLinkClick={() => setIsMenuOpen(false)} />
          <div className="absolute bottom-16">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}