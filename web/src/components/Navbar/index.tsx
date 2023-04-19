import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

import { images } from '@/constants/';
import { styles } from '@/styles';
import { menuItems } from '@/constants';
import { ThemeSwitch } from '../ThemeSwitch';
import { MobileMenu } from '../MobileMenu';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={clsx(
        'fixed z-20 flex items-center justify-between w-full px-8 py-4',
        'border border-solid bg-white/25 backdrop-blur-sm border-white/20',
        '',
      )}
    >
      <div className="flex items-center justify-start">
        <Image
          src={images.logoPabloAlan}
          alt="logo"
          className="w-32 h-6 lg:w-48 lg:h-10"
        />
      </div>

      <ul
        className="items-center justify-center flex-1 hidden list-none 2md:flex"
      >
        {menuItems.map((item) => (
          <li
            key={`link=${item}`}
            className={clsx(
              styles.pText,
              'flex justify-center items-center',
              'mx-4 cursor-pointer flex-col',
              'group',
            )}
          >
            <div
              className="w-2 h-2 mb-1 duration-200 bg-transparent rounded-full group-hover:bg-secondary"
            />
            <Link
              href={`#${item}`}
              scroll={false}
              className="flex-col font-medium no-underline uppercase transition-all duration-300 ease-in-out text-gray hover:text-secondary"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className={clsx(
        'flex items-center gap-2'
      )}>
        {/* THEME SWITCH */}
        {/* <ThemeSwitch /> */}

        {/* MOBILE MENU */}
        <MobileMenu />
      </div>
    </nav>
  )
}
