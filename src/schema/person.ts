import {defineField, defineType} from 'sanity'

export const person = defineType({
  name: 'person',
  type: 'document',
  title: 'Captador',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nome',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Telefone',
    }),
  ],
})
