import Image from 'next/image'

import { CardsServices } from './cards'
import { AboutPageData } from '@/app/types/dataTypes'
import { RichText } from '@/components/Hygraph/richtext'

type ProfileContactPageProps = {
  data: AboutPageData
}

export function ProfileContactPage({ data }: ProfileContactPageProps) {
  const cards = data.sectionThree.card
  return (
    <section className="py-28 space-y-20">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full flex">
          <h3 className="text-zinc-50 font-bold lg:text-5xl text-3xl">
            {data.sectionTwo.title}
          </h3>
        </div>
        <div className="w-full space-y-4">
          <RichText content={data.sectionTwo.content.raw} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
        <div className="w-full flex flex-col space-y-6">
          <h4 className="text-zinc-50 font-bold text-3xl">
            {data.sectionThree.title}
          </h4>
          <p className="text-zinc-100 font-medium text-lg">
            {data.sectionThree.rowText}
          </p>
          <div className="flex flex-col gap-2">
            {cards.map((card) => (
              <CardsServices
                key={card.id}
                paragraph={card.content.text}
                title={card.title}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex items-start justify-center">
          <Image
            alt="Juliano Santos"
            src={data.sectionThree.figure.url}
            width={500}
            height={300}
            quality={100}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
