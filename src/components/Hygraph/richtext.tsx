import { RichText as CmsRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CmsRichText> & {
  fontSize?: string
}

export function RichText({ fontSize = 'md', ...props }: RichTextProps) {
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-sm'
      case 'md':
        return 'text-md'
      case 'lg':
        return 'text-lg'
      case '2xl':
        return 'text-2xl'
      case '3xl':
        return 'text-3xl'
      case '4xl':
        return 'text-4xl'
      // Adicione outros tamanhos conforme necessário
      default:
        return 'text-md'
    }
  }

  return (
    <CmsRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className={`text-zinc-200 font-bold ${getFontSizeClass()}`}>
            {children}
          </b>
        ),
        p: ({ children }) => (
          <p
            className={` text-zinc-200 font-normal mt-4 ${getFontSizeClass()}`}
          >
            {children}
          </p>
        ),
      }}
    />
  )
}
