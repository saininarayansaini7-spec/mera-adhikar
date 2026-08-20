import { useCallback, useEffect, useRef, useState } from 'react';
import type { Act, ActionGuide, L, Lang, Right, Situation } from './types';
import { t } from './types';
import { DUTIES, PREAMBLE } from './data/learn';
import { UI } from './ui';

/* ------------------------------------------------------------------ *
 * Turning a page into something worth listening to.
 *
 * Read from the DOM you get chevrons, emoji and stray numbers. So the
 * spoken version is composed from the data instead — headings announced
 * as sentences, lists read as prose.
 * ------------------------------------------------------------------ */

const list = (items: L[] | undefined, lang: Lang) => (items ?? []).map((i) => t(i, lang)).join(' ');

/** Join the parts of a page, dropping anything empty, into one spoken script. */
const script = (...parts: (string | undefined)[]) => parts.filter(Boolean).join(' ');

export function rightSpeech(r: Right, lang: Lang): string {
  return script(
    t(r.title, lang) + '.',
    t(r.articles, lang) + '.',
    t(r.summary, lang),
    t(UI.whatItMeans, lang) + '.',
    list(r.meaning, lang),
    t(UI.articlesInside, lang) + '.',
    r.detail.map((d) => `${t(d.number, lang)}. ${t(d.title, lang)}. ${t(d.plain, lang)}`).join(' '),
    t(UI.realLife, lang) + '.',
    list(r.examples, lang),
    t(UI.ifViolated, lang) + '.',
    list(r.ifViolated, lang),
    t(UI.limits, lang) + '.',
    list(r.limits, lang),
  );
}

export function situationSpeech(s: Situation, lang: Lang): string {
  return script(
    t(s.title, lang) + '.',
    t(s.summary, lang),
    t(UI.youCan, lang) + '.',
    list(s.youCan, lang),
    t(UI.theyCannot, lang) + '.',
    list(s.theyCannot, lang),
    t(UI.whatToDo, lang) + '.',
    list(s.steps, lang),
    t(UI.lawsInvolved, lang) + '.',
    list(s.laws, lang),
  );
}

export function actionSpeech(a: ActionGuide, lang: Lang): string {
  return script(
    t(a.title, lang) + '.',
    t(a.summary, lang),
    t(UI.whoCanUse, lang) + '. ' + t(a.whoCanUse, lang),
    t(UI.cost, lang) + '. ' + t(a.cost, lang),
    t(UI.timeLimit, lang) + '. ' + t(a.timeLimit, lang),
    t(UI.whatToDo, lang) + '.',
    a.steps.map((s, i) => `${i + 1}. ${t(s.title, lang)}. ${t(s.detail, lang)}`).join(' '),
    t(UI.documents, lang) + '.',
    list(a.documents, lang),
    a.ifRefused ? t(UI.ifRefused, lang) + '. ' + list(a.ifRefused, lang) : undefined,
  );
}

export function actSpeech(a: Act, lang: Lang): string {
  return script(
    t(a.short, lang) + '.',
    t(a.name, lang) + ', ' + a.year + '.',
    t(a.what, lang),
    t(UI.whoItProtects, lang) + '. ' + t(a.whoItProtects, lang),
    t(UI.whatItSays, lang) + '.',
    list(a.keyPoints, lang),
    a.punishment ? t(UI.penalty, lang) + '. ' + t(a.punishment, lang) : undefined,
    t(UI.howToUse, lang) + '.',
    list(a.useIt, lang),
  );
}

export function learnSpeech(lang: Lang): string {
  return script(
    t(UI.preamble, lang) + '.',
    t(PREAMBLE, lang).replace(/\n+/g, ' '),
    t(UI.fundamentalDuties, lang) + '.',
    DUTIES.map((d) => `${d.n}. ${t(d.text, lang)}`).join(' '),
  );
}

/* ------------------------------------------------------------------ *
 * The speaking itself.
 * ------------------------------------------------------------------ */

/**
 * Browsers cut a long utterance off part-way through — Chrome stops at
 * roughly fifteen seconds. So the script is spoken in short pieces, each
 * one queued when the last finishes.
 */
function intoChunks(text: string): string[] {
  // Split after a full stop, a Devanagari danda, or a question mark.
  const sentences = text.split(/(?<=[।.!?:])\s+/);
  const chunks: string[] = [];
  let buffer = '';

  for (const sentence of sentences) {
    const merged = (buffer + ' ' + sentence).trim();
    if (buffer && merged.length > 180) {
      chunks.push(buffer);
      buffer = sentence.trim();
    } else {
      buffer = merged;
    }
  }
  if (buffer) chunks.push(buffer);

  return chunks.filter((c) => c.length > 0);
}

export type SpeechState = 'idle' | 'speaking' | 'paused';

export const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

/** Picks the best installed voice for the language, or lets the browser choose. */
function pickVoice(lang: Lang): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return undefined;

  const want = lang === 'hi' ? 'hi' : 'en';
  // An Indian English voice reads Indian names and place names far better.
  return (
    voices.find((v) => v.lang.toLowerCase().startsWith(lang === 'hi' ? 'hi-in' : 'en-in')) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(want)) ??
    undefined
  );
}

export function useSpeech(text: string, lang: Lang) {
  const [state, setState] = useState<SpeechState>('idle');
  const [progress, setProgress] = useState(0);
  const chunksRef = useRef<string[]>([]);
  const indexRef = useRef(0);
  // Guards against a stale utterance's onend advancing a newer run.
  const runRef = useRef(0);

  const stop = useCallback(() => {
    runRef.current += 1;
    if (speechSupported) window.speechSynthesis.cancel();
    indexRef.current = 0;
    setProgress(0);
    setState('idle');
  }, []);

  // Never let speech outlive the page that started it.
  useEffect(() => stop, [stop, text]);

  useEffect(() => {
    if (!speechSupported) return;
    // Voices load asynchronously in most browsers; this nudges them in.
    const warm = () => window.speechSynthesis.getVoices();
    warm();
    window.speechSynthesis.addEventListener('voiceschanged', warm);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', warm);
  }, []);

  /**
   * Speaks chunk `i`, then queues the next from its onend. A named declaration
   * rather than a memoised callback, so the recursion refers to itself plainly.
   */
  function speakFrom(run: number) {
    if (run !== runRef.current) return;

    const chunks = chunksRef.current;
    const i = indexRef.current;

    if (i >= chunks.length) {
      setState('idle');
      setProgress(0);
      indexRef.current = 0;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunks[i]);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    const voice = pickVoice(lang);
    if (voice) utterance.voice = voice;
    utterance.rate = 0.95;

    utterance.onend = () => {
      if (run !== runRef.current) return;
      indexRef.current = i + 1;
      setProgress(Math.round(((i + 1) / chunks.length) * 100));
      speakFrom(run);
    };
    utterance.onerror = () => {
      if (run === runRef.current) setState('idle');
    };

    window.speechSynthesis.speak(utterance);
  }

  function play() {
    if (!speechSupported) return;

    // Resuming a pause picks up mid-sentence; a fresh start rebuilds the queue.
    if (state === 'paused') {
      window.speechSynthesis.resume();
      setState('speaking');
      return;
    }

    window.speechSynthesis.cancel();
    runRef.current += 1;
    chunksRef.current = intoChunks(text);
    indexRef.current = 0;
    setProgress(0);
    setState('speaking');
    speakFrom(runRef.current);
  }

  function pause() {
    if (!speechSupported) return;
    window.speechSynthesis.pause();
    setState('paused');
  }

  return { state, progress, play, pause, stop };
}
