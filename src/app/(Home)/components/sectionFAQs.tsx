import Link from 'next/link'
import { AccordionComponent } from './accordion'
import Button from '@/components/Buttons/Button'
import { AnimateDiv } from '@/components/animate/animateDiv'
import { HomePageInfo } from '@/app/types/dataTypes'

type SectionFAQsProps = {
  homeInfo: HomePageInfo
}

export function SectionFAQs({ homeInfo }: SectionFAQsProps) {
  const FaQs = homeInfo.faQ

  return (
    <section className="flex flex-col items-start gap-20 py-28 lg:flex-row">
      <div className="flex w-full flex-col items-start justify-between gap-20 lg:flex-row lg:p-10">
        <AnimateDiv
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center gap-2  "
        >
          <h5 className="text-7xl font-bold text-zinc-50">FAQS</h5>
          <p className="text-2xl font-normal text-zinc-100">
            Dúvidas? Consulte Nosso FAQ: Seu Mapa para Soluções Rápidas e
            Descomplicadas.
          </p>
          <Button className="w-24" variant="highlight">
            <Link href={'/Contact'}>Contato</Link>
          </Button>
        </AnimateDiv>
        <AnimateDiv
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full "
        >
          <AccordionComponent data={FaQs} />
        </AnimateDiv>
      </div>
    </section>
  )
}
