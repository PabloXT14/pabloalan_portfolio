import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';
import { clsx } from "clsx";

import { images } from "@/constants";
import { styles } from "@/styles";

const FooterCardsContainer = () => {
  return (
    <div className={clsx(
      'w-3/5 flex justify-evenly items-center flex-wrap gap-2 mt-16 mb-8',
      'max-2md:w-full',
    )}>
      <Link
        href="mailto:pabloxt14@gmail.com"
        target="_blank"
        className={clsx(
          'max-w-[290px] w-full flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-white shadow-md',
          'transition-all duration-300 ease-in-out',
          'hover:-translate-y-2',
          'max-sm:w-full',
        )}
      >
        <Image
          src={images.email}
          alt="email"
          className={clsx(
            'w-10 h-10 mx-3'
          )}
        />
        <p className={clsx(
          styles.pText,
          'no-underline font-medium',
        )}
        >
          pabloxt14@gmail.com
        </p>
      </Link>

      <Link
        href="https://wa.me/message/KHI7YP3U7DFZP1"
        target="_blank"
        className={clsx(
          'max-w-[290px] w-full flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-white shadow-md',
          'transition-all duration-300 ease-in-out',
          'hover:-translate-y-2',
          'max-sm:w-full',
        )}
      >
        <FaWhatsapp className={clsx(
          'w-10 h-10 mx-3 text-green-500',
        )} />
        <p
          className={clsx(
            styles.pText,
            'no-underline font-medium'
          )}
        >
          Conversar no Whatsapp
        </p>
      </Link>
    </div>
  )
}

export { FooterCardsContainer };