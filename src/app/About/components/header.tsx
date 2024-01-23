import { AboutPageData } from '@/app/types/dataTypes'
import Image from 'next/image'

type HeaderContactPageProps = {
  data: AboutPageData
}

export function HeaderContactPage({ data }: HeaderContactPageProps) {
  return (
    <section className="py-28 px-2 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-12">
        <div className="w-full">
          <h2 className="text-zinc-50 font-bold lg:text-5xl text-3xl">
            {data.sectionOne.title}
          </h2>
        </div>
        <div className="w-full flex items-center justify-end">
          <Image
            alt=""
            src={data.sectionOne.image.url}
            width={600}
            height={400}
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}
