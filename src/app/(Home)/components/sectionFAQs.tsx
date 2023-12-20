import Link from 'next/link'
import { AccordionComponent } from './accordion'

export function SectionFAQs() {
  return (
    <section className="py-28 flex flex-col lg:flex-row items-start gap-20">
      <div className="w-full flex items-start justify-between gap-20 p-10">
        <div className="flex flex-col items-start justify-center gap-2  ">
          <h5 className="text-zinc-50 font-bold text-5xl">FAQS</h5>
          <p className="text-zinc-100 font-normal text-lg">
            Dúvidas? Consulte Nosso FAQ: Seu Mapa para Soluções Rápidas e
            Descomplicadas.
          </p>
          <Link
            className="border border-zinc-50 text-zinc-100 p-1 rounded-sm"
            href={''}
          >
            Contato
          </Link>
        </div>
        <div className="w-full ">
          <AccordionComponent />
        </div>
      </div>
    </section>
  )
}
