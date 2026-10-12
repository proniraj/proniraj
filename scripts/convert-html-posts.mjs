import fs from "node:fs";
import path from "node:path";
import TurndownService from "turndown";

const root = path.resolve("..");

const posts = [
  {
    html: "database-scaling-strategies.html",
    slug: "database-scaling-strategies",
    frontmatter: {
      title: "RFC-001: Database Scaling Strategies",
      description:
        "What I learned scaling databases to handle 10M+ queries per day. The strategies that actually work vs. the ones that don't. Spoiler: horizontal sharding isn't always the answer.",
      publishedAt: "2024-01-12",
      readTime: "8 minutes",
      tags: ["database", "scaling", "performance", "architecture"],
      status: "HOT",
      category: "journal",
      rfcId: "RFC-001",
      version: "1.2.0",
    },
    selector: "main",
    stripSelectors: [".toc", "footer", ".flex.justify-between"],
  },
  {
    html: "microservices-architecture-patterns.html",
    slug: "microservices-architecture-patterns",
    frontmatter: {
      title: "Microservices Architecture Patterns",
      description:
        "After architecting microservices for 5+ years, I've seen the same patterns that kill projects. Here's what I learned the hard way.",
      publishedAt: "2024-01-15",
      readTime: "12 minutes",
      tags: ["microservices", "architecture", "lessons"],
      status: "FEATURED",
      category: "journal",
      featured: true,
    },
    selector: "main",
    stripSelectors: [".toc", "footer", ".flex.justify-between"],
  },
  {
    html: "ecommerce-platform-case-study.html",
    slug: "ecommerce-platform-case-study",
    frontmatter: {
      title: "RFC-001: E-commerce Platform Architecture",
      description:
        "Architected and built a high-traffic e-commerce platform that handles 2M+ daily transactions with 99.99% uptime.",
      publishedAt: "2024-01-10",
      readTime: "15 minutes",
      tags: ["ecommerce", "microservices", "scaling", "architecture", "performance"],
      status: "PRODUCTION",
      category: "case-study",
      rfcId: "RFC-001",
      techStack: ["React", "Node.js", "Go", "PostgreSQL", "Redis", "Kubernetes"],
    },
    selector: "article",
    stripSelectors: ["header", "footer", ".flex.justify-between"],
  },
  {
    html: "auth-sdk-case-study.html",
    slug: "auth-sdk-case-study",
    frontmatter: {
      title: "RFC-001: AuthFlow SDK",
      description:
        "Revolutionary authentication SDK that makes secure authentication as simple as a single function call.",
      publishedAt: "2024-01-15",
      readTime: "12 minutes",
      tags: ["authentication", "typescript", "security", "sdk"],
      status: "OPEN SOURCE",
      category: "case-study",
      rfcId: "RFC-001",
      techStack: ["TypeScript", "React", "Node.js", "JWT", "OAuth 2.0", "WebAuthn"],
    },
    selector: "article, main",
    stripSelectors: ["header", "footer", ".flex.justify-between"],
  },
];

function stripElements(element, selectors) {
  for (const selector of selectors) {
    element.querySelectorAll(selector).forEach((node) => node.remove());
  }
}

function toFrontmatter(data) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      lines.push(`${key}:`);
      for (const item of value) {
        lines.push(`  - ${item}`);
      }
    } else if (typeof value === "boolean") {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: "${String(value).replace(/"/g, '\\"')}"`);
    }
  }
  lines.push("---", "");
  return lines.join("\n");
}

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
});

turndown.addRule("preCode", {
  filter: ["pre"],
  replacement(content, node) {
    const code = node.textContent ?? content;
    return `\n\n\`\`\`\n${code.trim()}\n\`\`\`\n\n`;
  },
});

const outDir = path.resolve("src/content/blog");
fs.mkdirSync(outDir, { recursive: true });

for (const post of posts) {
  const htmlPath = path.join(root, post.html);
  const html = fs.readFileSync(htmlPath, "utf8");
  const dom = new (await import("jsdom")).JSDOM(html);
  const doc = dom.window.document;

  let container =
    doc.querySelector(post.selector.split(",")[0]) ??
    doc.querySelector(post.selector.split(",")[1]) ??
    doc.querySelector("main");

  if (!container) {
    console.error(`No container found for ${post.slug}`);
    continue;
  }

  stripElements(container, post.stripSelectors);

  container.querySelectorAll("script, button, .metadata, .tag").forEach((node) => {
    if (node.tagName === "BUTTON") node.remove();
  });

  const markdown = turndown.turndown(container.innerHTML);
  const output = toFrontmatter(post.frontmatter) + markdown.replace(/\n{3,}/g, "\n\n").trim() + "\n";
  const outPath = path.join(outDir, `${post.slug}.md`);
  fs.writeFileSync(outPath, output);
  console.log(`Wrote ${outPath}`);
}
