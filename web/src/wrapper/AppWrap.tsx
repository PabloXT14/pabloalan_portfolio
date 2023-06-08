import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { menuItems } from '@/constants'
import { NavigationDots, SocialMedia } from '@/components'
import { styles } from '@/styles'

interface AppWrapProps {
  WrappedComponent: FunctionComponent
  idName: (typeof menuItems)[number] | string
  classNames?: string
}

// HOC => Higher Order Component
const AppWrap = ({ WrappedComponent, idName, classNames }: AppWrapProps) => {
  return function HOC() {
    return (
      <div
        id={idName}
        className={twMerge(
          styles.appContainer,
          idName === 'home' &&
            'relative bg-header-cover bg-cover bg-center bg-repeat',
          classNames,
        )}
      >
        <SocialMedia />
        <div
          className={twMerge(
            styles.appWrapper,
            styles.appFlex,
            idName === 'home' && 'p-0',
          )}
        >
          <WrappedComponent />

          {idName === 'contact' && (
            <div className={styles.copyright}>
              <p className={twMerge(styles.pText, 'text-center')}>
                Credits to{' '}
                <Link
                  href="https://www.youtube.com/@javascriptmastery"
                  target="_blank"
                  className="text-secondary"
                >
                  JavaScript Mastery
                </Link>
              </p>
            </div>
          )}
        </div>
        <NavigationDots active={idName} />
      </div>
    )
  }
}

export default AppWrap
