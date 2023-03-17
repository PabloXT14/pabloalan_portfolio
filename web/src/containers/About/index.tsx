import Image from 'next/image';
import { useState } from "react";
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { clsx } from 'clsx';
import { IAbout } from '@/types/about';
import { AppWrap } from '@/wrapper';
import { client, urlFor } from '@/services/sanity-client';

interface AboutProps {
  aboutsData: IAbout[];
}

export const About = ({ aboutsData }: AboutProps) => {
  const [abouts, setAbouts] = useState<IAbout[]>(aboutsData);

  // async function fetchData() {
  //   const aboutsQuery = '*[_type == "abouts"]';

  //   let aboutsData = await client.fetch(aboutsQuery).then(data => data);
  //   aboutsData = aboutsData.map((about: IAbout) => {
  //     return {
  //       ...about,
  //       imgUrl: urlFor(about.imgUrl).url()
  //     }
  //   });
  //   setAbouts(aboutsData);
  // }

  // useEffect(() => {
    
  //   fetchData();
  // }, [])

  return (
    <AppWrap idName='about'>
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
    </AppWrap>
  )
}

// export default AppWrap({
//   ChildrenComponent: About,
//   idName: 'about',
// })