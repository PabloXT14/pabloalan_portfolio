import { client, urlFor } from "@/services/sanity-client";
import { ISkill } from "@/types/skill";
import { IExperience } from "@/types/experience";
import { AppWrap } from "@/wrapper"
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { styles } from "@/styles";
import { SkillItem } from "./components/SkillItem";
import { ExperienceItem } from "./components/ExperienceItem";

async function getSkills() {
  const skillsQuery = '*[_type == "skills"]';

  const skillsData = await client.fetch(skillsQuery).then(data => {
    const dataRefactored = data.map((skill: ISkill) => {
      return {
        ...skill,
        icon: urlFor(skill.icon).url()
      }
    });

    return dataRefactored;
  });

  return skillsData as ISkill[];
}

async function getExperiences() {
  const experiencesQuery = '*[_type == "experiences"]';

  const experiencesData = await client.fetch(experiencesQuery).then(data => data);

  return experiencesData as IExperience[];
}

const Skills = () => {
  const skillsQuery = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills,
  });
  const experiencesQuery = useQuery({
    queryKey: ['experiences'],
    queryFn: getExperiences,
  })

  const { data: skills } = skillsQuery;
  const { data: experiences } = experiencesQuery;

  return (
    <>
      <h2 className={clsx(styles.headText)}>Skills & Experiences</h2>

      <div className={clsx(
        'w-4/5 mt-12 flex flex-row',
        'max-2md:w-full max-2md:flex-col',
      )}>
        <motion.div
          className={clsx(
            'flex-1 flex flex-wrap justify-start items-start mr-20',
            'max-2md:mr-0 max-2md:justify-center max-2md:items-center',
          )}
        >
          {skills && skills.map(skill => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </motion.div>

        <div>
          {experiences && experiences.map((experience) => (
            <ExperienceItem
              key={experience.year}
              experience={experience} 
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap({
  WrappedComponent: Skills,
  idName: "skills"
})