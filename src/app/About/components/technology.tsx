import { CMSIcon } from '@/components/Hygraph/IconCms'
import { AboutPageData } from '@/app/types/dataTypes'

type TechsListProps = {
  data: AboutPageData
}

export function TechsList({ data }: TechsListProps) {
  const techlist = data.technologies

  return (
    <div className="flex w-full flex-wrap items-start justify-center gap-12 p-2">
      {techlist.map((item) => (
        <span
          className="text-md flex  items-center justify-center gap-2  rounded-md bg-zinc-700 p-2 text-center font-bold text-zinc-50 "
          key={item.id}
        >
          <CMSIcon icon={item.iconSvg} />
          {item.name}
        </span>
      ))}
    </div>
  )
}

type SectionTechnologyProps = {
  data: AboutPageData
}

export function SectionTechnology({ data }: SectionTechnologyProps) {
  const backgroundImageStyle = {
    backgroundImage: `url('/bg-technologies.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-6 py-20 "
        style={backgroundImageStyle}
      >
        <h6 className="text-center text-3xl font-bold text-zinc-50 lg:text-4xl">
          As melhores tecnologias para seu projeto
        </h6>
        <TechsList data={data} />
      </div>
    </>
  )
}
