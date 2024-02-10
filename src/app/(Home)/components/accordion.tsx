import { FaQs } from '@/app/types/dataTypes'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface AccordionComponentProps {
  data: FaQs[]
}

export function AccordionComponent({ data }: AccordionComponentProps) {
  const FaQItens = data

  return (
    <>
      <Accordion className="w-full" type="single" collapsible>
        {FaQItens.map((item) => (
          <AccordionItem key={item.id} value={item.title}>
            <AccordionTrigger className="h-20 rounded-sm bg-zinc-800 text-start text-base  font-semibold text-zinc-50">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="bg-zinc-900 p-2 text-zinc-50">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
