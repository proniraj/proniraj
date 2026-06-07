# Niraj Thakur Portfolio (Astro v2)

Static portfolio with **folder-based dynamic content**. Drop a Markdown file in the right folder and Astro generates the route at build time.

## Quick start

```sh
cd v2
npm install
npm run dev      # http://localhost:4321
npm run build
npm run deploy   # GitHub Pages (no Actions required)
```

## How content routing works

```
src/content/
├── thoughts/           →  /thoughts           (index)
│   └── my-post.md      →  /thoughts/my-post   (auto-generated)
└── case-studies/       →  /case-studies
    └── my-study.md     →  /case-studies/my-study
```

**One registry drives everything:** `src/lib/content-sections.ts`

| Folder | URL prefix | Collection |
|--------|------------|------------|
| `src/content/thoughts/` | `/thoughts` | `thoughts` |
| `src/content/case-studies/` | `/case-studies` | `caseStudies` |

Dynamic pages (no per-post files needed):

- `src/pages/[section]/index.astro` — listing pages
- `src/pages/[section]/[slug].astro` — all post pages

### Add a new section (e.g. `/blog`)

1. Create folder `src/content/blog/`
2. Register in `src/content.config.ts`:

```ts
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: basePostSchema,
});
```

3. Add entry in `src/lib/content-sections.ts`:

```ts
blog: {
  slug: "blog",
  collection: "blog",
  indexTitle: "Blog",
  indexDescription: "...",
  layout: "journal",
  indexLayout: "journal",
},
```

Routes `/blog` and `/blog/my-post` are generated automatically on next build.

## Write a thought / journal post

Create `src/content/thoughts/my-article.md`:

```md
---
title: "My Article"
description: "Summary for SEO and listings"
publishedAt: "2026-06-07"
readTime: "5 minutes"
tags: [astro, scaling]
status: HOT
featured: false
draft: false
---

Your Markdown content here.
```

→ **http://localhost:4321/thoughts/my-article**

## Write a case study

Create `src/content/case-studies/my-system.md`:

```md
---
title: "RFC-002: My System"
description: "What I built and why"
publishedAt: "2026-06-07"
tags: [architecture]
status: PRODUCTION
metrics:
  - value: "99.9%"
    label: Uptime
techStack: [Node.js, PostgreSQL]
---

Case study body...
```

→ **http://localhost:4321/case-studies/my-system**

## Current URLs

| Content | URL |
|---------|-----|
| Home | `/` |
| Engineering Journal | `/thoughts` |
| Database scaling post | `/thoughts/database-scaling-strategies` |
| Production Systems (case studies) | `/case-studies` |
| E-commerce case study | `/case-studies/ecommerce-platform-case-study` |
| RSS | `/rss.xml` |

Legacy `/blog/*` URLs redirect to the new paths (see `astro.config.mjs`).
