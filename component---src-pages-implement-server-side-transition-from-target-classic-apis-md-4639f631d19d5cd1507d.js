(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3669],{41311:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return s}});var n=a(22122),r=a(19756),d=(a(15007),a(64983)),m=a(99536),l=["components"],o={},i={_frontmatter:o},p=m.Z;function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,d.mdx)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"transition-from-target-classic-apis-to-target-apis-on-the-adobe-developer-console"},"Transition from Target Classic APIs to Target APIs on the Adobe Developer Console"),(0,d.mdx)("p",null,"Information to help you transition from the Target Classic APIs to the Target APIs on the ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/home"},"Adobe Developer Console"),"."),(0,d.mdx)("p",null,"With the decommissioning of Adobe Target Classic, the APIs connected to your Target Classic account have also been made unavailable. This document will help you transition your Target Classic API-based integrations to the Target APIs powered by the ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/home"},"Adobe Developer Console"),"."),(0,d.mdx)("p",null,"For more information about Target APIs, see ",(0,d.mdx)("a",{parentName:"p",href:"/target-developers/src/pages/before-administer/index.md"},"Target APIs"),". For more information about Target SDKs, see ",(0,d.mdx)("a",{parentName:"p",href:"/target-developers/src/pages/implement/server-side/index.md"},"Target Server-side Implementation")),(0,d.mdx)("h2",{id:"terminology"},"Terminology"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Term"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Classic API"),(0,d.mdx)("td",{parentName:"tr",align:null},"APIs that are linked to your Target Classic account. These API calls are based on a username and password-based authentication and use the hostname ",(0,d.mdx)("inlineCode",{parentName:"td"},"testandtarget.omniture.com"),". If your API calls contain a user name and password in the request URL, you must transition to the Adobe Developer Console APIs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/console/home"},"Adobe Developer Console")),(0,d.mdx)("td",{parentName:"tr",align:null},"The Adobe Developer Console is the gateway for Target APIs. These APIs are connected to your Target Standard/Premium account. The Target APIs on the Adobe Developer Console use a ",(0,d.mdx)("a",{parentName:"td",href:"../../before-administer/configure-authentication.md"},"JWT-based authentication"),", which is the industry standard for secure enterprise APIs.")))),(0,d.mdx)("h2",{id:"timeline"},"Timeline"),(0,d.mdx)("p",null,"The following APIs were decommissioned when Target Classic was decommissioned:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Date"),(0,d.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"October 17, 2017"),(0,d.mdx)("td",{parentName:"tr",align:null},"All API methods that perform a write operation (",(0,d.mdx)("inlineCode",{parentName:"td"},"saveCampaign"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"copyCampaign"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"saveHTMLOfferContent"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"setCampaignState"),") were decommissioned.",(0,d.mdx)("br",null),"This is the same date when all Target Classic user accounts were set to read-only status.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"November 14, 2017"),(0,d.mdx)("td",{parentName:"tr",align:null},"The remaining APIs were decommissioned. This is the date when the Target Classic user interface was decommissioned")))),(0,d.mdx)("p",null,"Recommendations Classic APIs were not impacted by this timeline."),(0,d.mdx)("h2",{id:"equivalent-methods"},"Equivalent Methods"),(0,d.mdx)("p",null,"The following table lists the equivalent Adobe Developer Console API methods for the Classic API methods. The Adobe Developer Console APIs return JSON, whereas the Classic APIs return XML."),(0,d.mdx)("p",null,"The Adobe Developer Console API methods are linked to the corresponding section in the API documentation site. An example is provided for each API method. You can also use the Target Admin API Postman Collection that contains sample API calls for all the Adobe API methods on the Adobe Developer Console."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Grouping"),(0,d.mdx)("th",{parentName:"tr",align:null},"Classic API Method"),(0,d.mdx)("th",{parentName:"tr",align:null},"Adobe Developer Console API Method"),(0,d.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Campaign/Activity"),(0,d.mdx)("td",{parentName:"tr",align:null},"Campaign Create"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#create-ab-activity"},"Create AB Activity"),(0,d.mdx)("br",null),(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#create-xt-activity"},"Create XT Activity")),(0,d.mdx)("td",{parentName:"tr",align:null},"The new APIs provide separate create methods for AB and XT")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Campaign Update"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#update-ab-activity"},"Update AB Activity"),(0,d.mdx)("br",null),(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#update-xt-activity"},"Update XT Activity")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Copy Campaign"),(0,d.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,d.mdx)("td",{parentName:"tr",align:null},"Use the Activity Create APIs")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Campaign List"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#list-activities"},"List Activities")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Campaign State"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#update-activity-state"},"Update Activity State")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Campaign View"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#get-ab-activity-by-id"},"Get AB Activity by ID"),(0,d.mdx)("br",null),(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#get-xt-activity-by-id"},"Get XT Activity by ID")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Third-Party Campaign ID"),(0,d.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,d.mdx)("td",{parentName:"tr",align:null},"If you are using a thirdpartyID, the relevant Activity methods can be used")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Offers"),(0,d.mdx)("td",{parentName:"tr",align:null},"Offer Create"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#create-offer"},"Create Offer")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Offer Get"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#get-offer-by-id"},"Get Offer by ID")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Offer List"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#list-offers"},"List Offers")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Folder List"),(0,d.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,d.mdx)("td",{parentName:"tr",align:null},"Folders aren’t supported in Target Standard/Premium")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Reporting"),(0,d.mdx)("td",{parentName:"tr",align:null},"Campaign Performance Report"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#get-ab-performance-report"},"Get AB Performance Report"),(0,d.mdx)("br",null),(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#get-xt-performance-report"},"Get XT Performance Report")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Audit Report"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#get-audit-report"},"Get Audit Report")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"1-1 Content Report"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#get-ap-activity-performance-report"},"Get AP Performance Report")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Account Settings"),(0,d.mdx)("td",{parentName:"tr",align:null},"Get Host Groups"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#list-environments"},"List Environments")),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h2",{id:"exceptions"},"Exceptions"),(0,d.mdx)("p",null,"If you require an exception, please contact your Customer Success Manager."),(0,d.mdx)("h2",{id:"help"},"Help"),(0,d.mdx)("p",null,"Please contact Adobe Target Client Care (",(0,d.mdx)("a",{parentName:"p",href:"mailto:tt-support@adobe.com"},"tt-support@adobe.com"),") if you have any questions or need help transitioning from the Classic APIs to the Target APIs on the Adobe Developer Console."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-transition-from-target-classic-apis-md-4639f631d19d5cd1507d.js.map