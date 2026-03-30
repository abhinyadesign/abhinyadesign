export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  image?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface CaseStudy {
  title: string;
  category: string;
  image: string;
  slug: string;
  excerpt: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  author: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
}

export interface SiteData {
  company: {
    name: string;
    tagline: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    socials: { platform: string; href: string }[];
  };
  nav: NavLink[];
  footerLinks: { heading: string; links: NavLink[] }[];
  stats: Stat[];
  services: Service[];
  features: Feature[];
  testimonials: Testimonial[];
  pricing: PricingTier[];
  caseStudies: CaseStudy[];
  blogPosts: BlogPost[];
  team: TeamMember[];
  process: ProcessStep[];
  clients: ClientLogo[];
}
