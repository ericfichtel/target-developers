(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5657],{91863:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return c}});var r=t(22122),o=t(19756),a=(t(15007),t(64983)),i=t(99536),s=["components"],l={},d={_frontmatter:l},m=i.Z;function c(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.mdx)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"downloading-storing-and-updating-the-rule-artifact-automatically-via-the-adobe-target-sdk"},"Downloading, Storing, and Updating the Rule Artifact Automatically via the Adobe Target SDK"),(0,a.mdx)("p",null,"This approach is best when you are able to initialize the Adobe Target SDK at the same time you initialize and start your web server. The rule artifact will be downloaded by the Adobe Target SDK and cached into memory before your web server application starts serving requests. Once your web application is up and running, all Adobe Target decisions will be executed using the in-memory rule artifact. The cached rule artifact will be updated based on the ",(0,a.mdx)("inlineCode",{parentName:"p"},"pollingInterval")," you specify during the SDK initialization step."),(0,a.mdx)("h2",{id:"summary-of-steps"},"Summary of steps"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Install the SDK"),(0,a.mdx)("li",{parentName:"ol"},"Initialize the SDK"),(0,a.mdx)("li",{parentName:"ol"},"Store and Use the Rule Artifact")),(0,a.mdx)("h2",{id:"install-the-sdk"},"Install the SDK"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"NPM")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"npm i @adobe/target-nodejs-sdk -P\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"MVN")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.adobe.target</groupId>\n    <artifactId>java-sdk</artifactId>\n    <version>1.0</version>\n</dependency>\n")),(0,a.mdx)("h2",{id:"initialize-the-sdk"},"Initialize the SDK"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"First, import the SDK. Import to the same file from which you can control your server start-up.")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Node.js")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Java")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import com.adobe.target.edge.client.ClientConfig;\nimport com.adobe.target.edge.client.TargetClient;\n")),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"To configure the SDK, use the create method.")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Node.js")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'const CONFIG = {\n    client: "<your target client code>",\n    organizationId: "your EC org id",\n    decisioningMethod: "on-device",\n    pollingInterval : 300000,\n    events: {\n        clientReady: startWebServer\n    }\n};\n\nconst TargetClient = TargetClient.create(CONFIG);\n\nfunction startWebServer() {\n    //Adobe Target SDK has now downloaded the JSON Artifacts and is available in the memory.\n    //You can start your web server now to serve requests now.\n}\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Java")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n    .client("<you target client code>")\n    .organizationId("<your EC org id>")\n    .build();\nTargetClient targetClient = TargetClient.create(config);\n')),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Both client and organizationId can be retrieved from Adobe Target by navigating to ",(0,a.mdx)("strong",{parentName:"p"},"Administration")," > ",(0,a.mdx)("strong",{parentName:"p"},"Implementation"),", as shown here."),(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("em",{parentName:"p"},"Insert image-client_code.png")))),(0,a.mdx)("h2",{id:"store-and-use-the-rule-artifact"},"Store and Use the Rule Artifact"),(0,a.mdx)("p",null,"You do not need to manage the rule artifact yourself and calling the SDK methods should be straightforward."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Node.js")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'//req is the request object from the server request listener method\nconst targetCookie = req.cookies[TargetClient.TargetCookieName];\nconst request = {\n    context: {\n        channel: "web"\n    },\n    execute: {\n        mboxes: [{\n            address: { url: req.headers.host + req.originalUrl },\n            name: "on-device-homepage-banner"\n        }],\n    },\n};\n\nTargetClient.getOffers({\n    request,\n    targetCookie\n}).then(function(response) {\n    //This Target response is coming from the In-memory Target artifact.\n    console.log("Target response", response);\n}).catch(function(err) {\n    console.error("Target:", err);\n})\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Java")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'MboxRequest mbox = new MboxRequest().name("homepage").index(0);\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n    .context(new Context().channel(ChannelType.WEB))\n    .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))\n    .build();\nTargetDeliveryResponse response = targetClient.getOffers(request);\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"NOTE"),": In the code sample above, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"TargetClient")," object holds a reference to the in-memory rule artifact. When you use this object for invoking standard SDK methods, it uses the in-memory rule artifact for decisioning. If your application is structured such that you need to call the SDK methods in files other than the one that initializes and listens to client requests, and if those files do not have access to the TargetClient object, then you can download the JSON payload and store it in a local JSON file to be consumed on other files, which need to initialize the SDK. This is explained in the next ",(0,a.mdx)("em",{parentName:"p"},"section"),"."),(0,a.mdx)("p",null,"Here is an example that starts a web application after initializing the Adobe Target SDK."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Node.js")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'const express = require("express");\nconst cookieParser = require("cookie-parser");\nconst TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n    client: "<your target client code>",\n    organizationId: "your EC org id",\n    decisioningMethod: "on-device",\n    pollingInterval : 300000,\n    events: {\n        clientReady: startWebServer\n    }\n};\n\nconst app = express();\nconst targetClient = TargetClient.create(CONFIG);\n\napp.use(cookieParser());\n\nfunction saveCookie(res, cookie) {\n  if (!cookie) {\n    return;\n  }\n\n  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});\n}\n\nconst getResponseHeaders = () => ({\n  "Content-Type": "text/html",\n  "Expires": new Date().toUTCString()\n});\n\nfunction sendSuccessResponse(res, response) {\n  res.set(getResponseHeaders());\n  saveCookie(res, response.targetCookie);\n  res.status(200).send(response);\n}\n\nfunction sendErrorResponse(res, error) {\n  res.set(getResponseHeaders());\n  res.status(500).send(error);\n}\n\nfunction startWebServer() {\n    app.get(\'/*\', async (req, res) => {\n    const targetCookie = req.cookies[TargetClient.TargetCookieName];\n    const request = {\n        execute: {\n        mboxes: [{\n            address: { url: req.headers.host + req.originalUrl },\n            name: "on-device-homepage-banner" // Ensure that you have a LIVE Activity running on this location\n        }]\n        }};\n\n    try {\n        const response = await targetClient.getOffers({ request, targetCookie });\n        sendSuccessResponse(res, response);\n    } catch (error) {\n        console.error("Target:", error);\n        sendErrorResponse(res, error);\n    }\n    });\n\n    app.listen(3000, function () {\n    console.log("Listening on port 3000 and watching!");\n    });\n}\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Java")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'import com.adobe.target.edge.client.ClientConfig;\nimport com.adobe.target.edge.client.TargetClient;\nimport com.adobe.target.delivery.v1.model.ChannelType;\nimport com.adobe.target.delivery.v1.model.Context;\nimport com.adobe.target.delivery.v1.model.ExecuteRequest;\nimport com.adobe.target.delivery.v1.model.MboxRequest;\nimport com.adobe.target.edge.client.entities.TargetDeliveryRequest;\nimport com.adobe.target.edge.client.model.TargetDeliveryResponse;\n\n@Controller\npublic class TargetController {\n\n  private TargetClient targetClient;\n\n  TargetController() {\n    // You should instantiate TargetClient in a Bean and inject the instance into this class \n    // but we show the code here for demonstration purpose.\n    ClientConfig config = ClientConfig.builder()\n        .client("<you target client code>")\n        .organizationId("<your EC org id>")\n        .build();\n    targetClient = TargetClient.create(config);\n  }\n\n  @GetMapping("/")\n  public String homePage() {\n    MboxRequest mbox = new MboxRequest().name("homepage").index(0);\n    TargetDeliveryRequest request = TargetDeliveryRequest.builder()\n        .context(new Context().channel(ChannelType.WEB))\n        .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))\n        .build();\n    TargetDeliveryResponse response = targetClient.getOffers(request);\n    // ...\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-sdk-guides-on-device-decisioning-rule-artifact-sdk-md-ed19487f1cbf940d15f5.js.map