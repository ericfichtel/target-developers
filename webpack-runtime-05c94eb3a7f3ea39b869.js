!function(){"use strict";var e,n,d,s,t,c={},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var d=o[e]={id:e,loaded:!1,exports:{}};return c[e].call(d.exports,d,d.exports,a),d.loaded=!0,d.exports}a.m=c,e=[],a.O=function(n,d,s,t){if(!d){var c=1/0;for(r=0;r<e.length;r++){d=e[r][0],s=e[r][1],t=e[r][2];for(var o=!0,i=0;i<d.length;i++)(!1&t||c>=t)&&Object.keys(a.O).every((function(e){return a.O[e](d[i])}))?d.splice(i--,1):(o=!1,t<c&&(c=t));o&&(e.splice(r--,1),n=s())}return n}t=t||0;for(var r=e.length;r>0&&e[r-1][2]>t;r--)e[r]=e[r-1];e[r]=[d,s,t]},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,{a:n}),n},a.d=function(e,n){for(var d in n)a.o(n,d)&&!a.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:n[d]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(n,d){return a.f[d](e,n),n}),[]))},a.u=function(e){return({162:"component---src-pages-sdk-guides-on-device-decisioning-supported-features-audience-targeting-md",305:"5e65052d",461:"e82996df",489:"component---src-pages-api-profile-api-index-md",532:"styles",533:"component---src-pages-sdk-guides-integration-with-experience-cloud-aam-segments-md",548:"component---src-pages-sdk-guides-on-device-decisioning-troubleshooting-md",744:"component---src-pages-sdk-node-js-initialize-sdk-md",1010:"component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-downloading-storing-and-updating-md",1033:"component---src-pages-sdk-net-index-md",1083:"component---src-pages-sdk-guides-getting-started-index-md",1133:"component---src-pages-sdk-node-js-get-offers-md",1142:"component---src-pages-sdk-guides-core-principles-user-permissions-and-properties-md",1150:"component---src-pages-sdk-guides-core-principles-user-identification-and-bucketing-md",1206:"2dee68d8",1249:"component---src-pages-api-guides-recs-api-index-md",1408:"component---src-pages-sdk-guides-integration-with-experience-cloud-analytics-for-target-reporting-md",1466:"component---src-pages-sdk-java-utility-methods-md",1720:"component---src-pages-support-faq-index-md",1817:"component---src-pages-sdk-guides-sample-apps-index-md",2099:"component---src-pages-sdk-guides-troubleshooting-index-md",2138:"component---src-pages-sdk-java-proxy-configuration-md",2274:"component---src-pages-sdk-java-send-notifications-md",2544:"component---src-pages-sdk-guides-integration-with-experience-cloud-experience-cloud-id-service-md",2591:"component---src-pages-sdk-guides-integration-with-experience-cloud-index-md",2891:"component---src-pages-sdk-java-logger-md",3035:"0abf01d3",3063:"component---src-pages-sdk-node-js-logger-md",3125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",3185:"component---src-pages-support-index-md",3208:"component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-index-md",3409:"component---src-pages-sdk-node-js-get-attributes-md",3490:"b6f3ea4c",3587:"component---src-pages-api-guides-recs-api-fetch-recs-server-side-delivery-api-md",3751:"component---src-pages-support-contribute-index-md",3810:"component---src-pages-sdk-guides-supported-features-supported-features-overview-md",3894:"component---src-pages-sdk-java-get-attributes-md",4082:"component---src-pages-sdk-guides-on-device-decisioning-execute-ab-tests-with-feature-flags-md",4096:"component---src-pages-sdk-guides-core-principles-audience-targeting-on-device-decisioning-md",4198:"component---src-pages-sdk-guides-core-principles-event-tracking-md",4302:"component---src-pages-sdk-python-index-md",4387:"component---src-pages-sdk-guides-on-device-decisioning-index-md",4388:"component---src-pages-sdk-guides-on-device-decisioning-deliver-personalization-md",4473:"component---src-pages-sdk-guides-getting-started-net-md",4486:"component---src-pages-api-admin-api-index-md",4639:"component---src-pages-sdk-guides-index-md",4841:"component---src-pages-sdk-guides-core-principles-audience-targeting-audience-targeting-overview-md",5088:"component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-example-rule-artifact-md",5171:"component---src-pages-api-guides-recs-api-manage-catalog-md",5283:"component---src-pages-sdk-guides-on-device-decisioning-supported-features-md",5476:"component---src-pages-sdk-guides-core-principles-audience-targeting-server-side-decisioning-md",5932:"component---src-pages-api-guides-migrating-index-md",6146:"9f96d65d",6365:"component---src-pages-sdk-java-install-sdk-md",6530:"f5cc1685",6750:"component---src-pages-sdk-guides-on-device-decisioning-execute-feature-tests-with-attributes-md",6834:"component---src-pages-api-guides-index-md",6943:"component---src-pages-sdk-java-sdk-events-md",7059:"component---src-pages-sdk-java-initialize-sdk-md",7451:"component---src-pages-sdk-node-js-index-md",7579:"component---src-pages-sdk-guides-getting-started-java-md",7693:"component---src-pages-sdk-guides-getting-started-python-md",7705:"component---src-pages-sdk-guides-supported-features-allocation-method-md",7714:"8b61fb39",7728:"component---src-pages-sdk-java-get-offers-md",7745:"component---src-pages-sdk-guides-on-device-decisioning-manage-rollouts-for-feature-tests-md",8035:"component---src-pages-index-md",8357:"component---src-pages-sdk-node-js-send-notifications-md",8632:"component---src-pages-sdk-guides-on-device-decisioning-supported-features-activity-types-md",8673:"component---src-pages-api-guides-recs-api-manage-custom-criteria-md",8824:"component---src-pages-api-index-md",9002:"component---src-pages-support-community-index-md",9054:"component---src-pages-sdk-guides-supported-features-audience-targeting-md",9150:"component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-downloading-storing-updating-json-md",9198:"component---src-pages-api-guides-configure-authentication-md",9265:"component---src-pages-sdk-node-js-sdk-events-md",9278:"component---src-pages-api-delivery-api-index-md",9335:"component---src-pages-sdk-guides-getting-started-node-js-md",9340:"component---src-pages-sdk-guides-supported-features-activity-types-md",9351:"commons",9548:"component---src-pages-sdk-guides-best-practices-index-md",9551:"component---src-pages-sdk-node-js-install-sdk-md",9595:"component---src-pages-sdk-java-index-md",9598:"component---src-pages-sdk-guides-on-device-decisioning-supported-features-allocation-method-md",9791:"component---src-pages-sdk-guides-core-principles-index-md",9799:"component---src-pages-sdk-java-asynchronous-requests-md"}[e]||e)+"-"+{162:"aed98a2f7c05790b9200",305:"27722c13d02374efae78",461:"1ff4fae5c653dfaa3c0d",489:"ebd879300f719d0794da",532:"8ebd799b1143c6f67bdb",533:"736622dea3edbfeb4c7e",548:"7a72d07bc1e5fc2fed77",744:"e12921715802a5d65ffb",1010:"7e9ba869dd4dd5afc5ec",1033:"b89f4345671193d14849",1083:"a9ba796095515bcf544f",1133:"94ffd16fbf7ed4f71da4",1142:"74975b02f474738a151c",1150:"d0f2ca810c958b0e2e59",1206:"1dd5d0a3a3a7b2cb5603",1249:"2afeeaa39c0082f5afd5",1408:"9a29b4fa5be95d3d9b01",1466:"996373f2c28ca797b1ea",1720:"f66dd88b199a30103d34",1776:"48f1549ff186b50a6584",1817:"d8ea4589c7a90e1e4fad",2099:"ea56cef87d752475c30b",2138:"d6062f9f1ed68fe263b3",2274:"42dab9fa416763f45b47",2544:"da3bb079e2e43a70b1c8",2591:"667db348dc76804998e8",2891:"a08499d6a3464447d38d",3035:"3297a5cd8394d2642a6d",3063:"e94dd81bb4e72511ce1e",3102:"29dce23af9bf0547bbdd",3125:"e6c3d379cf3e3edb78d1",3185:"379ea86b024d9054239c",3208:"7c73de1865a4b3f2f082",3409:"f5c09d0609371a7d4313",3490:"6fc826b250d03922c0fc",3587:"4542722cd02f332a1877",3751:"e751ba033634e815da06",3810:"47d3edabf68c8f43df67",3894:"8c4222cb95a00b0c9726",4082:"a6ab38a1fa39c700ab6c",4096:"cde5442e29b9f98cedf9",4198:"e88657f201a21d7f3a93",4302:"741afc853f0bf909ca0e",4387:"71b8b388a5b03d9b5f22",4388:"6162fcbc4b70dbb43f69",4473:"068fd0a6e6f881a085ec",4486:"6beb47feaa83517df0d4",4639:"e26215fd1efc41ad38c8",4841:"36b9dffa9eca47f13533",5088:"e70dd8fc5b1b1ee371e2",5171:"3f02bf89ceffbe0b7a44",5283:"0da51769a80eceb1cb7f",5476:"4dc7ceed62c23f5312b5",5586:"85a31a87f38366e20cec",5932:"6aee73df712c735f1e24",6146:"4b8c3ec530228eed66cd",6365:"c86ae2d8348314f85819",6530:"c5b6eb8c497095a745da",6750:"d42cc6df601a1ac15437",6834:"0b20015c09994628760e",6943:"d806817d06cbdb26ae10",7059:"056a941bf6f992c3fc28",7451:"611d11edb0123c7ff225",7579:"0a1291d263946a130c40",7693:"46bd2cb9f07441b9172a",7705:"63c0cf10ac9cb8bf4510",7714:"00c52198b1b4bde69610",7728:"e644b051ce9dd5a7ded1",7745:"b496eafc86b7c05f48f9",8035:"e740c8d884861de0dc4e",8357:"ed8695cbcc180de2ada2",8632:"b1af072f16a6b6ab5e87",8673:"4b382f88dfa445cfbed5",8824:"872c49db8811269bddd7",9002:"e29f627ce621bdfa38d4",9054:"189095284ff086f23712",9150:"46101382bf2331d9b406",9198:"1fc1349b3f6b5349f5b1",9265:"ff89cbfc2ee63208f0da",9278:"b6bcd91cb03fccb3087d",9335:"b4d641b3a424ac96b660",9340:"cdd7d607c5a015c2d9f4",9351:"8e28e6ecb17c6e5b8060",9548:"3d7b38eeb1652222b256",9551:"67da4e6eb389dcdd40f8",9595:"68a2a0be42e88bbf5919",9598:"d6db922828d20babfc54",9791:"920d6212e9ad34acc437",9799:"9d9a4380d10f55448f28"}[e]+".js"},a.miniCssF=function(e){return"styles.53d22cf95f29e4134944.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},d="dev-site-documentation-template:",a.l=function(e,s,t,c){if(n[e])n[e].push(s);else{var o,i;if(void 0!==t)for(var r=document.getElementsByTagName("script"),p=0;p<r.length;p++){var f=r[p];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==d+t){o=f;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",d+t),o.src=e),n[e]=[s];var g=function(d,s){o.onerror=o.onload=null,clearTimeout(u);var t=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),t&&t.forEach((function(e){return e(s)})),d)return d(s)},u=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),i&&document.head.appendChild(o)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.p="/target-developers/",s=function(e){return new Promise((function(n,d){var s=a.miniCssF(e),t=a.p+s;if(function(e,n){for(var d=document.getElementsByTagName("link"),s=0;s<d.length;s++){var t=(o=d[s]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(t===e||t===n))return o}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){var o;if((t=(o=c[s]).getAttribute("data-href"))===e||t===n)return o}}(s,t))return n();!function(e,n,d,s){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.onerror=t.onload=function(c){if(t.onerror=t.onload=null,"load"===c.type)d();else{var o=c&&("load"===c.type?"missing":c.type),a=c&&c.target&&c.target.href||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=a,t.parentNode.removeChild(t),s(i)}},t.href=n,document.head.appendChild(t)}(e,t,n,d)}))},t={6658:0},a.f.miniCss=function(e,n){t[e]?n.push(t[e]):0!==t[e]&&{532:1}[e]&&n.push(t[e]=s(e).then((function(){t[e]=0}),(function(n){throw delete t[e],n})))},function(){var e={6658:0,532:0};a.f.j=function(n,d){var s=a.o(e,n)?e[n]:void 0;if(0!==s)if(s)d.push(s[2]);else if(/^(532|6658)$/.test(n))e[n]=0;else{var t=new Promise((function(d,t){s=e[n]=[d,t]}));d.push(s[2]=t);var c=a.p+a.u(n),o=new Error;a.l(c,(function(d){if(a.o(e,n)&&(0!==(s=e[n])&&(e[n]=void 0),s)){var t=d&&("load"===d.type?"missing":d.type),c=d&&d.target&&d.target.src;o.message="Loading chunk "+n+" failed.\n("+t+": "+c+")",o.name="ChunkLoadError",o.type=t,o.request=c,s[1](o)}}),"chunk-"+n,n)}},a.O.j=function(n){return 0===e[n]};var n=function(n,d){var s,t,c=d[0],o=d[1],i=d[2],r=0;for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(i)var p=i(a);for(n&&n(d);r<c.length;r++)t=c[r],a.o(e,t)&&e[t]&&e[t][0](),e[c[r]]=0;return a.O(p)},d=self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[];d.forEach(n.bind(null,0)),d.push=n.bind(null,d.push.bind(d))}()}();
//# sourceMappingURL=webpack-runtime-05c94eb3a7f3ea39b869.js.map