import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { images } from '../../constants'
import { styles } from '@/styles'
import { clsx } from 'clsx'
import { AppWrap } from '@/wrapper'

const scaleVariants: Variants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const languagesImages = [images.node, images.react, images.typescript]

const Header = () => {
  return (
    <div
      className={clsx(
        'flex h-full w-full flex-1 flex-row px-8 pt-16 pb-0',
        'lg:pt-32',
        'max-3md:flex-col',
        'max-sm:px-4 max-sm:pt-16 max-sm:pb-8',
      )}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={clsx(
          'my-0 mx-8 flex h-full flex-[0.65] flex-col items-start justify-start',
          'max-3md:mx-0 max-3md:w-full',
        )}
      >
        <div
          className={clsx(
            'flex w-full flex-col items-end justify-end gap-12',
            'max-3md:items-start max-3md:justify-start',
          )}
        >
          <div className="flex w-auto flex-row items-center justify-center rounded-2xl bg-white py-4 px-7 shadow-header-badge">
            <span className="text-4xl lg:text-7xl">👋</span>
            <div className="ml-5">
              <p className={`${styles.pText}`}>Olá eu me chamo</p>
              <h1 className={`${styles.headText}`}>Pablo</h1>
            </div>
          </div>

          <div className="flex w-auto flex-col items-center justify-center rounded-2xl bg-white px-8 py-4 shadow-header-badge">
            <p
              className={clsx(
                'w-full text-center font-bold uppercase text-zinc-900',
                styles.pText,
              )}
            >
              Desenvolvedor
            </p>
            <p className={`${styles.pText} w-full text-center`}>
              especializado em
            </p>
            <p
              className={clsx(
                'w-full text-center font-bold uppercase text-zinc-900',
                styles.pText,
              )}
            >
              Front-end
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={clsx(
          'relative flex h-full flex-1 items-end justify-end',
          'max-3md:my-8 max-3md:mx-0 max-3md:justify-center',
        )}
      >
        <Image
          src={images.profile3D}
          alt="profile_bg"
          quality={100}
          className="z-10 h-full w-full object-cover max-3md:w-4/5"
        />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle.src} // imagens svg no nextjs precisa importar a prop <src>
          alt="profile_circle"
          className="absolute bottom-0 left-0 right-0 z-0 h-[90%] w-full"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants}
        className={clsx(
          'ml-4 flex h-full flex-[0.75] flex-col items-start justify-evenly',
          'max-3md:ml-0 max-3md:w-full max-3md:flex-row max-3md:flex-wrap',
        )}
      >
        {languagesImages.map((circleImg, index) => (
          <div
            key={`circle-${index}`}
            className={clsx(
              'flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white shadow-header-badge',
              'last:h-[70px] last:w-[70px] even:m-7 even:h-[150px] even:w-[150px]',
              ' lg:first:h-[200px] lg:first:w-[200px] lg:last:h-[170px] lg:last:w-[170px] lg:even:h-[400px] lg:even:w-[400px]',
              'max-3md:m-4',
            )}
          >
            <Image
              src={circleImg}
              alt="circle_img"
              width={50}
              height={50}
              className="h-3/5 w-3/5"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap({
  WrappedComponent: Header,
  idName: 'home',
})
