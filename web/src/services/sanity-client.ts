import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// CONFIGURAÇÃO CONEXÃO COM SANITY CLIENT
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

// CONFIGURAÇÃO PARA TRABALAHAR COM IMAGENS NO SANITY
const builder = imageUrlBuilder(client)
export const urlFor = (source: string) => builder.image(source)
