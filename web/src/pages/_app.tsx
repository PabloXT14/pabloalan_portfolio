import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DM_Sans } from '@next/font/google';

const dmSansFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--dm-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dmSansFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
