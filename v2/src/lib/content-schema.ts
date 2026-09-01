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
  company: z.string().optional(),
  role: z.string().optional(),
  period: z.string().optional(),
  impactSummary: z.string().optional(),
  sortOrder: z.number().default(0),
  metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
  techStack: z.array(z.string()).optional(),
});

/** Selected Work — honest portfolio entries, no inflated metrics */
export const workSchema = basePostSchema.extend({
  company: z.string(),
  role: z.string(),
  period: z.string(),
  techStack: z.array(z.string()).default([]),
  sortOrder: z.number().default(0),
});
