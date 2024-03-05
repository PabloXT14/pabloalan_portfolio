import { cn } from '@/lib/utils'
import NextLink from 'next/link'
import { ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof NextLink>

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-sky-500',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}
