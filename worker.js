self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                "./",
                './src/css/style.css',
                './src/js/client.js',
                './src/logos/logo.png',
                'index.html',
                'manifest.json'
            ])
        })
    )
})


self.onfetch = function (event) {
    event.respondWith(
        (async function () {
            var cache = await caches.open('static');
            var cachedFiles = await cache.match(event.request);
            if (cachedFiles) {
                return cachedFiles;
            } else {
                try {
                    var response = await fetch(event.request);
                    await cache.put(event.request, response.clone());
                    return response;
                } catch (e) { /* ... */ }
            }
        }())
    )
}