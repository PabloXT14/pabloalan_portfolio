'use client'

import { RichText } from '@/components/rich-text'
import { Badge } from '@/components/ui/badge'
import { WorkExperience } from '@/types/work-experience'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { badgeAnimation, fadeUpAnimation } from '@/lib/animations'

type ExperienceItemProps = {
  experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    companyLogo,
    companyName,
    companyUrl,
    role,
    description,
    technologies,
  } = experience

  const startDate = new Date(experience.startDate)
  const endDate = experience.endDate ? new Date(experience.endDate) : null

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(endDate, 'MMM yyyy', { locale: ptBR })
    : 'O momento'

  const end = endDate || new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''} ${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      {/* Logo da empresa */}
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            src={companyLogo?.url}
            alt={`Logo da empresa ${companyName}`}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      {/* Informações da empresa */}
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            className="text-gray-500 transition-colors hover:text-sky-500"
          >
            @ {companyName}
          </a>
          <h4 className="text-gray-300">{role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-gray-400">
            <RichText content={description.raw} />
          </div>
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Competências
        </p>
        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {technologies.map((tech, i) => (
            <Badge
              key={`experience-${companyName}-tech-${tech.name}`}
              {...badgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
