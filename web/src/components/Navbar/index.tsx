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
          src={images.logo}
          alt="logo"
          className="w-24 h-5 lg:w-48 lg:h-10"
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
        <ThemeSwitch />

        {/* MOBILE MENU */}
        <div
          className="relative flex items-center justify-center rounded-full 2md:hidden w-9 h-9 bg-secondary"
        >
          <HiMenuAlt4
            onClick={() => setToggle(true)}
            className="w-3/4 text-white cursor-pointer h-3/4"
          />

          {toggle && (
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className={clsx(
                'fixed top-0 bottom-0 right-0 z-50 flex flex-col items-end justify-end w-3/5 h-screen p-4 bg-white bg-repeat bg-cover shadow-menu-mobile bg-menu-mobile'
              )}
            >
              <HiX
                onClick={() => setToggle(false)}
                className="mx-4 my-2 cursor-pointer text-secondary w-9 h-9"
              />
              <ul className="flex flex-col items-start justify-start w-full h-full p-0 m-0 list-none">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className="m-4"
                  >
                    <Link
                      href={`#${item}`}
                      scroll={false}
                      onClick={() => setToggle(false)}
                      className={clsx(
                        'text-base text-gray font-medium no-underline uppercase',
                        'transition-all duration-300 ease-in-out',
                        'hover:text-secondary'
                      )}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}
