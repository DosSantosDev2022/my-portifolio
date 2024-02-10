import { GET_ALL_DATA, GET_ALL_PROJECTS } from '../api/Graphql/querys'

import { HeroHomePage } from './components/heroHome'
import { SectionFAQs } from './components/sectionFAQs'
import { SectionOne } from './components/sectionOne'
import { HighlightedProjects } from './components/sectionProject'
import { SectionStacks } from './components/sectionStacks'
import { SectionTwo } from './components/sectiontwo'

export default async function Home() {
  const { homepage } = await GET_ALL_DATA()
  const { project } = await GET_ALL_PROJECTS()

  return (
    <>
      <HeroHomePage homeInfo={homepage} />
      <SectionOne homeInfo={homepage} />
      <SectionTwo homeInfo={homepage} />
      <SectionStacks homeInfo={homepage} />
      <HighlightedProjects data={project} />
      <SectionFAQs homeInfo={homepage} />
    </>
  )
}
