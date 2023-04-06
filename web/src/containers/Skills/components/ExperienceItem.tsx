import { motion } from "framer-motion";
import { IExperience } from "@/types/experience";
import { Tooltip } from "react-tooltip";
import { clsx } from "clsx";
import { styles } from "@/styles";

interface ExperienceItemProps {
  experience: IExperience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {

  return (
    <motion.div
      className={clsx(
        'w-full flex flex-row justify-start items-start my-4'
      )}
    >
      <div className={clsx(
        'mr-12',
        'max-sm:mr-4'
      )}>
        <p className={clsx(
          styles.boldText,
          'font-extrabold text-secondary'
        )}>
          {experience.year}
        </p>
      </div>

      <motion.div className={clsx(
        'flex-1'
      )}>
        {experience.works.map((work, index) => (
          <div key={`${work.name}_${index}`}>
            <motion.div
              data-tooltip-id={`${work.name}_${index}`}
              data-tooltip-content={work.description}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={clsx(
                'flex flex-col justify-start items-start mb-4 cursor-pointer'
              )}
            >
              <h4 className={clsx(
                styles.boldText,
                'font-medium'
              )}>
                {work.name}
              </h4>
              <p className={clsx(
                styles.pText,
                'font-normal text-gray mt-1'
              )}>
                {work.company}
              </p>
            </motion.div>
            <Tooltip
              id={`${work.name}_${index}`}
              classNameArrow={clsx('!bg-secondary')}
              className={clsx(
                '!max-w-xs !bg-white !shadow-tootip !rounded-md !p-4 !text-gray !text-center !opacity-100',
                'lg:!text-3xl lg:!max-w-lg'
              )}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export { ExperienceItem }