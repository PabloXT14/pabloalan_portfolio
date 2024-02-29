import { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTech = {
  iconSvg: string
  name: string
  startDate: string
}

export type ProjectSection = {
  title: string
  image: {
    url: string
  }
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  description: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  liveProjectUrl?: string
  githubUrl?: string
}
