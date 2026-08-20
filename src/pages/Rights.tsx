import { ACTION_BY_ID } from '../data/actions';
import { RIGHTS, RIGHT_BY_ID } from '../data/rights';
import { go } from '../router';
import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { BackLink, BookmarkButton, Bullets, Card, Disclaimer, NumberedSteps, PageTitle, Section } from '../components/ui';
import { ReadAloud } from '../components/ReadAloud';
import { rightSpeech } from '../speech';

export function RightsList({ lang }: { lang: Lang }) {
  return (
    <>
      <PageTitle icon="⚖️" title={t(UI.fundamentalRights, lang)} sub={t(UI.fundamentalRightsSub, lang)} />
      <p className="lede">
        {lang === 'en'
          ? 'These six rights are guaranteed by Part III of the Constitution. They bind the government — and if one is broken, a court must hear you.'
          : 'ये छह अधिकार संविधान के भाग III से प्राप्त हैं। ये सरकार पर बाध्यकारी हैं — और इनमें से कोई टूटे तो अदालत को आपकी सुननी ही होगी।'}
      </p>
      <div className="cards">
        {RIGHTS.map((r) => (
          <Card
            key={r.id}
            to={`/rights/${r.id}`}
            icon={r.icon}
            title={t(r.title, lang)}
            subtitle={t(r.summary, lang)}
            meta={t(r.articles, lang)}
          />
        ))}
      </div>
      <Disclaimer lang={lang} />
    </>
  );
}

export function RightDetail({
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
  const right = RIGHT_BY_ID[id];
  if (!right) return <NotFound lang={lang} />;

  return (
    <>
      <BackLink to="/rights" lang={lang} />
      <PageTitle icon={right.icon} title={t(right.title, lang)} sub={t(right.articles, lang)} />
      <p className="lede">{t(right.summary, lang)}</p>
      <ReadAloud text={rightSpeech(right, lang)} lang={lang} />
      <BookmarkButton saved={saved} onToggle={onToggleSave} lang={lang} />

      <Section title={t(UI.whatItMeans, lang)} icon="💡">
        <Bullets items={right.meaning} lang={lang} marker="✓" />
      </Section>

      <Section title={t(UI.articlesInside, lang)} icon="📜">
        <div className="articles">
          {right.detail.map((a, i) => (
            <article className="article-card" key={i}>
              <h3>
                <span className="art-num">{t(a.number, lang)}</span>
                {t(a.title, lang)}
              </h3>
              <p>{t(a.plain, lang)}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={t(UI.realLife, lang)} icon="👀">
        <Bullets items={right.examples} lang={lang} marker="→" />
      </Section>

      <Section title={t(UI.ifViolated, lang)} icon="🛠️">
        <NumberedSteps items={right.ifViolated} lang={lang} />
      </Section>

      <Section title={t(UI.limits, lang)} icon="⚠️">
        <Bullets items={right.limits} lang={lang} marker="•" />
      </Section>

      {right.landmark && right.landmark.length > 0 && (
        <Section title={t(UI.landmark, lang)} icon="🏛️">
          <div className="cases">
            {right.landmark.map((c, i) => (
              <div className="case" key={i}>
                <h4>{t(c.case, lang)}</h4>
                <p>{t(c.held, lang)}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {right.actions && right.actions.length > 0 && (
        <Section title={t(UI.relatedActions, lang)} icon="📂">
          <div className="cards">
            {right.actions
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

export function NotFound({ lang }: { lang: Lang }) {
  return (
    <div className="empty">
      <p>{lang === 'en' ? 'This page does not exist.' : 'यह पेज मौजूद नहीं है।'}</p>
      <button className="primary-btn" onClick={() => go('/')}>
        {t(UI.home, lang)}
      </button>
    </div>
  );
}
