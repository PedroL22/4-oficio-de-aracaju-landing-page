import Image from 'next/image'
import Link from 'next/link'

import { Button } from '~/components/ui/button'

export const HeroSection = () => {
  return (
    <section className='flex w-full justify-center bg-gradient-to-b from-white to-zinc-50 py-12 md:py-24 lg:py-32'>
      <div className='w-full max-w-[1280px] px-4 md:px-6'>
        <div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-12'>
          <div className='space-y-4'>
            <h1 className='font-bold text-3xl text-[#8B0000] tracking-tighter sm:text-4xl md:text-5xl'>
              4º Ofício de Registro Civil e Notas de Aracaju/SE
            </h1>

            <p className='max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Serviços de Registro Civil e Tabelionato de Notas com atendimento ágil e de qualidade para a população de
              Aracaju.
            </p>

            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='#registro-civil'>
                <Button className='bg-[#8B0000] hover:bg-[#6B0000]'>Registro Civil</Button>
              </Link>

              <Link href='#tabelionato'>
                <Button variant='outline' className='border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000]/10'>
                  Tabelionato de Notas
                </Button>
              </Link>
            </div>
          </div>

          <div className='mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-xl'>
            <Image
              src='/placeholder.svg?height=500&width=800'
              width={800}
              height={500}
              alt='Fachada do 4º Ofício de Registro Civil e Notas de Aracaju/SE'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
