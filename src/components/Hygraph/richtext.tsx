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
        h2: ({ children }) => (
          <h2 className="text-3xl text-violet-700 font-bold">{children}</h2>
        ),
        ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
        ul: ({ children }) => <ul className="list-disc ml-5">{children} </ul>,
        li: ({ children }) => (
          <li className="text-zinc-50 font-light ">{children} </li>
        ),
        h5: ({ children }) => (
          <h5
            className={` text-zinc-200  mt-4 font-bold  ${getFontSizeClass()}`}
          >
            {children}
          </h5>
        ),
        p: ({ children }) => (
          <p className={` text-zinc-200 font-light mt-4 ${getFontSizeClass()}`}>
            {children}
          </p>
        ),
      }}
    />
  )
}
