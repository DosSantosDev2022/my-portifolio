import { GET_ALL_PROJECTS } from '@/app/api/Graphql/querys'
import Image from 'next/image'
import { RichText } from '@/components/Hygraph/richtext'

import { ModalImage } from '@/components/modal/modalImage'
import Button from '@/components/Buttons/Button'
import Link from 'next/link'

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
          className="w-full h-[450px] rounded-lg "
          alt={projectDetail.title}
          src={projectDetail.coverImage.url}
          width={500}
          height={500}
          quality={100}
        />
      </div>
      <div className="lg:w-[768px] w-full lg:py-20  py-10  space-y-16 ">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-zinc-50 font-bold text-6xl">
            {projectDetail.title}
          </h2>
          <p className="text-zinc-300 font-normal text-sm">
            {projectDetail.description}
          </p>
          <div className="flex flex-col gap-3">
            <span className="font-normal text-xl text-violet-700">
              Tecnologias ulitiladas
            </span>
            <div className="flex items-center justify-start flex-wrap gap-2">
              {tech?.map((i) => (
                <span
                  className="bg-zinc-950 text-zinc-50 p-2 rounded-md shadow-md"
                  key={i.name}
                >
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4 ">
          <h4 className="text-zinc-50 font-bold text-4xl">
            Conheça sobre o projeto
          </h4>
          <div className=" space-y-4 ">
            <RichText
              content={projectDetail.completeDescription.raw}
              fontSize="text-sm"
            />
          </div>

          <ModalImage
            coverImage={projectDetail.coverImage.url}
            img01={projectDetail.carouseImage.image01.url}
            img02={projectDetail.carouseImage.image02.url}
            img03={projectDetail.carouseImage.image03.url}
          />

          <div className="mt-4 flex items-start justify-start gap-3 w-full">
            <Button>
              <Link href={projectDetail.deployLink}>Deploy do projeto</Link>
            </Button>
            <Button>
              <Link target="_blank" href={projectDetail.codeLink}>
                Repositório do projeto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
