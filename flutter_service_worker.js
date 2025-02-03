'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

<<<<<<< HEAD
const RESOURCES = {"assets/AssetManifest.bin": "128f562c0f18cf81d9de3986a3fdd801",
=======
const RESOURCES = {".git/COMMIT_EDITMSG": "648ebaaed3f3fe950be420e62f84bcb1",
".git/config": "93ab338ac57205b56261302860b6851c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f9dceeac7df10601cf5bb0e85156b3cb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b2b089a5d05f7babffc3bd0c86566c73",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "915507e4ff32d62064bd0e7e55d0b34c",
".git/logs/refs/heads/main": "6644be91b6f17d185faf58cf7021fba4",
".git/logs/refs/remotes/origin/main": "6375d1746bc0a10cbb1265bc413f3285",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/391bfffb1c6279c669d751a7f396deb4bceb5f": "d6fadb4e73202899ba17fdd54361273e",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/b0fd6c6f21ae2261cef642af1b7c92b565befb": "76291b81a623ce944c0a999367f7e167",
".git/objects/06/b8f183cfbf19bd474ce50d3f8faddd2e241832": "8625c1b51ba23a6b635ca8e834e3761a",
".git/objects/08/b8a0aa65a35be58c5f8b80e0c2c0f880968d0b": "101d2b8ffec911a6ea18032419db260e",
".git/objects/09/1a542124546eb7752da8b0220031afd4482621": "172d60a86d74ab2f3a619010aed46507",
".git/objects/09/a8ac2925bba0b6841af79e04380e467388fc97": "945b0becd80e055a724e02e124bc177d",
".git/objects/0f/b4826fcd0f570288004536c12d2b294450c593": "44c1de2f01afbde68b695ca4c5faf505",
".git/objects/12/866697fee51ba07fb7657d3fbbe58580f77b8c": "cea2755833c27d7b74d2d6f9d748455d",
".git/objects/17/d4d0d5741b0fb140d490862bd5bb512b5f38a9": "9a2077cf9485df2f8439611418837bce",
".git/objects/1c/5454513e9737bce6a9c00e02f6f9fca7ef391e": "1501a35c784585bb76e155eb14d0307f",
".git/objects/1f/1e9358bc20792bcc181f5bdc31f340ec9b3c32": "071701a66c3aaeaf19ff5b2aa8bcf582",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/f7af1c0760e63742c6b5ae4801d3e91d80a6ad": "85f3af7b0fa39e7028da065401067d0e",
".git/objects/20/a0f9c760d8abe8d0ccfdc67736ce1b40cb3b1c": "6bb151368f9afec2ed5e61f983acfcae",
".git/objects/22/0576b14eb8f45ad392f28731f52bbada1fb890": "f024393f353bd3d6a96497bdbf408986",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/916aba171032552db06c6882fddb8b0f3a22f1": "39e722f0d9d6763416d0f81458a93210",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/1cf928251e9b13557765fa4dee5f6fe622fc8e": "bb563528afe8b27463c201472979d489",
".git/objects/37/cca95214434f192dc6deea673b7ca39c47df46": "c63d06f55f947ab5dcca0a4866135589",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/d42ef238ba32562d0284b6d16ae42d3dea7ca1": "5903edf050270e43a9dee341cbaea4c1",
".git/objects/3f/8e3587ad2023fd5b368ddb834405ef2e5de431": "053bbe04285fc14e3b07129b08797988",
".git/objects/42/d5dc285a700949b5a29a0efa81ce02512cbef1": "ec29d5a29a6dab511dd14f7ee12c2cbf",
".git/objects/4c/303d3700128394b0ff8814674baac3d23f36b3": "b35b2ff2fd261c537f2fa6b1ea2f68fc",
".git/objects/4f/3c59853437f15b2a4f1742658bb7de8a390b43": "a129c6feeb6f7669d58760437407b37a",
".git/objects/53/db1a04b1f3f0f25b6f9fb5cbbcbe352e26987f": "cf903634ac4cb035913e78987e060e19",
".git/objects/59/55649978377bb2aad7993c926036346d3823c2": "cd1f1f587670e81ab31df8a8ceebb492",
".git/objects/59/ff543d0d9f3afa425b5b17fb0499cd011933d8": "a4ecf7843985528451634f2314e048a1",
".git/objects/5a/26ae950e4535bec00232fdd9d0cbe30bcc42ac": "5eede3e56ac7c91d308426c070529def",
".git/objects/5b/b5e48e3a4c6bd2ca4a6fa6c15d7259b771ce7a": "2b84c4d7ed046cd83ee1973215071d8d",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/66572c472b6be7f09f91e2403bbb13f781a643": "046baa79f9f5fb911a9b88f0eadaf1fe",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6d/20e69ee0175cae9bca3ad37cf851ceeec6ad92": "b6917b38bb1a2ffb780d0720a7c0c99d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/0112d0984bde59bf5812aebb3bbf873a79c2a8": "9eed0fa7c8597bf826213f80726e12a9",
".git/objects/7c/e69de0bb81479e03013af2d6c7ef7c22c36acb": "05a4c84e23e488b2268bfd8e41ec6b87",
".git/objects/7d/2d26e4abccbb4540bd8ed3dae235c6eef0257b": "7d5d7c88df777c1f8650011779218db9",
".git/objects/81/4a44f908f13ed6857ead55edf5996220a606b5": "8e65536fe420b55e8eac496f8cbd13e9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/e5e5e7bb1b2cae02cae71567c2aa17a4063074": "b679f2b0129dbbacaa442378add3163e",
".git/objects/86/6af98d659391264fbcfaec70e68b2e855cb0a3": "60709be8a8e7527beacf64278a122faf",
".git/objects/86/8ef80d3bdcd3d4a558e9c959d708a139b10717": "a4bbd1543a5e5a5aa8237364f38d02c2",
".git/objects/87/181cda164eb6e1b9dca16735c3c82dc69a4ef3": "2d126bed966ad8cdc62db70683e52c60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/92/7cf6bda5b72a60b0998c18cc8024b20caae664": "27b09bb14e6527735c39df8cd05ba06e",
".git/objects/93/e30b8186c6408ee3f46885b3b1eea3a6660242": "f7f04528bddbdc7e8191703b5e42d36c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/1cf99b3304bce51c540aa44cbc46825bc96800": "628d0a02bd452f837af693811aac7005",
".git/objects/9a/e4d1356c94c217e3d711de0195780af73c2e9d": "eb0cb048f29906fd91bbc855b164021f",
".git/objects/9b/8f5ac7ce0ca76813227261885a2ab8e8143f03": "fd3da95e5e8b13026b1eb9d3d63e1487",
".git/objects/9d/26905ffce55ed5098e99b9eafe9522f21f068c": "44e38edbec6a53caf62a84162080332d",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/2199e73758a6219ce378bc91f9e55b81b51d37": "9d921acea0aeb75b384d858f7d2b831b",
".git/objects/a0/0569a140580bc5e92977eb390d866a5632192c": "66d85b431df7acdf3d0b08f5cc3df32a",
".git/objects/a4/a74046faff09f99d4ad681bccd4884b705c870": "5db150215eeb405e9f74d05f546f33e8",
".git/objects/a5/44b156fe8752d6715187903412b8a5e494c270": "4d1223db2eaf9e10e95e32f17194436e",
".git/objects/a5/8ba84c1408088c87505ff0abe6ed33cdf72c82": "063356f81ffdd151facb8ee30a1a16c5",
".git/objects/a8/01861999eb6e8043d6df03721eb6a5bf6b5c21": "752c58f849b77add4bd22d9f5670e0ea",
".git/objects/a9/4ae31e464fdf016835c260088139a6ade35e0c": "a41b94509a81b484ff714d01c9fd82f5",
".git/objects/aa/35110520d9cc02ae0611e4c592cf5f61692aea": "28d39894f3f374d6eea0c77d6bba1a72",
".git/objects/af/3175c3e945d0c8219e199072d33a8cda643912": "6d69a5261876d523570a88e1508490b6",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/734f542c09283c34e74b57eef88c24ff292335": "163c04d615741ec2f47e75e7da423318",
".git/objects/b6/44fff0f3ae083b38f392f6c2e799621f4233d6": "ba877df2f0ffede83cb5070de21f7961",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ad7ae90c717f8bbeb687ebcd8a765ba4c6c148": "714455e71e774f4daa0675f266b60c9f",
".git/objects/bd/244b11d8d602acf092dbfe5dbd0d2f66bef0b5": "c20c2c7ed9169dbd51834940acc6f2b3",
".git/objects/bf/36f03ecdc23cd60e12e56ae2ea2c86308b6a6e": "936b0d3793d7dec3364bb24ba125b5e3",
".git/objects/bf/f719fa97e94f92db821724c3b0f53a203df4de": "2d588a630f9a809688ec0ba547fb758e",
".git/objects/c1/0c08e9fd5eb0aaf8c35fc870e797c236fe623d": "45f6227b6438f2651d4727fb81c47640",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/a891e92db2b598a5ba17bc2e1c0337c7e36fd4": "5ab45c504684867fdd40e0dcd3142504",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e34a873120a62c7ecfc81c0535ba1347ae2919": "431361adb528d2ea7a2ef535e49e7999",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/07e38758f6193b19910afcd94f13b1f33dbb2c": "fdc0d4812f0a753a29a63c41da26c53c",
".git/objects/f8/903110d842c188a2db6b607bbe550d78d4d1a4": "a95fa4f9eca4eb315967675ba236dddd",
".git/objects/fa/484dcd7ab3b9a056bd03725720af47dfa099fc": "b6655989a52f0613ac0b5abef6ff4d81",
".git/objects/fa/8e1feb0bb94af836951233ba790b11ff15da53": "9b3a33cad0fee75fd40e2eb92e99c2f7",
".git/objects/fa/b72cb4b9d77565b5578bd926e08416a5d785ac": "a4053815e416d2ac12e2bffcb6f48be7",
".git/objects/fd/a5538f7c372866a9b7c7cfc1c0ac818cf87e6c": "cda11a2d90099385fbb0210644871fed",
".git/objects/fe/55b76ef35420f8ea447ccb99d53ce517f2cc36": "79d7230dde2d6c15909e9b22044e5c15",
".git/objects/fe/859c8e0ba380761747c1205b91a8ac4e079848": "a904a75b3830adb5da83e0deddc3c4bb",
".git/ORIG_HEAD": "29536e782fbb45d0137ac516b13135ec",
".git/refs/heads/main": "29536e782fbb45d0137ac516b13135ec",
".git/refs/remotes/origin/main": "29536e782fbb45d0137ac516b13135ec",
"assets/AssetManifest.bin": "128f562c0f18cf81d9de3986a3fdd801",
>>>>>>> 192afa94303715304a1f9832980e784f531bbaeb
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
<<<<<<< HEAD
"flutter_bootstrap.js": "5611c52c882bb8b135bf90f6a6e68217",
=======
"flutter_bootstrap.js": "1003ac9f0879bc3750e6668972e18b2c",
>>>>>>> 192afa94303715304a1f9832980e784f531bbaeb
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "066f3c302386b8e4cf506d95d31997a3",
"/": "066f3c302386b8e4cf506d95d31997a3",
"main.dart.js": "fa73d6f48664deec8e9e42e4fc96118f",
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
