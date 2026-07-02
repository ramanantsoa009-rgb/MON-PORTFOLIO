import type { MetadataRoute } from 'next';

// Bots d'entraînement IA et scrapers de contenu à tenir à l'écart —
// on laisse volontairement Googlebot/Bingbot/etc. non listés pour ne pas nuire au SEO.
const AI_AND_CONTENT_SCRAPERS = [
  'GPTBot',
  'ChatGPT-User',
  'CCBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',
  'Applebot-Extended',
  'Bytespider',
  'PerplexityBot',
  'Diffbot',
  'Omgilibot',
  'Omgili',
  'FacebookBot',
  'Amazonbot',
  'SemrushBot',
  'AhrefsBot',
  'MJ12bot',
  'DotBot',
  'BLEXBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: AI_AND_CONTENT_SCRAPERS,
        disallow: '/',
      },
    ],
  };
}
