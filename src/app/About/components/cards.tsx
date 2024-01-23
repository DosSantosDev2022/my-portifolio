import { FaCode } from 'react-icons/fa6'

interface CardsServicesProps {
  title: string
  paragraph: string
}

export function CardsServices({ paragraph, title }: CardsServicesProps) {
  return (
    <>
      <div className="flex items-start gap-2  w-full border-zinc-700 rounded-md p-2 bg-zinc-800 ">
        <i className="text-violet-800 text-2xl">
          <FaCode />
        </i>
        <div className="flex flex-col items-start gap-1">
          <h6 className="text-zinc-50 font-semibold">{title} </h6>
          <p className="text-zinc-50 font-normal">{paragraph}</p>
        </div>
      </div>
    </>
  )
}
