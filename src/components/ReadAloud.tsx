import type { Lang } from '../types';
import { t } from '../types';
import { UI } from '../ui';
import { speechSupported, useSpeech } from '../speech';

/**
 * Reads a whole guide out loud. This is the difference between the app
 * being usable and unusable for someone who does not read long text
 * comfortably — which is a great many of the people it is written for.
 */
export function ReadAloud({ text, lang }: { text: string; lang: Lang }) {
  const { state, progress, play, pause, stop } = useSpeech(text, lang);

  // A browser with no speech engine simply does not show the control.
  if (!speechSupported) return null;

  const speaking = state === 'speaking';

  return (
    <div className={'read-aloud' + (state === 'idle' ? '' : ' active')}>
      <button
        className="read-btn"
        onClick={speaking ? pause : play}
        aria-label={t(speaking ? UI.pauseAloud : UI.readAloud, lang)}
      >
        <span className="read-icon" aria-hidden="true">
          {speaking ? '❚❚' : '▶'}
        </span>
        <span>{t(speaking ? UI.pauseAloud : state === 'paused' ? UI.resumeAloud : UI.readAloud, lang)}</span>
      </button>

      {state !== 'idle' && (
        <>
          <span className="read-progress" aria-hidden="true">
            <span className="read-bar" style={{ width: `${progress}%` }} />
          </span>
          <button className="read-stop" onClick={stop} aria-label={t(UI.stopAloud, lang)}>
            ■
          </button>
        </>
      )}
    </div>
  );
}
