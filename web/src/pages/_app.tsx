import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@/styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import { DM_Sans } from '@next/font/google';

const dmSansFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--dm-sans',
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={dmSansFont.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  )
}
