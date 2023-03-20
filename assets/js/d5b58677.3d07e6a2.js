"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[2801],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},642:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return s}});var n=r(3117),i=(r(7294),r(3905));const a={sidebar_position:2},l="Circuits",o={unversionedId:"technical-reference/circuits",id:"version-V3/technical-reference/circuits",title:"Circuits",description:"The Semaphore circuit is the heart of the protocol and consists of three parts:",source:"@site/versioned_docs/version-V3/technical-reference/circuits.md",sourceDirName:"technical-reference",slug:"/technical-reference/circuits",permalink:"/docs/technical-reference/circuits",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V3/technical-reference/circuits.md",tags:[],version:"V3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-V3/mySidebar",previous:{title:"Proofs",permalink:"/docs/guides/proofs"},next:{title:"Contracts",permalink:"/docs/technical-reference/contracts"}},c={},s=[{value:"Proof of membership",id:"proof-of-membership",level:2},{value:"Nullifier hash",id:"nullifier-hash",level:2},{value:"Signal",id:"signal",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"circuits"},"Circuits"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/circuits"},"Semaphore circuit")," is the heart of the protocol and consists of three parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/technical-reference/circuits#proof-of-membership"},(0,i.kt)("strong",{parentName:"a"},"Proof of membership"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/technical-reference/circuits#nullifier-hash"},(0,i.kt)("strong",{parentName:"a"},"Nullifier hash"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/technical-reference/circuits#signal"},(0,i.kt)("strong",{parentName:"a"},"Signal")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/semaphore-protocol/semaphore/raw/main/packages/circuits/scheme.png",alt:"Semaphore circuit"})),(0,i.kt)("p",null,"The diagram above shows how the input signals are used in the Semaphore circuit and how the outputs are calculated."),(0,i.kt)("h2",{id:"proof-of-membership"},"Proof of membership"),(0,i.kt)("p",null,"The circuit hashes the hash of the identity nullifier with the identity trapdoor to generate an identity commitment. Then, it verifies the proof of membership against the Merkle root and the identity commitment."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Private inputs:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"treeSiblings[nLevels]"),": the values along the Merkle path to the user's identity commitment,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"treePathIndices[nLevels]"),": the direction (0/1) per tree level corresponding to the Merkle path to the user's identity commitment,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identityNullifier"),": the 32-byte identity secret used as nullifier,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identityTrapdoor"),": the 32-byte identity secret used as trapdoor.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Public outputs:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"root"),": The Merkle root of the tree.")),(0,i.kt)("h2",{id:"nullifier-hash"},"Nullifier hash"),(0,i.kt)("p",null,"The circuit hashes the identity nullifier with the external nullifier and then checks that the result matches the provided nullifier hash.\nNullifier hashes saved in a Semaphore smart contract allow the contract to reject a proof that contains a used nullifier hash."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Private inputs:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identityNullifier"),": the 32-byte identity secret used as a nullifier.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Public inputs:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"externalNullifier"),": the 32-byte external nullifier.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Public outputs:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nullifierHash"),": the hash of the identity nullifier and the external nullifier; used to prevent double-signaling.")),(0,i.kt)("h2",{id:"signal"},"Signal"),(0,i.kt)("p",null,"The circuit calculates a dummy square of the signal hash to prevent any tampering with the proof."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Public inputs:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signalHash"),": the hash of the user's signal.")))}p.isMDXComponent=!0}}]);