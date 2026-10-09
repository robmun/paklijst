// Paklijst service worker.
// Pagina's: eerst netwerk (zodat updates direct binnenkomen), cache als je offline bent.
// Overige bestanden: uit de cache, en op de achtergrond ververst.
const CACHE='paklijst-v33';
const ASSETS=['./','./index.html','./manifest.json','./icon.svg','./apple-touch-icon.png','./icon-192.png','./icon-512.png'];

self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin) return;
  const fromNetwork=()=>fetch(req).then(r=>{
    if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy));}
    return r;
  });
  if(req.mode==='navigate'||req.destination==='document'){
    e.respondWith(fromNetwork().catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(cached=>{
    const update=fromNetwork();
    if(cached){e.waitUntil(update.catch(()=>{}));return cached;}
    return update;
  }));
});
