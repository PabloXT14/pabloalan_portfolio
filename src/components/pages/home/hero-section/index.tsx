'use client'

import { CMSIcon } from '@/components/cms-icon'
import { RichText } from '@/components/rich-text'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { HomePageInfo } from '@/types/page-info'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { badgeAnimation } from '@/lib/animations'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
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
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sky-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-medium">Pablo Alan</h2>

          <div className="my-6 text-sm text-gray-400 sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.introTechnologies.map((tech, i) => {
              return (
                <Badge
                  key={`intro-tech-${tech.name}`}
                  {...badgeAnimation}
                  transition={{ duration: 0.2, delay: i * 0.1 }}
                >
                  {tech.name}
                </Badge>
              )
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button variant="shadow" className="w-max" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3">
              {homeInfo.socials.map((contact, index) => {
                return (
                  <a
                    key={`contact-${index}`}
                    href={contact.url}
                    target="_blank"
                    className="text-2xl text-gray-600 transition-colors hover:text-gray-100"
                  >
                    <CMSIcon icon={contact.iconSvg} />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* User Profile */}
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil do Pablo Alan"
            className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
