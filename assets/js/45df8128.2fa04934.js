"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2008],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(64778),o=(n(59496),n(49613));const a={title:"Complex Query Models and Execution Tuning",tags:["Docs"]},r="Complex query model and execution tuning",l={unversionedId:"advanced-guide/complex-query-model-and-optimisation",id:"version-0.2.0/advanced-guide/complex-query-model-and-optimisation",title:"Complex Query Models and Execution Tuning",description:"Complex query execution model",source:"@site/versioned_docs/version-0.2.0/advanced-guide/complex-query-model-and-optimisation.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/complex-query-model-and-optimisation",permalink:"/docs/0.2.0/advanced-guide/complex-query-model-and-optimisation",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/complex-query-model-and-optimisation.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Complex Query Models and Execution Tuning",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Column Storage Design Principles",permalink:"/docs/0.2.0/advanced-guide/column-based-storage"},next:{title:"Import Optimisation",permalink:"/docs/0.2.0/advanced-guide/import-optimisation"}},u={},s=[{value:"Complex query execution model",id:"complex-query-execution-model",level:2},{value:"How to enable it",id:"how-to-enable-it",level:2},{value:"Reference Documentation",id:"reference-documentation",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"complex-query-model-and-execution-tuning"},"Complex query model and execution tuning"),(0,o.kt)("h2",{id:"complex-query-execution-model"},"Complex query execution model"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(70328).Z,width:"1070",height:"462"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Complex query execution model diagram")),(0,o.kt)("p",null,"Analytical queries can be classified into simple and complex queries. Simple queries typically involve retrieving and aggregating data from a single table, as well as joining large and small tables, with fast query response times. Complex queries, on the other hand, involve large tables, multiple table associations, and complex logic processing, often with slow query response times and high resource consumption. ByConity is optimized for complex queries."),(0,o.kt)("p",null,"For simple queries, a two-stage execution model is used, with the partial stage executed on the computing node and the final stage executed on the service node. However, when executing complex queries involving multiple aggregations or joins, the flexibility of the two-stage execution model is limited, making query optimization challenging. To better support distributed queries and facilitate the execution of the execution plan generated by the optimizer, we have introduced complex queries that support multiple rounds of distributed execution mode."),(0,o.kt)("p",null,"The execution flow of a complex query is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query SQL String is parsed into AST by parser"),(0,o.kt)("li",{parentName:"ul"},"Rewrite and optimize AST to generate an execution plan"),(0,o.kt)("li",{parentName:"ul"},"When the optimizer is enabled, an execution plan is generated by the optimizer."),(0,o.kt)("li",{parentName:"ul"},"Divide the execution plan into multiple PlanSegments"),(0,o.kt)("li",{parentName:"ul"},"PlanSegment is an execution segment in the distributed execution process, which contains"),(0,o.kt)("li",{parentName:"ul"},"The AST fragment required for execution, or a logical execution plan fragment composed of PlanNode"),(0,o.kt)("li",{parentName:"ul"},"Node information for PlanSegment execution"),(0,o.kt)("li",{parentName:"ul"},"The upstream and downstream information of PlanSegment, which includes the upstream input flow and the input flow required by the downstream"),(0,o.kt)("li",{parentName:"ul"},"The engine's scheduler will form these PlanSegments into a DAG, and then distribute them to all nodes in the cluster according to topological sorting"),(0,o.kt)("li",{parentName:"ul"},"After each node receives the PlanSegment, it starts to drive the execution of the PlanSegment"),(0,o.kt)("li",{parentName:"ul"},"The PlanSegment containing the data source starts to read the data, and distributes the data to the downstream nodes according to certain shuffle rules"),(0,o.kt)("li",{parentName:"ul"},"The PlanSegment containing the exchange input waits for upstream data, and if it needs to continue to shuffle, it will continue to send the data to each node"),(0,o.kt)("li",{parentName:"ul"},"After multiple rounds of stages are completed, the results will be returned to the server")),(0,o.kt)("h2",{id:"how-to-enable-it"},"How to enable it"),(0,o.kt)("p",null,"Enabling the optimizer will automatically follow the complex query execution model. It can be enabled by configuring enable_optimizer=1, or dialect_type='ANSI'."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure statistics exist")),(0,o.kt)("p",null,"Without statistics, the resulting query plan is suboptimal. ",(0,o.kt)("inlineCode",{parentName:"p"},"show stats [<db_name>.]<table_name>")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Analyze the time spent on each Step of the plan")),(0,o.kt)("p",null,"The time-consuming of each Step can be displayed by ",(0,o.kt)("inlineCode",{parentName:"p"},"explain analyze sql")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Exchange parameter tuning")),(0,o.kt)("p",null,"Exchange operators are responsible for data transfer between PlanSegments."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exchange_source_pipeline_threads")," affects the total number of threads executed by the pipeline, especially for non-source pipelines (referring to pipelines that directly read data from storage). Currently, the default setting is the number of CPU cores. There is currently no ideal recommended value. You can consider /2 or \\ ","*","2 Observation results. If the query memory usage is large, it can be adjusted down."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exchange_timeout_ms")," Exchange timeout time (ms), the default is 100s, if there is an Exchange-related timeout error, you can increase it appropriately"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exchange_unordered_output_parallel_size")," affects the concurrency of exchange output data, the default is 8, and generally does not need to be adjusted. If the adjustment of exchange_source_pipeline_threads is relatively large, you can appropriately increase exchange_unordered_output_parallel_size to increase the upstream output capacity."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exchange_enable_block_compress")," Whether to enable exchange compression, it is enabled by default, if the CPU bottleneck is more obvious than the network, you can try to turn it off"),(0,o.kt)("h2",{id:"reference-documentation"},"Reference Documentation"))}p.isMDXComponent=!0},70328:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/boxcnUIHT3GY66QcCm0sXdVUrxc-9adadd60bf95fe79b67512fe58018575.png"}}]);