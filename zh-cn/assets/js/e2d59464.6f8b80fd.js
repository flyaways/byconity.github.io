"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6198],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>v});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(n),s=r,v=u["".concat(p,".").concat(s)]||u[s]||c[s]||i;return n?a.createElement(v,l(l({ref:e},d),{},{components:n})):a.createElement(v,l({ref:e},d))}));function v(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8685:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(4778),r=(n(9496),n(9613));const i={title:"\u76f4\u63a5\u8bbf\u95eeHive\u8868",sidebar_position:6,tags:["Docs"]},l="\u76f4\u63a5\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90",o={unversionedId:"data-import/import-methods/direct-access-via-hive",id:"data-import/import-methods/direct-access-via-hive",title:"\u76f4\u63a5\u8bbf\u95eeHive\u8868",description:"\u4eceHive\u5916\u8868\u5bfc\u5165",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/data-import/import-methods/direct-access-via-hive.mdx",sourceDirName:"data-import/import-methods",slug:"/data-import/import-methods/direct-access-via-hive",permalink:"/zh-cn/docs/data-import/import-methods/direct-access-via-hive",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/data-import/import-methods/direct-access-via-hive.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:6,frontMatter:{title:"\u76f4\u63a5\u8bbf\u95eeHive\u8868",sidebar_position:6,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u76f4\u63a5\u8bbf\u95eeMySQL\u8868",permalink:"/zh-cn/docs/data-import/import-methods/direct-access-via-mysql"},next:{title:"\u6570\u636e\u6a21\u578b",permalink:"/zh-cn/docs/table-design/data-model"}},p={},m=[{value:"\u4eceHive\u5916\u8868\u5bfc\u5165",id:"\u4ecehive\u5916\u8868\u5bfc\u5165",level:2},{value:"\u4f7f\u7528\u793a\u4f8b\uff1a",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u53c2\u6570\u8bbe\u7f6e",id:"\u53c2\u6570\u8bbe\u7f6e",level:3}],d={toc:m},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u76f4\u63a5\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90"},"\u76f4\u63a5\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90"),(0,r.kt)("h2",{id:"\u4ecehive\u5916\u8868\u5bfc\u5165"},"\u4eceHive\u5916\u8868\u5bfc\u5165"),(0,r.kt)("p",null,"CnchHive\u4e3aByConity\u63d0\u4f9b\u7684\u4e00\u79cd\u8868\u5f15\u64ce\uff0c\u652f\u6301\u4f7f\u7528\u5916\u8868\u7684\u65b9\u5f0f\u8fdb\u884c\u8054\u90a6\u67e5\u8be2\uff0c\u7528\u6237\u65e0\u9700\u901a\u8fc7\u6570\u636e\u5bfc\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u6570\u636e\u67e5\u8be2\u52a0\u901f\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b 1\uff1a\u6784\u5efa hive \u8868\u7684\u5168\u96c6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--\u521b\u5efahive\u5916\u8868\nCREATE TABLE t\n(\n  client_ip   String,\n  request     String,\n  status_code INT,\n  object_size INT,\n  date String\n)\nENGINE = CnchHive('psm', 'hive_database_name', 'hive_table_name')\nPARTITION BY date;\n\n--\u53c2\u6570\u8bf4\u660e\uff1a\n--psm\uff1ahivemetastore psm\n--hive_database_name\uff1ahive\u8868database name\n--hive_table_name\uff1ahive\u8868table name\n\n--\u67e5\u8be2hive\u5916\u8868\nselect * from  t where xxx;\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b 2\uff1a\u6784\u5efa hive \u8868\u7684\u5b50\u96c6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE t\n(\n  client_ip   String,\n  request     String,\n  date String\n)\nENGINE = CnchHive('psm', 'hive_database_name', 'hive_table_name')\nPARTITION BY date\n\n--\u53c2\u6570\u8bf4\u660e\uff1a\n--psm\uff1ahivemetastore psm\n--hive_database_name\uff1ahive\u8868database name\n--hive_table_name\uff1ahive\u8868table name\n\n--\u67e5\u8be2hive\u5916\u8868\nselect * from  t where xxx;\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b 3\uff1ahive bucket \u8868\u6784\u5efa")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE t\n(\n  client_ip   String,\n  request     String,\n  device_id   String,\n  server_time String,\n  date String\n)\nENGINE = CnchHive('psm', 'hive_database_name', 'hive_table_name')\nPARTITION BY date\nCLUSTER BY device_id INTO 65536 BUCKETS\nORDER BY server_time\nSETTINGS cnch_vw_default ='vw_default'\n\n--\u53c2\u6570\u8bf4\u660e\uff1a\n--psm\uff1ahivemetastore psm\n--hive_database_name\uff1ahive\u8868database name\n--hive_table_name\uff1ahive\u8868table name\n\n--\u67e5\u8be2hive\u5916\u8868\nselect * from  t where xxx;\n\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5916\u8868\u5217\u9700\u8981\u4e0e Hive \u8868\u4e00\u4e00\u5bf9\u5e94\uff0c\u4f46\u5217\u7684\u987a\u5e8f\u4e0d\u9700\u8981\u3002\u53ef\u4ee5\u9009\u62e9 Hive \u8868\u4e2d\u7684\u90e8\u5206\u5217\uff0c\u4f46\u5206\u533a\u5217\u5fc5\u987b\u5168\u90e8\u5305\u542b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u533a\u9700\u8981\u901a\u8fc7 partition by \u8bed\u53e5\u6307\u5b9a\uff0c\u5e76\u5b9a\u4e49\u5230\u63cf\u8ff0\u5217\u8868\u4e2d\u3002\u5bf9\u4e8e Bucket \u8868\uff0c\u9700\u8981\u6307\u5b9a\u5206\u6876\u5217\u548c\u5206\u6876\u6570\u91cf\u3002\u6709 ORDER BY \u5b57\u6bb5\u65f6\u4e5f\u9700\u8981\u6307\u5b9a\u3002"),(0,r.kt)("li",{parentName:"ul"},"ENGINE \u6307\u5b9a\u4e3a CnchHive\u3002\u53c2\u6570\u5305\u62ec\uff1apsm\u3001hive_database_name \u548c hive_table_name\u3002\u4e0d\u652f\u6301 view\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6709\u4e24\u4e2a\u914d\u7f6e\uff1acnch_vw_default\uff1a\u7528\u4e8e\u6307\u5b9a vw\uff0cmax_read_row_group_threads\uff1a\u7528\u4e8e\u6307\u5b9a\u5e76\u53d1\u8bfb\u53d6 Parquet row group \u7684\u5e76\u53d1\u6570\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u5217\u7c7b\u578b\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u5982\u4e0b\u8868\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hive\u5217\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"CnchHive\u5217\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT/INTERGER"),(0,r.kt)("td",{parentName:"tr",align:null},"INT/INTERGER"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"FixedString"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u8f6c\u6362\u4e3a FixedString")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"FixedString"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u8f6c\u6362\u4e3a FixedString")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAP"),(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u8bf4\u660e\uff1aHive \u8868 schema \u53d8\u66f4\u4e0d\u4f1a\u81ea\u52a8\u540c\u6b65\uff0c\u9700\u8981\u5728 ClickHouse \u4e2d\u91cd\u5efa Hive \u5916\u8868\u3002\u76ee\u524d\u4ec5\u652f\u6301 Parquet \u5b58\u50a8\u683c\u5f0f\uff0c\u4e0d\u652f\u6301 insert \u548c alter \u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"\u53c2\u6570\u8bbe\u7f6e"},"\u53c2\u6570\u8bbe\u7f6e"),(0,r.kt)("p",null,"cnch_vw_default\uff1a\u7528\u4e8e\u6307\u5b9a vw\u3002"),(0,r.kt)("p",null,"max_read_row_group_threads\uff1a\u7528\u4e8e\u6307\u5b9a\u5e76\u53d1\u8bfb\u53d6 Parquet row group \u7684\u5e76\u53d1\u6570\u91cf\u3002"))}c.isMDXComponent=!0}}]);