import Image from "next/image";
import { motion } from "framer-motion";

import { IBrand } from "@/types/brand";

interface BrandItemProps {
  brand: IBrand;
}

const BrandItem = ({ brand }: BrandItemProps) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: 'tween' }}
    >
      <Image
        src={brand.imgUrl}
        alt={brand.name}
        width={128}
        height={128}
      />
    </motion.div>
  )
}

export { BrandItem };