import { HomePageInfo } from '@/app/types/dataTypes'
import { RichText } from '@/components/Hygraph/richtext'
import { AnimateDiv } from '@/components/animate/animateDiv'
import Image from 'next/image'
import Button from '@/components/Buttons/Button'
import Link from 'next/link'

type HeroHomePageProps = {
  homeInfo: HomePageInfo
}

export function HeroHomePage({ homeInfo }: HeroHomePageProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-20 px-2 py-28 lg:flex-row ">
      <AnimateDiv
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full space-y-7 "
      >
        <div className="flex flex-col gap-3 ">
          <h2 className="text-5xl font-bold text-zinc-50 lg:text-7xl">
            {homeInfo.title}
          </h2>
          <div>
            <RichText fontSize="2xl" content={homeInfo.description.raw} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {homeInfo.socials?.map((link, i) => (
            <AnimateDiv
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
              key={link.id}
            >
              <Button>
                <Link target="_blank" href={link.url}>
                  {link.name}
                </Link>
              </Button>
            </AnimateDiv>
          ))}
        </div>
      </AnimateDiv>
      <AnimateDiv
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="flex w-full origin-center items-center justify-end"
      >
        <Image
          className="w-[450px] rounded-md"
          alt=""
          src={homeInfo.profileImage.url}
          width={1000}
          height={1000}
          quality={100}
        />
      </AnimateDiv>
    </div>
  )
}
