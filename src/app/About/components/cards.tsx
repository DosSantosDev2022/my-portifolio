import { FaCode } from 'react-icons/fa6'

interface CardsServicesProps {
  title: string
  paragraph: string
}

export function CardsServices({ paragraph, title }: CardsServicesProps) {
  return (
    <>
      <div className="flex w-full items-start  gap-2 rounded-md border-zinc-700 bg-zinc-800 p-2 ">
        <i className="text-2xl text-violet-800">
          <FaCode />
        </i>
        <div className="flex flex-col items-start gap-1">
          <h6 className="font-semibold text-zinc-50">{title} </h6>
          <p className="font-normal text-zinc-50">{paragraph}</p>
        </div>
      </div>
    </>
  )
}
