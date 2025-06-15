'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Estudante', 'Desenvolvedor'],
      typeSpeed: 60,
      backSpeed: 70,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="/bg_animado/pexels-pressmaster-3129957-1280x720-25fps.mp4"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">
          Seja Muito Bem-vindo!!!
        </h1>
        <div className="text-2xl md:text-3xl mt-4 uppercase">
          Meu nome é Vinicius e sou{' '}
          <span ref={el} className="text-gray-400 font-bold" />
        </div>
        <Link
          href="#sobre"
          className="mt-8 px-8 py-4 border-2 border-white rounded-lg uppercase font-semibold transition-all duration-300 hover:bg-white hover:text-black"
        >
          Saiba mais sobre mim
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#tec">
          <FaChevronDown className="text-white text-3xl animate-bounce" />
        </Link>
      </div>
    </div>
  )
}
