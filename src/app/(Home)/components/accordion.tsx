import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function AccordionComponent() {
  const accordionsItens = [
    {
      Trigger: 'Como você aborda a responsividade em seus projetos front-end ?',
      content:
        'Na abordagem da responsividade, priorizo o design fluido e a utilização de media queries para garantir uma experiência consistente em diversos dispositivos. Testo amplamente em dispositivos móveis e desktops, assegurando que o layout se adapte de forma eficaz a diferentes tamanhos de tela.',
      id: '1',
      value: 'item-01',
    },
    {
      Trigger: 'Como você incorpora práticas de SEO em seus projetos ?',
      content:
        'Integro práticas de SEO desde o início do desenvolvimento, garantindo o uso adequado de tags HTML, meta tags descritivas e URLs amigáveis. Utilizo semantic HTML para destacar a estrutura da página aos motores de busca e otimizo o conteúdo multimídia para melhorar a indexação.',
      id: '2',
      value: 'item-02',
    },
    {
      Trigger:
        ' Qual é a sua abordagem para garantir a performance em aplicações web ?',
      content:
        'Para garantir a performance, otimizo o carregamento de recursos assíncronos, priorizo o carregamento de conteúdo visível e utilizo técnicas como code splitting. Além disso, realizo testes de desempenho com ferramentas como Lighthouse para identificar áreas de melhoria. O monitoramento contínuo do desempenho da aplicação permite ajustes rápidos e eficazes para garantir uma experiência ágil aos usuários.',
      id: '3',
      value: 'item-03',
    },
    {
      Trigger:
        'Como você garante a segurança nas aplicações front-end que desenvolve ?',
      content:
        'A segurança é uma prioridade em meus projetos. Utilizo HTTPS para garantir a transferência segura de dados e evito o uso de bibliotecas desatualizadas ou com vulnerabilidades conhecidas. Implemento práticas de segurança no código, como validação de entrada, sanitização de dados e proteção contra ataques XSS (Cross-Site Scripting) e CSRF (Cross-Site Request Forgery).',
      id: '4',
      value: 'item-04',
    },
  ]

  return (
    <>
      <Accordion className="w-full" type="single" collapsible>
        {accordionsItens.map((item) => (
          <AccordionItem key={item.id} value={item.value}>
            <AccordionTrigger className="bg-zinc-800 text-zinc-50 font-semibold text-base text-start  h-20 rounded-sm">
              {item.Trigger}
            </AccordionTrigger>
            <AccordionContent className="bg-zinc-900 text-zinc-50 p-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
