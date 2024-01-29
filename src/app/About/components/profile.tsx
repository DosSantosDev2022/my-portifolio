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
    <section className="space-y-20 py-28">
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex w-full">
          <h3 className="text-3xl font-bold text-zinc-50 lg:text-5xl">
            {data.sectionTwo.title}
          </h3>
        </div>
        <div className="w-full space-y-4">
          <RichText content={data.sectionTwo.content.raw} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-12 lg:flex-row">
        <div className="flex w-full flex-col space-y-6">
          <h4 className="text-3xl font-bold text-zinc-50">
            {data.sectionThree.title}
          </h4>
          <p className="text-lg font-medium text-zinc-100">
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
        <div className="flex w-full items-start justify-center">
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
