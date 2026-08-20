import { useCallback, useEffect, useState } from 'react';
import type { L, Lang } from './types';

/** Every label the interface itself needs, in both languages. */
export const UI = {
  appName: { en: 'Mera Adhikar', hi: 'मेरा अधिकार' },
  tagline: {
    en: 'Your rights under the Constitution of India — and what to do about them',
    hi: 'भारत के संविधान में आपके अधिकार — और उनके लिए क्या करें',
  },
  home: { en: 'Home', hi: 'होम' },
  rights: { en: 'Rights', hi: 'अधिकार' },
  situations: { en: 'Situations', hi: 'परिस्थिति' },
  act: { en: 'Take Action', hi: 'कार्रवाई' },
  help: { en: 'Helplines', hi: 'हेल्पलाइन' },
  learn: { en: 'Learn', hi: 'जानें' },
  saved: { en: 'Saved', hi: 'सहेजे' },
  quiz: { en: 'Quiz', hi: 'प्रश्नोत्तरी' },
  search: { en: 'Search', hi: 'खोजें' },
  searchPlaceholder: {
    en: 'Search rights, situations, helplines…',
    hi: 'अधिकार, परिस्थिति, हेल्पलाइन खोजें…',
  },
  noResults: { en: 'Nothing found. Try another word.', hi: 'कुछ नहीं मिला। दूसरा शब्द आज़माएँ।' },
  back: { en: 'Back', hi: 'वापस' },
  emergency: { en: 'Emergency', hi: 'आपातकाल' },
  callNow: { en: 'Call', hi: 'कॉल करें' },
  fundamentalRights: { en: 'Fundamental Rights', hi: 'मौलिक अधिकार' },
  fundamentalRightsSub: {
    en: 'Part III · Articles 12–35 · Enforceable in court',
    hi: 'भाग III · अनुच्छेद 12–35 · अदालत में लागू करने योग्य',
  },
  fundamentalDuties: { en: 'Fundamental Duties', hi: 'मौलिक कर्तव्य' },
  dutiesSub: { en: 'Article 51A · 11 duties of every citizen', hi: 'अनुच्छेद 51A · हर नागरिक के 11 कर्तव्य' },
  dpsp: { en: 'Directive Principles', hi: 'नीति निदेशक तत्व' },
  dpspSub: { en: 'Part IV · Goals the government must aim for', hi: 'भाग IV · सरकार के लक्ष्य' },
  basics: { en: 'Constitution Basics', hi: 'संविधान की बुनियाद' },
  preamble: { en: 'The Preamble', hi: 'प्रस्तावना' },
  whatItMeans: { en: 'What this means for you', hi: 'आपके लिए इसका अर्थ' },
  articlesInside: { en: 'Articles in this right', hi: 'इस अधिकार के अनुच्छेद' },
  realLife: { en: 'In real life', hi: 'असल ज़िंदगी में' },
  ifViolated: { en: 'If this right is violated — do this', hi: 'अधिकार का उल्लंघन हो तो — यह करें' },
  limits: { en: 'Limits of this right', hi: 'इस अधिकार की सीमाएँ' },
  landmark: { en: 'Landmark judgments', hi: 'ऐतिहासिक फैसले' },
  youCan: { en: 'You have the right to', hi: 'आपको अधिकार है' },
  theyCannot: { en: 'They cannot', hi: 'वे यह नहीं कर सकते' },
  whatToDo: { en: 'What to do, step by step', hi: 'क्या करें, कदम दर कदम' },
  lawsInvolved: { en: 'Laws that protect you', hi: 'आपकी रक्षा करने वाले कानून' },
  relatedActions: { en: 'Related action guides', hi: 'संबंधित कार्रवाई गाइड' },
  whoCanUse: { en: 'Who can use this', hi: 'कौन उपयोग कर सकता है' },
  cost: { en: 'Cost', hi: 'खर्च' },
  timeLimit: { en: 'Time limit', hi: 'समय सीमा' },
  documents: { en: 'Documents to carry', hi: 'ज़रूरी दस्तावेज़' },
  onlineAt: { en: 'Do it online', hi: 'ऑनलाइन करें' },
  ifRefused: { en: 'If they refuse', hi: 'अगर मना कर दें' },
  template: { en: 'Ready-to-use draft', hi: 'तैयार मसौदा' },
  copy: { en: 'Copy', hi: 'कॉपी' },
  copied: { en: 'Copied', hi: 'कॉपी हो गया' },
  save: { en: 'Save', hi: 'सहेजें' },
  savedLabel: { en: 'Saved', hi: 'सहेजा गया' },
  noSaved: {
    en: 'Nothing saved yet. Tap the bookmark on any page to keep it here for offline use.',
    hi: 'अभी कुछ सहेजा नहीं है। किसी भी पेज पर बुकमार्क दबाएँ ताकि वह यहाँ ऑफ़लाइन मिले।',
  },
  disclaimer: {
    en: 'This app explains the law in simple words for learning and awareness. It is not legal advice. Laws change and facts differ from case to case — for your own matter, talk to a lawyer or your free District Legal Services Authority (call 15100).',
    hi: 'यह ऐप कानून को सरल शब्दों में समझाता है, जागरूकता के लिए। यह कानूनी सलाह नहीं है। कानून बदलते हैं और हर मामला अलग होता है — अपने मामले के लिए वकील या मुफ़्त ज़िला विधिक सेवा प्राधिकरण से बात करें (15100 पर कॉल करें)।',
  },
  quickHelp: { en: 'Need help right now?', hi: 'अभी मदद चाहिए?' },
  browseBy: { en: 'Browse', hi: 'देखें' },
  startQuiz: { en: 'Start', hi: 'शुरू करें' },
  next: { en: 'Next', hi: 'आगे' },
  restart: { en: 'Try again', hi: 'फिर से' },
  score: { en: 'Your score', hi: 'आपका स्कोर' },
  correct: { en: 'Correct', hi: 'सही' },
  wrong: { en: 'Not quite', hi: 'गलत' },
  offlineReady: { en: 'Works offline', hi: 'ऑफ़लाइन चलता है' },
  allRights: { en: 'All 6 fundamental rights', hi: 'सभी 6 मौलिक अधिकार' },
  portals: { en: 'Official complaint portals', hi: 'सरकारी शिकायत पोर्टल' },
  keyFacts: { en: 'Key facts', hi: 'मुख्य तथ्य' },
} satisfies Record<string, L>;

/** Reads and writes a value in localStorage, surviving a blocked/full store. */
function usePersisted<T>(key: string, initial: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  const set = useCallback(
    (v: T) => {
      setValue(v);
      try {
        localStorage.setItem(key, JSON.stringify(v));
      } catch {
        /* private mode or full quota — the app still works, it just forgets */
      }
    },
    [key],
  );

  return [value, set];
}

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = usePersisted<Lang>('ma.lang', 'en');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return [lang, setLang];
}

export function useBookmarks() {
  const [ids, setIds] = usePersisted<string[]>('ma.saved', []);

  const toggle = (id: string) => setIds(ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]);

  return { ids, toggle, has: (id: string) => ids.includes(id) };
}
