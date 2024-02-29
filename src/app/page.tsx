import { HeroSection } from '@/components/pages/home/hero-section'
import { HighlightedProjectsSection } from '@/components/pages/home/highlighted-projects-section'
import { KnownTechsSection } from '@/components/pages/home/known-techs-section'
import { WorkExperienceSection } from '@/components/pages/home/work-experience-section'
import { HomePageData } from '@/types/page-info'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
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
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
    }
  `
  const revalidate = 1000 * 60 * 60 * 24 // 24 hours in milliseconds

  return fetchHygraphQuery(query, revalidate)
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechsSection techs={pageData.knownTechs} />
      <HighlightedProjectsSection />
      <WorkExperienceSection />
    </>
  )
}
