importScripts('https://cdn.jsdelivr.net/gh/Zotronix/porta-static-uv@main/uv/uv.bundle.js');
importScripts('https://cdn.jsdelivr.net/gh/Zotronix/porta-static-uv@main/uv/uv.config.js');
importScripts('https://cdn.jsdelivr.net/gh/Zotronix/porta-static-uv@main/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
