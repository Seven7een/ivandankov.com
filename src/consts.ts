// Site configuration — centralized, all in one place.
// Update these values for your project. For sensitive values, use environment variables.

export const SITE = {
  website: process.env.SITE_URL || 'http://localhost:4321',
  title: process.env.SITE_TITLE || 'My Site',
  author: 'Your Name',
  desc: 'A site built with The Forge.',
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
  // { href: 'https://github.com/yourname', label: 'GitHub' },
  // { href: 'https://linkedin.com/in/yourname', label: 'LinkedIn' },
] as const;
