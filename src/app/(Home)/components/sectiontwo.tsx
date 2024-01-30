import Image from 'next/image'

import { HomePageInfo } from '@/app/types/dataTypes'
import { RichText } from '@/components/Hygraph/richtext'
import { CMSIcon } from '@/components/Hygraph/IconCms'
import { AnimateDiv } from '@/components/animate/animateDiv'

type SectionTwoProps = {
  homeInfo: HomePageInfo
}

export function SectionTwo({ homeInfo }: SectionTwoProps) {
  return (
    <section className="flex flex-col items-start gap-20 py-28 lg:flex-row">
      <AnimateDiv
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <Image
          className="rounded-md"
          src={homeInfo.sectionTwo.figure.url}
          alt=""
          width={700}
          height={600}
          quality={100}
        />
      </AnimateDiv>
      <div className="flex flex-col items-start justify-center gap-4">
        {homeInfo.sectionTwo.card.map((card, i) => (
          <AnimateDiv
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            key={card.title}
            className="flex items-start gap-6 self-stretch"
          >
            <i className="rounded-md bg-violet-950  p-1 text-4xl text-zinc-50">
              <CMSIcon icon={card.iconSvg} />
            </i>
            <div className="flex flex-col items-start justify-center gap-4">
              <h5 className="text-2xl font-bold text-zinc-50 ">{card.title}</h5>
              <div className="text-base font-normal text-zinc-100 ">
                <RichText content={card.content.raw} />
              </div>
            </div>
          </AnimateDiv>
        ))}
      </div>
    </section>
  )
}
