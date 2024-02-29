import { SectionTitle } from '@/components/section-title'
import { KnownTech } from './known-tech'
import { KnownTech as IKnownTech } from '@/types/projects'

type KnownTechsSectionProps = {
  techs: IKnownTech[]
}

export const KnownTechsSection = ({ techs }: KnownTechsSectionProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs.map((tech) => {
          return <KnownTech key={tech.name} tech={tech} />
        })}
      </div>
    </section>
  )
}
