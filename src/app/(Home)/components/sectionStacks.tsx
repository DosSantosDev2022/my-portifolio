import { Cards } from './cards'

export function SectionStacks() {
  const CardList = [
    {
      id: '1',
      CardTitle: 'React Js',
      CardCover: '/react-original.svg',
      CardDescriptiom:
        'O React JS é uma ferramenta essencial em minhas aplicações web, sendo o alicerce que impulsiona a inovação e a interatividade em cada projeto.',
    },
    {
      id: '2',
      CardTitle: 'Next Js',
      CardCover: '/nextjs-original.svg',
      CardDescriptiom:
        'O Next.js simplifica o desenvolvimento por meio de sua estrutura intuitiva, oferecendo uma arquitetura pronta para produção que permite a criação rápida e eficiente de aplicações web modernas.',
    },
    {
      id: '3',
      CardTitle: 'Tailwind Css',
      CardCover: '/tailwindcss-plain.svg',
      CardDescriptiom:
        'O Tailwind CSS é a minha escolha definitiva quando se trata de estilização em meus projetos front-end, oferecendo uma abordagem única e eficiente para o design de interfaces modernas.',
    },
    {
      id: '4',
      CardTitle: 'Sass',
      CardCover: '/sass-original.svg',
      CardDescriptiom:
        'Com o Sass, desfruto da vantagem da pré-compilação, permitindo-me utilizar recursos avançados como variáveis, aninhamento e mixins. Essa abordagem resulta em um código mais limpo e organizado.',
    },
    {
      id: '5',
      CardTitle: 'Next Js',
      CardCover: '/nextjs-original.svg',
      CardDescriptiom:
        'O Next.js simplifica o desenvolvimento por meio de sua estrutura intuitiva, oferecendo uma arquitetura pronta para produção que permite a criação rápida e eficiente de aplicações web modernas.',
    },
    {
      id: '6',
      CardTitle: 'Next Js',
      CardCover: '/nextjs-original.svg',
      CardDescriptiom:
        'O Next.js simplifica o desenvolvimento por meio de sua estrutura intuitiva, oferecendo uma arquitetura pronta para produção que permite a criação rápida e eficiente de aplicações web modernas.',
    },
    {
      id: '7',
      CardTitle: 'Node Js',
      CardCover: 'nodejs-original.svg',
      CardDescriptiom:
        'Com o Sass, desfruto da vantagem da pré-compilação, permitindo-me utilizar recursos avançados como variáveis, aninhamento e mixins. Essa abordagem resulta em um código mais limpo e organizado.',
    },
    {
      id: '8',
      CardTitle: 'Sass',
      CardCover: '/sass-original.svg',
      CardDescriptiom:
        'Com o Sass, desfruto da vantagem da pré-compilação, permitindo-me utilizar recursos avançados como variáveis, aninhamento e mixins. Essa abordagem resulta em um código mais limpo e organizado.',
    },
  ]
  return (
    <section className="py-28 flex flex-col lg:flex-row items-start gap-20">
      <div className="flex flex-col gap-20 w-full">
        <div className="w-full flex items-center justify-center">
          <h4 className="text-zinc-50 font-bold lg:text-6xl text-3xl text-center">
            Conheça minha <span className="text-violet-900">Stack</span> de{' '}
            <br></br> desenvolvimento
          </h4>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5">
          {CardList.map((card) => (
            <Cards
              CardDescription={card.CardDescriptiom}
              CardTitle={card.CardTitle}
              CoverUrl={card.CardCover}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
