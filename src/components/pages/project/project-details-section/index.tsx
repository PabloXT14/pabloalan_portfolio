import { Link } from '@/components/link'
import { SectionTitle } from '@/components/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'

export const ProjectDetailsSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-24 pb-10 sm:min-h-screen sm:pb-24">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw) no-repeat center/cover',
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="BookWise"
        className="items-center text-center sm:[&>h3]:text-4xl"
      />

      <p className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        BookWise é uma plataforma de avaliação de livros que foi desenvolvida
        durante o bootcamp Ignite da Rocketseat. Com apenas um Figma
        precisávamos desenvolver essa aplicação completa Full Stack com Next.js.
      </p>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        <Badge>Next.js</Badge>
        <Badge>Next Auth</Badge>
        <Badge>Stitches</Badge>
        <Badge>Radix</Badge>
        <Badge>TypeScript</Badge>
        <Badge>Prisma</Badge>
        <Badge>React Query</Badge>
      </div>

      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4 ">
        <a href="https://github.com/pabloxt14/bookwise" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>

        <a href="https://github.com/pabloxt14/bookwise" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
