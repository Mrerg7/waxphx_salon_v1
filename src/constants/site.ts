export const SITE = {
  name: 'waxphx.salon',
  title: 'waxphx.salon • Premium Domain For Sale — Professional Waxing & Hair Removal in Phoenix',
  description:
    'waxphx.salon — the definitive premium domain for professional waxing, body waxing, facial waxing, Brazilian waxing, and hair removal services in Phoenix. Available for acquisition.',
  url: 'https://waxphx.salon',
  locale: 'en_US',
  email: 'sales@desertrich.com',
  location: 'Phoenix, Arizona',
  year: 2026,
  disclaimerDate: 'June 22, 2026',
  googleSiteVerification: '',
} as const;

export const HERO_IMAGE =
  'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/226784c3-406c-40fa-bf5e-b7702ce52500/public';

export const OG_IMAGE = HERO_IMAGE;

export function acquisitionMailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  params.set('subject', subject ?? 'Domain Acquisition Inquiry: waxphx.salon');
  if (body) params.set('body', body);
  return `mailto:${SITE.email}?${params.toString()}`;
}
