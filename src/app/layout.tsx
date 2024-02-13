import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | Pablo Alan',
  },
  description: 'Meu portfólio pessoal contendo informações e projetos',
  icons: {
    icon: {
      url: '/icon.svg',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${plexMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
