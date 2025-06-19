import { Block } from 'payload'

export const TestBlock: Block = {
  slug: 'test',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
  ],
}
