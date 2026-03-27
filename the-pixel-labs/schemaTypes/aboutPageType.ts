import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      type: 'string',
      initialValue: 'SOMETHING',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'ABOUT ME',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({type: 'text', rows: 3})],
      validation: (rule) => rule.required().min(1).max(6),
    })
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'sectionLabel',
      media: 'backgroundImage',
    },
  },
})
