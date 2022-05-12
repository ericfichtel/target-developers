(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5798],{98012:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var i=a(22122),r=a(19756),o=(a(15007),a(64983)),n=a(99536),s=["components"],l={},d={_frontmatter:l},u=n.Z;function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.mdx)(u,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"bulk-profile-update-api"},"Bulk profile update API"),(0,o.mdx)("p",null,"Via API, send a .csv file to Adobe Target with visitor profile updates for many visitors. Each visitor profile can be updated with multiple in-page profile attributes in one call."),(0,o.mdx)("p",null,"This option is similar to Customer Attributes with a few differences:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Customer Attributes use an FTP upload while the Target Bulk Profile Update API uses an HTTP POST API."),(0,o.mdx)("li",{parentName:"ul"},"Customer Attributes data can be shared with Analytics. Bulk Profile Update is useable only in Target."),(0,o.mdx)("li",{parentName:"ul"},"Customer Attributes support creating a profile for a user Target has not yet seen. The Bulk Profile Update API updates existing Target profiles only."),(0,o.mdx)("li",{parentName:"ul"},"Customer Attributes require the use of the Experience Cloud ID (ECID). The Bulk Profile Update API requires either the TNT ID or the ",(0,o.mdx)("inlineCode",{parentName:"li"},"mbox3rdPartyId"),"."),(0,o.mdx)("li",{parentName:"ul"},"You cannot send the following characters in ",(0,o.mdx)("inlineCode",{parentName:"li"},"mbox3rdPartyID"),": plus sign (+) and forward slash (/).")),(0,o.mdx)("h2",{id:"format"},"Format"),(0,o.mdx)("p",null,"The .csv file must refer to each visitor via his or her Target PCID or mboxThirdPartyId . The Experience Cloud ID (ECID) is not supported. All profile attributes/values are created and updated via the API. Format details are available in the API documentation."),(0,o.mdx)("h2",{id:"example-use-cases"},"Example use cases"),(0,o.mdx)("p",null,"Your CRM or other internal system stores valuable data about your visitors that you want to consistently update into Target, without exposing the profile data in your page implementation."),(0,o.mdx)("h2",{id:"benefits-of-method"},"Benefits of method"),(0,o.mdx)("p",null,"No limit on the number of profile attributes."),(0,o.mdx)("p",null,"Profile attributes sent via the site can be updated via the API and vice versa."),(0,o.mdx)("h2",{id:"caveats"},"Caveats"),(0,o.mdx)("p",null,"The size of the batch file must be less than 50 MB. In addition, the total number of rows should not exceed 500,000 rows per upload."),(0,o.mdx)("p",null,"There is no limit on the number or rows you can upload over a period of 24 hours in subsequent batches. However, the ingestion process might be throttled during business hours to ensure that other processes run efficiently."),(0,o.mdx)("p",null,"Consecutive ",(0,o.mdx)("a",{parentName:"p",href:"https://developers.adobetarget.com/api/#updating-profiles"},"V2 batch update calls")," without mbox calls in between for the same thirdPartyIds override the properties updated in the first batch update call."),(0,o.mdx)("h2",{id:"code-examples"},"Code examples"),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"https://developers.adobetarget.com/api/#updating-profiles"},"Updating Profiles"),"."),(0,o.mdx)("h3",{id:"links-to-relevant-information"},"Links to relevant information"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://developers.adobetarget.com/api/#updating-profiles"},"Updating Profiles")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-before-implement-methods-to-get-data-into-target-bulk-profile-update-api-md-5467fe388b7ce6d711d2.js.map