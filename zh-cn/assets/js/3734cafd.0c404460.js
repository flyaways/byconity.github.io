"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1810],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(4778),a=(n(9496),n(9613));const l={title:"\u67e5\u8be2\u52a0\u901f",tags:["Docs"]},i="\u6570\u636e\u9884\u52a0\u8f7d",o={unversionedId:"advanced-guide/query-acceleration",id:"version-0.2.0/advanced-guide/query-acceleration",title:"\u67e5\u8be2\u52a0\u901f",description:"\u9884\u52a0\u8f7d\u529f\u80fd\u5c06\u6570\u636e\u4ece\u8fdc\u7a0b\u52a0\u8f7d\u5230\u672c\u5730\u78c1\u76d8\u7f13\u5b58\uff0c\u4ee5\u52a0\u5feb\u5373\u5c06\u5230\u6765\u7684\u67e5\u8be2\u3002\u9884\u52a0\u8f7d\u5b8c\u6210\u540e\uff0c\u67e5\u8be2\u5c06\u4ece\u672c\u5730\u78c1\u76d8\u8bfb\u53d6\u6570\u636e\uff0c\u800c\u4e0d\u662f\u8fdc\u7a0b\u5b58\u50a8\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/advanced-guide/query-acceleration.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/query-acceleration",permalink:"/zh-cn/docs/0.2.0/advanced-guide/query-acceleration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/advanced-guide/query-acceleration.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"\u67e5\u8be2\u52a0\u901f",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u52a1\u548c\u5e76\u53d1\u63a7\u5236",permalink:"/zh-cn/docs/0.2.0/advanced-guide/managing-concurrency"},next:{title:"\u67e5\u8be2\u4f18\u5316\u5668",permalink:"/zh-cn/docs/0.2.0/advanced-guide/query-optimiser"}},p={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u6570\u636e\u51c6\u5907",id:"\u6570\u636e\u51c6\u5907",level:2},{value:"\u589e\u52a0\u548c\u7269\u5316\u6295\u5f71",id:"\u589e\u52a0\u548c\u7269\u5316\u6295\u5f71",level:2},{value:"\u67e5\u8be2-order by",id:"\u67e5\u8be2-order-by",level:2},{value:"\u67e5\u8be2-Agg",id:"\u67e5\u8be2-agg",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u9884\u52a0\u8f7d"},"\u6570\u636e\u9884\u52a0\u8f7d"),(0,a.kt)("p",null,"\u9884\u52a0\u8f7d\u529f\u80fd\u5c06\u6570\u636e\u4ece\u8fdc\u7a0b\u52a0\u8f7d\u5230\u672c\u5730\u78c1\u76d8\u7f13\u5b58\uff0c\u4ee5\u52a0\u5feb\u5373\u5c06\u5230\u6765\u7684\u67e5\u8be2\u3002\u9884\u52a0\u8f7d\u5b8c\u6210\u540e\uff0c\u67e5\u8be2\u5c06\u4ece\u672c\u5730\u78c1\u76d8\u8bfb\u53d6\u6570\u636e\uff0c\u800c\u4e0d\u662f\u8fdc\u7a0b\u5b58\u50a8\u3002\n\u5982\u679c\u8981\u6253\u5f00\u8be5\u529f\u80fd\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u8bbe\u7f6e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8868\u8bbe\u7f6e parts_preload_level>0\uff0c\u5982\u679c\u4e0d\u66f4\u65b0\uff0c\u9ed8\u8ba4\u7b49\u4e8e 0\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 DDL \u6765\u66f4\u65b0\u5b83\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"alter table [db.]table_name modify settings parts_preload_level = {level}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parts_preload_level=0\uff1a\u7981\u7528\u8868\u9884\u52a0\u8f7d\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"parts_preload_level=1\uff1a\u542f\u7528\u8868\u9884\u52a0\u8f7d\u64cd\u4f5c\uff0c\u4f46\u53ea\u9884\u52a0\u8f7d\u5143\u6570\u636e\uff0c\u5305\u62ec\u6821\u9a8c\u548c\u3001primary_index\u3001\u6807\u8bb0"),(0,a.kt)("li",{parentName:"ul"},"parts_preload_level=2\uff1a\u542f\u7528\u8868\u9884\u52a0\u8f7d\u64cd\u4f5c\uff0c\u4f46\u53ea\u9884\u52a0\u8f7d\u90e8\u5206\u6570\u636e\u6392\u9664\u5143\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"parts_preload_level=3\uff1a\u542f\u7528\u8868\u9884\u52a0\u8f7d\u64cd\u4f5c\u5e76\u9884\u52a0\u8f7d\u5143\u6570\u636e\u548c\u96f6\u4ef6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u8868\u8bbe\u7f6e enable_local_disk_cache=1\uff0c\u5982\u679c\u4e0d\u66f4\u65b0\uff0c\u5219\u9ed8\u8ba4\u7b49\u4e8e 1\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 DDL \u6765\u66f4\u65b0\u5b83\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"alter table [db.]table_name modify settings enable_local_disk_cache = 1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"user. xml \u4e2d\u7684\u7cfb\u7edf\u8bbe\u7f6e parts_preload_level>0\uff0c\u9ed8\u8ba4\u7b49\u4e8e 1 \u5982\u679c\u65e0\u6cd5\u66f4\u65b0\u5b83",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c parts_preload_level=0\uff0c\u6240\u6709\u8868\u90fd\u5c06\u5173\u95ed\u9884\u52a0\u8f7d\u64cd\u4f5c\uff0c\u5373\u4f7f\u8868\u8bbe\u7f6e parts_preload_level>0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c parts_preload_level>0\uff0c\u5219\u4ec5\u8868\u793a\u5141\u8bb8\u8868\u9884\u52a0\u8f7d\u64cd\u4f5c\uff0c\u5e76\u4e14\u5b9e\u9645\u9884\u52a0\u8f7d\u7ea7\u522b\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e\u3002")))),(0,a.kt)("p",null,"\u5982\u679c\u4e3a\u4e00\u4e2a\u8868\u542f\u7528\u4e86\u9884\u52a0\u8f7d\u529f\u80fd\uff0c\u4ee5\u4e0b\u4e09\u79cd\u60c5\u51b5\u5c06\u89e6\u53d1\u9884\u52a0\u8f7d\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u624b\u52a8\u9884\u52a0\u8f7d\uff1a\u5bf9\u4e8e\u542f\u7528\u9884\u52a0\u8f7d\u529f\u80fd\u4e4b\u524d\u7684\u8868\u683c\u65e7\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c DDL \u8fdb\u884c\u9884\u52a0\u8f7d\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"alter disk cache preload table [db.]table_name [partition p] [sync|async] [settings parts_preload_level = {level}, virtual_warehouse = {vw_name}]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5206\u533a p\uff1a\u6307\u5b9a\u8981\u52a0\u8f7d\u7684\u76ee\u6807\u5206\u533a\u3002\u5982\u679c\u8df3\u8fc7\u53c2\u6570\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u9884\u52a0\u8f7d\u8868\u4e2d\u7684\u6240\u6709\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"sync|async\uff1a\u6307\u5b9a\u9884\u52a0\u8f7d mod\uff0casync \u5c06\u7acb\u5373\u8fd4\u56de\u6210\u529f\uff0csync \u5c06\u963b\u585e\uff0c\u76f4\u5230\u64cd\u4f5c\u8fd0\u884c\u5b8c\u6210"),(0,a.kt)("li",{parentName:"ul"},"parts_preload_level\uff1a\u6307\u5b9a\u5e73\u5747\u503c\u4e0e\u8868\u8bbe\u7f6e\u76f8\u540c\u7684\u9884\u52a0\u8f7d\u6570\u636e\u7ea7\u522b\u3002\u5bf9\u4e8e\u624b\u52a8\u9884\u52a0\u8f7d\u64cd\u4f5c\uff0c\u5b9e\u9645\u7ea7\u522b\u5c06\u53d6\u51b3\u4e8e\u8bbe\u7f6e\u5e76\u8df3\u8fc7\u8868\u8bbe\u7f6e\uff08\u4f46\u8868\u8bbe\u7f6e\u503c\u5fc5\u987b>0\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"virtual_warehouse\uff1a\u6307\u5b9a\u9884\u52a0\u8f7d\u6570\u636e\u76ee\u6807 vw \u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u4ef6\u63d2\u5165\uff1a\u65b0\u7684\u63d2\u5165\u6570\u636e\u5c06\u81ea\u52a8\u9884\u52a0\u8f7d\u5230\u672c\u5730\u78c1\u76d8\uff0c\u76ee\u6807 vw \u8282\u70b9\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e\u201cvirtual_warehouse\u201d\u4e2d\u7ed1\u5b9a\u7684 vw\uff0c\u9884\u52a0\u8f7d\u7ea7\u522b\u4e5f\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e\u201cparts_preload_level\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u4ef6\u5408\u5e76\uff1a\u4e00\u4e9b\u90e8\u4ef6\u88ab\u5408\u5e76\uff0c\u65b0\u90e8\u4ef6\u5c06\u81ea\u52a8\u9884\u52a0\u8f7d\u5230\u672c\u5730\u78c1\u76d8\uff0c\u76ee\u6807 vw \u8282\u70b9\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e\u201cvirtual_warehouse\u201d\u4e2d\u7ed1\u5b9a\u7684 vw\uff0c\u9884\u52a0\u8f7d\u7ea7\u522b\u4e5f\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e\u201cparts_preload_level\u201d")),(0,a.kt)("h1",{id:"\u6295\u5f71"},"\u6295\u5f71"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u6295\u5f71\u7528\u4e8e\u4f18\u5316\u67e5\u8be2\u6267\u884c\uff0c\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u4e0d\u540c\u7684\u5217\u91cd\u65b0\u6392\u5217\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u805a\u5408\u67e5\u8be2\u76f4\u63a5\u5b9a\u4e49\u6e90\u8868\u4e0a\u7684\u9884\u805a\u5408\u6a21\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5206\u6790\u53ef\u4ee5\u81ea\u52a8\u9009\u62e9\u6700\u4f18\u6295\u5f71\u8fdb\u884c\u67e5\u8be2\u4f18\u5316\uff0c\u800c\u65e0\u9700\u91cd\u5199\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u968f\u65f6\u4e3a\u4efb\u4f55\u6570\u636e\u8f6c\u6362\u64cd\u4f5c\u63d0\u4f9b\u4e00\u81f4\u6027\u4fdd\u8bc1")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6680).Z,width:"1607",height:"693"})),(0,a.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u652f\u6301\u57fa\u4e8e\u4f18\u5316\u5668\u548c\u975e\u4f18\u5316\u5668\u7684\u6295\u5f71"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4f18\u5316\u5668\u7684\u6295\u5f71\u652f\u6301 agg \u6295\u5f71\uff0c\u5f53 SETenable_optimizer=1 \u548c optimizer_projection_support=1"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u975e\u4f18\u5316\u5668\u7684\u6295\u5f71\u652f\u6301\u6b63\u5e38\u6295\u5f71\u548c agg \u6295\u5f71\uff0c\u5f53 SETallow_experimental_projection_optimization=1 \u65f6")),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-- Add projection\nALTER TABLE [db].table ADD PROJECTION name ( SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY] )\n\n-- Drop projection\nALTER TABLE [db].table DROP PROJECTION name\n\n-- Materialize projection\nALTER TABLE [db.]table MATERIALIZE PROJECTION name\n")),(0,a.kt)("h2",{id:"\u6570\u636e\u51c6\u5907"},"\u6570\u636e\u51c6\u5907"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE test.t1\n(\n    `id` UInt32,\n    `name` String,\n    `key1` String,\n    `key2` String,\n    `key3` UInt32,\n    `key4` UInt32,\n    `key5` UInt32,\n    `key6` UInt32,\n    `key7` UInt32,\n    PROJECTION p1\n    (\n        SELECT\n            id,\n            key7\n        ORDER BY key7\n    ),\n    PROJECTION agg_p2\n    (\n        SELECT\n            name,\n            sum(key6) AS s,\n            count()\n        GROUP BY name\n    )\n)\nENGINE = CnchMergeTree\nPARTITION BY name\nORDER BY (name, key1)\nSETTINGS index_granularity = 8192;\n\nINSERT INTO test.t1 SELECT\n    number,\n    toString(rand() % 2),\n    toString(rand(1) % 10),\n    toString(rand(2) % 100),\n    rand(3) % 10,\n    rand(4) % 100,\n    rand(5) % 1000,\n    rand(6) % 10000,\n    rand(7) % 100000\nFROM system.numbers\nLIMIT 100000000;\n")),(0,a.kt)("h2",{id:"\u589e\u52a0\u548c\u7269\u5316\u6295\u5f71"},"\u589e\u52a0\u548c\u7269\u5316\u6295\u5f71"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Add a new projection\nALTER TABLE test.t1 ADD PROJECTION p3 ( SELECT id, key5 ORDER BY key5);\n// We should materialize projection p3 for historical parts\nALTER TABLE test.t1 materialize projection p3;\n// Drop projection p3\nALTER TABLE test.t1 DROP PROJECTION p3;\n")),(0,a.kt)("h2",{id:"\u67e5\u8be2-order-by"},"\u67e5\u8be2-order by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-- Without projection\nselect key7 from test.t1 where key7 = 1;\n\n-- With projection\nselect key7 from test.t1 where key7 = 1 settings allow_experimental_projection_optimization=1\n")),(0,a.kt)("p",null,"\u65e0\u6295\u5f71\n",(0,a.kt)("img",{src:n(6002).Z,width:"1606",height:"78"})),(0,a.kt)("p",null,"\u6709\u6295\u5f71\n",(0,a.kt)("img",{src:n(4708).Z,width:"1564",height:"66"})),(0,a.kt)("h2",{id:"\u67e5\u8be2-agg"},"\u67e5\u8be2-Agg"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-- Without projection\nSELECT name, sum(key6), count() from test.t1 group by name;\n\n-- With projection\nSELECT name, sum(key6), count() from test.t1 group by name settings allow_experimental_projection_optimization=1;\n")),(0,a.kt)("p",null,"\u65e0\u6295\u5f71\n",(0,a.kt)("img",{src:n(258).Z,width:"1566",height:"224"})),(0,a.kt)("p",null,"\u6709\u6295\u5f71\n",(0,a.kt)("img",{src:n(2895).Z,width:"1604",height:"224"})),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/alter/projection"},"https://clickhouse.com/docs/en/sql-reference/statements/alter/projection")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/datadenys/using-projections-to-speedup-queries-in-clickhouse-cd58e393b1cd"},"https://medium.com/datadenys/using-projections-to-speedup-queries-in-clickhouse-cd58e393b1cd"))))}d.isMDXComponent=!0},6680:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/byconity-projections-cf7feaf465680a512ed1e27552d2d4cc.png"},2895:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-agg-with-projections-ca9cf7e110075ae65a415c668852fd1d.png"},258:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-agg-without-projections-2f5b0b7ab3d58124a95ae3d0a590b8ad.png"},4708:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-orderby-with-projections-3d150facba52b8f1d41cc36b3ca8c621.png"},6002:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-orderby-without-projections-ba0d0fc38069d55509567f6c5e54916f.png"}}]);