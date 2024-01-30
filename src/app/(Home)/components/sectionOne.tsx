import { HomePageInfo } from '@/app/types/dataTypes'
import { RichText } from '@/components/Hygraph/richtext'
import { AnimateDiv } from '@/components/animate/animateDiv'

type HeroHomePageProps = {
  homeInfo: HomePageInfo
}

export function SectionOne({ homeInfo }: HeroHomePageProps) {
  return (
    <section className="py-28">
      <div className="mb-6 flex  items-center  justify-center p-2">
        <div className="flex  w-[796px] flex-col items-center justify-center gap-6 text-center ">
          <AnimateDiv
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-zinc-50 lg:text-5xl">
              {homeInfo.sectionOne.title}
            </h2>
          </AnimateDiv>

          <AnimateDiv
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="text-md font-normal text-zinc-100 lg:text-lg"
          >
            <RichText fontSize="lg" content={homeInfo.sectionOne.content.raw} />
          </AnimateDiv>
        </div>
      </div>
    </section>
  )
}
