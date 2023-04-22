import Link from "next/link";
import Image from "next/image";
import { IWork } from "@/types/work";
import { clsx } from "clsx";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { MdImageNotSupported } from 'react-icons/md';
import { styles } from "@/styles";

interface WorkItemProps {
  work: IWork;
}

const WorkItem = ({ work }: WorkItemProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-start items-center',
        'max-w-[270px] w-full flex-col m-8 p-4 rounded-lg bg-white text-zinc-900 shadow-md',
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
        {work.imgUrl ? (
          <Image
            src={work.imgUrl}
            alt={work.title}
            width={1200}
            height={900}
            className={clsx('w-full h-full object-cover rounded-lg')}
          />
        ) : (
          <div className={clsx(
            'w-full h-full object-cover rounded-lg bg-lightGray flex flex-col items-center justify-center',
          )}>
            <MdImageNotSupported className="w-8 h-8" />
            <p>Sem imagem</p>
          </div>
        )}


        <div className={clsx(
          'absolute top-2 right-2 flex items-center justify-center gap-2'
        )}>
          {work.projectLink && (
            <Link
              href={work.projectLink}
              target="_blank"
              rel="noreferrer"
              prefetch={false}
              className={clsx(
                styles.appFlex,
                'w-[30px] h-[30px] rounded-full bg-black/70 text-white font-sans font-extrabold cursor-pointer',
                'transition-all duration-300 ease',
                'hover:scale-110'
              )}
            >
              <AiFillEye
                className="w-3/5 text-white h-3/5"
              />
            </Link>
          )}

          {work.codeLink && (
            <Link
              href={work.codeLink}
              target="_blank"
              rel="noreferrer"
              prefetch={false}
              className={clsx(
                styles.appFlex,
                'w-[30px] h-[30px] rounded-full bg-black/70 text-white font-sans font-extrabold cursor-pointer',
                'transition-all duration-300 ease',
                'hover:scale-110'
              )}
            >
              <AiFillGithub
                className="w-3/5 text-white h-3/5"
              />
            </Link>
          )}

        </div>
      </div>

      <div
        className={clsx(
          styles.appFlex,
          'relative flex-col w-full p-2'
        )}
      >
        <h4 className={clsx(
          styles.boldText,
          'mt-4 text-center'
        )}>
          {work.title}
        </h4>

        {(work.techs) && (
          <div
            className={clsx(
              styles.pText,
              'my-1 flex flex-wrap justify-center'
            )}
          >
            {
              work.techs.map((tech, index) => (
                <div
                  key={`${work.title}-${tech}`}
                >
                  <span
                    className={clsx(
                      'mx-1 uppercase text-xs text-gray font-semibold'
                    )}
                  >
                    {tech}
                  </span>
                  {index !== work.techs.length - 1 && '|'}
                </div>
              ))
            }
          </div>
        )}

        <p className={clsx(
          styles.pText,
          'mt-2 line-clamp-1',
          'hover:line-clamp-none'
        )}>
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