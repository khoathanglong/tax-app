"use strict";var precacheConfig=[["/tax-app/index.html","0371d8fde5b783b8d3bc58ca14ad3c84"],["/tax-app/static/css/main.7903c9fd.css","1ae396f371cac1216382dbcfca660e33"],["/tax-app/static/js/main.623dfe10.js","8d536b8e076af59694e65e9d0060b929"],["/tax-app/static/media/alarmClock.810a7aa2.png","810a7aa24f8cbcdf293bb04424b504ec"],["/tax-app/static/media/cover.ff6cbb8c.jpg","ff6cbb8cf8ab2cdb4f1ddb96ce582985"],["/tax-app/static/media/employee.0c63d490.jpeg","0c63d49077deba4d011e795250b8686b"],["/tax-app/static/media/logo.7be5d83f.png","7be5d83fc761c9b7ad693dbcc1737362"],["/tax-app/static/media/people.07875bc6.png","07875bc693216de2f2daa0c6e29d1d8a"],["/tax-app/static/media/plus.206dcb64.png","206dcb641d023513a7740439b8de3467"],["/tax-app/static/media/save.9bf9c3b6.png","9bf9c3b6348fcd399ace5e76c09623dc"],["/tax-app/static/media/screen.f5096480.png","f5096480dd1aaff199a87a9e21d0481b"],["/tax-app/static/media/stars.adb1700f.png","adb1700fb6e0747dc846bba5c6a5af3c"],["/tax-app/static/media/tax.3a0aefb0.jpg","3a0aefb00253e0840416fb7fc51e3eee"],["/tax-app/static/media/travel.0a8d02b2.jpeg","0a8d02b2b0f8a23cb33abd7511387bc1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/tax-app/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});