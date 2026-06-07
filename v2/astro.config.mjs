// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nirajthakur.com.np",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/thoughts.html": "/thoughts",
    "/production-systems.html": "/case-studies",
    "/production-systems": "/case-studies",
    "/production-systems/auth-sdk-case-study": "/case-studies/auth-sdk-case-study",
    "/production-systems/ecommerce-platform-case-study":
      "/case-studies/ecommerce-platform-case-study",
    // Legacy /blog/* URLs → new folder-based paths
    "/blog/database-scaling-strategies": "/thoughts/database-scaling-strategies",
    "/blog/microservices-architecture-patterns": "/thoughts/microservices-architecture-patterns",
    "/blog/technical-leadership-without-micromanaging":
      "/thoughts/technical-leadership-without-micromanaging",
    "/blog/event-driven-architecture-tradeoffs": "/thoughts/event-driven-architecture-tradeoffs",
    "/blog/real-time-analytics-pipeline": "/thoughts/real-time-analytics-pipeline",
    "/blog/technical-debt-five-year-analysis": "/thoughts/technical-debt-five-year-analysis",
    "/blog/development-workflow-idea-to-production":
      "/thoughts/development-workflow-idea-to-production",
    "/blog/ecommerce-platform-case-study": "/case-studies/ecommerce-platform-case-study",
    "/blog/auth-sdk-case-study": "/case-studies/auth-sdk-case-study",
    // Legacy root HTML files
    "/database-scaling-strategies.html": "/thoughts/database-scaling-strategies",
    "/microservices-architecture-patterns.html": "/thoughts/microservices-architecture-patterns",
    "/ecommerce-platform-case-study.html": "/case-studies/ecommerce-platform-case-study",
    "/auth-sdk-case-study.html": "/case-studies/auth-sdk-case-study",
  },
});
