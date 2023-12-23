export function TechsList() {
  const techlist = [
    {
      name: 'React Js',
    },
    { name: 'Next Js' },
    { name: 'Node Js' },
    { name: 'Tailwind css' },
    { name: 'Sass' },
  ]

  return (
    <div className="w-full p-2 flex flex-wrap items-start justify-center gap-12">
      {techlist.map((item) => (
        <span className="text-zinc-50 font-bold text-xl" key={item.name}>
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
        <h6 className="text-zinc-50 font-bold text-4xl text-center">
          As melhores tecnologias para seu projeto
        </h6>
        <TechsList />
      </div>
    </>
  )
}
