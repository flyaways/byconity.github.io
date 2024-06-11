"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9480],{49613:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var n=l(59496);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(l),s=a,m=d["".concat(p,".").concat(s)]||d[s]||k[s]||i;return l?n.createElement(m,r(r({ref:t},c),{},{components:l})):n.createElement(m,r({ref:t},c))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[d]="string"==typeof e?e:a,r[1]=u;for(var o=2;o<i;o++)r[o]=l[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},75500:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var n=l(64778),a=(l(59496),l(49613));const i={title:"\u8bbe\u8ba1\u5e93\u8868",tags:["Docs"]},r="\u8bbe\u8ba1\u5e93\u8868",u={unversionedId:"basic-guide/database-table-design",id:"version-0.2.0/basic-guide/database-table-design",title:"\u8bbe\u8ba1\u5e93\u8868",description:"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/database-table-design.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/database-table-design",permalink:"/zh-cn/docs/0.2.0/basic-guide/database-table-design",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/database-table-design.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"\u8bbe\u8ba1\u5e93\u8868",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u53ef\u89c6\u5316",permalink:"/zh-cn/docs/0.2.0/basic-guide/data-visualisation"},next:{title:"Hive External Catalog",permalink:"/zh-cn/docs/0.2.0/basic-guide/hive-external-catalog"}},p={},o=[{value:"\u7ec4\u7ec7\u5e93\u8868",id:"\u7ec4\u7ec7\u5e93\u8868",level:2},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:3},{value:"\u6570\u636e\u8868",id:"\u6570\u636e\u8868",level:3},{value:"\u8868\u5f15\u64ce",id:"\u8868\u5f15\u64ce",level:4},{value:"CnchMergeTree \u8868\u539f\u7406",id:"cnchmergetree-\u8868\u539f\u7406",level:4},{value:"CnchMergeTree \u5efa\u8868\u8bed\u53e5\u548c\u76f8\u5173\u914d\u7f6e",id:"cnchmergetree-\u5efa\u8868\u8bed\u53e5\u548c\u76f8\u5173\u914d\u7f6e",level:2},{value:"\u8bbe\u8ba1\u5206\u533a\u952e\uff08PARTITION BY)",id:"\u8bbe\u8ba1\u5206\u533a\u952epartition-by",level:3},{value:"\u8bbe\u8ba1\u6392\u5e8f\u952e\uff08ORDER BY\uff09",id:"\u8bbe\u8ba1\u6392\u5e8f\u952eorder-by",level:3},{value:"\u8bbe\u8ba1\u4e3b\u952e(PRIMARY KEY)",id:"\u8bbe\u8ba1\u4e3b\u952eprimary-key",level:3},{value:"\u552f\u4e00\u952e\u7d22\u5f15(UNIQUE KEY)",id:"\u552f\u4e00\u952e\u7d22\u5f15unique-key",level:3},{value:"\u8df3\u6570\u7d22\u5f15\uff08Index\uff09",id:"\u8df3\u6570\u7d22\u5f15index",level:3},{value:"\u53ef\u7528\u7684\u7d22\u5f15\u7c7b\u578b",id:"\u53ef\u7528\u7684\u7d22\u5f15\u7c7b\u578b",level:4},{value:"\u8bbe\u8ba1 Bucket",id:"\u8bbe\u8ba1-bucket",level:3},{value:"\u91c7\u6837",id:"\u91c7\u6837",level:3},{value:"\u5217\u548c\u8868\u7684 TTL",id:"\u5217\u548c\u8868\u7684-ttl",level:3},{value:"\u9ad8\u7ea7\u914d\u7f6e",id:"\u9ad8\u7ea7\u914d\u7f6e",level:3},{value:"Granule \u914d\u7f6e",id:"granule-\u914d\u7f6e",level:4},{value:"\u8ba1\u7b97\u7ec4\u914d\u7f6e",id:"\u8ba1\u7b97\u7ec4\u914d\u7f6e",level:4},{value:"merge \u76f8\u5173\u914d\u7f6e",id:"merge-\u76f8\u5173\u914d\u7f6e",level:4},{value:"\u5b58\u50a8\u76f8\u5173\u914d\u7f6e",id:"\u5b58\u50a8\u76f8\u5173\u914d\u7f6e",level:4},{value:"\u552f\u4e00\u7d22\u5f15\u76f8\u5173\u914d\u7f6e",id:"\u552f\u4e00\u7d22\u5f15\u76f8\u5173\u914d\u7f6e",level:4},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:4},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u4e3b\u952e\u7d22\u5f15\u7684\u6700\u4f73\u5b9e\u8df5",id:"\u4e3b\u952e\u7d22\u5f15\u7684\u6700\u4f73\u5b9e\u8df5",level:3},{value:"\u4e8c\u7ea7\u7d22\u5f15\u6700\u4f73\u5b9e\u8df5",id:"\u4e8c\u7ea7\u7d22\u5f15\u6700\u4f73\u5b9e\u8df5",level:3},{value:"\u5217\u7c7b\u578b\u8003\u8651",id:"\u5217\u7c7b\u578b\u8003\u8651",level:3},{value:"\u907f\u514d\u4e00\u5473\u4f7f\u7528 String \u7c7b\u578b",id:"\u907f\u514d\u4e00\u5473\u4f7f\u7528-string-\u7c7b\u578b",level:4},{value:"Nullable \u9009\u62e9",id:"nullable-\u9009\u62e9",level:4},{value:"LowCardinality",id:"lowcardinality",level:3},{value:"\u5217 Codec \u9009\u62e9",id:"\u5217-codec-\u9009\u62e9",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3}],c={toc:o},d="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8bbe\u8ba1\u5e93\u8868"},"\u8bbe\u8ba1\u5e93\u8868"),(0,a.kt)("p",null,"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b"),(0,a.kt)("p",null,"\u6587\u6863\u683c\u5f0f\uff1a\u6559\u7a0b\u76ee\u7684\uff0c\u524d\u7f6e\u51c6\u5907\uff0c\u5206\u6b65\u9aa4\u8bb2\u89e3\u539f\u7406 & \u793a\u4f8b\uff0c\u76f8\u5173\u6587\u6863\u63a8\u8350\uff1b"),(0,a.kt)("p",null,"\u5185\u5bb9\u63d0\u8981\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ByConity \u662f\u5982\u4f55\u7ec4\u7ec7\u6570\u636e\u5e93\u548c\u6570\u636e\u8868\u7684"),(0,a.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u8868\u7684\u89c4\u683c\uff0c\u6bd4\u5982\u5355\u6570\u636e\u5e93\u652f\u6301\u653e\u591a\u5c11\u6570\u636e\u8868\uff0c\u5355\u8868\u652f\u6301\u591a\u5c11\u5217"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u8ba1\u6570\u636e\u8868\u65f6\uff0c\u5e94\u8be5\u7406\u89e3\u54ea\u4e9b\u914d\u7f6e\uff08primary key \u7b49\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5178\u578b\u573a\u666f\u4e0b\uff0c\u8bbe\u8ba1\u6570\u636e\u8868\u7684\u6700\u4f73\u5b9e\u8df5\u662f\u4ec0\u4e48")),(0,a.kt)("h2",{id:"\u7ec4\u7ec7\u5e93\u8868"},"\u7ec4\u7ec7\u5e93\u8868"),(0,a.kt)("h3",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,a.kt)("p",null,"ByConity \u7684\u6570\u636e\u5e93\u662f\u4e00\u7ec4\u76f8\u5173\u8054\u7684\u8868\u6216\u8005\u89c6\u56fe\u7684\u7ec4\u5408\uff0c\u65b9\u4fbf\u7528\u6237\u7ba1\u7406\u8fd9\u7ec4 schema \u7684\u751f\u547d\u5468\u671f\u4ee5\u53ca\u6743\u9650\u63a7\u5236\u3002ByConity \u5bf9\u6570\u636e\u5e93\u7684\u6570\u76ee\u4e0a\u9650\u6ca1\u6709\u786c\u6027\u9650\u5236\u3002"),(0,a.kt)("h3",{id:"\u6570\u636e\u8868"},"\u6570\u636e\u8868"),(0,a.kt)("p",null,"\u4ece\u903b\u8f91\u4e0a\u770b\uff0c\u6570\u636e\u8868\u662f\u4e00\u7ec4\u62e5\u6709\u76f8\u540c\u884c\u6570\u7684\u6570\u636e\u5217\u7684\u96c6\u5408\uff0c\u5e76\u4ece\u5c5e\u67d0\u4e2a\u6570\u636e\u5e93\u3002ByConity \u5bf9\u4e00\u4e2a\u6570\u636e\u5e93\u7684\u8868\u6570\u76ee\u4e5f\u6ca1\u6709\u9650\u5236\uff08\u6700\u597d\u4e0d\u8d85\u8fc7\u767e\u4e07\uff09\u3002\u4e00\u4e2a\u8868\u62e5\u6709\u7684\u6570\u636e\u5217\u6570\u76ee\u4e0d\u8d85\u8fc7 10 \u4e07\u3002"),(0,a.kt)("h4",{id:"\u8868\u5f15\u64ce"},"\u8868\u5f15\u64ce"),(0,a.kt)("p",null,"\u8868\u5f15\u64ce\u5373\u8868\u7684\u7c7b\u578b\uff0c\u51b3\u5b9a\u4e86\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7684\u7ec4\u7ec7\u548c\u5b58\u50a8\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7684\u65b9\u5f0f\u4ee5\u53ca\u7d22\u5f15\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u54ea\u4e9b\u67e5\u8be2\u4ee5\u53ca\u5982\u4f55\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u5176\u4ed6\u7279\u5b9a\u7684\u529f\u80fd\u548c\u914d\u7f6e")),(0,a.kt)("p",null,"ByConity \u6700\u5e38\u7528\u7684\u8868\u5f15\u64ce\u662f CnchMergeTree\u3002\u5176\u4ed6\u7279\u6b8a\u7c7b\u578b\u7684\u8868\u5f15\u64ce\u5305\u62ec Hive \u5916\u8868\u3001Kafka \u8868\u7b49 \u3002\u4e0b\u9762\u91cd\u70b9\u8bb2\u4e0b MergeTree \u8868\u5f15\u64ce\u7684\u539f\u7406\u3002"),(0,a.kt)("h4",{id:"cnchmergetree-\u8868\u539f\u7406"},"CnchMergeTree \u8868\u539f\u7406"),(0,a.kt)("p",null,"CnchMergeTree \u8868\u662f\u6700\u5e38\u7528\u7684\u8868\u5f15\u64ce\uff0c\u6838\u5fc3\u601d\u60f3\u548c LSM-Tree \u7c7b\u4f3c\uff0c\u6570\u636e\u6309\u5206\u533a\u952e(partition by)\u8fdb\u884c\u5206\u533a\uff0c\u7136\u540e\u6392\u5e8f\u952e(order by)\u8fdb\u884c\u6709\u5e8f\u5b58\u50a8\u3002\u4e3b\u8981\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86\u5206\u533a\u952e\u7684\u8bdd\uff0c\u6570\u636e\u4f1a\u6309\u5206\u533a\u952e\u5212\u5206\u6210\u4e86\u4e0d\u540c\u7684\u903b\u8f91\u6570\u636e\u96c6\uff08\u903b\u8f91\u5206\u533a\uff0cPartition)")),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a\u903b\u8f91\u5206\u533a\u53ef\u4ee5\u5b58\u5728\u96f6\u5230\u591a\u4e2a\u6570\u636e\u7247\u6bb5\uff08DataPart\uff09\u3002\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u53ef\u4ee5\u88c1\u526a\u5206\u533a\uff0c\u901a\u5e38\u53ef\u4ee5\u52a0\u901f\u67e5\u8be2\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5206\u533a\u952e\uff0c\u5168\u90e8\u6570\u636e\u90fd\u5728\u4e00\u4e2a\u903b\u8f91\u5206\u533a\u91cc\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7247\u6bb5")),(0,a.kt)("p",null,"\u6570\u636e\u7247\u6bb5\u91cc\u7684\u6570\u636e\u6309\u6392\u5e8f\u952e\u6392\u5e8f\u3002\u6bcf\u4e2a\u6570\u636e\u7247\u6bb5\u8fd8\u4f1a\u5b58\u5728\u4e00\u4e2a min/max \u7d22\u5f15\uff0c\u6765\u52a0\u901f\u5206\u533a\u9009\u62e9\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u9897\u7c92\uff08Granule\uff09")),(0,a.kt)("p",null,"\u6bcf\u4e2a\u6570\u636e\u7247\u6bb5\u88ab\u903b\u8f91\u7684\u5206\u5272\u6210\u9897\u7c92\uff08Granule \uff09\uff0c\u9ed8\u8ba4\u7684 Granule \u4e3a 8192 \u884c\uff08\u7531\u8868\u7684 index_granularity \u914d\u7f6e\u51b3\u5b9a\uff09\u3002\u9897\u7c92\u662f ByConity \u4e2d\u8fdb\u884c\u6570\u636e\u67e5\u8be2\u65f6\u7684\u6700\u5c0f\u4e0d\u53ef\u5206\u5272\u6570\u636e\u96c6\u3002\u6bcf\u4e2a\u9897\u7c92\u7684\u7b2c\u4e00\u884c\u901a\u8fc7\u8be5\u884c\u7684\u4e3b\u952e\u503c\u8fdb\u884c\u6807\u8bb0\uff0c ByConity \u4f1a\u4e3a\u6bcf\u4e2a\u6570\u636e\u7247\u6bb5\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u6587\u4ef6\u6765\u5b58\u50a8\u8fd9\u4e9b\u6807\u8bb0\u3002\u5bf9\u4e8e\u6bcf\u5217\uff0c\u65e0\u8bba\u5b83\u662f\u5426\u5305\u542b\u5728\u4e3b\u952e\u5f53\u4e2d\uff0cByConity \u90fd\u4f1a\u5b58\u50a8\u7c7b\u4f3c\u6807\u8bb0\u3002\u8fd9\u4e9b\u6807\u8bb0\u8ba9\u60a8\u53ef\u4ee5\u5728\u5217\u6587\u4ef6\u4e2d\u76f4\u63a5\u627e\u5230\u6570\u636e\u3002Granule \u4f5c\u4e3a ByConity \u7a00\u758f\u7d22\u5f15\u7684\u7d22\u5f15\u76ee\u6807\uff0c\u4e5f\u662f\u5728\u5185\u5b58\u4e2d\u8fdb\u884c\u6570\u636e\u626b\u63cf\u7684\u5355\u4f4d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540e\u53f0 Merge")),(0,a.kt)("p",null,"\u540e\u53f0\u4efb\u52a1\u4f1a\u5b9a\u65f6\u5bf9\u540c\u4e00\u4e2a\u5206\u533a\u7684 DataPart \u8fdb\u884c\u5408\u5e76\uff0c\u5e76\u4fdd\u6301\u6309\u6392\u5e8f\u952e\u6709\u5e8f\u3002\u540e\u53f0\u7684\u5408\u5e76\u51cf\u5c11\u4e86 Part \u7684\u6570\u76ee\uff0c\u4ee5\u4fbf\u66f4\u9ad8\u6548\u5b58\u50a8\uff0c\u5e76\u63d0\u5347\u4e86\u67e5\u8be2\u6027\u80fd\u3002"),(0,a.kt)("h2",{id:"cnchmergetree-\u5efa\u8868\u8bed\u53e5\u548c\u76f8\u5173\u914d\u7f6e"},"CnchMergeTree \u5efa\u8868\u8bed\u53e5\u548c\u76f8\u5173\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name\n(\n    name1 [type1] [NULL|NOT NULL] [DEFAULT|ALIAS expr1] [compression_codec] [TTL expr1],\n    name2 [type2] [NULL|NOT NULL] [DEFAULT|ALIAS expr2] [compression_codec] [TTL expr2],\n    ...\n    INDEX index_name1 expr1 TYPE type1(...) GRANULARITY value1,\n    INDEX index_name2 expr2 TYPE type2(...) GRANULARITY value2\uff0c\n) ENGINE = CnchMergeTree()\nORDER BY expr\n[PARTITION BY expr]\n[CLUSTER BY (column, expression, ...) INTO value1 BUCKETS SPLIT_NUMBER value2 WITH_RANGE]\n[PRIMARY KEY expr]\n[UNIQUE KEY expr]\n[SAMPLE BY expr]\n[TTL expr]\n[SETTINGS name=value, ...]\n\n")),(0,a.kt)("h3",{id:"\u8bbe\u8ba1\u5206\u533a\u952epartition-by"},"\u8bbe\u8ba1\u5206\u533a\u952e\uff08PARTITION BY)"),(0,a.kt)("p",null,"\u5206\u533a\u952e\u5b9a\u4e49\u5206\u533a\uff0c\u5206\u533a\u662f\u5728\u4e00\u4e2a\u8868\u4e2d\u901a\u8fc7\u6307\u5b9a\u7684\u89c4\u5219\u5212\u5206\u800c\u6210\u7684\u903b\u8f91\u6570\u636e\u96c6\u3002\u53ef\u4ee5\u6309\u4efb\u610f\u6807\u51c6\u8fdb\u884c\u5206\u533a\uff0c\u5982\u6309\u65e5\u671f\u3002\u4e3a\u4e86\u51cf\u5c11\u9700\u8981\u64cd\u4f5c\u7684\u6570\u636e\uff0c\u6bcf\u4e2a\u5206\u533a\u90fd\u662f\u5206\u5f00\u5b58\u50a8\u7684\u3002\u67e5\u8be2\u65f6\uff0cByConity \u5c3d\u91cf\u4f7f\u7528\u8fd9\u4e9b\u5206\u533a\u7684\u6700\u5c0f\u5b50\u96c6\u3002\u5efa\u8868\u65f6\u5019\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"PARTITION BY expr")," \u5b50\u53e5\u6307\u5b9a\u3002\u5206\u533a\u952e\u53ef\u4ee5\u662f\u8868\u4e2d\u5217\u7684\u4efb\u610f\u8868\u8fbe\u5f0f\u3002\u4f8b\u5982\uff0c\u6307\u5b9a\u6309\u6708\u5206\u533a\uff0c\u8868\u8fbe\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"toYYYYMM(date)"),"\uff1b\u6216\u8005\u6309\u8868\u8fbe\u5143\u7ec4\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"(toMonday(date), EventType)")," \u7b49\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\uff0c\u8868\u4e2d\u5206\u533a\u8868\u8fbe\u5f0f\u8ba1\u7b97\u51fa\u7684\u53d6\u503c\u8303\u56f4\u4e0d\u80fd\u592a\u5927\uff08\u63a8\u8350\u4e0d\u8d85\u8fc7\u4e00\u4e07\uff09\uff0c\u592a\u591a\u5206\u533a\u4f1a\u5360\u7528\u6bd4\u8f83\u5927\u7684\u5185\u5b58\u4ee5\u53ca\u5e26\u6765\u6bd4\u8f83\u591a\u7684 IO \u548c\u8ba1\u7b97\u5f00\u9500\u3002"),(0,a.kt)("p",null,"\u5408\u7406\u7684\u8bbe\u8ba1\u5206\u533a\u952e\u53ef\u4ee5\u6781\u5927\u51cf\u5c11\u67e5\u8be2\u65f6\u9700\u8981\u626b\u63cf\u7684\u6570\u636e\u91cf\uff0c\u4e00\u822c\u8003\u8651\u5c06\u67e5\u8be2\u4e2d\u6700\u5e38\u7528\u7684\u6761\u4ef6\u540c\u65f6\u53d6\u503c\u8303\u56f4\u4e0d\u8d85\u8fc7\u4e00\u4e07\u7684\u5217\u8bbe\u8ba1\u4e3a\u5206\u533a\u952e\uff08\u5982\u65e5\u671f\u7b49\uff09\u3002"),(0,a.kt)("h3",{id:"\u8bbe\u8ba1\u6392\u5e8f\u952eorder-by"},"\u8bbe\u8ba1\u6392\u5e8f\u952e\uff08ORDER BY\uff09"),(0,a.kt)("p",null,"\u53ef\u4ee5\u662f\u4e00\u7ec4\u5217\u7684\u5143\u7ec4\u6216\u4efb\u610f\u7684\u8868\u8fbe\u5f0f\u3002 \u4f8b\u5982: ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY (OrderID, Date)")," \u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u6392\u5e8f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY tuple()"),"\u3002DataPart \u91cc\u7684\u6570\u636e\u5c06\u6309\u7167\u6392\u5e8f\u952e\u8fdb\u884c\u6392\u5e8f\u3002\u8bf7\u6ce8\u610f\uff0corder by \u4f7f\u7528\u7684\u5b57\u6bb5\u5728\u5efa\u8868\u540e\uff0c\u65e0\u6cd5\u88ab\u4fee\u6539\u3002"),(0,a.kt)("h3",{id:"\u8bbe\u8ba1\u4e3b\u952eprimary-key"},"\u8bbe\u8ba1\u4e3b\u952e(PRIMARY KEY)"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0d\u9700\u8981\u663e\u5f0f\u6307\u5b9a\uff0cByConity \u5c06\u4f7f\u7528\u6392\u5e8f\u952e\u4f5c\u4e3a\u4e3b\u952e\u3002\u5f53\u6709\u7279\u6b8a\u573a\u666f\u4e3b\u952e\u548c\u6392\u5e8f\u952e\u4e0d\u4e00\u81f4\u65f6\uff0c\u4e3b\u952e\u5fc5\u987b\u4e3a\u6392\u5e8f\u952e\u7684\u6700\u5de6\u524d\u7f00\u3002\u5982\u6392\u5e8f\u952e\u4e3a(OrderID, Date)\uff0c\u4e3b\u952e\u5fc5\u987b\u4e3a OrderID\uff0c\u4e0d\u80fd\u4e3a Date\u3002\u5728\u4e00\u4e9b\u7279\u6b8a\u7684\u8868\u5f15\u64ce\uff0c\u5982 CnchAggregatingMergeTree\u3001CnchSummingMergeTree \u4e2d\uff0c\u4e3b\u952e\u4f1a\u4e0e\u6392\u5e8f\u952e\u4e0d\u540c\u3002"),(0,a.kt)("p",null,"ByConity \u4f1a\u5728\u4e3b\u952e\u4e0a\u5efa\u7acb\u4ee5 Granule \u4e3a\u5355\u4f4d\u7684\u7a00\u758f\u7d22\u5f15\uff0c\uff08\u4e0e\u4e4b\u5bf9\u6bd4\uff0c\u6240\u8c13\u7a20\u5bc6\u7d22\u5f15\u5219\u662f\u6bcf\u4e00\u884c\u90fd\u4f1a\u5efa\u7acb\u7d22\u5f15\u4fe1\u606f\uff09\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u80fd\u5339\u914d\u4e3b\u952e\u7d22\u5f15\u7684\u6700\u5de6\u524d\u7f00\uff0c\u901a\u8fc7\u4e3b\u952e\u7d22\u5f15\u53ef\u4ee5\u5feb\u901f\u8fc7\u6ee4\u51fa\u53ef\u80fd\u9700\u8981\u8bfb\u53d6\u7684\u6570\u636e\u9897\u7c92\uff0c\u76f8\u6bd4\u626b\u63cf\u6574\u4e2a DataPart\uff0c\u901a\u5e38\u8981\u9ad8\u6548\u5f88\u591a\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\u9700\u8981\u6ce8\u610f\uff0cPRIMARY KEY \u4e0d\u80fd\u4fdd\u8bc1\u552f\u4e00\u6027\uff0c\u6240\u4ee5\u53ef\u4ee5\u63d2\u5165\u4e3b\u952e\u91cd\u590d\u7684\u6570\u636e\u884c\u3002"),(0,a.kt)("p",null,"\u5206\u533a\uff08PARTITION BY\uff09\u548c\u4e3b\u952e(PRIMARY KEY)\u662f\u4e24\u79cd\u4e0d\u540c\u7684\u52a0\u901f\u6570\u636e\u67e5\u8be2\u7684\u65b9\u5f0f\uff0c\u5b9a\u4e49\u7684\u65f6\u5019\u5e94\u5f53\u5c3d\u91cf\u9519\u5f00\u4f7f\u7528\u4e0d\u540c\u7684\u5217\u6765\u5b9a\u4e49\u4e24\u8005\uff0c\u6765\u8986\u76d6\u66f4\u591a\u7684\u67e5\u8be2\u573a\u666f\u3002\u4f8b\u5982 order by \u7684\u7b2c\u4e00\u4e2a\u5217\u4e00\u5b9a\u4e0d\u8981\u91cd\u590d\u653e\u5230 partition by \u91cc\u3002\u4e0b\u9762\u662f\u5982\u4f55\u9009\u62e9\u4e3b\u952e\u7684\u4e00\u4e9b\u8003\u8651\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u662f\u67e5\u8be2\u6761\u4ef6\u91cc\u5e38\u7528\u7684\u5217"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u975e\u5206\u533a\u952e\u7684\u7b2c\u4e00\u4e2a\u5217"),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u5217\u7684\u9009\u62e9\u6027\uff0c\u4f8b\u5982\u6027\u522b\u3001\u662f/\u5426\u8fd9\u79cd\u53ef\u9009\u503c\u592a\u5c11\u7684\u5217\u4e0d\u5efa\u8bae\u653e\u5165\u4e3b\u952e\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u5047\u5982\u73b0\u5728\u7684\u4e3b\u952e\u662f\uff08a\uff0cb)\uff0c\u5982\u679c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u7ed9\u5b9a\uff08a\uff0cb\uff09\u5bf9\u5e94\u7684\u6570\u636e\u8303\u56f4\u5f88\u5927\uff08\u5305\u542b\u591a\u4e2a Granule\uff09\uff0c\u53ef\u4ee5\u8003\u8651\u628a\u4e00\u4e2a\u65b0\u7684\u67e5\u8be2\u5e38\u7528\u5217\u9644\u52a0\u5230\u4e3b\u952e\u4e2d\uff0c\u8fd9\u6837\u53ef\u4ee5\u8fc7\u6ee4\u66f4\u591a\u7684\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fc7\u957f\u7684\u4e3b\u952e\u4f1a\u5bf9\u63d2\u5165\u6027\u80fd\u548c\u5185\u5b58\u6d88\u8017\u6709\u8d1f\u9762\u5f71\u54cd\uff0c\u4f46\u5bf9\u67e5\u8be2\u6027\u80fd\u6ca1\u6709\u5f71\u54cd\u3002")),(0,a.kt)("h3",{id:"\u552f\u4e00\u952e\u7d22\u5f15unique-key"},"\u552f\u4e00\u952e\u7d22\u5f15(UNIQUE KEY)"),(0,a.kt)("p",null,"\u4e3b\u952e\uff08PRIMARY KEY\uff09\u4e0d\u80fd\u4fdd\u8bc1\u53bb\u91cd\uff0c\u5982\u679c\u6709\u552f\u4e00\u952e\u53bb\u91cd\u7684\u9700\u6c42\uff0c\u9700\u8981\u5728\u5efa\u8868\u65f6\u8bbe\u7f6e\u552f\u4e00\u952e\u7d22\u5f15\u3002\u8bbe\u7f6e\u552f\u4e00\u952e\u4e4b\u540e\uff0cByConity \u63d0\u4f9b upsert \u66f4\u65b0\u5199\u8bed\u4e49\uff0c\u53ef\u4ee5\u6839\u636e\u552f\u4e00\u952e\u9ad8\u6548\u66f4\u65b0\u6570\u636e\u884c\u3002\u67e5\u8be2\u81ea\u52a8\u8fd4\u56de\u6bcf\u4e2a\u552f\u4e00\u952e\u7684\u6700\u65b0\u503c\u3002"),(0,a.kt)("p",null,"\u552f\u4e00\u952e\u53ef\u4ee5\u662f\u4e00\u7ec4\u5217\u7684\u5143\u7ec4\u6216\u4efb\u610f\u7684\u8868\u8fbe\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNIQUE KEY (product_id, sipHash64(city))"),"\u3002"),(0,a.kt)("p",null,"\u552f\u4e00\u5efa\u7d22\u5f15\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"partition_level_unique_keys")," \u63a7\u5236\u662f\u5206\u533a\u7ea7\u522b\u552f\u4e00\u8fd8\u662f\u5168\u8868\u552f\u4e00\uff0c\u76ee\u524d\u63a8\u8350\u5b9e\u8df5\u4e3a\uff1a\u5206\u533a\u552f\u4e00\u7d22\u5f15\uff0c\u5355\u5206\u533a\u6570\u636e\u91cf\u4e0d\u8d85\u8fc7\u5343\u4e07\u7ea7\u522b",(0,a.kt)("strong",{parentName:"p"},"\u3002"),"\u82e5\u4e3a\u5168\u8868\u552f\u4e00\uff0c\u5219\u5168\u8868\u6570\u636e\u91cf\u5efa\u8bae\u4e0d\u8d85\u8fc7\u5343\u4e07\u7ea7\u522b\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u552f\u4e00\u952e\u67e5\u8be2\u65f6\u4f1a\u7528\u4e0a\u552f\u4e00\u952e\u7d22\u5f15\u8fc7\u6ee4\u6570\u636e\u52a0\u901f\u67e5\u8be2\uff0c\u6240\u4ee5\u901a\u5e38\u4e3b\u952e\u53ef\u4ee5\u8bbe\u7f6e\u548c\u552f\u4e00\u952e\u4e0d\u4e00\u6837\u5217\uff0c\u8986\u76d6\u66f4\u591a\u7684\u67e5\u8be2\u6761\u4ef6\u3002\u4e0d\u8fc7\u5982\u679c\u8981\u4f7f\u7528\u90e8\u5206\u5217\u66f4\u65b0\u529f\u80fd\u7684\u8bdd\uff0c\u662f\u9700\u8981\u552f\u4e00\u952e\u4e3a\u6392\u5e8f\u952e\u7684\u6700\u5de6\u524d\u7f00\u3002"),(0,a.kt)("h3",{id:"\u8df3\u6570\u7d22\u5f15index"},"\u8df3\u6570\u7d22\u5f15\uff08Index\uff09"),(0,a.kt)("p",null,"\u5efa\u8868\u65f6\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49\u8df3\u6570\u7d22\u5f15"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INDEX index_name expr TYPE type(...) GRANULARITY granularity_value\n\n")),(0,a.kt)("h4",{id:"\u53ef\u7528\u7684\u7d22\u5f15\u7c7b\u578b"},"\u53ef\u7528\u7684\u7d22\u5f15\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minmax")," \u5b58\u50a8\u6307\u5b9a\u8868\u8fbe\u5f0f\u7684\u6781\u503c\uff08\u5982\u679c\u8868\u8fbe\u5f0f\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"tuple")," \uff0c\u5219\u5b58\u50a8 ",(0,a.kt)("inlineCode",{parentName:"li"},"tuple")," \u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684\u6781\u503c\uff09\uff0c\u8fd9\u4e9b\u4fe1\u606f\u7528\u4e8e\u8df3\u8fc7\u6570\u636e\u5757\uff0c\u7c7b\u4f3c\u4e3b\u952e\u3002\u8df3\u6570\u7d22\u5f15\u529f\u80fd\u6b63\u5728\u6d4b\u8bd5\u4e2d\uff0c\u7b49\u5b8c\u6210\u540e\u8865\u5145\u652f\u6301\u7684\u8df3\u6570\u7d22\u5f15\u7c7b\u578b\u3002")),(0,a.kt)("h3",{id:"\u8bbe\u8ba1-bucket"},"\u8bbe\u8ba1 Bucket"),(0,a.kt)("p",null,"Bucket \u8868\u662f\u4e00\u4e2a\u53ef\u9009\u7684\u8868\u7ea7\u8bbe\u7f6e\uff0c\u5982\u679c\u8bbe\u7f6e\u5408\u9002\u7684 Bucket, \u7cfb\u7edf\u4f1a\u6839\u636e\u7528\u6237\u63d0\u4ea4\u7684 Cluster Key(\u5373\u5efa\u8868\u8bed\u53e5\u4e2d\u63d0\u4f9b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5217\u3001\u8868\u8fbe\u5f0f\uff09\u53bb\u6574\u7406\u8868\u6570\u636e\uff0c\u5c06\u76f8\u540c\u503c\u7684\u6570\u636e\u805a\u7c07\u5728\u540c\u4e00\u4e2a bucket number \u4e0b\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 Cluster Key \u805a\u7c07\u6570\u636e\u5728\u5927\u8868\u4e0a\u53ef\u4ee5\u83b7\u5f97\u4ee5\u4e0b\u51e0\u9879\u6536\u76ca\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9488\u5bf9 cluster key \u7684\u70b9\u67e5\u53ef\u4ee5\u8fc7\u6ee4\u6389\u5927\u90e8\u5206\u6570\u636e\uff0c\u964d\u4f4e IO \u91cf\u83b7\u5f97\u66f4\u77ed\u7684\u6267\u884c\u65f6\u95f4\u548c\u66f4\u9ad8\u7684\u5e76\u53d1 QPS;"),(0,a.kt)("li",{parentName:"ol"},"\u9488\u5bf9 cluster key \u7684\u805a\u5408\u8ba1\u7b97\uff0c\u53ef\u4ee5\u6709\u66f4\u5c11\u7684\u5185\u5b58\u5360\u7528\u548c\u66f4\u77ed\u7684\u6267\u884c\u65f6\u95f4\uff0c\u914d\u5408 distributed_perfect_shard \u4f18\u5316\u53ef\u4ee5\u83b7\u5f97\u8fdb\u4e00\u6b65\u7684\u63d0\u9ad8;"),(0,a.kt)("li",{parentName:"ol"},"\u4e24\u5f20\u6216\u8005\u591a\u5f20\u8868\u9488\u5bf9 cluster key \u7684 join \u53ef\u4ee5\u83b7\u5f97 co-located join \u7684\u4f18\u5316\uff0c\u6781\u5927\u7684\u964d\u4f4e shuffle \u6570\u636e\u91cf\u5e76\u5f97\u5230\u66f4\u77ed\u7684\u6267\u884c\u65f6\u95f4;")),(0,a.kt)("p",null,"\u7531\u4e8e Bucket \u8868\u7684\u8bbe\u7f6e\u6bd4\u8f83\u590d\u6742\uff0c\u8bf7\u53c2\u8003\u540e\u6587\u4e2d Bucket \u8868\u6700\u4f73\u5b9e\u8df5\u7684\u7ec6\u5219\u6765\u8bbe\u7f6e\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e24\u79cd\u573a\u666f\u9002\u5408\u8bbe\u7f6e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8868\u8db3\u591f\u5927\uff0c\u610f\u5473\u7740\u5728\u4e00\u4e2a\u5206\u533a\u4e0b\u7684 parts \u6570\u91cf\u81f3\u5c11\u9700\u8981\u663e\u8457\u591a\u4e8e worker \u6570\u91cf\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u8bed\u53e5\u53ef\u4ee5\u4ece\u4e0a\u8ff0\u6536\u76ca\u70b9\u4e2d\u83b7\u76ca\uff1b")),(0,a.kt)("h3",{id:"\u91c7\u6837"},"\u91c7\u6837"),(0,a.kt)("p",null,"\u7528\u4e8e\u62bd\u6837\u7684\u8868\u8fbe\u5f0f\uff0c\u53ef\u9009\u9879\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u7528\u62bd\u6837\u8868\u8fbe\u5f0f\uff0c\u4e3b\u952e\u4e2d\u5fc5\u987b\u5305\u542b\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u3002\u4f8b\u5982\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"SAMPLE BY intHash32(UserID) ORDER BY (CounterID, EventDate, intHash32(UserID))")," \u3002"),(0,a.kt)("p",null,"\u7ec6\u8282\u53c2\u8003\u91c7\u6837\u529f\u80fd\uff08\u9700\u8981\u72ec\u7acb\u4e00\u7bc7\u91c7\u6837\u529f\u80fd\uff09"),(0,a.kt)("h3",{id:"\u5217\u548c\u8868\u7684-ttl"},"\u5217\u548c\u8868\u7684 TTL"),(0,a.kt)("p",null,"\u6307\u5b9a\u884c\u5b58\u50a8\u7684\u6301\u7eed\u65f6\u95f4\u5e76\u5b9a\u4e49\u6570\u636e\u7247\u6bb5\u5728\u786c\u76d8\u548c\u5377\u4e0a\u7684\u79fb\u52a8\u903b\u8f91\u7684\u89c4\u5219\u5217\u8868\uff0c\u53ef\u9009\u9879\u3002"),(0,a.kt)("p",null,"\u8868\u8fbe\u5f0f\u4e2d\u5fc5\u987b\u5b58\u5728\u81f3\u5c11\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime")," \u7c7b\u578b\u7684\u5217\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TTL date + INTERVAl 1 DAY")),(0,a.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"\u8868\u548c\u5217\u7684 TTL"),"\uff08\u592a\u591a\u4e86\uff0c\u53ef\u80fd\u8981\u72ec\u7acb\u4e00\u7bc7 TTL \u7684\uff09"),(0,a.kt)("h3",{id:"\u9ad8\u7ea7\u914d\u7f6e"},"\u9ad8\u7ea7\u914d\u7f6e"),(0,a.kt)("h4",{id:"granule-\u914d\u7f6e"},"Granule \u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index_granularity")," \u2014 \u7d22\u5f15\u7c92\u5ea6\u3002\u7d22\u5f15\u4e2d\u76f8\u90bb\u7684\u300e\u6807\u8bb0\u300f\u95f4\u7684\u6570\u636e\u884c\u6570\uff08\u5bf9\u5e94 Granule \u5927\u5c0f\uff09\u3002\u9ed8\u8ba4\u503c 8192 \u3002")),(0,a.kt)("p",null,"\u540e\u9762\u4e09\u4e2a\u914d\u7f6e\u5f85\u6d4b\u8bd5\uff0cRD \u672a\u9a8c\u8bc1\u529f\u80fd\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index_granularity_bytes")," \u2014 \u7d22\u5f15\u7c92\u5ea6\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff0c\u9ed8\u8ba4\u503c: 10Mb\u3002\u5982\u679c\u60f3\u8981\u4ec5\u6309\u6570\u636e\u884c\u6570\u9650\u5236\u7d22\u5f15\u7c92\u5ea6, \u8bf7\u8bbe\u7f6e\u4e3a 0(\u4e0d\u5efa\u8bae)\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min_index_granularity_bytes")," - \u5141\u8bb8\u7684\u6700\u5c0f\u6570\u636e\u7c92\u5ea6\uff0c\u9ed8\u8ba4\u503c\uff1a1024b\u3002\u8be5\u9009\u9879\u7528\u4e8e\u9632\u6b62\u8bef\u64cd\u4f5c\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e2a\u975e\u5e38\u4f4e\u7d22\u5f15\u7c92\u5ea6\u7684\u8868\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enable_mixed_granularity_parts")," \u2014 \u662f\u5426\u542f\u7528\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"index_granularity_bytes")," \u63a7\u5236\u7d22\u5f15\u7c92\u5ea6\u7684\u5927\u5c0f\u3002\u5728\u8001\u7248\u672c\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"index_granularity")," \u914d\u7f6e\u80fd\u591f\u7528\u4e8e\u9650\u5236\u7d22\u5f15\u7c92\u5ea6\u7684\u5927\u5c0f\u3002\u5f53\u4ece\u5177\u6709\u5f88\u5927\u7684\u884c\uff08\u51e0\u5341\u4e0a\u767e\u5146\u5b57\u8282\uff09\u7684\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u65f6\u5019\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"index_granularity_bytes")," \u914d\u7f6e\u80fd\u591f\u63d0\u5347 ByConity \u7684\u6027\u80fd\u3002\u5982\u679c\u60a8\u7684\u8868\u91cc\u6709\u5f88\u5927\u7684\u884c\uff0c\u53ef\u4ee5\u5f00\u542f\u8fd9\u9879\u914d\u7f6e\u6765\u63d0\u5347 ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT")," \u67e5\u8be2\u7684\u6027\u80fd\u3002")),(0,a.kt)("h4",{id:"\u8ba1\u7b97\u7ec4\u914d\u7f6e"},"\u8ba1\u7b97\u7ec4\u914d\u7f6e"),(0,a.kt)("p",null,"\u53c2\u8003\u914d\u7f6e\u8ba1\u7b97\u7ec4"),(0,a.kt)("h4",{id:"merge-\u76f8\u5173\u914d\u7f6e"},"merge \u76f8\u5173\u914d\u7f6e"),(0,a.kt)("p",null,"\u53c2\u8003\u540e\u53f0\u4efb\u52a1\u7ae0\u8282"),(0,a.kt)("h4",{id:"\u5b58\u50a8\u76f8\u5173\u914d\u7f6e"},"\u5b58\u50a8\u76f8\u5173\u914d\u7f6e"),(0,a.kt)("p",null,"\u53c2\u8003\u5b58\u50a8\u76f8\u5173\u7ae0\u8282"),(0,a.kt)("h4",{id:"\u552f\u4e00\u7d22\u5f15\u76f8\u5173\u914d\u7f6e"},"\u552f\u4e00\u7d22\u5f15\u76f8\u5173\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"partition_level_unique_keys")," - \u552f\u4e00\u7d22\u5f15\u662f\u5426\u662f\u5206\u533a\u552f\u4e00\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff1b\u5982\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u4ee3\u8868\u552f\u4e00\u7d22\u5f15\u662f\u5168\u8868\u7ea7\u522b\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cloud_enable_staging_area")," - \u662f\u5426\u5f00\u542f\u5f02\u6b65\u5199\u5165\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u3002")),(0,a.kt)("h4",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,a.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("h3",{id:"\u4e3b\u952e\u7d22\u5f15\u7684\u6700\u4f73\u5b9e\u8df5"},"\u4e3b\u952e\u7d22\u5f15\u7684\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/guides/improving-query-performance/sparse-primary-indexes/"},"https://clickhouse.com/docs/zh/guides/improving-query-performance/sparse-primary-indexes/")),(0,a.kt)("h3",{id:"\u4e8c\u7ea7\u7d22\u5f15\u6700\u4f73\u5b9e\u8df5"},"\u4e8c\u7ea7\u7d22\u5f15\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/guides/improving-query-performance/skipping-indexes"},"https://clickhouse.com/docs/zh/guides/improving-query-performance/skipping-indexes")),(0,a.kt)("h3",{id:"\u5217\u7c7b\u578b\u8003\u8651"},"\u5217\u7c7b\u578b\u8003\u8651"),(0,a.kt)("h4",{id:"\u907f\u514d\u4e00\u5473\u4f7f\u7528-string-\u7c7b\u578b"},"\u907f\u514d\u4e00\u5473\u4f7f\u7528 String \u7c7b\u578b"),(0,a.kt)("p",null,"\u5982\u679c\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 Int(8|16|32|64|128|256) / Date / Date32 / DateTime / DateTime64 / Float / Decimal \u4ee3\u66ff String"),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u5224\u65ad\u65b9\u6cd5\u5c31\u662f\u770b\u662f\u5426\u53ef\u4ee5\u8f6c\u6362\u5230\u76ee\u6807\u7c7b\u578b\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT countIf(toUInt8OrNull(col) IS NULL) FROM table"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT countIf(toDateOrNull(col) IS NULL) FROM table")),(0,a.kt)("p",null,"\u5bf9\u5185\u5bb9\u76f8\u5bf9\u56fa\u5b9a\u7684 String Column, \u53ef\u4ee5\u8003\u8651\u4f7f\u7528 Enum \u4ee3\u66ff\uff0c\u6bd4\u5982\u7701\u4efd\u540d\u79f0. Enum \u540e\u671f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," \u6dfb\u52a0\u65b0\u503c"),(0,a.kt)("p",null,"String \u6700\u5c0f\u6700\u5927\u957f\u5ea6\u5dee\u8ddd\u4e0d\u8d85\u8fc7 8 \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 FixedString\uff0c\u56e0\u4e3a String \u76f8\u6bd4 FixedString \u5728\u5185\u5b58\u4e2d\u8981\u591a\u50a8\u5b58 8 \u5b57\u8282\u7684 offset ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT min(length(col)), max(length(col)) FROM table")),(0,a.kt)("h4",{id:"nullable-\u9009\u62e9"},"Nullable \u9009\u62e9"),(0,a.kt)("p",null,"\u5982\u679c\u786e\u5b9a\u5217\u4e2d\u4e0d\u5305\u542b Null\uff0c\u4e0d\u8981\u4f7f\u7528 Nullable \u7c7b\u578b\uff0c\u4f1a\u5bf9\u6027\u80fd\u6709\u8d1f\u9762\u5f71\u54cd"),(0,a.kt)("h3",{id:"lowcardinality"},"LowCardinality"),(0,a.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u5217\u7684\u57fa\u6570\u8f83\u4f4e\uff0c\u4f8b\u5982\u4e00\u4e2a DataPart \u5185\u53ea\u6709\u4e0d\u8d85\u8fc7 10000 \u4e2a\u4e0d\u76f8\u7b49\u7684\u503c\uff0c\u53ef\u4ee5\u8003\u8651\u7528 LowCardinality \u7c7b\u578b\u3002LowCardinality \u7c7b\u578b\u4f1a\u5bf9\u539f\u59cb\u5217\u8fdb\u884c\u5b57\u5178\u7f16\u7801\u3002\u5bf9\u5f88\u591a\u5e94\u7528\u6765\u8bf4\uff0c\u5904\u7406\u5b57\u5178\u7f16\u7801\u7684\u6570\u636e\u53ef\u4ee5\u663e\u8457\u7684\u589e\u52a0\u67e5\u8be2\u901f\u5ea6\uff0c\u5e76\u4e14\u964d\u4f4e\u5b58\u50a8\u7a7a\u95f4\uff0c\u63d0\u5347 IO \u6548\u7387\u3002"),(0,a.kt)("h3",{id:"\u5217-codec-\u9009\u62e9"},"\u5217 Codec \u9009\u62e9"),(0,a.kt)("p",null,"\u901a\u7528\u7f16\u7801 lz4 / lz4hc / zstd / deflate_qpl"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#general-purpose-codecs"},"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#general-purpose-codecs")),(0,a.kt)("p",null,"\u901a\u5e38\u6765\u8bf4 lz4 \u7f16\u7801\u5feb\u4f46\u538b\u7f29\u7387\u6ca1\u6709 zstd \u9ad8, \u5728\u652f\u6301 Intel IAA \u7684\u5e73\u53f0\u4e0a\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 qpl"),(0,a.kt)("p",null,"\u7279\u6b8a\u7f16\u7801\u53ef\u4ee5\u548c\u4e0a\u9762\u7684\u901a\u7528\u7f16\u7801\u4e00\u8d77\u4f7f\u7528: Delta / DoubleDelta / Gorilla / FPC / T64"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#specialized-codecs"},"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#specialized-codecs")),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u65f6\u5e8f\u53ef\u4ee5\u7528 doubledelta, \u968f\u65f6\u5e8f\u53d8\u5316\u7684\u503c\u53ef\u4ee5\u7528 gorilla, FPC \u5728 64bit \u6d6e\u70b9\u6570\u4e0a\u6548\u679c\u6bd4\u8f83\u597d. T64 \u662f\u5bfb\u627e 64 \u4e2a\u503c\u7684\u5171\u540c\u9ad8\u4f4d\u8fdb\u884c\u88c1\u526a\uff0c\u53ea\u8bb0\u5f55\u53d8\u5316\u7684\u90e8\u5206"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DateTime \u7c7b\u578b: \u672a\u6392\u5e8f\uff0c\u5efa\u8bae\u7528 Delta+LZ4"),(0,a.kt)("li",{parentName:"ul"},"DateTime \u7c7b\u578b\uff1a\u6392\u5e8f\uff0c\u5efa\u8bae\u7528 LZ4"),(0,a.kt)("li",{parentName:"ul"},"Date \u7c7b\u578b\uff1a\u672a\u6392\u5e8f\uff0c\u5efa\u8bae\u7528 ZSTD"),(0,a.kt)("li",{parentName:"ul"},"Date \u7c7b\u578b\uff1a\u6392\u5e8f\uff08\u4f8b\uff1aPK\uff09\uff0c\u5efa\u8bae\u7528 LZ4")),(0,a.kt)("h3",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/engines/table-engines/mergetree-family/mergetree#tiao-shu-suo-yin-fen-duan-hui-zong-suo-yin-shi-yan-xing-de"},"https://clickhouse.com/docs/zh/engines/table-engines/mergetree-family/mergetree#tiao-shu-suo-yin-fen-duan-hui-zong-suo-yin-shi-yan-xing-de")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#column-compression-codecs"},"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#column-compression-codecs")))}k.isMDXComponent=!0}}]);