import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

import { images } from "@/constants";
import { styles } from "@/styles";

const FooterCardsContainer = () => {
  return (
    <div className={clsx(
      'w-3/5 flex justify-evenly items-center flex-wrap gap-2 mt-16 mb-8',
      'max-2md:w-full',
    )}>
      <div className={clsx(
        'max-w-[290px] w-full flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-white',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-footer-card',
        'max-sm:w-full',
      )}>
        <Image
          src={images.email}
          alt="email"
          className={clsx(
            'w-10 h-10 mx-3'
          )}
        />
        <Link
          href="mailto:pabloxt14@gmail.com"
          className={clsx(
            styles.pText,
            'no-underline font-medium',
          )}
        >
          pabloxt14@gmail.com
        </Link>
      </div>

      <div className={clsx(
        'max-w-[290px] w-full flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-white',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-footer-card',
        'max-sm:w-full',
      )}>
        <Image
          src={images.mobile}
          alt="phone"
          className={clsx(
            'w-10 h-10 mx-3'
          )}
        />
        <Link
          href="tel:+55 (19) 971540560"
          className={clsx(
            styles.pText,
            'no-underline font-medium'
          )}
        >
          +55 (19) 971540560
        </Link>
      </div>
    </div>
  )
}

export { FooterCardsContainer };