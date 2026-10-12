---
title: "Unified Authentication"
description: "Shared auth infrastructure across Hourmarket products — one system instead of rebuilding login for every new surface."
company: "Hourmarket"
role: "Full Stack Engineer"
period: "Oct 2024 – Oct 2025"
publishedAt: "2025-06-01"
tags: [auth, platform]
featured: false
sortOrder: 70
techStack: [NestJS, PostgreSQL, JWT]
---

## Situation

Each new Hourmarket product had its own authentication code. That duplicated effort, slowed new launches, and made security fixes harder to roll out consistently.

## What I worked on

- Central **NestJS auth service** with PostgreSQL
- **JWT-based sessions** and a consistent permission model
- Integration patterns other teams could adopt quickly

## Outcome

Removed duplicate auth work across products and gave new surfaces a clear path to production without rebuilding login each time.

## Stack

NestJS, PostgreSQL, JWT
