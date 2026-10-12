---
title: "Lanceme Up — real-time collaboration workspace"
description: "Frontend work on a collaboration product: real-time chat/huddle, file management, and an internal email client. Product is no longer online — walkthroughs document what shipped."
company: "Lanceme Up"
role: "Frontend Developer"
period: "Jul 2022 – Dec 2023"
publishedAt: "2023-12-01"
tags: [collaboration, realtime, frontend]
featured: true
sortOrder: 70
techStack: [React, TypeScript, AWS, Azure]
---

## Situation

Lanceme Up was an all-in-one workspace for organizations, agencies, and freelance mediators. The product needed real-time collaboration, file handling, and internal communication tools. The original domain is no longer online; this page and the video walkthroughs are the durable record of what I built.

## What I worked on

- Real-time **chat and huddle** UI for team collaboration
- Custom **file manager** (uploads, previews, organization)
- Internal **email client** for in-product communication
- **CI/CD** pipelines on AWS and Azure

## Hard parts

- Keeping collaboration UI responsive under reconnects and message ordering edge cases
- Shipping file workflows that felt reliable for non-technical users
- Bridging frontend delivery with cloud deploy pipelines early in my career

## Outcome

Shipped production collaboration features used by teams on the platform. When the product went offline, I kept recorded walkthroughs so the work remains reviewable.

## Proof

- Written case study: this page
- Video walkthrough: add URL in `src/consts.ts` → `LINKS.lancemeUpVideo` (then link from the home page)

## Stack

React, TypeScript, AWS, Azure
