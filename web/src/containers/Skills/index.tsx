import { client, urlFor } from '@/services/sanity-client'
import { ISkill } from '@/types/skill'
import { IExperience } from '@/types/experience'
import { AppWrap, MotionWrap } from '@/wrapper'
import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { styles } from '@/styles'
import { SkillItem } from './components/SkillItem'
import { ExperienceItem } from './components/ExperienceItem'

async function getSkills() {
  const skillsQuery = '*[_type == "skills"] | order(_updatedAt asc)'

  const skillsData = await client.fetch(skillsQuery).then((data) => {
    const dataRefactored = data.map((skill: ISkill) => {
      return {
        ...skill,
        icon: urlFor(skill.icon).url(),
      }
    })

    return dataRefactored
  })

  return skillsData as ISkill[]
}

async function getExperiences() {
  const experiencesQuery = '*[_type == "experiences"] | order(year desc)'

  const experiencesData = await client
    .fetch(experiencesQuery)
    .then((data) => data)

  return experiencesData as IExperience[]
}

const Skills = () => {
  const skillsQuery = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills,
  })
  const experiencesQuery = useQuery({
    queryKey: ['experiences'],
    queryFn: getExperiences,
  })

  const { data: skills } = skillsQuery
  const { data: experiences } = experiencesQuery

  return (
    <div className={clsx('flex w-full flex-1 flex-col items-center')}>
      <h2 className={clsx(styles.headText)}>Habilidades & Experiências</h2>

      <div
        className={clsx(
          'mt-12 flex w-11/12 flex-col items-center',
          'max-2md:w-full max-2md:flex-col',
        )}
      >
        <motion.div
          className={clsx(
            'mr-12 flex flex-1 flex-wrap items-start justify-center',
            'max-2md:mr-0 max-2md:items-center max-2md:justify-center',
          )}
        >
          {skills &&
            skills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}
        </motion.div>

        <div
          className={clsx(
            'mt-8 flex flex-1 flex-col items-start justify-start',
            'max-2md:mt-8',
          )}
        >
          {experiences &&
            experiences.map((experience) => (
              <ExperienceItem key={experience.year} experience={experience} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default AppWrap({
  WrappedComponent: MotionWrap({
    WrappedComponent: Skills,
    classNames: clsx('flex flex-col flex-1 w-full'),
  }),
  idName: 'skills',
  classNames: styles.appWhiteBg,
})
