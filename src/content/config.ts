import { defineCollection, z } from 'astro:content';
import { formatTags } from '../utils/cms-helpers';

// Custom schema transformations
const tagsTransformer = z.union([
  z.array(z.string()),
  z.string().transform(str => formatTags(str))
]).default([]);

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().optional(),
    tags: tagsTransformer,
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
    description: z.string().optional(),
    tags: tagsTransformer,
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
    tags: tagsTransformer,
  }),
});

export const collections = { posts, gallery, models };
