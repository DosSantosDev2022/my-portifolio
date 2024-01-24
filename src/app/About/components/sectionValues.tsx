import { AboutPageData } from '@/app/types/dataTypes'
import { CMSIcon } from '@/components/Hygraph/IconCms'

type SectionValuesProps = {
  data: AboutPageData
}

export function SectionValues({ data }: SectionValuesProps) {
  const cards = data.sectionFour.card

  return (
    <section className="py-28 flex flex-col items-center justify-center gap-20">
      <div className="lg:w-[768px] w-full flex flex-col items-center justify-center gap-6">
        <h6 className="text-zinc-50 font-bold text-4xl text-center">
          {data.sectionFour.title}
        </h6>
        <p className="text-zinc-50 font-normal text-center">
          {data.sectionFour.rowText}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {cards.map((card) => (
          <div
            className=" px-5 py-4 border border-zinc-600 rounded-sm flex flex-col items-center justify-center space-y-2 shadow-lg "
            key={card.title}
          >
            <div className="border border-zinc-400 rounded-full flex items-center justify-center p-4 bg-violet-900">
              <CMSIcon icon={card.iconSvg} />
            </div>

            <h5 className="text-zinc-50 font-bold text-xl">{card.title} </h5>
            <p className="text-zinc-100 font-medium text-md text-center">
              {card.content.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
