const CACHE = "heli-run-v3";
const ASSETS = ["/Heli-run/", "/Heli-run/index.html", "/Heli-run/manifest.json", "/Heli-run/icons/icon-192.png", "/Heli-run/icons/icon-512.png", "/Heli-run/icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
