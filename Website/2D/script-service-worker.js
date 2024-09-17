const CACHE_NAME = "my-site-cache-v1";
const assetsToCache = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/scripts/assets.js",
  "/scripts/dropdown.js",
  "/scripts/orbitInterpolation.js",
  "/posters/AC_Unit.webp",
  "/posters/Cardboard_Boxes.webp",
  "/posters/Exotic_Statue.webp",
  "/posters/Industrial_Chimney.webp",
  "/posters/Laboratory_Door.webp",
  "/posters/Metal_Pendulum.webp",
  "/icons/cgtrader.svg",
  "/icons/github.svg",
  "/icons/information.svg",
  "/icons/instagram.svg",
  "/icons/turbosquid.svg",
  "/assets/AC_Unit/AC_Unit.glb",
  "/assets/Cardboard_Boxes/Cardboard_Boxes.glb",
  "/assets/Exotic_Statue/Exotic_Statue.glb",
  "/assets/Industrial_Chimney/Industrial_Chimney.glb",
  "/assets/Laboratory_Door/Laboratory_Door.glb",
  "/assets/Metal_Pendulum/Metal_Pendulum.glb",
  "/videos/2D Version Loop.mp4",
  "/videos/3D Version Loop.mp4"
];

// Caches assets from assets.js
const assets = [
  {
    src: "assets/Exotic_Ethnic_Tribal_Statue/Exotic_Ethnic_Tribal_Statue.glb",
    postersrc: "posters/Exotic_Statue.webp",
  },
  {
    src: "assets/Industrial_Chimney/Industrial_Chimney.glb",
    postersrc: "posters/Industrial_Chimney.webp",
  },
  {
    src: "assets/Laboratory_Door/Laboratory_Door.glb",
    postersrc: "posters/Laboratory_Door.webp",
  },
  {
    src: "assets/Metal_Pendulum/Metal_Pendulum.glb",
    postersrc: "posters/Metal_Pendulum.webp",
  },
  {
    src: "assets/AC_Unit/AC_Unit.glb",
    postersrc: "posters/AC_Unit.webp",
  },
  {
    src: "assets/Cardboard_Boxes/Cardboard_Boxes.glb",
    postersrc: "posters/Cardboard_Boxes.webp",
  }
];

assets.forEach((asset) => {
  assetsToCache.push(asset.src);
  assetsToCache.push(asset.postersrc);
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
