export const site = {
  businessName: "FoamCollege",
  tagline: "Your Guide to Spray Foam Certification, Recertification & State Licensing",
  domain: "foamcollege.com",
  url: "https://www.foamcollege.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Topic {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

// Angle: a neutral certification/CEU navigator — NOT a course provider or a duplicate
// of CCA's own sibling course-delivery sites. Two CCA sites already run actual course
// catalogs/certification programs (sprayfoaminstitute.com — courses in application
// technique, rig operation, OSHA safety, business fundamentals; insulationcollege.com —
// certification + installation training + safety courses + business startup program).
// Two more cover adjacent, non-overlapping ground (sprayfoammentor.com — 1:1 personal
// mentorship; sprayfoambusinessbootcamp.com — in-person business-only bootcamp, zero
// technique training). Building a third "get certified here" course catalog would
// duplicate the first two and have CCA competing with itself in search.
//
// Research (DataForSEO) confirmed: (a) generic "spray foam certification" demand is
// real but thin (~50/mo) and the SERP is dominated by high-authority incumbents (SPFA,
// BASF, Huntsman/Icynene-Lapolla, Carlisle) who own that exact positioning; (b) every
// top-ranked cert page is self-promotional (SPFA promoting SPFA, manufacturers
// promoting their own program) — no neutral comparison resource exists; (c)
// recertification/CEU-renewal content is buried as a subsection everywhere and owned
// nowhere; (d) state licensing requirements for insulation contractors are genuinely
// fragmented (~30 states license this work, requirements scattered per state board)
// with no SPF-specific aggregator found. That's the open lane this site fills: helping
// an installer figure out which certification they actually need, how to keep it
// current, and what their state requires — signposting to the right resource (a CCA
// sibling site or an external one) rather than selling a course itself.
export const topics: Topic[] = [
  {
    slug: "spfa-pcp-certification-explained",
    name: "SPFA PCP Certification, Explained",
    shortName: "SPFA PCP Explained",
    summary: "What the SPFA Professional Certification Program actually is, who recognizes it, and whether it's the right starting point for you.",
  },
  {
    slug: "manufacturer-certifications-vs-spfa-pcp",
    name: "Manufacturer Certifications vs. SPFA PCP",
    shortName: "Manufacturer Certs vs. PCP",
    summary: "How BASF, Icynene-Lapolla/Demilec, and Carlisle's own certification programs relate to (and differ from) the industry-wide SPFA credential.",
  },
  {
    slug: "state-by-state-spray-foam-licensing-requirements",
    name: "State-by-State Spray Foam Licensing Requirements",
    shortName: "State Licensing Requirements",
    summary: "Roughly 30 states license insulation contractor work in some form — the real, fragmented picture, since no single source tracks this for spray foam specifically.",
  },
  {
    slug: "how-recertification-and-ceus-actually-work",
    name: "How Recertification & CEUs Actually Work",
    shortName: "Recertification & CEUs",
    summary: "Renewal cycles, continuing-education requirements, and what actually happens if you let a certification lapse — the part every provider treats as an afterthought.",
  },
  {
    slug: "choosing-between-competing-certification-programs",
    name: "Choosing Between Competing Certification Programs",
    shortName: "Choosing a Program",
    summary: "A neutral framework for deciding between SPFA PCP, manufacturer-specific certification, and other credentials — based on your goals, not whoever's page you landed on.",
  },
  {
    slug: "what-certification-doesnt-teach-you",
    name: "What Certification Doesn't Teach You",
    shortName: "What Cert Doesn't Cover",
    summary: "Certification proves you know the standards — it doesn't teach hands-on spray technique or how to run the business. Here's honestly where those actually get taught.",
  },
] as const;
