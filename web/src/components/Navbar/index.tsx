import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

import { images, menuItems } from '@/constants/'
import { styles } from '@/styles'

import { ThemeSwitch } from '../ThemeSwitch'
import { MobileMenu } from '../MobileMenu'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={clsx(
        'fixed z-20 flex w-full items-center justify-between px-8 py-4',
        'border border-solid border-white/20 bg-white/25 backdrop-blur-sm',
        '',
      )}
    >
      <div className="flex items-center justify-start">
        <Image
          src={images.logoPabloAlan}
          alt="logo"
          className="h-6 w-32 lg:h-10 lg:w-48"
        />
      </div>

      <ul className="hidden flex-1 list-none items-center justify-center 2md:flex">
        {menuItems.map((item) => (
          <li
            key={`link=${item}`}
            className={clsx(
              styles.pText,
              'flex items-center justify-center',
              'mx-4 cursor-pointer flex-col',
              'group',
            )}
          >
            <div className="mb-1 h-2 w-2 rounded-full bg-transparent duration-200 group-hover:bg-secondary" />
            <Link
              href={`#${item}`}
              scroll={false}
              className="flex-col font-medium uppercase text-gray no-underline transition-all duration-300 ease-in-out hover:text-secondary"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className={clsx('flex items-center gap-2')}>
        {/* THEME SWITCH */}
        {/* <ThemeSwitch /> */}

        {/* MOBILE MENU */}
        <MobileMenu />
      </div>
    </nav>
  )
}
