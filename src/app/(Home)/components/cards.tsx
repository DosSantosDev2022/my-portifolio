import Image from 'next/image'
interface CardsProps {
  CoverUrl: string
  CardTitle: string
  CardDescription: string
}

export function Cards({ CardDescription, CardTitle, CoverUrl }: CardsProps) {
  return (
    <div
      className="w-[250px] h-[250px] flex flex-col items-center justify-center gap-2 border border-zinc-700 shadow-lg rounded-md p-4 "
      key={CardTitle}
    >
      <div className="">
        <Image
          src={CoverUrl}
          alt=""
          width={50}
          height={50}
          quality={100}
          className="hover:scale-95 transition-all duration-500 cursor-pointer"
        />
      </div>

      <div className="space-y-4 text-center">
        <h4 className="text-zinc-50 text-2xl font-bold ">{CardTitle} </h4>
        <p className="text-zinc-100 text-xs font-normal">{CardDescription} </p>
      </div>
    </div>
  )
}
