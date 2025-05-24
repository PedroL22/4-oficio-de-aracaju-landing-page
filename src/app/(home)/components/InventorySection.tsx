import Image from 'next/image'
import Link from 'next/link'

export function InventorySection() {
  return (
    <section id='inventario' className='flex w-full justify-center py-12 md:py-24 lg:py-32'>
      <div className='w-full max-w-[1280px] px-4 md:px-6'>
        <div className='mb-8'>
          <h2 className='mb-2 font-bold text-3xl text-[#8B0000]'>Inventário e Partilha Extrajudiciais</h2>

          <p className='text-zinc-500 md:text-xl'>
            As pessoas maiores e capazes podem fazer o inventário e partilha de bens por escritura pública. O inventário
            e a partilha servem para transferir a herança da pessoa falecida, dividindo de maneira justa o patrimônio
            deixado para seus herdeiros e eventual cônjuge ou companheiro.
          </p>
        </div>

        <div className='mb-12 flex flex-col gap-8 md:flex-row'>
          <Image
            src='/inventory-comfort.jpg'
            alt='Pessoas se consolando durante processo de inventário'
            width={500}
            height={300}
            className='rounded-lg'
          />
          <Image
            src='/inventory-document.jpg'
            alt='Pessoa analisando documentos de inventário'
            width={500}
            height={300}
            className='rounded-lg'
          />
        </div>

        <div className='space-y-8'>
          <div>
            <h3 className='font-medium text-lg'>O que é inventário e partilha?</h3>
            <p className='text-sm text-zinc-500'>
              O inventário é o documento com a apuração do patrimônio deixado pela pessoa falecida. Já a partilha é
              feita a partir do inventário e consiste na divisão do patrimônio relatado para filhos e cônjuge ou
              companheiro.
            </p>
          </div>

          <div>
            <h3 className='font-medium text-lg'>O que é preciso para fazer um inventário e a partilha?</h3>
            <p className='text-sm text-zinc-500'>
              Com o falecimento de uma pessoa que tenha ou não deixado bens, os herdeiros capazes, maiores de idade e
              que estejam de acordo quanto à divisão dos bens, podem providenciar o ato.
            </p>
          </div>

          <div>
            <h3 className='font-medium text-lg'>Quem deve comparecer?</h3>
            <p className='text-sm text-zinc-500'>
              Herdeiros e cônjuge ou companheiro vivo (se houver), acompanhados de seu advogado.
            </p>
          </div>

          <div>
            <h3 className='font-medium text-lg'>O que é nomeação de inventariante?</h3>
            <p className='text-sm text-zinc-500'>
              Antes de providenciar o inventário é possível eleger uma pessoa para representar o espólio, com poderes de
              inventariante, perante as repartições públicas, bem como para cumprimento de obrigações deixadas pelo
              falecido.
            </p>
          </div>
        </div>

        <div className='mt-8'>
          <Link
            href='/documents/lista-de-documentos.pdf'
            target='_blank'
            className='inline-flex items-center gap-2 text-[#8B0000] transition-colors hover:text-[#8B0000]/80'
          >
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
            >
              <title>Lista de Documentos</title>
              <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
              <polyline points='14 2 14 8 20 8' />
              <line x1='16' y1='13' x2='8' y2='13' />
              <line x1='16' y1='17' x2='8' y2='17' />
              <line x1='10' y1='9' x2='8' y2='9' />
            </svg>
            LISTA DE DOCUMENTOS
          </Link>
        </div>
      </div>
    </section>
  )
}
