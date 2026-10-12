export type ContentCollectionName = "thoughts" | "caseStudies";

export interface ContentSection {
  /** URL segment, e.g. "thoughts" → /thoughts/[slug] */
  slug: string;
  /** Astro content collection name */
  collection: ContentCollectionName;
  indexTitle: string;
  indexDescription: string;
  /** Layout variant for individual posts */
  layout: "journal" | "case-study";
  /** Index page variant */
  indexLayout: "journal" | "case-study";
}

/**
 * Add a new folder under src/content/ + an entry here to get routes automatically.
 *
 * Example: src/content/blog/my-post.md + blog section → /blog/my-post
 */
export const contentSections = {
  thoughts: {
    slug: "thoughts",
    collection: "thoughts",
    indexTitle: "Engineering Journal",
    indexDescription:
      "First-person notes on production systems, architecture, and what I'm building — published when there's something worth writing.",
    layout: "journal",
    indexLayout: "journal",
  },
  productionSystems: {
    slug: "case-studies",
    collection: "caseStudies",
    indexTitle: "Production Systems",
    indexDescription:
      "Deeper write-ups on systems I've helped ship — context, hard parts, and outcomes.",
    layout: "case-study",
    indexLayout: "case-study",
  },
} as const satisfies Record<string, ContentSection>;

export type ContentSectionKey = keyof typeof contentSections;

export function getSectionBySlug(slug: string): ContentSection | undefined {
  return Object.values(contentSections).find((section) => section.slug === slug);
}

export function getSectionPath(section: ContentSection, id: string): string {
  return `/${section.slug}/${id}`;
}

export function getAllSections(): ContentSection[] {
  return Object.values(contentSections);
}
