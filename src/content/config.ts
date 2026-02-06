import { defineCollection, z } from "astro:content";

const RoleEnum = z.enum(["UX", "PM", "DEV"]);

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    role: z.string(),
    tech: z.string(),
    timeline: z.string(),
    thumbnail: z.string(),
    heroImage: z.string(),
    featured: z.boolean().default(false),
    roles: z.array(RoleEnum).default([]),
    impact: z
      .object({
        metric: z.string(),
        label: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  projects: projects,
};
