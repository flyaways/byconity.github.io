"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4656],{49613:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>_});var s=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,s,n=function(t,e){if(null==t)return{};var r,s,n={},o=Object.keys(t);for(s=0;s<o.length;s++)r=o[s],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=s.createContext({}),l=function(t){var e=s.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=l(t.components);return s.createElement(c.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},d=s.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=l(r),d=n,_=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?s.createElement(_,a(a({ref:e},u),{},{components:r})):s.createElement(_,a({ref:e},u))}));function _(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[m]="string"==typeof t?t:n,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92204:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(64778),n=(r(59496),r(49613));const o={title:"Query Optimizer",tags:["Docs"]},a="Query Optimizer",i={unversionedId:"advanced-guide/query-optimiser",id:"version-0.2.0/advanced-guide/query-optimiser",title:"Query Optimizer",description:"The optimizer is the core of the database system. An excellent optimizer can greatly improve query performance, especially in complex query scenarios. The optimizer can bring performance improvements of several to hundreds of times.",source:"@site/versioned_docs/version-0.2.0/advanced-guide/query-optimiser.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/query-optimiser",permalink:"/docs/0.2.0/advanced-guide/query-optimiser",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/query-optimiser.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Query Optimizer",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Query Acceleration",permalink:"/docs/0.2.0/advanced-guide/query-acceleration"},next:{title:"Role-based Access Control (RBAC)",permalink:"/docs/0.2.0/advanced-guide/rbac"}},c={},l=[{value:"Syntax Definition",id:"syntax-definition",level:2},{value:"Syntax Example:",id:"syntax-example",level:2},{value:"Create Statistics",id:"create-statistics",level:3},{value:"Show Statistics",id:"show-statistics",level:3},{value:"Drop Statistics",id:"drop-statistics",level:3},{value:"Explain",id:"explain",level:2},{value:"<strong>Explain Analyze</strong>",id:"explain-analyze",level:2}],u={toc:l},m="wrapper";function p(t){let{components:e,...o}=t;return(0,n.kt)(m,(0,s.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"query-optimizer"},"Query Optimizer"),(0,n.kt)("p",null,"The optimizer is the core of the database system. An excellent optimizer can greatly improve query performance, especially in complex query scenarios. The optimizer can bring performance improvements of several to hundreds of times."),(0,n.kt)("p",null,"ByConity's optimizer provides extreme optimization capabilities based on four major optimization directions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RBO: rule-based optimization capability. Support column pruning, partition pruning, expression simplification, subquery disassociation, predicate pushdown, redundant operator elimination, Outer-JOIN to INNER-JOIN, operator pushdown storage, distributed operator splitting, etc. Heuristic optimization capability."),(0,n.kt)("li",{parentName:"ul"},"CBO: Cost-based optimization capability. Support Join Reorder, Outer-Join Reorder, Join/Agg Reorder, CTE, materialized view, Dynamic Filter pushdown, Magic Set and other cost-based optimization capabilities. And it integrates Property Enforcement for distributed planning."),(0,n.kt)("li",{parentName:"ul"},"DBO: optimization capability based on data dependencies. Support unique key, functional dependency, Order dependency, Inclusion dependency and other optimization capabilities based on data dependencies.")),(0,n.kt)("h1",{id:"turn-on-query-optimizer"},"Turn on Query Optimizer"),(0,n.kt)("p",null,"set dialect_type ='ANSI' or set enable_optimizer =1"),(0,n.kt)("p",null,"If turn on ANSI mode, the optimizer will be turned on automatically."),(0,n.kt)("h1",{id:"commands-for-collecting-displaying-and-deleting-statistical-information"},"Commands for collecting, displaying and deleting statistical information"),(0,n.kt)("h2",{id:"syntax-definition"},"Syntax Definition"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Subsequent versions will have automatic collection, update and analysis of statistical information")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- NOTE: ALL means currentDatabase().*\n\n--    specifying columns and sample config is supportted\nCREATE STATS [IF NOT EXISTS] (<db>.* | ALL | [<db>.]<table>['(' <col1>, <col2>, ..., <coln> ')']) [WITH (FULLSCAN | SAMPLE [<rows> ROWS] [<ratio> RATIO])]\n\n-- Delete statistics\n--   specifying columns is supported\nDROP STATS (<db>.* | ALL | [<db>.]<table>['(' <col1>, <col2>, ..., <coln> ')' ])\n\n--   specifying columns is supported\nSHOW (STATS|COLUMN_STATS) (<db>.* | ALL | [<db>.]<table>'('<col1>, <col2>, ..., <coln> ')' )\n\n")),(0,n.kt)("h2",{id:"syntax-example"},"Syntax Example:"),(0,n.kt)("h3",{id:"create-statistics"},"Create Statistics"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\n-- create stats for all table in current database which has no statistics\ncreate stats if not exists all;\n-- create stats for all table in db1 which has no statistics\ncreate stats if not exists db1.*;\n\n-- create stats for t1.c1,\ncreate stats t1(c1);\n-- create stats for t1.c1, t1.c2,\ncreate stats t1(c1, c2);\n\n-- create stats on t1, force to use fullscan,\n-- otherwise controlled by statistics_enable_sample\ncreate stats t1 with fullscan\n-- sample MAX(**statistics_sample_row_count**, 0.01 * full_rows_count) rows when create stats for each table\ncreate stats all with 0.01 ratio;\n-- sample MAX(40000000, 0.01 * full_rows_count) rows when create stats for each table\ncreate stats all with 0.01 ratio 40000000 rows;\n-- sample with default settings,\n-- controlled by **statistics_sample_row_count** and **statistics_sample_ratio\ncreate stats all with sample;\n\n")),(0,n.kt)("h3",{id:"show-statistics"},"Show Statistics"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\n-- show table statistics for all tables in current database\nshow stats all;\n-- show table statistics for all tables in db1\nshow stats db1.*;\n-- show table statistics for table t1\nshow stats t1;\n-- show column statistics for table t1\nshow column_stats t1;\n\n-- show column statistics for column c1, c2 of table t1\nshow column_stats t1(c1, c2);\n\n")),(0,n.kt)("h3",{id:"drop-statistics"},"Drop Statistics"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\n-- show statistics for all tables in current database\ndrop stats all;\n-- show statistics for all tables in db1.*\ndrop stats db1.*;\n-- show statistics for table t1\ndrop stats t1;\n\n\n-- drop statistics for column c1, c2 of table t1\ndrop stats t1(c1, c2);\n\n")),(0,n.kt)("h1",{id:"usage-of-explain"},"Usage of Explain"),(0,n.kt)("h2",{id:"explain"},"Explain"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Explain + SQL")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"EXPLAIN\nWITH\n    (\n        SELECT\n            sr_customer_sk AS ctr_customer_sk,\n            sr_store_sk AS ctr_store_sk,\n            sum(sr_return_amt) AS ctr_total_return\n        FROM store_returns\n        , date_dim\n        WHERE (sr_returned_date_sk = d_date_sk) AND (d_year = 2000)\n        GROUP BY\n            sr_customer_sk,\n            sr_store_sk\n    ) AS customer_total_return\nSELECT c_customer_id\nFROM customer_total_return AS ctr1\n, store\n, customer\nWHERE (ctr1.ctr_total_return >\n(\n    SELECT avg(ctr_total_return) * 1.2\n    FROM customer_total_return AS ctr2\n    WHERE ctr1.ctr_store_sk = ctr2.ctr_store_sk\n)) AND (s_store_sk = ctr1.ctr_store_sk) AND (s_state = 'TN') AND (ctr1.ctr_customer_sk = c_customer_sk)\nORDER BY c_customer_id ASC\nLIMIT 100\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Result of Explain")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(21146).Z,width:"2008",height:"1712"})),(0,n.kt)("h2",{id:"explain-analyze"},(0,n.kt)("strong",{parentName:"h2"},"Explain Analyze")),(0,n.kt)("p",null,"Explain analyze + SQL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"EXPLAIN ANALYZE LOGICAL\nWITH customer_total_return AS\n\n    (\n        SELECT\n            sr_customer_sk AS ctr_customer_sk,\n            sr_store_sk AS ctr_store_sk,\n            sum(sr_return_amt) AS ctr_total_return\n        FROM store_returns\n        , date_dim\n        WHERE (sr_returned_date_sk = d_date_sk) AND (d_year = 2000)\n        GROUP BY\n            sr_customer_sk,\n            sr_store_sk\n    )\nSELECT c_customer_id\nFROM customer_total_return AS ctr1\n, store\n, customer\nWHERE (ctr1.ctr_total_return >\n(\n    SELECT avg(ctr_total_return) * 1.2\n    FROM customer_total_return AS ctr2\n    WHERE ctr1.ctr_store_sk = ctr2.ctr_store_sk\n)) AND (s_store_sk = ctr1.ctr_store_sk) AND (s_state = 'TN') AND (ctr1.ctr_customer_sk = c_customer_sk)\nORDER BY c_customer_id ASC\nLIMIT 100\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u250c\u2500Explain Analyze\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Limit                                                                                                                                                                \u2502\n\u2502 \u2502     Est. 100 rows, cost 8.2e+05                                                                                                                                    \u2502\n\u2502 \u2502     Act. 100 rows (2.4 KB), Throughput: 545.0K rows/s, CPU Time per worker: avg 2.0 us, max 2.0 us, Wall Time: 1.8 ms                                              \u2502\n\u2502 \u2502     Filtered: 0.0%, QError: 1.0                                                                                                                                    \u2502\n\u2502 \u2514\u2500 MergeSorting                                                                                                                                                      \u2502\n\u2502    \u2502     Est. 49.2K rows, cost 8.2e+05                                                                                                                               \u2502\n\u2502    \u2502     Act. 100 rows (2.4 KB), Throughput: 545.0K rows/s, CPU Time per worker: avg 2.0 us, max 2.0 us, Wall Time: 1.8 ms                                           \u2502\n\u2502    \u2502     Filtered: 96.9%, QError: 504.1                                                                                                                              \u2502\n\u2502    \u2514\u2500 Union                                                                                                                                                          \u2502\n\u2502       \u2502     Est. 49.2K rows, cost 8.2e+05                                                                                                                            \u2502\n\u2502       \u2502     Act. 3.1K rows (78.1 KB), Throughput: 17.0M rows/s, CPU Time per worker: avg 0.0 us, max 0.0 us, Wall Time: 1.8 ms                                       \u2502\n\u2502       \u2502     Filtered: 0.0%, QError: 15.8                                                                                                                             \u2502\n\u2502       \u2514\u2500 PartialSorting                                                                                                                                              \u2502\n\u2502          \u2502     Est. 49.2K rows, cost 8.2e+05                                                                                                                         \u2502\n\u2502          \u2502     Act. 3.1K rows (78.1 KB), Throughput: 17.0M rows/s, CPU Time per worker: avg 40.0 us, max 40.0 us, Wall Time: 1.8 ms                                  \u2502\n\u2502          \u2502     Filtered: 0.0%, QError: 15.8                                                                                                                          \u2502\n\u2502          \u2514\u2500 Gather Exchange                                                                                                                                          \u2502\n\u2502             \u2502     Est. 49.2K rows, cost 8.2e+05                                                                                                                      \u2502\n\u2502             \u2514\u2500 MergeSorting                                                                                                                                          \u2502\n\u2502                \u2502     Est. 49.2K rows, cost 8.1e+05                                                                                                                   \u2502\n\u2502                \u2502     Act. 12.5K rows (313.1 KB), Throughput: 108.2M rows/s, CPU Time per worker: avg 23.0 us, max 25.0 us, Wall Time: 1.2 ms                         \u2502\n\u2502                \u2502     Filtered: -1.6%, QError: 3.9                                                                                                                    \u2502\n\u2502                \u2514\u2500 PartialSorting                                                                                                                                     \u2502\n\u2502                   \u2502     Est. 49.2K rows, cost 8.1e+05                                                                                                                \u2502\n\u2502                   \u2502     Act. 12.3K rows (308.3 KB), Throughput: 91.6M rows/s, CPU Time per worker: avg 40.0 us, max 40.0 us, Wall Time: 1.3 ms                       \u2502\n\u2502                   \u2502     Filtered: 0.0%, QError: 4.0                                                                                                                  \u2502\n\u2502                   \u2514\u2500 Inner Join                                                                                                                                      \u2502\n\u2502                      \u2502     Est. 47.5K rows, cost 8.1e+05                                                                                                             \u2502\n\u2502                      \u2502     Act. 12.3K rows (308.3 KB), Throughput: 91.6M rows/s, CPU Time per worker: avg 41.6 ms, max 41.8 ms, Wall Time: 1.3 ms                    \u2502\n\u2502                      \u2502     Filtered: 0.0%, QError: 3.9                                                                                                               \u2502\n\u2502                      \u2502     Condition: sr_store_sk_1 == s_store_sk                                                                                                    \u2502\n\u2502                      \u2502     Filter: `sum(sr_return_amt)_1` > (`avg(ctr_total_return)` * 1.2)                                                                          \u2502\n\u2502                      \u251c\u2500 Local Exchange                                                                                                                               \u2502\n\u2502                      \u2502  \u2502     Est. 49.2K rows, cost 2.9e+05                                                                                                          \u2502\n\u2502                      \u2502  \u2514\u2500 Inner Join                                                                                                                                \u2502\n\u2502                      \u2502     \u2502     Est. 49.2K rows, cost 2.9e+05                                                                                                       \u2502\n\u2502                      \u2502     \u2502     Act. 49.3K rows (2.1 MB), Throughput: 542.3M rows/s, CPU Time per worker: avg 6.2 ms, max 6.4 ms, Wall Time: 896.0 us               \u2502\n\u2502                      \u2502     \u2502     Filtered: 0.0%, QError: 1.0                                                                                                         \u2502\n\u2502                      \u2502     \u2502     Condition: c_customer_sk == sr_customer_sk_1                                                                                        \u2502\n\u2502                      \u2502     \u251c\u2500 Repartition Exchange                                                                                                                   \u2502\n\u2502                      \u2502     \u2502  \u2502     Est. 97.7K rows, cost 9.0e+04                                                                                                    \u2502\n\u2502                      \u2502     \u2502  \u2502     Partition by: {c_customer_sk}                                                                                                    \u2502\n\u2502                      \u2502     \u2502  \u2514\u2500 ReadFromStorage tpcds.customer                                                                                                      \u2502\n\u2502                      \u2502     \u2502           Est. 97.7K rows, cost 7.4e+04                                                                                                 \u2502\n\u2502                      \u2502     \u2502           Act. 97.7K rows (3.1 MB), Throughput: 22.2G rows/s, CPU Time per worker: avg 362.0 us, max 402.0 us, Wall Time: 47.0 us       \u2502\n\u2502                      \u2502     \u2502           Filtered: 0.0%, QError: 1.0                                                                                                   \u2502\n\u2502                      \u2502     \u2514\u2500 Repartition Exchange                                                                                                                   \u2502\n\u2502                      \u2502        \u2502     Est. 50.9K rows, cost 6.1e+04                                                                                                    \u2502\n\u2502                      \u2502        \u2502     Partition by: {sr_customer_sk_1}                                                                                                 \u2502\n\u2502                      \u2502        \u2514\u2500 CTERef [0]                                                                                                                          \u2502\n\u2502                      \u2502                 Est. 50.9K rows, cost 5.2e+04                                                                                                 \u2502\n\u2502                      \u2514\u2500 Broadcast Exchange                                                                                                                           \u2502\n\u2502                         \u2502     Est. 7 rows, cost 5.6e+04                                                                                                              \u2502\n\u2502                         \u2514\u2500 Inner Join                                                                                                                                \u2502\n\u2502                            \u2502     Est. 7 rows, cost 5.6e+04                                                                                                           \u2502\n\u2502                            \u2502     Act. 6 rows (102.0 Bytes), Throughput: 67.7K rows/s, CPU Time per worker: avg 280.0 us, max 360.0 us, Wall Time: 870.0 us           \u2502\n\u2502                            \u2502     Filtered: 97.9%, QError: 1.2                                                                                                        \u2502\n\u2502                            \u2502     Condition: s_store_sk == sr_store_sk_2                                                                                              \u2502\n\u2502                            \u251c\u2500 Repartition Exchange                                                                                                                   \u2502\n\u2502                            \u2502  \u2502     Est. 12 rows, cost 1.2e+01                                                                                                       \u2502\n\u2502                            \u2502  \u2502     Partition by: {s_store_sk}                                                                                                       \u2502\n\u2502                            \u2502  \u2514\u2500 Filter                                                                                                                              \u2502\n\u2502                            \u2502     \u2502     Est. 12 rows, cost 9.8e+00                                                                                                    \u2502\n\u2502                            \u2502     \u2502     Act. 12 rows (240.0 Bytes), Throughput: 28.6M rows/s, CPU Time per worker: avg 16.0 us, max 24.0 us, Wall Time: 5.0 us        \u2502\n\u2502                            \u2502     \u2502     Filtered: 0.0%, QError: 1.0                                                                                                   \u2502\n\u2502                            \u2502     \u2502     s_state = 'TN'                                                                                                                \u2502\n\u2502                            \u2502     \u2514\u2500 ReadFromStorage tpcds.store                                                                                                      \u2502\n\u2502                            \u2502              Est. 12 rows, cost 8.9e+00                                                                                                 \u2502\n\u2502                            \u2502              Act. 12 rows (240.0 Bytes), Throughput: 28.6M rows/s, CPU Time per worker: avg 48.0 us, max 72.0 us, Wall Time: 4.0 us     \u2502\n\u2502                            \u2502              Filtered: 0.0%, QError: 1.0                                                                                                \u2502\n\u2502                            \u2514\u2500 MergingAggregated                                                                                                                      \u2502\n\u2502                               \u2502     Est. 6 rows, cost 5.6e+04                                                                                                        \u2502\n\u2502                               \u2502     Act. 280 rows (4.9 KB), Throughput: 3.1M rows/s, CPU Time per worker: avg 60.0 us, max 80.0 us, Wall Time: 867.0 us              \u2502\n\u2502                               \u2502     Filtered: 0.0%, QError: 46.7                                                                                                     \u2502\n\u2502                               \u2514\u2500 Repartition Exchange                                                                                                                \u2502\n\u2502                                  \u2502     Est. 6 rows, cost 5.6e+04                                                                                                     \u2502\n\u2502                                  \u2502     Partition by: {sr_store_sk_2}                                                                                                 \u2502\n\u2502                                  \u2514\u2500 Aggregating                                                                                                                      \u2502\n\u2502                                     \u2502     Est. 6 rows, cost 5.6e+04                                                                                                  \u2502\n\u2502                                     \u2502     Act. 14 rows (238.0 Bytes), Throughput: 145.6K rows/s, CPU Time per worker: avg 7.0 us, max 9.0 us, Wall Time: 955.0 us    \u2502\n\u2502                                     \u2502     Filtered: 100.0%, QError: 2.3                                                                                              \u2502\n\u2502                                     \u2502     Group by: {sr_store_sk_2}                                                                                                  \u2502\n\u2502                                     \u2514\u2500 Projection                                                                                                                    \u2502\n\u2502                                        \u2502     Est. 50.9K rows, cost 5.6e+04                                                                                           \u2502\n\u2502                                        \u2502     Act. 49.3K rows (887.4 KB), Throughput: 519.5M rows/s, CPU Time per worker: avg 0.0 us, max 0.0 us, Wall Time: 947.0 us \u2502\n\u2502                                        \u2502     Filtered: 0.0%, QError: 1.0                                                                                             \u2502\n\u2502                                        \u2514\u2500 CTERef [0]                                                                                                                 \u2502\n\u2502                                                 Est. 50.9K rows, cost 5.2e+04                                                                                        \u2502\n\u2502 CTEDef [0]                                                                                                                                                           \u2502\n\u2502    MergingAggregated                                                                                                                                                 \u2502\n\u2502    \u2502     Est. 50.9K rows, cost 4.3e+05                                                                                                                               \u2502\n\u2502    \u2502     Act. 49.3K rows (1.3 MB), Throughput: 497.5M rows/s, CPU Time per worker: avg 34.0 us, max 35.0 us, Wall Time: 996.0 us                                     \u2502\n\u2502    \u2502     Filtered: 0.0%, QError: 1.0                                                                                                                                 \u2502\n\u2502    \u2514\u2500 Repartition Exchange                                                                                                                                           \u2502\n\u2502       \u2502     Est. 50.9K rows, cost 4.3e+05                                                                                                                            \u2502\n\u2502       \u2502     Partition by: {sr_customer_sk, sr_store_sk}                                                                                                              \u2502\n\u2502       \u2514\u2500 Aggregating                                                                                                                                                 \u2502\n\u2502          \u2502     Est. 50.9K rows, cost 4.2e+05                                                                                                                         \u2502\n\u2502          \u2502     Act. 51.4K rows (1.3 MB), Throughput: 1.1G rows/s, CPU Time per worker: avg 27.0 us, max 28.0 us, Wall Time: 506.0 us                                 \u2502\n\u2502          \u2502     Filtered: 5.8%, QError: 1.0                                                                                                                           \u2502\n\u2502          \u2502     Group by: {sr_customer_sk, sr_store_sk}                                                                                                               \u2502\n\u2502          \u2514\u2500 Inner Join                                                                                                                                               \u2502\n\u2502             \u2502     Est. 50.9K rows, cost 4.2e+05                                                                                                                      \u2502\n\u2502             \u2502     Act. 54.5K rows (1.4 MB), Throughput: 1.2G rows/s, CPU Time per worker: avg 14.3 ms, max 15.0 ms, Wall Time: 477.0 us                              \u2502\n\u2502             \u2502     Filtered: -90.6%, QError: 1.1                                                                                                                      \u2502\n\u2502             \u2502     Condition: sr_returned_date_sk == d_date_sk                                                                                                        \u2502\n\u2502             \u251c\u2500 Local Exchange                                                                                                                                        \u2502\n\u2502             \u2502  \u2502     Est. 280.8K rows, cost 2.3e+05                                                                                                                  \u2502\n\u2502             \u2502  \u2514\u2500 Filter                                                                                                                                             \u2502\n\u2502             \u2502     \u2502     Est. 280.8K rows, cost 2.3e+05                                                                                                               \u2502\n\u2502             \u2502     \u2502     Act. 54.5K rows (1.9 MB), Throughput: 5.7G rows/s, CPU Time per worker: avg 865.0 us, max 885.0 us, Wall Time: 96.0 us                       \u2502\n\u2502             \u2502     \u2502     Filtered: 0.0%, QError: 5.2                                                                                                                  \u2502\n\u2502             \u2502     \u2502     Dynamic Filters: {sr_returned_date_sk:range}                                                                                                 \u2502\n\u2502             \u2502     \u2514\u2500 ReadFromStorage tpcds.store_returns                                                                                                             \u2502\n\u2502             \u2502              Est. 280.8K rows, cost 2.1e+05                                                                                                            \u2502\n\u2502             \u2502              Act. 54.5K rows (1.9 MB), Throughput: 5.8G rows/s, CPU Time per worker: avg 2.4 ms, max 2.4 ms, Wall Time: 95.0 us                        \u2502\n\u2502             \u2502              Filtered: 0.0%, QError: 5.2                                                                                                               \u2502\n\u2502             \u2514\u2500 Projection                                                                                                                                            \u2502\n\u2502                \u2502     Est. 366 rows, cost 6.0e+04                                                                                                                     \u2502\n\u2502                \u2502     Act. 28.6K rows (228.8 KB), Throughput: 45.4G rows/s, CPU Time per worker: avg 1.1 ms, max 1.3 ms, Wall Time: 7.0 us                            \u2502\n\u2502                \u2502     Filtered: 0.0%, QError: 80.0                                                                                                                    \u2502\n\u2502                \u2502     Dynamic Filters Builder: {d_date_sk}                                                                                                            \u2502\n\u2502                \u2514\u2500 Broadcast Exchange                                                                                                                                 \u2502\n\u2502                   \u2502     Est. 366 rows, cost 6.0e+04                                                                                                                  \u2502\n\u2502                   \u2514\u2500 Filter                                                                                                                                          \u2502\n\u2502                      \u2502     Est. 366 rows, cost 5.9e+04                                                                                                               \u2502\n\u2502                      \u2502     Act. 366 rows (6.1 KB), Throughput: 85.1M rows/s, CPU Time per worker: avg 282.0 us, max 283.0 us, Wall Time: 44.0 us                     \u2502\n\u2502                      \u2502     Filtered: 0.0%, QError: 1.0                                                                                                               \u2502\n\u2502                      \u2502     d_year = 2000                                                                                                                             \u2502\n\u2502                      \u2514\u2500 ReadFromStorage tpcds.date_dim                                                                                                               \u2502\n\u2502                               Est. 71.3K rows, cost 5.4e+04                                                                                                          \u2502\n\u2502                               Act. 366 rows (6.1 KB), Throughput: 85.1M rows/s, CPU Time per worker: avg 780.0 us, max 840.0 us, Wall Time: 43.0 us                  \u2502\n\u2502                               Filtered: 0.0%, QError: 199.6                                                                                                          \u2502\n\u2502 note: Dynamic Filter is applied for 1 times.                                                                                                                         \u2502\n\u2502 note: CTE(Common Table Expression) is applied for 2 times.                                                                                                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,n.kt)("p",null,"Explain analyze distributed + SQL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"EXPLAIN ANALYZE DISTRIBUTED\nSELECT\n    i_item_id,\n    avg(ss_quantity) AS agg1,\n    avg(ss_list_price) AS agg2,\n    avg(ss_coupon_amt) AS agg3,\n    avg(ss_sales_price) AS agg4\nFROM store_sales\n, customer_demographics\n, date_dim\n, item\n, promotion\nWHERE (ss_sold_date_sk = d_date_sk) AND (ss_item_sk = i_item_sk) AND (ss_cdemo_sk = cd_demo_sk) AND (ss_promo_sk = p_promo_sk) AND (cd_gender = 'M') AND (cd_marital_status = 'S') AND (cd_education_status = 'College') AND ((p_channel_email\n = 'N') OR (p_channel_event = 'N')) AND (d_year = 2000)\nGROUP BY i_item_id\nORDER BY i_item_id ASC\nLIMIT 100\n\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(85370).Z,width:"2290",height:"1694"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"QError: max(Est rows, Act rows) / min(Est rows, Act rows), 1 is the best."),(0,n.kt)("li",{parentName:"ul"},"Wall Time: max wall time of all the workers. We can figure out which step takes the most time."),(0,n.kt)("li",{parentName:"ul"},"CPU Time: We can figure out which step has the data skew issue. (If the max time is bigger than avg time, there is one worker which processed too much data.)")))}p.isMDXComponent=!0},21146:(t,e,r)=>{r.d(e,{Z:()=>s});const s=r.p+"assets/images/boxcnbHJgX6mTV1MHFyLXajy23f-c0effcd2819edf7d1bb23755d9527e39.png"},85370:(t,e,r)=>{r.d(e,{Z:()=>s});const s=r.p+"assets/images/boxcnxiwhbhVnUQkflLLELMblMb-53e97bb3ff821485ece57e29df406c24.png"}}]);