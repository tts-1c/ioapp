const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json'
  // Добавьте сюда стили или картинки, если они есть
];

// Установка: кешируем файлы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Перехват запросов: если сети нет, берем из кеша
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
