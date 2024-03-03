import Link from 'next/link'
import { ProjectCard } from './project-card'
import { Project } from '@/types/projects'

type ProjectsListSectionProps = {
  projects: Project[]
}

export const ProjectsListSection = ({ projects }: ProjectsListSectionProps) => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project) => {
        return (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        )
      })}
    </section>
  )
}
