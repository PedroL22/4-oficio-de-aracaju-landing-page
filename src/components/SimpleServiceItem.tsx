import type { ReactNode } from 'react'

import { AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'

type SimpleServiceItemProps = {
  id: string
  title: string
  description: string
  children: ReactNode
}

export const SimpleServiceItem = ({ id, title, description, children }: SimpleServiceItemProps) => {
  return (
    <AccordionItem value={id} className='mb-4 overflow-hidden rounded-lg p-1 ring ring-zinc-200'>
      <AccordionTrigger className='px-4 py-3 hover:no-underline'>
        <div className='flex flex-col items-start text-left'>
          <h2 className='font-medium text-lg'>{title}</h2>

          <p className='text-sm text-zinc-500'>{description}</p>
        </div>
      </AccordionTrigger>

      <AccordionContent className='px-4 pt-2 pb-4'>{children}</AccordionContent>
    </AccordionItem>
  )
}
