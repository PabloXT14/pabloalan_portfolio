export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,// permite que usuario possa usar um crop de imagem (bolinha de seleção de imagem, veja mais sobre na documentação da sanity)
      }
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    }
  ]
}