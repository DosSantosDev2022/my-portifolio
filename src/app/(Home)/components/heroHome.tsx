import { HomePageInfo } from '@/app/types/dataTypes'
import Button from '@/components/Buttons/Button'
import { RichText } from '@/components/Hygraph/richtext'
import Image from 'next/image'

type HeroHomePageProps = {
  homeInfo: HomePageInfo
}

export function HeroHomePage({ homeInfo }: HeroHomePageProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center py-28 px-2 gap-20">
      <div className="w-full space-y-7">
        <div className="flex flex-col gap-3 ">
          <h2 className="lg:text-7xl text-5xl font-bold text-zinc-50">
            {homeInfo.title}
          </h2>
          <div>
            <RichText fontSize="2xl" content={homeInfo.description.raw} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {homeInfo.socials?.map((link) => (
            <Button key={link.id}>
              <a target="_blank" href={link.url}>
                {link.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <Image
          className="w-[450px] rounded-md"
          alt=""
          src={homeInfo.profileImage.url}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
    </div>
  )
}
