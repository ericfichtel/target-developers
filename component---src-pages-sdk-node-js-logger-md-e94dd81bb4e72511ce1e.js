(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3063],{25295:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return g}});var o,r=t(22122),a=t(19756),i=(t(15007),t(64983)),d=t(99536),s=["components"],l={},p=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),m={_frontmatter:l},c=d.Z;function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.mdx)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"logger"},"Logger"),(0,i.mdx)("h2",{id:"description"},"Description"),(0,i.mdx)("p",null,"When ",(0,i.mdx)("a",{parentName:"p",href:"/target-developers/initialize-sdk.html"},"initializing the SDK"),", the ",(0,i.mdx)("inlineCode",{parentName:"p"},"options.logger")," object is an optional object. However, in order to debug effectively when an issue occurs, a ",(0,i.mdx)("inlineCode",{parentName:"p"},"logger")," object should be provided when initializing the SDK."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"logger")," object is expected to have a ",(0,i.mdx)("inlineCode",{parentName:"p"},"debug()")," and an ",(0,i.mdx)("inlineCode",{parentName:"p"},"error()")," method. When an appropriate logger is provided, such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"console"),", Target requests and responses will be logged."),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)(p,{slots:"heading, code",repeat:"1",languages:"js",mdxType:"CodeBlock"}),(0,i.mdx)("h3",{id:"nodejs"},"Node.js"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'const TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg",\n  logger: console\n};\n\nconst targetClient = TargetClient.create(CONFIG);\n\nconst request = {\n    execute: {\n        mboxes: [{\n            name: "a1-serverside-ab",\n            index: 1\n        }]\n    }\n};\n\nconst response = await targetClient.getOffers({ request, targetCookie });\n')),(0,i.mdx)("p",null,"You should see requests and responses being printed in the console."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-node-js-logger-md-e94dd81bb4e72511ce1e.js.map