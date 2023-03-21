import Image from 'next/image';
import { useState } from "react";
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { clsx } from 'clsx';
import { IAbout } from '@/types/about';
import { AppWrap } from '@/wrapper';
import { GetStaticProps } from 'next';
import { client, urlFor } from '@/services/sanity-client';

interface AboutProps {
  aboutsData?: IAbout[];
}

const About = ({ aboutsData = []}: AboutProps) => {
  const [abouts, setAbouts] = useState<IAbout[]>(aboutsData);

  return (
    <>
      <h2 className={clsx(styles.headText, 'mt-8')} id="about">
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
              width={1200}
              height={900}
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

export const getStaticProps: GetStaticProps = async () => {
  const aboutsQuery = '*[_type == "abouts"]';

  const aboutsData = await client.fetch(aboutsQuery).then(data => {
    const dataRefactored = data.map((about: IAbout) => {
      return {
        ...about,
        imgUrl: urlFor(about.imgUrl).url()
      }
    });

    return dataRefactored;
  });

  return {
    props: {
      aboutsData
    }
  };
}

export default AppWrap({
  WrappedComponent: About,
  idName: 'about',
})