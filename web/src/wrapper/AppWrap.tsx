import { FunctionComponent } from "react";
import { NavigationDots, SocialMedia } from "@/components";
import { menuItems } from "@/constants";
import { styles } from "@/styles";
import { clsx } from "clsx";

interface AppWrapProps {
  WrappedComponent: FunctionComponent;
  idName: typeof menuItems[number];
  classNames?: string;
}

// HOC => Higher Order Component
const AppWrap = ({ WrappedComponent, idName, classNames }: AppWrapProps) => {
  return function HOC() {
    return (
      <div id={idName} className={clsx(
        styles.appContainer,
        idName === 'home' ? 'relative bg-center bg-repeat bg-cover bg-header-cover' : '',
        classNames,
      )}>
        <SocialMedia />
        <div className={clsx(
          styles.appWrapper,
          styles.appFlex,
          idName === 'home' ? 'p-0' : ''
        )}>
          <WrappedComponent />

          {idName === 'contact' && (
            <div className={clsx(styles.copyright)}>
              <p className={styles.pText}>@2023 Pablo Alan</p>
              <p className={styles.pText}>All rights reserved</p>
            </div>
          )}

        </div>
        <NavigationDots active={idName} />
      </div>
    )
  }
}

export default AppWrap;