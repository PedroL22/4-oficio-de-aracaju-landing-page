import Link from 'next/link'

import { Clock, Link as LinkIcon, Mail, MapPin, Phone } from 'lucide-react'

export const Footer = () => {
  return (
    <footer id='contato' className='flex w-full justify-center border-t bg-zinc-50 py-6 md:py-12'>
      <div className='max-w-[1280px] px-4 md:px-6'>
        <div className='grid gap-8 lg:grid-cols-3'>
          <div className='space-y-4'>
            <span className='font-medium text-[#8B0000] text-lg'>4º Ofício de Registro Civil e Notas</span>

            <p className='text-sm text-zinc-500'>
              Serventia Extrajudicial de Registro Civil das Pessoas Naturais e Tabelionato de Notas da Comarca de
              Aracaju, Estado de Sergipe.
            </p>
          </div>

          <div className='space-y-4'>
            <span className='font-medium text-[#8B0000] text-lg'>Contato</span>

            <ul className='space-y-2 text-sm text-zinc-500'>
              <li className='flex items-start gap-2'>
                <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-[#8B0000]' />
                <span>Av. Exemplo, 1234, Centro, Aracaju/SE - CEP 49000-000</span>
              </li>

              <li className='flex items-center gap-2'>
                <Phone className='h-5 w-5 text-[#8B0000]' />
                <span>(79) 3000-0000</span>
              </li>

              <li className='flex items-center gap-2'>
                <Mail className='h-5 w-5 text-[#8B0000]' />
                <span>contato@4oficio.com.br</span>
              </li>

              <li className='flex items-center gap-2'>
                <Clock className='h-5 w-5 text-[#8B0000]' />
                <span>Segunda a Sexta: 8h às 17h</span>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <span className='font-medium text-[#8B0000] text-lg'>Links Úteis</span>

            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='https://www.registrocivil.org.br/'
                  target='_blank'
                  className='flex items-center gap-1 text-zinc-500 hover:text-[#8B0000]'
                >
                  <LinkIcon className='size-4' />
                  <span>CRC Nacional</span>
                </Link>
              </li>

              <li>
                <Link
                  href='https://www.e-notariado.org.br/'
                  target='_blank'
                  className='flex items-center gap-1 text-zinc-500 hover:text-[#8B0000]'
                >
                  <LinkIcon className='size-4' />
                  <span>E-Notariado</span>
                </Link>
              </li>

              <li>
                <Link
                  href='https://www.tjse.jus.br/'
                  target='_blank'
                  className='flex items-center gap-1 text-zinc-500 hover:text-[#8B0000]'
                >
                  <LinkIcon className='size-4' />
                  <span>Tribunal de Justiça de Sergipe</span>
                </Link>
              </li>

              <li>
                <Link
                  href='https://www.cnj.jus.br/'
                  target='_blank'
                  className='flex items-center gap-1 text-zinc-500 hover:text-[#8B0000]'
                >
                  <LinkIcon className='size-4' />
                  <span>Conselho Nacional de Justiça</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t pt-6'>
          <p className='text-center text-xs text-zinc-500'>
            © {new Date().getFullYear()} 4º Ofício de Registro Civil e Notas de Aracaju/SE. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
