import { ServiceItem } from '~/components/ServiceItem'
import { Accordion } from '~/components/ui/accordion'

export const ServicesSection = () => {
  return (
    <div className='flex w-full flex-col items-center py-12'>
      <section id='registro-civil' className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
        <div className='mb-8'>
          <h2 className='mb-2 font-bold text-2xl text-[#8B0000]'>Registro Civil</h2>

          <p className='text-zinc-500'>
            Serviços relacionados a nascimento, casamento, óbito e outros registros civis.
          </p>
        </div>

        <Accordion type='multiple' className='w-full'>
          <ServiceItem
            id='certidao-nascimento'
            title='Certidão de Nascimento'
            description='Documento que comprova o registro de nascimento de uma pessoa.'
            pdfLink='/docs/certidao-nascimento.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Declaração de Nascido Vivo (DNV) emitida pelo hospital</li>
                  <li>Documento de identidade dos pais</li>
                  <li>Certidão de casamento dos pais (se casados)</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-sm text-zinc-600'>Imediato</p>
              </div>

              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-sm text-zinc-600'>Gratuito para a primeira via</p>
              </div>
            </div>
          </ServiceItem>

          <ServiceItem
            id='certidao-casamento'
            title='Certidão de Casamento'
            description='Documento que comprova o registro de casamento civil.'
            pdfLink='/docs/certidao-casamento.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Documento de identidade dos noivos</li>
                  <li>CPF dos noivos</li>
                  <li>Comprovante de residência</li>
                  <li>Certidão de nascimento atualizada (90 dias)</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-sm text-zinc-600'>Processo de habilitação: 30 dias</p>
              </div>

              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-sm text-zinc-600'>Consultar tabela de emolumentos</p>
              </div>
            </div>
          </ServiceItem>

          <ServiceItem
            id='certidao-obito'
            title='Certidão de Óbito'
            description='Documento que comprova o falecimento de uma pessoa.'
            pdfLink='/docs/certidao-obito.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Declaração de Óbito assinada por médico</li>
                  <li>Documento de identidade do falecido</li>
                  <li>Documento de identidade do declarante</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-sm text-zinc-600'>Imediato</p>
              </div>

              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-sm text-zinc-600'>Gratuito para a primeira via</p>
              </div>
            </div>
          </ServiceItem>
        </Accordion>
      </section>

      <section id='tabelionato' className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
        <div className='mb-8'>
          <h2 className='mb-2 font-bold text-2xl text-[#8B0000]'>Tabelionato de Notas</h2>

          <p className='text-zinc-500'>
            Serviços relacionados a escrituras, procurações, reconhecimento de firma e autenticações.
          </p>
        </div>

        <Accordion type='multiple' className='w-full'>
          <ServiceItem
            id='escritura-publica'
            title='Escritura Pública'
            description='Documento público que formaliza atos e negócios jurídicos.'
            pdfLink='/docs/escritura-publica.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Tipos de Escrituras:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Compra e venda</li>
                  <li>Doação</li>
                  <li>Inventário e partilha</li>
                  <li>Divórcio</li>
                  <li>União estável</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>
                <p className='text-sm text-zinc-600'>
                  Variam conforme o tipo de escritura. Consulte-nos para informações específicas.
                </p>
              </div>

              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-sm text-zinc-600'>
                  Varia conforme o valor do bem ou negócio. Consultar tabela de emolumentos.
                </p>
              </div>
            </div>
          </ServiceItem>

          <ServiceItem
            id='procuracao'
            title='Procuração'
            description='Documento que confere poderes de representação a terceiros.'
            pdfLink='/docs/procuracao.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Tipos de Procuração:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Procuração ad judicia (para fins judiciais)</li>
                  <li>Procuração para venda de imóveis</li>
                  <li>Procuração para movimentação bancária</li>
                  <li>Procuração para representação em geral</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Documento de identidade do outorgante</li>
                  <li>CPF do outorgante</li>
                  <li>Comprovante de residência</li>
                  <li>Dados completos do outorgado (procurador)</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-sm text-zinc-600'>Imediato ou em até 24h, dependendo da complexidade</p>
              </div>
            </div>
          </ServiceItem>

          <ServiceItem
            id='reconhecimento-firma'
            title='Reconhecimento de Firma'
            description='Autenticação da assinatura em documentos.'
            pdfLink='/docs/reconhecimento-firma.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Tipos:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Por semelhança (comparação com assinatura cadastrada)</li>
                  <li>Por autenticidade (assinatura feita na presença do tabelião)</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Documento original a ser reconhecido</li>
                  <li>Documento de identidade com foto</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-sm text-zinc-600'>Imediato</p>
              </div>

              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-sm text-zinc-600'>Valor fixo por assinatura. Consultar tabela de emolumentos.</p>
              </div>
            </div>
          </ServiceItem>

          <ServiceItem
            id='autenticacao'
            title='Autenticação de Documentos'
            description='Certificação de que a cópia é fiel ao documento original.'
            pdfLink='/docs/autenticacao.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>

                <ul className='list-disc pl-5 text-sm text-zinc-600'>
                  <li>Documento original</li>
                  <li>Cópia a ser autenticada</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-sm text-zinc-600'>Imediato</p>
              </div>

              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-sm text-zinc-600'>Valor fixo por página. Consultar tabela de emolumentos.</p>
              </div>
            </div>
          </ServiceItem>
        </Accordion>
      </section>
    </div>
  )
}
