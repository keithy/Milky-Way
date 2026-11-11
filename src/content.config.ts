import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

/*
 * The banner at the top of a piece.
 *
 * The name picks the component that renders it, so the artwork and its
 * treatment travel together. It is optional: a piece that does not name
 * one gets the default banner.
 */
const bannerSchema = z.object({
    name: z.string(),
    alt: z.string().optional(),
    // The icons for a banner that has pans to fill. They are named
    // rather than given as paths, so the front matter does not have to
    // know where the artwork is kept.
    icons: z.object({
        left: z.string().optional(),
        right: z.string().optional()
    }).optional()
});

/*
 * An assignment: a piece of work we take on.
 */
const missionsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/missions" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        banner: bannerSchema.optional(),
        missionImage1: z.object({
            url: z.string(),
            alt: z.string()
        }),
        missionImage2: z.object({
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

/*
 * A weapon: the tooling we build.
 */
const weaponsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/weapons" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        banner: bannerSchema.optional(),
        weaponImage1: z.object({
            url: z.string(),
            alt: z.string()
        }),
        weaponImage2: z.object({
            url: z.string(),
            alt: z.string()
        }),
        platform: z.string(),
        stack: z.string(),
        website: z.string(),
        github: z.string(),
        draft: z.boolean().optional(),
    })
});

/*
 * A judgement: an article, and the reasoning behind it.
 */
const judgementsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/judgements" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        banner: bannerSchema.optional(),
        // The judgement sets faces in its own styles and needs them
        // loaded.
        candidates: z.boolean().optional(),
        draft: z.boolean().optional(),
    })
});

/*
 * A warrior: a team, a project or a person recognised for the cause.
 */
const warriorsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/warriors" }),
    schema: z.object({
        title: z.string(),
        // The line of recognition: what they did, and why it matters.
        recognition: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        draft: z.boolean().optional(),
    })
});

/*
 * A strategy: a metatool, and how we work with it.
 *
 * These are the tools we work with rather than the tools we build for
 * others. The weapons are for demanding teams; the strategies are
 * ours.
 */
const strategiesCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/strategies" }),
    schema: z.object({
        title: z.string(),
        // What the tool is, in a line.
        summary: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        banner: bannerSchema.optional(),
        // The repository it lives in.
        repository: z.string(),
        draft: z.boolean().optional(),
    })
});

/*
 * A writing: the longer pieces.
 */
const writingsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/writings" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        banner: bannerSchema.optional(),
        draft: z.boolean().optional(),
    })
});

export const collections = {
    missions: missionsCollection,
    weapons: weaponsCollection,
    judgements: judgementsCollection,
    warriors: warriorsCollection,
    strategies: strategiesCollection,
    writings: writingsCollection
};
