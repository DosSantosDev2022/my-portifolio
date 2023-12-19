import Image from 'next/image'
import image from '@/assets/img/banner.jpg'
import { FaLaptopCode } from 'react-icons/fa6'
import { FaTools } from 'react-icons/fa'
import { MdOutlineSecurity } from 'react-icons/md'

export function SectionTwo() {
  const cards = [
    {
      title: 'Tecnologias de alta qualidade',
      paragraph:
        'As melhores tecnologias do mercado para seu projeto garantindo qualidade na entrega e sucesso para seu negocio',
      icon: <FaLaptopCode />,
    },
    {
      title: 'Suporte garantido',
      paragraph:
        'Garantimos um suporte mesmo após a entrega de seu projeto, fazendo com que seu negócio sempre fique atualizado e em pleno funcionamento.',
      icon: <FaTools />,
    },
    {
      title: 'Segurança digital',
      paragraph:
        'As melhores tecnologias do mercado para seu projeto garantindo qualidade na entrega e sucesso para seu negocio',
      icon: <MdOutlineSecurity />,
    },
  ]
  return (
    <section className="py-28 flex flex-col lg:flex-row items-start gap-20">
      <div className="w-full">
        <Image
          className="rounded-md"
          src={image}
          alt=""
          width={700}
          height={600}
          quality={100}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        {cards.map((item) => (
          <div key={item.title} className="flex items-start gap-6 self-stretch">
            <i className="text-zinc-50 text-4xl  p-1 bg-violet-950 rounded-md">
              {item.icon}
            </i>
            <div className="flex flex-col items-start justify-center gap-4">
              <h5 className="text-zinc-50 font-bold text-2xl ">{item.title}</h5>
              <p className="text-zinc-100 font-normal text-base ">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
