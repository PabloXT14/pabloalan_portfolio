import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { styles } from '@/styles'
import { IAbout } from '@/types/about'

interface CardAboutProps {
  about: IAbout
}

const CardAbout = ({ about }: CardAboutProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className={clsx(
        'm-8 flex w-48 flex-col items-start justify-start',
        'lg:my-8 lg:mx-16 lg:w-96',
      )}
    >
      <Image
        src={about.imgUrl}
        width={1200}
        height={900}
        alt={about.title}
        className={clsx('h-44 w-full rounded-2xl object-cover', 'lg:h-80')}
      />

      <h3 className={clsx(styles.boldText, 'mx-auto mt-5')}>{about.title}</h3>

      <p
        className={clsx(
          styles.pText,
          'mt-3 line-clamp-4',
          'cursor-pointer transition-all duration-300 ease-in-out',
          'hover:line-clamp-none',
        )}
      >
        {about.description}
      </p>
    </motion.div>
  )
}

export { CardAbout }
