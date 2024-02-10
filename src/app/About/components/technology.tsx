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
    <div className="flex w-full flex-wrap items-start justify-center gap-12 p-2">
      {techlist.map((item) => (
        <span
          className="text-md w-32  rounded-md bg-zinc-700 px-1 py-2 text-center font-bold text-zinc-50 "
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
      <div className="flex flex-col items-center justify-center gap-6  py-20">
        <h6 className="text-center text-3xl font-bold text-zinc-50 lg:text-4xl">
          As melhores tecnologias para seu projeto
        </h6>
        <TechsList />
      </div>
    </>
  )
}
