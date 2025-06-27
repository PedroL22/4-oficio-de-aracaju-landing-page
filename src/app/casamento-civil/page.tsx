import { SimpleServiceItem } from '~/components/SimpleServiceItem'
import { Accordion } from '~/components/ui/accordion'

export const metadata = {
  title: 'Casamento Civil - 4º Ofício de Aracaju',
  description:
    'Saiba como realizar seu casamento civil no 4º Ofício de Registro Civil de Aracaju/SE. A habilitação é feita presencialmente, com antecedência mínima de 30 dias, e exige a presença dos noivos e das testemunhas. Todos os detalhes estão no documento: casamento.pdf',
  openGraph: {
    title: 'Casamento Civil - 4º Ofício de Aracaju',
    description:
      'Saiba como realizar seu casamento civil no 4º Ofício de Registro Civil de Aracaju/SE. A habilitação é feita presencialmente, com antecedência mínima de 30 dias, e exige a presença dos noivos e das testemunhas. Todos os detalhes estão no documento: casamento.pdf',
    images: ['/logotype.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casamento Civil - 4º Ofício de Aracaju',
    description:
      'Saiba como realizar seu casamento civil no 4º Ofício de Registro Civil de Aracaju/SE. A habilitação é feita presencialmente, com antecedência mínima de 30 dias, e exige a presença dos noivos e das testemunhas. Todos os detalhes estão no documento: casamento.pdf',
    images: ['/logotype.png'],
  },
}

export default function CasamentoCivil() {
  return (
    <main className='mx-auto flex flex-1 flex-col'>
      <div className='flex w-full flex-col items-center py-12'>
        <section className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
          <div className='mb-12 flex min-h-[40vh] flex-col justify-center rounded-lg border bg-white p-8 shadow-sm'>
            <h1 className='mb-4 font-bold text-4xl text-[#8B0000]'>Casamento Civil</h1>

            <p className='mb-6 text-xl text-zinc-600'>Entenda, baixe o PDF e resolva em minutos</p>

            <div className='mb-8'>
              <a
                href='/docs/casamento.pdf'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-[#8B0000] px-6 py-3 font-medium text-white transition-colors hover:bg-[#6B0000]'
              >
                <span aria-hidden='true'>📄</span> Baixar PDF Completo (1,2 MB)
              </a>
            </div>

            <div className='border-t pt-6'>
              <h2 className='mb-4 font-semibold text-[#8B0000] text-xl'>Resumo Rápido</h2>

              <ul className='space-y-3 text-sm'>
                <li className='flex items-center gap-2'>
                  <span aria-hidden='true'>✅</span>
                  <span>
                    <strong>Quem assina:</strong> Noivos, testemunhas e oficial
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span aria-hidden='true'>📑</span>
                  <span>
                    <strong>Documentos básicos:</strong> RG, CPF, certidão de nascimento, comprovante de residência
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span aria-hidden='true'>⚠️</span>
                  <span>
                    <strong>Prazo:</strong> Habilitação 30 dias + publicação 15 dias
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span aria-hidden='true'>💰</span>
                  <span>
                    <strong>Custos:</strong> A partir de R$ 410,99 (casamento tradicional)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='mb-12'>
            <h2 className='mb-6 font-semibold text-[#8B0000] text-xl'>Informações Detalhadas</h2>

            <Accordion type='multiple' className='w-full space-y-6'>
              <SimpleServiceItem
                id='casamento-tradicional'
                title='Casamento Civil Tradicional'
                description='Cerimônia realizada por juiz de direito, com data definida pelo fórum.'
              >
                <div className='space-y-6'>
                  <div>
                    <h3 className='mb-3 font-medium text-base'>Características:</h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Habilitação feita no cartório com antecedência mínima de 30 dias</li>
                      <li>Testemunhas devem comparecer tanto na habilitação quanto na cerimônia</li>
                      <li>A data da cerimônia é marcada conforme agenda do juiz</li>
                    </ul>
                  </div>

                  <div>
                    <p className='text-sm text-zinc-600'>
                      <strong>Valor total:</strong> R$ 410,99
                    </p>
                  </div>
                </div>
              </SimpleServiceItem>

              <SimpleServiceItem
                id='casamento-religioso'
                title='Casamento Religioso com Efeito Civil'
                description='Celebrado por autoridade religiosa escolhida pelos noivos, com validade legal.'
              >
                <div className='space-y-6'>
                  <div>
                    <h3 className='mb-3 font-medium text-base'>Características:</h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Cartório apenas analisa a documentação e emite a habilitação</li>
                      <li>A data é definida pela igreja/celebrante</li>
                      <li>É necessário dar entrada no processo com 30 dias de antecedência</li>
                    </ul>
                  </div>

                  <div>
                    <p className='text-sm text-zinc-600'>
                      <strong>Valor total:</strong> R$ 554,31
                    </p>
                  </div>
                </div>
              </SimpleServiceItem>

              <SimpleServiceItem
                id='casamento-especial'
                title='Casamento Especial Fora do Fórum'
                description='Cerimônia realizada fora do fórum, com juiz presente e anuente.'
              >
                <div className='space-y-6'>
                  <div>
                    <h3 className='mb-3 font-medium text-base'>Características:</h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Exige aprovação prévia e expressa de um juiz de direito</li>
                      <li>Os noivos devem ter contato direto com o magistrado responsável</li>
                    </ul>
                  </div>

                  <div>
                    <p className='text-sm text-zinc-600'>
                      <strong>Valor total:</strong> R$ 1.557,59
                    </p>
                  </div>
                </div>
              </SimpleServiceItem>

              <SimpleServiceItem
                id='conversao-uniao'
                title='Conversão de União Estável em Casamento'
                description='Transforma juridicamente união estável registrada em casamento civil.'
              >
                <div className='space-y-6'>
                  <div>
                    <h3 className='mb-3 font-medium text-base'>Características:</h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Mesmos documentos exigidos do casamento civil tradicional</li>
                    </ul>
                  </div>

                  <div>
                    <p className='text-sm text-zinc-600'>
                      <strong>Valor total:</strong> R$ 410,99
                    </p>
                  </div>
                </div>
              </SimpleServiceItem>

              <SimpleServiceItem
                id='documentacao'
                title='Documentação Necessária'
                description='Lista completa de documentos exigidos para cada situação.'
              >
                <div className='space-y-6'>
                  <div>
                    <h3 className='mb-3 font-medium text-base'>
                      <span aria-hidden='true'>📌</span> Documentos exigidos para habilitação (solteiros):
                    </h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Certidão de nascimento original atualizada (últimos 90 dias)</li>
                      <li>RG ou CNH</li>
                      <li>Comprovante de residência dos noivos ou dos pais</li>
                      <li>2 testemunhas maiores de 18 anos com RG ou CNH</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='mb-3 font-medium text-base'>
                      <span aria-hidden='true'>📌</span> Divorciados devem apresentar:
                    </h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Certidão de casamento com averbação do divórcio</li>
                      <li>RG ou CNH</li>
                      <li>Sentença ou formal de partilha de bens (se houver)</li>
                      <li>Comprovante de residência</li>
                      <li>2 testemunhas</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='mb-3 font-medium text-base'>
                      <span aria-hidden='true'>📌</span> Viúvos devem apresentar:
                    </h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Certidão de casamento com anotação de óbito</li>
                      <li>Certidão de óbito do cônjuge</li>
                      <li>Inventário (positivo ou negativo)</li>
                      <li>Comprovante de residência</li>
                      <li>2 testemunhas</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='mb-3 font-medium text-base'>
                      <span aria-hidden='true'>📌</span> Casamento com estrangeiro:
                    </h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Passaporte com cópia autenticada</li>
                      <li>Certidão consular ou documento equivalente</li>
                      <li>Tradução juramentada e apostilamento</li>
                      <li>Registro da tradução em cartório de notas</li>
                      <li>Testemunhas presentes nos dois momentos</li>
                    </ul>
                  </div>
                </div>
              </SimpleServiceItem>

              <SimpleServiceItem
                id='custos'
                title='Valores e Custos'
                description='Tabela completa de valores para todos os tipos de casamento e serviços relacionados.'
              >
                <div className='space-y-6'>
                  <div>
                    <h3 className='mb-3 font-medium text-base'>
                      <span aria-hidden='true'>💰</span> Valores:
                    </h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Casamento civil tradicional: R$ 410,99</li>
                      <li>Religioso com efeito civil: R$ 554,31</li>
                      <li>Fora do fórum: R$ 1.557,59</li>
                      <li>Conversão de união estável: R$ 410,99</li>
                      <li>Escritura de união estável: R$ 175,90</li>
                      <li>Pacto antenupcial: R$ 175,90</li>
                    </ul>
                  </div>

                  <div>
                    <p className='text-sm text-zinc-600'>
                      <strong>
                        <span aria-hidden='true'>📍</span> Pagamento realizado presencialmente, em dinheiro, no
                        cartório.
                      </strong>
                    </p>
                  </div>
                </div>
              </SimpleServiceItem>

              <SimpleServiceItem
                id='como-iniciar'
                title='Como Iniciar o Processo'
                description='Passo a passo para dar entrada no processo de casamento civil.'
              >
                <div className='space-y-6'>
                  <div>
                    <h3 className='mb-3 font-medium text-base'>
                      <span aria-hidden='true'>🟩</span> Presencial:
                    </h3>
                    <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                      <li>Comparecer ao cartório com os documentos listados</li>
                      <li>Não é possível agendar pelo WhatsApp</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='mb-3 font-medium text-base'>Para dúvidas ou envio prévio de documentação:</h3>
                    <p className='text-sm text-zinc-600'>
                      <span aria-hidden='true'>📧</span>{' '}
                      <a
                        href='mailto:registrocivil@cartorio4oficioaju.com.br'
                        className='text-[#8B0000] hover:underline'
                      >
                        registrocivil@cartorio4oficioaju.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </SimpleServiceItem>
            </Accordion>
          </div>

          <div className='p-6 text-center'>
            <h3 className='mb-4 font-semibold text-[#8B0000] text-lg'>Precisa de mais informações?</h3>
            <p className='mb-6 text-sm text-zinc-600'>
              Nossa equipe está pronta para esclarecer suas dúvidas e orientar sobre o processo.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
              <a
                href='tel:+557932591020'
                className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#8B0000] px-6 py-3 font-medium text-white transition-colors hover:bg-[#6B0000]'
              >
                <span aria-hidden='true'>📞</span> Ligar: (79) 3259-1020
              </a>
              <a
                href='mailto:registrocivil@cartorio4oficioaju.com.br'
                className='inline-flex items-center justify-center gap-2 rounded-lg border border-[#8B0000] px-6 py-3 font-medium text-[#8B0000] transition-colors hover:bg-[#8B0000] hover:text-white'
              >
                <span aria-hidden='true'>✉️</span> Enviar E-mail
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
