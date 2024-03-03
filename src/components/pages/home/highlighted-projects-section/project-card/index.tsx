'use client'

import { Link } from '@/components/link'
import { Badge } from '@/components/ui/badge'
import { Project } from '@/types/projects'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { badgeAnimation } from '@/lib/animations'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const animProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  }

  return (
    <motion.div
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="h-full w-full rounded-lg object-cover"
        />
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 text-lg font-medium text-gray-50"
          {...animProps}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
          />
          {project.title}
        </motion.h3>

        <motion.p
          className="my-6 line-clamp-3 text-gray-400"
          {...animProps}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {project.technologies.map((tech, i) => (
            <Badge
              key={`${project.title}-tech-${tech.name}`}
              {...badgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            >
              {tech.name}
            </Badge>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
