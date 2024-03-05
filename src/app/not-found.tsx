import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Página não encontrada',
}

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-sky-500 sm:text-9xl">404</h1>
      <h2 className="mb-4 text-center text-xl font-medium text-gray-400 sm:text-3xl">
        Página não encontrada
      </h2>
      <Link href="/">
        <Button>
          <HiArrowNarrowLeft size={20} />
          Voltar para a Home
        </Button>
      </Link>
    </div>
  )
}
