"use strict";(self.webpackChunkterra_docs=self.webpackChunkterra_docs||[]).push([[705],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6982:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],o={},p="Validator Whitelist",d={unversionedId:"introduction/validator_whitelist",id:"introduction/validator_whitelist",isDocsHomePage:!1,title:"Validator Whitelist",description:"The bLuna/stLuna contracts keeps a whitelist of validators, only permitting delegations to those included in the whitelist. This is crucial since all bLuna/stLuna tokens equally share slashing risks, and delegations to low-performing validators could negatively affect all holders.",source:"@site/docs/introduction/validator_whitelist.md",sourceDirName:"introduction",slug:"/introduction/validator_whitelist",permalink:"/introduction/validator_whitelist",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/introduction/validator_whitelist.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Roadmap",permalink:"/introduction/roadmap"},next:{title:"Hub",permalink:"/contracts/hub"}},c=[],s={toc:c};function u(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"validator-whitelist"},"Validator Whitelist"),(0,l.kt)("p",null,"The bLuna/stLuna contracts keeps a whitelist of validators, only permitting delegations to those included in the whitelist. This is crucial since all bLuna/stLuna tokens equally share slashing risks, and delegations to low-performing validators could negatively affect all holders.\nThe whitelist includes the below validators:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Address"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Staking Fund"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper123gn6j23lmexu0qx5qhmgxgunmjcqsx8gmsyse")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"B-Harvest"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper15zcjduavxc5mkp8qcqs9eyhwlqwdlrzy6jln3m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DokiaCapital"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1v5hrqlv8dqgzvy0pwzqzg0gxy899rm4kdur03x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Certus One"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1kprce6kc08a6l03gzzh99hfpazfjeczfpzkkau")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"StakeWith.Us"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1c9ye54e3pzwm3e0zpdlel6pnavrj9qqvq89r3r")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"P2P.ORG - P2P Validator"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper144l7c3uph5a7h62xd8u5et3rqvj3dqtvvka2fu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"blockscape"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1542ek7muegmm806akl0lam5vlqlph7spflfcun")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"syncnode"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1sym8gyehrdsm03vdc44rg9sflg8zeuqwfzavhx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"01node"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1khfcg09plqw84jxy5e7fj6ag4s2r9wqsgm7k94")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Chorus One"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper15urq2dtp9qce4fyc85m6upwm9xul30496sgk37")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Smart Stake"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1alpf6snw2d76kkwjv3dp4l7pcl6cn9uyt0tcj9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Stakin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1nwrksgv2vuadma8ygs8rhwffu2ygk4j24w2mku")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DSRV - CHAISCAN.com"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper175hhkyxmkp8hf2zrzka7cnn7lk6mudtv4uuu64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"everstakeone"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper13g7z3qq6f00qww3u4mpcs3xw5jhqwraswraapc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Forbole"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper1jkqr2vfg4krfd4zwmsf7elfj07cjuzss30ux8g")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Figment"),(0,l.kt)("td",{parentName:"tr",align:"left"},"terravaloper15cupwhpnxhgylxa8n4ufyvux05xu864jcv0tsw")))),(0,l.kt)("p",null,"You can take a look at validators being delegated by Hub contract ",(0,l.kt)("a",{parentName:"p",href:"https://finder.terra.money/mainnet/address/terra1mtwph2juhj0rvjz7dy92gvl6xvukaxu8rfv8ts"},"with Finder")," (Delegations section)."))}u.isMDXComponent=!0}}]);