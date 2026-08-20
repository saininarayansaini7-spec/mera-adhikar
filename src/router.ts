import { useEffect, useState } from 'react';

/** Current hash route, e.g. "/rights/equality". Works from file:// too. */
export function useRoute(): string {
  const read = () => window.location.hash.replace(/^#/, '') || '/';
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function go(path: string) {
  window.location.hash = path;
}

/** Match "/rights/:id" style patterns. Returns params, or null if no match. */
export function match(route: string, pattern: string): Record<string, string> | null {
  const r = route.split('/').filter(Boolean);
  const p = pattern.split('/').filter(Boolean);
  if (r.length !== p.length) return null;

  const params: Record<string, string> = {};
  for (let i = 0; i < p.length; i++) {
    if (p[i].startsWith(':')) params[p[i].slice(1)] = decodeURIComponent(r[i]);
    else if (p[i] !== r[i]) return null;
  }
  return params;
}
