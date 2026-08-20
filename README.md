# Mera Adhikar — मेरा अधिकार

A phone-first, bilingual (English / हिंदी) guide to **your rights under the Constitution
of India** — and, just as importantly, the exact steps to claim them.

Most rights guides stop at "you have the right to X". This one carries through to
*what you actually do on Tuesday morning*: which office, which form, which section,
what it costs, how long you have, and a draft you can copy and fill in.

It works **offline**. The people who most need a helpline number are often the ones
without data.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # typecheck + production bundle into dist/
npm run preview  # serve the built app (service worker only runs here, not in dev)
```

No API keys, no backend, no database. Everything is a static bundle.

## What's inside

| Screen | What it holds |
|---|---|
| **Rights** | The 6 Fundamental Rights (Part III, Articles 12–35) — plain-language meaning, an article-by-article breakdown, real-life examples, what to do when one is violated, the limits, and landmark judgments |
| **Situations** | 15 "what do I do if…" guides — police stop or arrest, FIR refused, women's rights, workplace harassment, wages, consumer fraud, school admission, a child in danger, caste atrocity, online fraud, traffic stop, a bribe demand, disability, senior citizens, hospital refusal |
| **Take Action** | 8 filing guides with steps, cost, deadlines and copy-paste drafts — FIR, RTI, consumer complaint, free legal aid, complaint against police, POSH complaint, writ petition / PIL, CPGRAMS |
| **Helplines** | 14 national numbers, tap to dial, plus 10 official complaint portals |
| **Learn** | The Preamble, 11 Fundamental Duties (Art 51A), 14 Directive Principles, key facts, and a 10-question quiz |

Plus search across all of it in both languages, and bookmarks saved on the device.

## Where the content lives

All content is data. There is no content in the components — to add or edit a guide
you only touch `src/data/`:

```
src/data/rights.ts       6 fundamental rights
src/data/situations.ts   the "what do I do if…" guides
src/data/actions.ts      filing guides + copy-paste drafts
src/data/helplines.ts    numbers and portals
src/data/learn.ts        preamble, duties, directive principles, facts, quiz
```

Every user-facing string is a `{ en, hi }` pair (the `L` type in `src/types.ts`), so
**a new entry must be written in both languages** or it will render blank for half
the users. Copy the shape of an existing entry — the types will tell you what is
missing.

Situations and actions cross-link by id: a situation's `actions: ['fir', 'legal-aid']`
renders cards linking to those guides.

## A note on section numbers

On **1 July 2024** the three criminal codes were replaced:

| Old | New |
|---|---|
| Indian Penal Code, 1860 | Bharatiya Nyaya Sanhita, 2023 (BNS) |
| Code of Criminal Procedure, 1973 | Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) |
| Indian Evidence Act, 1872 | Bharatiya Sakshya Adhiniyam, 2023 (BSA) |

The app gives the **new** section number with the familiar old one in brackets —
"Section 173 BNSS (earlier Section 154 CrPC)" — because notices, older judgments and
most people's memory still run on the old numbering.

## Architecture

Deliberately small. React 19 + TypeScript + Vite, and nothing else at runtime:

- `src/router.ts` — a ~30-line hash router (`#/rights/equality`). Hash routing means
  the app works from `file://` and needs no server rewrite rules.
- `src/ui.ts` — every interface label in both languages, plus the language and
  bookmark hooks (both `localStorage`-backed, both survive a blocked or full store).
- `src/search.ts` — a flat index built from the data files at module load; word-wise
  scoring where a title match outranks a body match.
- `src/components/ui.tsx` — the shared pieces (`Card`, `Bullets`, `NumberedSteps`, …).
- `public/sw.js` — cache-first service worker; registered from `main.tsx` in
  production only, so dev never serves stale modules.

## Disclaimer

This app explains the law in simple words, for learning and awareness. **It is not
legal advice.** Laws change and facts differ from case to case. For your own matter,
talk to a lawyer, or call **15100** for free legal aid from your District Legal
Services Authority — it is a right under Article 39A, not a favour.
