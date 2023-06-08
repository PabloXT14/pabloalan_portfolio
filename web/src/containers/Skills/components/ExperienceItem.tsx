import { motion } from 'framer-motion'
import { HiCursorClick } from 'react-icons/hi'
import { Tooltip } from 'react-tooltip'
import { twMerge } from 'tailwind-merge'

import { IExperience } from '@/types/experience'
import { styles } from '@/styles'

interface ExperienceItemProps {
  experience: IExperience
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <motion.div className="my-4 flex w-full flex-row items-start justify-start">
      <div className={twMerge('mr-12', 'max-sm:mr-4')}>
        <p
          className={twMerge(styles.boldText, 'font-extrabold text-secondary')}
        >
          {experience.year}
        </p>
      </div>

      <motion.div className="flex-1">
        {experience.works.map((work, index) => (
          <div key={`${work.name}_${index}`}>
            <motion.div
              data-tooltip-id={`${work.name}_${index}`}
              data-tooltip-content={work.description}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex cursor-pointer flex-col items-start justify-start"
            >
              <h4
                className={twMerge(styles.boldText, 'flex gap-2 font-medium')}
              >
                {work.name}
                <HiCursorClick />
              </h4>
              <p
                className={twMerge(styles.pText, 'mt-1 font-normal text-gray')}
              >
                {work.company}
              </p>
            </motion.div>
            <Tooltip
              id={`${work.name}_${index}`}
              classNameArrow={twMerge('!bg-secondary')}
              className={twMerge(
                '!max-w-xs !rounded-md !bg-white !p-4 !text-center !text-gray !opacity-100 !shadow-2xl',
                'lg:!max-w-lg lg:!text-3xl',
                'max-sm:!w-11/12',
              )}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export { ExperienceItem }
