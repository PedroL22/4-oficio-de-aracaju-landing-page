import { Clock, ExternalLink, FileText, HelpCircle, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-white'>
        <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/logo.png'
              alt='4º Ofício de Registro Civil e Notas de Aracaju/SE'
              width={180}
              height={40}
              className='h-10 w-auto'
            />
          </Link>
          <nav className='hidden gap-6 md:flex'>
            <Link href='/' className='font-medium text-sm underline-offset-4 hover:underline'>
              Início
            </Link>
            <Link href='#registro-civil' className='font-medium text-sm underline-offset-4'>
              Registro Civil
            </Link>
            <Link href='#tabelionato' className='font-medium text-sm underline-offset-4'>
              Tabelionato de Notas
            </Link>
            <Link href='#contato' className='font-medium text-sm underline-offset-4'>
              Contato
            </Link>
            <Link
              href='https://www.registrocivil.org.br/'
              target='_blank'
              className='font-medium text-sm underline-offset-4'
            >
              CRC Nacional
            </Link>
            <Link
              href='https://www.e-notariado.org.br/'
              target='_blank'
              className='font-medium text-sm underline-offset-4'
            >
              E-Notariado
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>
      <main className='flex-1'>
        <HeroSection />
        <ServicesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='icon' className='md:hidden'>
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
            className='h-6 w-6'
          >
            <title>Menu</title>
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
          </svg>
          <span className='sr-only'>Menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Menu</DialogTitle>
        </DialogHeader>
        <nav className='flex flex-col gap-4 py-4'>
          <Link href='/' className='font-medium text-sm underline-offset-4 hover:underline'>
            Início
          </Link>
          <Link href='#registro-civil' className='font-medium text-sm underline-offset-4 hover:underline'>
            Registro Civil
          </Link>
          <Link href='#tabelionato' className='font-medium text-sm underline-offset-4 hover:underline'>
            Tabelionato de Notas
          </Link>
          <Link href='#contato' className='font-medium text-sm underline-offset-4 hover:underline'>
            Contato
          </Link>
          <Link
            href='https://www.registrocivil.org.br/'
            target='_blank'
            className='flex items-center gap-2 font-medium text-sm underline-offset-4 hover:underline'
          >
            CRC Nacional <ExternalLink className='h-4 w-4' />
          </Link>
          <Link
            href='https://www.e-notariado.org.br/'
            target='_blank'
            className='flex items-center gap-2 font-medium text-sm underline-offset-4 hover:underline'
          >
            E-Notariado <ExternalLink className='h-4 w-4' />
          </Link>
        </nav>
      </DialogContent>
    </Dialog>
  )
}

