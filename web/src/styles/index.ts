import { clsx } from 'clsx';

const styles = {
  app: clsx('bg-primary font-sans'),
  appWhiteBg:clsx('bg-white'),
  appPrimaryBg: clsx('bg-primary'),
  appContainer: clsx('w-full min-h-screen flex flex-row'),
  appFlex: clsx('flex justify-center items-center'),
  appWrapper: clsx(
    'w-full flex-col',
    'pt-16 px-8',
    'max-sm:pt-16 max-sm:px-4 max-sm:pb-8',
  ),
  copyright: clsx(
    'w-full pt-8',
    'flex flex-col',
    'justify-end items-end',
    '[&>p]:uppercase [&>p]:text-black',
    'max-md:p-8'
  ),
  headText: clsx(
    'text-4xl font-extrabold text-center text-black capitalize',
    '[&>span]:text-secondary',
    'lg:text-6xl',
    'max-sm:text-5xl',
  ),
  pText: clsx(
    'text-sm text-left text-gray leading-normal',
    'lg:text-3xl',
  ),
  boldText: clsx(
    'text-base font-extrabold text-black text-left',
    'lg:text-3xl',
    'max-sm:text-sm',
  ),
  appSocial: clsx(
    'hidden justify-end items-center flex-col p-4',
    'md:flex'
  ),
  appSocialLink: clsx(
    'flex justify-center items-center',
    'w-10 h-10 rounded-full bg-white my-1 border border-solid border-lightGray',
    'transition-all duration-300 ease-in-out',
    '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-gray',
    'hover:bg-secondary hover:border-secondary [&:hover>svg]:text-white',
    'lg:w-16 lg:h-16 lg:my-2',
    'lg:[&>svg]:w-7 lg:[&>svg]:h-7',
  ),
  appNavigation: clsx(
    'hidden justify-center items-center flex-col p-4',
    'md:flex',
  ),
  appNavigationDot: clsx(
    'w-3 h-3 bg-zinc-300 rounded-full m-2 transition-colors duration-200 ease-in-out',
    'hover:bg-secondary',
    'lg:w-5 lg:h-5'
  )
}

export { styles };