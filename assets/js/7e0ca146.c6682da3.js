"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8494],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(4778),o=(n(9496),n(9613));const l={title:"Conditional",slug:"conditional",hidden:!1,createdAt:"2021-07-29T11:58:23.803Z",updatedAt:"2021-09-23T03:47:59.032Z",tags:["Docs"]},i=void 0,a={unversionedId:"sql-syntax/functions/conditional",id:"sql-syntax/functions/conditional",title:"Conditional",description:"Notice:",source:"@site/docs/sql-syntax/functions/conditional.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/conditional",permalink:"/docs/sql-syntax/functions/conditional",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/sql-syntax/functions/conditional.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Conditional",slug:"conditional",hidden:!1,createdAt:"2021-07-29T11:58:23.803Z",updatedAt:"2021-09-23T03:47:59.032Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Comparison",permalink:"/docs/sql-syntax/functions/comparison"},next:{title:"Date & Times",permalink:"/docs/sql-syntax/functions/date-times"}},c={},s=[{value:"multiIf",id:"multiif",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByteHouse.")),(0,o.kt)("h2",{id:"multiif"},"multiIf"),(0,o.kt)("p",null,"Allows you to write the CASE operator more compactly in the query."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"multiIf(cond_1, then_1, cond_2, then_2, ..., else)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cond_N")," \u2014 The condition for the function to return ",(0,o.kt)("inlineCode",{parentName:"li"},"then_N")," ."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"then_N")," \u2014 The result of the function when executed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"else")," \u2014 The result of the function if none of the conditions is met.\nThe function accepts ",(0,o.kt)("inlineCode",{parentName:"li"},"2N+1")," parameters.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned values"),"\nThe function returns one of the values ",(0,o.kt)("inlineCode",{parentName:"p"},"then_N")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," , depending on the conditions ",(0,o.kt)("inlineCode",{parentName:"p"},"cond_N")," ."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionMultiIf (id UInt8, left Nullable(UInt8), right Nullable(UInt8)) ENGINE=CnchMergeTree ORDER BY id;\nINSERT INTO test.functionMultiIf VALUES (1,NULL,4),(2,1,3),(3,2,2),(4,3,1),(5,4,NULL);\nSELECT\n    left,\n    right,\n    multiIf(left < right, 'left is smaller', left > right, 'left is greater', left = right, 'Both equal', 'Null value') AS result\nFROM test.functionMultiIf\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500result\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 4     \u2502 Null value      \u2502\n\u2502 1    \u2502 3     \u2502 left is smaller \u2502\n\u2502 2    \u2502 2     \u2502 Both equal      \u2502\n\u2502 3    \u2502 1     \u2502 left is greater \u2502\n\u2502 4    \u2502 \u1d3a\u1d41\u1d38\u1d38  \u2502 Null value      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);