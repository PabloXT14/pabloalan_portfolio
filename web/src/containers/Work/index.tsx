import { useState } from "react";
import { workOptions } from "@/constants"
import { useQuery } from "react-query";
import { urlFor, client } from "@/services/sanity-client";
import { motion, TargetAndTransition } from "framer-motion";
import { styles } from "@/styles";
import { clsx } from "clsx";
import { AppWrap, MotionWrap } from "@/wrapper";
import { IWork } from "@/types/work";
import { WorkItem } from "./components/WorkItem";
import { WorkMenuOptions } from "./components/WorkMenuOptions";

async function getWorks() {
  const worksQuery = '*[_type == "works"] | order(_createdAt desc)';

  const worksData = await client.fetch(worksQuery).then(data => {
    const dataRefactored = data.map((work: IWork) => {
      return {
        ...work,
        imgUrl: work.imgUrl ? urlFor(work.imgUrl).url() : work.imgUrl,
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
      <h2 className={styles.headText}>
        Minha Seção de <span>Portfólio</span> Criativo
      </h2>

      <WorkMenuOptions
        activeFilter={activeFilter}
        onHandleWorkFilter={handleWorkFilter}
      />

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={clsx(
          'flex flex-wrap justify-center w-full',
        )}
      >
        {filterWork.map((work, index) => (
          <WorkItem
            key={work.title+index}
            work={work}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap({
  WrappedComponent: MotionWrap({
    WrappedComponent: Work,
    classNames: clsx('w-full')
  }),
  idName: "work",
  classNames: styles.appPrimaryBg
})
