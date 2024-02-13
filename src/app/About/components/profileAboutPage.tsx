import Image from 'next/image'

import { CardsServices } from './cards'
import { AboutPageData } from '@/app/types/dataTypes'
import { RichText } from '@/components/Hygraph/richtext'
import { AnimateDiv } from '@/components/animate/animateDiv'

type ProfileAboutPageProps = {
  data: AboutPageData
}

export function ProfileAboutPage({ data }: ProfileAboutPageProps) {
  const cards = data.sectionThree.card
  const backgroundImageStyle = {
    backgroundImage: `url('${data.sectionTwo.image.url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <section className="space-y-20 pb-28 ">
      <div
        className="flex flex-col gap-12  lg:flex-row "
        style={backgroundImageStyle}
      >
        <AnimateDiv
          className="flex w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="p-2 text-3xl font-bold text-zinc-50 lg:text-5xl">
            {data.sectionTwo.title}
          </h3>
        </AnimateDiv>
        <AnimateDiv
          className="w-full space-y-4 p-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <RichText content={data.sectionTwo.content.raw} />
        </AnimateDiv>
      </div>
      <div className="flex flex-col items-start justify-center gap-12  lg:flex-row ">
        <AnimateDiv
          className="flex w-full flex-col space-y-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-3xl font-bold text-zinc-50">
            {data.sectionThree.title}
          </h4>
          <p className="text-lg font-medium text-zinc-100">
            {data.sectionThree.rowText}
          </p>
          <div className="flex flex-col gap-2">
            {cards.map((card, i) => (
              <AnimateDiv
                key={card.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <CardsServices
                  paragraph={card.content.text}
                  title={card.title}
                />
              </AnimateDiv>
            ))}
          </div>
        </AnimateDiv>
        <AnimateDiv
          className="flex w-full items-start justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt="Juliano Santos"
            src={data.sectionThree.figure.url}
            width={500}
            height={300}
            quality={100}
            className="rounded-md"
          />
        </AnimateDiv>
      </div>
    </section>
  )
}
