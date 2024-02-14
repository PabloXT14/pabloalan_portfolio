import { cn } from '@/lib/utils'
import { type ClassValue } from 'clsx'

type SectionTitleProps = {
  title: string
  subtitle: string
  className?: ClassValue
}

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className="font-mono text-sm text-sky-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  )
}
