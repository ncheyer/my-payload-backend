// src/collections/Media.ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  // Remove all access restrictions temporarily
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
