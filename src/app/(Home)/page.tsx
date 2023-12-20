import { HeaderHomePage } from './components/headerHome'
import { SectionFAQs } from './components/sectionFAQs'
import { SectionOne } from './components/sectionOne'
import { SectionStacks } from './components/sectionStacks'
import { SectionTwo } from './components/sectiontwo'

export default function Home() {
  return (
    <>
      <HeaderHomePage />
      <SectionOne />
      <SectionTwo />
      <SectionStacks />
      <SectionFAQs />
    </>
  )
}
