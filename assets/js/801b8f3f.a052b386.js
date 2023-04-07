"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7984],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),i=u(n),k=r,d=i["".concat(p,".").concat(k)]||i[k]||m[k]||l;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[i]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(4778),r=(n(9496),n(9613));const l={title:"Comparison",slug:"comparison",hidden:!1,createdAt:"2021-07-29T02:30:51.384Z",updatedAt:"2021-09-23T03:46:42.532Z",tags:["Docs"]},o=void 0,s={unversionedId:"sql-syntax/functions/comparison",id:"sql-syntax/functions/comparison",title:"Comparison",description:"Notice:",source:"@site/docs/sql-syntax/functions/comparison.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/comparison",permalink:"/docs/sql-syntax/functions/comparison",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/sql-syntax/functions/comparison.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Comparison",slug:"comparison",hidden:!1,createdAt:"2021-07-29T02:30:51.384Z",updatedAt:"2021-09-23T03:46:42.532Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Bit & Bitmap",permalink:"/docs/sql-syntax/functions/bit-bitmap"},next:{title:"Conditional",permalink:"/docs/sql-syntax/functions/conditional"}},p={},u=[{value:"greatest",id:"greatest",level:2},{value:"notEquals",id:"notequals",level:2}],c={toc:u},i="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,r.kt)("h2",{id:"greatest"},"greatest"),(0,r.kt)("p",null,"Returns the largest value of a and b."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"greatest(a, b)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a,b")," \u2013 two values to compare")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the larger value of a,b.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT greatest(1, 2)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500greatest(1, 2)\u2500\u2510\n\u2502 2              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT greatest(toDate('2019-01-01'), toDate('2019-01-02'))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500greatest(toDate('2019-01-01'), toDate('2019-01-02'))\u2500\u2510\n\u2502 2019-01-02                                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"notequals"},"notEquals"),(0,r.kt)("p",null,"notEquals, a != b and a ","<",">"," b operator"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"notEquals(a, b)\na!=b\na<>b\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a,b")," \u2013 two values to compare")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UInt8")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT notEquals(1, 1), 1!=1, 1<>1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500notEquals(1, 1)\u2500\u252c\u2500notEquals(1, 1)\u2500\u252c\u2500notEquals(1, 1)\u2500\u2510\n\u2502 0               \u2502 0               \u2502 0               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT notEquals(1, 2), 1!=2, 1<>2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500notEquals(1, 2)\u2500\u252c\u2500notEquals(1, 2)\u2500\u252c\u2500notEquals(1, 2)\u2500\u2510\n\u2502 1               \u2502 1               \u2502 1               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"[block:api-header]",'\n{\n"title": "notEquals"\n}\n',"[/block]"),(0,r.kt)("p",null,"notEquals, a != b and a ","<",">"," b operator"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"notEquals(a, b)\na!=b\na<>b\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a,b")," \u2013 two values to compare")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UInt8")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT notEquals(1, 1), 1!=1, 1<>1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500notEquals(1, 1)\u2500\u252c\u2500notEquals(1, 1)\u2500\u252c\u2500notEquals(1, 1)\u2500\u2510\n\u2502 0               \u2502 0               \u2502 0               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT notEquals(1, 2), 1!=2, 1<>2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500notEquals(1, 2)\u2500\u252c\u2500notEquals(1, 2)\u2500\u252c\u2500notEquals(1, 2)\u2500\u2510\n\u2502 1               \u2502 1               \u2502 1               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);