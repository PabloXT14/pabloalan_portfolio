import { FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface MotionWrapProps {
  WrappedComponent: FunctionComponent
  classNames?: string
}

const MotionWrap = ({ WrappedComponent, classNames }: MotionWrapProps) => {
  return function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={clsx(classNames)}
      >
        <WrappedComponent />
      </motion.div>
    )
  }
}

export default MotionWrap
