import Image from 'next/image'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

import { IBrand } from '@/types/brand'

interface BrandItemProps {
  brand: IBrand
}

const BrandItem = ({ brand }: BrandItemProps) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: 'tween' }}
      className={clsx(
        'm-6 w-[150px]',
        'group',
        'lg:m-8 lg:w-[210px]',
        'max-sm:m-4 max-sm:w-[120px]',
      )}
    >
      <Image
        src={brand.imgUrl}
        alt={brand.name}
        width={128}
        height={128}
        className={clsx(
          'h-auto w-full object-cover grayscale',
          'group-hover:grayscale-0',
        )}
      />
    </motion.div>
  )
}

export { BrandItem }
