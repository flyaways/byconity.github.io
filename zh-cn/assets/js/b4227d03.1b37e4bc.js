"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1478],{9613:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=o(n),y=r,k=c["".concat(s,".").concat(y)]||c[y]||m[y]||l;return n?a.createElement(k,p(p({ref:t},i),{},{components:n})):a.createElement(k,p({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=y;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:r,p[1]=u;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=n(4778),r=(n(9496),n(9613));const l={title:"Map",slug:"map",hidden:!0,createdAt:"2021-07-29T12:29:27.367Z",updatedAt:"2021-07-29T12:29:27.367Z",tags:["Docs"]},p=void 0,u={unversionedId:"sql-syntax/functions/map",id:"sql-syntax/functions/map",title:"Map",description:"map",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sql-syntax/functions/map.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/map",permalink:"/zh-cn/docs/sql-syntax/functions/map",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/sql-syntax/functions/map.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"Map",slug:"map",hidden:!0,createdAt:"2021-07-29T12:29:27.367Z",updatedAt:"2021-07-29T12:29:27.367Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/zh-cn/docs/sql-syntax/functions/json"},next:{title:"Nullable",permalink:"/zh-cn/docs/sql-syntax/functions/nullable"}},s={},o=[{value:"map",id:"map",level:2},{value:"tuple",id:"tuple",level:2},{value:"tupleElement",id:"tupleelement",level:2}],i={toc:o},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"map"},"map"),(0,r.kt)("p",null,"Arranges ",(0,r.kt)("inlineCode",{parentName:"p"},"key:value")," pairs into ",(0,r.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/map.md"},"Map(key, value)")," data type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nmap(key1, value1[, key2, value2, ...])\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"key")," \u2014 The key part of the pair. ",(0,r.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md"},"String")," or ",(0,r.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/int-uint.md"},"Integer")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"value")," \u2014 The value part of the pair. ",(0,r.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md"},"String")," , ",(0,r.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/int-uint.md"},"Integer")," or ",(0,r.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/array.md"},"Array")," ."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data structure as ",(0,r.kt)("inlineCode",{parentName:"li"},"key:value")," pairs.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/map.md"},"Map(key, value)")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT map('key1', number, 'key2', number * 2) FROM numbers(3);\n\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500map('key1', number, 'key2', multiply(number, 2))\u2500\u2510\n\n\u2502 {'key1':0,'key2':0}                              \u2502\n\n\u2502 {'key1':1,'key2':2}                              \u2502\n\n\u2502 {'key1':2,'key2':4}                              \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nCREATE TABLE table_map (a Map(String, UInt64)) ENGINE = MergeTree() ORDER BY a;\n\nINSERT INTO table_map SELECT map('key1', number, 'key2', number * 2) FROM numbers(3);\n\nSELECT a['key2'] FROM table_map;\n\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\n\u2502                       0 \u2502\n\n\u2502                       2 \u2502\n\n\u2502                       4 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bytedance.feishu.cn/sql-reference/data-types/map.md"},"Map(key, value)")," data type")),(0,r.kt)("h2",{id:"tuple"},"tuple"),(0,r.kt)("p",null,"A function that allows grouping multiple columns."),(0,r.kt)("p",null,"For columns with the types T1, T2, \u2026, it returns a Tuple(T1, T2, \u2026) type tuple containing these columns. There is no cost to execute the function."),(0,r.kt)("p",null,"Tuples are normally used as intermediate values for an argument of IN operators, or for creating a list of formal parameters of lambda functions. Tuples can\u2019t be written to a table."),(0,r.kt)("p",null,"The function implements the operator ",(0,r.kt)("inlineCode",{parentName:"p"},"(x, y, \u2026)")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntuple(x, y, \u2026)\n\n")),(0,r.kt)("h2",{id:"tupleelement"},"tupleElement"),(0,r.kt)("p",null,"A function that allows getting a column from a tuple."),(0,r.kt)("p",null,"\u2018N\u2019 is the column index, starting from 1. N must be a constant. \u2018N\u2019 must be a constant. \u2018N\u2019 must be a strict postive integer no greater than the size of the tuple."),(0,r.kt)("p",null,"There is no cost to execute the function."),(0,r.kt)("p",null,"The function implements the operator ",(0,r.kt)("inlineCode",{parentName:"p"},"x.N")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntupleElement(tuple, n)\n\n")))}m.isMDXComponent=!0}}]);