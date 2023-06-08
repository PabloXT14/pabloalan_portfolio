import { twMerge } from 'tailwind-merge'

import { workOptions } from '@/constants'
import { styles } from '@/styles'

interface WorkMenuOptionsProps {
  activeFilter: (typeof workOptions)[number]
  onHandleWorkFilter: (option: (typeof workOptions)[number]) => void
}

const WorkMenuOptions = ({
  activeFilter,
  onHandleWorkFilter,
}: WorkMenuOptionsProps) => {
  return (
    <div className="mx-0 my-8 flex flex-wrap items-center justify-center">
      {workOptions.map((option, index) => (
        <div
          key={index}
          onClick={() => onHandleWorkFilter(option)}
          className={twMerge(
            styles.pText,
            styles.appFlex,
            'm-2 cursor-pointer rounded-lg bg-white py-2 px-4 font-extrabold text-zinc-900 transition-all duration-300 ease-in-out',
            'hover:bg-secondary hover:text-white',
            'lg:rounded-xl lg:py-4 lg:px-8',
            activeFilter === option && 'bg-secondary text-white',
          )}
        >
          {option}
        </div>
      ))}
    </div>
  )
}

export { WorkMenuOptions }
