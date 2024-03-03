'use client'

import { Link } from '@/components/link'
import { RichText } from '@/components/rich-text'
import { SectionTitle } from '@/components/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Project } from '@/types/projects'
import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { badgeAnimation, fadeUpAnimation } from '@/lib/animations'

type ProjectDetailsSectionProps = {
  project: Project
}

export const ProjectDetailsSection = ({
  project,
}: ProjectDetailsSectionProps) => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-24 pb-10 sm:min-h-screen sm:pb-24">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="items-center text-center sm:[&>h3]:text-4xl"
      />

      <motion.div
        className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText content={project.description.raw} />
      </motion.div>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {project.technologies.map((tech, i) => (
          <Badge
            key={`${project.title}-tech-${tech.name}`}
            {...badgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            {tech.name}
          </Badge>
        ))}
      </div>

      <motion.div
        className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4"
        {...fadeUpAnimation}
      >
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}

        {project.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        )}
      </motion.div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
