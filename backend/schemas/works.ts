import { Rule } from "sanity"

export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        }
      ]
    },
    {
      name: 'techs',
      title: 'Techs',
      type: 'array',
      of: [
        {
          name: 'tech',
          title: 'Tech',
          type: 'string',
        }
      ],
      validation: (Rule: Rule) => Rule.required().max(3).warning('At most 3 techs are allowed'),
    }
  ]
}