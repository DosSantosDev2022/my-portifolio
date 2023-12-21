import Image from 'next/image'
import Profile from '@/assets/Profile.png'

import { CardsServices } from './cards'

export function ProfileContactPage() {
  return (
    <section className="py-28 space-y-20">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full flex">
          <h3 className="text-zinc-50 font-bold text-5xl">
            Transformando ideias em experiências digitais sofisticadas.
          </h3>
        </div>
        <div className="w-full space-y-4">
          <p className="text-zinc-100 font-light text-md">
            Olá, eu sou{' '}
            <span className="text-violet-900 font-bold">Juliano Santos</span>,
            um entusiasta apaixonado pelo universo da programação front-end.
            Transformando linhas de código em experiências visuais envolventes,
            meu objetivo é criar interfaces web que não apenas cativem, mas
            também proporcionem uma experiência fluida e intuitiva para os
            usuários.
          </p>
          <p className="text-zinc-100 font-light text-md">
            Com uma sólida base em HTML, CSS e JavaScript, trago consigo a
            habilidade de traduzir conceitos criativos em designs interativos e
            responsivos. Ao longo da minha jornada, tenho explorado as últimas
            tendências e tecnologias front-end, sempre buscando inovação e
            aprimoramento contínuo.
          </p>
          <p className="text-zinc-100 font-light text-md">
            Acredito no poder da colaboração e na importância de entender as
            necessidades dos usuários para criar soluções significativas. Com
            habilidades em frameworks modernos, como React e Next Js, busco
            elevar o padrão da web, tornando-a mais atraente e funcional.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
        <div className="w-full flex flex-col space-y-6">
          <h4 className="text-zinc-50 font-bold text-4xl">
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
