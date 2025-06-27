import { ServiceItem } from '~/components/ServiceItem'
import { SimpleServiceItem } from '~/components/SimpleServiceItem'
import { Accordion } from '~/components/ui/accordion'

export const metadata = {
  title: 'FAQ - CRC Nacional - 4º Ofício de Aracaju',
  description:
    'Saiba como solicitar certidões online pelo CRC Nacional, acompanhar pedidos e esclarecer dúvidas frequentes sobre a plataforma da ARPEN Brasil.',
  openGraph: {
    title: 'FAQ - CRC Nacional - 4º Ofício de Aracaju',
    description:
      'Saiba como solicitar certidões online pelo CRC Nacional, acompanhar pedidos e esclarecer dúvidas frequentes sobre a plataforma da ARPEN Brasil.',
    images: ['/logotype.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - CRC Nacional - 4º Ofício de Aracaju',
    description:
      'Saiba como solicitar certidões online pelo CRC Nacional, acompanhar pedidos e esclarecer dúvidas frequentes sobre a plataforma da ARPEN Brasil.',
    images: ['/logotype.png'],
  },
}

export default function FAQCRCNacional() {
  return (
    <main className='mx-auto flex flex-1 flex-col'>
      <div className='flex w-full flex-col items-center py-12'>
        <section className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
          <div className='mb-12 flex min-h-[40vh] flex-col justify-center rounded-lg border bg-white p-8 shadow-sm'>
            <h1 className='mb-4 font-bold text-4xl text-[#8B0000]'>FAQ — CRC Nacional</h1>

            <p className='mb-6 text-xl text-zinc-600'>Entenda, baixe o tutorial e resolva em minutos</p>

            <div className='mb-8'>
              <a
                href='/docs/tutorial-crc.pdf'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-[#8B0000] px-6 py-3 font-medium text-white transition-colors hover:bg-[#6B0000]'
              >
                📄 Baixar Tutorial CRC (PDF)
              </a>
            </div>

            <div className='border-t pt-6'>
              <h2 className='mb-4 font-semibold text-[#8B0000] text-xl'>Resumo Rápido</h2>

              <ul className='space-y-3 text-sm'>
                <li className='flex items-center gap-2'>
                  <span className='text-green-600'>✅</span>
                  <span>
                    <strong>O que é:</strong> Plataforma oficial da ARPEN Brasil para certidões online
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-blue-600'>📑</span>
                  <span>
                    <strong>Como usar:</strong> Acesse registrocivil.org.br e preencha os dados
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-orange-600'>⚠️</span>
                  <span>
                    <strong>Prazo:</strong> Certidões emitidas em até 48h úteis
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-purple-600'>💰</span>
                  <span>
                    <strong>Pagamento:</strong> Cartão de crédito/débito, PIX ou boleto
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Accordion type='multiple' className='w-full space-y-6'>
            <SimpleServiceItem
              id='o-que-e-crc'
              title='📌 O que é o CRC Nacional?'
              description='Entenda o que é a Central de Informações do Registro Civil e como funciona.'
            >
              <div className='space-y-6'>
                <div>
                  <p className='text-sm text-zinc-600'>
                    A CRC Nacional (Central de Informações do Registro Civil) é uma plataforma oficial da ARPEN Brasil.
                    Ela permite solicitar certidões de nascimento, casamento ou óbito de qualquer cartório do país, sem
                    precisar comparecer pessoalmente.
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <SimpleServiceItem
              id='como-solicitar'
              title='✅ Como solicitar uma certidão online pelo CRC'
              description='Passo a passo completo para solicitar certidões através da plataforma.'
            >
              <div className='space-y-6'>
                <div>
                  <h2 className='mb-3 font-medium text-base'>Passo a passo:</h2>

                  <ol className='list-decimal space-y-2 pl-5 text-sm text-zinc-600'>
                    <li>
                      Acesse:{' '}
                      <a
                        href='https://registrocivil.org.br'
                        target='_blank'
                        rel='noreferrer'
                        className='text-[#8B0000] hover:underline'
                      >
                        registrocivil.org.br
                      </a>
                    </li>
                    <li>Clique em "Solicitar Certidão"</li>
                    <li>Preencha os dados da certidão (nome, local, data, tipo etc.)</li>
                    <li>Escolha o cartório correto</li>
                    <li>Finalize o pagamento via Pix, cartão ou boleto</li>
                    <li>A certidão digital será enviada por e-mail ou ficará disponível para download</li>
                  </ol>
                </div>

                <div>
                  <p className='text-sm text-zinc-600'>
                    📎 Se tiver dúvidas sobre onde encontrar Livro, Folha e Termo, acesse:{' '}
                    <a
                      href='/docs/tutorial-crc.pdf'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='text-[#8B0000] hover:underline'
                    >
                      tutorial-crc.pdf
                    </a>
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <SimpleServiceItem
              id='acompanhar-pedido'
              title='❓ Como acompanhar meu pedido?'
              description='Saiba como consultar o andamento do seu pedido usando o protocolo.'
            >
              <div className='space-y-6'>
                <div>
                  <p className='text-sm text-zinc-600'>
                    🧾 Ao finalizar o pedido, você receberá um protocolo.
                    <br />
                    Esse número pode ser usado para consultar o andamento.
                  </p>
                </div>

                <div>
                  <p className='text-sm text-zinc-600'>
                    📬 Caso precise de ajuda, envie um e-mail com o protocolo para:
                    <br />
                    <a href='mailto:registrocivil@cartorio4oficioaju.com.br' className='text-[#8B0000] hover:underline'>
                      registrocivil@cartorio4oficioaju.com.br
                    </a>
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <ServiceItem
              id='duvidas-frequentes'
              title='🤔 Dúvidas frequentes'
              description='Respostas para as perguntas mais comuns sobre o CRC Nacional.'
              pdfLink='/docs/tutorial-crc.pdf'
            >
              <div className='space-y-6'>
                <div>
                  <h3 className='mb-2 font-medium text-base'>Q: O CRC substitui o atendimento presencial?</h3>

                  <p className='text-sm text-zinc-600'>
                    <strong>A:</strong> Não. Ele é exclusivo para pedidos e acompanhamento de certidões. Retificações,
                    averbações e atos presenciais continuam sendo realizados no cartório.
                  </p>
                </div>

                <div>
                  <h4 className='mb-2 font-medium text-base'>Q: O valor é o mesmo do cartório?</h4>

                  <p className='text-sm text-zinc-600'>
                    <strong>A:</strong> A base é a mesma (ex: R$ 71,65), mas pode haver taxas adicionais de emissão e
                    envio.
                  </p>
                </div>

                <div>
                  <h5 className='mb-2 font-medium text-base'>Q: O que fazer com o número do protocolo?</h5>

                  <p className='text-sm text-zinc-600'>
                    <strong>A:</strong> Informe por e-mail para que nossa equipe verifique o andamento.
                  </p>
                </div>

                <div>
                  <h6 className='mb-2 font-medium text-base'>Q: Posso pedir certidões de outros estados?</h6>

                  <p className='text-sm text-zinc-600'>
                    <strong>A:</strong> Sim. A plataforma integra cartórios de todo o Brasil.
                  </p>
                </div>
              </div>
            </ServiceItem>
          </Accordion>

          <div className='p-6 text-center'>
            <h3 className='mb-4 font-semibold text-[#8B0000] text-lg'>Precisa de mais informações?</h3>
            <p className='mb-6 text-sm text-zinc-600'>
              Nossa equipe está pronta para esclarecer suas dúvidas sobre o CRC Nacional.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
              <a
                href='tel:+557932591020'
                className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#8B0000] px-6 py-3 font-medium text-white transition-colors hover:bg-[#6B0000]'
              >
                📞 Ligar: (79) 3259-1020
              </a>
              <a
                href='mailto:registrocivil@cartorio4oficioaju.com.br'
                className='inline-flex items-center justify-center gap-2 rounded-lg border border-[#8B0000] px-6 py-3 font-medium text-[#8B0000] transition-colors hover:bg-[#8B0000] hover:text-white'
              >
                ✉️ Enviar E-mail
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
