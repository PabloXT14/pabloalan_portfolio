import { clsx } from "clsx";

import { AppWrap, MotionWrap } from "@/wrapper"
import { styles } from "@/styles"
import { FooterCardsContainer } from "./components/FooterCardsContainer";
import { FooterForm } from "./components/FooterForm";


const Footer = () => {

  return (
    <div className={clsx('flex flex-col flex-1 w-full items-center')}>
      <h2 className={clsx(styles.headText)}>
        <span>Gostaria</span> de bater um <span>papo</span> comigo?
      </h2>

      <FooterCardsContainer />

      <FooterForm />
    </div>
  )
}

export default AppWrap({
  WrappedComponent: MotionWrap({
    WrappedComponent: Footer,
    classNames: clsx('flex flex-col flex-1 w-full'),
  }),
  idName: "contact",
  classNames: styles.appPrimaryBg
});
