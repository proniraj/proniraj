import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../consts";
import { contentSections, getSectionPath } from "../lib/content-sections";
import { getSectionEntries } from "../lib/content-utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const items = [];

  for (const section of Object.values(contentSections)) {
    const entries = await getSectionEntries(section);

    for (const entry of entries) {
      items.push({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.publishedAt,
        link: `${getSectionPath(section, entry.id)}/`,
      });
    }
  }

  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${SITE.title} | Engineering Journal`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
  });
};
