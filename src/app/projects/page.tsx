import { PageIntroductionSection } from '@/components/pages/projects/page-introduction-section'
import { ProjectsListSection } from '@/components/pages/projects/projects-list-section'
import { ProjectsPageData } from '@/types/page-info'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
  `

  const revalidate = 1000 * 60 * 60 * 24 // 24 hours in milliseconds

  return fetchHygraphQuery(query, revalidate)
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroductionSection />
      <ProjectsListSection projects={projects} />
    </>
  )
}
