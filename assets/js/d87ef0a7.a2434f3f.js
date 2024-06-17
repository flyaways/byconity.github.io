"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6177],{49613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=m(a),k=n,N=c["".concat(p,".").concat(k)]||c[k]||g[k]||i;return a?r.createElement(N,l(l({ref:e},d),{},{components:a})):r.createElement(N,l({ref:e},d))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},69639:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(64778),n=(a(59496),a(49613));const i={title:"Ad-hoc Import",sidebar_position:7,tags:["Docs"]},l="Ad-hoc Import",o={unversionedId:"data-import/import-methods/ad-hoc-import",id:"data-import/import-methods/ad-hoc-import",title:"Ad-hoc Import",description:"Column ingestion",source:"@site/docs/data-import/import-methods/ad-hoc-import.mdx",sourceDirName:"data-import/import-methods",slug:"/data-import/import-methods/ad-hoc-import",permalink:"/docs/data-import/import-methods/ad-hoc-import",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/data-import/import-methods/ad-hoc-import.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:7,frontMatter:{title:"Ad-hoc Import",sidebar_position:7,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Direct Access via Hive",permalink:"/docs/data-import/import-methods/direct-access-via-hive"},next:{title:"Data Model",permalink:"/docs/table-design/data-model"}},p={},m=[{value:"Column ingestion",id:"column-ingestion",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Implementation note",id:"implementation-note",level:3}],d={toc:m},c="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ad-hoc-import"},"Ad-hoc Import"),(0,n.kt)("h2",{id:"column-ingestion"},"Column ingestion"),(0,n.kt)("h3",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Column ingestion query updates values of a column in a partition of a table by taking the value of another column from another table"),(0,n.kt)("p",null,"Example:\nTable ",(0,n.kt)("inlineCode",{parentName:"p"},"db.target")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ID"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Income"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"B"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"C"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6")))),(0,n.kt)("p",null,"Table ",(0,n.kt)("inlineCode",{parentName:"p"},"db.source")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ID"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"aa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"bb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"cc")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE db.target INGEST PARTITION '2021-01-01' COLUMNS Name KEY ID FROM db.source\n")),(0,n.kt)("p",null,"Table ",(0,n.kt)("inlineCode",{parentName:"p"},"db.target")," after execute the query"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ID"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Income"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"aa"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"bb"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},"dd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("p",null,"The Name value of row with ID = 3 can have value remain to C if the setting for target table ingest_default_column_value_if_not_provided is 0 by creating the table with this syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.target\n(\n    `date` Date,\n    `id` Int32,\n    `name` String\n)\nENGINE = CnchMergeTree\nPARTITION BY date\nORDER BY id\nSETTINGS ingest_default_column_value_if_not_provided = 0\n")),(0,n.kt)("p",null,"In that case, the result will be"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ID"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Income"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"aa"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"bb"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"C"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},"dd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("h3",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE db.target INGEST PARTITION xxx COLUMNS col1, col2 [KEY k1, k2] FROM db.temp_table\n")),(0,n.kt)("h3",{id:"implementation-note"},"Implementation note"),(0,n.kt)("p",null,"The main execution of ingest column will be done in worker"))}g.isMDXComponent=!0}}]);