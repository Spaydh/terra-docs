"use strict";(self.webpackChunkterra_docs=self.webpackChunkterra_docs||[]).push([[135],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(d,".").concat(h)]||p[h]||s[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},d="Withdrawals",u={unversionedId:"internals/withdrawals",id:"internals/withdrawals",isDocsHomePage:!1,title:"Withdrawals",description:"The hub contract processes Luna undelegations in batches, creating them in epochs of 3 days. Whenever an undelegation is done, an entry storing its information is created:",source:"@site/docs/internals/withdrawals.md",sourceDirName:"internals",slug:"/internals/withdrawals",permalink:"/terra-docs/internals/withdrawals",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/internals/withdrawals.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Exchange Rates",permalink:"/terra-docs/internals/exchange-rates"},next:{title:"Rewards",permalink:"/terra-docs/internals/rewards"}},c=[],s={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withdrawals"},"Withdrawals"),(0,i.kt)("p",null,"The hub contract processes Luna undelegations in batches, creating them in epochs of ",(0,i.kt)("strong",{parentName:"p"},"3 days"),". Whenever an undelegation is done, an entry storing its information is created:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batch_id"),": an incrementally-increasing unique identifier of the undelegation batch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time"),": time of batch undelegation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bluna_amount"),": a total amount of fee deducted bLuna unbonded in this batch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bluna_applied_exchange_rate"),": bLuna exchange rate at the time of undelegation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bluna_withdraw_rate"),": rate applied when later withdrawing undelegated Luna from this batch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stluna_amount"),": a total amount of stLuna unbonded in this batch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stluna_applied_exchange_rate"),": stLuna exchange rate at the time of undelegation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stluna_withdraw_rate"),": rate applied when later withdrawing undelegated Luna from this batch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"released"),": indicator on whether the unbonding period is over for this batch")),(0,i.kt)("p",null,"When a batch is undelegated, ",(0,i.kt)("inlineCode",{parentName:"p"},"bluna_applied_exchange_rate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stluna_applied_exchange_rate")," are stored as the bLuna exchange rate and stLuna exchange rate accordingly at the time of undelegation, and ",(0,i.kt)("inlineCode",{parentName:"p"},"released")," is stored as ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Later when users withdraw undelegated Luna, the contract first checks for newly undelegated batches by comparing the current time with the ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," of recent batches. Batches that are older than 21 days are considered undelegated and are marked by updating ",(0,i.kt)("inlineCode",{parentName:"p"},"released")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bluna_withdraw_rate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stluna_withdraw_rate"),", which determine the amount of Luna withdrawable per unbonded bLuna and stLuna accordingly, are also updated to account for slashing events that happened during batch undelegation. The amount of slashed Luna, calculated by comparing the Luna amount initially undelegated and the Luna amount actually received, is deducted pro-rata from the newly undelegated batches by updating the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw_rate")," to the new decreased value."))}p.isMDXComponent=!0}}]);