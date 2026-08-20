import { ACTIONS } from '../data/actions';
import { HELPLINES } from '../data/helplines';
import { RIGHTS } from '../data/rights';
import { SITUATIONS } from '../data/situations';
import { go } from '../router';
import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { Card, Disclaimer, Section } from '../components/ui';

const QUICK_CALL = ['112', '181', '1098', '1930', '15100'];

export function Home({ lang }: { lang: Lang }) {
  const quick = QUICK_CALL.map((id) => HELPLINES.find((h) => h.id === id)!).filter(Boolean);

  return (
    <>
      <div className="hero">
        <div className="hero-flag" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <h1>{t(UI.appName, lang)}</h1>
        <p>{t(UI.tagline, lang)}</p>
      </div>

      <Section title={t(UI.quickHelp, lang)} icon="🚨">
        <div className="call-row wrap">
          {quick.map((h) => (
            <a className="call-chip" key={h.id} href={`tel:${h.number}`}>
              <span className="call-num">{h.number}</span>
              <span className="call-name">{t(h.name, lang)}</span>
            </a>
          ))}
        </div>
      </Section>

      <Section title={t(UI.browseBy, lang)} icon="🧭">
        <div className="tiles">
          <button className="tile saffron" onClick={() => go('/rights')}>
            <span className="tile-icon">⚖️</span>
            <span className="tile-title">{t(UI.fundamentalRights, lang)}</span>
            <span className="tile-sub">{RIGHTS.length}</span>
          </button>
          <button className="tile green" onClick={() => go('/situations')}>
            <span className="tile-icon">🧭</span>
            <span className="tile-title">{lang === 'en' ? 'What do I do if…' : 'ऐसा हो तो क्या करूँ…'}</span>
            <span className="tile-sub">{SITUATIONS.length}</span>
          </button>
          <button className="tile blue" onClick={() => go('/actions')}>
            <span className="tile-icon">✍️</span>
            <span className="tile-title">{t(UI.act, lang)}</span>
            <span className="tile-sub">{ACTIONS.length}</span>
          </button>
          <button className="tile grey" onClick={() => go('/learn')}>
            <span className="tile-icon">📖</span>
            <span className="tile-title">{t(UI.basics, lang)}</span>
            <span className="tile-sub">51A</span>
          </button>
        </div>
      </Section>

      <Section title={lang === 'en' ? 'Start with these' : 'इनसे शुरू करें'} icon="⭐">
        <div className="cards">
          {['arrest', 'fir-refused', 'women', 'consumer'].map((id) => {
            const s = SITUATIONS.find((x) => x.id === id)!;
            return <Card key={id} to={`/situations/${id}`} icon={s.icon} title={t(s.title, lang)} subtitle={t(s.summary, lang)} />;
          })}
        </div>
      </Section>

      <Section title={lang === 'en' ? 'Know the Constitution' : 'संविधान को जानें'} icon="🏛️">
        <div className="cards">
          {RIGHTS.slice(0, 3).map((r) => (
            <Card key={r.id} to={`/rights/${r.id}`} icon={r.icon} title={t(r.title, lang)} meta={t(r.articles, lang)} />
          ))}
        </div>
        <div className="cta-row">
          <button className="primary-btn" onClick={() => go('/rights')}>
            {t(UI.allRights, lang)} →
          </button>
        </div>
      </Section>

      <Disclaimer lang={lang} />
    </>
  );
}
