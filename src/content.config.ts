import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const site = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/site' }),
  schema: z.object({
    hero: z.object({
      badge: z.string(),
      headline: z.string(),
      headlineAccent: z.string(),
      subheadline: z.string(),
      domainHighlight: z.string(),
    }),
    trustBar: z.array(z.string()),
    why: z.object({
      label: z.string(),
      title: z.string(),
      paragraphs: z.array(z.string()),
      cards: z.array(
        z.object({
          label: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
    market: z.object({
      label: z.string(),
      title: z.string(),
      stats: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
          highlight: z.string(),
        }),
      ),
      footnote: z.string(),
      footnoteAccent: z.string(),
    }),
    useCases: z.object({
      label: z.string(),
      title: z.string(),
      subtitle: z.string(),
      items: z.array(
        z.object({
          tag: z.string(),
          title: z.string(),
          description: z.string(),
          example: z.string(),
          gradient: z.string(),
        }),
      ),
    }),
    investment: z.object({
      label: z.string(),
      title: z.string(),
      pillars: z.array(
        z.object({
          number: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
    closing: z.object({
      title: z.string(),
      description: z.string(),
      cta: z.string(),
      footnote: z.string(),
    }),
    domainPreview: z.object({
      domain: z.string(),
      description: z.string(),
      valuationLabel: z.string(),
      valuationRange: z.string(),
      tier: z.string(),
    }),
  }),
});

export const collections = { site };
