import Link from 'next/link'
import type { ReactNode } from 'react'

import { FileText, HelpCircle } from 'lucide-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'

type ServiceItemProps = {
  id: string
  title: string
  description: string
  pdfLink?: string
  children: ReactNode
}

export const ServiceItem = ({ id, title, description, pdfLink, children }: ServiceItemProps) => {
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
