import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    imageUrl: z.string().url(),
    width: z.number().int().positive().optional(),
    height: z.number().int().positive().optional(),
    thumbUrl: z.string().url().optional(),
    alt: z.string().default(''),
    tags: z.array(z.string()).default([]),
  }),
});

const models = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    modelUrl: z.string().url(),
    posterUrl: z.string().url().optional(),
    description: z.string().optional(),
    ar: z.boolean().default(true),
    autoRotate: z.boolean().default(true),
    cameraControls: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts, gallery, models };
