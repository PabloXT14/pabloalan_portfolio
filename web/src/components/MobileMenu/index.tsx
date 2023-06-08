import Link from 'next/link'
import { useState } from 'react'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { motion } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'

import { menuItems } from '@/constants'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary p-1 text-white 2md:hidden"
          aria-label="Menu options"
        >
          <BiMenuAltRight className="h-full w-full" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 2md:hidden" />
        <Dialog.Content>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="
              fixed top-0 bottom-0 right-0 z-50 h-screen w-3/5 bg-white
              bg-menu-mobile bg-cover bg-repeat p-4 shadow-menu-mobile
              2md:hidden
            "
          >
            <Dialog.Close asChild>
              <button
                className="
                  right absolute top-4 right-10 flex h-9 w-9 items-center justify-center rounded-full bg-secondary p-1 text-white
                "
                aria-label="Close"
              >
                <BiX className="h-full w-full" />
              </button>
            </Dialog.Close>

            <ul className="m-0 flex w-full list-none flex-col items-start justify-start p-0">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="m-4 text-lg font-semibold uppercase text-gray no-underline transition-all duration-300 ease-in-out hover:text-secondary"
                >
                  <Link
                    href={`#${item}`}
                    scroll={false}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { MobileMenu }
