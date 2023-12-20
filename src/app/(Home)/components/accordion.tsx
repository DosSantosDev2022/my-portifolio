import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function AccordionComponent() {
  const accordionsItens = [
    {
      Trigger: 'Pergunta numero 01',
      content: 'Conteúdo da pergunta ',
      id: '1',
      value: 'item-01',
    },
    {
      Trigger: 'Pergunta numero 02',
      content: 'Conteúdo da pergunta',
      id: '2',
      value: 'item-02',
    },
    {
      Trigger: 'Pergunta numero 03',
      content: 'Conteúdo da pergunta',
      id: '3',
      value: 'item-03',
    },
    {
      Trigger: 'Pergunta numero 04',
      content: 'Conteúdo da pergunta',
      id: '4',
      value: 'item-04',
    },
  ]

  return (
    <>
      <Accordion className="w-full" type="single" collapsible>
        {accordionsItens.map((item) => (
          <AccordionItem key={item.id} value={item.value}>
            <AccordionTrigger className="bg-zinc-800 text-zinc-50 font-semibold text-xl p-2 h-16 rounded-sm">
              {item.Trigger}
            </AccordionTrigger>
            <AccordionContent className="bg-zinc-900 text-zinc-50 text-md p-2 h-20">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
