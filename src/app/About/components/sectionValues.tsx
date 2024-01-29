import { AboutPageData } from '@/app/types/dataTypes'
import { CMSIcon } from '@/components/Hygraph/IconCms'

type SectionValuesProps = {
  data: AboutPageData
}

export function SectionValues({ data }: SectionValuesProps) {
  const cards = data.sectionFour.card

  return (
    <section className="flex flex-col items-center justify-center gap-20 py-28">
      <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-[768px]">
        <h6 className="text-center text-4xl font-bold text-zinc-50">
          {data.sectionFour.title}
        </h6>
        <p className="text-center font-normal text-zinc-50">
          {data.sectionFour.rowText}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
        {cards.map((card) => (
          <div
            className=" flex flex-col items-center justify-center space-y-2 rounded-sm border border-zinc-600 px-5 py-4 shadow-lg "
            key={card.title}
          >
            <div className="flex items-center justify-center rounded-full border border-zinc-400 bg-violet-900 p-4">
              <CMSIcon icon={card.iconSvg} />
            </div>

            <h5 className="text-xl font-bold text-zinc-50">{card.title} </h5>
            <p className="text-md text-center font-medium text-zinc-100">
              {card.content.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
