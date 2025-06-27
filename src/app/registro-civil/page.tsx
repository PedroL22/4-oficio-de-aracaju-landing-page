import { SimpleServiceItem } from '~/components/SimpleServiceItem'
import { Accordion } from '~/components/ui/accordion'

export const metadata = {
  title: 'Registro Civil - 4º Ofício de Aracaju',
  description:
    'Encontre todos os serviços de registro civil organizados por categoria, incluindo certidões, casamento, alterações e mais.',
  openGraph: {
    title: 'Registro Civil - 4º Ofício de Aracaju',
    description:
      'Encontre todos os serviços de registro civil organizados por categoria, incluindo certidões, casamento, alterações e mais.',
    images: ['/logotype.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Registro Civil - 4º Ofício de Aracaju',
    description:
      'Encontre todos os serviços de registro civil organizados por categoria, incluindo certidões, casamento, alterações e mais.',
    images: ['/logotype.png'],
  },
}

export default function RegistroCivil() {
  return (
    <main className='mx-auto flex flex-1 flex-col'>
      <div className='flex w-full flex-col items-center py-12'>
        <section className='mb-12 w-full max-w-[1280px] px-4 md:px-6'>
          <div className='mb-12 flex min-h-[40vh] flex-col justify-center rounded-lg border bg-white p-8 shadow-sm'>
            <h1 className='mb-4 font-bold text-4xl text-[#8B0000]'>Registro Civil</h1>

            <p className='mb-6 text-xl text-zinc-600'>Todos os serviços organizados para facilitar sua busca</p>

            <div className='border-t pt-6'>
              <h2 className='mb-4 font-semibold text-[#8B0000] text-xl'>Serviços Disponíveis</h2>

              <ul className='space-y-3 text-sm'>
                <li className='flex items-center gap-2'>
                  <span className='text-green-600'>✅</span>
                  <span>
                    <strong>Certidões:</strong> 2ª via, inteiro teor, com averbação, gratuitas
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-blue-600'>📑</span>
                  <span>
                    <strong>Casamento Civil:</strong> Tradicional, religioso, fora do fórum
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-orange-600'>⚠️</span>
                  <span>
                    <strong>Alterações:</strong> Averbações, retificações, correções
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-purple-600'>💰</span>
                  <span>
                    <strong>Outros:</strong> Reconhecimento, nascimento, buscas
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Accordion type='multiple' className='w-full space-y-6'>
            <SimpleServiceItem
              id='certidoes'
              title='Certidões'
              description='2ª via de certidão, certidão com averbação, certidão de inteiro teor e informações sobre gratuidade.'
            >
              <div className='space-y-6'>
                <div>
                  <h2 className='mb-3 font-medium text-base'>Tipos de Certidões:</h2>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>2ª via de certidão:</strong> Nascimento, casamento ou óbito
                    </li>

                    <li>
                      <strong>Certidão com averbação:</strong> Inclui anotações posteriores ao registro
                    </li>

                    <li>
                      <strong>Certidão de inteiro teor:</strong> Reproduz fielmente todo o assento
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='mb-3 font-medium text-base'>Gratuidade:</h3>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Primeira via é sempre gratuita</li>
                    <li>Para pessoas de baixa renda comprovada</li>
                    <li>Para finalidades eleitorais, alistamento militar</li>
                  </ul>
                </div>

                <div>
                  <h4 className='mb-3 font-medium text-base'>Documentos necessários:</h4>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Documento de identidade com foto</li>
                    <li>Informações do registro (nome completo, data, local)</li>
                  </ul>
                </div>

                <div>
                  <h5 className='mb-3 font-medium text-base'>Prazo e Custo:</h5>

                  <p className='text-sm text-zinc-600'>
                    <strong>Prazo:</strong> Imediato
                    <br />
                    <strong>Custo:</strong> Consultar tabela de emolumentos (primeira via gratuita)
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <SimpleServiceItem
              id='casamento-civil'
              title='Casamento Civil'
              description='Casamento tradicional, religioso com efeito civil, fora do fórum, com estrangeiro e todos os requisitos.'
            >
              <div className='space-y-6'>
                <div>
                  <h6 className='mb-3 font-medium text-base'>Tipos de Casamento:</h6>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>Casamento civil tradicional:</strong> Cerimônia no cartório
                    </li>
                    <li>
                      <strong>Casamento religioso com efeito civil:</strong> Habilitação prévia + cerimônia religiosa
                    </li>
                    <li>
                      <strong>Casamento fora do fórum:</strong> Em local escolhido pelos nubentes
                    </li>
                    <li>
                      <strong>Casamento com estrangeiro:</strong> Documentação consular exigida
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Requisitos por Estado Civil:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>Solteiro(a):</strong> Certidão de nascimento atualizada (90 dias)
                    </li>
                    <li>
                      <strong>Divorciado(a):</strong> Certidão de casamento com averbação do divórcio
                    </li>
                    <li>
                      <strong>Viúvo(a):</strong> Certidão de casamento com averbação do óbito
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Documentos necessários:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Documento de identidade dos noivos</li>
                    <li>CPF dos noivos</li>
                    <li>Comprovante de residência</li>
                    <li>Declaração de duas testemunhas</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Processo:</p>

                  <p className='text-sm text-zinc-600'>
                    <strong>1. Habilitação:</strong> 30 dias para análise
                    <br />
                    <strong>2. Proclamas:</strong> Publicação por 15 dias
                    <br />
                    <strong>3. Cerimônia:</strong> Agendamento após habilitação
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <SimpleServiceItem
              id='alteracoes-averbacoes'
              title='Alterações e Averbações'
              description='Alteração de nome, prenome ou gênero, averbação de divórcio, mudança de patronímico e averbações judiciais.'
            >
              <div className='space-y-6'>
                <div>
                  <p className='mb-3 font-medium text-base'>Tipos de Alterações:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>Alteração de nome:</strong> Inclusão, exclusão ou substituição de prenome
                    </li>
                    <li>
                      <strong>Alteração de gênero:</strong> Retificação do registro de nascimento
                    </li>
                    <li>
                      <strong>Mudança de patronímico:</strong> Alteração do sobrenome
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Averbações:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>Averbação de divórcio:</strong> Anotação do divórcio no registro de casamento
                    </li>
                    <li>
                      <strong>Averbações judiciais:</strong> Cumprimento de mandados judiciais
                    </li>
                    <li>
                      <strong>Averbação de óbito:</strong> Anotação do falecimento no registro de casamento
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Documentos necessários:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Certidão original do registro a ser alterado</li>
                    <li>Documento de identidade</li>
                    <li>Decisão judicial (quando aplicável)</li>
                    <li>Documentos comprobatórios da alteração</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Processo:</p>

                  <p className='text-sm text-zinc-600'>
                    Análise documental → Verificação de procedência → Anotação no registro → Emissão de nova certidão
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <SimpleServiceItem
              id='retificacao'
              title='Retificação de Certidão'
              description='Correção de erros ou informações incorretas em registros civis.'
            >
              <div className='space-y-6'>
                <div>
                  <p className='mb-3 font-medium text-base'>Tipos de Retificação:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>Erro de grafia:</strong> Correção de nomes e datas
                    </li>
                    <li>
                      <strong>Dados incompletos:</strong> Inclusão de informações omitidas
                    </li>
                    <li>
                      <strong>Informações incorretas:</strong> Correção de dados equivocados
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Documentos necessários:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Certidão original com erro</li>
                    <li>Documentos que comprovem a informação correta</li>
                    <li>Documento de identidade do requerente</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Processo:</p>

                  <p className='text-sm text-zinc-600'>
                    <strong>Prazo:</strong> 5 a 15 dias úteis
                    <br />
                    <strong>Fluxo:</strong> Análise → Correção → Nova certidão
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <SimpleServiceItem
              id='reconhecimento-socioafetivo'
              title='Reconhecimento Socioafetivo'
              description='Reconhecimento de paternidade ou maternidade baseada em vínculo afetivo comprovado.'
            >
              <div className='space-y-6'>
                <div>
                  <p className='mb-3 font-medium text-base'>O que é:</p>

                  <p className='mb-3 text-sm text-zinc-600'>
                    Reconhecimento de filiação baseado no vínculo afetivo, independente de laços biológicos.
                  </p>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Requisitos:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Convivência familiar duradoura</li>
                    <li>Tratamento como filho(a)</li>
                    <li>Reputação social de filiação</li>
                    <li>Concordância de todas as partes</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Documentos necessários:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Certidão de nascimento do(a) reconhecido(a)</li>
                    <li>Documentos dos requerentes</li>
                    <li>Provas do vínculo socioafetivo</li>
                    <li>Anuência de todos os envolvidos</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Importante:</p>

                  <p className='text-sm text-zinc-600'>
                    Procedimento irrevogável que gera todos os direitos e deveres da filiação.
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <SimpleServiceItem
              id='registro-nascimento'
              title='Registro de Nascimento'
              description='Registro de nascimento, incluindo situações especiais como pais menores de idade e autorização judicial.'
            >
              <div className='space-y-6'>
                <div>
                  <p className='mb-3 font-medium text-base'>Prazo para registro:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>Até 15 dias:</strong> Gratuito (no município de nascimento)
                    </li>
                    <li>
                      <strong>Até 3 meses:</strong> Gratuito (em qualquer cartório)
                    </li>
                    <li>
                      <strong>Após 3 meses:</strong> Sujeito a emolumentos
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Documentos necessários:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Declaração de Nascido Vivo (DNV)</li>
                    <li>Documento de identidade dos pais</li>
                    <li>Certidão de casamento dos pais (se casados)</li>
                    <li>Comprovante de residência</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Situações especiais:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>Pais menores de idade:</strong> Presença dos avós ou autorização judicial
                    </li>
                    <li>
                      <strong>Mãe menor solteira:</strong> Presença dos avós maternos
                    </li>
                    <li>
                      <strong>Registro tardio:</strong> Pode necessitar autorização judicial
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Reconhecimento de paternidade:</p>

                  <p className='text-sm text-zinc-600'>
                    Pode ser feito no momento do registro ou posteriormente, sempre com anuência do pai.
                  </p>
                </div>
              </div>
            </SimpleServiceItem>

            <SimpleServiceItem
              id='buscas-malote'
              title='Buscas / Malote'
              description='Solicitação de busca de registros, consulta por Malote Digital e certidão negativa.'
            >
              <div className='space-y-6'>
                <div>
                  <p className='mb-3 font-medium text-base'>Tipos de busca:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>
                      <strong>Busca de nascimento:</strong> Localização de registro de nascimento
                    </li>
                    <li>
                      <strong>Busca de casamento:</strong> Localização de registro de casamento
                    </li>
                    <li>
                      <strong>Busca de óbito:</strong> Localização de registro de óbito
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Malote Digital:</p>

                  <p className='mb-3 text-sm text-zinc-600'>
                    Sistema de intercâmbio entre cartórios para localização de registros em outros municípios.
                  </p>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Certidão Negativa:</p>

                  <p className='mb-3 text-sm text-zinc-600'>
                    Documento que atesta a inexistência de registro no período e local pesquisados.
                  </p>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Como solicitar:</p>

                  <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600'>
                    <li>Solicitação por e-mail ou presencial</li>
                    <li>Informar período e dados conhecidos</li>
                    <li>Pagamento da taxa de busca</li>
                  </ul>
                </div>

                <div>
                  <p className='mb-3 font-medium text-base'>Prazo e custo:</p>

                  <p className='text-sm text-zinc-600'>
                    <strong>Prazo:</strong> 5 a 10 dias úteis
                    <br />
                    <strong>Custo:</strong> Taxa fixa por período pesquisado
                  </p>
                </div>
              </div>
            </SimpleServiceItem>
          </Accordion>

          <div className='p-6 text-center'>
            <h3 className='mb-4 font-semibold text-[#8B0000] text-lg'>Precisa de mais informações?</h3>
            <p className='mb-6 text-sm text-zinc-600'>
              Nossa equipe está pronta para esclarecer suas dúvidas sobre nossos serviços.
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
