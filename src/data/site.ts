// Global config for Pixelforge Studio

export interface Social {
  label: string;
  href: string;
}

export interface Agency {
  name: string;
  short: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
  socials: Social[];
}

export const AGENCY: Agency = {
  name: "illusionTech.",
  short: "illusionTech.",
  tagline: "Independent design & development studio.",
  email: "asthanashivam1@gmail.com",
  phone: "+91 9930518907",
  address: "Navi Mumbai",
  hours: "Mon — Fri · 09:00 to 18:00 IST",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    
  ],
};

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 8, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
  { value: 7, suffix: "-20", label: "Delivery Time" },
  { value: 24, suffix: "/7", label: "Ongoing support" },
];

export interface Service {
  id: number;
  title: string;
  icon: string;
  body: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Website Development",
    icon: "Code2",
    body: "Custom-built marketing sites and web apps using modern frameworks.",
    tags: ["Business Sites", "Corporate", "Landing Pages", "Portfolios", "Web Apps"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: "Palette",
    body: "Considered interfaces and user experiences that convert visitors.",
    tags: ["Discovery", "Wireframes", "Design Systems", "Prototyping"],
  },
  {
    id: 3,
    title: "E-Commerce",
    icon: "ShoppingBag",
    body: "Online stores engineered for speed, storytelling, and sales.",
    tags: ["Shopify", "Headless", "Checkout", "Analytics"],
  },
  {
    id: 4,
    title: "Website Redesign",
    icon: "RefreshCcw",
    body: "Transform outdated experiences into modern, measurable ones.",
    tags: ["Audit", "Migration", "Rebrand", "SEO Preservation"],
  },
  {
    id: 5,
    title: "Maintenance",
    icon: "ShieldCheck",
    body: "Keep your site secure, fast, and up to date every single month.",
    tags: ["Uptime", "Security", "Backups", "Performance"],
  },
  {
    id: 6,
    title: "SEO Optimization",
    icon: "TrendingUp",
    body: "Improve your visibility on Google with technical + content SEO.",
    tags: ["Technical", "On-Page", "Content", "Reporting"],
  },
];

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
}

export const PROCESS: ProcessStep[] = [
  { n: "01", title: "Discovery", body: "We interview your team, users, and market to define what matters." },
  { n: "02", title: "Strategy", body: "Goals become a project plan — scope, roles, milestones, KPIs." },
  { n: "03", title: "Design", body: "Wireframes evolve into a polished visual language and design system." },
  { n: "04", title: "Build", body: "Engineering with modern stacks. Accessible, performant, maintainable." },
  { n: "05", title: "Test", body: "Cross-device QA, Lighthouse audits, and analytics wiring." },
  { n: "06", title: "Launch", body: "Zero-downtime deploy, monitoring, and a retrospective for next steps." },
];

export interface WhyItem {
  title: string;
  body: string;
}

export const WHY: WhyItem[] = [
  { title: "Premium Design", body: "Every pixel considered. Editorial typography, generous space, purposeful motion." },
  { title: "Lightning Fast", body: "95+ Lighthouse across the board. Optimised images, code-split, cached." },
  { title: "Truly Responsive", body: "Mobile-first flows that scale gracefully to any viewport or device." },
  { title: "Reliable Support", body: "A real person on Slack, not a ticket queue. Long-term partnership by design." },
];

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  stack: string[];
  blurb: string;
  image: string;
  span : string;
  url : string;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "Uplift Media",
    category: "Marketing Media Agency",
    stack: ["React.js", "TypeScript", "Vite"],
    blurb: "Designed and deployed a responsive marketing agency website with SEO optimization and integrated contact functionality.",
    image:
      "/Uplift-thumbnail.jpg",
    span: "md:col-span-8 md:row-span-2",
    url : "https://upliftmedia-marketing.co.uk/",
  },
  {
    id: 2,
    title: "Rustic Visual Solutions",
    category: "Portfolio · DOP",
    stack: ["Typescript", "React.js"],
    blurb: "Developed a modern, responsive business website with reusable components and production-ready deployment.",
    image:
      "/rustic-thumbnail.jpg",
    span: "md:col-span-4 md:row-span-2",
    url : "https://rusticvisualsolution.netlify.app/",
  },
  {
    id: 3,
    title: "Meridian-Real Estate",
    category: "Real Estate",
    stack: ["React.js", "Tailwind", "Typescript", "Vite"],
    blurb: "Engineered a modern real estate platform focused on property discovery, lead generation, and seamless user engagement.",
    image:
      "/meridian-thumbnail.jpg",
    span: "md:col-span-4",
    url : "https://meridian-real-estate-hwr1.vercel.app/",
  },
  {
    id: 4,
    title: "Obsidian&Bone",
    category: "Tattoo Design",
    stack: ["Vite", "React.js", "Typescript", "Framer"],
    blurb: "Crafted a high-impact tattoo studio website focused on portfolio presentation, brand identity, and lead generation.",
    image:
      "/tattoo-thumbnail.jpg",
    span: "md:col-span-4",
    url : "https://tattoo-obsidian-bone.vercel.app/",
  },
  // {
  //   id: 5,
  //   title: "Meridian OS",
  //   category: "SaaS · Product",
  //   stack: ["React", "Node", "PostgreSQL"],
  //   blurb: "Product marketing site for a design-forward operating system for teams.",
  //   image:
  //     "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //   span: "md:col-span-8",
  //   url : "https://upliftmedia-marketing.co.uk/",
  // },
  // {
  //   id: 6,
  //   title: "Fluida",
  //   category: "Brand · Motion",
  //   stack: ["GSAP", "WebGL", "Vercel"],
  //   blurb: "An immersive launch experience for a fluid-dynamics research lab.",
  //   image:
  //     "https://images.pexels.com/photos/29067691/pexels-photo-29067691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //   span: "md:col-span-12",
  //   url : "https://upliftmedia-marketing.co.uk/",
  // },
];

