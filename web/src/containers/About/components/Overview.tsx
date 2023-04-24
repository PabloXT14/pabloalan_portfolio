import Image from "next/image"
import clsx from "clsx"

import { images } from "@/constants"
import { styles } from "@/styles"

const Overview = () => {
  return (
    <div className={clsx(
      'flex items-start gap-4 mt-6 mx-auto w-[78%] ',
      'max-2md:flex-col max-2md:w-full',
    )}>
      <div className={clsx(
        'px-2 rounded-2xl bg-secondary',
        'max-2md:mx-auto',
        'lg:h-80'
      )}>
        <Image
          src={images.profile.src}
          width={1200}
          height={900}
          alt={'profile'}
          className={clsx(
            'object-cover w-full h-52 rounded-2xl',
            'lg:h-80'
          )}
        />
      </div>
      <p className={clsx(
        styles.pText,
        'flex-1 text-base',
      )}>
        Sou um desenvolvedor de software apaixonado pela área de tecnologia, com foco em web e experiência em JavaScript e TypeScript, incluindo o uso de React e Node.js. Sempre em busca de soluções inovadoras para resolver problemas usando a tecnologia como ferramenta. Sou dedicado, curioso e comprometido em aprender continuamente, sempre buscando me atualizar nas últimas tendências e melhores práticas da indústria. Segue algumas das principais ferramentas e ambientes que tenho me expecializado atualmente!
      </p>
    </div>
  )
}

export { Overview }