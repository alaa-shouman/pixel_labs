import {ImageIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const portfolioSectionType = defineType({
  name: 'portfolioSection',
  title: 'Portfolio Section',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      type: 'string',
      initialValue: 'PHOTOGRAPHY',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'PORTFOLIO',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Portfolio Images',
      type: 'array',
      description: 'Maximum 9 images. Drag to reorder: item position is used as priority.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  {title: 'Portrait', value: 'Portrait'},
                  {title: 'Fashion', value: 'Fashion'},
                  {title: 'Life', value: 'Life'},
                ],
                layout: 'radio',
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              subtitle: 'category',
              media: 'image',
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1).max(9),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'sectionLabel',
    },
  },
})
