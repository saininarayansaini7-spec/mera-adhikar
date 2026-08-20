import { ACTIONS } from './data/actions';
import { HELPLINES } from './data/helplines';
import { DUTIES, PRINCIPLES } from './data/learn';
import { RIGHTS } from './data/rights';
import { SITUATIONS } from './data/situations';
import type { L, Lang } from './types';
import { t } from './types';

export type Hit = {
  id: string;
  route: string;
  icon: string;
  title: L;
  subtitle: L;
  kind: 'right' | 'situation' | 'action' | 'helpline' | 'duty' | 'principle';
  /** Everything searchable about this entry, both languages, lowercased. */
  haystack: string;
};

function join(...parts: (L | string | undefined)[]): string {
  return parts
    .map((p) => (p === undefined ? '' : typeof p === 'string' ? p : `${p.en} ${p.hi}`))
    .join(' ')
    .toLowerCase();
}

function flat(items: L[] | undefined): string {
  return (items ?? []).map((i) => `${i.en} ${i.hi}`).join(' ');
}

export const INDEX: Hit[] = [
  ...RIGHTS.map<Hit>((r) => ({
    id: r.id,
    route: `/rights/${r.id}`,
    icon: r.icon,
    title: r.title,
    subtitle: r.articles,
    kind: 'right',
    haystack: join(
      r.title,
      r.articles,
      r.summary,
      flat(r.meaning),
      flat(r.examples),
      flat(r.limits),
      flat(r.ifViolated),
      r.detail.map((d) => `${d.number.en} ${d.number.hi} ${d.title.en} ${d.title.hi} ${d.plain.en} ${d.plain.hi}`).join(' '),
    ),
  })),

  ...SITUATIONS.map<Hit>((s) => ({
    id: s.id,
    route: `/situations/${s.id}`,
    icon: s.icon,
    title: s.title,
    subtitle: s.summary,
    kind: 'situation',
    haystack: join(s.title, s.summary, flat(s.tags), flat(s.youCan), flat(s.theyCannot), flat(s.steps), flat(s.laws)),
  })),

  ...ACTIONS.map<Hit>((a) => ({
    id: a.id,
    route: `/actions/${a.id}`,
    icon: a.icon,
    title: a.title,
    subtitle: a.summary,
    kind: 'action',
    haystack: join(
      a.title,
      a.summary,
      a.whoCanUse,
      a.cost,
      a.timeLimit,
      flat(a.documents),
      a.steps.map((s) => `${s.title.en} ${s.title.hi} ${s.detail.en} ${s.detail.hi}`).join(' '),
    ),
  })),

  ...HELPLINES.map<Hit>((h) => ({
    id: h.id,
    route: '/helplines',
    icon: '📞',
    title: h.name,
    subtitle: { en: h.number, hi: h.number },
    kind: 'helpline',
    haystack: join(h.name, h.who, h.number),
  })),

  ...DUTIES.map<Hit>((d) => ({
    id: `duty-${d.n}`,
    route: '/learn',
    icon: '🇮🇳',
    title: d.text,
    subtitle: { en: `Fundamental Duty ${d.n}`, hi: `मौलिक कर्तव्य ${d.n}` },
    kind: 'duty',
    haystack: join(d.text, d.everyday),
  })),

  ...PRINCIPLES.map<Hit>((p) => ({
    id: `dpsp-${p.article.en}`,
    route: '/learn',
    icon: '📖',
    title: p.title,
    subtitle: p.article,
    kind: 'principle',
    haystack: join(p.article, p.title, p.plain),
  })),
];

/** Word-wise scoring: a title match beats a body match, and all words must appear. */
export function search(query: string, lang: Lang): Hit[] {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const scored = INDEX.map((hit) => {
    const title = `${t(hit.title, lang)} ${t(hit.subtitle, lang)}`.toLowerCase();
    let score = 0;

    for (const w of words) {
      if (title.includes(w)) score += 10;
      else if (hit.haystack.includes(w)) score += 3;
      else return { hit, score: -1 };
    }
    return { hit, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.hit)
    .slice(0, 40);
}
