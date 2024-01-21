'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ba1fae5e2dcbe6ef7f1ed84eb0368bc2",
".git/config": "13de29852619c8b82630115072ac0aa0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "06d9e357a1eeff15d98ffcefdc81f272",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0c0427a108dd1cd63899b8a4dfb310c7",
".git/logs/refs/heads/master": "0c0427a108dd1cd63899b8a4dfb310c7",
".git/logs/refs/remotes/origin/master": "3fc13b5d1fad4d5238b009a1f5bdb00c",
".git/objects/02/44b5fbc07736a117eb40b6d1120e2c7d4c0e76": "7f19ad7a8f56d22689124607515787ad",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/b3ab7935853e8c48aeaf962e83db87a1b53e61": "a73df42e131f34670da2526cecaeb6fc",
".git/objects/09/df7352e54c2d1616e94bdc63ad7b1a6634fac6": "c122847d1dd2874f1ab197629c605e09",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/66eae4d65f1fad5f4e3ab90ca78fa911b825b0": "a22c454d5b513b9abdbc6f9d7614d067",
".git/objects/26/5529e48150b06f93961f53b20ab65994237f4e": "13dd479b079d29bfd531c905e53a250f",
".git/objects/28/008908fba409118bb61628dee3a90c64c32348": "4748a81220bee9bc1373347e812719da",
".git/objects/33/e1f1eb30672523fc13f7f557c9f02f3b0948a0": "bcab425d041607b3c43eb5f59f928680",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/7293881577c002b5ae5c3ec0f1239de6e4eb1c": "9aa96b5165f85603ca6b802217f5e46c",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/2467afddb8a0d1d4240ba1386fd3121f70322b": "f3ab45470955c3fba2525aee3c86c5f9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/1595ff4c24f5ff90e3d70799b3223d855a064e": "95ca0a766d34e722cb47a300515978ab",
".git/objects/5b/c5d47fea7f5cf1e18d2c137a571d1cd86f2a9e": "aa65e971351804823f8d0ee610307da1",
".git/objects/5b/c8d28b6e45c3240d028731ca8970e1dabd1a69": "30d31a7f1380408eb334bafed312de87",
".git/objects/61/59a1f2efd3c7bcfd463a3356aa19a7cfdc1c6e": "b59953679c0febbb8a2bfaabc72a1fc6",
".git/objects/68/b939c6d39d257d6e444c6bccc1002e924d531b": "8d4bb3003b780d38078e5176509615fb",
".git/objects/68/f54104ee99f44e6ac36bcd2e84e45a954dc0e5": "7e71392461ecff25985eab32e17f9348",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6f/61ba31999b4bf58c57550eab10deff6b7bfd01": "66d6beb2a3c3ed6563c91e53829607d6",
".git/objects/71/c863e52840a2798d4ebcc5de1b834b45277e80": "daab73d744b86de2ffa347b1e65bf0b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f8e30f4335390f700b17a60f8bb26634c475a8": "4535d5828df161855b3c2fababd98306",
".git/objects/8a/24023a9542b7b4147bdf90373ac13b8bb48cdd": "9a3cc3474056a0ea8a550ad2c1070bd4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/ba4e130be775a603d65293dede7f15ab1f06a7": "1a34c53778b712ee846124a1623de973",
".git/objects/95/5f98626d22519087ba714f13d29db88e3ac7de": "e8c68b36c6bb6a4d649fbbcd04837439",
".git/objects/9b/de258209e3661a4c372b3c6f124af1b5aaa77e": "5b4fba4edacad45d82224ce249319e94",
".git/objects/a1/cabdb6c7d0d9305d55270a86cc63a9dce7b34e": "1bebd7741e227d3909f47ce5a410f12f",
".git/objects/a3/7e16e8959b370250909e49205a7ba3d0aa0579": "2ff1ca692bcfd88f1d7020171b6785fb",
".git/objects/a9/317d425cd4c049b4135e18bcda72d7c0da8394": "040a38ad0a1d7482d690db6497535925",
".git/objects/b1/32b8c14aab4df7745e9ca47eda76a4c6b56a6d": "467885ae08f67fbacb48f57d38397736",
".git/objects/b2/5fb4f6c0009083cd36392bf170cea55c75b874": "f77a8ccaceb71cdd0e54466155fe1e49",
".git/objects/b5/14e6888c4b7890145a28118258b784e89fae71": "74dcac251d9cf23f8c93261a9b3a0475",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/1962a201449516b55ff247bea85214533e8f9a": "8b7ff1889c61f03f05d279777f7ceb7d",
".git/objects/ca/cb9706de450ccf98fd9d00a2612ed86691fcfc": "a9540dc12fd207795ac5616baf4eec6c",
".git/objects/d5/105b62516e4d85a2719f056ddc35fcfb76db41": "428799be90b05571717e723ebd0b959b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/488a27a8ce265193c73658139e9e7dd2988077": "2211906bfb9b582a085f5f8c76e6954f",
".git/objects/e5/b06ffc497217cc94b623b2838deee849dc7dd3": "cb221d9552ad565afed07e1af2d4464a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/c31e08aa69363c23f1cafa06bb8fef67cf5b25": "97a0be03ce88df23de9b52467e19c816",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/112ce65bcc37b3a008fa893d837374e8ce82ea": "5a95959704cd6b9e3a27e0993665de7e",
".git/objects/f7/5548eef39282003a6fcc3e91fa829ce1e5f764": "fd1c13cf67ec649b681bbdf9b9502ee3",
".git/objects/fd/3740395fdb43b6a09872f7b3c145b8ebc731a1": "dec974b50dd69bff7d759b7bddd582d4",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "266b0cd566f781edaf6f45292f09064f",
".git/refs/remotes/origin/master": "052aee87a957835fb87d701fad6f0b68",
"assets/AssetManifest.bin": "775e79653352ad6790fc4a5432ffa260",
"assets/AssetManifest.bin.json": "9e3f0ddb10807f218cfea11582035f03",
"assets/AssetManifest.json": "8198915365fd48ccc9869a2ba121800c",
"assets/assets/images/about-image.png": "f0ab9ce0a031e111d642a94790e829a9",
"assets/assets/images/c.png": "b4dd4c5e18b3c0a0c35018f37c2b2f94",
"assets/assets/images/cpp.png": "0b849c72f38362fe12072a4916660013",
"assets/assets/images/css.png": "10550ee86b47ea33b21c4df8c6a053e8",
"assets/assets/images/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/firebase.png": "9ad79828751ede5dbe9f92f97237bdf2",
"assets/assets/images/flutter.png": "70135fb5474e65fa678024389564b59e",
"assets/assets/images/git.png": "2fb3f38b185dc46158e3c53d5ec6f5cf",
"assets/assets/images/Group%25202.png": "26ba0cf3d8d595c6cc93b6975dfa47ed",
"assets/assets/images/html.png": "666c190e1f7a462852f10506d3375b5d",
"assets/assets/images/js.png": "15a4866e67b5a9aac43ae3af08de6721",
"assets/assets/images/logo.png": "b34d2cbde28fc82a8d910b78054cf2df",
"assets/assets/images/project_1.png": "c7bdeb18880b1b9d0fe145ef927409f1",
"assets/assets/images/project_2.png": "3e017b09f77658c75f34ee15c3312bc0",
"assets/assets/images/project_3.png": "30c2fb81c47fe53ab1ca1a2260612496",
"assets/assets/images/project_4.png": "b2e18ca25b5fdc6097589b8c47434122",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7864e877a312c797d6d7fe2a33d750af",
"assets/NOTICES": "14af9f83e7eb0c24326b9040a8590718",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9e0f571ac1ccec7aee5318c9d71a9436",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "97a82807f35e62f64636bd858aeca86e",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "79a3684d291202e0aed71723b8d74b5c",
"icons/Icon-512.png": "894cc822af3bb0f9b08305495767cd55",
"icons/Icon-maskable-192.png": "79a3684d291202e0aed71723b8d74b5c",
"icons/Icon-maskable-512.png": "894cc822af3bb0f9b08305495767cd55",
"index.html": "c7673dbe827af2e0959e6e92284c8899",
"/": "c7673dbe827af2e0959e6e92284c8899",
"main.dart.js": "7d15999f8beafc05d3d57397be156f3a",
"manifest.json": "6c2921dd496bac31a6f652f8ced600e9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
