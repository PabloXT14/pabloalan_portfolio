'use client'

import { ProjectSection } from '@/types/projects'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/lib/animations'

type ProjectShowcaseSectionProps = {
  sections: ProjectSection[]
}

export const ProjectShowcaseSection = ({
  sections,
}: ProjectShowcaseSectionProps) => {
  return (
    <section className="container my-12 flex flex-col gap-8 md:my-32 md:gap-32">
      {sections.map((section) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>

          <Image
            src={section.image.url}
            alt={`Imagem da sessão ${section.title}`}
            width={1080}
            height={672}
            className="aspect-auto w-full rounded-lg object-cover"
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  )
}
