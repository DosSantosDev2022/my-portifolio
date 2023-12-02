import { CardServices } from './CardServices'

const serviceCardList = [
  {
    id: '1',
    title: 'Web Developer',
    paragraph: 'blog, e-commerce, landPage, sites  institucionais',
    ImageUrl: '/coding.svg',
  },
  {
    id: '2',
    title: 'uI/uX design',
    paragraph: 'Desing pensado em responsividade ',
    ImageUrl: '/coding.svg',
  },
  {
    id: '3',
    title: 'App mobile',
    paragraph: 'Construção de aplicativos para seu negocio',
    ImageUrl: '/coding.svg',
  },
  {
    id: '4',
    title: 'Web Developer',
    paragraph: 'blog, e-commerce, landPage, sites  institucionais',
    ImageUrl: '/coding.svg',
  },
  {
    id: '5',
    title: 'Web Developer',
    paragraph: 'blog, e-commerce, landPage, sites  institucionais',
    ImageUrl: '/coding.svg',
  },
  {
    id: '6',
    title: 'Web Developer',
    paragraph: 'blog, e-commerce, landPage, sites  institucionais',
    ImageUrl: '/coding.svg',
  },
]

export default function Services() {
  return (
    <section className="bg-white w-full  flex flex-col gap-10  items-center justify-center p-2">
      <div className="flex flex-col items-center justify-center gap-2 p-1">
        <h4 className="text-slate-700 font-semibold text-2xl mt-3">
          Meus Serviços
        </h4>
        <p className="text-slate-500 font-light text-md text-center max-w-[480px]">
          Sou um desenvolvedor web FullStack apaixonado por transformar ideias
          em realidade digital. Com habilidades sólidas em HTML, CSS,
          JavaScript, React, Next.js, Tailwind CSS e Sass, construo experiências
          online memoráveis e funcionais.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        {serviceCardList.map((card) => (
          <CardServices
            key={card.id}
            ImageUrl={card.ImageUrl}
            paragraph={card.paragraph}
            title={card.title}
          />
        ))}
      </div>
    </section>
  )
}
