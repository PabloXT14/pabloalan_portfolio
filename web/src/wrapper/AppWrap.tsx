import { FunctionComponent } from 'react'
import { NavigationDots, SocialMedia } from '@/components'
import { menuItems } from '@/constants'
import { styles } from '@/styles'
import { clsx } from 'clsx'
import Link from 'next/link'

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
        className={clsx(
          styles.appContainer,
          idName === 'home'
            ? 'relative bg-header-cover bg-cover bg-center bg-repeat'
            : '',
          classNames,
        )}
      >
        <SocialMedia />
        <div
          className={clsx(
            styles.appWrapper,
            styles.appFlex,
            idName === 'home' ? 'p-0' : '',
          )}
        >
          <WrappedComponent />

          {idName === 'contact' && (
            <div className={clsx(styles.copyright)}>
              <p className={clsx(styles.pText, 'text-center')}>
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
