import Link from 'next/link'
import Image from 'next/image'
import { IWork } from '@/types/work'
import { clsx } from 'clsx'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { MdImageNotSupported } from 'react-icons/md'
import { styles } from '@/styles'

interface WorkItemProps {
  work: IWork
}

const WorkItem = ({ work }: WorkItemProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-start',
        'm-8 w-full max-w-[270px] rounded-lg bg-white p-4 text-zinc-900 shadow-md',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-work-item',
        'lg:w-[470px] lg:rounded-xl lg:p-5',
        'max-sm:m-4 max-sm:w-full',
      )}
    >
      <div
        className={clsx(
          styles.appFlex,
          'relative h-[230px] w-full',
          'lg:h-[350px]',
        )}
      >
        {work.imgUrl ? (
          <Image
            src={work.imgUrl}
            alt={work.title}
            width={1200}
            height={900}
            className={clsx('h-full w-full rounded-lg object-cover')}
          />
        ) : (
          <div
            className={clsx(
              'flex h-full w-full flex-col items-center justify-center rounded-lg bg-lightGray object-cover',
            )}
          >
            <MdImageNotSupported className="h-8 w-8" />
            <p>Sem imagem</p>
          </div>
        )}

        <div
          className={clsx(
            'absolute top-2 right-2 flex items-center justify-center gap-2',
          )}
        >
          {work.projectLink && (
            <Link
              href={work.projectLink}
              target="_blank"
              rel="noreferrer"
              prefetch={false}
              className={clsx(
                styles.appFlex,
                'h-[30px] w-[30px] cursor-pointer rounded-full bg-black/70 font-sans font-extrabold text-white',
                'ease transition-all duration-300',
                'hover:scale-110',
              )}
            >
              <AiFillEye className="h-3/5 w-3/5 text-white" />
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
                'h-[30px] w-[30px] cursor-pointer rounded-full bg-black/70 font-sans font-extrabold text-white',
                'ease transition-all duration-300',
                'hover:scale-110',
              )}
            >
              <AiFillGithub className="h-3/5 w-3/5 text-white" />
            </Link>
          )}
        </div>
      </div>

      <div
        className={clsx(styles.appFlex, 'relative h-fit w-full flex-col p-2')}
      >
        <h4 className={clsx(styles.boldText, 'mt-4 text-center')}>
          {work.title}
        </h4>

        {work.techs && (
          <div
            className={clsx(
              'my-1 flex w-full flex-wrap justify-center',
              'group',
            )}
          >
            {work.techs.map((tech, index) => (
              <div key={`${work.title}-${tech}`} className="flex items-center">
                <span
                  className={clsx(
                    'mx-1 text-xs font-semibold uppercase text-gray',
                    'inline-block max-w-[70px] overflow-hidden text-ellipsis whitespace-nowrap',
                    'group-hover:max-w-none group-hover:overflow-visible group-hover:whitespace-normal',
                  )}
                >
                  {tech}
                </span>
                {index !== work.techs.length - 1 && <span>{'|'}</span>}
              </div>
            ))}
          </div>
        )}

        <div
          className={clsx(
            styles.appFlex,
            'absolute top-[-25px] rounded-xl bg-white py-2 px-4',
          )}
        >
          <p className={clsx(styles.pText)}>{work.tags[0]}</p>
        </div>
      </div>

      <p
        className={clsx(
          styles.pText,
          'mt-auto line-clamp-2',
          'hover:line-clamp-none',
        )}
      >
        {work.description}
      </p>
    </div>
  )
}

export { WorkItem }
