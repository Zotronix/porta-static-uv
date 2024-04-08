importScripts("https://raw.githubusercontent.com/Zotronix/porta-static-uv/main/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
