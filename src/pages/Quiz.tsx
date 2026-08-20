import { useState } from 'react';
import { QUIZ } from '../data/learn';
import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { PageTitle } from '../components/ui';

export function Quiz({ lang }: { lang: Lang }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = QUIZ[index];

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= QUIZ.length) {
      setDone(true);
      return;
    }
    setIndex(index + 1);
    setPicked(null);
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / QUIZ.length) * 100);
    return (
      <>
        <PageTitle icon="🎓" title={t(UI.score, lang)} />
        <div className="score-card">
          <div className="score-big">
            {score} / {QUIZ.length}
          </div>
          <p>
            {pct >= 80
              ? lang === 'en'
                ? 'You know your rights well. Now tell someone who does not.'
                : 'आप अपने अधिकार अच्छी तरह जानते हैं। अब किसी ऐसे को बताएँ जो नहीं जानता।'
              : pct >= 50
                ? lang === 'en'
                  ? 'A good start. Read the rights section once more.'
                  : 'अच्छी शुरुआत। अधिकार वाला हिस्सा एक बार और पढ़ें।'
                : lang === 'en'
                  ? 'Worth another look — start with the Right to Freedom.'
                  : 'एक बार फिर देखने लायक — स्वतंत्रता के अधिकार से शुरू करें।'}
          </p>
          <button className="primary-btn" onClick={restart}>
            {t(UI.restart, lang)}
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageTitle icon="🎓" title={t(UI.quiz, lang)} />
      <div className="quiz-progress">
        <div className="quiz-bar" style={{ width: `${((index + 1) / QUIZ.length) * 100}%` }} />
      </div>
      <p className="quiz-count">
        {index + 1} / {QUIZ.length}
      </p>

      <h2 className="quiz-q">{t(q.q, lang)}</h2>

      <div className="options">
        {q.options.map((o, i) => {
          let cls = 'option';
          if (picked !== null) {
            if (i === q.answer) cls += ' right';
            else if (i === picked) cls += ' wrong';
          }
          return (
            <button className={cls} key={i} onClick={() => choose(i)} disabled={picked !== null}>
              {t(o, lang)}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className={'explain ' + (picked === q.answer ? 'ok' : 'no')}>
          <strong>{t(picked === q.answer ? UI.correct : UI.wrong, lang)}</strong>
          <p>{t(q.why, lang)}</p>
          <button className="primary-btn" onClick={next}>
            {t(UI.next, lang)}
          </button>
        </div>
      )}
    </>
  );
}
