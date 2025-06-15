// app/HomePage.tsx

'use client'; // <-- PASSO MAIS IMPORTANTE!

import dynamic from 'next/dynamic';
import Header from './components/Header';
import Technologies from './components/Technologies';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// A importação dinâmica agora está dentro de um Componente de Cliente, o que é permitido.
const Hero = dynamic(() => import('./components/Hero'), {
  ssr: false, 
});

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}