import { useQuery } from 'react-query'

import { IAbout } from '@/types/about'
import { AppWrap, MotionWrap } from '@/wrapper'
import { client, urlFor } from '@/services/sanity-client'
import { Overview } from './components/Overview'
import { CardAbout } from './components/CardAbout'
import { styles } from '@/styles'

async function getAbouts() {
  const aboutsQuery = '*[_type == "abouts"] | order(_updatedAt desc)'

  const aboutsData = await client.fetch(aboutsQuery).then((data) => {
    const dataRefactored = data.map((about: IAbout) => {
      return {
        ...about,
        imgUrl: urlFor(about.imgUrl).url(),
      }
    })

    return dataRefactored
  })

  return aboutsData as IAbout[]
}

const About = () => {
  const aboutsQuery = useQuery({
    queryKey: ['abouts'],
    queryFn: getAbouts,
  })

  const { data: abouts } = aboutsQuery

  return (
    <div className="w-full flex-1 flex-col">
      <h2 className={styles.headText}>
        <span>Visão</span> geral sobre <span>Mim</span>
      </h2>

      <Overview />

      <div className="mt-6 flex flex-wrap items-start justify-center">
        {abouts &&
          abouts.map((about, index) => (
            <CardAbout key={about.title + index} about={about} />
          ))}
      </div>
    </div>
  )
}

export default AppWrap({
  WrappedComponent: MotionWrap({
    WrappedComponent: About,
    classNames: '',
  }),
  idName: 'about',
  classNames: styles.appWhiteBg,
})
