import { HeroSection } from '@/components/pages/home/hero-section'
import { HighlightedProjectsSection } from '@/components/pages/home/highlighted-projects-section'
import { KnownTechsSection } from '@/components/pages/home/known-techs-section'
import { WorkExperienceSection } from '@/components/pages/home/work-experience-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechsSection />
      <HighlightedProjectsSection />
      <WorkExperienceSection />
    </>
  )
}
