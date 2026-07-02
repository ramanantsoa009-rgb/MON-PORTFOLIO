import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Moteurs de recherche et bots de prévisualisation légitimes — jamais bloqués,
// pour préserver le référencement et le partage de liens.
const ALLOWED_BOTS =
  /googlebot|bingbot|duckduckbot|applebot|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp/;

// Signatures d'outils d'automatisation/scraping génériques (scripts, CLI, libs HTTP).
const BLOCKED_SIGNATURES =
  /curl\/|wget\/|python-requests|python-urllib|scrapy|go-http-client|libwww-perl|httpclient|okhttp|postmanruntime|aiohttp|node-fetch|axios\/|phantomjs/;

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() ?? '';

  if (!userAgent || (!ALLOWED_BOTS.test(userAgent) && BLOCKED_SIGNATURES.test(userAgent))) {
    return new NextResponse('Accès refusé', { status: 403 });
  }

  return NextResponse.next();
}

// Exclut les assets statiques/images/robots/sitemap : évite d'invoquer
// la fonction serverless sur ces requêtes (coût compute Vercel).
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
