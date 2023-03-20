import { FunctionComponent, ReactNode } from "react";
import { NavigationDots, SocialMedia } from "@/components";
import { menuItems } from "@/constants";
import { styles } from "@/styles";
import { clsx } from "clsx";

interface AppWrapProps {
  ChildrenComponent: FunctionComponent;
  idName: typeof menuItems[number];
  classNames?: string;
}

// HOC => Higher Order Component
// export const AppWrap = ({ ChildrenComponent, idName, classNames, ...rest }: AppWrapProps) => function HOC() {
//   return (
//     <div id={idName} className={clsx(
//       styles.appContainer,
//       classNames,
//       idName === 'home' ? 'relative bg-center bg-repeat bg-cover bg-header-cover' : ''
//     )}>
//       <SocialMedia />
//       <div className={clsx(
//         styles.appWrapper,
//         styles.appFlex,
//         idName === 'home' ? 'p-0' : ''
//       )}>
//         <ChildrenComponent {...rest} />

//         <div className={clsx(
//           styles.copyright,
//           idName === 'home' ? 'hidden' : ''
//         )}>
//           <p className={styles.pText}>@2023 Pablo Alan</p>
//           <p className={styles.pText}>All rights reserved</p>
//         </div>
//       </div>
//       <NavigationDots active={idName} />
//     </div>
//   )
// }

interface AppWrapTest {
  children: ReactNode;
  idName: typeof menuItems[number];
}

// // ===========
export const AppWrap = ({ children, idName }: AppWrapTest) => {
  return (
    <div id={idName} className={clsx(
      styles.appContainer,
      idName === 'home' ? 'relative bg-center bg-repeat bg-cover bg-header-cover' : ''
    )}>
      <SocialMedia />
      <div className={clsx(
        styles.appWrapper,
        styles.appFlex,
        idName === 'home' ? 'p-0' : ''
      )}>
        {children}

        <div className={clsx(
          styles.copyright,
          idName === 'home' ? 'hidden' : ''
        )}>
          <p className={styles.pText}>@2023 Pablo Alan</p>
          <p className={styles.pText}>All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}