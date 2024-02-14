import { SectionTitle } from '@/components/section-title'
import { KnownTech } from './known-tech'
import { TbBrandNextjs } from 'react-icons/tb'

export const KnownTechsSection = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <KnownTech
              key={`known-tech-${index}`}
              tech={{
                name: 'Next.js',
                icon: <TbBrandNextjs size={24} />,
                startedDate: '2022-01-01',
              }}
            />
          )
        })}
      </div>
    </section>
  )
}
