import { twMerge } from 'tailwind-merge'

import { AppWrap, MotionWrap } from '@/wrapper'
import { styles } from '@/styles'
import { FooterCardsContainer } from './components/FooterCardsContainer'
import { FooterForm } from './components/FooterForm'

const Footer = () => {
  return (
    <div className={twMerge('flex w-full flex-1 flex-col items-center')}>
      <h2 className={twMerge(styles.headText)}>
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
    classNames: twMerge('flex flex-col flex-1 w-full'),
  }),
  idName: 'contact',
  classNames: styles.appPrimaryBg,
})
