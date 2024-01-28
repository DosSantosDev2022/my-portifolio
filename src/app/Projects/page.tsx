import { PaginationComponent } from '@/components/Pagination/pagination'
import { GET_ALL_PROJECTS } from '../api/Graphql/querys'
import { ProjectCards } from './components/projectCards'

export default async function ProjectPage() {
  const { project } = await GET_ALL_PROJECTS()
  return (
    <div className="flex flex-col items-center justify-center py-28 px-2 gap-20">
      <div>
        <h2 className="text-zinc-50 font-semibold text-3xl mt-3">
          Aqui você encontra os meus melhores projetos
        </h2>
      </div>
      <div className="flex items-center justify-center gap-6">
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
