import { SectionTitle } from '@/components/section-title'
import { ExperienceItem } from './experience-item'
import { WorkExperience } from '@/types/work-experience'

type WorkExperienceSectionProps = {
  experiences: WorkExperience[]
}

export const WorkExperienceSection = ({
  experiences,
}: WorkExperienceSectionProps) => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="md:max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="mt-6 text-gray-400">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
