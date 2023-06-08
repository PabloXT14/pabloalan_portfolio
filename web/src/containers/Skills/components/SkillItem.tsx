import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { ISkill } from '@/types/skill'
import { styles } from '@/styles'

interface SkillItemProps {
  skill: ISkill
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div
      className={twMerge(
        styles.appFlex,
        'm-4 flex-col text-center',
        'lg:my-4 lg:mx-8',
      )}
    >
      <div
        className={twMerge(
          styles.appFlex,
          'h-[90px] w-[90px] rounded-full bg-white shadow-skill-item',
          'transition-all duration-300 ease-in-out',
          'hover:-translate-y-2',
          'lg:h-[150px] lg:w-[150px]',
          'max-sm:h-[70px] max-sm:w-[70px]',
          skill.bgColor && `bg-[${skill.bgColor}]`,
        )}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={100}
          height={100}
          className="h-1/2 w-1/2"
        />
      </div>
      <p
        className={twMerge(
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
