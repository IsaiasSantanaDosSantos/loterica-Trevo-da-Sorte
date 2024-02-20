const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
  "/index.html",
  "/css/index.css",
  "/js/index.js",
  "/contact.html",
  "/js/contact.js",
  "/css/contact.css",
  "/aboutUs.html",
  "/js/aboutUs.js",
  "/css/aboutUs.css",
  "/howItWorks.html",
  "/js/howItWorks.js",
  "/css/howItWorks.css",
  "/product.html",
  "/js/product.js",
  "/css/product.css",
  "/admin.html",
  "/js/admin.js",
  "/css/admin.css",
  "/responsible-policy.html",
  "/js/responsible-policy.js",
  "/css/responsible-policy.css",
  "/results.html",
  "/js/results.js",
  "/css/results.css",
  "/offline.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map((url) => {
          return fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Request failed for ${url}`);
              }
              return cache.put(url, response);
            })
            .catch((error) => {
              console.error("Failed to cache", url, error);
            });
        })
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(
    caches.match(event.request).then(async (response) => {
      if (response) {
        const expirationTime = response.headers.get("X-Cache-Expiration");
        if (expirationTime && Date.now() > parseInt(expirationTime, 10)) {
          return await fetchAndUpdateCache(event.request);
        }
        return response;
      }

      return await fetchAndUpdateCache(event.request);
    })
  );
});

async function fetchAndUpdateCache(request) {
  try {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return caches.match("/offline.html");
    }

    const cacheExpiration = Date.now() + 60 * 60 * 1000;
    response.headers.append("X-Cache-Expiration", cacheExpiration.toString());

    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());

    return response;
  } catch (error) {
    console.error("Erro ao buscar e atualizar cache:", error);
    throw error;
  }
}
