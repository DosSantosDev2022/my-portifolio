import Image from 'next/image'

import { HomePageInfo } from '@/app/types/dataTypes'
import { RichText } from '@/components/Hygraph/richtext'
import { CMSIcon } from '@/components/Hygraph/IconCms'

type SectionTwoProps = {
  homeInfo: HomePageInfo
}

export function SectionTwo({ homeInfo }: SectionTwoProps) {
  return (
    <section className="py-28 flex flex-col lg:flex-row items-start gap-20">
      <div className="w-full">
        <Image
          className="rounded-md"
          src={homeInfo.sectionTwo.figure.url}
          alt=""
          width={700}
          height={600}
          quality={100}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        {homeInfo.sectionTwo.card.map((card) => (
          <div key={card.title} className="flex items-start gap-6 self-stretch">
            <i className="text-zinc-50 text-4xl  p-1 bg-violet-950 rounded-md">
              <CMSIcon icon={card.iconSvg} />
            </i>
            <div className="flex flex-col items-start justify-center gap-4">
              <h5 className="text-zinc-50 font-bold text-2xl ">{card.title}</h5>
              <div className="text-zinc-100 font-normal text-base ">
                <RichText content={card.content.raw} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
