"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8388],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(4778),r=(a(9496),a(9613));const i={title:"Recommended Use Cases",sidebar_position:3,tags:["Docs"]},o="Recommended Use Cases",l={unversionedId:"introduction/recommended-use-case",id:"introduction/recommended-use-case",title:"Recommended Use Cases",description:"ByConity uses a large number of mature OLAP technologies, such as column storage engine, MPP execution, intelligent query optimization, vectorized execution, Codegen, indexing, data compression, mainly used in OLAP query and computing scenarios. It has very good performance in real-time data access, aggregation query of large and wide tables, complex analysis and calculation under massive data, and multi-table associated query scenarios.",source:"@site/docs/introduction/recommended-use-case.mdx",sourceDirName:"introduction",slug:"/introduction/recommended-use-case",permalink:"/docs/introduction/recommended-use-case",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/introduction/recommended-use-case.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"Recommended Use Cases",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/introduction/quick-start"},next:{title:"Background and Technical Architecture",permalink:"/docs/introduction/background-and-technical-architecture"}},s={},c=[],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recommended-use-cases"},"Recommended Use Cases"),(0,r.kt)("h1",{id:"general-scenario"},"General Scenario"),(0,r.kt)("p",null,"ByConity uses a large number of mature OLAP technologies, such as column storage engine, MPP execution, intelligent query optimization, vectorized execution, Codegen, indexing, data compression, mainly used in OLAP query and computing scenarios. It has very good performance in real-time data access, aggregation query of large and wide tables, complex analysis and calculation under massive data, and multi-table associated query scenarios."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Scenario Category"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Interactive query"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User-defined query"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data application that supports multi-dimensional query analysis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free dimension, multi-table association, fast response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Self-service reports"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support BI tools such as Tableau"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free dimension, multi-table association, fast response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"User portrait analysis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support DMP and other circle person portrait platforms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free dimension, multi-table association, fast response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Marketing effect analysis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support traffic effect funnel analysis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Multi-table association, real-time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Behavior log analysis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support log exploration and analysis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log retrieval, large amount of data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Real-time data Kanban"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Real-time business monitoring large screen"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support DataV and other visual large screens"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Real-time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Live data statistics dashboard"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support real-time reports"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Real-time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Business Dashboard"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support Report Tool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Statistics, Fast Response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"System link monitoring"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support real-time monitoring applications"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Real-time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Real-time data warehouse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Real-time data access"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support real-time data writing and updating"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Real-time data writing, immediately visible")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Quasi-real-time ETL calculation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support complex calculation, data cleaning"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mixed load")))),(0,r.kt)("h1",{id:"multi-tenant-isolation-and-resource-sharing"},"Multi-tenant isolation and resource sharing"),(0,r.kt)("p",null,"In ByConity, users can specify a computing group for querying SQL to achieve physical resource isolation and avoid query interference between different tenants. Of course, in order to improve resource utilization, ByConity also supports resource leasing between computing groups to achieve resource sharing."),(0,r.kt)("h1",{id:"separation-of-reading-and-writing-calculations"},"Separation of reading and writing calculations"),(0,r.kt)("p",null,"ByConity's storage-computing separation architecture makes it natively support storage-computing separation. insert uses a computing group dedicated to writing, and select uses a computing group dedicated to reading. The read and write jobs will not affect each other."),(0,r.kt)("h1",{id:"real-time-scaling"},"Real-time scaling"),(0,r.kt)("p",null,"ByConity's storage and computing separation architecture design makes it perfectly suitable for scenarios with dynamic expansion and contraction requirements, maximizing resource utilization and reducing costs according to actual resource requirements. ByConity's metadata and data are stored at the remote end. The stateless computing nodes make expansion and contraction very lightweight. You only need to wait for the computing instance to start up, and the service can be served immediately without additional data migration overhead, realizing real-time expansion. Shrinkage."))}m.isMDXComponent=!0}}]);