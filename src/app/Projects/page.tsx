import { PaginationComponent } from '@/components/Pagination/pagination'
import { GET_ALL_PROJECTS } from '../api/Graphql/querys'
import { ProjectCards } from './components/projectCards'

export default async function ProjectPage() {
  const { project } = await GET_ALL_PROJECTS()
  return (
    <div className="flex flex-col items-center justify-center gap-20 px-2 py-28">
      <h1 className="mt-3 p-2 text-center text-3xl font-semibold text-zinc-50">
        Aqui você encontra os meus melhores projetos
      </h1>

      <div className="flex w-full flex-wrap items-center justify-center gap-6 p-2">
        {project.map((p) => (
          <ProjectCards
            key={p.title}
            title={p.title}
            description={p.description}
            coverImage={p.coverImage.url}
            slug={p.slug}
          />
        ))}
      </div>
      <PaginationComponent />
    </div>
  )
}
