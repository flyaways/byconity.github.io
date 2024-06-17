"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9378],{49613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(59496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},96592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(64778),o=(a(59496),a(49613));const i={title:"Data Visualization",sidebar_position:2,tags:["Docs"]},r="Data Visualization",s={unversionedId:"integration/data-visualization",id:"version-0.3.0/integration/data-visualization",title:"Data Visualization",description:"Tutorial Objectives:",source:"@site/versioned_docs/version-0.3.0/integration/data-visualization.mdx",sourceDirName:"integration",slug:"/integration/data-visualization",permalink:"/docs/0.3.0/integration/data-visualization",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.3.0/integration/data-visualization.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:2,frontMatter:{title:"Data Visualization",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Client Connection",permalink:"/docs/0.3.0/integration/client-connection"},next:{title:"Data Types",permalink:"/docs/0.3.0/sql-syntax/data-types"}},c={},l=[{value:"Tutorial Objectives:",id:"tutorial-objectives",level:2},{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Currently Supported Tools",id:"currently-supported-tools",level:2},{value:"Connection Methods:",id:"connection-methods",level:2},{value:"Grafana",id:"grafana",level:3},{value:"Metabase",id:"metabase",level:3},{value:"SuperSet:",id:"superset",level:3},{value:"Tableau",id:"tableau",level:3},{value:"Others",id:"others",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-visualization"},"Data Visualization"),(0,o.kt)("h2",{id:"tutorial-objectives"},"Tutorial Objectives:"),(0,o.kt)("p",null,"This document is designed to guide users in connecting and utilizing Byconity through common open-source and commercial data visualization tools."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,o.kt)("p",null,"Users need to acquire the ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PORT (TCP/HTTP)")," information for the Byconity service."),(0,o.kt)("h2",{id:"currently-supported-tools"},"Currently Supported Tools"),(0,o.kt)("p",null,"The currently supported visualization tools include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./data-visualization#grafana"},"Grafana")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./data-visualization#metabase"},"Metabase")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./data-visualization#superset"},"SuperSet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./data-visualization#tableau"},"Tableau")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./data-visualization#others"},"Others"))),(0,o.kt)("h2",{id:"connection-methods"},"Connection Methods:"),(0,o.kt)("h3",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"The connection method is the same as connecting to an open-source ClickHouse. Refer to:"),(0,o.kt)("p",null,"Connection method: ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/grafana-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/grafana-and-clickhouse")),(0,o.kt)("p",null,"Grafana installation method: ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/"},"https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14121).Z,width:"1860",height:"1280"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(39014).Z,width:"1586",height:"1342"})),(0,o.kt)("h3",{id:"metabase"},"Metabase"),(0,o.kt)("p",null,"The connection method is the same as connecting to an open-source ClickHouse. Refer to:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/metabase-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/metabase-and-clickhouse")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(518).Z,width:"2330",height:"1016"})),(0,o.kt)("h3",{id:"superset"},"SuperSet:"),(0,o.kt)("p",null,"The connection method is the same as connecting to an open-source ClickHouse. Refer to:"),(0,o.kt)("p",null,"Connection method: ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/superset-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/superset-and-clickhouse")),(0,o.kt)("p",null,"SuperSet installation method: ",(0,o.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/installation/installing-superset-using-docker-compose"},"https://superset.apache.org/docs/installation/installing-superset-using-docker-compose")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5922).Z,width:"2660",height:"1330"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(18497).Z,width:"1948",height:"1346"})),(0,o.kt)("h3",{id:"tableau"},"Tableau"),(0,o.kt)("p",null,"The connection method is the same as connecting to an open-source ClickHouse. Refer to:"),(0,o.kt)("p",null,"Connection method: ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/tableau-and-clickhouse/"},"https://clickhouse.com/docs/en/connect-a-ui/tableau-and-clickhouse/")),(0,o.kt)("p",null,"Tableau installation method: ",(0,o.kt)("a",{parentName:"p",href:"https://www.tableau.com/products/desktop/download"},"https://www.tableau.com/products/desktop/download")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(70415).Z,width:"2072",height:"1532"})),(0,o.kt)("h3",{id:"others"},"Others"),(0,o.kt)("p",null,"Since Byconity is fully compatible with open-source ClickHouse drivers (go/java/python), you can refer to the methods for connecting to ClickHouse when using other open-source visualization tools to connect to Byconity."))}d.isMDXComponent=!0},18497:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnG3sMOmptJiaYGlugaznN3f-5a3d4cfc5b3d53bf682fe19fcd4ab8e9.png"},70415:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnLhKBy77zRRuwIKvGNEpdad-25067a3c865faf0b8bfd3395d58d2882.png"},5922:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnLpId4cqZ0REcyCFlZYxPqh-aec6dfa70a6a2ae3554d4ba5572fb8f4.png"},14121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnPWwcVS2PP0ScJ1DABrY5Gb-b28f34bd9edc66af0d763584c604d2b9.png"},39014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnUlfPZA9ubTQw2MiKV0eOSc-d5593151cce64fdb1a6aac3c28f6fe41.png"},518:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnzLODLCibKe4uefhtK3bPMh-26d656586583c881fa8f902f02b34c57.png"}}]);