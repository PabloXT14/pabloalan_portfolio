import Image from 'next/image';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { clsx } from 'clsx';
import { IAbout } from '@/types/about';
import { AppWrap, MotionWrap } from '@/wrapper';
import { client, urlFor } from '@/services/sanity-client';
import { images } from '@/constants';

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

      <div className={clsx(
        'flex justify-center gap-4 mt-6 mx-auto w-4/5',
        'max-1.5md:w-full'
      )}>
        <div className={clsx(
          'pt-4 px-2 rounded-2xl bg-secondary',
          'lg:h-80'
        )}>
          <Image
            src={images.profile.src}
            width={1200}
            height={900}
            alt={'profile'}
            className={clsx(
              'object-cover w-full h-44 rounded-2xl',
              'lg:h-80'
            )}
          />
        </div>
        <p className={clsx(
          styles.pText,
          'flex-1 text-base'
        )}>
          Sou um desenvolvedor de software apaixonado pela área de tecnologia, com foco em web e experiência em JavaScript e TypeScript, incluindo o uso de React e Node.js. Sempre em busca de soluções inovadoras para resolver problemas usando a tecnologia como ferramenta. Sou dedicado, curioso e comprometido em aprender continuamente, sempre buscando me atualizar nas últimas tendências e melhores práticas da indústria. Segue algumas das principais ferramentas e ambientes que tenho me expecializado atualmente!
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center mt-6">
        {abouts && abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={clsx(
              'flex flex-col items-start justify-start w-48 m-8',
              'lg:w-96 lg:my-8 lg:mx-16',
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

            <p className={clsx(
              styles.pText,
              'mt-3 line-clamp-4',
              'transition-all duration-300 ease-in-out cursor-pointer',
              'hover:line-clamp-none'
            )}>
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