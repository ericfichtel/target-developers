(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[533],{19355:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var r=n(22122),i=n(19756),a=(n(15007),n(64983)),s=n(99536),o=["components"],l={},d={_frontmatter:l},m=s.Z;function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.mdx)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"aam-segments"},"AAM segments"),(0,a.mdx)("p",null,"Adobe Audience Manager segments can be leveraged via Adobe Target SDKs. In order to leverage AAM segments, the following fields need to be provided:"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"NOTE"),": AAM segments are not supported for on-device decisioning activities."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"locationHint")),(0,a.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},"DCS Location Hint is used to determine which AAM DCS Endpoint to hit in order to retrieve the profile. Must be >= 1.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")),(0,a.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},"Marketing Cloud Visitor ID")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"blob")),(0,a.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},"AAM Blob is used to send additional data to AAM. Must not be blank and the size <= 1024.")))),(0,a.mdx)("p",null,"The SDK will automatically populate these fields for you when making a ",(0,a.mdx)("inlineCode",{parentName:"p"},"getOffers")," method call, but you will need to ensure a valid visitor cookie is provided. In order to get this cookie, you need to implement VisitorAPI.js in the browser."),(0,a.mdx)("h2",{id:"implementation-guide"},"Implementation Guide"),(0,a.mdx)("h3",{id:"use-of-cookies"},"Use of Cookies"),(0,a.mdx)("p",null,"Cookies are used to correlate Adobe Audience Manager requests with Adobe Target requests. These are the cookies used in this implementation."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Cookie"),(0,a.mdx)("th",{parentName:"tr",align:null},"Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"visitor cookie"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"AMCVS_XXXXXXXXXXXXXXXXXXXXXXXX%40AdobeOrg")),(0,a.mdx)("td",{parentName:"tr",align:null},"This cookie is set by ",(0,a.mdx)("inlineCode",{parentName:"td"},"VisitorAPI.js")," when it is initialized with ",(0,a.mdx)("inlineCode",{parentName:"td"},"visitorState")," from the target ",(0,a.mdx)("inlineCode",{parentName:"td"},"getOffers")," response.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"target cookie"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"mbox")),(0,a.mdx)("td",{parentName:"tr",align:null},"Your web server must set this cookie using the name and value of ",(0,a.mdx)("inlineCode",{parentName:"td"},"targetCookie")," from the target ",(0,a.mdx)("inlineCode",{parentName:"td"},"getOffers")," response.")))),(0,a.mdx)("h3",{id:"overview-of-steps"},"Overview of steps"),(0,a.mdx)("p",null,"Suppose a user enters a URL into a browser which sends a request to your web server. When fulfilling that request..."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"The server reads the visitor and target cookies from the request."),(0,a.mdx)("li",{parentName:"ol"},"The server makes a call to the ",(0,a.mdx)("inlineCode",{parentName:"li"},"getOffers")," method of the Target SDK, specifying the visitor and target cookies if available."),(0,a.mdx)("li",{parentName:"ol"},"When the ",(0,a.mdx)("inlineCode",{parentName:"li"},"getOffers")," call is fulfilled, values for ",(0,a.mdx)("inlineCode",{parentName:"li"},"targetCookie")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"visitorState")," from the response are used.",(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},"A cookie is set on the response with values taken from ",(0,a.mdx)("inlineCode",{parentName:"li"},"targetCookie"),". This is done using the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Set-Cookie")," response header, which tells the browser to persist the target cookie."),(0,a.mdx)("li",{parentName:"ol"},"An HTML response is prepared that initializes ",(0,a.mdx)("inlineCode",{parentName:"li"},"VisitorAPI.js")," and passes in ",(0,a.mdx)("inlineCode",{parentName:"li"},"visitorState")," from the target response."))),(0,a.mdx)("li",{parentName:"ol"},"The HTML response is loaded in the browser...",(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"VisitorAPI.js")," is included in the document header."),(0,a.mdx)("li",{parentName:"ol"},"VisitorAPI is initialized with ",(0,a.mdx)("inlineCode",{parentName:"li"},"visitorState")," from the ",(0,a.mdx)("inlineCode",{parentName:"li"},"getOffers")," SDK response. This will cause the visitor cookie to be set in the browser so it will be sent to the server on subsequent requests.")))),(0,a.mdx)("h3",{id:"example-code"},"Example code"),(0,a.mdx)("p",null,"The following code sample implements each of the steps outlined above. Each step appears in the code as an inline comment next to its implementation."),(0,a.mdx)("h4",{id:"nodejs"},"Node.js"),(0,a.mdx)("p",null,"This sample relies on ",(0,a.mdx)("a",{parentName:"p",href:"https://expressjs.com/"},"express, a Node.js web framework"),"{target=_blank}."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"server.js")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'const fs = require("fs");\nconst express = require("express");\nconst cookieParser = require("cookie-parser");\nconst Handlebars = require("handlebars");\nconst TargetClient = require("@adobe/target-nodejs-sdk");\n\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg",\n  timeout: 10000,\n  logger: console,\n};\nconst targetClient = TargetClient.create(CONFIG);\nconst TEMPLATE = fs.readFileSync(`${__dirname}/index.handlebars`).toString();\nconst handlebarsTemplate = Handlebars.compile(TEMPLATE);\n\nHandlebars.registerHelper("toJSON", function (object) {\n  return new Handlebars.SafeString(JSON.stringify(object, null, 4));\n});\n\nconst app = express();\napp.use(cookieParser());\napp.use(express.static(__dirname + "/public"));\n\napp.get("/", async (req, res) => {\n  // The server reads the visitor and target cookies from the request.\n  const visitorCookie =\n    req.cookies[\n      encodeURIComponent(\n        TargetClient.getVisitorCookieName(CONFIG.organizationId)\n      )\n    ];\n  const targetCookie = req.cookies[TargetClient.TargetCookieName];\n  const address = { url: req.headers.host + req.originalUrl };\n\n  const targetRequest = {\n    execute: {\n      mboxes: [\n        { name: "homepage", index: 1, address },\n        { name: "SummerShoesOffer", index: 2, address },\n        { name: "SummerDressOffer", index: 3, address }\n      ],\n    },\n  };\n\n  res.set({\n    "Content-Type": "text/html",\n    Expires: new Date().toUTCString(),\n  });\n\n  try {\n    // The server makes a call to the `getOffers` method of the Target SDK specifying the visitor and target cookies if available.\n    const targetResponse = await targetClient.getOffers({\n      request: targetRequest,\n      visitorCookie,\n      targetCookie,\n    });\n\n    // When the `getOffers` call is fulfilled, values for `targetCookie` and `visitorState` from the response are used.\n    // A cookie is set on the response with values taken from `targetCookie`.  This is done using the `Set-Cookie` response header which tells the browser to persist the target cookie.\n    res.cookie(\n      targetResponse.targetCookie.name,\n      targetResponse.targetCookie.value,\n      { maxAge: targetResponse.targetCookie.maxAge * 1000 }\n    );\n\n    // An HTML response is prepared that initializes VisitorAPI.js and passes in `visitorState` from the target response.\n    const html = handlebarsTemplate({\n      organizationId: CONFIG.organizationId,\n      targetResponse,\n    });\n\n    res.status(200).send(html);\n  } catch (error) {\n    console.error("Target:", error);\n    res.status(500).send(error);\n  }\n});\n\napp.listen(3000, function () {\n  console.log("Listening on port 3000 and watching!");\n});\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"index.handlebars")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>ECID (Visitor API) Integration Sample</title>\n\n  \x3c!-- VisitorAPI.js is included in the document header. --\x3e\n  <script src="VisitorAPI.js"><\/script>\n  <script>\n    // VisitorAPI is initialized with visitorState from the `getOffers` SDK response. This will cause the visitor cookie to be set in the browser so it will be sent to the server on subsequent requests.\n    Visitor.getInstance("{{organizationId}}", {serverState: {{toJSON targetResponse.visitorState}} });\n  <\/script>\n</head>\n<body>\n  <h1>response</h1>\n  <pre>{{toJSON targetResponse}}</pre>\n</body>\n</html>\n')),(0,a.mdx)("h4",{id:"java"},"Java"),(0,a.mdx)("p",null,"This sample uses ",(0,a.mdx)("a",{parentName:"p",href:"https://spring.io/"},"spring, a Java web framework"),"{target=_blank}."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"ClientSampleApplication.java")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'@SpringBootApplication\npublic class ClientSampleApplication {\n\n    public static void main(String[] args) {\n        System.setProperty(SimpleLogger.DEFAULT_LOG_LEVEL_KEY, "DEBUG");\n        SpringApplication.run(ClientSampleApplication.class, args);\n    }\n\n    @Bean\n    TargetClient marketingCloudClient() {\n        ClientConfig clientConfig = ClientConfig.builder()\n                .client("acmeclient")\n                .organizationId("1234567890@AdobeOrg")\n                .defaultDecisioningMethod(DecisioningMethod.SERVER_SIDE)\n                .build();\n\n        return TargetClient.create(clientConfig);\n    }\n}\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"TargetController.java")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'@Controller\n@RequestMapping("/")\npublic class TargetController {\n\n    @Autowired\n    private TargetClientService targetClientService;\n\n    @GetMapping\n    public String index(Model model, HttpServletRequest request, HttpServletResponse response) {\n        // The server reads the visitor and target cookies from the request.\n        List<TargetCookie> targetCookies = getTargetCookies(request.getCookies());\n\n        Address address = getAddress(request);\n\n        List<MboxRequest> mboxRequests = new ArrayList<>();\n        mboxRequests.add((MboxRequest) new MboxRequest().name("homepage").index(1).address(address));\n        mboxRequests.add((MboxRequest) new MboxRequest().name("SummerShoesOffer").index(2).address(address));\n        mboxRequests.add((MboxRequest) new MboxRequest().name("SummerDressOffer").index(3).address(address));\n\n        TargetDeliveryResponse targetDeliveryResponse = targetClientService.getOffers(mboxRequests, targetCookies, request,\n                response);\n\n        // An HTML response is prepared that initializes VisitorAPI.js and passes in `visitorState` from the target response.\n        model.addAttribute("visitorState", targetDeliveryResponse.getVisitorState());\n        model.addAttribute("targetResponse", targetDeliveryResponse);\n        model.addAttribute("organizationId", "1234567890@AdobeOrg");\n\n        return "index";\n    }\n}\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"TargetClientService.java")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"@Service\npublic class TargetClientService {\n\n    private final TargetClient targetJavaClient;\n\n    public TargetClientService(TargetClient targetJavaClient) {\n        this.targetJavaClient = targetJavaClient;\n    }\n\n    public TargetDeliveryResponse getOffers(List<MboxRequest> executeMboxes, List<TargetCookie> cookies, HttpServletRequest request, HttpServletResponse response) {\n\n        Context context = getContext(request);\n        ExecuteRequest executeRequest = new ExecuteRequest();\n        executeRequest.setMboxes(executeMboxes);\n\n        TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()\n                .context(context)\n                .execute(executeRequest)\n                .cookies(cookies)\n                .build();\n\n        // The server makes a call to the `getOffers` method of the Target SDK specifying the visitor and target cookies if available.\n        TargetDeliveryResponse targetResponse = targetJavaClient.getOffers(targetDeliveryRequest);\n\n        // When the `getOffers` call is fulfilled, values for `targetCookie` and `visitorState` from the response are used.\n        // A cookie is set on the response with values taken from `targetCookie`.  This is done using the `Set-Cookie` response header which tells the browser to persist the target cookie.\n        setCookies(targetResponse.getCookies(), response);\n        return targetResponse;\n    }\n}\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("a",{parentName:"strong",href:"https://adobetarget-sdks.gitbook.io/docs/sdk-reference-guides/java-sdk/utility-methods"},"TargetRequestUtils.java"),"{target=_blank}")),(0,a.mdx)("p",null,"index.html"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'<!DOCTYPE HTML>\n<html xmlns:th="http://www.thymeleaf.org">\n<head>\n    <meta charset="UTF-8">\n    <title>Target Only : GetOffer</title>\n\n    \x3c!-- VisitorAPI.js is included in the document header. --\x3e\n    <script src="../../js/VisitorAPI.js"><\/script>\n    <script th:inline="javascript">\n        // VisitorAPI is initialized with visitorState from the `getOffers` SDK response. This will cause the visitor cookie to be set in the browser so it will be sent to the server on subsequent requests.\n        Visitor.getInstance(/*[[${organizationId}]]*/ "", {serverState: /*[[${visitorState}]]*/ {}});\n    <\/script>\n</head>\n<body>\n    <h1>response</h1>\n    <pre>[[${targetResponse}]]</pre>\n</body>\n</html>\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-guides-integration-with-experience-cloud-aam-segments-md-6844ed175bf41335fb42.js.map