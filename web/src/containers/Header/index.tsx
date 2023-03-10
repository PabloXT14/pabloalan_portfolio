import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { images } from '../../constants';
import { styles } from '@/styles';

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

const languagesImages = [images.react, images.node, images.typescript];

export const Header = () => {

  return (
    <div
      id='home'
      className="relative flex flex-row flex-1 w-full h-full px-4 pt-24 pb-8 bg-center bg-repeat bg-cover bg-header-cover lg:pt-32 max-3md:flex-col sm:pt-24 sm:px-8 sm:pb-0"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.65] flex flex-col justify-start items-start h-full my-0 mx-8 
        max-3md:w-full max-3md:mr-0"
      >
        <div
          className="flex flex-col items-end justify-end w-full max-3md:justify-start max-3md:items-start"
        >
          <div className="flex flex-row items-center justify-center w-auto px-8 py-4 bg-white rounded-2xl shadow-header-badge">
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
        className=""
      >
        <Image
          src={images.profile}
          alt="profile_bg"
        />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle.src}// imagens svg no nextjs precisa importar a prop <src>
          alt="profile_circle"
          className=""
        />

      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants}
        className=""
      >
        {languagesImages.map((circleImg, index) => (
          <div className="flex items-center justify-center" key={`circle-${index}`}>
            <Image
              src={circleImg}
              alt="circle_img"
              width={50}
              height={50}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
