import { Card } from '@/components/ui/card'
import { Technology } from './technology'
import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
  id: string
  name: string
  url: string
  iconSVG: string
}

export type Card = {
  id: string
  title: string
  iconSvg: string
  content: {
    raw: RichTextContent
  }
}

export type HomePageInfo = {
  slug: string
  title: string
  description: {
    raw: RichTextContent
  }
  profileImage: {
    url: string
  }
  technology: Technology[]
  socials: Social[]
  sectionOne: {
    id: string
    title: string
    content: {
      raw: RichTextContent
    }
  }

  sectionTwo: {
    card: Card[]
    figure: {
      url: string
    }
  }

  sectionStack: {
    title: string
    card: Card[]
  }
}

export type HomePageData = {
  homepage: HomePageInfo
}
