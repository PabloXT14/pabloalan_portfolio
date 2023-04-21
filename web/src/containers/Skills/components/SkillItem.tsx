import Image from "next/image";
import { motion } from "framer-motion";
import { ISkill } from "@/types/skill";
import { clsx } from "clsx";
import { styles } from "@/styles";

interface SkillItemProps {
  skill: ISkill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div
      className={clsx(
        styles.appFlex,
        'flex-col text-center m-4',
        'lg:my-4 lg:mx-8',
      )}
    >
      <div className={clsx(
        styles.appFlex,
        'w-[90px] h-[90px] rounded-full shadow-skill-item',
        'transition-all duration-300 ease-in-out',
        'hover:-translate-y-2',
        'lg:w-[150px] lg:h-[150px]',
        'max-sm:w-[70px] max-sm:h-[70px]',
        skill.bgColor ? `bg-[${skill.bgColor}]` : 'bg-white',
      )}>
        <Image
          src={skill.icon}
          alt={skill.name}
          width={100}
          height={100}
          className={clsx(
            'w-1/2 h-1/2'
          )}
        />
      </div>
      <p className={clsx(
        styles.pText,
        'font-medium mt-2 text-center max-w-[90px] break-words',
        'lg:mt-4',
      )}>
        {skill.name}
      </p>
    </div>
  )
}

export { SkillItem }