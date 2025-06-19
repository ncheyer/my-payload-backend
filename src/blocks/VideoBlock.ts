import { Block } from 'payload'

export const VideoBlock: Block = {
  slug: 'video',
  interfaceName: 'VideoBlock',
  labels: {
    singular: 'Video',
    plural: 'Videos',
  },
  fields: [
    {
      name: 'videoType',
      type: 'select',
      options: [
        { label: 'YouTube', value: 'youtube' },
        { label: 'Vimeo', value: 'vimeo' },
        { label: 'Custom URL', value: 'custom' },
      ],
      required: true,
      defaultValue: 'youtube',
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: true,
      admin: {
        description: 'Paste the full video URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
      },
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Optional title for the video',
      },
    },
    {
      name: 'aspectRatio',
      type: 'select',
      options: [
        { label: '16:9 (Standard)', value: '16/9' },
        { label: '4:3 (Classic)', value: '4/3' },
        { label: '21:9 (Ultrawide)', value: '21/9' },
      ],
      defaultValue: '16/9',
    },
    {
      name: 'autoplay',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Note: Most browsers block autoplay with sound',
      },
    },
  ],
}
