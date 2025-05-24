import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'

export const FAQSection = () => {
  return (
    <section className='flex w-full justify-center bg-zinc-50 py-12 md:py-24 lg:py-32'>
      <div className='w-full px-4 md:px-6'>
        <div className='mx-auto w-full max-w-[570px] space-y-6'>
          <div className='space-y-2 text-center'>
            <h6 className='font-bold text-3xl text-[#8B0000] tracking-tighter sm:text-4xl'>Perguntas Frequentes</h6>

            <p className='text-zinc-500 md:text-xl'>Respostas para as dúvidas mais comuns sobre nossos serviços.</p>
          </div>

          <Accordion type='multiple' className='w-full'>
            <AccordionItem value='faq-1' className='mb-4 rounded-lg p-1 ring ring-zinc-200'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                Qual o horário de funcionamento do cartório?
              </AccordionTrigger>

              <AccordionContent className='px-4 pt-2 pb-4'>
                O cartório funciona de segunda a sexta-feira, das 8h às 17h, sem intervalo para almoço.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='faq-2' className='mb-4 rounded-lg p-1 ring ring-zinc-200'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                É possível agendar atendimento?
              </AccordionTrigger>

              <AccordionContent className='px-4 pt-2 pb-4'>
                Sim, para alguns serviços específicos como casamentos e escrituras complexas, recomendamos o agendamento
                prévio através do nosso telefone ou WhatsApp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='faq-3' className='mb-4 rounded-lg p-1 ring ring-zinc-200'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                Quais documentos devo levar para solicitar uma segunda via de certidão?
              </AccordionTrigger>

              <AccordionContent className='px-4 pt-2 pb-4'>
                Para solicitar uma segunda via de certidão, é necessário apresentar um documento de identificação com
                foto e informar dados como nome completo, data do evento (nascimento, casamento ou óbito) e nomes dos
                pais ou cônjuges, conforme o caso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='faq-4' className='mb-4 rounded-lg p-1 ring ring-zinc-200'>
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                Quanto custam os serviços do cartório?
              </AccordionTrigger>

              <AccordionContent className='px-4 pt-2 pb-4'>
                Os valores dos serviços são tabelados e seguem a tabela de emolumentos definida pelo Tribunal de Justiça
                de Sergipe. Para consultar valores específicos, entre em contato conosco ou visite nosso cartório.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='faq-5' className='mb-4 rounded-lg p-1 ring ring-zinc-200'>
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
