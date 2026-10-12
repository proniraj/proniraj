export const SITE = {
  title: "Niraj Thakur",
  tagline: "Full Stack Engineer",
  description:
    "Full-stack engineer building banking platforms at Peace Nepal — Next.js, React, TypeScript, NestJS, React Native. Kathmandu · UTC+5:45.",
  url: "https://nirajthakur.com.np",
  author: "Niraj Thakur",
  email: "ntnirajthakur21@gmail.com",
  location: "Kathmandu, Nepal",
  timezone: "UTC+5:45",
  /** Fill in once you confirm actual overlap windows */
  overlap: "Europe daytime · US-East mornings",
  ogImage: "/assets/og-card.png",
  ogImageAlt:
    "Niraj Thakur — Full-stack engineer building banking platforms at Peace Nepal; SaaS, fintech, and systems in Rust.",
  keywords:
    "Niraj Thakur, full stack engineer, Peace Nepal, NMB Bank, Next.js, React, TypeScript, NestJS, Rust, remote, SaaS, fintech, KYC, P2P, local-first, Nepal",
  themeColor: "#0a0a0a",
} as const;

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/developerniraj/",
  github: "https://github.com/proniraj",
  resume: "/assets/niraj-thakur-resume.pdf",
  recommendations:
    "https://www.linkedin.com/in/developerniraj/details/recommendations/",
  /** Merged upstream contribution */
  imapflowPr: "https://github.com/postalsys/imapflow/pull/111",
  /** Public client sites (footer credits PNDC) */
  nmbBank: "https://www.nmb.com.np/en",
  srdbDemat: "https://onlinedemat.srdb.com.np/",
  peaceNepal: "https://peacenepal.com/",
  /**
   * Add public repo / demo URLs when ready.
   * Leave empty string to hide the link on the site.
   */
  musicPlayerRepo: "",
  p2pTransferRepo: "",
  rustShellRepo: "",
  /** YouTube walkthrough for Lanceme Up (product no longer online) */
  lancemeUpVideo: "",
  /** Clean-room page-builder demo (no client data) — add when recorded */
  nmbPageBuilderVideo: "",
} as const;

export const PROOF = {
  current: "Peace Nepal DOT Com · banking & FI platforms",
  clients: [
    "NMB Bank",
    "Shine Resunga Development Bank",
    "Hourmarket",
    "Sponsorvista",
    "Basework.io",
    "Lanceme Up",
  ] as const,
  upstream: "postalsys/imapflow",
} as const;
