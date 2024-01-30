import { ProjectCards } from '@/app/Projects/components/projectCards'
import { ProjectInfoData } from '@/app/types/dataTypes'
import { AnimateDiv } from '@/components/animate/animateDiv'

import Link from 'next/link'

type HighlightedProjectsProps = {
  data: ProjectInfoData[]
}

export function HighlightedProjects({ data }: HighlightedProjectsProps) {
  return (
    <section className="flex  flex-col items-center justify-center gap-20 py-28">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <AnimateDiv
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex w-full items-center justify-center"
        >
          <h4 className="text-4xl font-bold text-zinc-50">
            Conheça os meus <span className="text-violet-900">projetos</span>
          </h4>
        </AnimateDiv>
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
          {data.map((p, i) => (
            <AnimateDiv
              key={p.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCards
                title={p.title}
                coverImage={p.coverImage.url}
                description={p.description}
                slug={p.slug}
              />
            </AnimateDiv>
          ))}
        </div>

        <div className="flex w-full items-start justify-center">
          <Link
            className="rounded-md bg-zinc-700 p-2 text-sm text-zinc-50 transition-all hover:bg-zinc-600"
            href={'/Projects'}
          >
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  )
}
