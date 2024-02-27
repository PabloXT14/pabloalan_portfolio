'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandYoutube,
} from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/pabloxt14',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/pabloxt14',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://www.linkedin.com/in/pabloxt14',
    icon: <TbBrandYoutube />,
  },
  {
    url: 'https://www.linkedin.com/in/pabloxt14',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-center justify-between lg:flex-row">
        {/* User Info */}
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-sky-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-medium">Pablo Alan</h2>

          <p className="my-6 text-sm text-gray-400 sm:text-base">
            Olá, meu nome é Pablo Alan e sou um desenvolvedor front-end
            apaixonado por tecnologia. Com mais de 2 anos de experiência. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais, além de
            liderar equipes técnicas em projetos desafiadores. Estou sempre
            aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => {
              return <Badge key={index}>Next.js</Badge>
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button variant="shadow" className="w-max" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3">
              {MOCK_CONTACTS.map((contact, index) => {
                return (
                  <a
                    key={`contact-${index}`}
                    href={contact.url}
                    target="_blank"
                    className="text-2xl text-gray-600 transition-colors hover:text-gray-100"
                  >
                    {contact.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* User Profile */}
        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Pablo Alan"
          className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
        />
      </div>
    </section>
  )
}
