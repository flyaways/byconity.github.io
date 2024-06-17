"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[5147],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(64778),r=(n(59496),n(49613));const i={title:"TPC-DS",tags:["Docs"]},o="Introduction",s={unversionedId:"benchmarks/tpc-ds",id:"version-0.3.0/benchmarks/tpc-ds",title:"TPC-DS",description:"With the increasing amount and complexity of data, enterprises are increasingly turning to OLAP (On-Line Analytical Processing) engines to process large-scale data and deliver real-time analytical insights. Performance is a very important factor when choosing an OLAP engine. Therefore, this article aims to offer valuable insights by conducting a performance comparison among four prominent open-source OLAP engines: ClickHouse, Doris, Presto, and ByConity. To achieve this, we employ a set of 99 query statements sourced from the TPC-DS benchmark. Our aim is to provide reference for enterprises in their journey to select the most fitting OLAP engine for their specific needs.",source:"@site/versioned_docs/version-0.3.0/benchmarks/tpc-ds.mdx",sourceDirName:"benchmarks",slug:"/benchmarks/tpc-ds",permalink:"/docs/0.3.0/benchmarks/tpc-ds",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.3.0/benchmarks/tpc-ds.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",frontMatter:{title:"TPC-DS",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Transactions Management",permalink:"/docs/0.3.0/admin-guides/transaction-management"},next:{title:"How to Build",permalink:"/docs/0.3.0/developer-guides/how-to-build-byconity"}},l={},u=[{value:"Performance test results",id:"performance-test-results",level:2},{value:"Scenario 1: Basic query",id:"scenario-1-basic-query",level:2},{value:"Scenario 2: Join query",id:"scenario-2-join-query",level:2},{value:"Scenario 3: Aggregate query",id:"scenario-3-aggregate-query",level:2},{value:"Scenario 4: Subquery",id:"scenario-4-subquery",level:2},{value:"Scenario 5: Window function",id:"scenario-5-window-function",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"With the increasing amount and complexity of data, enterprises are increasingly turning to OLAP (On-Line Analytical Processing) engines to process large-scale data and deliver real-time analytical insights. Performance is a very important factor when choosing an OLAP engine. Therefore, this article aims to offer valuable insights by conducting a performance comparison among four prominent open-source OLAP engines: ClickHouse, Doris, Presto, and ByConity. To achieve this, we employ a set of 99 query statements sourced from the TPC-DS benchmark. Our aim is to provide reference for enterprises in their journey to select the most fitting OLAP engine for their specific needs."),(0,r.kt)("h1",{id:"tpc-ds-benchmark-testing"},"TPC-DS Benchmark Testing"),(0,r.kt)("p",null,"TPC-DS (Transaction Processing Performance Council Decision Support Benchmark) is a benchmark for Decision Support Systems (DSS). The tool was developed by the TPC organization. It simulates multidimensional analysis and decision support scenarios and provides 99 query statements to evaluate the performance of the Database System in complex multidimensional analysis scenarios. Each query is designed to simulate complex decision support scenarios, including advanced SQL techniques such as joins across multiple tables, aggregation and grouping, and subqueries."),(0,r.kt)("h1",{id:"olap-engines"},"OLAP Engines"),(0,r.kt)("p",null,"ClickHouse, Doris, Presto and ByConity are currently popular open source OLAP engines, all of which have the characteristics of high performance and scalability."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ClickHouse is a columnar database management system developed by Russian search engine company Yandex, which focuses on fast querying and analysis of large-scale data."),(0,r.kt)("li",{parentName:"ul"},"Doris is a distributed columnar storage and analytics system that supports real-time querying and analytics and integrates with Big data technologies such as Hadoop , Spark and  Flink ."),(0,r.kt)("li",{parentName:"ul"},"Presto is a distributed SQL query engine developed by Facebook for fast queries and analysis on large datasets."),(0,r.kt)("li",{parentName:"ul"},"ByConity is an open source cloud native data warehouse developed by ByteDance, which adopts the architecture of storage and calculation separation, realizes tenant resource isolation, elastic volume expansion and contraction, and has a strong consistency of data read and write. It supports mainstream OLAP engine optimization technology and has excellent read and write performance.\nThis article will leverage these four OLAP engines to evaluate the performance of 99 distinct queries drawn from the TPC-DS benchmark. The objective is to compare their respective performance differences across various query types, and offer insights and findings from our evaluation on TPC-DS.")),(0,r.kt)("h1",{id:"testing-environment-and-methods"},"Testing environment and methods"),(0,r.kt)("p",null,"The testing environment was configured as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Testing Spec"),(0,r.kt)("th",{parentName:"tr",align:null},"Clickhouse"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris"),(0,r.kt)("th",{parentName:"tr",align:null},"Presto"),(0,r.kt)("th",{parentName:"tr",align:null},"ByConity"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Environment Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory:256GB"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Disk: ATA, 7200rpm,partitioned:gpt"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"System: Linux 4.14.81.bm.30-amd64 x86_64, Debian GNU/Linux 9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Test data Volume"),(0,r.kt)("td",{parentName:"tr",align:null},"1TB data table equivalent to 2.80 billion rows of data"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Package version"),(0,r.kt)("td",{parentName:"tr",align:null},"23.4.1.1943"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.4.1"),(0,r.kt)("td",{parentName:"tr",align:null},"0.28.0"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1.0-GA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Version release time"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-04-26"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-04-27"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-03-16"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-03-15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Workers"),(0,r.kt)("td",{parentName:"tr",align:null},"5 BE , 1 FE"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Workers, 1 Coordinator"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Workers, 1 Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other configurations"),(0,r.kt)("td",{parentName:"tr",align:null},"distributed_product_mode = 'global'  partial_merge_join_optimizations = 1"),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket configuration: dimension table 1, returns table 10-20, sales table 100-200"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive Catalog\uff0c ORC format,  Xmx200GB"),(0,r.kt)("td",{parentName:"tr",align:null},"enable_optimizer=1, dialect_type='ANSI'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server Configuration")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Server Configuration"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Architecture:"),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU op-mode(s):"),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit, 64-bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Byte Order:"),(0,r.kt)("td",{parentName:"tr",align:null},"Little Endian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU(s):"),(0,r.kt)("td",{parentName:"tr",align:null},"48")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On-line CPU(s) list:"),(0,r.kt)("td",{parentName:"tr",align:null},"0-47")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Thread(s) per core:"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Core(s) per socket:"),(0,r.kt)("td",{parentName:"tr",align:null},"12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Socket(s):"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUMA node(s):"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vendor ID:"),(0,r.kt)("td",{parentName:"tr",align:null},"GenuineIntel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU family:"),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model:"),(0,r.kt)("td",{parentName:"tr",align:null},"79")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model name:"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel(R) Xeon(R) CPU E5-2650 v4 @ 2.20GHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stepping:"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU MHz:"),(0,r.kt)("td",{parentName:"tr",align:null},"2494.435")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU max MHz:"),(0,r.kt)("td",{parentName:"tr",align:null},"2900.0000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU min MHz:"),(0,r.kt)("td",{parentName:"tr",align:null},"1200.0000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BogoMIPS:"),(0,r.kt)("td",{parentName:"tr",align:null},"4389.83")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Virtualization:"),(0,r.kt)("td",{parentName:"tr",align:null},"VT-x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1d cache:"),(0,r.kt)("td",{parentName:"tr",align:null},"32K")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1i cache:"),(0,r.kt)("td",{parentName:"tr",align:null},"32K")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2 cache:"),(0,r.kt)("td",{parentName:"tr",align:null},"256K")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L3 cache:"),(0,r.kt)("td",{parentName:"tr",align:null},"30720K")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUMA node0 CPU(s):"),(0,r.kt)("td",{parentName:"tr",align:null},"0-11,24-35")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUMA node1 CPU(s):"),(0,r.kt)("td",{parentName:"tr",align:null},"12-23,36-47")))),(0,r.kt)("p",null,"Testing method:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tested the performance of 4 OLAP engines with 99 queries and 1 TB (2.80 billion rows) of data using the TPC-DS benchmark."),(0,r.kt)("li",{parentName:"ul"},"Use the same test dataset in each engine and maintain the same configuration and hardware environment."),(0,r.kt)("li",{parentName:"ul"},"For each query, execute multiple times and average to reduce measurement errors, setting a timeout of 500 seconds per query."),(0,r.kt)("li",{parentName:"ul"},"Record the details of query execution, such as query execution plan, I/O, and CPU usage.")),(0,r.kt)("h2",{id:"performance-test-results"},"Performance test results"),(0,r.kt)("p",null,"We conducted performance testing on these four OLAP engines using the same dataset and hardware environment. The dataset size was set at 1TB, and the detailed hardware and software specifications have been provided earlier in this report. To facilitate transparency and accessibility, we've shared the ByConity benchmark framework(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ByConity/byconity-tpcds/blob/main/Practice.md"},"https://github.com/ByConity/byconity-tpcds/blob/main/Practice.md"),") on GitHub."),(0,r.kt)("p",null,"Our testing involved running 99 query statements from the TPC-DS benchmark on each of the four OLAP engines. We performed three consecutive test runs and calculated the average results for each engine. Notably, ByConity successfully completed all 99 query tests. However, Doris encountered issues, crashing during SQL15 and experiencing timeouts in SQL54, SQL67, SQL78, and SQL95. Presto, on the other hand, only timed out in SQL67 and SQL72, while successfully completing all other query tests."),(0,r.kt)("p",null,"ClickHouse presented unique challenges as it managed to execute only 50% of the query statements. This performance discrepancy is attributed to potential limitations in effectively handling multi-table associated queries. It may require manual rewriting and query splitting for such SQL statements to execute. Consequently, for the purpose of comparing total execution times, we temporarily excluded ClickHouse from consideration. In Figure 1 below, we provide a visual representation of the total execution times for the remaining three OLAP engines."),(0,r.kt)("p",null,"Figure 1 illustrates that ByConity's open-source query performance superseds the other engines, achieving approximately 3-4 times faster execution times. (Please note that all units on the vertical axis of the subsequent charts are expressed in seconds)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 1: TPC-DS 99 query total time",src:n(40203).Z,width:"468",height:"285"})),(0,r.kt)("p",null,"For the 99 query statements in the TPC-DS benchmark, we will classify them according to different query scenarios, such as basic query, join query, aggregate query, subquery, window function query, etc. In the sections below, we will utilize these classification criteria to assess and compare the performance of the four OLAP engines: ClickHouse, Doris, Presto, and ByConity."),(0,r.kt)("h2",{id:"scenario-1-basic-query"},"Scenario 1: Basic query"),(0,r.kt)("p",null,"In this scenario, we evaluate the performance of the four OLAP engines in handling fundamental query operations. The operations include retrieving data from a single table, applying filters, and sorting results. The primary focus of the basic query performance test is assessing how well each engine handles a single query. Among them, ByConity performs the best, with both Presto and Doris delivering commendable results. This success can be attributed to the fact that basic queries typically involve a limited number of data tables and fields, allowing Presto and Doris to leverage their distributed query capabilities and in-memory computing features effectively. However, ClickHouse faces some challenges in this regard, particularly with regards to multi-table associations. In certain cases, it encounters issues, with SQL5, 8, 11, 13, 14, 17, and 18 experiencing timeouts during testing. It's worth noting that our timeout threshold is set at 500 seconds, but for greater clarity, we've truncated the timeout limit to 350 seconds. Figure 2 below presents the average query times for the four engines in the basic query scenario:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 2: Performance comparison of TPC-DS basic query",src:n(2902).Z,width:"1604",height:"988"})),(0,r.kt)("h2",{id:"scenario-2-join-query"},"Scenario 2: Join query"),(0,r.kt)("p",null,"Join queries represent a common multi-table query scenario where the JOIN statement is used to combine multiple tables and retrieve data based on specified conditions. As shown in Figure 3, we observe that ByConity excels in this scenario, primarily owing to its robust query optimizer optimization. ByConity benefits from the introduction of cost-based optimization capabilities (CBO), and the execution of re-order optimization operations during multi-table joins. Following closely behind, we have Presto and Doris, both delivering respectable results in handling multi-table join queries. However, ClickHouse exhibits comparatively weaker performance in multi-table joins when compared to the other three engines. It also faces limitations in its support for more complex statements."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 3: Performance comparison of TPC-DS Join Query",src:n(19532).Z,width:"1605",height:"988"})),(0,r.kt)("h2",{id:"scenario-3-aggregate-query"},"Scenario 3: Aggregate query"),(0,r.kt)("p",null,"Aggregate queries involve statistical data calculations, typically encompassing the use of aggregation functions like SUM, AVG, COUNT, and more. In this scenario, ByConity continues to demonstrate strong performance, with Doris and Presto following suit. However, when it comes to handling aggregate queries, ClickHouse faced challenges, encountering timeouts on four occasions. To provide a clearer distinction, we've adjusted the timeout threshold to 250 seconds.\n",(0,r.kt)("img",{alt:"Figure 4: Performance comparison of TPC-DS Aggregation Query",src:n(59979).Z,width:"1606",height:"988"})),(0,r.kt)("h2",{id:"scenario-4-subquery"},"Scenario 4: Subquery"),(0,r.kt)("p",null,"Subquery, also known as nested queries in SQL, are typically used as a condition or constraint for the primary query. As illustrated in Figure 5 below, ByConity performs best because ByConity implements rule-based optimization capabilities (RBO) for query optimization, utilizing techniques such as operator pushdown, column clipping, and partition clipping. Complex nested queries are optimized comprehensively, replacing all subqueries and converting common operators into the form of Join + Agg. Following ByConity, we have Doris and Presto, which performed relatively well. However it's worth noting that Presto experiences timeouts in SQL68 and SQL73, while Doris encounters timeouts in three SQL queries. Clickhouse also experiences some timeouts and system errors, previously mentioned. To facilitate performance differences, we adjusted the timeout threshold to 250 seconds."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 5. Performance comparison of TPC-DS subquery",src:n(78650).Z,width:"1604",height:"998"})),(0,r.kt)("h2",{id:"scenario-5-window-function"},"Scenario 5: Window function"),(0,r.kt)("p",null,"Window function query is an advanced SQL query scenario that enables operations such as ranking, grouping, sorting, and more within query results. As shown in Figure 6 below, ByConity has the best performance, followed by Presto. However, Doris encounters a timeout situation. Meanwhile, ClickHouse still faces challenges and hasn't completed the entire TPC-DS test in this scenario."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 6. Performance comparison of TPC-DS window function query",src:n(31358).Z,width:"1607",height:"995"})," !(./f1)"),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In conclusion, this article analyzes and compares the performance of ClickHouse, Doris, Presto, and ByConity, four prominent OLAP engines, across aspectrum of 99 query statements from the TPC-DS benchmark test. We found that there are differences in the performance of the four engines under different query scenarios. ByConity performs well in all 99 query scenarios of TPC-DS, surpassing the other three OLAP engines. Presto and Doris exhibited their strengths in join queries, aggregate queries, and window function scenarios, contrasting with ClickHouse's performance, which showed some limitations in optimizing multi-table associative queries.\nIt should be noted that the performance test results depend on multiple factors, including data structure, query type, data model, etc. In practical applications, various factors need to be considered comprehensively to choose the most suitable OLAP engine.\nWhen choosing an OLAP engine, factors such as scalability, ease of use, stability, etc. need to be considered.  In practical scenarios, tailoring the selection to meet specific business requirements and reasonably configuring and optimizing the chosen engine are crucial steps to attain optimal performance.\nIn short, ClickHouse, Doris, Presto, and ByConity are all excellent OLAP engines, each with its unique strengths and applicable scenarios. In practice, the choice should be guided by the specifics of the business needs, coupled with reasonable configuration and optimization. Moreover, selecting representative query scenarios and datasets and conducting comprehensive testing and analysis across different query scenarios is imperative for a holistic evaluation of engine performance."),(0,r.kt)("h1",{id:"join-the-community"},"Join the Community"),(0,r.kt)("p",null,"The ByConity community boasts a thriving user base and maintains a welcoming and inclusive atmosphere. We extend a warm invitation to everyone interested in engaging with us. You can join the conversation and collaborate with us on GitHub by visiting our issue at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/issues/26"},"https://github.com/ByConity/ByConity/issues/26"),"."))}m.isMDXComponent=!0},59979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/perf-comparison-TPC-DS-agg-query-476e2c6b24581196aeddf9046eac660b.png"},2902:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/perf-comparison-TPC-DS-basic-query-4a1a4d7ae3a0b82a786279620fb0330a.png"},19532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/perf-comparison-TPC-DS-join-query-6f6a321e072cb6d8539c9e770eac7469.png"},78650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/perf-comparison-TPC-DS-sub-query-9843a47e45a6241acb591e2dd7f831f7.png"},31358:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/perf-comparison-TPC-DS-window-query-fa79e7311e445ca491ff12f9f1f5f462.png"},40203:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tpc-ds-query-total-time-6df8baf32d5dc50bd76f31c7dab33954.jpeg"}}]);