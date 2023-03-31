import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { workOptions } from "@/constants"
import { useQuery } from "react-query";
import { urlFor, client } from "@/services/sanity-client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion, TargetAndTransition } from "framer-motion";
import { styles } from "@/styles";
import { clsx } from "clsx";
import { AppWrap } from "@/wrapper";
import { IWork } from "@/types/work";

async function getWorks() {
  const worksQuery = '*[_type == "works"]';

  const worksData = await client.fetch(worksQuery).then(data => {
    const dataRefactored = data.map((work: IWork) => {
      return {
        ...work,
        imgUrl: urlFor(work.imgUrl).url()
      }
    })

    return dataRefactored;
  });

  return worksData as IWork[];
}

const Work = () => {
  const worksQuery = useQuery({
    queryKey: ['works'],
    queryFn: getWorks,
  });
  const { data: works } = worksQuery;

  const filterWork: IWork[] = works || [];
  const [activeFilter, setActiveFilter] = useState<typeof workOptions[number]>('All');
  const [animateCard, setAnimateCard] = useState<TargetAndTransition>({
    y: 0,
    opacity: 1
  });

  function handleWorkFilter(option: typeof workOptions[number]) {
    setActiveFilter(option);
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full">
      <h2 className={styles.headText}>My Creative <span>Portfolio</span> Section</h2>

      <div className="flex flex-wrap items-center justify-start mx-0 mt-16 mb-8">
        {workOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(option)}
            className={clsx(
              styles.pText,
              styles.appFlex,
              'py-2 px-4 rounded-lg font-extrabold cursor-pointer m-2 transition-all duration-300 ease-in-out',
              'hover:bg-secondary hover:text-white',
              'lg:py-4 lg:px-8 lg:rounded-xl',
              activeFilter === option ? 'bg-secondary text-white' : 'bg-white text-zinc-900',
            )}
          >
            {option}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={clsx(
          'flex flex-wrap justify-center items-center',
        )}
      >
        {filterWork.map((work, index) => (
          <div
            key={index}
            className={clsx(
              styles.appFlex,
              'w-[270px] flex-col m-8 p-4 rounded-lg bg-white text-zinc-900 cursor-pointer',
              'transition-all duration-300 ease-in-out',
              'hover:shadow-work-item',
              'lg:w-[470px] lg:p-5 lg:rounded-xl',
              'max-sm:w-full max-sm:m-4'
            )}
          >
            <div className={clsx(
              styles.appFlex,
              'w-full h-[230px] relative',
              'lg:h-[350px]'
            )}>
              <Image
                src={work.imgUrl}
                alt={work.title}
                width={1200}
                height={900}
                className={clsx('w-full h-full object-cover rounded-lg')}
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={clsx(
                  styles.appFlex,
                  'absolute inset-0 w-full h-full bg-zinc-900/50 rounded-lg opacity-0',
                  'transition-all duration-300 ease-in-out',
                )}
              >
                <Link
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  prefetch={false}
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={clsx(
                      styles.appFlex,
                      'w-[50px] h-[50px] rounded-full bg-zinc-900/50 text-white m-4 font-sans font-extrabold cursor-pointer',
                      'transition-all duration-300 ease',
                    )}
                  >
                    <AiFillEye
                      className="w-1/2 text-white h-1/2"
                    />
                  </motion.div>
                </Link>

                <Link
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  prefetch={false}
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={clsx(
                      styles.appFlex,
                      'w-[50px] h-[50px] rounded-full bg-zinc-900/50 text-white m-4 font-sans font-extrabold cursor-pointer',
                      'transition-all duration-300 ease',
                    )}
                  >
                    <AiFillGithub
                      className="w-1/2 text-white h-1/2"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            <div
              className={clsx('flex justify-center items-center')}
            >
              <h4 className={clsx(styles.boldText)}>
                {work.title}
              </h4>
              <p className={clsx(styles.pText, 'mt-2')}>
                {work.description}
              </p>

              <div className={clsx('flex justify-center items-center')}>
                <p className={clsx(styles.pText)}>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap({
  WrappedComponent: Work,
  idName: "work",
})
