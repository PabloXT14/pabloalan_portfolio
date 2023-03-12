import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { clsx } from 'clsx';
import { images } from '@/constants';

export const About = () => {
  const [abouts, setAbouts] = useState([
    { title: 'Web Developer', description: 'I am a good web developer.', imgUrl: images.about01 },
    { title: 'Front-end Development', description: 'I am a good web developer.', imgUrl: images.about02 },
    { title: 'Back-end Development', description: 'I am a good web developer.', imgUrl: images.about03 },
    { title: 'Javascript Stack', description: 'I am a good web developer.', imgUrl: images.about04 }
  ]);


  useEffect(() => {
    const query = '*[_type == "abouts"]';

  }, []);

  return (
    <>
      <h2 className={clsx(styles.headText, 'mt-8')}>
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="flex flex-wrap items-start justify-center mt-8">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={clsx(
              'flex flex-col items-start justify-start w-48 m-8',
              'lg:w-96 lg:my-8 lg:mx-16'
            )}
          >
            <Image
              src={about.imgUrl}
              alt={about.title}
              className={clsx(
                'object-cover w-full h-44 rounded-2xl',
                'lg:h-80'
              )}
            />

            <h3 className={clsx(styles.boldText, 'mt-5')}>
              {about.title}
            </h3>

            <p className={clsx(styles.pText, 'mt-3')}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}
