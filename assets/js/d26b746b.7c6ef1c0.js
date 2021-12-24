"use strict";(self.webpackChunkterra_docs=self.webpackChunkterra_docs||[]).push([[833],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},724:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Stake Distribution",c={unversionedId:"introduction/stake-distribution",id:"introduction/stake-distribution",isDocsHomePage:!1,title:"Stake Distribution",description:'Lido tries to distribute the stake evenly across all validators. Given a single delegation, the exact number of validators that will receive delegations and the amount that they will receive depends on the current distribution of stake. We take a sorted (ASC) list of validators, calculate the desired amount that each validator should have targetstake = (total delegated + delegationamount) / numvalidators and begin adding stake up to the desired amount, starting from the validator with the least stake. The exact amount of a single delegation is calculated as targetstake - validatorstake, and you\'ll have as many delegations as it takes to "drain" the delegationamount.',source:"@site/docs/introduction/stake-distribution.md",sourceDirName:"introduction",slug:"/introduction/stake-distribution",permalink:"/terra-docs/introduction/stake-distribution",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/introduction/stake-distribution.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Slashing",permalink:"/terra-docs/introduction/slashing"},next:{title:"Security",permalink:"/terra-docs/introduction/security"}},u=[],d={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stake-distribution"},"Stake Distribution"),(0,o.kt)("p",null,"Lido tries to distribute the stake evenly across all validators. Given a single delegation, the exact number of validators that will receive delegations and the amount that they will receive depends on the current distribution of stake. We take a sorted (ASC) list of validators, calculate the desired amount that each validator should have ",(0,o.kt)("inlineCode",{parentName:"p"},"target_stake = (total delegated + delegation_amount) / num_validators")," and begin adding stake up to the desired amount, starting from the validator with the least stake. The exact amount of a single delegation is calculated as ",(0,o.kt)("inlineCode",{parentName:"p"},"target_stake - validator_stake"),', and you\'ll have as many delegations as it takes to "drain" the delegation_amount.'),(0,o.kt)("p",null,"You can check out the implementation of this algorithm ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-terra-contracts/blob/main/contracts/lido_terra_validators_registry/src/common.rs#L19"},"here"),"."))}p.isMDXComponent=!0}}]);