// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { BlogPosts } from './collections/BlogPosts'
import { Authors } from './collections/Authors'
import { Categories } from './collections/Categories'
import { Tags } from './collections/Tags'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [Users, Media, Pages, BlogPosts, Authors, Categories, Tags],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  cors: [
    'https://v0-speak-about-ai-website.vercel.app',
    'https://*.vercel.app', // Allow all vercel domains
    'http://localhost:3000',
    'https://localhost:3000',
    '*', // Temporarily allow all origins for testing
  ],
  csrf: [
    'https://v0-speak-about-ai-website.vercel.app',
    'https://*.vercel.app',
    'http://localhost:3000',
    'https://localhost:3000',
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL_NON_POOLING || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
