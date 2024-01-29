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
      className="flex h-[300px] w-[320px] flex-col items-center justify-center gap-2 rounded-md border border-zinc-700 p-4 shadow-lg "
      key={CardTitle}
    >
      <i className="w-10">
        <CMSIcon icon={CardIcon} />
      </i>

      <div className="space-y-4 text-center">
        <h4 className="text-2xl font-bold text-zinc-50 ">{CardTitle} </h4>
        <RichText fontSize="sm" content={description.raw} />
      </div>
    </div>
  )
}
