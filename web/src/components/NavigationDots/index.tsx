import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { styles } from '@/styles'
import { menuItems } from '@/constants'

type MenuItemType = (typeof menuItems)[number]

interface NavigationDotsProps {
  active: MenuItemType | string
}

export const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <div className={styles.appNavigation}>
      {menuItems.map((item, index) => (
        <Link
          key={item + index}
          href={`#${item}`}
          scroll={false}
          className={twMerge(
            styles.appNavigationDot,
            'bg-lightGray',
            active === item && 'bg-secondary',
          )}
        />
      ))}
    </div>
  )
}
