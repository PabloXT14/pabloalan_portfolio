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
  const [activeFilter, setActiveFilter] = useState<typeof workOptions[number]>('All');
  const [animateCard, setAnimateCard] = useState<TargetAndTransition>({
    y: 0,
    opacity: 1
  });

  function handleWorkFilter(option: string) {

  }

  const worksQuery = useQuery({
    queryKey: ['works'],
    queryFn: getWorks,
  });
  const { data: works } = worksQuery;

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
        {works && works.map((work, index) => (
          <div
            key={index}
            className=""
          >
            <div className="">
              
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
