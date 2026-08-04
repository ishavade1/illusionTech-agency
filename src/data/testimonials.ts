export interface Testimonial {
  id: string
  name: string
  company: string
  review: string
  // avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Nair',
    company: 'Founder, Northside Bakery',
    review:
      'Our new site paid for itself in the first month. Online orders are up and customers keep telling us how easy it is to use.',
  //   avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop',
  },
  {
    id: 't2',
    name: 'Marcus Webb',
    company: 'CEO, Flux Finance',
    review:
      'They understood our positioning immediately and shipped a landing page that helped us close our seed round.',
    // avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
  },
  {
    id: 't3',
    name: 'Elena Ruiz',
    company: 'Director, Harbor Legal Group',
    review:
      'Professional from kickoff to launch. The intake form alone has doubled the quality of leads we receive.',
    // avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80&auto=format&fit=crop'
  },
]
