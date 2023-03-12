import { GetStaticProps } from 'next'; 
import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { clsx } from 'clsx';
import { images } from '@/constants';
import { client } from '@/services/sanity-client';

interface AboutProps {
  aboutsData?: {
    title: string;
    description: string;
    imgUrl: string;
  }[];
}

// const fakeAbouts = [
//   { title: 'Web Developer', description: 'I am a good web developer.', imgUrl: images.about01 },
//   { title: 'Front-end Development', description: 'I am a good web developer.', imgUrl: images.about02 },
//   { title: 'Back-end Development', description: 'I am a good web developer.', imgUrl: images.about03 },
//   { title: 'Javascript Stack', description: 'I am a good web developer.', imgUrl: images.about04 }
// ]

export const About = ({ aboutsData = [] }: AboutProps) => {
  const [abouts, setAbouts] = useState(aboutsData);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, [])

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


export const getStaticProps: GetStaticProps = async () => {
  const query = '*[_type == "abouts"]';

  const aboutsData = await client.fetch(query).then(data => data);

  console.log(`Static Side: ${process.env.SANITY_TOKEN}`);

  return {
    props: {
      aboutsData
    }
  };
}