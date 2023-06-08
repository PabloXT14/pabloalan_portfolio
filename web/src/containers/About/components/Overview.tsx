import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { images } from '@/constants'
import { styles } from '@/styles'

const Overview = () => {
  return (
    <div
      className={twMerge(
        'mx-auto mt-6 flex w-[78%] items-start gap-4 ',
        'max-2md:w-full max-2md:flex-col',
      )}
    >
      <div
        className={twMerge(
          'rounded-2xl bg-secondary px-2',
          'max-2md:mx-auto',
          'lg:h-80',
        )}
      >
        <Image
          src={images.profile.src}
          width={1200}
          height={900}
          alt={'profile'}
          className={twMerge('h-52 w-full rounded-2xl object-cover', 'lg:h-80')}
        />
      </div>
      <p className={twMerge(styles.pText, 'flex-1 text-base')}>
        Sou um desenvolvedor de software apaixonado pela área de tecnologia, com
        foco em web e experiência em JavaScript e TypeScript, incluindo o uso de
        React e Node.js. Sempre em busca de soluções inovadoras para resolver
        problemas usando a tecnologia como ferramenta. Sou dedicado, curioso e
        comprometido em aprender continuamente, sempre buscando me atualizar nas
        últimas tendências e melhores práticas da indústria. Segue algumas das
        principais ferramentas e ambientes que tenho me expecializado
        atualmente!
      </p>
    </div>
  )
}

export { Overview }
