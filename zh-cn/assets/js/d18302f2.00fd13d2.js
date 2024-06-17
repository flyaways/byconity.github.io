"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[18],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),o=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},E=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=o(n),E=a,k=s["".concat(p,".").concat(E)]||s[E]||c[E]||i;return n?l.createElement(k,r(r({ref:t},d),{},{components:n})):l.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=E;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:a,r[1]=u;for(var o=2;o<i;o++)r[o]=n[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}E.displayName="MDXCreateElement"},67971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var l=n(64778),a=(n(59496),n(49613));const i={title:"\u552f\u4e00\u952e",sidebar_position:5,tags:["Docs"]},r="\u552f\u4e00\u952e",u={unversionedId:"table-design/unique-key",id:"version-0.3.0/table-design/unique-key",title:"\u552f\u4e00\u952e",description:"\u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/table-design/unique-key.mdx",sourceDirName:"table-design",slug:"/table-design/unique-key",permalink:"/zh-cn/docs/0.3.0/table-design/unique-key",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/table-design/unique-key.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:5,frontMatter:{title:"\u552f\u4e00\u952e",sidebar_position:5,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u538b\u7f29",permalink:"/zh-cn/docs/0.3.0/table-design/data-compression"},next:{title:"\u5916\u90e8\u8868",permalink:"/zh-cn/docs/0.3.0/data-lakes/hive-external-table"}},p={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b9e\u65f6\u66f4\u65b0\u7684\u4f7f\u7528\u573a\u666f",id:"\u5b9e\u65f6\u66f4\u65b0\u7684\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"Upsert \u4f7f\u7528\u793a\u4f8b",id:"upsert-\u4f7f\u7528\u793a\u4f8b",level:3},{value:"UPDATE &amp; DELETE \u4f7f\u7528\u793a\u4f8b",id:"update--delete-\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u5206\u6876\u4f7f\u7528\u793a\u4f8b",id:"\u5206\u6876\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u7248\u672c\u7ba1\u7406\u793a\u4f8b",id:"\u7248\u672c\u7ba1\u7406\u793a\u4f8b",level:3},{value:"\u652f\u6301\u7684 SQL \u8bed\u53e5",id:"\u652f\u6301\u7684-sql-\u8bed\u53e5",level:3},{value:"SELECT",id:"select",level:4},{value:"INSERT",id:"insert",level:4},{value:"CREATE TABLE with UNIQUE KEY",id:"create-table-with-unique-key",level:4},{value:"DROP TABLE",id:"drop-table",level:4},{value:"DELETE TABLE",id:"delete-table",level:4},{value:"DELETE FROM db.table WHERE expr;",id:"delete-from-dbtable-where-expr",level:4},{value:"UNDROP TABLE",id:"undrop-table",level:4},{value:"TRUNCATE TABLE",id:"truncate-table",level:4},{value:"ALTER TABLE DROP PARTITION",id:"alter-table-drop-partition",level:4},{value:"OPTIMIZE TABLE",id:"optimize-table",level:4},{value:"RENAME TABLE",id:"rename-table",level:4},{value:"UPDATE TABLE",id:"update-table",level:4},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2}],d={toc:o},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u552f\u4e00\u952e"},"\u552f\u4e00\u952e"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"ByConity Unique\u8868\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0 upsert \u529f\u80fd\u3002\u8be5\u80fd\u529b\u662f ByConity \u56e2\u961f\u81ea\u7814\u7684\u72ec\u6709\u7279\u6027\uff0c\u65e2\u80fd\u4fdd\u6301\u9ad8\u6548\u7684\u67e5\u8be2\u6027\u80fd\u3001\u53c8\u652f\u6301\u4e3b\u952e\u66f4\u65b0\u3002\u4e3b\u8981\u89e3\u51b3\u4e86\u5f00\u6e90 ClickHouse \u4e0d\u80fd\u652f\u6301\u9ad8\u6548\u66f4\u65b0\u64cd\u4f5c\u7684\u75db\u70b9\uff0c\u5e2e\u52a9\u4e1a\u52a1\u66f4\u7b80\u5355\u5730\u5f00\u53d1\u5b9e\u65f6\u5206\u6790\u5e94\u7528\u3002\u7528\u6237\u901a\u8fc7\u6307\u5b9a\u552f\u4e00\u952e UNIQUE KEY \u6765\u5b9e\u73b0 Upsert \u66f4\u65b0\u5199\u8bed\u4e49\uff0c\u67e5\u8be2\u81ea\u52a8\u8fd4\u56de\u6bcf\u4e2a\u552f\u4e00\u952e\u7684\u6700\u65b0\u503c\u3002"),(0,a.kt)("p",null,"Unique \u8868\u4e3b\u8981\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u901a\u8fc7 UNIQUE KEY \u914d\u7f6e\u552f\u4e00\u952e\uff0c\u63d0\u4f9b upsert \u66f4\u65b0\u5199\u8bed\u4e49\uff0c\u67e5\u8be2\u81ea\u52a8\u8fd4\u56de\u6bcf\u4e2a\u552f\u4e00\u952e\u7684\u6700\u65b0\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4fdd\u8bc1\u5b9e\u65f6\u66f4\u65b0\u80fd\u529b\u7684\u60c5\u51b5\u4e0b\uff0c\u4f9d\u7136\u4fdd\u6301\u8f83\u9ad8\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u51e0\u4e4e\u65e0\u635f\u8017\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7\u5220\u9664\u5b57\u6bb5\uff0c\u5bf9\u884c\u8fdb\u884c\u5220\u9664\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6307\u5b9a\u5b57\u6bb5\u8fdb\u884c\u7248\u672c\u7ba1\u7406\uff0c\u4ec5\u4fdd\u7559\u6700\u65b0\u7248\u672c\u3002")),(0,a.kt)("h2",{id:"\u5b9e\u65f6\u66f4\u65b0\u7684\u4f7f\u7528\u573a\u666f"},"\u5b9e\u65f6\u66f4\u65b0\u7684\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u4e1a\u52a1\u9700\u8981\u5bf9\u4ea4\u6613\u7c7b\u6570\u636e\u8fdb\u884c\u5b9e\u65f6\u5206\u6790\uff0c\u5728\u540c\u6b65 OLTP \u6570\u636e\u5e93\u5230 OLAP \u6570\u636e\u5e93\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7531\u4e8e\u8ba2\u5355\u6570\u636e\u7b49\u9700\u8981\u652f\u6301\u66f4\u65b0\u80fd\u529b\uff0c\u56e0\u6b64\u5bf9\u4e8e OLAP \u6570\u636e\u5e93\u4e5f\u6709\u652f\u6301\u5b9e\u65f6\u66f4\u65b0\u548c\u5220\u9664\u7684\u8981\u6c42\u3002"),(0,a.kt)("p",null,"\u53e6\u4e00\u7c7b\u573a\u666f\u867d\u7136\u4e0d\u5b58\u5728\u66f4\u65b0\uff0c\u4f46\u9700\u8981\u53bb\u91cd\u3002\u5728\u5f00\u53d1\u5b9e\u65f6\u6570\u636e\u65f6\uff0c\u5f88\u96be\u4fdd\u8bc1\u6570\u636e\u6d41\u4e2d\u6ca1\u6709\u91cd\u590d\u6570\u636e\uff0c\u56e0\u6b64\u901a\u5e38\u9700\u8981\u5b58\u50a8\u7cfb\u7edf\u652f\u6301\u6570\u636e\u7684\u5e42\u7b49\u5199\u5165\u3002"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u573a\u666f\u90fd\u53ef\u4ee5\u901a\u8fc7\u552f\u4e00\u952e upsert \u529f\u80fd\u6765\u652f\u6301\uff0c\u4e0d\u7ba1\u662f\u5e42\u7b49\u8fd8\u662f\u66f4\u65b0\u7684\u9700\u6c42\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("h3",{id:"upsert-\u4f7f\u7528\u793a\u4f8b"},"Upsert \u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("p",null,"\u521b\u5efa\u6570\u636e\u5e93\u548c\u5bf9\u5e94\u7684 Unique \u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE upsertdb;\nCREATE TABLE IF NOT EXISTS upsertdb.uniquetable\n(\n  `event_time` DateTime,\n  `product_id` UInt64,\n  `city` String,\n  `category` String,\n  `amount` UInt32,\n  `revenue` UInt64\n)\nENGINE = CnchMergeTree()\nPARTITION BY toDate(event_time)\nORDER BY (city, category)\nUNIQUE KEY (product_id, sipHash64(city));\n-- UNIQUE KEY \u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u5b57\u6bb5\u548c\u8868\u8fbe\u5f0f\n")),(0,a.kt)("p",null,"\u987a\u5e8f\u63d2\u5165\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO upsertdb.uniquetable VALUES\n('2020-10-29 23:40:00', 10001, 'Beijing', '\u7537\u88c5', 5, 500),\n('2020-10-29 23:40:00', 10002, 'Beijing', '\u7537\u88c5', 2, 200),\n('2020-10-29 23:40:00', 10003, 'Beijing', '\u7537\u88c5', 1, 100),\n('2020-10-29 23:50:00', 10002, 'Shanghai', '\u7537\u88c5', 4, 400),\n('2020-10-29 23:50:00', 10003, 'Beijing', '\u7537\u88c5', 2, 200),\n('2020-10-29 23:50:00', 10004, 'Beijing', '\u7537\u88c5', 1, 100);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5199\u5165\u76f8\u540c key \u7684\u6570\u636e\u53ef\u4ee5\u5b9e\u73b0\u66f4\u65b0\uff08upsert \u8bed\u4e49\uff09\uff0c\u5373\u5982\u679c key \u4e0d\u5b58\u5728\u5219\u63d2\u5165\u6570\u636e\uff0c\u5426\u5219\u66f4\u65b0\u8fd9\u6761\u6570\u636e\u3002")),(0,a.kt)("p",null,"\u67e5\u8be2\u8868\u4e2d\u6570\u636e\uff0c\u5df2\u8fdb\u884c\u4e86\u53bb\u91cd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from upsertdb.uniquetable;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u252cproduct_id\u2500\u252c\u2500city\u2500\u2500\u252c\u2500category\u2500\u252c\u2500amount\u2500\u252c\u2500revenue\u2500\u2510\n\u2502 2020-10-29 23:40:00 \u2502 10001 \u2502 Beijing  \u2502 \u7537\u88c5  \u2502    5    \u2502    500 \u2502\n\u2502 2020-10-29 23:40:00 \u2502 10002 \u2502 Beijing  \u2502 \u7537\u88c5  \u2502    2    \u2502    200 \u2502\n\u2502 2020-10-29 23:50:00 \u2502 10003 \u2502 Beijing  \u2502 \u7537\u88c5  \u2502    2    \u2502    200 \u2502\n\u2502 2020-10-29 23:50:00 \u2502 10004 \u2502 Beijing  \u2502 \u7537\u88c5  \u2502    1    \u2502    100 \u2502\n\u2502 2020-10-29 23:50:00 \u2502 10002 \u2502 Shanghai \u2502 \u7537\u88c5  \u2502    4    \u2502    400 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u5220\u9664\uff1a\u901a\u8fc7\u8bbe\u7f6e\u865a\u62df\u5217 ",(0,a.kt)("inlineCode",{parentName:"p"},"_delete_flag_=1")," \u6765\u5220\u9664\u6307\u5b9a\u7684 key\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5\u63d2\u5165\u6570\u636e\uff0c\u5e76\u6307\u5b9a\u5220\u9664\u6807\u8bb0\u4f4d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6307\u5b9a\u5220\u9664\u5b57\u6bb5\u8fdb\u884c\u6570\u636e\u5220\u9664\uff0c\u5220\u9664\u5b57\u6bb5\u8bbe\u7f6e\u975e 0 \u65f6\u8868\u793a\u5220\u9664\uff0c\u8bbe\u7f6e\u4e3a 0 \u65f6\u8868\u793a\u6b63\u5e38\u7684 upsert \u64cd\u4f5c\nINSERT INTO upsertdb.uniquetable (event_time, product_id, city, category, amount, revenue, _delete_flag_) VALUES\n('2020-10-29 23:50:00', 10001, 'Beijing', '\u7537\u88c5', 4, 400, 5),\n('2020-10-29 23:50:00', 10002, 'Beijing', '\u7537\u88c5', 2, 200, 1),\n('2020-10-29 23:50:00', 10004, 'Beijing', '\u7537\u88c5', 3, 600, 0);\n")),(0,a.kt)("p",null,"\u67e5\u770b\u5220\u9664\u540e\u7684\u6548\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from upsertdb.uniquetable order by toDate(event_time), product_id;\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u67e5\u8be2\u7ed3\u679c\u4e2d\u5305\u542b\u4e86\u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"p"},"product_id=10004")," \u7684\u4e00\u884c\u6570\u636e\uff0c\u5e76\u5220\u9664\u4e86\u4e09\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"product_id = 10001")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"10002")," \u4e14\u57ce\u5e02\u4e3a'Beijing' \u7684\u65e7\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u252c\u2500product_id\u2500\u252c\u2500city\u2500\u2500\u2500\u2500\u252c\u2500category\u2500\u252c\u2500amount\u2500\u252c\u2500revenue\u2500\u2510\n\u2502 2020-10-29 23:50:00 \u2502      10002 \u2502 Shanghai \u2502 \u7537\u88c5     \u2502      4 \u2502     400 \u2502\n\u2502 2020-10-29 23:50:00 \u2502      10003 \u2502 Beijing  \u2502 \u7537\u88c5     \u2502      2 \u2502     200 \u2502\n\u2502 2020-10-29 23:50:00 \u2502      10004 \u2502 Beijing  \u2502 \u7537\u88c5     \u2502      3 \u2502     600 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h3",{id:"update--delete-\u4f7f\u7528\u793a\u4f8b"},"UPDATE & DELETE \u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("p",null,"\u5728 Unique \u8868\u4e2d\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u8bed\u6cd5\u66f4\u65b0\u548c\u5220\u9664\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4ec5\u9002\u7528\u4e8e Unique Table \u7684\u8bed\u6cd5\nUPDATE [db.]table SET a=b WHERE expr;\nDELETE FROM [db.]table WHERE expr;\n")),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5\u8fdb\u884c\u66f4\u65b0\u548c\u5220\u9664\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u66f4\u65b0\u6307\u5b9a\u5b57\u6bb5\nUpdate test.uniquetable set str = 'updated'  WHERE date = '2023-12-18';\n\n-- \u5220\u9664\u6307\u5b9a\u5b57\u6bb5\nDELETE FROM test.uniquetable WHERE product_id=10001;\n")),(0,a.kt)("h3",{id:"\u5206\u6876\u4f7f\u7528\u793a\u4f8b"},"\u5206\u6876\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("p",null,"\u5047\u8bbe\u7528\u6237\u542f\u7528\u4e86\u516d\u4e2a\u8ba1\u7b97\u8282\u70b9\uff0c\u7531\u4e8e\u5355\u4e2a\u5206\u533a\u7684\u6570\u636e\u91cf\u8f83\u5927\uff0c\u8d85\u8fc7 2 \u4ebf\u6761\u8bb0\u5f55\uff0c\u5e94\u7528\u7a0b\u5e8f\u7ecf\u5e38\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"c1")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"c2")," \u5b57\u6bb5\u8fdb\u884c\u805a\u5408\u548c\u8fde\u63a5\u64cd\u4f5c\u3002 \u56e0\u6b64\uff0c\u51b3\u5b9a\u4f7f\u7528\u6876\u8868\u8fdb\u884c\u4f18\u5316\u3002 \u6876\u8868\u7684\u8bbe\u8ba1\u9009\u9879\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u5206\u6876\u952e\uff08CLUSTER Key\uff09\u9009\u62e9\uff1a\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"c1")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"c2")," \u5217\u4f5c\u4e3a\u5206\u6876\u952e\u3002"),(0,a.kt)("p",null,"\u6876\uff08Bucket\uff09\u6570\uff1a\u53d6\u8282\u70b9\u6570\u7684\u4e24\u500d\uff1a12\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa\u5e26\u6709\u5206\u6876\u7684\u8868 create table with bucketing\ncreate or replace table table_01 (c1 timestamp, c2 string, c3 number) cluster by (to_date(c1), c2) INTO 12 BUCKETS;\n\n-- \u5c06\u6876\u6dfb\u52a0\u5230\u73b0\u6709\u6570\u636e\u4e2d add bucket to existing data\nALTER TABLE t CLUSTER BY (column, expression,...) INTO 64 BUCKETS\n\n-- \u6309\u591a\u5217\u5c06\u6876\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d add bucket to cluster by multiple columns\nALTER TABLE t CLUSTER BY sipHash(a,b,c) INTO 64 BUCKETS\n")),(0,a.kt)("h3",{id:"\u7248\u672c\u7ba1\u7406\u793a\u4f8b"},"\u7248\u672c\u7ba1\u7406\u793a\u4f8b"),(0,a.kt)("p",null,"Unique \u8868\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ENGINE = CnchMergeTree(version)")," \u6765\u8fdb\u884c\u7248\u672c\u7ba1\u7406\uff0c\u5176\u4e2d\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," \u53c2\u6570\u540e\uff0c\u5728\u63d2\u5165\u6570\u636e\u65f6\uff0c\u4ec5\u4f1a\u4fdd\u7559\u6700\u65b0\u7248\u672c\u7684\u8bb0\u5f55\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"--\u521b\u5efa unique \u8868\nCREATE TABLE UniqTest\n(\n        `key` Int64,\n        `val` String,\n        `eventTime` DateTime\n)\nENGINE = CnchMergeTree(eventTime)\nORDER BY `key`\nPRIMARY KEY `key`\nUNIQUE KEY `key`\n\n--\u5206\u522b\u63d2\u5165\u4e24\u6761\u8bb0\u5f55\uff0c\u7528 eventTime \u505a\u7248\u672c\u5b57\u6bb5\u533a\u5206\ninsert into UniqTest VALUES (1, 'first', '2020-01-01 01:01:01');\ninsert into Uniqtest VALUES (1, 'econd', '2020-01-01 00:00:00');\n\n--\u63d2\u5165\u5b8c\u6210\u540e\uff0c\u6267\u884c\u67e5\u8be2\uff0c\u7b2c\u4e8c\u6761\u8bb0\u5f55\u5373\u65e7\u7248\u672c\u7684\u6570\u636e\u4f1a\u88ab ignore \u6389\nselect * from UniqTest\n\u250c\u2500key\u2500\u252c\u2500val\u2500\u2500\u2500\u252c\u2500eventTime\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1   \u2502 first \u2502 2020-01-01 01:01:01 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h3",{id:"\u652f\u6301\u7684-sql-\u8bed\u53e5"},"\u652f\u6301\u7684 SQL \u8bed\u53e5"),(0,a.kt)("h4",{id:"select"},"SELECT"),(0,a.kt)("h4",{id:"insert"},"INSERT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"INSERT VALUES"),(0,a.kt)("li",{parentName:"ul"},"INSERT SELECT"),(0,a.kt)("li",{parentName:"ul"},"INSERT FORMAT"),(0,a.kt)("li",{parentName:"ul"},"INSERT INFILE"),(0,a.kt)("li",{parentName:"ul"},"\u8bf4\u660e\n\u5728\u5e76\u53d1 INSERT \u65f6\u7684\u6027\u80fd\u60c5\u51b5\uff1a"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6bcf\u4e2a unique table\uff0cinsert \u662f\u7531\u5355\u7ebf\u7a0b\u6267\u884c\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u7684 insert \u5c06\u6309\u987a\u5e8f\u6267\u884c\uff0c\u56e0\u6b64\u5927\u6279\u91cf\u5904\u7406\uff08insert infile\uff09\u53ef\u80fd\u4f1a\u8017\u65f6\u8f83\u957f\u3002")),(0,a.kt)("h4",{id:"create-table-with-unique-key"},"CREATE TABLE with UNIQUE KEY"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a")),(0,a.kt)("p",null,"\u6b64\u60c5\u51b5\u4e0b\u5305\u542b\u4ee5\u4e0b\u9650\u5236\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709 ","[U]","Int8/16/32/64, Boolean, Date, DateTime, String \u8fd9\u4e9b\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u7528\u4f5c UNIQUE KEY\u3002"),(0,a.kt)("li",{parentName:"ul"},"UNIQUE KEY \u4e0d\u53ef\u4ee5\u4e0e CLUSTER BY \u4e00\u8d77\u4f7f\u7528\uff08\u672a\u6765\u4f1a\u63d0\u4f9b\u652f\u6301\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a String \u7c7b\u578b\u7684 UNIQUE KEY \u5927\u5c0f\u5fc5\u987b <= 1 MB\uff08\u6b64\u503c\u53d6\u51b3\u4e8e max_string_size_for_unique_key\uff09\uff0c\u5426\u5219 insert \u4f1a\u5931\u8d25\u3002")),(0,a.kt)("h4",{id:"drop-table"},"DROP TABLE"),(0,a.kt)("h4",{id:"delete-table"},"DELETE TABLE"),(0,a.kt)("h4",{id:"delete-from-dbtable-where-expr"},"DELETE FROM ","[db.]","table WHERE expr;"),(0,a.kt)("h4",{id:"undrop-table"},"UNDROP TABLE"),(0,a.kt)("h4",{id:"truncate-table"},"TRUNCATE TABLE"),(0,a.kt)("h4",{id:"alter-table-drop-partition"},"ALTER TABLE DROP PARTITION"),(0,a.kt)("h4",{id:"optimize-table"},"OPTIMIZE TABLE"),(0,a.kt)("h4",{id:"rename-table"},"RENAME TABLE"),(0,a.kt)("h4",{id:"update-table"},"UPDATE TABLE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," UPDATE table_name\n    SET assignment_list\n    [WHERE where_condition]\n    [ORDER BY...] \n    [LIMIT...]\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.kt)("p",null,"\u5f53\u524d\u9ed8\u8ba4\u4e3a\u5206\u533a\u7ea7\u522b\u53bb\u91cd\uff0c\u5373 unique id \u5728\u76f8\u540c\u5206\u533a\u4e0b\u4f1a\u5b9e\u73b0 upsert \u80fd\u529b\uff0c\u5728\u4e0d\u540c\u5206\u533a\u53ef\u80fd\u51fa\u73b0\u91cd\u590d\u3002"),(0,a.kt)("p",null,"\u5728 Kafka \u6570\u636e\u6e90\u5bfc\u5165\u65f6\uff0c\u7528\u6237\u9700\u8981\u4fdd\u8bc1\u76f8\u540c\u552f\u4e00\u952e\u7684\u6570\u636e\u5199\u5165\u540c\u4e00\u4e2a\u7684 Topic Partition\uff0c\u5e76\u7981\u7528 Topic \u6269\u5bb9\u3002"),(0,a.kt)("p",null,"\u552f\u4e00\u952e Unique Key \u6700\u591a\u652f\u6301\u6307\u5b9a 10 \u4e2a\u5b57\u6bb5\u3002"))}c.isMDXComponent=!0}}]);