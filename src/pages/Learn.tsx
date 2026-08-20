import { DUTIES, FACTS, PREAMBLE, PRINCIPLES } from '../data/learn';
import { go } from '../router';
import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { Disclaimer, PageTitle, Section } from '../components/ui';

export function Learn({ lang }: { lang: Lang }) {
  return (
    <>
      <PageTitle
        icon="📖"
        title={t(UI.basics, lang)}
        sub={
          lang === 'en'
            ? 'The Preamble, your duties, and the goals the State is bound to pursue'
            : 'प्रस्तावना, आपके कर्तव्य, और वे लक्ष्य जिन्हें पाना राज्य का दायित्व है'
        }
      />

      <Section title={t(UI.preamble, lang)} icon="🇮🇳">
        <div className="preamble">{t(PREAMBLE, lang)}</div>
      </Section>

      <Section title={t(UI.keyFacts, lang)} icon="📌">
        <div className="facts">
          {FACTS.map((f, i) => (
            <div className="fact" key={i}>
              <span className="fact-label">{t(f.label, lang)}</span>
              <span>{t(f.value, lang)}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t(UI.fundamentalDuties, lang)} icon="🤲">
        <p className="section-note">{t(UI.dutiesSub, lang)}</p>
        <div className="duties">
          {DUTIES.map((d) => (
            <div className="duty" key={d.n}>
              <span className="duty-n">{d.n}</span>
              <div>
                <p className="duty-text">{t(d.text, lang)}</p>
                <p className="duty-everyday">{t(d.everyday, lang)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t(UI.dpsp, lang)} icon="🎯">
        <p className="section-note">
          {lang === 'en'
            ? 'Part IV, Articles 36–51. These cannot be enforced in court, but Article 37 makes them fundamental in the governance of the country — and courts read them together with your fundamental rights.'
            : 'भाग IV, अनुच्छेद 36–51। ये अदालत में लागू नहीं कराए जा सकते, पर अनुच्छेद 37 इन्हें देश के शासन में मौलिक बताता है — और अदालतें इन्हें आपके मौलिक अधिकारों के साथ पढ़ती हैं।'}
        </p>
        <div className="articles">
          {PRINCIPLES.map((p, i) => (
            <article className="article-card" key={i}>
              <h3>
                <span className="art-num">{t(p.article, lang)}</span>
                {t(p.title, lang)}
              </h3>
              <p>{t(p.plain, lang)}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="cta-row">
        <button className="primary-btn" onClick={() => go('/quiz')}>
          {lang === 'en' ? 'Test yourself →' : 'खुद को परखें →'}
        </button>
      </div>

      <Disclaimer lang={lang} />
    </>
  );
}
