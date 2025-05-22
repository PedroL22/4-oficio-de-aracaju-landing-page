import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '~/layout/Footer'
import { MobileNav } from '~/layout/MobileNav'
import { FAQSection } from './components/FAQSection'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-white'>
        <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/logo.png'
              alt='4º Ofício de Registro Civil e Notas de Aracaju/SE'
              width={180}
              height={40}
              className='h-10 w-auto'
            />
          </Link>

          <nav className='hidden gap-6 md:flex'>
            <Link href='/' className='font-medium text-sm underline-offset-4 hover:underline'>
              Início
            </Link>

            <Link href='#registro-civil' className='font-medium text-sm underline-offset-4'>
              Registro Civil
            </Link>

            <Link href='#tabelionato' className='font-medium text-sm underline-offset-4'>
              Tabelionato de Notas
            </Link>

            <Link href='#contato' className='font-medium text-sm underline-offset-4'>
              Contato
            </Link>

            <Link
              href='https://www.registrocivil.org.br/'
              target='_blank'
              className='font-medium text-sm underline-offset-4'
            >
              CRC Nacional
            </Link>

            <Link
              href='https://www.e-notariado.org.br/'
              target='_blank'
              className='font-medium text-sm underline-offset-4'
            >
              E-Notariado
            </Link>
          </nav>

          <MobileNav />
        </div>
      </header>

      <main className='flex-1'>
        <HeroSection />
        <ServicesSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}
