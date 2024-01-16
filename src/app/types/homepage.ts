import { Technology } from './technology'
import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
  id: string
  name: string
  url: string
  iconSVG: string
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
}

export type HomePageData = {
  homepage: HomePageInfo
}
