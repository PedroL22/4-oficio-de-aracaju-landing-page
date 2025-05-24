import Image from 'next/image'
import Link from 'next/link'

import { MobileNav } from './MobileNav'

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex w-full justify-center border-b bg-white'>
      <div className='flex h-16 w-full max-w-[1280px] items-center justify-between px-4 md:px-6'>
        <Link href='/' className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='4º Ofício de Registro Civil e Notas de Aracaju/SE'
            width={180}
            height={40}
            className='h-10 w-auto'
          />

          <p className='font-bold text-[#8B0000] text-sm lg:text-lg'>4º Ofício de Registro Civil e Notas</p>
        </Link>

        <nav className='hidden gap-6 md:flex'>
          <Link href='/' className='font-medium text-sm underline-offset-4 hover:underline'>
            Início
          </Link>

          <Link href='registro-civil' className='font-medium text-sm underline-offset-4'>
            Registro Civil
          </Link>

          <Link href='tabelionato' className='font-medium text-sm underline-offset-4'>
            Tabelionato de Notas
          </Link>

          <Link href='contato' className='font-medium text-sm underline-offset-4'>
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
  )
}
