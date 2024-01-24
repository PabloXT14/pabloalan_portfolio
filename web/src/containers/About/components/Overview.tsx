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
      <p className={twMerge(styles.pText, 'flex-1 self-center text-base')}>
        Desenvolvedor Full-stack especializado em React, Next.js, Tailwind CSS e
        Node.js, combinando habilidades frontend e back-end para criar soluções
        integradas. Transformo ideias de design em interfaces visuais atraentes
        e funcionais, garantindo uma experiência de usuário coesa. Apaixonado
        por tecnologia, estou constantemente em busca de aprimoramento para
        contribuir de forma abrangente para projetos inovadores.
      </p>
    </div>
  )
}

export { Overview }
