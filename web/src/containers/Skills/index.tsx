import Image from "next/image";
import { client, urlFor } from "@/services/sanity-client";
import { ISkill } from "@/types/skill";
import { IExperience } from "@/types/experience";
import { AppWrap } from "@/wrapper"
import { useQuery } from "react-query";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { styles } from "@/styles";

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
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={clsx(
                styles.appFlex,
                'flex-col text-center m-4',
                'lg:my-4 lg:mx-8',
              )}
            >
              <div className={clsx(
                styles.appFlex, 
                'w-[90px] h-[90px] rounded-full bg-[#fef4f5]',
                'transition-all duration-300 ease-in-out',
                'hover:shadow-skill-item',
                'lg:w-[150px] lg:h-[150px]',
                'max-sm:w-[70px] max-sm:h-[70px]',
                `bg-[${skill.bgColor}]`,
              )}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className={clsx(
                    'w-1/2 h-1/2'
                  )}
                />
              </div>
              <p className={clsx(
                styles.pText,
                'font-medium mt-2',
                'lg:mt-4',
              )}>
                {skill.name}
                </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap({
  WrappedComponent: Skills,
  idName: "skills"
})