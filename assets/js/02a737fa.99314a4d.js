"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6380],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(n),k=r,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(m,u(u({ref:t},s),{},{components:n})):a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,u[1]=p;for(var i=2;i<l;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(4778),r=(n(9496),n(9613));const l={title:"UUID",slug:"uuid",hidden:!1,createdAt:"2021-07-29T12:33:03.093Z",updatedAt:"2021-09-23T06:52:47.060Z",tags:["Docs"]},u=void 0,p={unversionedId:"SQL\u8bed\u6cd5\u8bf4\u660e/functions/uuid",id:"SQL\u8bed\u6cd5\u8bf4\u660e/functions/uuid",title:"UUID",description:"Notice:",source:"@site/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/uuid.mdx",sourceDirName:"SQL\u8bed\u6cd5\u8bf4\u660e/functions",slug:"/SQL\u8bed\u6cd5\u8bf4\u660e/functions/uuid",permalink:"/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/uuid",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/uuid.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"UUID",slug:"uuid",hidden:!1,createdAt:"2021-07-29T12:33:03.093Z",updatedAt:"2021-09-23T06:52:47.060Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Type Conversion",permalink:"/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/type-conversion"},next:{title:"Window",permalink:"/docs/SQL\u8bed\u6cd5\u8bf4\u660e/functions/window"}},o={},i=[{value:"generateUUIDv4",id:"generateuuidv4",level:2},{value:"toUUID",id:"touuid",level:2},{value:"toUUIDOrNull",id:"touuidornull",level:2},{value:"toUUIDOrZero",id:"touuidorzero",level:2},{value:"generateUUIDv4",id:"generateuuidv4-1",level:2},{value:"toUUID",id:"touuid-1",level:2},{value:"toUUIDOrNull",id:"touuidornull-1",level:2},{value:"toUUIDOrZero",id:"touuidorzero-1",level:2}],s={toc:i},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,r.kt)("h2",{id:"generateuuidv4"},"generateUUIDv4"),(0,r.kt)("p",null,"Generates the UUID of ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4122#section-4.4"},"version 4")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ngenerateUUIDv4()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The UUID type value.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),"\nThis example demonstrates creating a table with the UUID type column and inserting a value into the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nCREATE TABLE test.functionGenerateUUIDv4 (x UUID) ENGINE=CnchMergeTree ORDER BY x;\nINSERT INTO test.functionGenerateUUIDv4 SELECT generateUUIDv4();\nSELECT * FROM test.functionGenerateUUIDv4;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 a630fbcb-1a32-4902-b5cc-dd51eba8cf4b \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"touuid"},"toUUID"),(0,r.kt)("p",null,"Converts String type value to UUID type. Exception will be raised if input string is invalid uuid format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntoUUID(String)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," \u2014 string in uuid format.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The UUID type value.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUID('61f0c404-5cb3-11e7-907b-a6006ad3dba0') AS uuid, toTypeName(uuid) AS uuid_type;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500uuid_type\u2500\u2510\n\u2502 61f0c404-5cb3-11e7-907b-a6006ad3dba0 \u2502 UUID      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"touuidornull"},"toUUIDOrNull"),(0,r.kt)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns NULL."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntoUUIDOrNull(String)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," \u2014 string in uuid format.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Nullable(UUID) type value.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUIDOrNull('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500uuid\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"touuidorzero"},"toUUIDOrZero"),(0,r.kt)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns zero UUID."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntoUUIDOrZero(String)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," \u2014 string in uuid format.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The UUID type value.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUIDOrZero('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 00000000-0000-0000-0000-000000000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"generateuuidv4-1"},"generateUUIDv4"),(0,r.kt)("p",null,"Generates the ",(0,r.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/uuid.md"},"UUID")," of ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4122#section-4.4"},"version 4")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ngenerateUUIDv4()\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("p",null,"The UUID type value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example")),(0,r.kt)("p",null,"This example demonstrates creating a table with the UUID type column and inserting a value into the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nCREATE TABLE t_uuid (x UUID) ENGINE=TinyLog\n\n\n\nINSERT INTO t_uuid SELECT generateUUIDv4()\n\n\n\nSELECT * FROM t_uuid\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u2510\n\n\u2502 f4bf890f-f9dc-4332-ad5c-0c18e73f28e9 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("h2",{id:"touuid-1"},"toUUID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntoUUID (x)\n\n")),(0,r.kt)("p",null,"Converts String type value to UUID type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntoUUID(String)\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("p",null,"The UUID type value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUID('61f0c404-5cb3-11e7-907b-a6006ad3dba0') AS uuid\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500uuid\u2500\u2510\n\n\u2502 61f0c404-5cb3-11e7-907b-a6006ad3dba0 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("h2",{id:"touuidornull-1"},"toUUIDOrNull"),(0,r.kt)("p",null,"toUUIDOrNull (x)"),(0,r.kt)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns NULL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntoUUIDOrNull(String)\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("p",null,"The Nullable(UUID) type value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUIDOrNull('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500uuid\u2500\u2510\n\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("h2",{id:"touuidorzero-1"},"toUUIDOrZero"),(0,r.kt)("p",null,"toUUIDOrZero (x)"),(0,r.kt)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns zero UUID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\ntoUUIDOrZero(String)\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("p",null,"The UUID type value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUIDOrZero('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500uuid\u2500\u2510\n\n\u2502 00000000-0000-0000-0000-000000000000 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")))}d.isMDXComponent=!0}}]);