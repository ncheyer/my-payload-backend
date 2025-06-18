import { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedDate', 'status'],
  },
  access: {
    read: () => true, // Allow public reading
    create: ({ req: { user } }) => !!user, // Only authenticated users can create
    update: ({ req: { user } }) => !!user, // Only authenticated users can update
    delete: ({ req: { user } }) => !!user, // Only authenticated users can delete
  },
  fields: [
    // Basic Content
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 300,
      admin: {
        description: 'Brief summary for blog listings',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },

    // Media
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },

    // Author & Metadata
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
    },
    {
      name: 'readTime',
      type: 'number',
      admin: {
        description: 'Estimated read time in minutes',
      },
    },

    // Categorization
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },

    // SEO
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          maxLength: 60,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          maxLength: 160,
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },

    // Publishing Control
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Scheduled', value: 'scheduled' },
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show in featured posts section',
      },
    },
  ],
}
