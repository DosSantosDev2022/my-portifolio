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
