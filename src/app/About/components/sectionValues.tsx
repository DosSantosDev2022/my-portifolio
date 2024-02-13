import { AboutPageData } from '@/app/types/dataTypes'
import { CMSIcon } from '@/components/Hygraph/IconCms'
import { AnimateDiv } from '@/components/animate/animateDiv'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

type SectionValuesProps = {
  data: AboutPageData
}

export function SectionValues({ data }: SectionValuesProps) {
  const cards = data.sectionFour.card

  return (
    <section className=" flex flex-col items-center justify-center gap-20  py-28">
      <AnimateDiv
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col items-center justify-center gap-6  lg:w-[768px] "
      >
        <h6 className="text-center text-4xl font-bold text-zinc-50">
          {data.sectionFour.title}
        </h6>
        <p className="text-center font-normal text-zinc-50">
          {data.sectionFour.rowText}
        </p>
      </AnimateDiv>
      <AnimateDiv
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-6 lg:flex-row"
      >
        {cards.map((card) => (
          <Card
            className="flex h-[290px] w-full items-center p-2 lg:w-[390px] "
            key={card.title}
          >
            <CardContent className="flex flex-col items-center justify-center p-2">
              <CardHeader className="flex items-center justify-center rounded-full border-[3px] border-zinc-100 bg-violet-900 p-2">
                <CMSIcon icon={card.iconSvg} />
              </CardHeader>
              <h5 className="text-xl font-bold text-zinc-50">{card.title} </h5>
              <p className="text-md text-center font-medium text-zinc-100">
                {card.content.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </AnimateDiv>
    </section>
  )
}
