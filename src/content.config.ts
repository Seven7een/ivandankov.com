import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SITE } from '@/consts';

export const BLOG_PATH = 'src/content/blog';
export const PROJECTS_PATH = 'src/content/projects';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `./${BLOG_PATH}` }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default(SITE.author),
    pubDatetime: z.coerce.date(),
    modDatetime: z.date().optional().nullable(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `./${PROJECTS_PATH}` }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    problem: z.string(),
    solution: z.string(),
    tags: z.array(z.string()).default([]),
    pubDatetime: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, projects };
