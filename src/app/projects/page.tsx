import type { Metadata } from 'next'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

import { PageIntroductionSection } from '@/components/pages/projects/page-introduction-section'
import { ProjectsListSection } from '@/components/pages/projects/projects-list-section'
import type { ProjectsPageData } from '@/types/page-info'

export const metadata: Metadata = {
  title: 'Projetos',
}

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

  const revalidate = 60 * 60 * 24 // 24 hours in seconds

  const response = await fetchHygraphQuery(query, revalidate)

  return response as ProjectsPageData
}

export default async function Projects() {
  const data = await getPageData()

  const projects = data?.projects ?? []

  return (
    <>
      <PageIntroductionSection />
      <ProjectsListSection projects={projects} />
    </>
  )
}
