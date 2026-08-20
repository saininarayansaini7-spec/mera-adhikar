import { ACTIONS, ACTION_BY_ID } from '../data/actions';
import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { BackLink, BookmarkButton, Bullets, Card, CopyButton, Disclaimer, PageTitle, Section } from '../components/ui';
import { NotFound } from './Rights';

export function ActionsList({ lang }: { lang: Lang }) {
  return (
    <>
      <PageTitle
        icon="✍️"
        title={t(UI.act, lang)}
        sub={
          lang === 'en'
            ? 'How to actually file it — steps, costs, deadlines and a draft you can copy'
            : 'असल में कैसे दायर करें — कदम, खर्च, समयसीमा और कॉपी करने लायक मसौदा'
        }
      />
      <div className="cards">
        {ACTIONS.map((a) => (
          <Card key={a.id} to={`/actions/${a.id}`} icon={a.icon} title={t(a.title, lang)} subtitle={t(a.summary, lang)} />
        ))}
      </div>
      <Disclaimer lang={lang} />
    </>
  );
}

export function ActionDetail({
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
  const a = ACTION_BY_ID[id];
  if (!a) return <NotFound lang={lang} />;

  return (
    <>
      <BackLink to="/actions" lang={lang} />
      <PageTitle icon={a.icon} title={t(a.title, lang)} />
      <p className="lede">{t(a.summary, lang)}</p>
      <BookmarkButton saved={saved} onToggle={onToggleSave} lang={lang} />

      <div className="facts">
        <div className="fact">
          <span className="fact-label">{t(UI.whoCanUse, lang)}</span>
          <span>{t(a.whoCanUse, lang)}</span>
        </div>
        <div className="fact">
          <span className="fact-label">{t(UI.cost, lang)}</span>
          <span>{t(a.cost, lang)}</span>
        </div>
        <div className="fact">
          <span className="fact-label">{t(UI.timeLimit, lang)}</span>
          <span>{t(a.timeLimit, lang)}</span>
        </div>
      </div>

      <Section title={t(UI.whatToDo, lang)} icon="👣">
        <ol className="big-steps">
          {a.steps.map((s, i) => (
            <li key={i}>
              <div className="big-step-head">
                <span className="step-n">{i + 1}</span>
                <h3>{t(s.title, lang)}</h3>
              </div>
              <p>{t(s.detail, lang)}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={t(UI.documents, lang)} icon="📎">
        <Bullets items={a.documents} lang={lang} marker="•" />
      </Section>

      {a.online && a.online.length > 0 && (
        <Section title={t(UI.onlineAt, lang)} icon="🌐">
          <div className="links">
            {a.online.map((o, i) => (
              <a className="link-row" key={i} href={o.url} target="_blank" rel="noreferrer noopener">
                <span>{t(o.label, lang)}</span>
                <span className="link-url">{o.url.replace('https://', '')}</span>
              </a>
            ))}
          </div>
        </Section>
      )}

      {a.ifRefused && a.ifRefused.length > 0 && (
        <Section title={t(UI.ifRefused, lang)} icon="🔁">
          <Bullets items={a.ifRefused} lang={lang} marker="→" />
        </Section>
      )}

      {a.template && (
        <Section title={t(UI.template, lang)} icon="📝">
          <div className="template">
            <div className="template-head">
              <h3>{t(a.template.title, lang)}</h3>
              <CopyButton text={t(a.template.body, lang)} lang={lang} />
            </div>
            <pre>{t(a.template.body, lang)}</pre>
          </div>
        </Section>
      )}

      <Disclaimer lang={lang} />
    </>
  );
}
