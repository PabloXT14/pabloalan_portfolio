import { HorizontalDivider } from '@/components/divider/horizontal'
import { SectionTitle } from '@/components/section-title'
import { ProjectCard } from './project-card'
import { Button } from '@/components/ui/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

export const HighlightedProjectsSection = () => {
  return (
    <div className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em Destaque" />

      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

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