function HeroSection() {
  return (
    <section className='w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-12'>
          <div className='space-y-4'>
            <h1 className='font-bold text-3xl text-[#8B0000] tracking-tighter sm:text-4xl md:text-5xl'>
              4º Ofício de Registro Civil e Notas de Aracaju/SE
            </h1>
            <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
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

function ServicesSection() {
  return (
    <div className='container px-4 py-12 md:px-6'>
      <section id='registro-civil' className='mb-12'>
        <div className='mb-8'>
          <h2 className='mb-2 font-bold text-2xl text-[#8B0000]'>Registro Civil</h2>
          <p className='text-gray-500'>
            Serviços relacionados a nascimento, casamento, óbito e outros registros civis.
          </p>
        </div>

        <Accordion type='single' collapsible className='w-full'>
          <ServiceItem
            id='certidao-nascimento'
            title='Certidão de Nascimento'
            description='Documento que comprova o registro de nascimento de uma pessoa.'
            pdfLink='/docs/certidao-nascimento.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Declaração de Nascido Vivo (DNV) emitida pelo hospital</li>
                  <li>Documento de identidade dos pais</li>
                  <li>Certidão de casamento dos pais (se casados)</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-gray-600 text-sm'>Imediato</p>
              </div>
              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-gray-600 text-sm'>Gratuito para a primeira via</p>
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
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Documento de identidade dos noivos</li>
                  <li>CPF dos noivos</li>
                  <li>Comprovante de residência</li>
                  <li>Certidão de nascimento atualizada (90 dias)</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-gray-600 text-sm'>Processo de habilitação: 30 dias</p>
              </div>
              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-gray-600 text-sm'>Consultar tabela de emolumentos</p>
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
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Declaração de Óbito assinada por médico</li>
                  <li>Documento de identidade do falecido</li>
                  <li>Documento de identidade do declarante</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-gray-600 text-sm'>Imediato</p>
              </div>
              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-gray-600 text-sm'>Gratuito para a primeira via</p>
              </div>
            </div>
          </ServiceItem>
        </Accordion>
      </section>

      <section id='tabelionato' className='mb-12'>
        <div className='mb-8'>
          <h2 className='mb-2 font-bold text-2xl text-[#8B0000]'>Tabelionato de Notas</h2>
          <p className='text-gray-500'>
            Serviços relacionados a escrituras, procurações, reconhecimento de firma e autenticações.
          </p>
        </div>

        <Accordion type='single' collapsible className='w-full'>
          <ServiceItem
            id='escritura-publica'
            title='Escritura Pública'
            description='Documento público que formaliza atos e negócios jurídicos.'
            pdfLink='/docs/escritura-publica.pdf'
          >
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Tipos de Escrituras:</h4>
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Compra e venda</li>
                  <li>Doação</li>
                  <li>Inventário e partilha</li>
                  <li>Divórcio</li>
                  <li>União estável</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>
                <p className='text-gray-600 text-sm'>
                  Variam conforme o tipo de escritura. Consulte-nos para informações específicas.
                </p>
              </div>
              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-gray-600 text-sm'>
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
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Procuração ad judicia (para fins judiciais)</li>
                  <li>Procuração para venda de imóveis</li>
                  <li>Procuração para movimentação bancária</li>
                  <li>Procuração para representação em geral</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Documento de identidade do outorgante</li>
                  <li>CPF do outorgante</li>
                  <li>Comprovante de residência</li>
                  <li>Dados completos do outorgado (procurador)</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-gray-600 text-sm'>Imediato ou em até 24h, dependendo da complexidade</p>
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
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Por semelhança (comparação com assinatura cadastrada)</li>
                  <li>Por autenticidade (assinatura feita na presença do tabelião)</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Documentos necessários:</h4>
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Documento original a ser reconhecido</li>
                  <li>Documento de identidade com foto</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-gray-600 text-sm'>Imediato</p>
              </div>
              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-gray-600 text-sm'>Valor fixo por assinatura. Consultar tabela de emolumentos.</p>
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
                <ul className='list-disc pl-5 text-gray-600 text-sm'>
                  <li>Documento original</li>
                  <li>Cópia a ser autenticada</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Prazo:</h4>
                <p className='text-gray-600 text-sm'>Imediato</p>
              </div>
              <div>
                <h4 className='font-medium'>Custo:</h4>
                <p className='text-gray-600 text-sm'>Valor fixo por página. Consultar tabela de emolumentos.</p>
              </div>
            </div>
          </ServiceItem>
        </Accordion>
      </section>
    </div>
  )
}

function ServiceItem({ id, title, description, pdfLink, children }) {
  return (
    <AccordionItem value={id} className='mb-4 overflow-hidden rounded-lg border border-gray-200 p-1'>
      <AccordionTrigger className='px-4 py-3 hover:no-underline'>
        <div className='flex flex-col items-start text-left'>
          <h3 className='font-medium text-lg'>{title}</h3>
          <p className='text-gray-500 text-sm'>{description}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className='px-4 pt-2 pb-4'>
        {children}

        <div className='mt-6 flex flex-wrap gap-3'>
          {pdfLink && (
            <Link href={pdfLink} target='_blank'>
              <Button variant='outline' size='sm' className='flex items-center gap-2'>
                <FileText className='h-4 w-4' />
                Baixar informativo
              </Button>
            </Link>
          )}

          <Dialog>
            <DialogTrigger asChild>
              <Button variant='outline' size='sm' className='flex items-center gap-2'>
                <HelpCircle className='h-4 w-4' />
                Perguntas frequentes
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[500px]'>
              <DialogHeader>
                <DialogTitle>Perguntas frequentes sobre {title}</DialogTitle>
                <DialogDescription>Respostas para as dúvidas mais comuns sobre este serviço.</DialogDescription>
              </DialogHeader>
              <div className='mt-4 space-y-4'>
                <div>
                  <h4 className='font-medium'>Quanto tempo demora para ficar pronto?</h4>
                  <p className='text-gray-600 text-sm'>
                    O tempo de processamento varia conforme o serviço. Certidões simples geralmente são emitidas no
                    mesmo dia.
                  </p>
                </div>
                <div>
                  <h4 className='font-medium'>Posso solicitar online?</h4>
                  <p className='text-gray-600 text-sm'>
                    Alguns serviços podem ser solicitados através do e-Notariado ou CRC Nacional. Para mais informações,
                    entre em contato conosco.
                  </p>
                </div>
                <div>
                  <h4 className='font-medium'>Quais formas de pagamento são aceitas?</h4>
                  <p className='text-gray-600 text-sm'>Aceitamos dinheiro, cartões de débito e crédito, e PIX.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

function FAQSection() {
  return (
    <section className='w-full bg-gray-50 py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-[800px] space-y-6'>
          <div className='space-y-2 text-center'>
            <h2 className='font-bold text-3xl text-[#8B0000] tracking-tighter sm:text-4xl'>Perguntas Frequentes</h2>
            <p className='text-gray-500 md:text-xl'>Respostas para as dúvidas mais comuns sobre nossos serviços.</p>
          </div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='faq-1' className='mb-4 rounded-lg border border-gray-200 p-1'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                Qual o horário de funcionamento do cartório?
              </AccordionTrigger>
              <AccordionContent className='px-4 pt-2 pb-4'>
                O cartório funciona de segunda a sexta-feira, das 8h às 17h, sem intervalo para almoço.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq-2' className='mb-4 rounded-lg border border-gray-200 p-1'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                É possível agendar atendimento?
              </AccordionTrigger>
              <AccordionContent className='px-4 pt-2 pb-4'>
                Sim, para alguns serviços específicos como casamentos e escrituras complexas, recomendamos o agendamento
                prévio através do nosso telefone ou WhatsApp.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq-3' className='mb-4 rounded-lg border border-gray-200 p-1'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                Quais documentos devo levar para solicitar uma segunda via de certidão?
              </AccordionTrigger>
              <AccordionContent className='px-4 pt-2 pb-4'>
                Para solicitar uma segunda via de certidão, é necessário apresentar um documento de identificação com
                foto e informar dados como nome completo, data do evento (nascimento, casamento ou óbito) e nomes dos
                pais ou cônjuges, conforme o caso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq-4' className='mb-4 rounded-lg border border-gray-200 p-1'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                Quanto custam os serviços do cartório?
              </AccordionTrigger>
              <AccordionContent className='px-4 pt-2 pb-4'>
                Os valores dos serviços são tabelados e seguem a tabela de emolumentos definida pelo Tribunal de Justiça
                de Sergipe. Para consultar valores específicos, entre em contato conosco ou visite nosso cartório.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq-5' className='mb-4 rounded-lg border border-gray-200 p-1'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                Posso solicitar certidões de outros cartórios?
              </AccordionTrigger>
              <AccordionContent className='px-4 pt-2 pb-4'>
                Sim, através da Central de Registro Civil (CRC) é possível solicitar certidões de outros cartórios de
                todo o Brasil. O serviço pode ser solicitado em nosso cartório ou diretamente pelo site da CRC Nacional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id='contato' className='w-full border-t bg-white py-6 md:py-12'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-8 lg:grid-cols-3'>
          <div className='space-y-4'>
            <h3 className='font-medium text-[#8B0000] text-lg'>4º Ofício de Registro Civil e Notas</h3>
            <p className='text-gray-500 text-sm'>
              Serventia Extrajudicial de Registro Civil das Pessoas Naturais e Tabelionato de Notas da Comarca de
              Aracaju, Estado de Sergipe.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='font-medium text-[#8B0000] text-lg'>Contato</h3>
            <ul className='space-y-2 text-gray-500 text-sm'>
              <li className='flex items-start gap-2'>
                <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-[#8B0000]' />
                <span>Av. Exemplo, 1234, Centro, Aracaju/SE - CEP 49000-000</span>
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='h-5 w-5 text-[#8B0000]' />
                <span>(79) 3000-0000</span>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='h-5 w-5 text-[#8B0000]' />
                <span>contato@4oficio.com.br</span>
              </li>
              <li className='flex items-center gap-2'>
                <Clock className='h-5 w-5 text-[#8B0000]' />
                <span>Segunda a Sexta: 8h às 17h</span>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='font-medium text-[#8B0000] text-lg'>Links Úteis</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='https://www.registrocivil.org.br/'
                  target='_blank'
                  className='flex items-center gap-1 text-gray-500 hover:text-[#8B0000]'
                >
                  <ExternalLink className='h-4 w-4' />
                  <span>CRC Nacional</span>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.e-notariado.org.br/'
                  target='_blank'
                  className='flex items-center gap-1 text-gray-500 hover:text-[#8B0000]'
                >
                  <ExternalLink className='h-4 w-4' />
                  <span>E-Notariado</span>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.tjse.jus.br/'
                  target='_blank'
                  className='flex items-center gap-1 text-gray-500 hover:text-[#8B0000]'
                >
                  <ExternalLink className='h-4 w-4' />
                  <span>Tribunal de Justiça de Sergipe</span>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.cnj.jus.br/'
                  target='_blank'
                  className='flex items-center gap-1 text-gray-500 hover:text-[#8B0000]'
                >
                  <ExternalLink className='h-4 w-4' />
                  <span>Conselho Nacional de Justiça</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t pt-6'>
          <p className='text-center text-gray-500 text-xs'>
            © {new Date().getFullYear()} 4º Ofício de Registro Civil e Notas de Aracaju/SE. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
