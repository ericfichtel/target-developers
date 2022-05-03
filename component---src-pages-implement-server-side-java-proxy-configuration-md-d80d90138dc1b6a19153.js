(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5781],{8184:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return u}});var o,i=t(22122),a=t(19756),r=(t(15007),t(64983)),l=t(99536),d=["components"],c={},s=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),p={_frontmatter:c},m=l.Z;function u(e){var n=e.components,t=(0,a.Z)(e,d);return(0,r.mdx)(m,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"proxy-configuration"},"Proxy Configuration"),(0,r.mdx)("h2",{id:"basic-proxy"},"Basic Proxy"),(0,r.mdx)("p",null,"If the application running the SDK requires a proxy to access the internet, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetClient")," will need to be configured with a proxy configuration as follows."),(0,r.mdx)(s,{slots:"heading, code",repeat:"1",languages:"JAVA",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"basic-proxy-config"},"Basic Proxy Config"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'ClientConfig clientConfig = ClientConfig.builder()\n    .client("acmeclient")\n    .organizationId("1234567890@AdobeOrg")\n    .proxyConfig(new ClientProxyConfig(host,port))\n    .build();\nTargetClient targetClient = TargetClient.create(clientConfig);\n')),(0,r.mdx)("h2",{id:"authentication"},"Authentication"),(0,r.mdx)("p",null,"If a proxy authentication is required, the credentials can be passed as parameters to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ClientProxyConfig")," constructor, as per the below example. Note that this only works for simple username/password proxy authentication."),(0,r.mdx)(s,{slots:"heading, code",repeat:"1",languages:"JAVA",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"basic-proxy-authentication"},"Basic Proxy Authentication"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'ClientConfig clientConfig = ClientConfig.builder()\n    .client("acmeclient")\n    .organizationId("1234567890@AdobeOrg")\n    .proxyConfig(new ClientProxyConfig(host,port,username,password))\n    .build();\nTargetClient targetClient = TargetClient.create(clientConfig);\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-java-proxy-configuration-md-d80d90138dc1b6a19153.js.map