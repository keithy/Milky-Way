import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    // The banner at the top of the work. It is optional: a work that
    // does not name one gets the default banner. The name picks the
    // component that renders it, so the artwork and its treatment
    // travel together.
    banner: z.object({
      name: z.string(),
      alt: z.string().optional()
    }).optional(),
    worksImage1: z.object({
      url: z.string(),
      alt: z.string()
    }),
    worksImage2: z.object({
      url: z.string(),
      alt: z.string()
    }),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),
    // A draft is only shown in the UT mode. It is still built, and
    // hidden by the stylesheet, so the mode can be switched in the
    // browser without a rebuild.
    draft: z.boolean().optional(),
  })
});

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    // The banner at the top of the post. It is optional: a post that
    // does not name one gets the default banner. The name picks the
    // component that renders it, so the artwork and its treatment
    // travel together.
    banner: z.object({
      name: z.string(),
      alt: z.string().optional()
    }).optional(),
    // The post sets faces in its own styles and needs them loaded.
    candidates: z.boolean().optional(),
    // A draft is only shown in the UT mode. It is still built, and
    // hidden by the stylesheet, so the mode can be switched in the
    // browser without a rebuild.
    draft: z.boolean().optional(),
  })
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection
};

