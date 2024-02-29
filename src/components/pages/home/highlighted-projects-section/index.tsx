import { HorizontalDivider } from '@/components/divider/horizontal'
import { SectionTitle } from '@/components/section-title'
import { ProjectCard } from './project-card'
import { Button } from '@/components/ui/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'
import { Project } from '@/types/projects'

type HighlightedProjectsSectionProps = {
  projects: Project[]
}

export const HighlightedProjectsSection = ({
  projects,
}: HighlightedProjectsSectionProps) => {
  return (
    <div className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em Destaque" />

      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects">
            <Button variant="shadow" className="w-max">
              Ver todos
              <HiArrowNarrowRight />
            </Button>
          </Link>
        </p>
      </div>
    </div>
  )
}
