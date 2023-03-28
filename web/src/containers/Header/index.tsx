import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { images } from '../../constants';
import { styles } from '@/styles';
import { clsx } from 'clsx';
import { AppWrap } from '@/wrapper';

const scaleVariants: Variants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const languagesImages = [images.node, images.react, images.typescript];

const Header = () => {

  return (
      <div
        className={clsx(
          'flex flex-row flex-1 w-full h-full pt-16 px-8 pb-0',
          'lg:pt-32',
          'max-3md:flex-col',
          'max-sm:pt-16 max-sm:px-4 max-sm:pb-8'
        )}
      >
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex-[0.65] flex flex-col justify-start items-start h-full my-0 mx-8 
        max-3md:w-full max-3md:mx-0"
        >
          <div
            className="flex flex-col items-end justify-end w-full max-3md:justify-start max-3md:items-start"
          >
            <div className="flex flex-row items-center justify-center w-auto py-4 bg-white px-7 rounded-2xl shadow-header-badge">
              <span className="text-4xl lg:text-7xl">
                👋
              </span>
              <div className="ml-5">
                <p className={`${styles.pText}`}>Hello I'm</p>
                <h1 className={`${styles.headText}`}>Pablo</h1>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-auto px-8 py-4 mt-12 bg-white rounded-2xl shadow-header-badge">
              <p className={`${styles.pText} w-full uppercase text-right`}>
                Web Developer
              </p>
              <p className={`${styles.pText} w-full uppercase text-right`}>
                Freelancer
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={clsx(
            'flex-1 h-full flex justify-end items-end relative',
            'max-3md:my-8 max-3md:mx-0 max-3md:justify-center'
          )}
        >
          <Image
            src={images.profile}
            alt="profile_bg"
            quality={100}
            className="z-10 object-contain w-full max-3md:w-3/5"
          />

          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle.src}// imagens svg no nextjs precisa importar a prop <src>
            alt="profile_circle"
            className="absolute bottom-0 left-0 right-0 z-0 w-full h-[90%]"
          />

        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants}
          className={clsx(
            'flex-[0.75] flex flex-col justify-evenly items-start h-full ml-4',
            'max-3md:w-full max-3md:flex-row max-3md:flex-wrap max-3md:ml-0'
          )}
        >
          {languagesImages.map((circleImg, index) => (
            <div
              key={`circle-${index}`}
              className={clsx(
                'flex items-center justify-center w-[100px] h-[100px] rounded-full bg-white shadow-header-badge',
                'even:m-7 even:w-[150px] even:h-[150px] last:w-[70px] last:h-[70px]',
                ' lg:first:w-[200px] lg:first:h-[200px] lg:even:w-[400px] lg:even:h-[400px] lg:last:w-[170px] lg:last:h-[170px]',
                'max-3md:m-4'
              )}
            >
              <Image
                src={circleImg}
                alt="circle_img"
                width={50}
                height={50}
                className="w-3/5 h-3/5"
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
});
