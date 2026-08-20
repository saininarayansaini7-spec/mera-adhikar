import { ACTION_BY_ID } from '../data/actions';
import { RIGHT_BY_ID } from '../data/rights';
import { SITUATION_BY_ID } from '../data/situations';
import { search } from '../search';
import type { Hit } from '../search';
import { go } from '../router';
import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { Card, PageTitle } from '../components/ui';

/** Bookmarks are stored as "right:equality", "situation:arrest", "action:fir". */
function resolve(key: string, lang: Lang) {
  const [kind, id] = key.split(':');

  if (kind === 'right') {
    const r = RIGHT_BY_ID[id];
    return r && { to: `/rights/${id}`, icon: r.icon, title: t(r.title, lang), subtitle: t(r.summary, lang) };
  }
  if (kind === 'situation') {
    const s = SITUATION_BY_ID[id];
    return s && { to: `/situations/${id}`, icon: s.icon, title: t(s.title, lang), subtitle: t(s.summary, lang) };
  }
  if (kind === 'action') {
    const a = ACTION_BY_ID[id];
    return a && { to: `/actions/${id}`, icon: a.icon, title: t(a.title, lang), subtitle: t(a.summary, lang) };
  }
  return undefined;
}

export function Saved({ ids, lang }: { ids: string[]; lang: Lang }) {
  const items = ids.map((k) => resolve(k, lang)).filter(Boolean);

  return (
    <>
      <PageTitle
        icon="★"
        title={t(UI.saved, lang)}
        sub={lang === 'en' ? 'Kept on this phone, available without internet' : 'इसी फ़ोन में सहेजा, बिना इंटरनेट उपलब्ध'}
      />
      {items.length === 0 ? (
        <div className="empty">
          <p>{t(UI.noSaved, lang)}</p>
          <button className="primary-btn" onClick={() => go('/situations')}>
            {lang === 'en' ? 'Browse situations' : 'परिस्थितियाँ देखें'}
          </button>
        </div>
      ) : (
        <div className="cards">
          {items.map((i, n) => (
            <Card key={n} to={i!.to} icon={i!.icon} title={i!.title} subtitle={i!.subtitle} />
          ))}
        </div>
      )}
    </>
  );
}

export function SearchResults({ query, lang }: { query: string; lang: Lang }) {
  const hits: Hit[] = search(query, lang);

  const kindLabel: Record<Hit['kind'], { en: string; hi: string }> = {
    right: { en: 'Fundamental right', hi: 'मौलिक अधिकार' },
    situation: { en: 'Situation', hi: 'परिस्थिति' },
    action: { en: 'How to file', hi: 'कैसे दायर करें' },
    helpline: { en: 'Helpline', hi: 'हेल्पलाइन' },
    duty: { en: 'Fundamental duty', hi: 'मौलिक कर्तव्य' },
    principle: { en: 'Directive principle', hi: 'नीति निदेशक तत्व' },
  };

  if (hits.length === 0) {
    return (
      <div className="empty">
        <p>{t(UI.noResults, lang)}</p>
      </div>
    );
  }

  return (
    <div className="cards search-results">
      {hits.map((h) => (
        <Card
          key={`${h.kind}-${h.id}`}
          to={h.route}
          icon={h.icon}
          title={t(h.title, lang)}
          subtitle={t(h.subtitle, lang)}
          meta={t(kindLabel[h.kind], lang)}
        />
      ))}
    </div>
  );
}
