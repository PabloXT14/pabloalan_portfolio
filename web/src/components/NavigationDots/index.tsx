import Link from "next/link";
import { styles } from "@/styles";
import { menuItems } from "@/constants";
import { clsx } from 'clsx';

type MenuItemType = typeof menuItems[number];// typeof array[number] é usado para obter um tipo de união das strings dentro do array(que tem as const)

interface NavigationDotsProps {
  active: MenuItemType;
}

export const NavigationDots = ({ active }: NavigationDotsProps) => {

  return (
    <div className={styles.appNavigation}>
      {menuItems.map((item, index) => (
        <Link
          key={item + index}
          href={`#${item}`}
          scroll={false}
          className={clsx(
            styles.appNavigationDot,
            active === item ? 'bg-secondary' : 'bg-lightGray'
          )}
        />
      ))}
    </div>
  )
}
