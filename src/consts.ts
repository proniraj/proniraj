export const SITE = {
  title: "Niraj Thakur",
  tagline: "Full Stack Engineer",
  description:
    "Full-stack engineer (TypeScript, Node.js, NestJS, React) shipping SaaS and fintech for remote teams — also building P2P and local-first systems in Rust. Kathmandu · UTC+5:45.",
  url: "https://nirajthakur.com.np",
  author: "Niraj Thakur",
  email: "ntnirajthakur21@gmail.com",
  location: "Kathmandu, Nepal",
  timezone: "UTC+5:45",
  /** Fill in once you confirm actual overlap windows */
  overlap: "Europe daytime · US-East mornings",
  ogImage: "/assets/og-card.png",
  ogImageAlt:
    "Niraj Thakur — Full Stack Engineer building SaaS, Fintech and AI products. Open to remote roles.",
  keywords:
    "Niraj Thakur, full stack engineer, TypeScript, NestJS, Node.js, React, Rust, remote, SaaS, fintech, P2P, local-first, Nepal",
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
  /**
   * Add public repo / demo URLs when ready.
   * Leave empty string to hide the link on the site.
   */
  musicPlayerRepo: "",
  p2pTransferRepo: "",
  rustShellRepo: "",
  /** YouTube walkthrough for Lanceme Up (product no longer online) */
  lancemeUpVideo: "",
} as const;

export const PROOF = {
  clients: ["Sponsorvista", "Hourmarket", "Basework.io", "Lanceme Up"] as const,
  upstream: "postalsys/imapflow",
} as const;
