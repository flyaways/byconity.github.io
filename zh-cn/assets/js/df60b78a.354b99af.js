"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2329],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(64778),i=(n(59496),n(49613));const o={title:"\u901a\u8fc7\u6295\u5f71\u4f18\u5316",sidebar_position:4,tags:["Docs"]},a="\u901a\u8fc7\u6295\u5f71\u4f18\u5316",l={unversionedId:"query-optimization/query-optimization-with-projection",id:"version-0.3.0/query-optimization/query-optimization-with-projection",title:"\u901a\u8fc7\u6295\u5f71\u4f18\u5316",description:"\u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/query-optimization/query-optimization-with-projection.mdx",sourceDirName:"query-optimization",slug:"/query-optimization/query-optimization-with-projection",permalink:"/zh-cn/docs/0.3.0/query-optimization/query-optimization-with-projection",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/query-optimization/query-optimization-with-projection.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:4,frontMatter:{title:"\u901a\u8fc7\u6295\u5f71\u4f18\u5316",sidebar_position:4,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18",permalink:"/zh-cn/docs/0.3.0/query-optimization/complex-query-optimization"},next:{title:"\u7269\u5316\u89c6\u56fe",permalink:"/zh-cn/docs/0.3.0/query-optimization/materialized-view"}},p={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u6307\u4ee4\u96c6",id:"\u6307\u4ee4\u96c6",level:2},{value:"\u6570\u636e\u51c6\u5907",id:"\u6570\u636e\u51c6\u5907",level:2},{value:"\u589e\u52a0\u548c\u7269\u5316\u6295\u5f71",id:"\u589e\u52a0\u548c\u7269\u5316\u6295\u5f71",level:2},{value:"\u67e5\u8be2-order by",id:"\u67e5\u8be2-order-by",level:2},{value:"\u67e5\u8be2-Agg",id:"\u67e5\u8be2-agg",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u901a\u8fc7\u6295\u5f71\u4f18\u5316"},"\u901a\u8fc7\u6295\u5f71\u4f18\u5316"),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"\u6295\u5f71\u7528\u4e8e\u4f18\u5316\u67e5\u8be2\u6267\u884c\uff0c\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6839\u636e\u4e0d\u540c\u7684\u5217\u91cd\u65b0\u6392\u5217\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u805a\u5408\u67e5\u8be2\u76f4\u63a5\u5b9a\u4e49\u6e90\u8868\u4e0a\u7684\u9884\u805a\u5408\u6a21\u578b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5206\u6790\u53ef\u4ee5\u81ea\u52a8\u9009\u62e9\u6700\u4f18\u6295\u5f71\u8fdb\u884c\u67e5\u8be2\u4f18\u5316\uff0c\u800c\u65e0\u9700\u91cd\u5199\u67e5\u8be2"),(0,i.kt)("li",{parentName:"ul"},"\u968f\u65f6\u4e3a\u4efb\u4f55\u6570\u636e\u8f6c\u6362\u64cd\u4f5c\u63d0\u4f9b\u4e00\u81f4\u6027\u4fdd\u8bc1")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(87957).Z,width:"1607",height:"693"})),(0,i.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u652f\u6301\u57fa\u4e8e\u4f18\u5316\u5668\u548c\u975e\u4f18\u5316\u5668\u7684\u6295\u5f71"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4f18\u5316\u5668\u7684\u6295\u5f71\u652f\u6301agg\u6295\u5f71\uff0c\u5f53 ",(0,i.kt)("inlineCode",{parentName:"li"},"SET enable_optimizer=1")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"SET optimizer_projection_support=1")),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u975e\u4f18\u5316\u5668\u7684\u6295\u5f71\u652f\u6301\u6b63\u5e38\u6295\u5f71\u548cagg\u6295\u5f71\uff0c\u5f53 ",(0,i.kt)("inlineCode",{parentName:"li"},"SET allow_experimental_projection_optimization=1")," \u65f6")),(0,i.kt)("h2",{id:"\u6307\u4ee4\u96c6"},"\u6307\u4ee4\u96c6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- \u589e\u52a0\u6295\u5f71\nALTER TABLE [db].table ADD PROJECTION name ( SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY] )\n\n-- \u5220\u9664\u6295\u5f71\nALTER TABLE [db].table DROP PROJECTION name\n\n-- \u7269\u5316\u6295\u5f71\nALTER TABLE [db.]table MATERIALIZE PROJECTION name\n")),(0,i.kt)("h2",{id:"\u6570\u636e\u51c6\u5907"},"\u6570\u636e\u51c6\u5907"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE TABLE test.t1\n(\n    `id` UInt32,\n    `name` String,\n    `key1` String,\n    `key2` String,\n    `key3` UInt32,\n    `key4` UInt32,\n    `key5` UInt32,\n    `key6` UInt32,\n    `key7` UInt32,\n    PROJECTION p1\n    (\n        SELECT\n            id,\n            key7\n        ORDER BY key7\n    ),\n    PROJECTION agg_p2\n    (\n        SELECT\n            name,\n            sum(key6) AS s,\n            count()\n        GROUP BY name\n    )\n)\nENGINE = CnchMergeTree\nPARTITION BY name\nORDER BY (name, key1)\nSETTINGS index_granularity = 8192;\n\nINSERT INTO test.t1 SELECT\n    number,\n    toString(rand() % 2),\n    toString(rand(1) % 10),\n    toString(rand(2) % 100),\n    rand(3) % 10,\n    rand(4) % 100,\n    rand(5) % 1000,\n    rand(6) % 10000,\n    rand(7) % 100000\nFROM system.numbers\nLIMIT 100000000;\n")),(0,i.kt)("h2",{id:"\u589e\u52a0\u548c\u7269\u5316\u6295\u5f71"},"\u589e\u52a0\u548c\u7269\u5316\u6295\u5f71"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u6295\u5f71p3\nALTER TABLE test.t1 ADD PROJECTION p3 ( SELECT id, key5 ORDER BY key5);\n\n// \u5bf9\u5386\u53f2\u90e8\u5206\u8fdb\u884c\u7269\u5316\u6295\u5f71p3\nALTER TABLE test.t1 materialize projection p3;\n\n// \u5220\u9664\u6295\u5f71p3\nALTER TABLE test.t1 DROP PROJECTION p3;\n\n")),(0,i.kt)("h2",{id:"\u67e5\u8be2-order-by"},"\u67e5\u8be2-order by"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- \u65e0\u6295\u5f71\nselect key7 from test.t1 where key7 = 1;\n\n-- \u6709\u6295\u5f71\nselect key7 from test.t1 where key7 = 1 settings allow_experimental_projection_optimization=1\n\n")),(0,i.kt)("p",null,"\u7ed3\u679c\u5c55\u793a\uff1a\n",(0,i.kt)("img",{src:n(57936).Z,width:"1606",height:"78"})),(0,i.kt)("center",null,"**\u65e0\u6295\u5f71**"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(34068).Z,width:"1564",height:"66"})),(0,i.kt)("center",null,"**\u6709\u6295\u5f71**"),(0,i.kt)("h2",{id:"\u67e5\u8be2-agg"},"\u67e5\u8be2-Agg"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- \u65e0\u6295\u5f71\nSELECT name, sum(key6), count() from test.t1 group by name;\n\n-- \u6709\u6295\u5f71\nSELECT name, sum(key6), count() from test.t1 group by name settings allow_experimental_projection_optimization=1;\n")),(0,i.kt)("p",null,"\u7ed3\u679c\u5c55\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(40914).Z,width:"1566",height:"224"})),(0,i.kt)("center",null,"**\u65e0\u6295\u5f71**"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(87350).Z,width:"1604",height:"224"})),(0,i.kt)("center",null,"**\u6709\u6295\u5f71**"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/alter/projection"},"https://clickhouse.com/docs/en/sql-reference/statements/alter/projection")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/datadenys/using-projections-to-speedup-queries-in-clickhouse-cd58e393b1cd"},"https://medium.com/datadenys/using-projections-to-speedup-queries-in-clickhouse-cd58e393b1cd"))))}m.isMDXComponent=!0},87957:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/byconity-projections-cf7feaf465680a512ed1e27552d2d4cc.png"},87350:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-agg-with-projections-ca9cf7e110075ae65a415c668852fd1d.png"},40914:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-agg-without-projections-2f5b0b7ab3d58124a95ae3d0a590b8ad.png"},34068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-orderby-with-projections-3d150facba52b8f1d41cc36b3ca8c621.png"},57936:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-orderby-without-projections-ba0d0fc38069d55509567f6c5e54916f.png"}}]);