import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(), // Make title optional since we'll use filename
    description: z.string().optional(), // Make description optional
    pubDate: z.coerce.date().optional(), // Make pubDate optional
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { posts };