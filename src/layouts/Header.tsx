import Image from 'next/image'
import Link from 'next/link'

import { MobileNav } from './MobileNav'

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex w-full justify-center border-b bg-white'>
      <div className='flex h-16 w-full max-w-[1280px] items-center justify-between px-4 md:px-6'>
        <Link href='/' prefetch className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='4º Ofício de Registro Civil e Notas de Aracaju/SE'
            width={180}
            height={40}
            priority
            className='h-10 w-auto'
          />

          <p className='font-bold text-[#8B0000] text-sm lg:text-lg'>4º Ofício de Registro Civil e Notas</p>
        </Link>

        <nav className='hidden gap-6 md:flex'>
          <Link
            href='/'
            prefetch
            className='relative font-medium text-sm after:absolute after:top-7 after:left-1/2 after:h-[1px] after:w-0 after:bg-[#8B0000] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:left-[13%] hover:after:w-3/4'
          >
            Início
          </Link>

          <Link
            href='/registro-civil'
            prefetch
            className='relative font-medium text-sm after:absolute after:top-7 after:left-1/2 after:h-[1px] after:w-0 after:bg-[#8B0000] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:left-[13%] hover:after:w-3/4'
          >
            Registro Civil
          </Link>

          <Link
            href='/tabelionato'
            prefetch
            className='relative font-medium text-sm after:absolute after:top-7 after:left-1/2 after:h-[1px] after:w-0 after:bg-[#8B0000] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:left-[13%] hover:after:w-3/4'
          >
            Tabelionato de Notas
          </Link>

          <Link
            href='/contato'
            prefetch
            className='relative font-medium text-sm after:absolute after:top-7 after:left-1/2 after:h-[1px] after:w-0 after:bg-[#8B0000] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:left-[13%] hover:after:w-3/4'
          >
            Contato
          </Link>

          <Link
            href='https://www.registrocivil.org.br/'
            target='_blank'
            className='relative font-medium text-sm after:absolute after:top-7 after:left-1/2 after:h-[1px] after:w-0 after:bg-[#8B0000] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:left-[13%] hover:after:w-3/4'
          >
            CRC Nacional
          </Link>

          <Link
            href='https://www.e-notariado.org.br/'
            target='_blank'
            className='relative font-medium text-sm after:absolute after:top-7 after:left-1/2 after:h-[1px] after:w-0 after:bg-[#8B0000] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:left-[13%] hover:after:w-3/4'
          >
            E-Notariado
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}
