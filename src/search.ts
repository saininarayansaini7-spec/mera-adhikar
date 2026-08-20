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

/**
 * Plenty of people type Hindi in Latin letters — "dahej", "rishwat", "pulis".
 * Without this the search returns nothing for them, which looks like the app
 * has no answer when it has a whole page on the subject. Each key expands into
 * the words that actually appear in the content.
 */
const HINGLISH: Record<string, string> = {
  // people and places
  pulis: 'police पुलिस',
  police: 'police पुलिस',
  thana: 'police station थाना',
  thane: 'police station थाना',
  vakil: 'lawyer वकील',
  adalat: 'court अदालत',
  kachehri: 'court अदालत',
  aspatal: 'hospital अस्पताल',
  hospital: 'hospital अस्पताल',
  school: 'school स्कूल education शिक्षा',
  skool: 'school स्कूल education शिक्षा',

  // the trouble
  giraftar: 'arrest गिरफ़्तार',
  giraftari: 'arrest गिरफ़्तारी',
  girftar: 'arrest गिरफ़्तार',
  hirasat: 'custody हिरासत arrest',
  dahej: 'dowry दहेज',
  rishwat: 'bribe रिश्वत corruption',
  ghus: 'bribe रिश्वत',
  ghoos: 'bribe रिश्वत',
  bhrashtachar: 'corruption भ्रष्टाचार bribe',
  marpit: 'violence assault हिंसा',
  hinsa: 'violence हिंसा',
  gharelu: 'domestic घरेलू violence',
  chhedchhad: 'harassment उत्पीड़न',
  chedchad: 'harassment उत्पीड़न',
  utpidan: 'harassment उत्पीड़न',
  dhokha: 'fraud धोखाधड़ी cheat',
  thagi: 'fraud धोखाधड़ी',
  thug: 'fraud धोखाधड़ी',
  chori: 'theft FIR चोरी',
  jhagda: 'dispute complaint शिकायत',
  chhuachhut: 'untouchability छुआछूत caste',
  jatiwad: 'caste जाति discrimination',
  jati: 'caste जाति',
  jaati: 'caste जाति',
  bhedbhav: 'discrimination भेदभाव equality',
  bandhua: 'bonded बंधुआ labour',
  begar: 'forced labour बेगार',
  balshram: 'child labour बाल श्रम',

  // what you want
  adhikar: 'right अधिकार',
  haq: 'right अधिकार',
  kanoon: 'law कानून',
  kanun: 'law कानून',
  shikayat: 'complaint शिकायत',
  suchna: 'information सूचना RTI',
  jankari: 'information सूचना RTI',
  madad: 'help मदद helpline',
  muft: 'free मुफ़्त नि:शुल्क',
  mufat: 'free मुफ़्त',
  nyay: 'justice न्याय court',
  insaf: 'justice न्याय court',
  zamanat: 'bail ज़मानत arrest',
  jamanat: 'bail ज़मानत arrest',
  muavza: 'compensation मुआवज़ा',
  pension: 'pension पेंशन senior',

  // work and money
  mazdoori: 'wages मज़दूरी worker',
  majduri: 'wages मज़दूरी worker',
  vetan: 'wages salary वेतन worker',
  salary: 'wages मज़दूरी worker',
  naukri: 'job नौकरी employment work',
  kaam: 'work काम worker wages',
  malik: 'employer नियोक्ता work',
  paisa: 'money पैसा fraud',
  karz: 'loan debt कर्ज़ bonded',
  bank: 'bank cyber fraud धोखाधड़ी',

  // people the app has guides for
  mahila: 'women महिला',
  aurat: 'women महिला',
  ladki: 'women girl महिला child',
  bachcha: 'child बच्चा children',
  baccha: 'child बच्चा children',
  bachche: 'child बच्चा children',
  bacche: 'child बच्चा children',
  buzurg: 'senior citizen वरिष्ठ बुज़ुर्ग',
  budhe: 'senior citizen वरिष्ठ',
  mata: 'parents माता-पिता senior maintenance',
  pita: 'parents माता-पिता senior maintenance',
  divyang: 'disability दिव्यांग',
  viklang: 'disability दिव्यांग',
  chhatra: 'student छात्र education',
  kisan: 'farmer worker wages',
  mazdoor: 'worker मज़दूर wages labour',

  // things and documents
  shiksha: 'education शिक्षा school',
  padhai: 'education शिक्षा school',
  gadi: 'vehicle traffic यातायात',
  gaadi: 'vehicle traffic यातायात',
  bike: 'vehicle traffic यातायात',
  chalan: 'challan traffic यातायात fine',
  challan: 'challan traffic यातायात fine',
  license: 'licence traffic यातायात',
  samvidhan: 'constitution संविधान',
  anuchhed: 'article अनुच्छेद',
  dharm: 'religion धर्म',
  mandir: 'temple religion धर्म caste',
  masjid: 'religion धर्म',
  samanta: 'equality समानता',
  swatantrata: 'freedom स्वतंत्रता',
  azadi: 'freedom स्वतंत्रता',
  kartavya: 'duty कर्तव्य',
  upbhokta: 'consumer उपभोक्ता',
  saman: 'goods consumer उपभोक्ता',
  online: 'cyber online साइबर fraud',
  mobile: 'cyber online साइबर fraud',
  otp: 'cyber fraud साइबर 1930',
};

/** Widen a typed word into the words the content actually uses. */
function expand(word: string): string[] {
  const extra = HINGLISH[word];
  return extra ? [word, ...extra.toLowerCase().split(/\s+/)] : [word];
}

/** Word-wise scoring: a title match beats a body match, and all words must appear. */
export function search(query: string, lang: Lang): Hit[] {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const scored = INDEX.map((hit) => {
    const title = t(hit.title, lang).toLowerCase();
    const subtitle = t(hit.subtitle, lang).toLowerCase();
    let score = 0;

    for (const word of words) {
      // A word counts as found if the word itself, or any of the terms it
      // expands into, appears. The page named after what you asked for should
      // beat one that merely mentions it, so the title outranks everything.
      const best = expand(word).reduce((acc, form) => {
        if (title.includes(form)) return Math.max(acc, 12);
        if (subtitle.includes(form)) return Math.max(acc, 7);
        if (hit.haystack.includes(form)) return Math.max(acc, 3);
        return acc;
      }, 0);

      if (best === 0) return { hit, score: -1 };
      score += best;
    }
    return { hit, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.hit)
    .slice(0, 40);
}
