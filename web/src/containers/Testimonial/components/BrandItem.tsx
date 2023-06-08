import Image from 'next/image'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

import { IBrand } from '@/types/brand'

interface BrandItemProps {
  brand: IBrand
}

const BrandItem = ({ brand }: BrandItemProps) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: 'tween' }}
      className={twMerge(
        'm-6 w-[150px]',
        'lg:m-8 lg:w-[210px]',
        'max-sm:m-4 max-sm:w-[120px]',
        'group',
      )}
    >
      <Image
        src={brand.imgUrl}
        alt={brand.name}
        width={128}
        height={128}
        className={twMerge(
          'h-auto w-full object-cover grayscale',
          'group-hover:grayscale-0',
        )}
      />
    </motion.div>
  )
}

export { BrandItem }
