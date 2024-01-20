import { HomePageInfo } from '@/app/types/dataTypes'
import { RichText } from '@/components/Hygraph/richtext'

type HeroHomePageProps = {
  homeInfo: HomePageInfo
}

export function SectionOne({ homeInfo }: HeroHomePageProps) {
  return (
    <section className="py-28">
      <div className="flex items-center  justify-center  p-2 mb-6">
        <div className="flex  flex-col items-center justify-center gap-6 text-center w-[796px] ">
          <h2 className="text-2xl lg:text-5xl font-semibold text-zinc-50">
            {homeInfo.sectionOne.title}
          </h2>
          <div className="text-zinc-100 font-normal text-md lg:text-lg">
            <RichText fontSize="lg" content={homeInfo.sectionOne.content.raw} />
          </div>
        </div>
      </div>
    </section>
  )
}
