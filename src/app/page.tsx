import { HeroSection } from '@/components/pages/home/hero-section'
import { HighlightedProjectsSection } from '@/components/pages/home/highlighted-projects-section'
import { KnownTechsSection } from '@/components/pages/home/known-techs-section'
import { WorkExperienceSection } from '@/components/pages/home/work-experience-section'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

const getPageData = async () => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        introTechnologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `
  const revalidate = 1000 * 60 * 60 * 24 // 24 hours in milliseconds

  return fetchHygraphQuery(query, revalidate)
}

export default async function Home() {
  const response = await getPageData()

  console.log(response)

  return (
    <>
      <HeroSection />
      <KnownTechsSection />
      <HighlightedProjectsSection />
      <WorkExperienceSection />
    </>
  )
}
