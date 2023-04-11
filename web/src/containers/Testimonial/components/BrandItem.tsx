import Image from "next/image";
import { motion } from "framer-motion";
import { clsx } from "clsx";

import { IBrand } from "@/types/brand";

interface BrandItemProps {
  brand: IBrand;
}

const BrandItem = ({ brand }: BrandItemProps) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: 'tween' }}
      className={clsx(
        'w-[150px] m-6',
        'group',
        'lg:w-[210px] lg:m-8',
        'max-sm:w-[120px] max-sm:m-4'
      )}
    >
      <Image
        src={brand.imgUrl}
        alt={brand.name}
        width={128}
        height={128}
        className={clsx(
          'w-full h-auto object-cover grayscale',
          'group-hover:grayscale-0',
        )}
      />
    </motion.div>
  )
}

export { BrandItem };