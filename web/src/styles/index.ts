import { twMerge } from 'tailwind-merge'

const styles = {
  app: twMerge('bg-primary font-sans'),
  appWhiteBg: twMerge('bg-white'),
  appPrimaryBg: twMerge('bg-primary'),
  appContainer: twMerge('w-full min-h-screen flex flex-row'),
  appFlex: twMerge('flex justify-center items-center'),
  appWrapper: twMerge(
    'w-full flex-col',
    'pt-16',
    'max-sm:pt-16 max-md:px-4 max-sm:pb-8',
  ),
  copyright: twMerge(
    'w-full py-4',
    'flex flex-col',
    'justify-center items-center',
    '[&>p]:uppercase [&>p]:text-black',
    'max-md:p-8',
  ),
  headText: twMerge(
    'text-4xl font-extrabold text-center text-black capitalize break-words',
    '[&>span]:text-secondary',
    'lg:text-5xl',
    'max-sm:text-3xl',
  ),
  pText: twMerge('text-sm text-left text-gray leading-normal', 'lg:text-3xl'),
  boldText: twMerge(
    'text-base font-extrabold text-black text-left',
    'lg:text-3xl',
    'max-sm:text-sm',
  ),
  appSocial: twMerge(
    'flex justify-end items-center flex-col p-4',
    'max-md:hidden',
  ),
  appSocialLink: twMerge(
    'flex justify-center items-center',
    'w-10 h-10 rounded-full bg-white my-1 border border-solid border-lightGray',
    'transition-all duration-300 ease-in-out cursor-pointer',
    '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-gray',
    'hover:bg-secondary hover:border-secondary [&:hover>svg]:text-white',
    'lg:w-16 lg:h-16 lg:my-2',
    'lg:[&>svg]:w-8 lg:[&>svg]:h-8',
  ),
  appNavigation: twMerge(
    'flex justify-center items-center flex-col p-4 ',
    'max-md:hidden',
  ),
  appNavigationDot: twMerge(
    'w-3 h-3 rounded-full m-2 transition-colors duration-200 ease-in-out',
    'hover:bg-secondary',
    'lg:w-5 lg:h-5',
  ),
}

export { styles }
