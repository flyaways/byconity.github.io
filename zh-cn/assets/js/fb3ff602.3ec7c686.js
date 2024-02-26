"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3066],{9613:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>f});var n=r(9496);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),l=s(r),u=o,f=l["".concat(p,".").concat(u)]||l[u]||d[u]||i;return r?n.createElement(f,a(a({ref:e},m),{},{components:r})):n.createElement(f,a({ref:e},m))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[l]="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9259:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(4778),o=(r(9496),r(9613));const i={title:"\u4eceHDFS\u5bfc\u5165",sidebar_position:2,tags:["Docs"]},a="\u4ece\u5916\u90e8\u5b58\u50a8\u5bfc\u5165\u6570\u636e",c={unversionedId:"data-import/import-methods/import-from-hdfs",id:"data-import/import-methods/import-from-hdfs",title:"\u4eceHDFS\u5bfc\u5165",description:"\u4eceHDFS\u5bfc\u5165",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/data-import/import-methods/import-from-hdfs.mdx",sourceDirName:"data-import/import-methods",slug:"/data-import/import-methods/import-from-hdfs",permalink:"/zh-cn/docs/data-import/import-methods/import-from-hdfs",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/data-import/import-methods/import-from-hdfs.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u4eceHDFS\u5bfc\u5165",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u6d41\u5f0f\u5bfc\u5165",permalink:"/zh-cn/docs/data-import/import-methods/stream-import"},next:{title:"\u4eceKafka\u5bfc\u5165",permalink:"/zh-cn/docs/data-import/import-methods/import-from-kafka"}},p={},s=[{value:"\u4eceHDFS\u5bfc\u5165",id:"\u4ecehdfs\u5bfc\u5165",level:2}],m={toc:s},l="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(l,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ece\u5916\u90e8\u5b58\u50a8\u5bfc\u5165\u6570\u636e"},"\u4ece\u5916\u90e8\u5b58\u50a8\u5bfc\u5165\u6570\u636e"),(0,o.kt)("h2",{id:"\u4ecehdfs\u5bfc\u5165"},"\u4eceHDFS\u5bfc\u5165"),(0,o.kt)("p",null,"ByConity \u540c\u6837\u652f\u6301\u4ece\u672c\u5730\u6216\u8005 HDFS \u4e0a\u5bfc\u5165\u6570\u636e\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INSERT INTO [db.]table [(c1, c2, c3)] FORMAT format_name INFILE 'hdfs://ip:port/file_name'\n\n")))}d.isMDXComponent=!0}}]);