export const metadata = {
  title: 'Tabelionato de Notas - 4º Ofício de Aracaju',
  description:
    'Serviços de tabelionato incluindo escrituras públicas, procurações, reconhecimento de firma, autenticações e apostilamento de Haia no 4º Ofício de Registro Civil de Aracaju/SE.',
  openGraph: {
    title: 'Tabelionato de Notas - 4º Ofício de Aracaju',
    description:
      'Serviços de tabelionato incluindo escrituras públicas, procurações, reconhecimento de firma, autenticações e apostilamento de Haia no 4º Ofício de Registro Civil de Aracaju/SE.',
    images: ['/logotype.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabelionato de Notas - 4º Ofício de Aracaju',
    description:
      'Serviços de tabelionato incluindo escrituras públicas, procurações, reconhecimento de firma, autenticações e apostilamento de Haia no 4º Ofício de Registro Civil de Aracaju/SE.',
    images: ['/logotype.png'],
  },
}

export default function Tabelionato() {
  return (
    <main className='mx-auto flex min-h-screen flex-1 flex-col'>
      <div className='flex w-full flex-col items-center py-12'>
        <section className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
          <div className='mb-12'>
            <h1 className='mb-4 font-bold text-3xl text-[#8B0000]'>Tabelionato de Notas</h1>

            <p className='text-lg text-zinc-500'>
              Serviços relacionados a escrituras públicas, procurações, reconhecimento de firma, autenticações e
              apostilamento de documentos para uso internacional.
            </p>
          </div>

          <div className='rounded-lg border bg-white p-6 shadow-sm'>
            <div className='mb-6'>
              <h2 className='mb-2 font-semibold text-[#8B0000] text-xl'>🌍 Apostilamento de Haia</h2>
              <p className='text-zinc-600'>
                Garante que documentos públicos brasileiros tenham validade legal em outros países membros da Convenção
                de Haia.
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <h3 className='mb-3 font-medium text-[#8B0000]'>📌 Para que serve?</h3>
                <p className='text-sm text-zinc-600'>
                  Garante que documentos públicos brasileiros tenham validade legal em outros países, membros da
                  Convenção de Haia.
                </p>
              </div>

              <div>
                <h3 className='mb-3 font-medium text-[#8B0000]'>📌 O que pode ser apostilado?</h3>
                <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                  <li>Certidões (nascimento, casamento, óbito)</li>
                  <li>Escrituras</li>
                  <li>Diplomas e históricos escolares</li>
                  <li>Documentos oficiais diversos</li>
                </ul>
              </div>

              <div>
                <h3 className='mb-3 font-medium text-[#8B0000]'>📌 Vantagens</h3>
                <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                  <li>Evita legalizações consulares demoradas</li>
                  <li>Reduz custos com burocracia internacional</li>
                  <li>O documento apostilado já é aceito diretamente no exterior</li>
                </ul>
              </div>

              <div>
                <h3 className='mb-3 font-medium text-[#8B0000]'>📌 Como fazer?</h3>
                <p className='text-sm text-zinc-600'>
                  Compareça ao cartório com o documento original e solicite o Apostilamento de Haia. O procedimento é
                  rápido e feito no próprio cartório.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
