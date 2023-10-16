"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[5906],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(4778),i=(n(9496),n(9613));const r={title:"Database Table Design",tags:["Docs"]},o="Database Table Design",l={unversionedId:"basic-guide/database-table-design",id:"basic-guide/database-table-design",title:"Database Table Design",description:"Document Type: Tutorial",source:"@site/docs/basic-guide/database-table-design.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/database-table-design",permalink:"/docs/basic-guide/database-table-design",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/basic-guide/database-table-design.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Database Table Design",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Data Visualisation",permalink:"/docs/basic-guide/data-visualisation"},next:{title:"Hive External Table",permalink:"/docs/basic-guide/hive-external-table"}},s={},d=[{value:"Organization Database Table",id:"organization-database-table",level:2},{value:"database",id:"database",level:3},{value:"data sheet",id:"data-sheet",level:3},{value:"Table Engine",id:"table-engine",level:4},{value:"CnchMergeTree table principle",id:"cnchmergetree-table-principle",level:4},{value:"CnchMergeTree table creation statement and related configuration",id:"cnchmergetree-table-creation-statement-and-related-configuration",level:2},{value:"Design partition key (PARTITION BY)",id:"design-partition-key-partition-by",level:3},{value:"Design sort key (ORDER BY)",id:"design-sort-key-order-by",level:3},{value:"Design primary key (PRIMARY KEY)",id:"design-primary-key-primary-key",level:3},{value:"Unique key index (UNIQUE KEY)",id:"unique-key-index-unique-key",level:3},{value:"Jump index (Index)",id:"jump-index-index",level:3},{value:"Available index types",id:"available-index-types",level:4},{value:"Design Bucket",id:"design-bucket",level:3},{value:"Sampling",id:"sampling",level:3},{value:"TTL for columns and tables",id:"ttl-for-columns-and-tables",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:3},{value:"Granule configuration",id:"granule-configuration",level:4},{value:"Compute group configuration",id:"compute-group-configuration",level:4},{value:"merge related configuration",id:"merge-related-configuration",level:4},{value:"Storage related configuration",id:"storage-related-configuration",level:4},{value:"Unique index related configuration",id:"unique-index-related-configuration",level:4},{value:"Other configuration",id:"other-configuration",level:4},{value:"Best Practices",id:"best-practices",level:2},{value:"Best practices for primary key indexes",id:"best-practices-for-primary-key-indexes",level:3},{value:"Secondary Index Best Practices",id:"secondary-index-best-practices",level:3},{value:"Column type considerations",id:"column-type-considerations",level:3},{value:"Avoid blindly using the String type",id:"avoid-blindly-using-the-string-type",level:3},{value:"Nullable selection",id:"nullable-selection",level:3},{value:"Low Cardinality",id:"low-cardinality",level:3},{value:"Column Codec Selection",id:"column-codec-selection",level:3},{value:"Reference Documentation",id:"reference-documentation",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-table-design"},"Database Table Design"),(0,i.kt)("p",null,"Document Type: Tutorial"),(0,i.kt)("p",null,"Document format: tutorial purpose, pre-preparation, step-by-step explanation of principles & examples, and related document recommendations;"),(0,i.kt)("p",null,"Abstract"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How ByConity organizes databases and data tables"),(0,i.kt)("li",{parentName:"ol"},"The specifications of the database table, such as how many data tables are supported by a single database, and how many columns are supported by a single table"),(0,i.kt)("li",{parentName:"ol"},"When designing a data table, which configurations should be understood (primary key, etc.)"),(0,i.kt)("li",{parentName:"ol"},"In a typical scenario, what is the best practice for designing a data table")),(0,i.kt)("h2",{id:"organization-database-table"},"Organization Database Table"),(0,i.kt)("h3",{id:"database"},"database"),(0,i.kt)("p",null,"ByConity's database is a combination of a set of associated tables or views, which is convenient for users to manage the life cycle and permission control of this set of schemas. ByConity has no hard limit on the maximum number of databases."),(0,i.kt)("h3",{id:"data-sheet"},"data sheet"),(0,i.kt)("p",null,"Logically, a data table is a collection of data columns with the same number of rows and belongs to a certain database. ByConity also has no limit on the number of tables in a database (preferably no more than one million). A table has no more than 100,000 data columns."),(0,i.kt)("h4",{id:"table-engine"},"Table Engine"),(0,i.kt)("p",null,"The table engine is the type of the table, which determines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How data is organized and stored"),(0,i.kt)("li",{parentName:"ul"},"How to index and the type of index"),(0,i.kt)("li",{parentName:"ul"},"Which queries are supported and how"),(0,i.kt)("li",{parentName:"ul"},"Some other specific features and configurations")),(0,i.kt)("p",null,"The most common table engine used by ByConity is CnchMergeTree. Other special types of table engines include Hive tables, Kafka tables, etc. The following focuses on the principle of the MergeTree table engine."),(0,i.kt)("h4",{id:"cnchmergetree-table-principle"},"CnchMergeTree table principle"),(0,i.kt)("p",null,"The CnchMergeTree table is the most commonly used table engine. The core idea is similar to that of LSM-Tree. The data is partitioned according to the partition key (partition by), and then the sort key (order by) is stored in an orderly manner. main feature:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a partition key is specified, the data will be divided into different logical data sets according to the partition key (logical partition, Partition)")),(0,i.kt)("p",null,"Each logical partition can have zero or more data fragments (DataPart). Queries can often be sped up if the query criteria can prune partitions. If no partition key is specified, all data is in one logical partition."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"data fragment")),(0,i.kt)("p",null,"The data in the data fragment is sorted by the sort key. There will also be a min/max index for each data segment to speed up partition selection."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data granules (Granule)")),(0,i.kt)("p",null,"Each data fragment is logically divided into granules, and the default granule is 8192 rows (determined by the index_granularity configuration of the table). A granule is the smallest indivisible dataset for data query in ByConity. The first row of each granule is marked by the primary key value of the row, and ByConity will create an index file for each data fragment to store these marks. For each column, whether it is included in the primary key or not, ByConity stores a similar flag. These tags allow you to find data directly in the column file. Granule is the index target of ByConity sparse index and also the unit of data scanning in memory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Background Merge")),(0,i.kt)("p",null,"The background task will periodically merge the DataParts of the same partition and keep them in order according to the sort key. Background merging reduces the number of Parts for more efficient storage and improves query performance."),(0,i.kt)("h2",{id:"cnchmergetree-table-creation-statement-and-related-configuration"},"CnchMergeTree table creation statement and related configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name\n(\n    name1 [type1] [NULL|NOT NULL] [DEFAULT|ALIAS expr1] [compression_codec] [TTL expr1],\n    name2 [type2] [NULL|NOT NULL] [DEFAULT|ALIAS expr2] [compression_codec] [TTL expr2],\n    ...\n    INDEX index_name1 expr1 TYPE type1(...) GRANULARITY value1,\n    INDEX index_name2 expr2 TYPE type2(...) GRANULARITY value2\uff0c\n) ENGINE = CnchMergeTree()\nORDER BY expr\n[PARTITION BY expr]\n[CLUSTER BY (column, expression, ...) INTO value1 BUCKETS SPLIT_NUMBER value2 WITH_RANGE]\n[PRIMARY KEY expr]\n[UNIQUE KEY expr]\n[SAMPLE BY expr]\n[TTL expr]\n[SETTINGS name=value, ...]\n\n")),(0,i.kt)("h3",{id:"design-partition-key-partition-by"},"Design partition key (PARTITION BY)"),(0,i.kt)("p",null,"A partition key defines a partition, which is a logical data set in a table divided by specified rules. Partitioning can be done by arbitrary criteria, such as by date. To reduce the data that needs to be manipulated, each partition is stored separately. When querying, ByConity tries to use the smallest subset of these partitions. It is specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"PARTITION BY expr")," clause when creating a table. The partition key can be any expression of the columns in the table. For example, to specify partition by month, the expression is ",(0,i.kt)("inlineCode",{parentName:"p"},"toYYYYMM(date)"),"; or by expression tuple, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"(toMonday(date), EventType)"),", etc."),(0,i.kt)("p",null,"It should be noted that the value range calculated by the partition expression in the table should not be too large (recommended not to exceed 10,000). Too many partitions will occupy relatively large memory and bring more IO and computing overhead."),(0,i.kt)("p",null,"A reasonable design of the partition key can greatly reduce the amount of data that needs to be scanned during the query. Generally, it is considered to design the most commonly used conditions in the query and the column with a value range of no more than 10,000 as the partition key (such as date, etc.)."),(0,i.kt)("h3",{id:"design-sort-key-order-by"},"Design sort key (ORDER BY)"),(0,i.kt)("p",null,"Can be a tuple of columns or an arbitrary expression. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY (OrderID, Date)"),"."),(0,i.kt)("p",null,"If sorting is not required, ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY tuple()")," can be used. The data in the DataPart will be sorted according to the sort key."),(0,i.kt)("h3",{id:"design-primary-key-primary-key"},"Design primary key (PRIMARY KEY)"),(0,i.kt)("p",null,"By default there is no need to specify explicitly, ByConity will use the sort key as the primary key. When there is a special scenario where the primary key is inconsistent with the sort key, the primary key must be the leftmost prefix of the sort key. If the sort key is (OrderID, Date), the primary key must be OrderID, not Date. In some special table engines, such as CnchAggregatingMergeTree, CnchSummingMergeTree, the primary key will be different from the sort key."),(0,i.kt)("p",null,"ByConity will create a sparse index with Granule as the unit on the primary key (in contrast, the so-called dense index means that each row will create index information)."),(0,i.kt)("p",null,"If the query condition can match the leftmost prefix of the primary key index, the data particles that may need to be read can be quickly filtered out through the primary key index, which is usually much more efficient than scanning the entire DataPart."),(0,i.kt)("p",null,"In addition, it should be noted that PRIMARY KEY cannot guarantee uniqueness, so data rows with duplicate primary keys can be inserted."),(0,i.kt)("p",null,"Partition (PARTITION BY) and primary key (PRIMARY KEY) are two different ways to speed up data query. When defining, you should try to stagger and use different columns to define the two to cover more query scenarios. For example, the first column of order by must not be placed in partition by repeatedly. Here are some considerations for how to choose a primary key:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whether it is a commonly used column in the query condition"),(0,i.kt)("li",{parentName:"ul"},"is not the first column of a non-partition key"),(0,i.kt)("li",{parentName:"ul"},"The selectivity of this column, such as gender, yes/no, and columns with too few optional values \u200b\u200bare not recommended to be placed in the primary key"),(0,i.kt)("li",{parentName:"ul"},"If the current primary key is (a, b), if in most cases (a, b) corresponds to a large range of data (including multiple Granules), you can consider attaching a new common query column to the primary key , which allows more data to be filtered."),(0,i.kt)("li",{parentName:"ul"},"Excessively long primary keys have a negative impact on insert performance and memory consumption, but have no impact on query performance.")),(0,i.kt)("h3",{id:"unique-key-index-unique-key"},"Unique key index (UNIQUE KEY)"),(0,i.kt)("p",null,"The primary key (PRIMARY KEY) cannot be guaranteed to be deduplicated. If there is a need to deduplicate the unique key, you need to set the unique key index when creating the table. After setting the unique key, ByConity provides upsert update write semantics, which can efficiently update data rows according to the unique key. Queries automatically return the latest value for each unique key."),(0,i.kt)("p",null,"A unique key can be a tuple of columns or an arbitrary expression, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"UNIQUE KEY (product_id, sipHash64(city))"),"."),(0,i.kt)("p",null,"The unique index can be built by configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_level_unique_keys")," to control whether it is unique at the partition level or unique for the entire table. The current recommended practice is: unique index for partition, and the data volume of a single partition should not exceed tens of millions",(0,i.kt)("strong",{parentName:"p"},". "),"If it is unique in the entire table, it is recommended that the data volume of the entire table should not exceed tens of millions."),(0,i.kt)("p",null,"When querying through the unique key, the unique key index will be used to filter data to speed up the query, so usually the primary key can be set to a different column from the unique key to cover more query conditions. However, if you want to use the partial column update function, you need the unique key to be the leftmost prefix of the sort key."),(0,i.kt)("h3",{id:"jump-index-index"},"Jump index (Index)"),(0,i.kt)("p",null,"When creating a table, you can define the jump index like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INDEX index_name expr TYPE type(...) GRANULARITY granularity_value\n\n")),(0,i.kt)("h4",{id:"available-index-types"},"Available index types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minmax")," stores the extreme value of the specified expression (if the expression is ",(0,i.kt)("inlineCode",{parentName:"li"},"tuple"),", stores the extreme value of each element in ",(0,i.kt)("inlineCode",{parentName:"li"},"tuple"),"), this information is used to skip data blocks, similar to the primary key.")),(0,i.kt)("p",null,"The hop index function is being tested, and the supported hop index types will be added after completion."),(0,i.kt)("h3",{id:"design-bucket"},"Design Bucket"),(0,i.kt)("p",null,"CNCH Bucket table best practice manual"),(0,i.kt)("h3",{id:"sampling"},"Sampling"),(0,i.kt)("p",null,"The expression to use for sampling, optional."),(0,i.kt)("p",null,"If a sampling expression is to be used, it must be included in the primary key. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"SAMPLE BY intHash32(UserID) ORDER BY (CounterID, EventDate, intHash32(UserID))"),"."),(0,i.kt)("p",null,"For details, refer to the sampling function (a separate sampling function is required)"),(0,i.kt)("h3",{id:"ttl-for-columns-and-tables"},"TTL for columns and tables"),(0,i.kt)("p",null,"A list of rules that specify the duration of the row store and define the logic for moving pieces of data across disks and volumes, optional."),(0,i.kt)("p",null,"There must be at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," type column in the expression, for example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TTL date + INTERVAl 1 DAY")),(0,i.kt)("p",null,"For more details, please check ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL of tables and columns")," (too many, maybe To be an independent TTL)"),(0,i.kt)("h3",{id:"advanced-configuration"},"Advanced configuration"),(0,i.kt)("h4",{id:"granule-configuration"},"Granule configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index_granularity"),' \u2014 index granularity. The number of data rows between adjacent "tags" in the index (corresponding to the size of the granule). The default value is 8192 .')),(0,i.kt)("p",null,"The latter three configurations are to be tested, and RD has not verified functionality."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index_granularity_bytes")," \u2014 index granularity in bytes, default: 10Mb. Set to 0 (not recommended) if you want to limit the index granularity by the number of data rows only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_index_granularity_bytes")," - Minimum data granularity allowed, default: 1024b. This option is used to prevent misuse, adding a table with a very low index granularity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable_mixed_granularity_parts")," \u2014 Whether to enable controlling the size of the index granularity via ",(0,i.kt)("inlineCode",{parentName:"li"},"index_granularity_bytes"),". In older versions only the ",(0,i.kt)("inlineCode",{parentName:"li"},"index_granularity")," configuration can be used to limit the size of the index granularity. The ",(0,i.kt)("inlineCode",{parentName:"li"},"index_granularity_bytes")," configuration can improve ByConity's performance when querying data from tables with very large rows (tens to hundreds of megabytes). If your table has very large rows, you can enable this configuration to improve the performance of ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT")," queries.")),(0,i.kt)("h4",{id:"compute-group-configuration"},"Compute group configuration"),(0,i.kt)("p",null,"Refer to ","[Tutorial]"," Configuring Computing Groups"),(0,i.kt)("h4",{id:"merge-related-configuration"},"merge related configuration"),(0,i.kt)("p",null,"Refer to background task chapter"),(0,i.kt)("h4",{id:"storage-related-configuration"},"Storage related configuration"),(0,i.kt)("p",null,"Reference storage related chapters"),(0,i.kt)("h4",{id:"unique-index-related-configuration"},"Unique index related configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partition_level_unique_keys")," - Whether the unique index is partition unique, default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"; if it is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", it means that the unique index is at the whole table level;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cloud_enable_staging_area")," - Whether to enable asynchronous writing mode, default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h4",{id:"other-configuration"},"Other configuration"),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"best-practices-for-primary-key-indexes"},"Best practices for primary key indexes"),(0,i.kt)("p",null,"[https://clickhouse.com/docs/en/guides/improving-query-performance/sparse-primary-indexes/]","(",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/guides/improving-query-performance/sparse"},"https://clickhouse.com/docs/en/guides/improving-query-performance/sparse")," -primary-indexes/)"),(0,i.kt)("h3",{id:"secondary-index-best-practices"},"Secondary Index Best Practices"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/guides/improving-query-performance/skipping-indexes"},"https://clickhouse.com/docs/en/guides/improving-query-performance/skipping-indexes")),(0,i.kt)("h3",{id:""}),(0,i.kt)("h3",{id:"column-type-considerations"},"Column type considerations"),(0,i.kt)("h3",{id:"avoid-blindly-using-the-string-type"},"Avoid blindly using the String type"),(0,i.kt)("p",null,"Use Int(8|16|32|64|128|256) / Date / Date32 / DateTime / DateTime64 / Float / Decimal instead of String if possible"),(0,i.kt)("p",null,"The easiest way to judge is to see if it can be converted to the target type, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT countIf(toUInt8OrNull(col) IS NULL) FROM table"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT countIf(toDateOrNull(col) IS NULL) FROM table")),(0,i.kt)("p",null,"For String Column with relatively fixed content, you can consider using Enum instead, such as the name of a province. Enum can add new values \u200b\u200bthrough ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," later"),(0,i.kt)("p",null,"Use FixedString when the difference between the minimum and maximum length of String does not exceed 8, because String stores 8 bytes more offset in memory than FixedString ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT min(length(col)), max(length(col)) FROM table")),(0,i.kt)("h3",{id:"nullable-selection"},"Nullable selection"),(0,i.kt)("p",null,"If you are sure that the column does not contain Null, do not use Nullable type, it will have a negative impact on performance"),(0,i.kt)("h3",{id:"low-cardinality"},"Low Cardinality"),(0,i.kt)("p",null,"If the cardinality of a column is low, for example, there are no more than 10,000 unequal values in a DataPart, you can consider using the LowCardinality type. The LowCardinality type dictionary-encodes the original column. For many applications, processing dictionary-encoded data can significantly increase query speed, reduce storage space, and improve IO efficiency."),(0,i.kt)("h3",{id:"column-codec-selection"},"Column Codec Selection"),(0,i.kt)("p",null,"Generic encoding lz4/lz4hc/zstd/deflate_qpl"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#general-purpose-codecs"},"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#general-purpose-codecs")),(0,i.kt)("p",null,"Generally speaking, lz4 encoding is fast but the compression rate is not as high as zstd. You can consider using qpl on platforms that support Intel IAA"),(0,i.kt)("p",null,"Special encodings can be used together with the general encodings above: Delta / DoubleDelta / Gorilla / FPC / T64"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#specialized-codecs"},"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#specialized-codecs")),(0,i.kt)("p",null,"Generally speaking, doubledelta can be used for timing, and gorilla can be used for values that change with time sequence. FPC works better on 64bit floating point numbers. T64 is to find the common high bits of 64 values for clipping, and only record the changed part"),(0,i.kt)("p",null,"Here are some best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DateTime type: unsorted, it is recommended to use Delta+LZ4"),(0,i.kt)("li",{parentName:"ul"},"DateTime type: sorting, it is recommended to use LZ4"),(0,i.kt)("li",{parentName:"ul"},"Date type: unsorted, ZSTD is recommended"),(0,i.kt)("li",{parentName:"ul"},"Date type: sorting (eg: PK), it is recommended to use LZ4")),(0,i.kt)("h3",{id:"reference-documentation"},"Reference Documentation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-data_skipping-indexes"},"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-data_skipping-indexes")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#column-compression-codecs"},"https://clickhouse.com/docs/en/sql-reference/statements/create/table/#column-compression-codecs")))}p.isMDXComponent=!0}}]);