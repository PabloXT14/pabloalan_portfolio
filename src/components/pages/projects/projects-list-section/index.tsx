import Link from 'next/link'
import { ProjectCard } from './project-card'

export const ProjectsListSection = () => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <Link key={`project-${index}`} href="/projects/bookwise">
            <ProjectCard />
          </Link>
        )
      })}
    </section>
  )
}
