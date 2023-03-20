"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[8343],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2544:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(3117),a=(r(7294),r(3905));const o={id:"introduction",title:"What Is Semaphore?",sidebar_position:1},i=void 0,p={unversionedId:"introduction",id:"version-V2/introduction",title:"What Is Semaphore?",description:"Overview",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-V2/what-is-semaphore.md",sourceDirName:".",slug:"/introduction",permalink:"/es/docs/V2/introduction",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V2/what-is-semaphore.md",tags:[],version:"V2",sidebarPosition:1,frontMatter:{id:"introduction",title:"What Is Semaphore?",sidebar_position:1},sidebar:"version-V2/mySidebar",next:{title:"Identities",permalink:"/es/docs/V2/guides/identities"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Developer benefits",id:"developer-benefits",level:2},{value:"About the code",id:"about-the-code",level:2},{value:"Audits",id:"audits",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore"},"Semaphore")," is a ",(0,a.kt)("a",{parentName:"p",href:"https://z.cash/technology/zksnarks"},"zero-knowledge")," protocol that allows you to cast a signal (for example, a vote or endorsement) as a provable group member without revealing your identity.\nAdditionally, it provides a simple mechanism to prevent double-signaling.\nUse cases include private voting, whistleblowing, anonymous DAOs and mixers."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"With Semaphore, you can allow your users to do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/identities/"},"Create a Semaphore identity"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/groups/"},"Add their Semaphore identity to a group (i.e. ",(0,a.kt)("em",{parentName:"a"},"Merkle tree"),")"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/proofs/"},"Send a verifiable, anonymous signal (e.g a vote or endorsement)"),".")),(0,a.kt)("p",null,"When a user broadcasts a signal (for example: a vote), Semaphore zero-knowledge\nproofs can ensure that the user has joined the group and hasn't already cast a signal with their nullifier."),(0,a.kt)("p",null,"Semaphore uses on-chain Solidity contracts and off-chain JavaScript libraries that work in tandem."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Off chain, JavaScript libraries can be used to create identities, manage groups and generate proofs."),(0,a.kt)("li",{parentName:"ul"},"On chain, Solidity contracts can be used to manage groups and verify proofs.")),(0,a.kt)("h2",{id:"developer-benefits"},"Developer benefits"),(0,a.kt)("p",null,"Semaphore is designed to be a simple and generic ",(0,a.kt)("em",{parentName:"p"},"privacy layer")," for decentralized applications (dApps) on Ethereum. It encourages modular application design, allowing dApp developers to choose and customize the on-chain and off-chain components they need."),(0,a.kt)("h2",{id:"about-the-code"},"About the code"),(0,a.kt)("p",null,"The core of the protocol is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/circuits/scheme.png"},"circuit logic"),".\nIn addition to circuits,\nSemaphore provides ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/contracts"},"Solidity contracts"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1#-packages"},"JavaScript libraries")," that allow developers to generate zero-knowledge proofs and verify them with minimal effort."),(0,a.kt)("h3",{id:"audits"},"Audits"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Report"),(0,a.kt)("th",{parentName:"tr",align:null},"Scope"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v2.0.0"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/semaphore-protocol/semaphore/files/9850441/Semaphore_2.0.0_Audit.pdf"},"Semaphore_2.0.0_Audit.pdf")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"circuits"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"contracts"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v2.5.0"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/semaphore-protocol/semaphore/files/9845008/Semaphore_2.5.0_Audit.pdf"},"Semaphore_2.5.0_Audit.pdf")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"contracts"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"libraries"))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are using the previous version of Semaphore, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/V1/introduction"},"Semaphore V1")," documentation.")))}u.isMDXComponent=!0}}]);