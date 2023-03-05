import Image from 'next/image';
import { images } from '@/constants/';
import { styles } from '@/styles';
import { clsx } from 'clsx';

export const Navbar = () => {
  const menuItems = [
    'home',
    'about',
    'work',
    'skills',
    'contact',
  ];

  return (
    <nav
      className="fixed z-20 flex items-center justify-between w-full px-8 py-4 border border-solid bg-white/25 backdrop-blur-sm border-white/20"
    >
      <div className="flex items-center justify-start">
        <Image
          src={images.logo}
          alt="logo"
          className="w-24 h-5 lg:w-48 lg:h-10"
        />
      </div>
      <ul
        className="flex items-center justify-center flex-1 list-none"
      >
        {menuItems.map((item) => (
          <li
            key={`link=${item}`}
            className={`
              ${styles.pText}
              flex justify-center items-center
              mx-4 cursor-pointer flex-col
              group
          `}
          >
            <div
              className="w-2 h-2 mb-1 bg-transparent rounded-full group-hover:bg-secondary"
            />
            <a
              href={`#${item}`}
              className="flex-col font-medium no-underline uppercase transition-all duration-300 ease-in-out text-gray hover:text-secondary"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
