import Link from "next/link";
import Image from "next/image";
import { IWork } from "@/types/work";
import { clsx } from "clsx";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { styles } from "@/styles";

interface WorkItemProps {
  work: IWork;
}

const WorkItem = ({ work }: WorkItemProps) => {
  return (
    <div
      className={clsx(
        styles.appFlex,
        'max-w-[270px] w-full flex-col m-8 p-4 rounded-lg bg-white text-zinc-900 cursor-pointer',
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
            'absolute inset-0 w-full h-full bg-black/50 rounded-lg opacity-0',
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
                'w-[50px] h-[50px] rounded-full bg-black/50 text-white m-4 font-sans font-extrabold cursor-pointer',
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
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className={clsx(
                styles.appFlex,
                'w-[50px] h-[50px] rounded-full bg-black/50 text-white m-4 font-sans font-extrabold cursor-pointer',
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
        className={clsx(
          styles.appFlex,
          'relative flex-col w-full p-2'
        )}
      >
        <h4 className={clsx(
          styles.boldText,
          'mt-4'
        )}>
          {work.title}
        </h4>
        <p className={clsx(styles.pText, 'mt-2')}>
          {work.description}
        </p>

        <div className={clsx(
          styles.appFlex,
          'absolute top-[-25px] py-2 px-4 rounded-xl bg-white'
        )}>
          <p className={clsx(styles.pText)}>{work.tags[0]}</p>
        </div>
      </div>
    </div>
  )
}

export { WorkItem }