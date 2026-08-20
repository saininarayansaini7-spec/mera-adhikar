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
