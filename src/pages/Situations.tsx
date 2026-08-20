import { ACTION_BY_ID } from '../data/actions';
import { HELPLINES } from '../data/helplines';
import { SITUATIONS, SITUATION_BY_ID } from '../data/situations';
import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { BackLink, BookmarkButton, Bullets, Card, Disclaimer, NumberedSteps, PageTitle, Pills, Section } from '../components/ui';
import { ReadAloud } from '../components/ReadAloud';
import { situationSpeech } from '../speech';
import { NotFound } from './Rights';

export function SituationsList({ lang }: { lang: Lang }) {
  return (
    <>
      <PageTitle
        icon="🧭"
        title={lang === 'en' ? 'What do I do if…' : 'अगर ऐसा हो तो क्या करूँ…'}
        sub={
          lang === 'en'
            ? 'Fifteen situations people actually find themselves in'
            : 'पंद्रह ऐसी परिस्थितियाँ जिनमें लोग सचमुच फँसते हैं'
        }
      />
      <div className="cards">
        {SITUATIONS.map((s) => (
          <Card key={s.id} to={`/situations/${s.id}`} icon={s.icon} title={t(s.title, lang)} subtitle={t(s.summary, lang)} />
        ))}
      </div>
      <Disclaimer lang={lang} />
    </>
  );
}

export function SituationDetail({
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
  const s = SITUATION_BY_ID[id];
  if (!s) return <NotFound lang={lang} />;

  const lines = (s.helplines ?? []).map((h) => HELPLINES.find((x) => x.id === h)).filter(Boolean);

  return (
    <>
      <BackLink to="/situations" lang={lang} />
      <PageTitle icon={s.icon} title={t(s.title, lang)} />
      <p className="lede">{t(s.summary, lang)}</p>
      <Pills items={s.tags} lang={lang} />
      <ReadAloud text={situationSpeech(s, lang)} lang={lang} />
      <BookmarkButton saved={saved} onToggle={onToggleSave} lang={lang} />

      {lines.length > 0 && (
        <div className="call-row">
          {lines.map((h) => (
            <a className="call-chip" key={h!.id} href={`tel:${h!.number}`}>
              <span className="call-num">{h!.number}</span>
              <span className="call-name">{t(h!.name, lang)}</span>
            </a>
          ))}
        </div>
      )}

      <Section title={t(UI.youCan, lang)} icon="✅">
        <Bullets items={s.youCan} lang={lang} marker="✓" />
      </Section>

      <Section title={t(UI.theyCannot, lang)} icon="🚫">
        <div className="cannot">
          <Bullets items={s.theyCannot} lang={lang} marker="✕" />
        </div>
      </Section>

      <Section title={t(UI.whatToDo, lang)} icon="👣">
        <NumberedSteps items={s.steps} lang={lang} />
      </Section>

      <Section title={t(UI.lawsInvolved, lang)} icon="📚">
        <Bullets items={s.laws} lang={lang} marker="§" />
      </Section>

      {s.actions && s.actions.length > 0 && (
        <Section title={t(UI.relatedActions, lang)} icon="📂">
          <div className="cards">
            {s.actions
              .map((aid) => ACTION_BY_ID[aid])
              .filter(Boolean)
              .map((a) => (
                <Card key={a.id} to={`/actions/${a.id}`} icon={a.icon} title={t(a.title, lang)} subtitle={t(a.summary, lang)} />
              ))}
          </div>
        </Section>
      )}

      <Disclaimer lang={lang} />
    </>
  );
}
