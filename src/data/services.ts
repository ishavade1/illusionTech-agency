import type { LucideIcon } from 'lucide-react'
import { Code2, Palette, ShoppingCart, RefreshCcw, ShieldCheck, TrendingUp } from 'lucide-react'

export interface Service {
  id: string
  title: string
  icon: LucideIcon
  description: string
  features?: string[]
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    icon: Code2,
    description: 'Custom-built websites using modern technologies.',
    features: [
      'Business Websites',
      'Corporate Websites',
      'Landing Pages',
      'Portfolio Websites',
      'Custom Web Apps',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Beautiful user experiences that convert visitors.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    icon: ShoppingCart,
    description: 'Online stores optimized for sales.',
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    icon: RefreshCcw,
    description: 'Transform outdated websites into modern experiences.',
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    icon: ShieldCheck,
    description: 'Keep your website secure and updated.',
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    icon: TrendingUp,
    description: 'Improve your visibility on Google.',
  },
]
