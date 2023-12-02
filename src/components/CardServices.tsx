import Image from 'next/image'

interface CardServiceTypes {
  title: string
  ImageUrl: string
  paragraph: string
}

export function CardServices({ title, ImageUrl, paragraph }: CardServiceTypes) {
  return (
    <>
      <div className="w-[310px] h-[225px] bg-slate-50 shadow-sm rounded-md flex items-center">
        <div className="flex flex-col items-center justify-center p-1">
          <Image src={ImageUrl} alt="" width={80} height={80} quality={100} />
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h4 className="text-slate-900 font-semibold text-lg">{title}</h4>
            <span className="text-slate-500 font-normal text-base">
              {paragraph}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
