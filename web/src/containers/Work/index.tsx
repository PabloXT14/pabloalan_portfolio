import { useState } from "react";
import { workOptions } from "@/constants"
import { useQuery } from "react-query";
import { urlFor, client } from "@/services/sanity-client";
import { motion, TargetAndTransition } from "framer-motion";
import { styles } from "@/styles";
import { clsx } from "clsx";
import { AppWrap } from "@/wrapper";
import { IWork } from "@/types/work";
import { WorkItem } from "./components/WorkItem";

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

  const worksQuery = useQuery({
    queryKey: ['works'],
    queryFn: getWorks,
  });
  const { data: works } = worksQuery;

  let filterWork: IWork[] = works
    ? works.filter(work => work.tags.includes(activeFilter))
    : [];

  function handleWorkFilter(option: typeof workOptions[number]) {
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      setActiveFilter(option);
    }, 500);
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
          <WorkItem key={index} work={work} />
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap({
  WrappedComponent: Work,
  idName: "work",
})
