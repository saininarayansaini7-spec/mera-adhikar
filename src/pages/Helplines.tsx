import { HELPLINES, PORTALS } from '../data/helplines';
import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { Disclaimer, PageTitle, Section } from '../components/ui';

const GROUPS: { key: string; label: { en: string; hi: string } }[] = [
  { key: 'emergency', label: { en: 'Emergency', hi: 'आपातकाल' } },
  { key: 'women', label: { en: 'Women', hi: 'महिलाएँ' } },
  { key: 'child', label: { en: 'Children', hi: 'बच्चे' } },
  { key: 'legal', label: { en: 'Legal help', hi: 'कानूनी मदद' } },
  { key: 'cyber', label: { en: 'Cyber and money', hi: 'साइबर और पैसा' } },
  { key: 'health', label: { en: 'Health', hi: 'स्वास्थ्य' } },
  { key: 'other', label: { en: 'Other', hi: 'अन्य' } },
];

export function Helplines({ lang }: { lang: Lang }) {
  return (
    <>
      <PageTitle
        icon="📞"
        title={t(UI.help, lang)}
        sub={
          lang === 'en'
            ? 'Tap a number to call. All of these are free from any phone in India.'
            : 'कॉल करने के लिए नंबर दबाएँ। ये सब भारत में किसी भी फ़ोन से नि:शुल्क हैं।'
        }
      />

      {GROUPS.map((g) => {
        const lines = HELPLINES.filter((h) => h.category === g.key);
        if (lines.length === 0) return null;

        return (
          <Section key={g.key} title={t(g.label, lang)}>
            <div className="helplines">
              {lines.map((h) => (
                <a className="helpline" key={h.id} href={`tel:${h.number}`}>
                  <div className="helpline-num">{h.number}</div>
                  <div className="helpline-body">
                    <div className="helpline-name">{t(h.name, lang)}</div>
                    <div className="helpline-who">{t(h.who, lang)}</div>
                    <div className="helpline-hours">🕐 {t(h.hours, lang)}</div>
                  </div>
                </a>
              ))}
            </div>
          </Section>
        );
      })}

      <Section title={t(UI.portals, lang)} icon="🌐">
        <div className="links">
          {PORTALS.map((p, i) => (
            <a className="link-row" key={i} href={p.url} target="_blank" rel="noreferrer noopener">
              <span>
                <strong>{t(p.name, lang)}</strong>
                <br />
                <span className="link-what">{t(p.what, lang)}</span>
              </span>
              <span className="link-url">{p.url.replace('https://', '')}</span>
            </a>
          ))}
        </div>
      </Section>

      <Disclaimer lang={lang} />
    </>
  );
}
