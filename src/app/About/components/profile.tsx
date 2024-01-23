import Image from 'next/image'
import Profile from '@/assets/Profile.png'

import { CardsServices } from './cards'
import { AboutPageData } from '@/app/types/dataTypes'
import { RichText } from '@/components/Hygraph/richtext'

type ProfileContactPageProps = {
  data: AboutPageData
}

export function ProfileContactPage({ data }: ProfileContactPageProps) {
  return (
    <section className="py-28 space-y-20">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full flex">
          <h3 className="text-zinc-50 font-bold lg:text-5xl text-3xl">
            {data.profileContact.title}
          </h3>
        </div>
        <div className="w-full space-y-4">
          <RichText content={data.profileContact.content.raw} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
        <div className="w-full flex flex-col space-y-6">
          <h4 className="text-zinc-50 font-bold text-3xl">
            Experiência e dedicação para desenvolver seu projeto
          </h4>
          <p className="text-zinc-100 font-medium text-lg">
            Com exériência e dedicação posso desenvolver o seu projeto com
            qualidade e segurança, garantindo sucesso ao seu negócio digital
          </p>
          <div className="flex flex-col gap-2">
            <CardsServices
              paragraph="Os melhores sistemas web para seu negocio"
              title="Desenvolvimento web"
            />
            <CardsServices
              paragraph="Aplicativos de alta qualidade para alavancar seu negocio"
              title="Desenvolvimento mobile"
            />
            <CardsServices
              paragraph="Entrega da sua aplicação de ponta a ponta "
              title="Desenvolvimento fullstack"
            />
          </div>
        </div>
        <div className="w-full flex items-start justify-center">
          <Image
            alt="Juliano Santos"
            src={Profile}
            width={500}
            height={300}
            quality={100}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
