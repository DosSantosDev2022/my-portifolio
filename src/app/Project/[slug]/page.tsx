import { GET_ALL_PROJECTS } from '@/app/api/Graphql/querys'
import Image from 'next/image'
import { RichText } from '@/components/Hygraph/richtext'

export default async function ProjectPageDetails({
  params,
}: {
  params: { slug: string }
}) {
  const { project } = await GET_ALL_PROJECTS()

  const projectDetail = project.find((p) => p.slug === params.slug)
  const tech = projectDetail?.technologies
  if (!projectDetail) {
    return (
      <div className="flex flex-col items-center justify-center py-28 px-2 gap-20 h-screen">
        <span className="text-white text-2xl font-medium">
          Projeto não encontrado
        </span>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center py-28  gap-20">
      <div className="w-full lg:px-16">
        <Image
          className="w-full h-[450px] "
          alt={projectDetail.title}
          src={projectDetail.coverImage.url}
          width={500}
          height={500}
          quality={100}
        />
      </div>
      <div className="lg:py-20 lg:px-16 py-10  space-y-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-zinc-50 font-bold text-6xl">
            {projectDetail.title}
          </h2>
          <p className="text-zinc-300 font-normal text-md">
            {projectDetail.description}
          </p>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-2xl text-violet-800">
              Tecnologias ulitiladas
            </h4>
            <div className="flex items-center justify-start gap-2">
              {tech?.map((i) => (
                <span
                  className="bg-zinc-50 text-zinc-500 p-2 rounded-md shadow-md"
                  key={i.name}
                >
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h4 className="text-zinc-50 font-bold text-4xl">
            Conheça sobre o projeto
          </h4>
          <div className="text-zinc-300 font-normal space-y-4">
            <RichText
              content={projectDetail.completeDescription.raw}
              fontSize="text-sm"
            />
          </div>

          <div></div>
          {/* Colocar seção de imagens do projeto */}
        </div>
      </div>
    </div>
  )
}