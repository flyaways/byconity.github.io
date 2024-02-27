"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2588],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(4778),r=(a(9496),a(9613));const o={title:"Data Export",tags:["Docs"]},i="Exporting Data",l={unversionedId:"data-export/data-export-method",id:"data-export/data-export-method",title:"Data Export",description:"This tutorial aims to guide users on how to export data from tables in ByConity to different file systems or databases, as well as how to export query results. Currently, ByConity supports exporting data to local file systems and HDFS (Hadoop Distributed FileSystem).",source:"@site/docs/data-export/data-export-method.mdx",sourceDirName:"data-export",slug:"/data-export/data-export-method",permalink:"/docs/data-export/data-export-method",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/data-export/data-export-method.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Data Export",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Deployment Settings",permalink:"/docs/deployment/deployment-settings"},next:{title:"Data Description",permalink:"/docs/data-import/data-introduction"}},s={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Exporting to Local",id:"exporting-to-local",level:2},{value:"Exporting to HDFS",id:"exporting-to-hdfs",level:2},{value:"Using the Dumper Tool",id:"using-the-dumper-tool",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exporting-data"},"Exporting Data"),(0,r.kt)("p",null,"This tutorial aims to guide users on how to export data from tables in ByConity to different file systems or databases, as well as how to export query results. Currently, ByConity supports exporting data to local file systems and HDFS (Hadoop Distributed FileSystem)."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Ensure that you are familiar with the basic operations of ByConity and the use of SQL syntax."),(0,r.kt)("h2",{id:"exporting-to-local"},"Exporting to Local"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a sample table and insert data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.select_outfile_testtable\n(\n    `a` Int8,\n    `b` String,\n    `c` Int8,\n    `date` Date\n)\nENGINE = CnchMergeTree()\nPARTITION by toYYYYMM(date)\nORDER BY tuple()\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Insert data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test.select_outfile_testtable VALUES (1, 'a', 1,'2022-11-10'), (2, 'b', 2,'2022-11-11'), (3, 'c', 3,'2022-11-12'), (4, 'd', 4,'2022-11-13');\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT ... INTO OUTFILE")," statement to export data as a CSV file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.select_outfile_testtable INTO OUTFILE 'select.csv' FORMAT CSV\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Output result:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  ~ cat select.csv\n1,"a",1,"2022-11-10"\n2,"b",2,"2022-11-11"\n3,"c",3,"2022-11-12"\n4,"d",4,"2022-11-13"\n')),(0,r.kt)("h2",{id:"exporting-to-hdfs"},"Exporting to HDFS"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT ... INTO OUTFILE")," statement, you can export data to HDFS. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <expr_list> INTO OUTFILE 'hdfs://ip:port/user/tiger/test/test.gz' FORMAT format_name\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs://ip:port/user/tiger/test/test.gz")," is the HDFS address for uploading, with the following format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hdfs://")," is a fixed prefix indicating upload to HDFS; ",(0,r.kt)("inlineCode",{parentName:"li"},"ip")," is the hdfs namenode service address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/user/tiger/test/test.gz")," is the path of the output file. Note that the hdfs directory path must be available.")),(0,r.kt)("p",null,"Common formats such as CSV, Parquet, and JSON are supported for exporting to HDFS. To reduce network transmission, gzip compression is enabled by default."),(0,r.kt)("h2",{id:"using-the-dumper-tool"},"Using the Dumper Tool"),(0,r.kt)("p",null,"When using the Dumper for data migration, you can specify a table and some of its partitions at once and write them to HDFS. The main principle of work is to traverse the local disk of the table that needs to be migrated, find the active part, write it in ByConity's own format, and then use the Dumper to upload it to HDFS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language->"},"\n-C<file>, --config-file=<file>             load configuration from a given file\n--database=<database>                      database to be<path>, --output=<path>                  output path on shared-storage\n-P<num_threads>, --parallel=<num_threads>  threads for dumping parts\n-R, --overwrite                            overwrite existed parts\n--partition_list \n--skip_partition_list\n--S\n--skip_unkowning_settings\n--help                                     produce this help message\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--config-file"),": Specifies the configuration file for the open-source clickhouse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--database"),": Specifies the database to be migrated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--table"),": Specifies the table to be migrated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--hdfs_nnproxy"),": Specifies the ByConity hdfs nnproxy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--output"),": Specifies the path where the Dumper will upload to hdfs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--partition_list"),": Supports specifying a particular partition_list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--skip_partition_list"),": Specifies the partition_list to be skipped."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-S"),": Skips bad parts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-R"),": Supports overwriting existing parts if they already exist in hdfs.")),(0,r.kt)("p",null,"Finally, execute the following command on the ByConity side to complete the migration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test_db.test_table ATTACH PARTITION '2020-10-10' FROM '/tmp/hdfs_path/<ip>/test_db/test_table'\n")))}c.isMDXComponent=!0}}]);