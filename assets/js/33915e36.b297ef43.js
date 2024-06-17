"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[5472],{49613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(y,i(i({ref:t},p),{},{components:a})):r.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(64778),n=(a(59496),a(49613));const o={title:"Basic Operations",sidebar_position:2,tags:["Docs"]},i="Basic Operations",l={unversionedId:"quick-start/basic-database-operations",id:"version-0.3.0/quick-start/basic-database-operations",title:"Basic Operations",description:"This tutorial guides users through the basic operations of creating tables, importing data, and querying data using ByConity in a Docker deployment environment.",source:"@site/versioned_docs/version-0.3.0/quick-start/basic-database-operations.mdx",sourceDirName:"quick-start",slug:"/quick-start/basic-database-operations",permalink:"/docs/0.3.0/quick-start/basic-database-operations",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.3.0/quick-start/basic-database-operations.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:2,frontMatter:{title:"Basic Operations",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Docker Deployment",permalink:"/docs/0.3.0/quick-start/docker-deploy"},next:{title:"Deployment Requirements",permalink:"/docs/0.3.0/deployment/deployment-requirements"}},s={},c=[{value:"Create Tables",id:"create-tables",level:2},{value:"Import Data",id:"import-data",level:2},{value:"Insert to File",id:"insert-to-file",level:2},{value:"Query Data",id:"query-data",level:2},{value:"View Historical Queries",id:"view-historical-queries",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"basic-operations"},"Basic Operations"),(0,n.kt)("p",null,"This tutorial guides users through the basic operations of creating tables, importing data, and querying data using ByConity in a Docker deployment environment."),(0,n.kt)("h2",{id:"create-tables"},"Create Tables"),(0,n.kt)("p",null,"Connect to the database:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse-client -m -h HOST --port PORT\n")),(0,n.kt)("p",null,"Create a database:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS helloworld;\nuse helloworld;\n")),(0,n.kt)("p",null,"Create a table in the database:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE helloworld.my_first_table\n(\n    user_id UInt32,\n    message String,\n    timestamp DateTime\n)\nENGINE = CnchMergeTree()\nPARTITION BY timestamp\nORDER BY (user_id, timestamp);\n")),(0,n.kt)("p",null,"View table information:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES;\nDESC my_first_table;\n")),(0,n.kt)("p",null,"Insert data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO helloworld.my_first_table (user_id, message, timestamp) VALUES\n    (101, 'Hello, ByConity!',                                 now()),\n    (102, 'Insert a lot of rows per batch',                     yesterday()),\n    (102, 'Sort your data based on your commonly-used queries', today()),\n    (101, 'Granules are the smallest chunks of data read',      now() + 5);\n")),(0,n.kt)("h2",{id:"import-data"},"Import Data"),(0,n.kt)("p",null,'ByConity supports five different methods of importing data: local file import, HDFS import, Kafka import, Spark import, MySQL import, and Hive external table import. Please refer to the "Data Import" section of the documentation for specific details. Here, we will briefly explain how to write a data file using ByConity, taking local file import as an example.'),(0,n.kt)("h2",{id:"insert-to-file"},"Insert to File"),(0,n.kt)("p",null,"Assuming we have a data file named ",(0,n.kt)("inlineCode",{parentName:"p"},"data.csv"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"102,This is data in a file,2022-02-22 10:43:28\n101,It is comma-separated,2022-02-23 00:00:00\n103,Use FORMAT to specify the format,2022-02-21 10:43:30\n...\n")),(0,n.kt)("p",null,"Import the data from the file into the table:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse-client -h {HOST} --port {PORT} --query='INSERT INTO helloworld.my_first_table FORMAT CSV' < data.csv\n")),(0,n.kt)("p",null,"Query the data in the table:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse-client -h {HOST} --port {PORT} --query='SELECT * FROM helloworld.my_first_table'\n")),(0,n.kt)("h2",{id:"query-data"},"Query Data"),(0,n.kt)("p",null,"ByConity supports simple query statements:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM helloworld.my_first_table;\n\nSELECT * FROM helloworld.my_first_table ORDER BY timestamp;\n\nSELECT * FROM helloworld.my_first_table ORDER BY timestamp FORMAT JSON;\n")),(0,n.kt)("h2",{id:"view-historical-queries"},"View Historical Queries"),(0,n.kt)("p",null,"You can view historical queries by accessing the system table ",(0,n.kt)("inlineCode",{parentName:"p"},"query_log"),":"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/query_log/"},"https://clickhouse.com/docs/en/operations/system-tables/query_log/")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.query_log;\n")))}m.isMDXComponent=!0}}]);