export interface Testimonial {
  name: string;
  role: string;
  body: string;
  // avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Julian Reyes",
    role: "Founder · Northlight Bank",
    body: "The most senior team we've worked with. Pixelforge shipped a product that raised our conversion by 41% in the first quarter.",
    // avatar: "https://images.pexels.com/photos/31660586/pexels-photo-31660586.jpeg",
  },
  {
    name: "Aditya Sharma",
    role: "Head of Growth · Aster Health",
    body: "Every meeting felt like a design critique with people who care deeply. We got a website — and a partner.",
    // avatar: "https://images.pexels.com/photos/17685845/pexels-photo-17685845.jpeg",
  },
  {
    name: "Marcus Wren",
    role: "CEO · Kavvo Coffee",
    body: "Beautiful, fast, and thoughtful about the small details customers actually feel. Sales are up 3x since relaunch.",
    // avatar: "https://images.unsplash.com/photo-1638290047807-4c9d389b9aa6",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "How long does a website take?",
    a: "Marketing sites typically ship in 4–8 weeks. Custom platforms range from 8–16 weeks depending on scope. We'll give you a fixed timeline after discovery.",
  },
  {
    q: "How much does a website cost?",
    a: "Website pricing varies depending on your specific goals, the complexity of the features, and design requirements. Whether you need a simple digital brochure or an interactive online store, we customize our pricing to fit your budget and scope. Reach out to our team for a quick, customized estimate!",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. We audit your current site, protect your SEO equity, and rebuild with a modern stack, design system, and content strategy.",
  },
  {
    q: "Will my website be mobile responsive?",
    a: "Always. We design mobile-first and hand-test on real devices across iOS, Android, and desktop breakpoints.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes — most clients stay with us on a monthly care plan for security, performance, analytics, and iterative improvements.",
  },
];

export interface Chapter {
  n: string;
  title: string;
  body: string;
}

export const CHAPTERS: Chapter[] = [
  {
    n: "01",
    title: "Design is a business decision.",
    body: "Every design choice we make can be traced back to something you're trying to grow — signups, revenue, retention, credibility. Pretty is a byproduct.",
  },
  {
    n: "02",
    title: "Performance is not optional.",
    body: "A site that loads in 800ms outperforms a site that loads in 4s. We ship 95+ Lighthouse scores as a baseline, not a stretch goal.",
  },
  {
    n: "03",
    title: "Words come first.",
    body: "Great sites start with clarity of message. We workshop your positioning before we open Figma — because layout can't fix a story that doesn't land.",
  },
  {
    n: "04",
    title: "Ship, measure, iterate.",
    body: "Launching is chapter one. We wire analytics from day one so you can see what's working and we can improve it every month.",
  },
];

export const MARQUEE: string[] = [
  "Design",
  "Development",
  "Strategy",
  "SEO",
  "Brand",
  "Motion",
  "Accessibility",
  "Performance",
];