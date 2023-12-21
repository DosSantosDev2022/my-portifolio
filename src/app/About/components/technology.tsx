import { TechsList } from './techs'

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
