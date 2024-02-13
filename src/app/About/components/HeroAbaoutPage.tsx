import { AboutPageData } from '@/app/types/dataTypes'
import Image from 'next/image'

type HeroContactPageProps = {
  data: AboutPageData
}

export function HeroAboutPage({ data }: HeroContactPageProps) {
  return (
    <section className="flex items-center justify-center px-2 py-28">
      <div className="flex flex-col items-start justify-center gap-12  lg:flex-row">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-zinc-50 lg:text-5xl">
            {data.sectionOne.title}
          </h2>
        </div>

        <Image
          alt={data.sectionOne.title}
          src={data.sectionOne.image.url}
          width={600}
          height={400}
          quality={100}
          className="rounded-lg"
        />
      </div>
    </section>
  )
}
