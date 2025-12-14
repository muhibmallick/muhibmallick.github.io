'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e30e563318ec96fb1623ec98a98ccaf3",
"assets/AssetManifest.bin.json": "f9bee09c5e4f3596ce13387458ba5bfd",
"assets/assets/Airidev.png": "c4f4b9a2c27dd6184d0aaa9552ccbb76",
"assets/assets/arcana.png": "0628ae3b9f4ffa6ff71337be4b73465d",
"assets/assets/digitechinfra.png": "a10330895277b2782482c1e8892451d2",
"assets/assets/Image.png": "122b108a2d6e6c7f50d3fd46f1ec4470",
"assets/assets/Images/Covers/Google-flutter.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/assets/Images/Covers/IBM-BPM.jpg": "6b8e1e0748353fac809420591b35ddd2",
"assets/assets/Images/Covers/unity.png": "dcdd56315afdf07eff41114195edd2fb",
"assets/assets/Images/Flutter/BACHAT_MART.png": "ec7706cd76cbe0257004b74bef8d5d12",
"assets/assets/Images/Flutter/CAR_POOLING.png": "75306fe8348bbd66305dfce9bd7b7f20",
"assets/assets/Images/Flutter/CHILLCHASE.png": "da6e97f05b655cd8286e978715586dc6",
"assets/assets/Images/Flutter/FOOD_MART.png": "4969630a6eb88af46605f6fe8abc56d9",
"assets/assets/Images/Flutter/TIKTOK_CLONE.png": "eeb785910ae6e4af6e77515e064148c6",
"assets/assets/Images/Unity/unity_project1.png": "650c9961ad3148ede956e9ef3464a061",
"assets/assets/Images/Unity/unity_project2.png": "df8ba82a39c09388e260dc6fb76bcff1",
"assets/assets/Images/Unity/unity_project3.png": "d931e2ffa4e50a8df6738038b0edbc89",
"assets/assets/Images/Unity/unity_project4.png": "b431a418e32beb6637077547511fd57c",
"assets/assets/Logo.jpg": "97ede6adef8a0fa6e70c363e3e2c100e",
"assets/assets/shiftGlobal.png": "a4aa513329596d3b537fba9a15ca5e53",
"assets/assets/ssuet.png": "0386442fa5f7b7fc63e9718bfe09a5d3",
"assets/assets/Videos/Flutter/flutter_project1.mp4": "dea52aad3275f0080e531c78253a87ff",
"assets/assets/Videos/Flutter/flutter_project2.mp4": "3db2412a530d578e5bcc415f93fded9e",
"assets/assets/Videos/Flutter/flutter_project3.mp4": "c5ff9970fb571e2f5f119a10fd691717",
"assets/assets/Videos/Flutter/flutter_project5.mp4": "55f326df1880b4955789559d35a1a2ea",
"assets/assets/Videos/Unity/unity_project1.mp4": "2ce1f6d81d0c7db79cc775a18584c1cf",
"assets/assets/Videos/Unity/unity_project2.mp4": "a8bd249cba3dd7dbb1a0ce1169c610b1",
"assets/assets/Videos/Unity/unity_project3.mp4": "84de272a4597f6fb06cd15a60ae8bb0f",
"assets/assets/Videos/Unity/unity_project4.mp4": "d592e542cd97cc28085747b13b129485",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "3b988682529754f8e4812864847edf34",
"assets/NOTICES": "495400b4f6427d8369143ff9cca4dfbd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "3c134cef6921e9e88ffb92d984a60a65",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "20aee612f84d129438e82bf3199db25b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"certifications.json": "206127425bc7a6e47a5a6ae5eb23f383",
"config.json": "3c50c534da20608ff044a23778f0b498",
"education.json": "73480dc03ba89a2ba5b9a40183735c7a",
"experience.json": "40dbba6fd9b70fdb2a722be04a8c9517",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "21b37cc96b130b2536e7672402243970",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ce03e9282b97e266ff0d7ad45b48b37",
"/": "1ce03e9282b97e266ff0d7ad45b48b37",
"main.dart.js": "0538201b29de74b758eaedd5a82c916c",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"projects.json": "cdcc8b8db06d3060429d6136a6c70954",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
