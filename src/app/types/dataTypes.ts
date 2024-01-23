import { Card } from '@/components/ui/card'

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
export type Technology = {
  iconSVG: string
  name: string
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

export type ProjectInfoData = {
  slug: string
  title: string
  description: string
  coverImage: {
    url: string
  }
  deployLink: string
  codeLink: string
  technologies: Technology[]
  completeDescription: {
    raw: RichTextContent
  }
}

export type Project = {
  project: ProjectInfoData[]
}
