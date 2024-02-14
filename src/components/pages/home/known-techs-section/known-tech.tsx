import { getRelativeTimeString } from '@/utils/get-relative-time'
import { ReactNode } from 'react'

type KnownTechProps = {
  tech: {
    name: string
    icon: ReactNode
    startedDate: string
  }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startedDate),
    'pt-BR',
  ).replace('há ', '')

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-sky-500">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  )
}
