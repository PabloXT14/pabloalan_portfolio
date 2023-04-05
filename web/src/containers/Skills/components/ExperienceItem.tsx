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

      )}
    >
      <div className="">
        <p className={styles.boldText}>{experience.year}</p>
      </div>

      <motion.div className={clsx(

      )}>
        {experience.works.map((work, index) => (
          <div key={`${work.name}_${index}`}>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={clsx()}
              data-tip
              data-for={work.name}
            >
              <h4 className={styles.boldText}>{work.name}</h4>
              <p className={styles.boldText}>{work.company}</p>
            </motion.div>
            <Tooltip
              id={work.name}     
              classNameArrow={clsx('text-white')}
              className={clsx()}
            >
              {work.description}
            </Tooltip>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export { ExperienceItem }