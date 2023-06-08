import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { clsx } from 'clsx'

import { images } from '@/constants'
import { styles } from '@/styles'

const FooterCardsContainer = () => {
  return (
    <div
      className={clsx(
        'mt-16 mb-8 flex w-3/5 flex-wrap items-center justify-evenly gap-2',
        'max-2md:w-full',
      )}
    >
      <Link
        href="mailto:pabloxt14@gmail.com"
        target="_blank"
        className={clsx(
          'my-4 flex w-full max-w-[290px] cursor-pointer flex-row items-center justify-start rounded-xl bg-white p-4 shadow-md',
          'transition-all duration-300 ease-in-out',
          'hover:-translate-y-2',
          'max-sm:w-full',
        )}
      >
        <Image
          src={images.email}
          alt="email"
          className={clsx('mx-3 h-10 w-10')}
        />
        <p className={clsx(styles.pText, 'font-medium no-underline')}>
          pabloxt14@gmail.com
        </p>
      </Link>

      <Link
        href="https://wa.me/message/KHI7YP3U7DFZP1"
        target="_blank"
        className={clsx(
          'my-4 flex w-full max-w-[290px] cursor-pointer flex-row items-center justify-start rounded-xl bg-white p-4 shadow-md',
          'transition-all duration-300 ease-in-out',
          'hover:-translate-y-2',
          'max-sm:w-full',
        )}
      >
        <FaWhatsapp className={clsx('mx-3 h-10 w-10 text-green-500')} />
        <p className={clsx(styles.pText, 'font-medium no-underline')}>
          Conversar no Whatsapp
        </p>
      </Link>
    </div>
  )
}

export { FooterCardsContainer }
