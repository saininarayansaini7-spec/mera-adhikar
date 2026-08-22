/** A letter or digit in any script, including Devanagari. */
const LETTER_OR_DIGIT = /[\p{L}\p{N}]/u;

/**
 * True when `term` appears in `text` at the start of a word.
 *
 * Plain `includes` was too loose: searching "ration" matched "registration",
 * which put an FIR guide above the food security law. Matching at a word start
 * — rather than a whole word — still lets "adhikar" find "adhikari" and "FIR"
 * find "FIRs", which is what people expect from a search box.
 *
 * Scanning by hand rather than building a RegExp keeps user input out of the
 * regex engine entirely, so a query full of brackets is just a query.
 */
export function startsWord(text: string, term: string): boolean {
  if (term.length === 0) return false;

  let at = text.indexOf(term);
  while (at !== -1) {
    if (at === 0 || !LETTER_OR_DIGIT.test(text[at - 1])) return true;
    at = text.indexOf(term, at + 1);
  }
  return false;
}

/**
 * Levenshtein distance, abandoned as soon as it exceeds `max`.
 *
 * Returns `max + 1` for anything further apart, so callers can compare without
 * paying for the full matrix on words that are obviously unrelated.
 */
export function editDistance(a: string, b: string, max: number): number {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > max) return max + 1;

  // Two rolling rows are all the algorithm ever needs.
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);
  let current = new Array<number>(b.length + 1);

  for (let i = 1; i <= a.length; i++) {
    current[0] = i;
    let rowBest = current[0];

    for (let j = 1; j <= b.length; j++) {
      const substitution = previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1);
      current[j] = Math.min(previous[j] + 1, current[j - 1] + 1, substitution);
      if (current[j] < rowBest) rowBest = current[j];
    }

    // Every later row can only grow, so once a whole row is past the limit
    // the answer is too.
    if (rowBest > max) return max + 1;

    const swap = previous;
    previous = current;
    current = swap;
  }

  return previous[b.length];
}

/** How far a typo may stray before we stop guessing. Short words get no slack. */
export function slackFor(word: string): number {
  if (word.length < 4) return 0;
  if (word.length < 7) return 1;
  return 2;
}

/**
 * The closest words in `vocabulary` to a misspelling, nearest first.
 *
 * Someone typing "modifiction" or "giraftaar" should still land on the right
 * page — a search that answers only correctly-spelled queries is a search for
 * people who already know the answer.
 */
export function nearestWords(word: string, vocabulary: Iterable<string>, limit = 4): string[] {
  const max = slackFor(word);
  if (max === 0) return [];

  const found: { word: string; distance: number }[] = [];

  for (const candidate of vocabulary) {
    if (Math.abs(candidate.length - word.length) > max) continue;

    const distance = editDistance(word, candidate, max);
    if (distance <= max) found.push({ word: candidate, distance });
  }

  return found
    .sort((a, b) => a.distance - b.distance || a.word.localeCompare(b.word))
    .slice(0, limit)
    .map((f) => f.word);
}
