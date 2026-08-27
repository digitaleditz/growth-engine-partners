export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  summary: string;
  category: string;
  date: string; // ISO
  readTime: string;
  author: string;
  intro: string;
  sections: BlogSection[];
  closing: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "connected-digital-growth-system",
    title: "What a Connected Digital Growth System Actually Looks Like",
    metaTitle:
      "What a Connected Digital Growth System Looks Like | DigitalEditz",
    summary:
      "Most businesses buy marketing in pieces, a website here, ads there, content somewhere else. Here is how the pieces connect into one system that compounds.",
    category: "Growth Systems",
    date: "2026-06-10",
    readTime: "8 min read",
    author: "DigitalEditz Team",
    intro:
      "Marketing rarely fails because one channel is broken. It fails because the parts were bought separately and never designed to work together. A connected digital growth system treats brand, website, content, acquisition, conversion and analytics as one operating layer for the business.",
    sections: [
      {
        heading: "The cost of a fragmented setup",
        paragraphs: [
          "When a brand identity, a website, a content calendar and an ad account are commissioned from different people at different times, each one optimises for its own metric. The brand looks good but says nothing about the offer. The website is beautiful but has no path to enquiry. Ads bring traffic to a page that was never built to convert. Nothing is technically wrong, yet nothing compounds.",
          "The symptom most owners notice first is cost: leads get more expensive over time even though spend and effort go up. The cause is usually structural, not tactical.",
        ],
        bullets: [
          "Positioning that changes depending on which asset a prospect sees",
          "Traffic arriving on pages with no clear next step",
          "Enquiries that are never followed up in a consistent way",
          "No shared reporting, so no one can tell which decision worked",
        ],
      },
      {
        heading: "The six layers of a connected system",
        paragraphs: [
          "A system is easier to reason about when you separate the layers and define what each one owes the next.",
        ],
        bullets: [
          "Brand: positioning, message and identity that make the offer understandable in one line",
          "Digital infrastructure: website, landing pages, tracking and the technical base everything else runs on",
          "Content: the assets that build familiarity and answer real buying questions",
          "Acquisition: paid and organic distribution pointed at pages that are built to convert",
          "Demand and conversion: offers, forms, follow-up and the path from interest to conversation",
          "Automation and analytics: CRM, routing, reporting and the feedback loop that improves the rest",
        ],
      },
      {
        heading: "How the layers reinforce each other",
        paragraphs: [
          "Clear positioning makes ads cheaper because the message needs less explanation. A fast, well-structured website makes content worth publishing because pages can actually rank and convert. Tracking makes acquisition improvable because you can see which segment produced revenue rather than which post got likes. Automation makes volume survivable because follow-up does not depend on someone remembering.",
          "Sequence matters more than scope. Fixing acquisition before the destination page and the follow-up exist simply buys traffic that leaks.",
        ],
      },
      {
        heading: "Where to start if the system does not exist yet",
        paragraphs: [
          "Start with the layer that currently blocks every other layer. For most businesses that is either positioning or the website. Once the message is clear and there is a page that converts, adding content and paid distribution has somewhere to land. Automation and reporting come next, because they turn a working setup into something you can scale deliberately.",
        ],
      },
    ],
    closing:
      "If you are unsure which layer is holding the rest back, a discovery call is the fastest way to find out, we map the current setup before recommending anything.",
  },
  {
    slug: "individual-services-vs-integrated-engagement",
    title: "Individual Services or an Integrated Engagement: How to Choose",
    metaTitle:
      "Individual Services vs an Integrated Engagement | DigitalEditz",
    summary:
      "A single capability is sometimes the right buy, and sometimes the expensive one. A practical way to decide what your business actually needs next.",
    category: "Working Together",
    date: "2026-06-24",
    readTime: "7 min read",
    author: "DigitalEditz Team",
    intro:
      "Businesses ask for a website, a content retainer or ad management. Sometimes that is exactly right. Other times it is the third attempt at solving a problem that lives somewhere else. The decision is easier when you separate a capability gap from a system gap.",
    sections: [
      {
        heading: "When a single service is the right choice",
        paragraphs: [
          "Buy one capability when the rest of the system already works and one specific piece is missing or outdated. The test is whether you can name the metric the work should move and point to the layers that will carry it.",
        ],
        bullets: [
          "Positioning and offer are clear and the team agrees on them",
          "There is already a page or funnel that converts at a known rate",
          "Enquiries are tracked and followed up consistently",
          "The gap is genuinely narrow: a rebuild, a channel launch, a creative refresh",
        ],
      },
      {
        heading: "When an integrated engagement is cheaper in the end",
        paragraphs: [
          "If two or more layers are weak, buying them one at a time usually costs more, because each piece has to be redone once the next one changes. An integrated engagement sequences the work so that each layer is built against the one it feeds.",
        ],
        bullets: [
          "Results vary widely month to month with no explainable cause",
          "Different assets describe the business in different ways",
          "Traffic exists but enquiries do not, or enquiries exist but do not close",
          "No reliable reporting, so decisions are made on impressions",
        ],
      },
      {
        heading: "Questions worth answering before you commit",
        paragraphs: [
          "Three questions surface most of the truth: what happens to a prospect between first click and first conversation, who owns the follow-up, and what number would prove this quarter worked. If any answer is vague, the gap is systemic and scoping should start there.",
        ],
      },
      {
        heading: "Scope, sequence and pace",
        paragraphs: [
          "Integrated does not mean everything at once. A sensible engagement establishes the foundation, then grows distribution, then scales what proves out, with scope agreed per phase rather than assumed. That keeps investment proportionate to what has been validated.",
        ],
      },
    ],
    closing:
      "Bring your current setup to a discovery call and we will tell you plainly whether you need one capability or a connected build.",
  },
  {
    slug: "aligning-brand-website-content-acquisition-crm",
    title: "Aligning Brand, Website, Content, Acquisition and CRM",
    metaTitle: "How to Align Brand, Website, Content, Ads and CRM | DigitalEditz",
    summary:
      "Alignment is not a slogan. It is a set of concrete handoffs between five parts of your marketing that either match or quietly leak revenue.",
    category: "Operations",
    date: "2026-07-08",
    readTime: "9 min read",
    author: "DigitalEditz Team",
    intro:
      "Alignment sounds abstract until you look at the handoffs. Every prospect passes through brand, website, content, acquisition and CRM in some order. Each transition is a place where the message can change, the intent can drop or the record can disappear.",
    sections: [
      {
        heading: "Brand to website: one promise, repeated",
        paragraphs: [
          "The line a prospect remembers from your brand should be the first thing the website confirms. If the homepage hero introduces a new vocabulary, visitors restart their evaluation from scratch. Keep the primary promise, the audience and the offer identical across identity, homepage and key landing pages.",
        ],
      },
      {
        heading: "Website to content: pages that earn the traffic",
        paragraphs: [
          "Content should point at pages that can serve the intent it created. An article answering a comparison question needs a service or case-study page to hand off to. Conversely, a service page with no supporting content has nothing to build familiarity before the enquiry.",
          "Practical alignment here looks like internal links from every article to the most relevant service or proof page, and a single clear next step on each of those pages.",
        ],
      },
      {
        heading: "Acquisition to conversion: match the page to the ad",
        paragraphs: [
          "Paid traffic exposes misalignment fastest. If an ad promises a specific outcome and the destination page talks about the company in general, cost per enquiry rises no matter how good the targeting is. Ad concept, landing page headline and form should describe the same offer in the same words.",
        ],
        bullets: [
          "One offer per campaign and per landing page",
          "Form fields limited to what qualification actually needs",
          "Tracking in place before spend, not after",
        ],
      },
      {
        heading: "Conversion to CRM: nothing lands in a void",
        paragraphs: [
          "The last handoff is the one most often broken. Enquiries need a destination, an owner, a response time and a status. Without that, the reporting at the top of the funnel describes traffic while the business experiences silence.",
          "Automation is useful here precisely because it removes discretion: routing, acknowledgement and reminders happen the same way every time, which also makes the data trustworthy enough to optimise against.",
        ],
      },
      {
        heading: "Closing the loop with analytics",
        paragraphs: [
          "Once the handoffs are intact, reporting can attribute outcomes rather than activity. That is what lets you scale deliberately: you increase what produced qualified conversations and stop what produced volume alone.",
        ],
      },
    ],
    closing:
      "Not sure which handoff is leaking? A discovery call maps all five and shows you where the drop actually happens.",
  },
];

export const getPostBySlug = (slug?: string) =>
  blogPosts.find((p) => p.slug === slug);

export const formatPostDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
