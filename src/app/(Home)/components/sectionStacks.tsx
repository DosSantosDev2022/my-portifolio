import { HomePageInfo } from '@/app/types/dataTypes'
import { Cards } from './cards'

type SectionStacksProps = {
  homeInfo: HomePageInfo
}

export function SectionStacks({ homeInfo }: SectionStacksProps) {
  return (
    <section className="flex flex-col items-start gap-20 py-28 lg:flex-row">
      <div className="flex w-full flex-col gap-20">
        <div className="flex w-full items-center justify-center">
          <h4 className="text-center text-3xl font-bold text-zinc-50 lg:text-6xl">
            {homeInfo.sectionStack.title}
          </h4>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5">
          {homeInfo.sectionStack.card.map((card) => (
            <Cards
              description={card.content}
              CardTitle={card.title}
              CardIcon={card.iconSvg}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
