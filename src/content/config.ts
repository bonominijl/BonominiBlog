import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    draft: z.coerce.boolean().default(false),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    imageUrl: z.string(),
    width: z.coerce.number().int().positive().optional(),
    height: z.coerce.number().int().positive().optional(),
    thumbUrl: z.string().optional(),
    alt: z.string().default(''),
    tags: z.array(z.string()).default([]),
  }),
});

const models = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    modelUrl: z.string(),
    posterUrl: z.string().optional(),
    description: z.string().optional(),
    ar: z.coerce.boolean().default(true),
    autoRotate: z.coerce.boolean().default(true),
    cameraControls: z.coerce.boolean().default(true),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts, gallery, models };
