import { HomePageInfo } from '@/app/types/dataTypes'
import { Cards } from './cards'
import { AnimateDiv } from '@/components/animate/animateDiv'

type SectionStacksProps = {
  homeInfo: HomePageInfo
}

export function SectionStacks({ homeInfo }: SectionStacksProps) {
  return (
    <section className="flex flex-col items-start gap-20 py-28 lg:flex-row">
      <div className="flex w-full flex-col gap-20">
        <AnimateDiv
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex w-full items-center justify-center"
        >
          <h4 className="text-center text-3xl font-bold text-zinc-50 lg:text-6xl">
            {homeInfo.sectionStack.title}
          </h4>
        </AnimateDiv>
        <div className="flex w-full flex-wrap items-center justify-center gap-5">
          {homeInfo.sectionStack.card.map((card, i) => (
            <AnimateDiv
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={card.id}
            >
              <Cards
                description={card.content}
                CardTitle={card.title}
                CardIcon={card.iconSvg}
              />
            </AnimateDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
