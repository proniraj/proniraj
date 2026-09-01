import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { ContentSection } from "./content-sections";

export async function getSectionEntries(
  section: ContentSection,
): Promise<(CollectionEntry<"thoughts"> | CollectionEntry<"caseStudies">)[]> {
  if (section.collection === "thoughts") {
    return getCollection("thoughts", ({ data }) => !data.draft);
  }

  return getCollection("caseStudies", ({ data }) => !data.draft);
}

export async function getPublishedEntriesSorted(section: ContentSection) {
  const entries = await getSectionEntries(section);
  return entries.sort((a, b) => {
    if (section.collection === "caseStudies") {
      const orderDiff = (b.data.sortOrder ?? 0) - (a.data.sortOrder ?? 0);
      if (orderDiff !== 0) return orderDiff;
    }
    return b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();
  });
}
