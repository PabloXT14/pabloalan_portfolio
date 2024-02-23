import { Link } from '@/components/link'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="project image"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
          />
          BookWise
        </h3>

        <p className="my-6 line-clamp-3 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error
          earum minus quisquam expedita architecto, ut sint libero sequi harum,
          quasi maiores tempora nisi eveniet sit minima laboriosam porro nam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          <Badge>Next.js</Badge>
          <Badge>React</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Typescript</Badge>
          <Badge>GraphQL</Badge>
          <Badge>Prisma</Badge>
        </div>

        <Link href="/projects/book-wise">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
