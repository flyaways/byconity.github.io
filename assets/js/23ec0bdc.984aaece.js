"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2128],{49613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(t),c=a,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},49739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=t(64778),a=(t(59496),t(49613));const l={title:"Random",slug:"random",hidden:!1,createdAt:"2021-07-29T12:26:05.181Z",updatedAt:"2021-09-23T06:37:41.756Z",tags:["Docs"]},o=void 0,s={unversionedId:"sql-syntax/functions/random",id:"sql-syntax/functions/random",title:"Random",description:"Notice:",source:"@site/docs/sql-syntax/functions/random.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/random",permalink:"/docs/sql-syntax/functions/random",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/sql-syntax/functions/random.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Random",slug:"random",hidden:!1,createdAt:"2021-07-29T12:26:05.181Z",updatedAt:"2021-09-23T06:37:41.756Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Others",permalink:"/docs/sql-syntax/functions/others"},next:{title:"Type Conversion",permalink:"/docs/sql-syntax/functions/type-conversion"}},u={},i=[{value:"rand",id:"rand",level:2},{value:"rand64",id:"rand64",level:2},{value:"randConstant",id:"randconstant",level:2}],p={toc:i},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,a.kt)("h2",{id:"rand"},"rand"),(0,a.kt)("p",null,"Returns a pseudo-random UInt32 number, evenly distributed among all UInt32-type numbers.\nUses a linear congruential generator."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"rand([x])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Expression resulting in any of the supported data types. The resulting value is discarded, but the expression itself if used for bypassing common subexpression elimination if the function is called multiple times in one query. Optional parameter.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a pseudo-random UInt32 number. Type: UInt32")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT rand(), rand(number) FROM numbers(2);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500rand()\u2500\u2500\u2500\u2500\u2500\u252c\u2500rand(number)\u2500\u2510\n\u2502 3882830473 \u2502 2236253349   \u2502\n\u2502 4122795699 \u2502 3720179576   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"rand64"},"rand64"),(0,a.kt)("p",null,"Returns a pseudo-random UInt64 number, evenly distributed among all UInt64-type numbers.\nUses a linear congruential generator."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"rand64([x])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Expression resulting in any of the supported data types. The resulting value is discarded, but the expression itself if used for bypassing common subexpression elimination if the function is called multiple times in one query. Optional parameter.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a pseudo-random UInt64 number. Type: UInt64")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT rand64(), rand64(number) FROM numbers(2);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500rand64()\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500rand64(number)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 4216084906413806748 \u2502 17404981640646529534 \u2502\n\u2502 874879808660605772  \u2502 941470430861381566   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"randconstant"},"randConstant"),(0,a.kt)("p",null,"Produces a constant column with a random value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"randConstant([x])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Expression resulting in any of the supported data types. The resulting value is discarded, but the expression itself if used for bypassing common subexpression elimination if the function is called multiple times in one query. Optional parameter.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pseudo-random number. Type: UInt32.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT rand(), rand(1), rand(number), randConstant(), randConstant(1), randConstant(number)\nFROM numbers(3)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500rand()\u2500\u2500\u2500\u2500\u2500\u252c\u2500rand(1)\u2500\u2500\u2500\u2500\u252c\u2500rand(number)\u2500\u252c\u2500randConstant()\u2500\u252c\u2500randConstant(1)\u2500\u252c\u2500randConstant(number)\u2500\u2510\n\u2502 1617218167 \u2502 3030783952 \u2502 3660442590   \u2502 3335999329     \u2502 1508515848      \u2502 1880875990           \u2502\n\u2502 432450540  \u2502 2987789840 \u2502 653572307    \u2502 3335999329     \u2502 1508515848      \u2502 1880875990           \u2502\n\u2502 3698169875 \u2502 79826010   \u2502 458167070    \u2502 3335999329     \u2502 1508515848      \u2502 1880875990           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);