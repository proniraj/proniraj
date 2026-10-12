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
    // Legacy post URLs → section indexes (old posts removed)
    "/production-systems/auth-sdk-case-study": "/case-studies",
    "/production-systems/ecommerce-platform-case-study": "/case-studies",
    "/blog/database-scaling-strategies": "/thoughts",
    "/blog/microservices-architecture-patterns": "/thoughts",
    "/blog/technical-leadership-without-micromanaging": "/thoughts",
    "/blog/event-driven-architecture-tradeoffs": "/thoughts",
    "/blog/real-time-analytics-pipeline": "/thoughts",
    "/blog/technical-debt-five-year-analysis": "/thoughts",
    "/blog/development-workflow-idea-to-production": "/thoughts",
    "/blog/ecommerce-platform-case-study": "/case-studies",
    "/blog/auth-sdk-case-study": "/case-studies",
    "/database-scaling-strategies.html": "/thoughts",
    "/microservices-architecture-patterns.html": "/thoughts",
    "/ecommerce-platform-case-study.html": "/case-studies",
    "/auth-sdk-case-study.html": "/case-studies",
  },
});
