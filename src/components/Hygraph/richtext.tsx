import { RichText as CmsRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CmsRichText>

export function RichText({ ...props }: RichTextProps) {
  return (
    <CmsRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-slate-950 font-bold text-2xl">{children} </b>
        ),
        p: ({ children }) => (
          <p className="text-lg text-zinc-200 font-normal">{children}</p>
        ),
      }}
    />
  )
}
