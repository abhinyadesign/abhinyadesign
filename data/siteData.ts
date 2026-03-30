import type { SiteData } from "@/types";

export const siteData: SiteData = {
  company: {
    name: "Abhinya Design",
    tagline: "Transforming Ideas Into Digital Excellence",
    description:
      "We are a full-service IT and software company delivering cutting-edge digital solutions — from web development to enterprise software, UI/UX design, and cloud infrastructure.",
    email: "hello@abhinyadesign.com",
    phone: "+91 98765 43210",
    address: "Hyderabad, Telangana, India",
    socials: [
      { platform: "Twitter", href: "#" },
      { platform: "LinkedIn", href: "#" },
      { platform: "Instagram", href: "#" },
      { platform: "Github", href: "#" },
    ],
  },

  nav: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Mobile Apps", href: "/services/mobile-apps" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions" },
        { label: "AI & ML", href: "/services/ai-ml" },
        { label: "Cybersecurity", href: "/services/cybersecurity" },
      ],
    },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: [
    {
      heading: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Solutions", href: "/solutions" },
        { label: "Pricing", href: "/pricing" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Mobile Apps", href: "/services/mobile-apps" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions" },
        { label: "AI & ML", href: "/services/ai-ml" },
        { label: "Cybersecurity", href: "/services/cybersecurity" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/solutions" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],

  stats: [
    { value: "150+", label: "Projects Delivered" },
    { value: "80+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "25+", label: "Expert Engineers" },
  ],

  services: [
    {
      id: "1",
      slug: "web-development",
      icon: "Globe",
      title: "Web Development",
      shortDescription: "Scalable, high-performance web applications built with modern technologies.",
      description:
        "From landing pages to complex enterprise portals, we build fast, secure, and scalable web applications using Next.js, React, Node.js, and more.",
      features: [
        "Custom React & Next.js Applications",
        "RESTful & GraphQL APIs",
        "CMS Integration (Sanity, Contentful)",
        "Performance Optimization & Core Web Vitals",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
      ],
    },
    {
      id: "2",
      slug: "mobile-apps",
      icon: "Smartphone",
      title: "Mobile App Development",
      shortDescription: "Native and cross-platform apps that delight users on iOS and Android.",
      description:
        "We craft intuitive and performant mobile experiences with React Native, Flutter, and Swift/Kotlin for businesses at any scale.",
      features: [
        "iOS & Android Native Development",
        "React Native Cross-Platform Apps",
        "Flutter Applications",
        "App Store Optimization (ASO)",
        "Push Notification & Analytics",
        "Offline-First Architecture",
      ],
    },
    {
      id: "3",
      slug: "ui-ux-design",
      icon: "Palette",
      title: "UI/UX Design",
      shortDescription: "Beautiful, user-centric designs that convert visitors into customers.",
      description:
        "Our design team blends aesthetics with usability to create interfaces that are not only stunning but also drive measurable business results.",
      features: [
        "User Research & Persona Development",
        "Wireframing & Prototyping",
        "Figma Design Systems",
        "Brand Identity & Style Guides",
        "Usability Testing",
        "Accessibility (WCAG 2.1)",
      ],
    },
    {
      id: "4",
      slug: "cloud-solutions",
      icon: "Cloud",
      title: "Cloud Solutions",
      shortDescription: "Secure, scalable cloud infrastructure-as-code tailored to your needs.",
      description:
        "We architect and manage cloud-native solutions on AWS, GCP, and Azure — from serverless functions to Kubernetes orchestration.",
      features: [
        "AWS, GCP & Azure Architecture",
        "Kubernetes & Docker Orchestration",
        "CI/CD Pipeline Automation",
        "Infrastructure as Code (Terraform)",
        "24/7 Cloud Monitoring",
        "Cost Optimization Strategies",
      ],
    },
    {
      id: "5",
      slug: "ai-ml",
      icon: "Brain",
      title: "AI & Machine Learning",
      shortDescription: "Intelligent automation and predictive analytics to future-proof your business.",
      description:
        "Leverage the power of AI/ML with custom model development, NLP, computer vision, and intelligent automation tailored for your business domain.",
      features: [
        "Custom ML Model Development",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions",
        "Generative AI & LLM Integration",
        "Predictive Analytics Dashboards",
        "MLOps & Model Monitoring",
      ],
    },
    {
      id: "6",
      slug: "cybersecurity",
      icon: "Shield",
      title: "Cybersecurity",
      shortDescription: "Protect your digital assets with enterprise-grade security solutions.",
      description:
        "Our security experts conduct thorough audits, penetration testing, and implement robust security frameworks to keep your data safe.",
      features: [
        "Penetration Testing & Vulnerability Assessments",
        "OWASP Security Audits",
        "Zero-Trust Architecture",
        "GDPR & SOC2 Compliance",
        "Security Monitoring (SIEM)",
        "Incident Response Planning",
      ],
    },
  ],

  features: [
    {
      icon: "Zap",
      title: "Blazing Fast Performance",
      description:
        "We build with performance as a first-class citizen — optimized bundle sizes, lazy loading, caching strategies, and CDN delivery.",
    },
    {
      icon: "Shield",
      title: "Enterprise-Grade Security",
      description:
        "End-to-end security protocols, encrypted data pipelines, and compliance with international standards like GDPR and ISO 27001.",
    },
    {
      icon: "Settings",
      title: "Fully Customizable",
      description:
        "No off-the-shelf solutions. Everything is built from scratch to perfectly match your brand guidelines and business requirements.",
    },
    {
      icon: "BarChart2",
      title: "Data-Driven Decisions",
      description:
        "Integrated analytics, A/B testing, and reporting dashboards so you can make informed decisions backed by real data.",
    },
    {
      icon: "Users",
      title: "Dedicated Support",
      description:
        "A dedicated account manager and 24/7 technical support to ensure your solutions run smoothly around the clock.",
    },
    {
      icon: "Cpu",
      title: "Scalable Architecture",
      description:
        "Built to grow with you. Our microservices and cloud-native patterns ensure your platform handles traffic at any scale.",
    },
  ],

  testimonials: [
    {
      name: "Rohan Mehta",
      role: "CTO",
      company: "FinTech Startups Inc.",
      avatar: "/avatars/rohan.jpg",
      rating: 5,
      review:
        "Abhinya Design transformed our entire product from a prototype into a production-ready SaaS platform. Their code quality and design sensibility are top-notch.",
    },
    {
      name: "Sara Chen",
      role: "Product Manager",
      company: "EduTech Ventures",
      avatar: "/avatars/sara.jpg",
      rating: 5,
      review:
        "The team delivered our mobile app on time and exceeded every design expectation. Our user retention improved by 40% after launch — incredible work!",
    },
    {
      name: "Jason Luke",
      role: "Founder",
      company: "RetailBot AI",
      avatar: "/avatars/jason.jpg",
      rating: 5,
      review:
        "Their AI integration work was flawless. Abhinya Design built a recommendation engine that increased our conversion rate by 28%. Highly recommended.",
    },
  ],

  pricing: [
    {
      name: "Starter",
      price: "₹25,000",
      period: "/project",
      description: "Perfect for small businesses & startups launching their first digital product.",
      features: [
        "Up to 5 Pages / Screens",
        "Responsive Web Design",
        "Basic SEO Setup",
        "1 Revision Round",
        "30-Day Support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Business",
      price: "₹75,000",
      period: "/project",
      description: "For growing companies needing scalable web or mobile solutions.",
      features: [
        "Up to 20 Pages / Screens",
        "React / Next.js Development",
        "Custom CMS Integration",
        "API Development & Integration",
        "3 Revision Rounds",
        "90-Day Priority Support",
        "Performance Audit",
      ],
      cta: "Most Popular",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      description: "Dedicated team for large-scale, ongoing digital transformation projects.",
      features: [
        "Unlimited Pages / Features",
        "Dedicated Engineering Team",
        "Cloud Infrastructure Setup",
        "AI/ML Integration",
        "Security Audits",
        "24/7 SLA Support",
        "Monthly Strategy Sessions",
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ],

  caseStudies: [
    {
      title: "AI-Powered E-commerce Platform",
      category: "AI & Web Development",
      image: "/case-studies/ecommerce.jpg",
      slug: "ai-ecommerce-platform",
      excerpt:
        "Built a recommendation engine and custom storefront that boosted revenue by 45% for a retail client.",
    },
    {
      title: "Healthcare Management SaaS",
      category: "SaaS & Cloud",
      image: "/case-studies/healthcare.jpg",
      slug: "healthcare-saas",
      excerpt:
        "Designed and developed a full-stack patient management platform for a chain of clinics across 3 cities.",
    },
    {
      title: "Real-Time Trading Dashboard",
      category: "FinTech & UI/UX",
      image: "/case-studies/trading.jpg",
      slug: "trading-dashboard",
      excerpt:
        "Engineered a WebSocket-driven trading UI processing 10,000+ live data points per second with zero lag.",
    },
  ],

  blogPosts: [
    {
      title: "Why Next.js 14 is the Future of Web Development",
      slug: "nextjs-14-future",
      date: "March 20, 2026",
      category: "Technology",
      image: "/blog/nextjs.jpg",
      excerpt:
        "Explore how Next.js App Router, React Server Components, and Partial Prerendering are reshaping how we build web applications.",
      author: "Abhinya Design Team",
    },
    {
      title: "Designing for Accessibility: A Complete Guide",
      slug: "accessibility-guide",
      date: "March 10, 2026",
      category: "Design",
      image: "/blog/accessibility.jpg",
      excerpt:
        "Learn how to build truly inclusive interfaces that meet WCAG 2.1 standards without compromising visual quality.",
      author: "Abhinya Design Team",
    },
    {
      title: "AI in SaaS: Practical Integration Patterns",
      slug: "ai-saas-integration",
      date: "February 28, 2026",
      category: "AI & ML",
      image: "/blog/ai-saas.jpg",
      excerpt:
        "A technical deep-dive into embedding LLMs, vector search, and generative AI capabilities into your existing SaaS product.",
      author: "Abhinya Design Team",
    },
  ],

  team: [
    { name: "Aditi Sharma", role: "CEO & Co-Founder", avatar: "/team/aditi.jpg" },
    { name: "Kiran Rao", role: "CTO & Lead Architect", avatar: "/team/kiran.jpg" },
    { name: "Priya Nair", role: "Head of Design", avatar: "/team/priya.jpg" },
    { name: "Suresh Babu", role: "Lead Engineer", avatar: "/team/suresh.jpg" },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start with deep research into your business goals, target audience, and competitive landscape.",
      icon: "Search",
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Our UX team creates wireframes and interactive prototypes for your full approval before development.",
      icon: "Figma",
    },
    {
      step: "03",
      title: "Agile Development",
      description: "We build in 2-week sprints with weekly demos, so you stay in the loop at every milestone.",
      icon: "Code2",
    },
    {
      step: "04",
      title: "Launch & Scale",
      description: "After rigorous QA and performance testing, we deploy and provide ongoing support to help you grow.",
      icon: "Rocket",
    },
  ],

  clients: [
    { name: "TechCorp", logo: "/clients/techcorp.svg" },
    { name: "RetailBot", logo: "/clients/retailbot.svg" },
    { name: "EduTech", logo: "/clients/edutech.svg" },
    { name: "FinStar", logo: "/clients/finstar.svg" },
    { name: "MedPlus", logo: "/clients/medplus.svg" },
    { name: "CloudNine", logo: "/clients/cloudnine.svg" },
    { name: "DataSphere", logo: "/clients/datasphere.svg" },
  ],
};
