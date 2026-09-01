import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { basePostSchema, caseStudySchema, thoughtSchema, workSchema } from "./lib/content-schema";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/thoughts" }),
  schema: thoughtSchema,
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/case-studies" }),
  schema: caseStudySchema,
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: workSchema,
});

export const collections = { thoughts, caseStudies, work };
