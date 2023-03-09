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
    <div className="flex items-center justify-center">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="">
          <div className="flex items-center justify-center">
            <span>👋</span>
            <div className="ml-5">
              <p className={`${styles.pText}`}>Hello I'm</p>
              <h1 className={`${styles.headText}`}>Pablo</h1>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className={`${styles.pText}`}>Web Developer</p>
            <p className={`${styles.pText}`}>Freelancer</p>
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
