export interface PortfolioItem {
  id: string
  name: string
  category: string
  stack: string[]
  description: string
  image: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'northside-bakery',
    name: 'Northside Bakery',
    category: 'Local Business',
    stack: ['React', 'Tailwind', 'Stripe'],
    description: 'Warm, order-ahead site for a neighborhood bakery with real-time menu updates.',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'flux-finance',
    name: 'Flux Finance',
    category: 'Startup',
    stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    description: 'Investor-ready landing page and waitlist funnel for a fintech startup.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'atelier-mora',
    name: 'Atelier Mora',
    category: 'Personal Brand',
    stack: ['React', 'Sanity CMS', 'GSAP'],
    description: 'Editorial-style portfolio for an independent architectural photographer.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'verdant-goods',
    name: 'Verdant Goods',
    category: 'Ecommerce',
    stack: ['Shopify', 'React', 'Tailwind'],
    description: 'Full storefront rebuild for a sustainable home goods brand.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'harbor-legal',
    name: 'Harbor Legal Group',
    category: 'Corporate',
    stack: ['React', 'TypeScript', 'Contentful'],
    description: 'Trust-building corporate site for a boutique law firm with case intake forms.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'summit-fitness',
    name: 'Summit Fitness Collective',
    category: 'Agency',
    stack: ['React', 'Framer Motion', 'EmailJS'],
    description: 'High-energy brand site with class booking and trainer profiles.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&auto=format&fit=crop',
  },
]
