import { useEffect, useState } from 'react';
import { go, match, useRoute } from './router';
import { t } from './types';
import { UI, useBookmarks, useLang } from './ui';
import { Home } from './pages/Home';
import { RightDetail, RightsList, NotFound } from './pages/Rights';
import { SituationDetail, SituationsList } from './pages/Situations';
import { ActionDetail, ActionsList } from './pages/Actions';
import { Helplines } from './pages/Helplines';
import { Learn } from './pages/Learn';
import { Quiz } from './pages/Quiz';
import { Saved, SearchResults } from './pages/Saved';

const TABS = [
  { path: '/', icon: '🏠', label: UI.home },
  { path: '/rights', icon: '⚖️', label: UI.rights },
  { path: '/situations', icon: '🧭', label: UI.situations },
  { path: '/actions', icon: '✍️', label: UI.act },
  { path: '/helplines', icon: '📞', label: UI.help },
];

export default function App() {
  const route = useRoute();
  const [lang, setLang] = useLang();
  const bookmarks = useBookmarks();

  // The search box belongs to the page it was typed on: tapping a result navigates
  // away, and the query is stale from that moment. Deriving it from the route
  // clears it without a second render pass.
  const [typed, setTyped] = useState({ q: '', route });
  const query = typed.route === route ? typed.q : '';
  const setQuery = (q: string) => setTyped({ q, route });

  // Landing on a new page should put you at the top of it.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const searching = query.trim().length > 0;

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => go('/')}>
          <span className="brand-mark" aria-hidden="true">
            ☸
          </span>
          <span className="brand-name">{t(UI.appName, lang)}</span>
        </button>

        <div className="topbar-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            aria-label="Change language"
          >
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>
          <button className="icon-btn" onClick={() => go('/saved')} aria-label={t(UI.saved, lang)}>
            ★
          </button>
        </div>
      </header>

      <div className="searchbar">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t(UI.searchPlaceholder, lang)}
          aria-label={t(UI.search, lang)}
        />
        {searching && (
          <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear">
            ✕
          </button>
        )}
      </div>

      <main className="content">{searching ? <SearchResults query={query} lang={lang} /> : renderRoute()}</main>

      <nav className="tabbar">
        {TABS.map((tab) => {
          const active = tab.path === '/' ? route === '/' : route.startsWith(tab.path);
          return (
            <button key={tab.path} className={'tab' + (active ? ' active' : '')} onClick={() => go(tab.path)}>
              <span className="tab-icon" aria-hidden="true">
                {tab.icon}
              </span>
              <span className="tab-label">{t(tab.label, lang)}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );

  function renderRoute() {
    if (route === '/' || route === '') return <Home lang={lang} />;
    if (route === '/rights') return <RightsList lang={lang} />;
    if (route === '/situations') return <SituationsList lang={lang} />;
    if (route === '/actions') return <ActionsList lang={lang} />;
    if (route === '/helplines') return <Helplines lang={lang} />;
    if (route === '/learn') return <Learn lang={lang} />;
    if (route === '/quiz') return <Quiz lang={lang} />;
    if (route === '/saved') return <Saved ids={bookmarks.ids} lang={lang} />;

    const right = match(route, '/rights/:id');
    if (right)
      return (
        <RightDetail
          id={right.id}
          lang={lang}
          saved={bookmarks.has(`right:${right.id}`)}
          onToggleSave={() => bookmarks.toggle(`right:${right.id}`)}
        />
      );

    const situation = match(route, '/situations/:id');
    if (situation)
      return (
        <SituationDetail
          id={situation.id}
          lang={lang}
          saved={bookmarks.has(`situation:${situation.id}`)}
          onToggleSave={() => bookmarks.toggle(`situation:${situation.id}`)}
        />
      );

    const action = match(route, '/actions/:id');
    if (action)
      return (
        <ActionDetail
          id={action.id}
          lang={lang}
          saved={bookmarks.has(`action:${action.id}`)}
          onToggleSave={() => bookmarks.toggle(`action:${action.id}`)}
        />
      );

    return <NotFound lang={lang} />;
  }
}
