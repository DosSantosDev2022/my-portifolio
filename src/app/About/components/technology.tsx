export function TechsList() {
  const techlist = [
    {
      id: '1',
      name: 'React Js',
    },
    { name: 'Next Js', id: '2' },
    { id: '3', name: 'Node Js' },
    { id: '4', name: 'Tailwind css' },
    { id: '5', name: 'Sass' },
  ]

  return (
    <div className="w-full p-2 flex flex-wrap items-start justify-center gap-12">
      {techlist.map((item) => (
        <span
          className="text-zinc-50 bg-zinc-700  rounded-md w-32 px-1 py-2 text-center font-bold text-md "
          key={item.id}
        >
          {item.name}
        </span>
      ))}
    </div>
  )
}

export function SectionTechnology() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 py-20">
        <h6 className="text-zinc-50 font-bold lg:text-4xl text-3xl text-center">
          As melhores tecnologias para seu projeto
        </h6>
        <TechsList />
      </div>
    </>
  )
}
