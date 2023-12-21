import { FaUser } from 'react-icons/fa'

export function SectionValues() {
  const valuesList = [
    {
      title: 'Inovação Constante',
      icon: <FaUser />,
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    },
    {
      title: 'Integridade Profissional',
      icon: <FaUser />,
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    },
    {
      title: 'Foco no Cliente',
      icon: <FaUser />,
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    },
  ]

  return (
    <section className="py-28 flex flex-col items-center justify-center gap-20">
      <div className="lg:w-[768px] w-full flex flex-col items-center justify-center gap-6">
        <h6 className="text-zinc-50 font-bold text-4xl text-center">
          Projetos de alta qualidade perfomance
        </h6>
        <p className="text-zinc-50 font-normal text-center">
          A qualidade é o alicerce dos meus projetos. Desde a concepção até a
          entrega, me dedico com atenção aos detalhes, garantindo que cada
          produto reflita a excelência do seu negócio.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {valuesList.map((item) => (
          <div
            className=" px-5 py-4 border border-zinc-600 rounded-sm flex flex-col items-center justify-center space-y-2 shadow-lg "
            key={item.title}
          >
            <i className="text-violet-800 text-4xl border p-3 bg-zinc-800 rounded-full">
              {item.icon}{' '}
            </i>
            <h5 className="text-zinc-50 font-bold text-xl">{item.title} </h5>
            <p className="text-zinc-100 font-medium text-md text-center">
              {item.paragraph}{' '}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
