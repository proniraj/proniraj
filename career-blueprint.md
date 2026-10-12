# Career Branding Blueprint: Niraj Thakur

Full-stack engineer (Kathmandu, UTC+5:45), aiming for international remote-first roles.

**Prepared** 12 Oct 2026 (NPT); **revised** 12 Oct 2026 (portfolio source sync).  
Sources: live research (peacenepal.com, nmb.com.np, onlinedemat.srdb.com.np), GitHub API notes, portfolio repo.

> Ground rules: nothing invented. `[square brackets]` = placeholders only you can fill. “Verify” = claim on site that doesn’t match public evidence or your timeline.

---

## Revision notes (portfolio sync)

Synced **portfolio source** (not live deploy) with Peace Nepal positioning:

- Hero + meta lead with PNDC banking work
- New `/work` entries: NMB CMS/page builder, SRDB online demat
- Home banking section above other product work
- Experience timeline: PNDC first; Braimy restored
- Proof strip includes NMB + Shine Resunga

**You said you’ll fix the live site later** (GitHub Pages 404 / Actions). Source is ready to deploy when you are.

---

## 0. Fix these first

| #   | Issue                                              | Fix                                                                              |
| --- | -------------------------------------------------- | -------------------------------------------------------------------------------- |
| 1   | Live portfolio 404                                 | Pages → Source: GitHub Actions; custom domain; re-run deploy (**you**)           |
| 2   | Systems repos not public / not pinned              | Publish or pin music player, P2P, Rust shell + Lanceme case-study + imapflow#111 |
| 3   | Unverifiable metrics / “5+ years” claims           | Verify or delete Thoughts + case-study metrics                                   |
| 4   | “40+ public repos”                                 | Use live count (18) or remove                                                    |
| 5   | Public gists with transaction CSV headers          | Secret/delete if real; rename if synthetic                                       |
| 6   | NMB `evil.com` JSON-LD + `super-admin` media key   | Raise **internally only** — never blog                                           |
| 7   | Sponsorvista still “Present” while PNDC is current | Confirm concurrent vs ended; align site / resume / LinkedIn / GitHub company     |

---

## Headline pick (LinkedIn)

```
Full-Stack Engineer · Banking platforms at Peace Nepal (NMB Bank CMS & page builder) · React, Next.js, TypeScript, NestJS · Building P2P & local-first systems in Rust
```

Alt (if PNDC won’t allow client names): frontend-leaning regulated banking & fintech without naming NMB/SRDB.

---

## How to show Peace Nepal work (NDA-safe)

**Public facts you can use today** (verified 12 Oct 2026):

- PNDC: peacenepal.com — BFSI platforms, ISO 9001 / 27001 claims on site
- NMB: footer “Powered By Peace Nepal DOT COM”; homepage counters 197 branches, 2.2M+ customers; Next.js App Router / RSC in public HTML
- SRDB demat: footer “Powered by: Peace Nepal DOT Com”; regulated KYC flow; public stack ≈ jQuery + Bootstrap + Laravel-style cookies — **not React**

**Presentation pattern:**

1. “Shipped for [Bank] as [title] at Peace Nepal DOT Com (PNDC)”
2. Link public pages only
3. Clean-room page-builder video (fictional content) + architecture write-up
4. No admin URLs, CMS data, KYC uploads, WAF/security details, or §0 row 6 findings
5. Get written PNDC permission before naming clients on LinkedIn / resume

**Edge to claim:** “Schema-driven page builders, twice in production” (NMB + Hourmarket).

---

## How to represent mobile / React Native

Don’t rebrand as a “mobile developer.” Stay full-stack; treat mobile as a **second surface you’ve shipped**, with two concrete proofs:

| Proof            | What to say                                                                                                        | Why it lands                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| **Hourmarket**   | “Shipped a React Native consumer shopping app (iOS/Android) alongside the web page builder and NestJS services.”   | Production mobile under a real product team           |
| **Music player** | “React Native local-first music player — offline chunked cache, stream/download state, YouTube Music integration.” | Personal systems depth _and_ RN, not a todo-app clone |

**Framing rules:**

1. Lead with banking / full-stack; mention React Native in the same breath as TypeScript/React (one skill tree, two platforms).
2. On LinkedIn Skills + Experience bullets, list **React Native** under Hourmarket and under a Systems / Projects section for the music player — not only in a generic skill dump.
3. Optional headline tweak (still under ~220 chars): keep banking first, add `· React Native` near the stack list.
4. When the music player repo is public: pin it, add a 30–60s phone screen recording, and say “React Native” in the README first line.
5. Avoid “exposure to mobile” — use **shipped** / **built** (you did).

**LinkedIn About one-liner to insert after Hourmarket:**

> At Hourmarket I also shipped a React Native shopping app on iOS and Android. Outside work I’m building a React Native local-first music player with offline caching — same language, different constraints.

---

## Still open (you fill)

- [ ] PNDC exact title, start date, on-site/hybrid
- [ ] Written permission to name NMB and Shine Resunga
- [ ] NMB: TypeScript? CSS approach? dnd library? draft/publish? outcomes?
- [ ] SRDB: built / rebuilt / maintain? when? (footer © 2021 predates you)
- [ ] Sponsorvista concurrent or ended?
- [ ] Systems repo + demo links
- [ ] Lanceme Up video IDs + embed permission
- [ ] Overlap hours for Europe / US-East
- [ ] Raise NMB CMS data issues internally

---

## LinkedIn About (ready to paste — fill brackets)

I build production web platforms for regulated businesses and remote product teams, and I like understanding what runs underneath them.

Right now I'm a [Frontend/Full-Stack] Engineer at Peace Nepal DOT Com (PNDC), which builds and runs digital platforms for Nepali banks and financial institutions. Work I've shipped there:

- NMB Bank (nmb.com.np): frontend for a fully CMS-driven Next.js site. Every page, menu and content block is editable from an admin panel. I built the drag-and-drop page builder the bank's team uses to compose internal pages without a developer.
- Shine Resunga Development Bank: frontend for the online demat-account application, a regulated KYC flow covering account verification, document and signature uploads, and bilingual (English/Nepali) guidance.

Before PNDC I spent [N] years shipping SaaS, fintech and AI products for founders in the UK, Netherlands and US: Hourmarket, Sponsorvista, Basework.io, Lanceme Up.

Outside work: React Native local-first music player, cross-platform P2P transfer, POSIX shell in Rust, merged fix to postalsys/imapflow#111.

Open to remote full-time or contract roles.  
📩 ntnirajthakur21@gmail.com · 🌐 nirajthakur.com.np · 💻 github.com/proniraj

---

## Portfolio layout (target)

1. Hero — banking-first proof strip
2. Banking & fintech (NMB + SRDB)
3. Selected product work
4. Systems work
5. Lanceme Up video case study
6. Open source
7. Recommendations
8. Writing (real posts only)
9. How I work
10. Footer CTA

---

## OSS targets next

nodejs/undici · pinojs/pino · fastify/fastify

Show imapflow#111 honestly (one-line production fix, merged Feb 2023).
