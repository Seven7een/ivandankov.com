// Site configuration — centralized, all in one place.
// For sensitive values, use environment variables.

export const SITE = {
  website: process.env.SITE_URL || 'http://localhost:4321',
  title: 'Ivan Dankov',
  author: 'Ivan Dankov',
  desc: 'Senior Engineer working at the intersection of security, distributed systems, and automation.',
  postPerIndex: 5,
  postPerPage: 10,
  lightAndDarkMode: false,
  lang: 'en',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/pulse', label: 'Pulse' },
  { href: '/search', label: 'Search' },
] as const;

export const SOCIAL_LINKS = [
  { href: 'https://github.com/Seven7een', label: 'GitHub' },
  { href: 'https://linkedin.com/in/ivan-dankov', label: 'LinkedIn' },
] as const;

export const CREDLY_BADGES: { src: string; href: string; alt: string }[] = [
  {
    src: 'https://images.credly.com/size/340x340/images/52c6e5ac-9516-4944-a4df-e31b23c9bbf2/blob',
    href: 'https://www.credly.com/badges/6b0858ec-1191-4ffb-9386-1ddc96aa1cad/public_url',
    alt: 'AWS Certified Generative AI Developer - Professional',
  },
  {
    src: 'https://images.credly.com/size/340x340/images/9de9a2f7-3259-4720-bb74-095563bb1e49/blob',
    href: 'https://www.credly.com/badges/f96a13c5-bef2-4617-8bfd-b998317dd51a/public_url',
    alt: 'AWS Certified Generative AI Developer - Professional Early Adopter',
  },
  {
    src: 'https://images.credly.com/size/340x340/images/7cf036b0-c609-4378-a7be-9969e1dea7ab/blob',
    href: 'https://www.credly.com/badges/b8b76a9b-a4e4-4d1e-8ada-99755b59d4bb/public_url',
    alt: 'AWS Knowledge: Cloud Essentials',
  },
  {
    src: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    href: 'https://www.credly.com/badges/ac5a8c88-d400-4b04-960d-1407f06e50be/public_url',
    alt: 'AWS Certified Solutions Architect - Associate',
  },
];
