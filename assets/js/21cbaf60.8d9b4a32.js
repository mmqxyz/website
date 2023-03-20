"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[9600],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||a;return n?o.createElement(d,c(c({ref:t},p),{},{components:n})):o.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6520:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var o=n(3117),r=(n(7294),n(3905));const a={sidebar_position:3},c="Contracts",s={unversionedId:"technical-reference/contracts",id:"version-V3/technical-reference/contracts",title:"Contracts",description:"Semaphore includes two types of contracts:",source:"@site/versioned_docs/version-V3/technical-reference/contracts.md",sourceDirName:"technical-reference",slug:"/technical-reference/contracts",permalink:"/docs/technical-reference/contracts",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V3/technical-reference/contracts.md",tags:[],version:"V3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-V3/mySidebar",previous:{title:"Circuits",permalink:"/docs/technical-reference/circuits"},next:{title:"Deployed contracts",permalink:"/docs/deployed-contracts"}},i={},l=[{value:"Base contracts",id:"base-contracts",level:2},{value:"Extension contracts",id:"extension-contracts",level:2},{value:"Semaphore.sol",id:"semaphoresol",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contracts"},"Contracts"),(0,r.kt)("p",null,"Semaphore includes two types of contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/technical-reference/contracts#base-contracts"},(0,r.kt)("strong",{parentName:"a"},"Base contracts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/technical-reference/contracts#extension-contracts"},(0,r.kt)("strong",{parentName:"a"},"Extension contracts")))),(0,r.kt)("p",null,"And ",(0,r.kt)("a",{parentName:"p",href:"/docs/technical-reference/contracts#semaphoresol"},(0,r.kt)("strong",{parentName:"a"},"Semaphore.sol")),", the main contract deployed on the networks supported by Semaphore."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use Semaphore contracts and interfaces in your project,\ninstall the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"@semaphore-protocol/contracts"))," NPM package.")),(0,r.kt)("h2",{id:"base-contracts"},"Base contracts"),(0,r.kt)("p",null,"Semaphore provides the following base contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/base/SemaphoreVerifier.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"SemaphoreVerifier.sol")),": contains a function to verify Semaphore proofs;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/base/SemaphoreGroups.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"SemaphoreGroups.sol")),": contains the functions to create groups and add/remove/update members.")),(0,r.kt)("p",null,"These contracts are closely related to the protocol.\nYou can use them in your contract or you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/technical-reference/contracts#semaphoresol"},(0,r.kt)("strong",{parentName:"a"},"Semaphore.sol")),", which integrates them for you."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"While some DApps may use on-chain groups, others may prefer to use off-chain groups, saving only their tree roots in the contract.")),(0,r.kt)("h2",{id:"extension-contracts"},"Extension contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/extensions/SemaphoreVoting.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"SemaphoreVoting.sol")),": voting contract that contains the essential functions to create polls, add voters, and anonymously cast votes;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/extensions/SemaphoreWhistleblowing.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"SemaphoreWhistleblowing.sol")),": whistleblowing contract that contains the essential functions to create entities (for example: non-profit organizations), add whistleblowers, and anonymously publish leaks.")),(0,r.kt)("p",null,"These contracts extend the protocol to provide application logic for specific use-cases.\nMore extensions will be added in the future."),(0,r.kt)("h2",{id:"semaphoresol"},"Semaphore.sol"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/contracts/Semaphore.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"Semaphore.sol"))," is based on the base contracts. It integrates them and additionally provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a system to allow only admins (i.e. Ethereum accounts or smart contracts) to manage groups;"),(0,r.kt)("li",{parentName:"ul"},"a mechanism to save the ",(0,r.kt)("a",{parentName:"li",href:"/docs/technical-reference/circuits#nullifier-hash"},"nullifier hashes")," of each group and prevent double-signaling;"),(0,r.kt)("li",{parentName:"ul"},"a mechanism to allow Semaphore proofs generated with old Merkle roots to be verified for a certain period of time defined by the group admin.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See our ",(0,r.kt)("a",{parentName:"p",href:"/docs/deployed-contracts"},"deployed contracts")," to find the addresses for your network.")))}m.isMDXComponent=!0}}]);