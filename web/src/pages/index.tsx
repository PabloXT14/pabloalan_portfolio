import Head from 'next/head'
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work
} from '@/containers';
import { Navbar } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Pablo Alan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </>
  )
}
