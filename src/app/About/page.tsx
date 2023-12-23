import { HeaderContactPage } from '@/app/About/components/header'
import { ProfileContactPage } from '@/app/About/components/profile'
import { SectionTechnology } from '@/app/About/components/technology'
import { SectionValues } from '@/app/About/components/sectionValues'
import { SectionProjectResums } from './components/sectionProjectResum'

export default function AboutPage() {
  return (
    <>
      <>
        <HeaderContactPage />
        <ProfileContactPage />
        <SectionTechnology />
        <SectionValues />
        <SectionProjectResums />
      </>
    </>
  )
}
