"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8786],{49613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93283:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(64778),r=(a(59496),a(49613));const o={title:"Query Acceleration",tags:["Docs"]},l="Preload Warmup",i={unversionedId:"advanced-guide/query-acceleration",id:"version-0.2.0/advanced-guide/query-acceleration",title:"Query Acceleration",description:"Preload feature will load data from remote to local disk cache to speed up the coming up queries. After preload is finished, the query will read data from the local disk, rather than the remote storage.",source:"@site/versioned_docs/version-0.2.0/advanced-guide/query-acceleration.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/query-acceleration",permalink:"/docs/0.2.0/advanced-guide/query-acceleration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/query-acceleration.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Query Acceleration",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Transactions and Concurrency Control",permalink:"/docs/0.2.0/advanced-guide/managing-concurrency"},next:{title:"Query Optimizer",permalink:"/docs/0.2.0/advanced-guide/query-optimiser"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Data preparation",id:"data-preparation",level:2},{value:"Add / Materialize",id:"add--materialize",level:2},{value:"Query - Order by",id:"query---order-by",level:2},{value:"Query - Agg",id:"query---agg",level:2},{value:"References",id:"references",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"preload-warmup"},"Preload Warmup"),(0,r.kt)("p",null,"Preload feature will load data from remote to local disk cache to speed up the coming up queries. After preload is finished, the query will read data from the local disk, rather than the remote storage.\nMake sure of the following setting if you want to open the feature\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Table setting parts_preload_level > 0 which is equal to 0 by default if you don't update it. You can use DDL to update it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alter table [db.]table_name modify settings parts_preload_level = {level}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parts_preload_level = 0: disable the table preload action"),(0,r.kt)("li",{parentName:"ul"},"parts_preload_level = 1: enable the table preload action but just preload meta data, including checksums, primary_index, mark"),(0,r.kt)("li",{parentName:"ul"},"parts_preload_level = 2: enable the table preload action but just preload part data exclude the meta data"),(0,r.kt)("li",{parentName:"ul"},"parts_preload_level = 3: enable the table preload action and preload meta data and part data"),(0,r.kt)("li",{parentName:"ul"},"Table setting enable_local_disk_cache = 1 which is equal to 1 by default if you don't update it. You can use DDL to update it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alter table [db.]table_name modify settings enable_local_disk_cache = 1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System setting parts_preload_level > 0 in user.xml which is equal to 1 by default If you can't update it",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If parts_preload_level = 0, all tables will close preload action even though the table setting parts_preload_level > 0."),(0,r.kt)("li",{parentName:"ul"},"If parts_preload_level > 0, it only means allow table preload action and actual preload level depends on table setting.")))),(0,r.kt)("p",null,"The following three scenarios will trigger preload action if you enable preload feature for one table\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manual Preload\uff1aFor table old data before enabling preload feature, you can run DDL to preload it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alter disk cache preload table [db.]table_name [partition p] [sync|async] [settings parts_preload_level = {level}, virtual_warehouse = {vw_name}]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"partition p: Specify the target partition to be loaded. Preload table all data by default if you skip the argument"),(0,r.kt)("li",{parentName:"ul"},"sync|async: Specify the preload mod, ",(0,r.kt)("inlineCode",{parentName:"li"},"async")," will immediately return success and, and ",(0,r.kt)("inlineCode",{parentName:"li"},"sync")," will block until the action runs completed"),(0,r.kt)("li",{parentName:"ul"},"parts_preload_level: Specify the preload data level whose mean is same as table setting. And for the Manual preload action, the actual level will depend on the setting and skip the table setting(but table setting value must > 0)."),(0,r.kt)("li",{parentName:"ul"},"virtual_warehouse: Specify the preload data target vw nodes"),(0,r.kt)("li",{parentName:"ul"},"Part Insert\uff1aThe new insert data will automatically preload to the local disk and the target vw nodes depends on the bound vw in table setting ",(0,r.kt)("inlineCode",{parentName:"li"},"virtual_warehouse")," and the preload level also depends on the table setting ",(0,r.kt)("inlineCode",{parentName:"li"},"parts_preload_level")),(0,r.kt)("li",{parentName:"ul"},"Part Merge\uff1aSome parts are merged and the new part will automatically preload to the local disk and the target vw nodes depends on the bound vw in table setting ",(0,r.kt)("inlineCode",{parentName:"li"},"virtual_warehouse")," and the preload level also depends on the table setting ",(0,r.kt)("inlineCode",{parentName:"li"},"parts_preload_level"))),(0,r.kt)("h1",{id:"projections"},"Projections"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Projection is used to optimize query execution, which has the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rearranges data according to different columns"),(0,r.kt)("li",{parentName:"ul"},"uses aggregate queries to directly define the pre-aggregated model on the source table."),(0,r.kt)("li",{parentName:"ul"},"query analysis can automatically select the optimal projection for query optimization without rewriting the query"),(0,r.kt)("li",{parentName:"ul"},"provides consistency guarantee for any data transformation operation at any time")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(50872).Z,width:"1607",height:"693"})),(0,r.kt)("p",null,"Currently, we support both optimizer based and non-optimizer based projection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The optimizer based projection supports the agg projection, when SET enable_optimizer=1 and optimizer_projection_support=1"),(0,r.kt)("li",{parentName:"ul"},"The non-optimizer based projection supports the normal and the agg projection, when SET allow_experimental_projection_optimization = 1")),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-- Add projection\nALTER TABLE [db].table ADD PROJECTION name ( SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY] )\n\n-- Drop projection\nALTER TABLE [db].table DROP PROJECTION name\n\n-- Materialize projection\nALTER TABLE [db.]table MATERIALIZE PROJECTION name\n")),(0,r.kt)("h2",{id:"data-preparation"},"Data preparation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE test.t1\n(\n    `id` UInt32,\n    `name` String,\n    `key1` String,\n    `key2` String,\n    `key3` UInt32,\n    `key4` UInt32,\n    `key5` UInt32,\n    `key6` UInt32,\n    `key7` UInt32,\n    PROJECTION p1\n    (\n        SELECT\n            id,\n            key7\n        ORDER BY key7\n    ),\n    PROJECTION agg_p2\n    (\n        SELECT\n            name,\n            sum(key6) AS s,\n            count()\n        GROUP BY name\n    )\n)\nENGINE = CnchMergeTree\nPARTITION BY name\nORDER BY (name, key1)\nSETTINGS index_granularity = 8192;\n\nINSERT INTO test.t1 SELECT\n    number,\n    toString(rand() % 2),\n    toString(rand(1) % 10),\n    toString(rand(2) % 100),\n    rand(3) % 10,\n    rand(4) % 100,\n    rand(5) % 1000,\n    rand(6) % 10000,\n    rand(7) % 100000\nFROM system.numbers\nLIMIT 100000000;\n")),(0,r.kt)("h2",{id:"add--materialize"},"Add / Materialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Add a new projection\nALTER TABLE test.t1 ADD PROJECTION p3 ( SELECT id, key5 ORDER BY key5);\n// We should materialize projection p3 for historical parts\nALTER TABLE test.t1 materialize projection p3;\n// Drop projection p3\nALTER TABLE test.t1 DROP PROJECTION p3;\n")),(0,r.kt)("h2",{id:"query---order-by"},"Query - Order by"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-- Without projection\nselect key7 from test.t1 where key7 = 1;\n\n-- With projection\nselect key7 from test.t1 where key7 = 1 settings allow_experimental_projection_optimization=1\n")),(0,r.kt)("p",null,"Without projection\n",(0,r.kt)("img",{src:a(23037).Z,width:"1606",height:"78"})),(0,r.kt)("p",null,"With projection\n",(0,r.kt)("img",{src:a(7558).Z,width:"1564",height:"66"})),(0,r.kt)("h2",{id:"query---agg"},"Query - Agg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-- Without projection\nSELECT name, sum(key6), count() from test.t1 group by name;\n\n-- With projection\nSELECT name, sum(key6), count() from test.t1 group by name settings allow_experimental_projection_optimization=1;\n")),(0,r.kt)("p",null,"Without projection\n",(0,r.kt)("img",{src:a(87038).Z,width:"1566",height:"224"})),(0,r.kt)("p",null,"With projection\n",(0,r.kt)("img",{src:a(45731).Z,width:"1604",height:"224"})),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/alter/projection"},"https://clickhouse.com/docs/en/sql-reference/statements/alter/projection")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/datadenys/using-projections-to-speedup-queries-in-clickhouse-cd58e393b1cd"},"https://medium.com/datadenys/using-projections-to-speedup-queries-in-clickhouse-cd58e393b1cd"))))}u.isMDXComponent=!0},50872:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/byconity-projections-cf7feaf465680a512ed1e27552d2d4cc.png"},45731:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/query-agg-with-projections-ca9cf7e110075ae65a415c668852fd1d.png"},87038:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/query-agg-without-projections-2f5b0b7ab3d58124a95ae3d0a590b8ad.png"},7558:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/query-orderby-with-projections-3d150facba52b8f1d41cc36b3ca8c621.png"},23037:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/query-orderby-without-projections-ba0d0fc38069d55509567f6c5e54916f.png"}}]);