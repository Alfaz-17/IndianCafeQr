const CACHE_NAME = 'tic-menu-cache-v4';

const STATIC_ASSETS = [
  '/',
  '/menu',
  '/info',
  '/jain',
  '/images/hero-night.webp',
  '/images/hero-day.webp',
  '/images/2-screen.webp',
  '/images/info-screen.webp',
  '/images/category_icons/cheese-garlic-bread.webp',
  '/images/category_icons/drinks.webp',
  '/images/category_icons/chocolate-waffles.webp',
  '/images/category_icons/momos.webp',
  '/images/category_icons/noodles.webp',
  '/images/category_icons/01_pizza.webp',
  '/images/category_icons/02_burger.webp',
  '/images/category_icons/03_grill_sandwich.webp',
  '/images/category_icons/04_frankie.webp',
  '/images/category_icons/05_french_fries.webp',
  '/images/category_icons/06_pasta.webp',
  '/images/category_icons/07_salad.webp',
  '/images/category_icons/08_mocktail.webp',
  '/images/category_icons/09_chocolate_shake.webp',
  '/images/category_icons/10_coffee.webp',
  '/images/category_icons/11_tea.webp',
  '/images/category_icons/12_brownie_shake.webp',
  '/images/category_icons/13_brownie_dessert.webp',
  '/images/category_icons/14_cheesecake.webp',
  '/images/category_icons/15_falafel_snacks.webp',
  '/images/category_icons/16_soup.webp',
  '/images/category_icons/17_nachos.webp',
  '/images/category_icons/18_onion_rings.webp',
  '/images/category_icons/19_spring_rolls.webp',
  '/images/category_icons/20_cauliflower_snacks.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Pre-cache error (non-fatal):', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Handle navigation (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            return caches.match('/menu');
          });
        })
    );
    return;
  }

  // Handle images, scripts, styles: Cache-first, fallback to network
  if (
    request.destination === 'image' ||
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        }).catch(() => {
          // Fallback if offline
          return new Response('', { status: 408, headers: { 'Content-Type': 'text/plain' } });
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
