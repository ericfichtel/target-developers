(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8357],{45863:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return h}});var i=n(22122),r=n(19756),s=(n(15007),n(64983)),o=n(99536),a=["components"],l={},d={_frontmatter:l},m=o.Z;function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.mdx)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"client-hints-and-the-target-delivery-api"},"Client Hints and the Target Delivery API"),(0,s.mdx)("p",null,"Client Hints must be sent to Target on the offers request. Generally, it is recommended to send all available Client Hints to Target. For more information, see ",(0,s.mdx)("a",{parentName:"p",href:"../client-side/atjs/user-agent-and-client-hints.md"},"User-agent and Client Hints")," in the ",(0,s.mdx)("a",{parentName:"p",href:"../../implement/client-side/"},"Client-side Implementation")," section."),(0,s.mdx)("h2",{id:"delivery-api-direct-calls"},"Delivery API direct calls"),(0,s.mdx)("h3",{id:"from-the-browser"},"From the browser"),(0,s.mdx)("p",null,"In this case, the browser will send low-entropy Client Hints to Target automatically via request headers. But there are a couple browser-level limitations with this implementation. First - no Client Hints headers will be sent from the browser unless the request is being made over https. Second - Client Hints will not be sent on the first request to Target on the page. Client Hints headers will only be sent on the second request and all requests thereafter. This means that audience segmentation and personalization cannot be performed by Target on the first page visit. In order to get around both of these limitations, we strongly recommend using the User Agent Client Hints API in the browser to collect the Client Hints directly, and send them on the request payload."),(0,s.mdx)("h3",{id:"from-a-server"},"From a server"),(0,s.mdx)("p",null,"In this case the Client Hints must be manually forwarded from the browser to Target on the Delivery API request."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'curl -X POST \'http://mboxedge28.tt.omtrdc.net/rest/v1/delivery?client=myClientCode&sessionId=abcdefghijkl00014\' -d \'{\n  "context": {\n    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36",\n    "clientHints": {\n      "Sec-CH-UA-Model": "iPhone",\n      "Sec-CH-UA-Mobile": true,\n      "Sec-CH-UA-Platform": "iOS",\n      "Sec-CH-UA": "[ { \\"brand\\": \\"Chromium\\", \\"version\\": \\"91\\" }, { \\"brand\\": \\" Not;A Brand\\", \\"version\\": \\"99\\" } ]",\n      "Sec-CH-UA-Full-Version-List": "[ { \\"brand\\": \\"Chromium\\", \\"version\\": \\"91.1.1.1\\" }, { \\"brand\\": \\" Not;A Brand\\", \\"version\\": \\"99.1.1.1\\" } ]",\n      "Sec-CH-UA-Platform-Version": "10.0.0",\n      "Sec-CH-UA-Arch": "x86",\n      "Sec-CH-UA-Bitness": "64"\n    }\n  },\n  "execute": {\n    "mboxes": [{\n      "name": "home",\n      "index": 1\n    }]\n  }\n}\'\n')),(0,s.mdx)("h2",{id:"formatting"},"Formatting"),(0,s.mdx)("p",null,"Client Hints headers Sec-CH-UA and Sec-CH-UA-Full-Version-List have a different format than the results from the Client Hints browser API (navigator.userAgentData.brands/navigator.userAgentData.getHighEntropyValues). Both of these formats are accepted by Delivery API. The Delivery API will normalize the values into the format used in the request headers, which is important to keep in mind if accessing Client Hints in profile scripts."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-delivery-api-client-hints-md-07f07fd20ae2b74dc79e.js.map