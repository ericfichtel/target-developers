(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2168],{90256:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var a=t(22122),d=t(19756),i=(t(15007),t(64983)),r=t(99536),o=["components"],m={},s={_frontmatter:m},l=r.Z;function p(e){var n=e.components,t=(0,d.Z)(e,o);return(0,i.mdx)(l,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"identifying-visitors"},"Identifying Visitors"),(0,i.mdx)("p",null,"There are multiple ways in which a visitor can be identified within Target."),(0,i.mdx)("p",null,"Target uses three identifiers:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"tntId")),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("inlineCode",{parentName:"td"},"tntId")," is the primary identifier in Target for a user. You can supply this ID or Target will auto-generate it if the request doesn’t contain one.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"thirdPartyId")),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("inlineCode",{parentName:"td"},"thirdPartyId")," is your company’s identifier for the user that you can send with every call. When a user logs in to a company's site, the company typically creates an ID that is tied to the visitor's account, loyalty card, membership number, or other applicable identifiers for that company.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")," is used to merge and share data between different Adobe solutions. The ",(0,i.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")," is required for integrations with Adobe Analytics and Adobe Audience Manager.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"customerIds")),(0,i.mdx)("td",{parentName:"tr",align:null},"Along with the Experience Cloud Visitor ID, additional ",(0,i.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html"},"customer IDs")," and an authenticated status for each visitor can be utilized.")))),(0,i.mdx)("h2",{id:"target-id"},"Target ID"),(0,i.mdx)("p",null,"The Target ID or ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId")," can be seen as a device ID. This ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId")," is generated automatically by Adobe Target if it isn't provided in the request. Thereafter, subsequent requests need to include this ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId")," in order for the right content to be delivered to a device used by the user."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'curl -X POST \\\n\'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=10abf6304b2714215b1fd39a870f01afc#1555632114\' \\\n-H \'Content-Type: application/json\' \\\n-H \'cache-control: no-cache\' \\\n-d \'{\n  "context": {\n    "channel": "web",\n    "browser" : {\n      "host" : "demo"\n    },\n    "address" : {\n      "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n    },\n    "screen" : {\n      "width" : 1200,\n      "height": 1400\n    }\n  },\n    "execute": {\n    "mboxes" : [\n      {\n        "name" : "SummerOffer",\n        "index" : 1\n      }\n    ]\n  }\n}\'\n')),(0,i.mdx)("p",null,"The example call above demonstrates that a ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId")," does not need to be passed in. In this scenario, Adobe Target will generate a ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId")," and provide it in the response, as shown here:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n  "status": 200,\n  "requestId": "5b586f83-890c-46ae-93a2-610b1caa43ef",\n  "client": "demo",\n  "id": {\n      "tntId": "10abf6304b2714215b1fd39a870f01afc.28_20"\n  },\n  "edgeHost": "mboxedge28.tt.omtrdc.net",\n  ...\n}\n')),(0,i.mdx)("p",null,"The generated ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId")," is ",(0,i.mdx)("inlineCode",{parentName:"p"},"10abf6304b2714215b1fd39a870f01afc.28_20"),". Please note this ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId")," needs to be used when calling the Adobe Target Delivery API for the same user across sessions."),(0,i.mdx)("h2",{id:"marketing-cloud-visitor-id"},"Marketing Cloud Visitor ID"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," is a universal and persistent ID that identifies your visitors across all solutions in the Experience Cloud. When your organization implements the ID service, this ID lets you identify the same site visitor and their data in different Experience Cloud solutions like Adobe Target, Adobe Analytics or Adobe Audience Manager. Please note that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," is required when leveraging and integrating with Analytics and Audience Manager."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=10abf6304b2714215b1fd39a870f01afc#1555632114\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n  "id": {\n    "marketingCloudVisitorId": "10527837386392355901041112038610706884"\n  },\n  "context": {\n    "channel": "web",\n    "browser" : {\n      "host" : "demo"\n    },\n    "address" : {\n      "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n    },\n    "screen" : {\n      "width" : 1200,\n      "height": 1400\n    }\n  },\n    "execute": {\n    "mboxes" : [\n      {\n        "name" : "SummerOffer",\n        "index" : 1\n      }\n    ]\n  }\n}\'\n')),(0,i.mdx)("p",null,"The above example call demonstrates how a ",(0,i.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," that was retrieved from the Experience Cloud ID Service is passed to Adobe Target. In this scenario, Adobe Target will generate a ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId")," since it was not passed in to the original call which will be mapped to the provided ",(0,i.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," as seen in the response below."),(0,i.mdx)("h2",{id:"third-party-id"},"Third Party ID"),(0,i.mdx)("p",null,"If your organization uses an ID to identify your visitor, you can use ",(0,i.mdx)("inlineCode",{parentName:"p"},"thirdPartyID")," to deliver content. However, you must provide the ",(0,i.mdx)("inlineCode",{parentName:"p"},"thirdPartyID")," for every Adobe Target Delivery API call you make."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=10abf6304b2714215b1fd39a870f01afc#1555632114\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n  "id": {\n    "thirdPartyId": "B234A029348"\n  },\n  "context": {\n    "channel": "web",\n    "browser" : {\n      "host" : "demo"\n    },\n    "address" : {\n      "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n    },\n    "screen" : {\n      "width" : 1200,\n      "height": 1400\n    }\n  },\n    "execute": {\n    "mboxes" : [\n      {\n        "name" : "SummerOffer",\n        "index" : 1\n      }\n    ]\n  }\n}\'\n')),(0,i.mdx)("p",null,"The example call above shows a ",(0,i.mdx)("inlineCode",{parentName:"p"},"thirdPartyId"),", which is a persistent ID that your business utilizes to identify an end user regardless of whether they are interacting with your business from web, mobile, or IoT channels. In other words, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"thirdPartyId")," will reference user profile data that can be utilized across channels. In this scenario, Adobe Target will generate a ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId"),", since it was not passed in to the original call, which will be mapped to the provided ",(0,i.mdx)("inlineCode",{parentName:"p"},"thirdPartyId")," as seen in the response below."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n    "status": 200,\n    "requestId": "55de9886-bd14-4dee-819c-7d1633b79b90",\n    "client": "demo",\n    "id": {\n        "tntId": "10abf6304b2714215b1fd39a870f01afc.28_20",\n        "thirdPartyId": "B234A029348"\n    },\n    "edgeHost": "mboxedge28.tt.omtrdc.net",\n    ...\n}\n')),(0,i.mdx)("h2",{id:"customer-id"},"Customer ID"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html"},"Customer IDs")," can be added and associated with an Experience Cloud Visitor ID. Whenever sending ",(0,i.mdx)("inlineCode",{parentName:"p"},"customerIds")," the ",(0,i.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," must also be provided. Furthermore, an authentication status can be provided along with each ",(0,i.mdx)("inlineCode",{parentName:"p"},"customerId")," for each visitor. The following authentication status can be taken into consideration:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Authentication Status"),(0,i.mdx)("th",{parentName:"tr",align:null},"User Status"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"unknown")),(0,i.mdx)("td",{parentName:"tr",align:null},"Unknown or never authenticated. This state can be used for scenarios like a visitor that has landed on your site by clicking on a display advert.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"authenticated")),(0,i.mdx)("td",{parentName:"tr",align:null},"The user is currently authenticated with an active session on your website or app.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"logged_out")),(0,i.mdx)("td",{parentName:"tr",align:null},"The user was authenticated but actively logged out. The user intended and meant to disconnect from the authenticated state. The user no longer wants to be treated as authenticated.")))),(0,i.mdx)("p",null,"Please note that only when the customer id is in ",(0,i.mdx)("inlineCode",{parentName:"p"},"authenticated")," state will Target reference the user profile data that is stored and linked to the customer id. If the customer id is in ",(0,i.mdx)("inlineCode",{parentName:"p"},"unknown")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"logged_out")," state, the customer id will be ignored, and any user profile data that may be associated with it will not be leveraged for audience targeting."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359234570e044f14e1faeeba02d6ab23439914e\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n      "context": {\n        "channel": "web",\n        "browser" : {\n          "host" : "demo"\n        },\n        "address" : {\n          "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n        },\n        "screen" : {\n          "width" : 1200,\n          "height": 1400\n        }\n      },\n      "id": {\n        "marketingCloudVisitorId" : "2304820394812039",\n        "customerIds": [{\n          "id": "134325423",\n          "integrationCode" : "crm_data",\n          "authenticatedState" : "authenticated"\n        }]\n      },\n      "property" : {\n        "token": "08b62abd-c3e7-dfb2-da93-96b3aa724d81"\n      },\n        "execute": {\n        "mboxes" : [\n          {\n            "name" : "homepage",\n            "index" : 1\n          }\n        ]\n      }\n    }\'\n')),(0,i.mdx)("p",null,"The example call above demonstrates how to send a ",(0,i.mdx)("inlineCode",{parentName:"p"},"customerId")," with an ",(0,i.mdx)("inlineCode",{parentName:"p"},"authenticatedState"),". When sending a ",(0,i.mdx)("inlineCode",{parentName:"p"},"customerId"),", the ",(0,i.mdx)("inlineCode",{parentName:"p"},"integrationCode"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"id"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"authenticatedState")," as well as the ",(0,i.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," are required. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"integrationCode")," is the alias of the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/working-with-customer-attributes.html"},"customer attributes file")," you provided through CRS."),(0,i.mdx)("h2",{id:"merged-profile"},"Merged Profile"),(0,i.mdx)("p",null,"You can combine ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"t"),"hirdPartyID",(0,i.mdx)("inlineCode",{parentName:"p"},", and "),"marketingCloudVisitorId` in the same request. In this scenario, Adobe Target will maintain the mapping of all these IDs and pin it to a visitor. Learn how profiles are ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/3rd-party-id.html"},"merged and synced in real time")," using the different identifiers."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359234570e044f14e1faeeba02d6ab23439914e\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n      "context": {\n        "channel": "web",\n        "browser" : {\n          "host" : "demo"\n        },\n        "address" : {\n          "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n        },\n        "screen" : {\n          "width" : 1200,\n          "height": 1400\n        }\n      },\n      "id": {\n        "marketingCloudVisitorId" : "2304820394812039",\n        "tntId": "d359234570e044f14e1faeeba02d6ab23439914e.28_78",\n        "thirdPartyId":"23423432"\n      },\n      "property" : {\n        "token": "08b62abd-c3e7-dfb2-da93-96b3aa724d81"\n      },\n      "experienceCloud": {\n        "analytics": {\n          "supplementalDataId" : "23423498732598234",\n          "trackingServer": "ags041.sc.omtrdc.net",\n          "logging": "server_side"\n        }\n      },\n        "execute": {\n        "mboxes" : [\n          {\n            "name" : "homepage",\n            "index" : 1\n          }\n        ]\n      }\n    }\'\n')),(0,i.mdx)("p",null,"The example call above demonstrates how you can combine ",(0,i.mdx)("inlineCode",{parentName:"p"},"tntId"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"thirdPartyID"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," in the same request. All three IDs are also returned in the response."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-delivery-api-identifying-visitors-md-3d4975190adab6734e13.js.map