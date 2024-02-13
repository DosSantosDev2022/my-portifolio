import { HeroAboutPage } from '@/app/About/components/HeroAbaoutPage'
import { ProfileAboutPage } from '@/app/About/components/profileAboutPage'
import { SectionTechnology } from '@/app/About/components/technology'
import { SectionValues } from '@/app/About/components/sectionValues'
import { GET_DATA_ABOUT_PAGE } from '../api/Graphql/querys'

export default async function AboutPage() {
  const { aboutPage } = await GET_DATA_ABOUT_PAGE()
  return (
    <div className="px-6 lg:px-16">
      <HeroAboutPage data={aboutPage} />
      <ProfileAboutPage data={aboutPage} />
      <SectionTechnology data={aboutPage} />
      <SectionValues data={aboutPage} />
    </div>
  )
}
