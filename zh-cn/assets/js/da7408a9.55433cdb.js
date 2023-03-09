"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2207],{9613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(9496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[c]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2277:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(4778),a=(n(9496),n(9613));const o={title:"Window",slug:"window",hidden:!1,createdAt:"2021-08-01T07:50:23.044Z",updatedAt:"2021-08-01T07:52:51.347Z",tags:["Docs"]},i=void 0,l={unversionedId:"SQL\u8bed\u6cd5\u8bf4\u660e/functions/window",id:"SQL\u8bed\u6cd5\u8bf4\u660e/functions/window",title:"Window",description:"ByConity supports the standard syntax of window functions. A list of window related features are explained below.",source:"@site/../docs/en/SQL\u8bed\u6cd5\u8bf4\u660e/functions/window.mdx",sourceDirName:"SQL\u8bed\u6cd5\u8bf4\u660e/functions",slug:"/SQL\u8bed\u6cd5\u8bf4\u660e/functions/window",permalink:"/zh-cn/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/window",draft:!1,editUrl:"https://github.com/ByConity/ByConity/tree/main/website/../docs/en/SQL\u8bed\u6cd5\u8bf4\u660e/functions/window.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"Window",slug:"window",hidden:!1,createdAt:"2021-08-01T07:50:23.044Z",updatedAt:"2021-08-01T07:52:51.347Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"UUID",permalink:"/zh-cn/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/uuid"},next:{title:"Hash",permalink:"/zh-cn/docs/SQL\u8bed\u6cd5\u8bf4\u660e/hash"}},d={},p=[],s={toc:p},c="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ByConity supports the standard syntax of window functions. A list of window related features are explained below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ROWS mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported. Please specify ROWs mode explicitly since RANGE mode is the default mode, so please always specify ",(0,a.kt)("inlineCode",{parentName:"td"},"ROWS")," keyword in the window specification.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RANGE mode"),(0,a.kt)("td",{parentName:"tr",align:null},"not supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GROUPS mode"),(0,a.kt)("td",{parentName:"tr",align:null},"not supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Expressions involving window function like:"),(0,a.kt)("td",{parentName:"tr",align:null},"supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use of aggregate functions in window"),(0,a.kt)("td",{parentName:"tr",align:null},"supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Navigations functions:"),(0,a.kt)("td",{parentName:"tr",align:null},"supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Window alias like:"),(0,a.kt)("td",{parentName:"tr",align:null},"supported")))))}u.isMDXComponent=!0}}]);