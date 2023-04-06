import Image from 'next/image';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { clsx } from 'clsx';
import { IAbout } from '@/types/about';
import { AppWrap, MotionWrap } from '@/wrapper';
import { client, urlFor } from '@/services/sanity-client';

async function getAbouts() {
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

  return aboutsData as IAbout[];
}

const About = () => {
  const aboutsQuery = useQuery({
    queryKey: ['abouts'],
    queryFn: getAbouts,
  });

  const { data: abouts } = aboutsQuery;

  return (
    <div className={clsx('flex-1 w-full flex-col')}>
      <h2 className={clsx(styles.headText)}>
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="flex flex-wrap items-start justify-center mt-8">
        {abouts && abouts.map((about, index) => (
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
    </div>
  )
}

export default AppWrap({
  WrappedComponent: MotionWrap({
    WrappedComponent: About,
    classNames: '',
  }),
  idName: 'about',
  classNames: styles.appWhiteBg
})