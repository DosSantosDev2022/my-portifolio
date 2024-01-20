import { ProjectCards } from '@/app/Projects/components/projectCards'
import { ProjectInfoData } from '@/app/types/dataTypes'

import Link from 'next/link'

type HighlightedProjectsProps = {
  data: ProjectInfoData[]
}

export function HighlightedProjects({ data }: HighlightedProjectsProps) {
  return (
    <section className="py-28  flex flex-col items-center justify-center gap-20">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="w-full flex items-center justify-center">
          <h4 className="text-zinc-50 font-bold text-4xl">
            Conheça os meus <span className="text-violet-900">projetos</span>
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {data.map((p) => (
            <ProjectCards
              key={p.title}
              title={p.title}
              coverImage={p.coverImage.url}
              description={p.description}
            />
          ))}
        </div>

        <div className="w-full flex items-start justify-center">
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
