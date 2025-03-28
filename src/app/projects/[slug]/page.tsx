import type { Metadata } from 'next'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

import { ProjectDetailsSection } from '@/components/pages/project/project-details-section'
import { ProjectShowcaseSection } from '@/components/pages/project/project-showcase-section'
import type { ProjectPageData, ProjectsPageStaticData } from '@/types/page-info'

type Params = Promise<{
  slug: string
}>

const getProjectDetails = async (
  slug: string,
): Promise<ProjectPageData | null> => {
  const query = `
    query ProjectQuery() {
      project(where: { slug: "${slug}" }) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title,
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
  `

  const revalidate = 1000 * 60 * 60 * 24 // 24 hours in milliseconds

  const data = (await fetchHygraphQuery(query, revalidate)) as ProjectPageData

  return data?.project ? data : null
}

export default async function Project(props: { params: Params }) {
  const params = await props.params

  const { slug } = params

  const data = await getProjectDetails(slug)

  if (!data) {
    return <h1>Projeto não encontrado</h1>
  }

  const { project } = data

  return (
    <>
      <ProjectDetailsSection project={project} />
      <ProjectShowcaseSection sections={project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}

export async function generateMetadata(props: {
  params: Params
}): Promise<Metadata> {
  const params = await props.params

  const { slug } = params

  const data = await getProjectDetails(slug)

  if (!data) {
    return {}
  }

  const { project } = data

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 230,
        },
      ],
    },
  }
}
