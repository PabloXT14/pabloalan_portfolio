import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { ContactFormSection } from '@/components/contact-form-section'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { Toaster } from '@/components/toaster'

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
  description:
    'Eu sou um desenvolvedor Full Stack, e este é o meu portfólio pessoal, contendo informações, habilidades e projetos desenvolvidos por mim.',
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
        <Toaster />
        <Header />
        {children}
        <ContactFormSection />
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
