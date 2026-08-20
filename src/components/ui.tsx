import { useState } from 'react';
import type { ReactNode } from 'react';
import type { L, Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { go } from '../router';

export function Section({ title, icon, children }: { title: string; icon?: string; children: ReactNode }) {
  return (
    <section className="section">
      <h2 className="section-title">
        {icon && <span aria-hidden="true">{icon} </span>}
        {title}
      </h2>
      {children}
    </section>
  );
}

/** A list of localized bullets with a leading marker. */
export function Bullets({ items, lang, marker = '•' }: { items: L[]; lang: Lang; marker?: string }) {
  return (
    <ul className="bullets">
      {items.map((item, i) => (
        <li key={i}>
          <span className="marker" aria-hidden="true">
            {marker}
          </span>
          <span>{t(item, lang)}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedSteps({ items, lang }: { items: L[]; lang: Lang }) {
  return (
    <ol className="steps">
      {items.map((item, i) => (
        <li key={i}>
          <span className="step-n">{i + 1}</span>
          <span>{t(item, lang)}</span>
        </li>
      ))}
    </ol>
  );
}

export function Card({
  to,
  icon,
  title,
  subtitle,
  meta,
}: {
  to: string;
  icon?: string;
  title: string;
  subtitle?: string;
  meta?: string;
}) {
  return (
    <button className="card" onClick={() => go(to)}>
      {icon && (
        <span className="card-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="card-body">
        <span className="card-title">{title}</span>
        {subtitle && <span className="card-sub">{subtitle}</span>}
        {meta && <span className="card-meta">{meta}</span>}
      </span>
      <span className="card-chev" aria-hidden="true">
        ›
      </span>
    </button>
  );
}

export function BookmarkButton({
  saved,
  onToggle,
  lang,
}: {
  saved: boolean;
  onToggle: () => void;
  lang: Lang;
}) {
  return (
    <button
      className={'bookmark' + (saved ? ' on' : '')}
      onClick={onToggle}
      aria-pressed={saved}
      aria-label={t(saved ? UI.savedLabel : UI.save, lang)}
    >
      <span aria-hidden="true">{saved ? '★' : '☆'}</span>
      <span className="bookmark-text">{t(saved ? UI.savedLabel : UI.save, lang)}</span>
    </button>
  );
}

export function CopyButton({ text, lang }: { text: string; lang: Lang }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard blocked — the text is on screen and can still be selected */
    }
    setDone(true);
    setTimeout(() => setDone(false), 1800);
  };

  return (
    <button className="copy-btn" onClick={copy}>
      {t(done ? UI.copied : UI.copy, lang)}
    </button>
  );
}

export function BackLink({ to, lang }: { to: string; lang: Lang }) {
  return (
    <button className="back" onClick={() => go(to)}>
      ← {t(UI.back, lang)}
    </button>
  );
}

export function Disclaimer({ lang }: { lang: Lang }) {
  return <p className="disclaimer">{t(UI.disclaimer, lang)}</p>;
}

export function Pills({ items, lang }: { items: L[]; lang: Lang }) {
  return (
    <div className="pills">
      {items.map((item, i) => (
        <span className="pill" key={i}>
          {t(item, lang)}
        </span>
      ))}
    </div>
  );
}

export function PageTitle({ icon, title, sub }: { icon?: string; title: string; sub?: string }) {
  return (
    <header className="page-title">
      {icon && (
        <div className="page-icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <h1>{title}</h1>
      {sub && <p>{sub}</p>}
    </header>
  );
}
