import { useId } from "react";
import { motion } from "framer-motion";
import { IExperience } from "@/types/experience";
import { Tooltip } from "react-tooltip";
import { clsx } from "clsx";
import { styles } from "@/styles";

interface ExperienceItemProps {
  experience: IExperience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const randomId = useId();

  return (
    <motion.div
      key={randomId}
    >
      <div className="">
        <p>{experience.year}</p>
      </div>

      <div>
        {experience.works.map((work) => (
          <>
            <motion.div>
              <h4>{work.name}</h4>
              <p>{work.company}</p>
            </motion.div>
            
          </>
        ))}
      </div>
    </motion.div>
  )
}

export { ExperienceItem }