import clsx from "clsx"

import { workOptions } from "@/constants"
import { styles } from "@/styles"

interface WorkMenuOptionsProps {
  activeFilter: typeof workOptions[number]
  onHandleWorkFilter: (option: typeof workOptions[number]) => void
}

const WorkMenuOptions = ({ activeFilter, onHandleWorkFilter }: WorkMenuOptionsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-0 my-8">
      {workOptions.map((option, index) => (
        <div
          key={index}
          onClick={() => onHandleWorkFilter(option)}
          className={clsx(
            styles.pText,
            styles.appFlex,
            'py-2 px-4 rounded-lg font-extrabold cursor-pointer m-2 transition-all duration-300 ease-in-out',
            'hover:bg-secondary hover:text-white',
            'lg:py-4 lg:px-8 lg:rounded-xl',
            activeFilter === option ? 'bg-secondary text-white' : 'bg-white text-zinc-900',
          )}
        >
          {option}
        </div>
      ))}
    </div>
  )
}

export { WorkMenuOptions }