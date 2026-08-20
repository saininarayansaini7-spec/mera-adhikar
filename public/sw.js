/**
 * Cache-first service worker.
 *
 * The point of this app is that it keeps working when the connection does not —
 * a helpline number is least useful when you are out of data. So every asset the
 * app has ever fetched is served from the cache first, and refreshed in the
 * background when the network is available.
 */

const CACHE = 'mera-adhikar-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.svg', './icon-512.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Google Fonts and any other cross-origin asset: cache opaquely, never block on it.
  const sameOrigin = url.origin === self.location.origin;

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && (response.ok || response.type === 'opaque')) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);

      // Serve from cache immediately when we have it; refresh for next time.
      if (cached) {
        network.catch(() => undefined);
        return cached;
      }

      return network.then((response) => {
        if (response) return response;
        // A navigation with nothing cached still gets the shell.
        if (sameOrigin && request.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      });
    }),
  );
});
