"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6356],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,y=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(y,c(c({ref:t},l),{},{components:n})):o.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(4778),r=(n(9496),n(9613));const i={title:"Functions",slug:"functions",hidden:!1,metadata:{title:"Functions in ByConity",description:"ByConity provides two SQL modes, ClickHouse and ANSI. For the ClickHouse mode, some are self-developed functions by ByConity."},createdAt:"2021-07-29T02:29:18.073Z",updatedAt:"2022-02-28T02:39:28.268Z",tags:["Docs"]},c=void 0,s={unversionedId:"SQL\u8bed\u6cd5\u8bf4\u660e/functions/functions",id:"SQL\u8bed\u6cd5\u8bf4\u660e/functions/functions",title:"Functions",description:"ByConity provides two SQL dialects, (1) ClickHouse and (2) ANSI.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/SQL\u8bed\u6cd5\u8bf4\u660e/functions/functions.mdx",sourceDirName:"SQL\u8bed\u6cd5\u8bf4\u660e/functions",slug:"/SQL\u8bed\u6cd5\u8bf4\u660e/functions/functions",permalink:"/zh-cn/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/functions",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/SQL\u8bed\u6cd5\u8bf4\u660e/functions/functions.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"Functions",slug:"functions",hidden:!1,metadata:{title:"Functions in ByConity",description:"ByConity provides two SQL modes, ClickHouse and ANSI. For the ClickHouse mode, some are self-developed functions by ByConity."},createdAt:"2021-07-29T02:29:18.073Z",updatedAt:"2022-02-28T02:39:28.268Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/zh-cn/docs/SQL\u8bed\u6cd5\u8bf4\u660e/data-types"},next:{title:"Aggregation",permalink:"/zh-cn/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/aggregate"}},a={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ByConity provides two SQL dialects, (1) ",(0,r.kt)("strong",{parentName:"p"},"ClickHouse")," and (2) ",(0,r.kt)("strong",{parentName:"p"},"ANSI"),"."),(0,r.kt)("p",null,"For the ClickHouse SQL, the SQL functions are mostly similar to what is provided in the community ClickHouse version, but it also includes additional functions that are only supported in ByConity. The following sections will use the content from ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/functions/"},"ClickHouse.tech documentation site")," as the reference to describe how to use them in ByConity."),(0,r.kt)("p",null,"For the ANSI mode, ByConity provides a rich set of SQL syntax through ANSI SQL mode by using Apache Calcite. For the details please refer to the BNF-grammar here for more details: ",(0,r.kt)("a",{parentName:"p",href:"https://calcite.apache.org/docs/reference.html"},"https://calcite.apache.org/docs/reference.html"),"."))}d.isMDXComponent=!0}}]);