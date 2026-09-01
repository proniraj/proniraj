import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getWorkEntries(): Promise<CollectionEntry<"work">[]> {
  return getCollection("work", ({ data }) => !data.draft);
}

export async function getWorkEntriesSorted(): Promise<CollectionEntry<"work">[]> {
  const entries = await getWorkEntries();
  return entries.sort((a, b) => {
    const orderDiff = (b.data.sortOrder ?? 0) - (a.data.sortOrder ?? 0);
    if (orderDiff !== 0) return orderDiff;
    return b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();
  });
}

export function getWorkPath(id: string): string {
  return `/work/${id}`;
}
