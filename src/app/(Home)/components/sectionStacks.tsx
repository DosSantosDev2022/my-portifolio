import { HomePageInfo } from '@/app/types/homepage'
import { Cards } from './cards'

type SectionStacksProps = {
  homeInfo: HomePageInfo
}

export function SectionStacks({ homeInfo }: SectionStacksProps) {
  return (
    <section className="py-28 flex flex-col lg:flex-row items-start gap-20">
      <div className="flex flex-col gap-20 w-full">
        <div className="w-full flex items-center justify-center">
          <h4 className="text-zinc-50 font-bold lg:text-6xl text-3xl text-center">
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
