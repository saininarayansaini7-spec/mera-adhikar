/** A string that exists in both supported languages. */
export type L = { en: string; hi: string };

export type Lang = 'en' | 'hi';

/** Pick the right language out of a localized string. */
export function t(value: L | string | undefined, lang: Lang): string {
  if (value === undefined) return '';
  return typeof value === 'string' ? value : value[lang];
}

export type Article = {
  /** e.g. "Article 21" */
  number: L;
  title: L;
  /** The gist, in everyday words. */
  plain: L;
};

export type Right = {
  id: string;
  icon: string;
  articles: L;
  title: L;
  summary: L;
  /** What this right actually means, in plain language. */
  meaning: L[];
  detail: Article[];
  /** Everyday situations where this right is in play. */
  examples: L[];
  /** Concrete steps when the right is violated. */
  ifViolated: L[];
  /** Limits people are usually surprised by. */
  limits: L[];
  /** ids of related action guides */
  actions?: string[];
  landmark?: { case: L; held: L }[];
};

export type Situation = {
  id: string;
  icon: string;
  title: L;
  summary: L;
  tags: L[];
  /** "You have the right to..." bullets */
  youCan: L[];
  /** "They cannot..." bullets */
  theyCannot: L[];
  steps: L[];
  laws: L[];
  helplines?: string[];
  actions?: string[];
};

export type ActionGuide = {
  id: string;
  icon: string;
  title: L;
  summary: L;
  whoCanUse: L;
  cost: L;
  timeLimit: L;
  steps: { title: L; detail: L }[];
  documents: L[];
  online?: { label: L; url: string }[];
  ifRefused?: L[];
  /** A copy-paste starting draft. */
  template?: { title: L; body: L };
};

export type Helpline = {
  id: string;
  number: string;
  name: L;
  who: L;
  hours: L;
  category: 'emergency' | 'women' | 'child' | 'legal' | 'cyber' | 'health' | 'other';
};

export type Portal = {
  name: L;
  url: string;
  what: L;
};

export type Duty = { n: number; text: L; everyday: L };

export type Principle = { article: L; title: L; plain: L };

export type QuizQuestion = {
  q: L;
  options: L[];
  answer: number;
  why: L;
};
