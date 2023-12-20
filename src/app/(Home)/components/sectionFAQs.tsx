import Link from 'next/link'
import { AccordionComponent } from './accordion'
import Button from '@/components/Buttons/Button'

export function SectionFAQs() {
  return (
    <section className="py-28 flex flex-col lg:flex-row items-start gap-20">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-20 lg:p-10">
        <div className="flex flex-col items-start justify-center gap-2  ">
          <h5 className="text-zinc-50 font-bold text-7xl">FAQS</h5>
          <p className="text-zinc-100 font-normal text-2xl">
            Dúvidas? Consulte Nosso FAQ: Seu Mapa para Soluções Rápidas e
            Descomplicadas.
          </p>
          <Button className="w-24" variant="highlight">
            <Link href={'/Contact'}>Contato</Link>
          </Button>
        </div>
        <div className="w-full ">
          <AccordionComponent />
        </div>
      </div>
    </section>
  )
}
