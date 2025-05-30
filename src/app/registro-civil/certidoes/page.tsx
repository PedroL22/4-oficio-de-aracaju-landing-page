export const metadata = {
  title: 'Certidões (2ª via, Inteiro Teor e Gratuidade) - 4º Ofício de Aracaju',
  description:
    'Solicite 2ª via de certidões de nascimento, casamento ou óbito. Atendimento presencial ou online via CRC Nacional. Certidões gratuitas para quem comprovar hipossuficiência.',
  openGraph: {
    title: 'Certidões (2ª via, Inteiro Teor e Gratuidade) - 4º Ofício de Aracaju',
    description:
      'Solicite 2ª via de certidões de nascimento, casamento ou óbito. Atendimento presencial ou online via CRC Nacional. Certidões gratuitas para quem comprovar hipossuficiência.',
    images: ['/logotype.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certidões (2ª via, Inteiro Teor e Gratuidade) - 4º Ofício de Aracaju',
    description:
      'Solicite 2ª via de certidões de nascimento, casamento ou óbito. Atendimento presencial ou online via CRC Nacional. Certidões gratuitas para quem comprovar hipossuficiência.',
    images: ['/logotype.png'],
  },
}

export default function Certidoes() {
  return (
    <main className='mx-auto flex min-h-screen flex-1 flex-col'>
      <div className='flex w-full flex-col items-center py-12'>
        <section className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
          <div className='mb-12'>
            <h1 className='mb-4 font-bold text-3xl text-[#8B0000]'>📄 Certidões (2ª via, Inteiro Teor e Gratuidade)</h1>

            <p className='text-lg text-zinc-500'>
              Solicite aqui a 2ª via da sua certidão de nascimento, casamento ou óbito. Você pode pedir a certidão
              presencialmente no cartório ou online via CRC Nacional. Algumas situações permitem gratuidade, mediante
              comprovação de hipossuficiência.
            </p>
          </div>

          <div className='space-y-12'>
            <div className='grid gap-8 md:grid-cols-3'>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='mb-6'>
                  <p className='mb-2 font-semibold text-[#8B0000] text-xl'>📋 2ª Via de Certidão (Comum)</p>
                  <p className='text-zinc-600'>Obtenha uma nova via da sua certidão registrada neste cartório.</p>
                </div>

                <div className='space-y-4'>
                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>💰 Valor</p>
                    <p className='text-sm text-zinc-600'>R$ 71,65</p>
                  </div>

                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>⏰ Entrega</p>
                    <p className='text-sm text-zinc-600'>Mesmo dia (via simples)</p>
                  </div>

                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>📝 Como solicitar</p>

                    <ul className='space-y-1 text-sm text-zinc-600'>
                      <li>
                        ✅ <strong>Presencial:</strong> compareça com RG ou a certidão antiga
                      </li>
                      <li>
                        ✅ <strong>Online:</strong> via CRC Nacional
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='mb-6'>
                  <h2 className='mb-2 font-semibold text-[#8B0000] text-xl'>📝 Certidão com Averbação</h2>

                  <p className='text-zinc-600'>
                    Para certidões que contêm atualizações como divórcio ou alterações de nome.
                  </p>
                </div>

                <div className='space-y-4'>
                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>💰 Valor</p>
                    <p className='text-sm text-zinc-600'>R$ 71,65 + R$ 57,34 = R$ 129,99</p>
                  </div>

                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>⏰ Prazo</p>
                    <p className='text-sm text-zinc-600'>Até 5 dias úteis</p>
                  </div>

                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>📝 Como solicitar</p>

                    <ul className='space-y-1 text-sm text-zinc-600'>
                      <li>• Mesmo processo da certidão comum</li>
                      <li>• Informar que deseja a versão com averbação</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='mb-6'>
                  <h3 className='mb-2 font-semibold text-[#8B0000] text-xl'>📄 Certidão de Inteiro Teor</h3>

                  <p className='text-zinc-600'>Cópia fiel de todo o conteúdo do registro.</p>
                </div>

                <div className='space-y-4'>
                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>👥 Pode ser solicitada por</p>

                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>O próprio registrado</li>
                      <li>Pais (se menor)</li>
                      <li>Filhos (se falecido)</li>
                      <li>Advogado com procuração</li>
                    </ul>
                  </div>

                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>🎯 Finalidade</p>
                    <p className='text-sm text-zinc-600'>Processos, mudança de nome, etc.</p>
                  </div>

                  <div>
                    <p className='mb-2 font-medium text-[#8B0000]'>📦 Entrega</p>
                    <p className='text-sm text-zinc-600'>Presencial ou online via CRC</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid gap-8 md:grid-cols-2'>
              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='mb-6'>
                  <h4 className='mb-2 font-semibold text-[#8B0000] text-xl'>💸 Gratuidade</h4>

                  <p className='text-zinc-600'>Certidões gratuitas para quem comprovar hipossuficiência.</p>
                </div>

                <div className='grid gap-6 md:grid-cols-2'>
                  <div>
                    <p className='mb-3 font-medium text-[#8B0000]'>📋 Requisitos</p>

                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Certidão de nascimento/casamento</li>
                      <li>Declaração de hipossuficiência (CRAS ou Defensoria)</li>
                      <li>RG ou CNH</li>
                      <li>Comprovante de residência</li>
                    </ul>
                  </div>

                  <div>
                    <p className='mb-3 font-medium text-[#8B0000]'>⚠️ Importante</p>

                    <ul className='space-y-1 text-sm text-zinc-600'>
                      <li>✅ Deve ser solicitado presencialmente</li>
                      <li>❌ Não é possível pedir online</li>
                      <li>❌ O CRC Nacional não concede gratuidade</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='rounded-lg border bg-white p-6 shadow-sm'>
                <div className='mb-6'>
                  <h5 className='mb-2 font-semibold text-[#8B0000] text-xl'>🚀 Como Fazer o Pedido</h5>

                  <p className='text-zinc-600'>Duas formas de solicitar suas certidões.</p>
                </div>

                <div className='grid gap-6 md:grid-cols-2'>
                  <div>
                    <p className='mb-3 font-medium text-[#8B0000]'>🟩 Presencial</p>

                    <ul className='space-y-2 text-sm text-zinc-600'>
                      <li>• Compareça ao cartório com RG ou certidão antiga</li>
                      <li>
                        • <strong>Endereço:</strong> Av. Ministro Geraldo Barreto Sobral, 200 – Jardins, Aracaju/SE
                      </li>
                      <li>
                        • <strong>Atendimento:</strong> Segunda a sexta, das 08h às 17h (sem pausa para almoço)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className='mb-3 font-medium text-[#8B0000]'>🟦 Online</p>

                    <ul className='space-y-2 text-sm text-zinc-600'>
                      <li>• Acesse: https://registrocivil.org.br/</li>
                      <li>• Preencha os dados da certidão desejada</li>
                      <li>• Caso precise de ajuda com livro, folha e termo: baixar o PDF 👉 tutorial-crc.pdf</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid gap-4 md:grid-cols-3'>
              <a
                href='/docs/tutorial-crc.pdf'
                target='_blank'
                rel='noreferrer noopener'
                className='flex items-center justify-center gap-2 rounded-lg bg-[#8B0000] px-6 py-3 text-white transition-colors hover:bg-[#6B0000]'
              >
                📎 Baixar Tutorial CRC
              </a>

              <a
                href='https://registrocivil.org.br/'
                target='_blank'
                rel='noreferrer noopener'
                className='flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700'
              >
                📤 Solicitar pelo CRC Nacional
              </a>

              <a
                href='mailto:registrocivil@cartorio4oficioaju.com.br'
                className='flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700'
              >
                📧 Solicitar por e-mail
              </a>
            </div>

            <div className='rounded-lg border border-amber-200 bg-amber-50 p-6'>
              <div className='flex items-start gap-3'>
                <span className='text-amber-600 text-xl'>⚠️</span>

                <div>
                  <p className='mb-2 font-medium text-amber-800'>Atenção</p>

                  <p className='text-amber-700 text-sm'>
                    Para saber se o registro está neste cartório, é necessário solicitar uma busca formal por e-mail. O
                    assistente não pode garantir se o registro está neste acervo.
                  </p>
                </div>
              </div>
            </div>

            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='mb-6'>
                <p className='mb-2 font-semibold text-[#8B0000] text-xl'>❓ Perguntas Frequentes</p>
              </div>

              <div className='space-y-6'>
                <div>
                  <p className='mb-2 font-medium text-[#8B0000]'>Quais documentos são aceitos para pedir 2ª via?</p>
                  <p className='text-sm text-zinc-600'>
                    RG original ou certidão antiga. CNH, passaporte e outros documentos não são aceitos.
                  </p>
                </div>

                <div>
                  <p className='mb-2 font-medium text-[#8B0000]'>Posso pedir pelo WhatsApp?</p>
                  <p className='text-sm text-zinc-600'>Não. Apenas presencialmente ou pelo site da CRC Nacional.</p>
                </div>

                <div>
                  <p className='mb-2 font-medium text-[#8B0000]'>Quanto tempo leva para ficar pronta?</p>
                  <p className='text-sm text-zinc-600'>Certidão comum: mesmo dia. Com averbação: até 5 dias úteis.</p>
                </div>

                <div>
                  <p className='mb-2 font-medium text-[#8B0000]'>Quem pode pedir a certidão?</p>
                  <p className='text-sm text-zinc-600'>Qualquer pessoa com os dados corretos do registrado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
