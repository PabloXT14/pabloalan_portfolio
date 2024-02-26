import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 opacity-80 transition-all hover:border-sky-500 hover:opacity-100">
      <div className="h-48 w-full overflow-hidden">
        <Image
          width={380}
          height={200}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="Thumbnail do projeto BookWise"
          unoptimized
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition-all group-hover:text-sky-500">
          BookWise
        </strong>
        <p className="mt-2 line-clamp-4 text-gray-400">
          BookWise é uma plataforma de avaliação de livros que foi desenvolvida
          durante o bootcamp Ignite da Rocketseat. Com apenas um Figma
          precisávamos desenvolver essa aplicação completa Full Stack com
          Next.js.
        </p>
        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          Next.js, Next Auth, Stitches, Radix, TypeScript, Prisma, React Query
        </span>
      </div>
    </div>
  )
}
