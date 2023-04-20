import Image from 'next/image';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { clsx } from 'clsx';
import { IAbout } from '@/types/about';
import { AppWrap, MotionWrap } from '@/wrapper';
import { client, urlFor } from '@/services/sanity-client';
import { Overview } from './components/Overview';
import { CardAbout } from './components/CardAbout';

async function getAbouts() {
  const aboutsQuery = '*[_type == "abouts"] | order(_updatedAt desc)';

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
        <span>Visão</span> geral sobre <span>Mim</span>
      </h2>

      <Overview />

      <div className="flex flex-wrap items-start justify-center mt-6">
        {abouts && abouts.map((about, index) => (
          <CardAbout
            key={about.title + index}
            about={about}
          />
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