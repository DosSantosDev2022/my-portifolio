import { CMSIcon } from '@/components/Hygraph/IconCms'
import { RichText } from '@/components/Hygraph/richtext'
import type { RichTextContent } from '@graphcms/rich-text-types'

interface CardsProps {
  CardIcon: string
  CardTitle: string
  description: {
    raw: RichTextContent
  }
}

export function Cards({ description, CardTitle, CardIcon }: CardsProps) {
  return (
    <div
      className="w-[320px] h-[300px] flex flex-col items-center justify-center gap-2 border border-zinc-700 shadow-lg rounded-md p-4 "
      key={CardTitle}
    >
      <i className="w-10">
        <CMSIcon icon={CardIcon} />
      </i>

      <div className="space-y-4 text-center">
        <h4 className="text-zinc-50 text-2xl font-bold ">{CardTitle} </h4>
        <RichText fontSize="sm" content={description.raw} />
      </div>
    </div>
  )
}
