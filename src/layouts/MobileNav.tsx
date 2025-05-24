import Link from 'next/link'

import { ExternalLink } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog'

export const MobileNav = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='icon' className='md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-6 w-6'
          >
            <title>Menu</title>
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
          </svg>
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Menu</DialogTitle>
        </DialogHeader>

        <nav className='flex flex-col gap-4 py-4'>
          <Link href='/' prefetch className='font-medium text-sm underline-offset-4 hover:underline'>
            Início
          </Link>

          <Link href='registro-civil' prefetch className='font-medium text-sm underline-offset-4 hover:underline'>
            Registro Civil
          </Link>

          <Link href='tabelionato' prefetch className='font-medium text-sm underline-offset-4 hover:underline'>
            Tabelionato de Notas
          </Link>

          <Link href='contato' prefetch className='font-medium text-sm underline-offset-4 hover:underline'>
            Contato
          </Link>

          <Link
            href='https://www.registrocivil.org.br/'
            target='_blank'
            className='flex items-center gap-2 font-medium text-sm underline-offset-4 hover:underline'
          >
            CRC Nacional <ExternalLink className='h-4 w-4' />
          </Link>

          <Link
            href='https://www.e-notariado.org.br/'
            target='_blank'
            className='flex items-center gap-2 font-medium text-sm underline-offset-4 hover:underline'
          >
            E-Notariado <ExternalLink className='h-4 w-4' />
          </Link>
        </nav>
      </DialogContent>
    </Dialog>
  )
}
