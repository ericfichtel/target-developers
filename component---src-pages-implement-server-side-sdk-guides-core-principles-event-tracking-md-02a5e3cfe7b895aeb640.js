(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8026],{22418:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return g}});var i,a=n(22122),o=n(19756),s=(n(15007),n(64983)),r=n(99536),d=["components"],c={},l=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),m={_frontmatter:c},p=r.Z;function g(e){var t=e.components,n=(0,o.Z)(e,d);return(0,s.mdx)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"event-tracking"},"Event tracking"),(0,s.mdx)("p",null,"Use Adobe Target's event tracking capabilities to effectively measure metrics that matter most for your business and use cases. Tracking events is key to measuring the success of your experimentation or personalization activities, since they tell you which variation or experience is winning or losing. Understanding this will help you understand how your users are engaging with your product or evolving in an ever-changing landscape."),(0,s.mdx)("p",null,"In order to track events through Adobe Target's SDKs, follow this 2-step process:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Install the SDK and deploy code that sends events to Adobe Target.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Create and activate an Adobe Target activity with a goal metric in the UI."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/cb523/report-settings.webp 320w","/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/797b9/report-settings.webp 640w","/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/4b075/report-settings.webp 1280w","/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/b6811/report-settings.webp 1366w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/72799/report-settings.png 320w","/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/6af66/report-settings.png 640w","/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/21b4d/report-settings.png 1280w","/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/ad00e/report-settings.png 1366w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/d32cc318a7fe3cb768524ea1764f900d/21b4d/report-settings.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,s.mdx)("h2",{id:"goal-metrics-and-events"},"Goal Metrics and Events"),(0,s.mdx)("p",null,"The following table defines the combination of goals and events you can define and measure with a Target Activity using Target's reporting capabilities:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Primary Goal"),(0,s.mdx)("th",{parentName:"tr",align:null},"Event"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Conversion"),(0,s.mdx)("td",{parentName:"tr",align:null},"Viewed a page, Viewed an mbox, and Clicked on mbox")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Revenue"),(0,s.mdx)("td",{parentName:"tr",align:null},"Viewed an mbox and Clicked on mbox")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Engagement"),(0,s.mdx)("td",{parentName:"tr",align:null},"Page Views, Customer Scoring, and Time on Site")))),(0,s.mdx)("h2",{id:"how-impressions-are-triggered"},"How impressions are triggered"),(0,s.mdx)("p",null,"Target SDKs call the underlying ",(0,s.mdx)("a",{parentName:"p",href:"../../../delivery-api/index.md"},"Delivery API"),". When an execute object with required parameters is within the request itself, the impression is incremented automatically for qualifying activities. SDK methods that increment an impression automatically are:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"getOffers()"),(0,s.mdx)("li",{parentName:"ul"},"getAttributes()")),(0,s.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"When a prefetch object is passed within the request, the impression is not automatically incremented for the activities with mboxes within the prefetch object."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"sendNotifications")," method can be used to manually send events to Adobe Target and trigger an impression."),(0,s.mdx)("h3",{id:"nodejs"},"Node.js"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"TargetClient.sendNotifications(options: Object): Promise\n")),(0,s.mdx)("h3",{id:"java"},"Java"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"ResponseStatus TargetClient.sendNotifications(TargetDeliveryRequest request)\n")),(0,s.mdx)("h2",{id:"sample-code"},"Sample Code"),(0,s.mdx)("p",null,"The following code samples work for all goal metric types whether it be Conversion, Revenue or Engagement."),(0,s.mdx)("h3",{id:"viewed-a-page-or-mbox"},"Viewed a Page or Mbox"),(0,s.mdx)("p",null,"This sample first gets a target mbox offer using ",(0,s.mdx)("inlineCode",{parentName:"p"},"getOffers"),". It then constructs a request with a notification based on that mbox offer."),(0,s.mdx)("p",null,"The notification ",(0,s.mdx)("inlineCode",{parentName:"p"},"type")," property is set to ",(0,s.mdx)("inlineCode",{parentName:"p"},"display"),"."),(0,s.mdx)("p",null,"To indicate a page was viewed, it is important to specify the the address object in the notification payload. Be sure to set the URL accordingly."),(0,s.mdx)("p",null,"For mboxes, you must set the mbox property on the notification object and provide an array of tokens based on the options array in the targetResult."),(0,s.mdx)("h4",{id:"nodejs-1"},"Node.js"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\nconst { v4: uuidv4 } = require("uuid");\n\nconst client = TargetClient.create({\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg",\n  events: { clientReady: onTargetReady },\n});\n\nasync function onTargetReady() {\n  const targetResult = await client.getOffers({\n    request: {\n      targetRequest,\n      prefetch: {\n        mboxes: [\n          {\n            name: "homepage",\n            index: 1\n          }\n        ]\n      },\n      sessionId: uuidv4()\n    }\n  });\n\n  const { mboxes = [] } = targetResult.response.prefetch;\n\n  const request = {\n    context: { channel: "web" },\n    notifications: mboxes.map(mbox => {\n      const { options = [] } = mbox;\n\n      return {\n        id: targetResult.response.id,\n        impressionId: uuidv4(),\n        address: {\n          url: "http://www.target-demo-site.com"\n        },\n        timestamp: new Date().getTime(),\n        type: "display",\n        mbox: {\n          name: mbox.name\n        },\n        tokens: options.map(option => option.eventToken)\n      };\n    })\n  };\n  // send the notification event\n  await client.sendNotifications({ request });\n}\n')),(0,s.mdx)("h4",{id:"java-1"},"Java"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'ClientConfig clientConfig = ClientConfig.builder()\n                .client("acmeclient")\n                .organizationId("1234567890@AdobeOrg")\n                .build();\n\nTargetClient targetClient = TargetClient.create(clientConfig);\n\nContext context = new Context()\n        .channel(ChannelType.WEB)\n        .address(new Address().url("http://www.target-demo-site.com"));\n\nTargetDeliveryResponse targetResult = targetJavaClient.getOffers(TargetDeliveryRequest.builder()\n        .context(context\n        )\n        .prefetch(new PrefetchRequest()\n                .mboxes(new ArrayList() {{\n                    add(new MboxRequest().name("homepage").index(1));\n                }})\n        )\n        .build());\n\nList<Notification> notifications = new ArrayList<>();\nList<PrefetchMboxResponse> mboxes = targetResult.getResponse().getPrefetch().getMboxes();\n\nfor (PrefetchMboxResponse mbox : mboxes) {\n    List<Option> options = mbox.getOptions();\n\n    notifications.add((Notification) new Notification()\n            .id(targetResult.getResponse().getRequestId())\n            .impressionId(UUID.randomUUID().toString())\n            .timestamp(System.currentTimeMillis())\n            .type(MetricType.DISPLAY)\n            .mbox(new NotificationMbox().name(mbox.getName()))\n            .tokens(options.stream().map(Option::getEventToken).collect(Collectors.toList()))\n            .address(new Address().url("http://www.target-demo-site.com"))\n    );\n}\n\nTargetDeliveryRequest notificationRequest = TargetDeliveryRequest.builder()\n        .context(context)\n        .notifications(notifications).build();\n\ntargetJavaClient.sendNotifications(notificationRequest);\n')),(0,s.mdx)("h3",{id:"clicked-an-mbox"},"Clicked an Mbox"),(0,s.mdx)("p",null,"This sample first gets a target mbox offer using ",(0,s.mdx)("inlineCode",{parentName:"p"},"getOffers"),". It then constructs a request with a notification based on that mbox offer."),(0,s.mdx)("p",null,"The notification ",(0,s.mdx)("inlineCode",{parentName:"p"},"type")," property is set to ",(0,s.mdx)("inlineCode",{parentName:"p"},"click"),"."),(0,s.mdx)("p",null,"You must set the ",(0,s.mdx)("inlineCode",{parentName:"p"},"mbox")," property on the notification object and provide an array of tokens based on the metrics array in the targetResult."),(0,s.mdx)("h4",{id:"nodejs-2"},"Node.js"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\nconst { v4: uuidv4 } = require("uuid");\n\nconst client = TargetClient.create({\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg",\n  events: { clientReady: onTargetReady },\n});\n\nasync function onTargetReady() {\n  const targetResult = await client.getOffers({\n    request: {\n      targetRequest,\n      prefetch: {\n        mboxes: [\n          {\n            name: "homepage",\n            index: 1\n          }\n        ]\n      },\n      sessionId: uuidv4()\n    }\n  });\n\n  const { mboxes = [] } = targetResult.response.prefetch;\n\n  const request = {\n    context: { channel: "web" },\n    notifications: mboxes.map(mbox => {\n      const { options = [], metrics = [] } = mbox;\n\n      return {\n        id: targetResult.response.id,\n        impressionId: uuidv4(),\n        address: {\n          url: "http://www.target-demo-site.com"\n        },\n        timestamp: new Date().getTime(),\n        type: "click",\n        mbox: {\n          name: mbox.name\n        },\n        tokens: metrics\n                  .filter(metric => metric.type === "click")\n                  .map(metric => metric.eventToken)\n      };\n    })\n  };\n  // send the notification event\n  await client.sendNotifications({ request });\n}\n')),(0,s.mdx)("h4",{id:"java-2"},"Java"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'ClientConfig clientConfig = ClientConfig.builder()\n                .client("acmeclient")\n                .organizationId("1234567890@AdobeOrg")\n                .build();\n\nTargetClient targetClient = TargetClient.create(clientConfig);\n\nContext context = new Context()\n        .channel(ChannelType.WEB)\n        .address(new Address().url("http://www.target-demo-site.com"));\n\nTargetDeliveryResponse targetResult = targetJavaClient.getOffers(TargetDeliveryRequest.builder()\n        .context(context\n        )\n        .prefetch(new PrefetchRequest()\n                .mboxes(new ArrayList() {{\n                    add(new MboxRequest().name("homepage").index(1));\n                }})\n        )\n        .build());\n\nList<Notification> notifications = new ArrayList<>();\nList<PrefetchMboxResponse> mboxes = targetResult.getResponse().getPrefetch().getMboxes();\n\nfor (PrefetchMboxResponse mbox : mboxes) {\n    List<Metric> metrics = mbox.getMetrics();\n\n    notifications.add((Notification) new Notification()\n            .id(targetResult.getResponse().getRequestId())\n            .impressionId(UUID.randomUUID().toString())\n            .timestamp(System.currentTimeMillis())\n            .type(MetricType.CLICK)\n            .mbox(new NotificationMbox().name(mbox.getName()))\n            .tokens(metrics.stream()\n                    .filter(metric -> MetricType.CLICK.equals(metric.getType()))\n                    .map(Metric::getEventToken)\n                    .collect(Collectors.toList()))\n            .address(new Address().url("http://www.target-demo-site.com"))\n    );\n}\n\nTargetDeliveryRequest notificationRequest = TargetDeliveryRequest.builder()\n        .context(context)\n        .notifications(notifications).build();\n\ntargetJavaClient.sendNotifications(notificationRequest);\n')),(0,s.mdx)("h3",{id:"viewed-a-view"},"Viewed a View"),(0,s.mdx)("p",null,"This sample first gets target views using ",(0,s.mdx)("inlineCode",{parentName:"p"},"getOffers"),". It then constructs a request with a notification based on those views."),(0,s.mdx)("p",null,"The notification ",(0,s.mdx)("inlineCode",{parentName:"p"},"type")," property is set to ",(0,s.mdx)("inlineCode",{parentName:"p"},"display"),"."),(0,s.mdx)("p",null,"For views, you must set the ",(0,s.mdx)("inlineCode",{parentName:"p"},"view")," property on the notification object and provide an array of tokens based on the options array in the targetResult."),(0,s.mdx)("h4",{id:"nodejs-3"},"Node.js"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\nconst { v4: uuidv4 } = require("uuid");\n\nconst client = TargetClient.create({\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg",\n  events: { clientReady: onTargetReady },\n});\n\nasync function onTargetReady() {\n  const targetResult = await client.getOffers({\n    request: {\n      targetRequest,\n      prefetch: {\n        views: [{}]\n      },\n      sessionId: uuidv4()\n    }\n  });\n\n  const { views = [] } = targetResult.response.prefetch;\n\n  const request = {\n    context: { channel: "web" },\n    notifications: views.map(view => {\n      const { options = [], metrics = [] } = view;\n\n      return {\n        id: targetResult.response.id,\n        impressionId: uuidv4(),\n        address: {\n          url: "http://www.target-demo-site.com"\n        },\n        timestamp: new Date().getTime(),\n        type: "display",\n        view: {\n          name: view.name\n        },\n        tokens: options.map(option => option.eventToken)\n      };\n    })\n  };\n  // send the notification event\n  await client.sendNotifications({ request });\n}\n')),(0,s.mdx)("h4",{id:"java-3"},"Java"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'ClientConfig clientConfig = ClientConfig.builder()\n                .client("acmeclient")\n                .organizationId("1234567890@AdobeOrg")\n                .build();\n\nTargetClient targetClient = TargetClient.create(clientConfig);\n\nContext context = new Context()\n        .channel(ChannelType.WEB)\n        .address(new Address().url("http://www.target-demo-site.com"));\n\nTargetDeliveryResponse targetResult = targetJavaClient.getOffers(TargetDeliveryRequest.builder()\n        .context(context)\n        .prefetch(new PrefetchRequest()\n                .views(new ArrayList() {{\n                    add(new ViewRequest());\n                }})\n        )\n        .build());\n\nList<Notification> notifications = new ArrayList<>();\nList<View> views = targetResult.getResponse().getPrefetch().getViews();\n\nfor (View view : views) {\n    List<Option> options = view.getOptions();\n    List<Metric> metrics = view.getMetrics();\n\n    notifications.add((Notification) new Notification()\n            .id(targetResult.getResponse().getRequestId())\n            .impressionId(UUID.randomUUID().toString())\n            .timestamp(System.currentTimeMillis())\n            .type(MetricType.DISPLAY)\n            .view(new NotificationView().name(view.getName()))\n            .tokens(options.stream().map(Option::getEventToken).collect(Collectors.toList()))\n            .address(new Address().url("http://www.target-demo-site.com"))\n    );\n}\n\nTargetDeliveryRequest notificationRequest = TargetDeliveryRequest.builder()\n        .context(context)\n        .notifications(notifications).build();\n\ntargetJavaClient.sendNotifications(notificationRequest);\n')),(0,s.mdx)("h3",{id:"clicked-a-view"},"Clicked a View"),(0,s.mdx)("p",null,"This sample first gets target views using ",(0,s.mdx)("inlineCode",{parentName:"p"},"getOffers"),". It then constructs a request with notifications based on those views."),(0,s.mdx)("p",null,"The notification ",(0,s.mdx)("inlineCode",{parentName:"p"},"type")," property is set to ",(0,s.mdx)("inlineCode",{parentName:"p"},"click"),"."),(0,s.mdx)("p",null,"You must set the ",(0,s.mdx)("inlineCode",{parentName:"p"},"view")," property on the notification object and provide an array of tokens based on the metrics array in the targetResult."),(0,s.mdx)("h4",{id:"nodejs-4"},"Node.js"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\nconst { v4: uuidv4 } = require("uuid");\n\nconst client = TargetClient.create({\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg",\n  events: { clientReady: onTargetReady },\n});\n\nasync function onTargetReady() {\n  const targetResult = await client.getOffers({\n    request: {\n      targetRequest,\n      prefetch: {\n        views: [{}]\n      },\n      sessionId: uuidv4()\n    }\n  });\n\n  const { views = [] } = targetResult.response.prefetch;\n\n  const request = {\n    context: { channel: "web" },\n    notifications: views.map(view => {\n      const { options = [], metrics = [] } = view;\n\n      return {\n        id: targetResult.response.id,\n        impressionId: uuidv4(),\n        address: {\n          url: "http://www.target-demo-site.com"\n        },\n        timestamp: new Date().getTime(),\n        type: "click",\n        view: {\n          name: view.name\n        },\n        tokens: metrics\n                  .filter(metric => metric.type === "click")\n                  .map(metric => metric.eventToken)\n      };\n    })\n  };\n  // send the notification event\n  await client.sendNotifications({ request });\n}\n')),(0,s.mdx)("h4",{id:"java-4"},"Java"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'ClientConfig clientConfig = ClientConfig.builder()\n                .client("acmeclient")\n                .organizationId("1234567890@AdobeOrg")\n                .build();\n\nTargetClient targetClient = TargetClient.create(clientConfig);\n\nContext context = new Context()\n        .channel(ChannelType.WEB)\n        .address(new Address().url("http://www.target-demo-site.com"));\n\nTargetDeliveryResponse targetResult = targetJavaClient.getOffers(TargetDeliveryRequest.builder()\n        .context(context)\n        .prefetch(new PrefetchRequest()\n                .views(new ArrayList() {{\n                    add(new ViewRequest());\n                }})\n        )\n        .build());\n\nList<Notification> notifications = new ArrayList<>();\nList<View> views = targetResult.getResponse().getPrefetch().getViews();\n\nfor (View view : views) {\n    List<Option> options = view.getOptions();\n    List<Metric> metrics = view.getMetrics();\n\n    notifications.add((Notification) new Notification()\n            .id(targetResult.getResponse().getRequestId())\n            .impressionId(UUID.randomUUID().toString())\n            .timestamp(System.currentTimeMillis())\n            .type(MetricType.CLICK)\n            .view(new NotificationView().name(view.getName()))\n            .tokens(metrics.stream()\n                    .filter(metric -> MetricType.CLICK.equals(metric.getType()))\n                    .map(Metric::getEventToken)\n                    .collect(Collectors.toList()))\n            .address(new Address().url("http://www.target-demo-site.com"))\n    );\n}\n\nTargetDeliveryRequest notificationRequest = TargetDeliveryRequest.builder()\n        .context(context)\n        .notifications(notifications).build();\n\ntargetJavaClient.sendNotifications(notificationRequest);\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-sdk-guides-core-principles-event-tracking-md-02a5e3cfe7b895aeb640.js.map