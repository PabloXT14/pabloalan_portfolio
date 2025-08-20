import type { Metadata } from 'next'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'
import { toast } from 'sonner'

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

  const revalidate = 1000 * 60 * 60 * 24 // 24 hours in milliseconds

  const response = await fetchHygraphQuery(query, revalidate)

  return response as ProjectsPageData
}

export default async function Projects() {
  const data = await getPageData()

  if (!data || !data.projects) {
    return toast.info('Nenhum projeto encontrado.')
  }

  const { projects } = data

  return (
    <>
      <PageIntroductionSection />
      <ProjectsListSection projects={projects} />
    </>
  )
}
