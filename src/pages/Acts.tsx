import { useState } from 'react';
import { ACTION_BY_ID } from '../data/actions';
import { ACTS, ACT_BY_ID } from '../data/acts';
import { SITUATION_BY_ID } from '../data/situations';
import type { ActCategory, L, Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { BackLink, BookmarkButton, Bullets, Card, Disclaimer, PageTitle, Section } from '../components/ui';
import { ReadAloud } from '../components/ReadAloud';
import { actSpeech } from '../speech';
import { NotFound } from './Rights';

const CATEGORIES: { key: ActCategory; label: L; icon: string }[] = [
  { key: 'criminal', label: { en: 'Crime and police', hi: 'अपराध और पुलिस' }, icon: '⚖️' },
  { key: 'women', label: { en: 'Women', hi: 'महिलाएँ' }, icon: '👩' },
  { key: 'children', label: { en: 'Children', hi: 'बच्चे' }, icon: '🧒' },
  { key: 'equality', label: { en: 'Equality and dignity', hi: 'समानता और गरिमा' }, icon: '✊' },
  { key: 'work', label: { en: 'Work and wages', hi: 'काम और मज़दूरी' }, icon: '🔧' },
  { key: 'money', label: { en: 'Money and consumers', hi: 'पैसा और उपभोक्ता' }, icon: '🛒' },
  { key: 'transparency', label: { en: 'Transparency and justice', hi: 'पारदर्शिता और न्याय' }, icon: '🔍' },
  { key: 'family', label: { en: 'Family and property', hi: 'परिवार और संपत्ति' }, icon: '🏡' },
  { key: 'welfare', label: { en: 'Food and welfare', hi: 'भोजन और कल्याण' }, icon: '🌾' },
];

export function ActsList({ lang }: { lang: Lang }) {
  const [filter, setFilter] = useState<ActCategory | 'all'>('all');
  const shown = filter === 'all' ? ACTS : ACTS.filter((a) => a.category === filter);

  return (
    <>
      <PageTitle
        icon="📕"
        title={t(UI.laws, lang)}
        sub={
          lang === 'en'
            ? `${ACTS.length} Acts of Parliament, in plain language`
            : `${ACTS.length} संसद के अधिनियम, सरल भाषा में`
        }
      />
      <p className="lede">
        {lang === 'en'
          ? 'A right in the Constitution is a promise. These are the laws that make it enforceable — what each one says, who it protects, and how to use it.'
          : 'संविधान का अधिकार एक वादा है। ये वे कानून हैं जो उसे लागू कराते हैं — हर कानून क्या कहता है, किसकी रक्षा करता है, और उसका उपयोग कैसे करें।'}
      </p>

      <div className="chips">
        <button className={'chip' + (filter === 'all' ? ' on' : '')} onClick={() => setFilter('all')}>
          {lang === 'en' ? 'All' : 'सभी'} · {ACTS.length}
        </button>
        {CATEGORIES.map((c) => {
          const n = ACTS.filter((a) => a.category === c.key).length;
          if (n === 0) return null;
          return (
            <button key={c.key} className={'chip' + (filter === c.key ? ' on' : '')} onClick={() => setFilter(c.key)}>
              <span aria-hidden="true">{c.icon} </span>
              {t(c.label, lang)} · {n}
            </button>
          );
        })}
      </div>

      <div className="cards">
        {shown.map((a) => (
          <Card
            key={a.id}
            to={`/laws/${a.id}`}
            icon={a.icon}
            title={t(a.short, lang)}
            subtitle={t(a.what, lang)}
            meta={`${t(a.name, lang)}, ${a.year}`}
          />
        ))}
      </div>

      <Disclaimer lang={lang} />
    </>
  );
}

export function ActDetail({
  id,
  lang,
  saved,
  onToggleSave,
}: {
  id: string;
  lang: Lang;
  saved: boolean;
  onToggleSave: () => void;
}) {
  const act = ACT_BY_ID[id];
  if (!act) return <NotFound lang={lang} />;

  const category = CATEGORIES.find((c) => c.key === act.category);
  const situations = (act.situations ?? []).map((s) => SITUATION_BY_ID[s]).filter(Boolean);
  const actions = (act.actions ?? []).map((a) => ACTION_BY_ID[a]).filter(Boolean);

  return (
    <>
      <BackLink to="/laws" lang={lang} />
      <PageTitle icon={act.icon} title={t(act.short, lang)} sub={`${t(act.name, lang)}, ${act.year}`} />
      <p className="lede">{t(act.what, lang)}</p>
      <ReadAloud text={actSpeech(act, lang)} lang={lang} />
      <BookmarkButton saved={saved} onToggle={onToggleSave} lang={lang} />

      <div className="facts">
        <div className="fact">
          <span className="fact-label">{t(UI.whoItProtects, lang)}</span>
          <span>{t(act.whoItProtects, lang)}</span>
        </div>
        {category && (
          <div className="fact">
            <span className="fact-label">{lang === 'en' ? 'Area' : 'क्षेत्र'}</span>
            <span>
              {category.icon} {t(category.label, lang)}
            </span>
          </div>
        )}
        {act.replaces && (
          <div className="fact">
            <span className="fact-label">{t(UI.replaces, lang)}</span>
            <span>{t(act.replaces, lang)}</span>
          </div>
        )}
      </div>

      <Section title={t(UI.whatItSays, lang)} icon="📜">
        <Bullets items={act.keyPoints} lang={lang} marker="§" />
      </Section>

      {act.punishment && (
        <Section title={t(UI.penalty, lang)} icon="⚠️">
          <div className="penalty">{t(act.punishment, lang)}</div>
        </Section>
      )}

      <Section title={t(UI.howToUse, lang)} icon="🛠️">
        <Bullets items={act.useIt} lang={lang} marker="→" />
      </Section>

      {situations.length > 0 && (
        <Section title={t(UI.whenItApplies, lang)} icon="🧭">
          <div className="cards">
            {situations.map((s) => (
              <Card key={s.id} to={`/situations/${s.id}`} icon={s.icon} title={t(s.title, lang)} subtitle={t(s.summary, lang)} />
            ))}
          </div>
        </Section>
      )}

      {actions.length > 0 && (
        <Section title={t(UI.relatedActions, lang)} icon="📂">
          <div className="cards">
            {actions.map((a) => (
              <Card key={a.id} to={`/actions/${a.id}`} icon={a.icon} title={t(a.title, lang)} subtitle={t(a.summary, lang)} />
            ))}
          </div>
        </Section>
      )}

      <Disclaimer lang={lang} />
    </>
  );
}
