import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion"

import { styles } from "@/styles";
import { IAbout } from "@/types/about"

interface CardAboutProps {
  about: IAbout;
}

const CardAbout = ({ about }: CardAboutProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className={clsx(
        'flex flex-col items-start justify-start w-48 m-8',
        'lg:w-96 lg:my-8 lg:mx-16',
      )}
    >
      <Image
        src={about.imgUrl}
        width={1200}
        height={900}
        alt={about.title}
        className={clsx(
          'object-cover w-full h-44 rounded-2xl',
          'lg:h-80'
        )}
      />

      <h3 className={clsx(styles.boldText, 'mt-5 mx-auto')}>
        {about.title}
      </h3>

      <p className={clsx(
        styles.pText,
        'mt-3 line-clamp-4',
        'transition-all duration-300 ease-in-out cursor-pointer',
        'hover:line-clamp-none'
      )}>
        {about.description}
      </p>
    </motion.div>
  )
}

export { CardAbout }