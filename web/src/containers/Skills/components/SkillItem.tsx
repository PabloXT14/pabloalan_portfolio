import Image from 'next/image'
import { motion } from 'framer-motion'
import { ISkill } from '@/types/skill'
import { clsx } from 'clsx'
import { styles } from '@/styles'

interface SkillItemProps {
  skill: ISkill
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div
      className={clsx(
        styles.appFlex,
        'm-4 flex-col text-center',
        'lg:my-4 lg:mx-8',
      )}
    >
      <div
        className={clsx(
          styles.appFlex,
          'h-[90px] w-[90px] rounded-full shadow-skill-item',
          'transition-all duration-300 ease-in-out',
          'hover:-translate-y-2',
          'lg:h-[150px] lg:w-[150px]',
          'max-sm:h-[70px] max-sm:w-[70px]',
          skill.bgColor ? `bg-[${skill.bgColor}]` : 'bg-white',
        )}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={100}
          height={100}
          className={clsx('h-1/2 w-1/2')}
        />
      </div>
      <p
        className={clsx(
          styles.pText,
          'mt-2 max-w-[90px] break-words text-center font-medium',
          'lg:mt-4',
        )}
      >
        {skill.name}
      </p>
    </div>
  )
}

export { SkillItem }
