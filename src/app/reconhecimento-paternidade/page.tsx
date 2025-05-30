export const metadata = {
  title: 'Reconhecimento de Paternidade - 4º Ofício de Aracaju',
  description:
    'Reconhecimento de paternidade biológica e socioafetiva no 4º Ofício de Registro Civil de Aracaju/SE. Procedimento rápido e seguro para inclusão do nome do pai na certidão de nascimento.',
  openGraph: {
    title: 'Reconhecimento de Paternidade - 4º Ofício de Aracaju',
    description:
      'Reconhecimento de paternidade biológica e socioafetiva no 4º Ofício de Registro Civil de Aracaju/SE. Procedimento rápido e seguro para inclusão do nome do pai na certidão de nascimento.',
    images: ['/logotype.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reconhecimento de Paternidade - 4º Ofício de Aracaju',
    description:
      'Reconhecimento de paternidade biológica e socioafetiva no 4º Ofício de Registro Civil de Aracaju/SE. Procedimento rápido e seguro para inclusão do nome do pai na certidão de nascimento.',
    images: ['/logotype.png'],
  },
}

export default function ReconhecimentoPaternidade() {
  return (
    <main className='mx-auto flex min-h-screen flex-1 flex-col'>
      <div className='flex w-full flex-col items-center py-12'>
        <section className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
          <div className='mb-12'>
            <h1 className='mb-4 font-bold text-3xl text-[#8B0000]'>🧾 Reconhecimento de Paternidade</h1>

            <p className='text-lg text-zinc-500'>
              Procedimento para reconhecimento oficial da paternidade quando o pai biológico não participou do registro
              de nascimento ou para reconhecimento de filiação socioafetiva.
            </p>
          </div>

          <div className='rounded-lg border bg-white p-6 shadow-sm'>
            <div className='mb-6'>
              <h2 className='mb-2 font-semibold text-[#8B0000] text-xl'>❓ O que é o Reconhecimento de Paternidade?</h2>

              <p className='text-zinc-600'>
                Ato jurídico que estabelece oficialmente o vínculo paterno-filial, seja por laços biológicos ou
                socioafetivos.
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <h3 className='mb-3 font-medium text-[#8B0000]'>📌 Quando é necessário?</h3>

                <p className='text-sm text-zinc-600'>
                  Quando o pai biológico não participou do registro de nascimento do filho e deseja reconhecer
                  oficialmente a paternidade em momento posterior.
                </p>
              </div>

              <div>
                <h4 className='mb-3 font-medium text-[#8B0000]'>📌 Como funciona?</h4>

                <div className='space-y-2 text-sm text-zinc-600'>
                  <p>
                    O pai deve comparecer a um cartório e solicitar escritura pública de reconhecimento de paternidade.
                  </p>
                  <p>Este ato pode ser realizado em qualquer cartório do Brasil.</p>
                </div>
              </div>

              <div>
                <h5 className='mb-3 font-medium text-[#8B0000]'>📌 E depois?</h5>

                <p className='text-sm text-zinc-600'>
                  Após o reconhecimento, o nome do pai será incluído na certidão de nascimento do filho, com validade
                  legal.
                </p>
              </div>

              <div>
                <h6 className='mb-3 font-medium text-[#8B0000]'>📌 E se não houver vínculo biológico?</h6>

                <p className='text-sm text-zinc-600'>
                  Também é possível o reconhecimento de filiação socioafetiva, ou seja, o reconhecimento de alguém com
                  quem há vínculo de afeto, mesmo sem relação sanguínea.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
