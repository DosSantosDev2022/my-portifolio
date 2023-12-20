import Button from '@/components/Buttons/Button'
import Image from 'next/image'
import Link from 'next/link'
import profile from '@/assets/Profile.png'

export function HeaderHomePage() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center py-28 px-2 gap-20">
      <div className="w-full space-y-7">
        <div className="flex flex-col gap-3 ">
          <h2 className="lg:text-7xl text-7xl font-bold text-zinc-50">
            Developer FullStack
          </h2>
          <p className="text-lg text-zinc-200 font-normal">
            Desenvolvimento web de ponta a ponta garantindo qualidade e inovação
            para qualquer negócio digital
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="primary">
            <Link target="_blank" href={'https://github.com/DosSantosDev2022'}>
              Github
            </Link>
          </Button>
          <Button variant="highlight">
            <Link
              target="_blank"
              href={'https://www.linkedin.com/in/juliano-santos-234bab257/'}
            >
              Linkedin
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image
          className="w-[450px] rounded-md"
          alt=""
          src={profile}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
    </div>
  )
}
