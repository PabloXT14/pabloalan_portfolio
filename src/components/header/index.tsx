'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <header className="absolute top-0 z-10 flex h-24 w-full items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="Logo GB Dev"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => {
            return <NavItem key={item.href} {...item} />
          })}
        </nav>
      </div>
    </header>
  )
}
