import Link from 'next/link';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

import { menuItems } from '@/constants';


const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={clsx(
            'flex items-center justify-center rounded-full w-9 h-9 p-1 bg-secondary text-white',
            '2md:hidden'
          )}
          aria-label="Menu options"
        >
          <BiMenuAltRight className='w-full h-full' />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50 2md:hidden' />
        <Dialog.Content>
          <div className={clsx(
            'fixed top-0 bottom-0 right-0 z-50 w-3/5 h-screen p-4',
            'bg-white bg-repeat bg-cover shadow-menu-mobile bg-menu-mobile',
            '2md:hidden'
          )}>
            <Dialog.Close asChild>
              <button
                className={clsx(
                  'absolute top-4 right-10 flex items-center justify-center rounded-full w-9 h-9 p-1 bg-secondary text-white right',
                )}
                aria-label="Close"
              >
                <BiX className='w-full h-full' />
              </button>
            </Dialog.Close>

            <ul
              className={clsx(
                'flex flex-col items-start justify-start w-full p-0 m-0 list-none'
              )}
            >
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={clsx(
                    'm-4',
                    'text-lg text-gray font-semibold no-underline uppercase',
                    'transition-all duration-300 ease-in-out',
                    'hover:text-secondary'
                  )}
                >
                  <Link
                    href={`#${item}`}
                    scroll={false}
                    onClick={() => setOpen(false)}
                  // className={clsx(
                  //   'text-base text-gray font-sans font-medium no-underline uppercase',
                  //   'transition-all duration-300 ease-in-out',
                  //   'hover:text-secondary'
                  // )}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { MobileMenu }


{/* <motion.div
  whileInView={{ x: [300, 0] }}
  transition={{ duration: 0.85, ease: 'easeInOut' }}
  className={clsx(
    'flex flex-col items-end justify-end w-3/5 h-screen p-4 bg-white bg-repeat bg-cover shadow-menu-mobile bg-menu-mobile'
  )}
>

  <ul className="flex flex-col items-start justify-start w-full h-full p-0 m-0 list-none">
    {menuItems.map((item) => (
      <li
        key={item}
        className="m-4"
      >
        <Menubar.Item>
          <Link
            href={`#${item}`}
            scroll={false}
            onClick={() => setOpen(false)}
            className={clsx(
              'text-base text-gray font-sans font-medium no-underline uppercase',
              'transition-all duration-300 ease-in-out',
              'hover:text-secondary'
            )}
          >
            {item}
          </Link>
        </Menubar.Item>
      </li>
    ))}
  </ul>
</motion.div> */}