import Image from 'next/image'

const sections = [
  {
    title: 'Login',
    image_url: 'https://media.graphassets.com/ZsK2GK0HTru6pi0WwEpc',
  },
  {
    title: 'Início',
    image_url: 'https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw',
  },
  {
    title: 'Avaliações',
    image_url: 'https://media.graphassets.com/gWk8BKbyQWCYAj6n7iq3',
  },
  {
    title: 'Explorar',
    image_url: 'https://media.graphassets.com/Ahx3yydwQDiIQXQqZK92',
  },
  {
    title: 'Perfil',
    image_url: 'https://media.graphassets.com/Q5yFYKsaQmer1nbdDZlM',
  },
]

export const ProjectShowcaseSection = () => {
  return (
    <section className="container my-12 flex flex-col gap-8 md:my-32 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>

          <Image
            src={section.image_url}
            alt={`Imagem da sessão ${section.title}`}
            width={1080}
            height={672}
            className="aspect-auto w-full rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
