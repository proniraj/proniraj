import { z } from "astro/zod";

export const postStatus = z.enum([
  "HOT",
  "FEATURED",
  "LEARNED",
  "THINKING",
  "EXPERIMENT",
  "INSIGHT",
  "TOOL",
  "PRODUCTION",
  "OPEN SOURCE",
  "ENTERPRISE",
]);

export const basePostSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  readTime: z.string().optional(),
  tags: z.array(z.string()).default([]),
  status: postStatus.optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  rfcId: z.string().optional(),
  version: z.string().optional(),
});

export const thoughtSchema = basePostSchema;

export const caseStudySchema = basePostSchema.extend({
  metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
  techStack: z.array(z.string()).optional(),
});
