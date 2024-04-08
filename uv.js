importScripts('https://raw.githubusercontent.com/Zotronix/porta-static-uv/uv/uv.bundle.js');
importScripts('https://raw.githubusercontent.com/Zotronix/porta-static-uv/uv/uv.config.js');
importScripts('https://raw.githubusercontent.com/Zotronix/porta-static-uv/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
