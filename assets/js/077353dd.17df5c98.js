"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[6940],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var i=n(3117),r=(n(7294),n(3905));const a={sidebar_position:5},l="Contract API",o={unversionedId:"contract-api",id:"version-V1/contract-api",title:"Contract API",description:"Constructor",source:"@site/versioned_docs/version-V1/contract-api.md",sourceDirName:".",slug:"/contract-api",permalink:"/docs/V1/contract-api",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V1/contract-api.md",tags:[],version:"V1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-V1/mySidebar",previous:{title:"Usage",permalink:"/docs/V1/usage"},next:{title:"libsemaphore",permalink:"/docs/V1/libsemaphore"}},s={},u=[{value:"Constructor",id:"constructor",level:2},{value:"Add, deactivate, or reactivate external nullifiiers",id:"add-deactivate-or-reactivate-external-nullifiiers",level:2},{value:"Insert identities",id:"insert-identities",level:2},{value:"Broadcast signals",id:"broadcast-signals",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-api"},"Contract API"),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contract ABI"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"constructor(uint8 _treeLevels, uint232 _firstExternalNullifier)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_treeLevels"),": The depth of the identity tree."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_firstExternalNullifier"),": The first identity nullifier to add.")),(0,r.kt)("p",null,"The depth of the identity tree determines how many identity commitments may be\nadded to this contract: ",(0,r.kt)("inlineCode",{parentName:"p"},"2 ^ _treeLevels"),". Once the tree is full, further\ninsertions will fail with the revert reason ",(0,r.kt)("inlineCode",{parentName:"p"},"IncrementalMerkleTree: tree is full"),"."),(0,r.kt)("p",null,"The first external nullifier will be added as an external nullifier to the\ncontract, and this external nullifier will be active once the deployment\ncompletes."),(0,r.kt)("h2",{id:"add-deactivate-or-reactivate-external-nullifiiers"},"Add, deactivate, or reactivate external nullifiiers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contract ABI"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"addExternalNullifier(uint232 _externalNullifier)")),(0,r.kt)("p",null,"Adds an external nullifier to the contract. Only the owner can do this.\nThis external nullifier is active once it is added."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_externalNullifier"),": The new external nullifier to set.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"deactivateExternalNullifier(uint232 _externalNullifier)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_externalNullifier"),": The existing external nullifier to deactivate.")),(0,r.kt)("p",null,"Deactivate an external nullifier. The external nullifier must already be active\nfor this function to work. Only the owner can do this."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reactivateExternalNullifier(uint232 _externalNullifier)")),(0,r.kt)("p",null,"Reactivate an external nullifier. The external nullifier must already be\ninactive for this function to work. Only the owner can do this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_externalNullifier"),": The deactivated external nullifier to reactivate.")),(0,r.kt)("h2",{id:"insert-identities"},"Insert identities"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contract ABI"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"function insertIdentity(uint256 _identityCommitment)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_identity_commitment"),": The user's identity commitment, which is the hash of\ntheir public key and their identity nullifier (a random 31-byte value). It\nshould be the output of a Pedersen hash. It is the responsibility of the\ncaller to verify this.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Off-chain ",(0,r.kt)("inlineCode",{parentName:"strong"},"libsemaphore")," helper functions"),":"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"genIdentity()")," to generate an ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity")," object, and\n",(0,r.kt)("inlineCode",{parentName:"p"},"genIdentityCommitment(identity: Identity)")," to generate the\n",(0,r.kt)("inlineCode",{parentName:"p"},"_identityCommitment")," value to pass to the contract."),(0,r.kt)("p",null,"To convert ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," to a string and back, so that you can store it in a\ndatabase or somewhere safe, use ",(0,r.kt)("inlineCode",{parentName:"p"},"serialiseIdentity()")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"unSerialiseIdentity()"),"."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./usage#insert-identities"},"Usage section on inserting\nidentities")," for more information."),(0,r.kt)("h2",{id:"broadcast-signals"},"Broadcast signals"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contract ABI"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"broadcastSignal(\n    bytes memory _signal,\n    uint256[8] memory _proof,\n    uint256 _root,\n    uint256 _nullifiersHash,\n    uint232 _externalNullifier\n)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_signal"),": the signal to broadcast."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_proof"),": a zk-SNARK proof (see below)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_root"),": The root of the identity tree, where the user's identity commitment\nis the last-inserted leaf."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_nullifiersHash"),": A uniquely derived hash of the external nullifier, user's\nidentity nullifier, and the Merkle path index to their identity commitment.\nIt ensures that a user cannot broadcast a signal with the same external\nnullifier more than once."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_externalNullifier"),": The external nullifier at which the signal is\nbroadcast.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Off-chain ",(0,r.kt)("inlineCode",{parentName:"strong"},"libsemaphore")," helper functions"),":"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"libsemaphore"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"genWitness()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"genProof()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"genPublicSignals()")," and\nfinally ",(0,r.kt)("inlineCode",{parentName:"p"},"genBroadcastSignalParams()")," to generate the parameters to the\ncontract's ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastSignal()")," function."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./usage#broadcast-signals"},"Usage section on broadcasting\nsignals")," for more information."))}c.isMDXComponent=!0}}]);