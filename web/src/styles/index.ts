import { clsx } from 'clsx';

const styles = {
  app: clsx('bg-primary font-sans'),
  appWhiteBg:clsx('bg-white'),
  appPrimaryBg: clsx('bg-primary'),
  appContainer: clsx('w-full min-h-screen flex flex-row'),
  appFlex: clsx('flex justify-center items-center'),
  appWrapper: clsx(
    'flex-1 w-full flex-col',
    'pt-16 px-4 pb-8',
    'sm:py-16 sm:px-8',
  ),
  copyright: clsx(
    'w-full pt-8',
    'flex flex-col',
    'justify-center items-center',
    '[&>p]:uppercase [&>p]:text-black',
  ),
  headText: clsx(
    'text-4xl font-extrabold text-center text-black capitalize',
    '[&>span]:text-secondary',
    'sm:text-5xl',
    'lg:text-6xl',
  ),
  pText: clsx(
    'text-sm text-left text-gray leading-normal',
    'lg:text-3xl',
  ),
  boldText: clsx(
    'text-sm font-extrabold text-black text-left',
    'sm:text-base',
    'lg:text-3xl'
  ),
  appSocial: clsx(
    'hidden justify-end items-center flex-col p-4',
    'md:flex',
    '[&>div]:w-10 [&>div]:h-10 [&>div]:rounded-full [&>div]:bg-white [&>div]:my-1',
    '[&>div]:border [&>div]:border-solid [&>div]:border-lightGray',
    '[&>div]:flex [&>div]:justify-center [&>div]:items-center',
    '[&>div]:transition-all [&>div]:duration-300 [&>div]:ease-in-out',
    '[&>div>svg]:w-4 [&>div>svg]:h-4 [&>div>svg]:text-gray',
    '[&>div]:hover:bg-secondary [&>div]:hover:border-secondary',
    '[&>div:hover>svg]:text-white',
    'lg:[&>div]:w-16 lg:[&>div]:h-16 lg:[&>div]:my-2',
    'lg:[&>div>svg]:w-7 lg:[&>div>svg]:h-7',
  ),
  appNavigation: clsx(
    'hidden justify-center items-center flex-col p-4',
    'md:flex',
    '[&>.app__navigation-dot]:w-3 [&>.app__navigation-dot]:h-3',
    '[&>.app__navigation-dot]:bg-zinc-300',
    '[&>.app__navigation-dot]:m-2',
    '[&>.app__navigation-dot]:transition-colors [&>.app__navigation-dot]:duration-200',
    '[&>.app__navigation-dot]:ease-in-out',

    '[&>.app__navigation-dot]:hover:bg-secondary',

    'lg:[&>.app__navigation-dot]:w-6 lg:[&>.app__navigation-dot]:h-6',
  ),
}

export { styles };