import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { basePostSchema, caseStudySchema, thoughtSchema } from "./lib/content-schema";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/thoughts" }),
  schema: thoughtSchema,
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/case-studies" }),
  schema: caseStudySchema,
});

export const collections = { thoughts, caseStudies };
