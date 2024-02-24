import { SectionTitle } from '@/components/section-title'

export const WorkExperienceSection = () => {
  return (
    <section className="container flex gap-16 py-16">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="mt-6 text-gray-400">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4"></div>
    </section>
  )
}
