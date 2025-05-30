import { ServiceItem } from '~/components/ServiceItem'
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
    <main className='mx-auto flex min-h-screen flex-1 flex-col'>
      <div className='flex w-full flex-col items-center py-12'>
        <section className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
          <div className='mb-8'>
            <h1 className='mb-4 font-bold text-3xl text-[#8B0000]'>Casamento Civil</h1>

            <p className='text-lg text-zinc-500'>
              Saiba como realizar seu casamento civil no 4º Ofício de Registro Civil de Aracaju/SE. A habilitação é
              feita presencialmente, com antecedência mínima de 30 dias, e exige a presença dos noivos e das
              testemunhas. Todos os detalhes estão no documento: casamento.pdf
            </p>
          </div>

          <Accordion type='multiple' className='w-full space-y-6'>
            <SimpleServiceItem
              id='casamento-tradicional'
              title='Casamento Civil Tradicional'
              description='Cerimônia realizada por juiz de direito, com data definida pelo fórum.'
            >
              <div className='space-y-6'>
                <div>
                  <h2 className='mb-3 font-medium text-base'>Características:</h2>

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
                  <h4 className='mb-3 font-medium text-base'>Características:</h4>

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
                  <h5 className='mb-3 font-medium text-base'>Características:</h5>

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
                  <h6 className='mb-3 font-medium text-base'>📌 Documentos exigidos para habilitação (solteiros):</h6>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Certidão de nascimento original atualizada (últimos 90 dias)</li>
                    <li>RG ou CNH</li>
                    <li>Comprovante de residência dos noivos ou dos pais</li>
                    <li>2 testemunhas maiores de 18 anos com RG ou CNH</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>📌 Divorciados devem apresentar:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Certidão de casamento com averbação do divórcio</li>
                    <li>RG ou CNH</li>
                    <li>Sentença ou formal de partilha de bens (se houver)</li>
                    <li>Comprovante de residência</li>
                    <li>2 testemunhas</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>📌 Viúvos devem apresentar:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Certidão de casamento com anotação de óbito</li>
                    <li>Certidão de óbito do cônjuge</li>
                    <li>Inventário (positivo ou negativo)</li>
                    <li>Comprovante de residência</li>
                    <li>2 testemunhas</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>📌 Casamento com estrangeiro:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Passaporte com cópia autenticada</li>
                    <li>Certidão consular ou documento equivalente</li>
                    <li>Tradução juramentada e apostilamento</li>
                    <li>Registro da tradução em cartório de notas</li> <li>Testemunhas presentes nos dois momentos</li>
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
                  <p className='mb-3 font-medium text-base'>💰 Valores:</p>

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
                    <strong>📍 Pagamento realizado presencialmente, em dinheiro, no cartório.</strong>
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <ServiceItem
              id='como-iniciar'
              title='Como Iniciar o Processo'
              description='Passo a passo para dar entrada no processo de casamento civil.'
              pdfLink='/docs/casamento.pdf'
            >
              <div className='space-y-6'>
                <div>
                  <p className='mb-3 font-medium text-base'>🟩 Presencial:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Comparecer ao cartório com os documentos listados</li>
                    <li>Não é possível agendar pelo WhatsApp</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Para dúvidas ou envio prévio de documentação:</p>

                  <p className='text-sm text-zinc-600'>
                    📧{' '}
                    <a href='mailto:registrocivil@cartorio4oficioaju.com.br' className='text-[#8B0000] hover:underline'>
                      registrocivil@cartorio4oficioaju.com.br
                    </a>
                  </p>
                </div>
              </div>
            </ServiceItem>
          </Accordion>
        </section>
      </div>
    </main>
  )
}
