export const SITE = {
  name: 'waxphx.salon',
  title: 'waxphx.salon — Premium Phoenix Waxing Domain For Sale',
  description:
    'waxphx.salon — the exact-match premium .SALON domain for waxing & hair removal in Phoenix, AZ. Asking $50,000; reasonable offers considered.',
  schemaDescription:
    'Premium one-of-a-kind .SALON domain name combining the geo keyword PHX (Phoenix, Arizona) with the high-intent service keyword wax. Built for professional body waxing, facial waxing, Brazilian waxing, men’s grooming, and hair removal businesses targeting the Phoenix metro market. Available for acquisition with escrow-protected transfer and clean title.',
  url: 'https://waxphx.salon',
  locale: 'en_US',
  email: 'sales@desertrich.com',
  location: 'Phoenix, Arizona',
  year: 2026,
  disclaimerDate: 'June 22, 2026',
  googleSiteVerification: 'BB-DMRwNpMU8fUFd2G-_iljqz9OYVyYuTYYxBT8xaXw',
  askingPrice: 50000,
  priceValidUntil: '2027-12-31',
} as const;

export const HERO_IMAGE = '/hero-image.jpg';

export const OG_IMAGE = `${SITE.url}/og-image.jpg`;

export function acquisitionMailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  params.set('subject', subject ?? 'Domain Acquisition Inquiry: waxphx.salon');
  if (body) params.set('body', body);
  return `mailto:${SITE.email}?${params.toString()}`;
}
