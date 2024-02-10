import { HeaderContactPage } from '@/app/About/components/header'
import { ProfileContactPage } from '@/app/About/components/profile'
import { SectionTechnology } from '@/app/About/components/technology'
import { SectionValues } from '@/app/About/components/sectionValues'
import { GET_DATA_ABOUT_PAGE } from '../api/Graphql/querys'

export default async function AboutPage() {
  const { aboutPage } = await GET_DATA_ABOUT_PAGE()
  return (
    <div className="px-6 lg:px-16">
      <HeaderContactPage data={aboutPage} />
      <ProfileContactPage data={aboutPage} />
      <SectionTechnology />
      <SectionValues data={aboutPage} />
    </div>
  )
}
