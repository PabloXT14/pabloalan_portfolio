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

  // console.log(filterWork);

  return (
    <>
      <h2 className={styles.headText}>My Creative <span>Portfolio</span> Section</h2>

      <div className="">
        {workOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(option)}
            className={clsx(
              styles.pText,
              styles.appFlex,
              activeFilter === option && 'bg-secondary'
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
          ''
        )}
      >
        {filterWork.map((work, index) => (
          <div
            key={index}
            className={clsx('flex justify-center items-center')}
          >
            <div className={clsx('flex justify-center items-center')}>
              <Image
                src={work.imgUrl}
                alt={work.title}
                width={1200}
                height={900}
                className={clsx('')}
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={clsx(
                  'flex justify-center items-center'
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
                    className={clsx('flex justify-center items-center')}
                  >
                    <AiFillEye />
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
                    className={clsx('flex justify-center items-center')}
                  >
                    <AiFillGithub />
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
    </>
  )
}

export default AppWrap({
  WrappedComponent: Work,
  idName: "work",
})
