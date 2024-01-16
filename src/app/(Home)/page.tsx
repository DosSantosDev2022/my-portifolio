import { fetchHygraph } from '../api/Hygraph/Hygraph-api'
import { HomePageData } from '../types/homepage'
import { HeroHomePage } from './components/heroHome'
import { SectionFAQs } from './components/sectionFAQs'
import { SectionOne } from './components/sectionOne'
import { SectionStacks } from './components/sectionStacks'
import { SectionTwo } from './components/sectiontwo'

const GET_PAGE_DATA = async (): Promise<HomePageData> => {
  const query = `
  query Homepage {
    homepage(where: {slug: "home"}) {
      slug
      title
      description {
        raw
      }
      profileImage {
        url
      }
      technologies {
        name
        iconSvg
      }
      socials {
        id
        name
        url
        iconSvg
      }
    }
  }
  `

  return fetchHygraph(query)
}

export default async function Home() {
  const { homepage } = await GET_PAGE_DATA()

  return (
    <>
      <HeroHomePage homeInfo={homepage} />
      <SectionOne />
      <SectionTwo />
      <SectionStacks />
      <SectionFAQs />
    </>
  )
}
