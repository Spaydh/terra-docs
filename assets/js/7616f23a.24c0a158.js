"use strict";(self.webpackChunkterra_docs=self.webpackChunkterra_docs||[]).push([[247],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},770:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={slug:"/"},u="Liquid Staking for Terra",l={unversionedId:"introduction/overview",id:"introduction/overview",isDocsHomePage:!1,title:"Liquid Staking for Terra",description:"The Lido Terra Liquid Staking Protocol allows its users to earn staking rewards for their staked Luna without locking Luna or maintaining staking infrastructure.",source:"@site/docs/introduction/overview.md",sourceDirName:"introduction",slug:"/",permalink:"/",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/introduction/overview.md",tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"docs",next:{title:"Tokens",permalink:"/introduction/tokens"}},s=[{value:"Community",id:"community",children:[]},{value:"License",id:"license",children:[]}],d={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"liquid-staking-for-terra"},"Liquid Staking for Terra"),(0,o.kt)("p",null,"The Lido Terra Liquid Staking Protocol allows its users to earn staking rewards for their staked Luna without locking Luna or maintaining staking infrastructure."),(0,o.kt)("p",null,"Users can deposit Luna to the Lido smart contracts and receive stLuna or bLuna tokens in return (see below for the difference between the two tokens). The smart contract then stakes tokens with the DAO-picked node operators. "),(0,o.kt)("p",null,"Unlike staked Luna, the stLuna and bLuna tokens are free from the limitations associated with a lack of liquidity and can be transferred at any time. Both stLuna and bLuna are constant balance tokens (not rebasable)."),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Homepage: ",(0,o.kt)("a",{parentName:"li",href:"https://lido.fi/terra"},"https://lido.fi/terra")),(0,o.kt)("li",{parentName:"ul"},"Blog: ",(0,o.kt)("a",{parentName:"li",href:"https://blog.lido.fi"},"https://blog.lido.fi")),(0,o.kt)("li",{parentName:"ul"},"Discord: ",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/invite/vgdPfhZ"},"https://discord.com/invite/vgdPfhZ")),(0,o.kt)("li",{parentName:"ul"},"Twitter: ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/lidofinance"},"https://twitter.com/lidofinance")),(0,o.kt)("li",{parentName:"ul"},"Telegram: ",(0,o.kt)("a",{parentName:"li",href:"https://t.me/lidofinance"},"https://t.me/lidofinance")),(0,o.kt)("li",{parentName:"ul"},"Reddit: ",(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/LidoFinance"},"https://www.reddit.com/r/LidoFinance"))),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"All Lido Liquid Staking for Terra contracts are licensed under the Apache 2.0 license. Check out the contracts source code at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-terra-contracts"},"https://github.com/lidofinance/lido-terra-contracts"),"."))}p.isMDXComponent=!0}}]);