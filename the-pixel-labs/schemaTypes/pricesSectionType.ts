import {TagIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pricesSectionType = defineType({
  name: 'pricesSection',
  title: 'Prices Section',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Prices',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'whatsAppNumber',
      title: 'WhatsApp Number (E.164 without +)',
      type: 'string',
      initialValue: '96170821128',
      validation: (rule) => rule.required().regex(/^\d+$/, {name: 'digits only'}),
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Schedulle photosession',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Package Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Price Label',
              type: 'string',
              description: 'Example: 100$',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'duration',
              title: 'Duration',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'photos',
              title: 'Number of Photos',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'consultationOnStyle',
              title: 'Consultation on Style',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'whatsAppNumber',
    },
  },
})
