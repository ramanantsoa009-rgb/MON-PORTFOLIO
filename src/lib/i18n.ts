export type Locale = 'fr' | 'en';

export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALES: Locale[] = ['fr', 'en'];

export type Localized<T> = Record<Locale, T>;
