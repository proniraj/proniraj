---
title: "Shine Resunga DB: online demat (KYC) onboarding"
description: "Frontend for a regulated demat-account application — eligibility gating, document uploads, and bilingual guidance for a CDSC Depository Participant."
company: "Peace Nepal DOT Com (PNDC)"
role: "Frontend Engineer"
period: "Present"
publishedAt: "2026-10-12"
tags: [banking, kyc, onboarding, fintech]
featured: true
sortOrder: 190
techStack: [jQuery, Bootstrap]
---

## Situation

Shine Resunga Development Bank (SRDB) is a CDSC-registered Depository Participant (DP 18500). Demat (securities) accounts in Nepal can only be opened through a SEBON-registered, CDSC-licensed participant. Customers who already hold an SRDB savings account needed to apply online instead of only at a branch.

## What I owned

Frontend for the multi-step online demat application:

- **Eligibility gating** — existing 20-digit savings account number + mobile
- **Document capture UX** — passport photo, citizenship copy, wet-ink signature, hand-drawn location map, with clear acceptance rules (e.g. no Google Maps screenshots, no digital signatures)
- **Minor / guardian path** — birth certificate plus guardian photo and citizenship
- **Bilingual guidance** — English and Nepali instructions, including legacy Preeti-font content

## Constraints

Regulated KYC flow. Public assets on the live app use jQuery, Bootstrap, and Laravel-style session cookies — describe the stack accurately; this is not the React/Next.js surface used on NMB.

## Proof

- Live app: [onlinedemat.srdb.com.np](https://onlinedemat.srdb.com.np/) — footer: "Powered by: Peace Nepal DOT Com"
- No KYC uploads, customer data, or admin tooling shown here

## Stack

jQuery, Bootstrap, form validation · KYC onboarding UX · bilingual UI
