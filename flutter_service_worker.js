'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "128f562c0f18cf81d9de3986a3fdd801",
"assets/AssetManifest.bin.json": "320be2f070a0b1758f0ea2c5086ff576",
"assets/AssetManifest.json": "01f18c3ce18b4c53e47aafb1800101cf",
"assets/assets/images/desktobIcon.svg": "1475bf3af93d6e029c3a87e12588efa2",
"assets/assets/images/Facebook%2520-%2520Negative.svg": "0d23bba2bae9d71ce1248617cbae40fe",
"assets/assets/images/flutterAdvancedCourseMvvM.jpg": "3edafe6f49a087fa4bf5785eb6a4905f",
"assets/assets/images/flutterPayment.jpg": "3bafedf6ec1e4c35d965301a6cb303f5",
"assets/assets/images/flutterResponsovieCourse.jpg": "65a13a719dc41e0691f62dc677072015",
"assets/assets/images/gitAndGithub.png": "ad8ebd617150419fa04abb6f3588f920",
"assets/assets/images/github_icon.svg": "4d56b3683c48ed7c70e76b81fb262a4a",
"assets/assets/images/Instagram%2520-%2520Negative.svg": "df2a3de949e93fe3fe9f5cb7ab894a30",
"assets/assets/images/LinkedIn%2520-%2520Negative.svg": "600e402e4e020efca4954955ca99216e",
"assets/assets/images/moamrCircle.jpg": "120dcac37dcf24545ccbc0b08ca52c2b",
"assets/assets/images/moamrCircleWhite.jpg": "90dc5ac78a6a02225d0e5d6096e00bdb",
"assets/assets/images/mobileApp.svg": "e1693637c75b765b57f143aa06809662",
"assets/assets/images/softSkills.png": "171726a100fa2280e265ba9fedcf223e",
"assets/assets/images/splash_test.gif": "164d12c6b33ab49d871e3888a0ef11dd",
"assets/assets/images/tablet.svg": "255dfce91b845193ebf705045bade6e2",
"assets/assets/images/Twitter%2520-%2520Negative.svg": "2c34f20387d630061c7593768558411a",
"assets/assets/images/webIcon.png": "a5573d74210aee456a0a073e110b49d2",
"assets/FontManifest.json": "586a577884950e57bf983284a5b6ab08",
"assets/fonts/MaterialIcons-Regular.otf": "fb807d9de7b6aa7e3d67babdd595382b",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/NOTICES": "9530b6da4a2e8bcc7deb3a36857aa6e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "67e4f56e53ffb663bc0db858a34c913a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ec085fc3b8d294f8536567b2efc21b6",
"/": "9ec085fc3b8d294f8536567b2efc21b6",
"main.dart.js": "c7f663c1a1f3cecfa8c565f7ccfbc01f",
"manifest.json": "3ffe0642f03ea16343debcc34f02e7ad",
"splash/img/dark-1x.gif": "82b31f73963056d6e1e0492efc4703f2",
"splash/img/dark-1x.png": "5fb2b9ff0ccee051312cfed9cb1e2fd1",
"splash/img/dark-2x.gif": "29e5d6fb38a5a2b78246205697fb66d5",
"splash/img/dark-2x.png": "ff7aae727dd12b30ebd860687eb55d27",
"splash/img/dark-3x.gif": "e90ab87341ac8803b7dd720d05c88a58",
"splash/img/dark-3x.png": "0bb402ec1eb2ad23934da9dde64680b5",
"splash/img/dark-4x.gif": "50d7f365883773b827cb516424933bcc",
"splash/img/dark-4x.png": "2210a4dc6f81bd00163bcf6b63b0ce3e",
"splash/img/light-1x.gif": "82b31f73963056d6e1e0492efc4703f2",
"splash/img/light-1x.png": "59a3616e42567e9dba451f515cc0def3",
"splash/img/light-2x.gif": "29e5d6fb38a5a2b78246205697fb66d5",
"splash/img/light-2x.png": "5479bf6bc578c05f3627f814d4f11da6",
"splash/img/light-3x.gif": "e90ab87341ac8803b7dd720d05c88a58",
"splash/img/light-3x.png": "68d36fc4f2f17d6c92190718ff97fccd",
"splash/img/light-4x.gif": "50d7f365883773b827cb516424933bcc",
"splash/img/light-4x.png": "ca0d96a3a4d405c0adc5caa5d7fa300d",
"version.json": "bac40db0904e7dfbc0ecabf69add18a0"};
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
