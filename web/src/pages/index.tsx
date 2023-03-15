import { GetStaticProps } from 'next';
import Head from 'next/head'
import { client, urlFor } from '@/services/sanity-client';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work
} from '@/containers';
import { Navbar } from '@/components';

import { styles } from '@/styles';
import { IAbout } from '@/types/about';

interface HomeProps {
  aboutsData: IAbout[];
}

export default function Home({ aboutsData }: HomeProps) {

  return (
    <>
      <Head>
        <title>Portfólio | Pablo Alan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
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


export const getStaticProps: GetStaticProps = async () => {
  const aboutsQuery = '*[_type == "abouts"]';

  let aboutsData = await client.fetch(aboutsQuery).then(data => data);
  aboutsData = aboutsData.map((about: IAbout) => {
    return {
      ...about,
      imgUrl: urlFor(about.imgUrl).url()
    }
  });

  return {
    props: {
      aboutsData
    }
  };
}
