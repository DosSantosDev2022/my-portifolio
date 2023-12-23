import { ProjectCards } from '@/app/Projects/components/projectCards'
import Link from 'next/link'

export function SectionProjectResums() {
  return (
    <section className="py-28  flex flex-col items-center justify-center gap-20">
      <div className="w-full flex flex-col items-start justify-center gap-10">
        <div className="w-full flex items-center justify-center">
          <h4 className="text-zinc-50 font-bold text-4xl">
            Conheça os meus projetos
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <ProjectCards
            title="PROJETO CARD 01"
            coverImage="/placeholder.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          />
          <ProjectCards
            title="PROJETO CARD 02"
            coverImage="/placeholder.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          />
          <ProjectCards
            title="PROJETO CARD 03"
            coverImage="/placeholder.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          />
        </div>

        <div className="w-full flex items-start">
          <Link
            className="bg-zinc-700 p-2 rounded-md text-sm text-zinc-50 hover:bg-zinc-600 transition-all"
            href={'/Projects'}
          >
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  )
}
