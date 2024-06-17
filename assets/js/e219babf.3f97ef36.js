"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7831],{49613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(59496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=o,p=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return a?n.createElement(p,r(r({ref:t},u),{},{components:a})):n.createElement(p,r({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},21542:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(64778),o=(a(59496),a(49613));const i={title:"Background Tasks Management",tags:["Docs"]},r="Background Tasks Management",s={unversionedId:"basic-guide/background-task-management",id:"version-0.2.0/basic-guide/background-task-management",title:"Background Tasks Management",description:"Document Type: Tutorial",source:"@site/versioned_docs/version-0.2.0/basic-guide/background-task-management.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/background-task-management",permalink:"/docs/0.2.0/basic-guide/background-task-management",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/basic-guide/background-task-management.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Background Tasks Management",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"URLs",permalink:"/docs/0.2.0/sql-syntax/urls"},next:{title:"Client Connection",permalink:"/docs/0.2.0/basic-guide/client-connection"}},l={},c=[{value:"Common background tasks",id:"common-background-tasks",level:2},{value:"MergeMutate background task",id:"mergemutate-background-task",level:2},{value:"Merge task Part selection",id:"merge-task-part-selection",level:3},{value:"Task scheduling management",id:"task-scheduling-management",level:3},{value:"Heartbeat Mechanism",id:"heartbeat-mechanism",level:3},{value:"GC background tasks",id:"gc-background-tasks",level:2},{value:"Part visibility judgment",id:"part-visibility-judgment",level:3},{value:"GC Task",id:"gc-task",level:3},{value:"CONSUMER tasks",id:"consumer-tasks",level:2},{value:"KafkaConsumeManager",id:"kafkaconsumemanager",level:3},{value:"KafkaConsumer",id:"kafkaconsumer",level:3},{value:"Exactly-Once",id:"exactly-once",level:3},{value:"Automatic fault tolerance implementation",id:"automatic-fault-tolerance-implementation",level:3},{value:"Modify consumption parameters",id:"modify-consumption-parameters",level:3},{value:"Manually start and stop consumption",id:"manually-start-and-stop-consumption",level:3},{value:"Control background tasks",id:"control-background-tasks",level:2},{value:"common error",id:"common-error",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"background-tasks-management"},"Background Tasks Management"),(0,o.kt)("p",null,"Document Type: Tutorial"),(0,o.kt)("p",null,"Document structure: tutorial purpose, pre-preparation, step-by-step explanation of principles & examples, and related document recommendations;"),(0,o.kt)("p",null,"Summary:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What are the common background tasks and their functions"),(0,o.kt)("li",{parentName:"ol"},"How to manually start and terminate background tasks"),(0,o.kt)("li",{parentName:"ol"},"How to deal with common errors")),(0,o.kt)("p",null,"ByConity reuses the classic design of ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/"},"Community ClickHouse MergeTree"),", which means that data is written at Part granularity Store and ensure the order of data inside each Part, and process multiple Parts in parallel when executing queries. The background Merge thread continuously merges multiple Parts into larger Parts, which not only reduces the number of Parts, but also achieves a wider range of data ordering, which is a key operation for continuously improving query performance."),(0,o.kt)("h2",{id:"common-background-tasks"},"Common background tasks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MergeMutate background task: "),"Because ByConity is a storage and computing separation architecture, Part no longer belongs to a fixed node, and each Part can be processed by any computing node, so each computing node does not run exclusively like the community ClickHouse Merge and Mutate threads. Instead, we create a Merge and Mutate background task for each table on the Server component, which manages and schedules all Merge and Mutate tasks for the corresponding table in a unified manner."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GC","*","*"),"Background task:","*","*","Merge multiple Parts into a new Part, which means that the original Part will no longer be used, and deleting these eliminated Parts in time will help save storage. To this end, we run a dedicated GC (Garbage Collection) background task for each table, which is responsible for the discovery and deletion of expired parts of the table."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CONSUMER background task: "),"Based on ByConity's new cloud-native architecture, a new design and implementation has been made on real-time import consumption (aka CnchKafka):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Based on each Kafka consumption table, a CONSUMER background task (ConsumeManager) is resident in the server segment;"),(0,o.kt)("li",{parentName:"ul"},"The CONSUMER background task is responsible for reading Kafka meta information, assigning partitions to each consumer task, and then distributing task tasks to worker nodes for execution;"),(0,o.kt)("li",{parentName:"ul"},"At the same time, the CONSUMER task needs to maintain a heartbeat with the task to ensure that each consumer task is in a normal working state.")),(0,o.kt)("p",null,"By design, Merge and GC are two separate processes. After a Merge task is completed, we will not delete the old part immediately, but correspondingly generate an elimination mark for each old part, waiting for subsequent GC tasks to be processed uniformly. Such a design can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Maintain the consistency of the Part life cycle, and there will be no inconsistent behavior of "using a deleted Part" during query execution.'),(0,o.kt)("li",{parentName:"ul"},"Avoid bulky metadata and storage access operations. Deleting the old part immediately when the merge is completed means a large number of fragmented IO operations, which makes the operation inefficient and easily affects the normal execution of other processes."),(0,o.kt)("li",{parentName:"ul"},"Simpler implementation. There is no need to think too much about the consistency between the Merge task state and the Part state.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2452).Z,width:"852",height:"408"})),(0,o.kt)("p",null,"Figure X-1"),(0,o.kt)("h2",{id:"mergemutate-background-task"},"MergeMutate background task"),(0,o.kt)("p",null,"MergeMutate background tasks are mainly responsible for: Select the appropriate Part to generate the corresponding ",(0,o.kt)("strong",{parentName:"p"},"Merge Task (Merge Task)"),", select the appropriate part to generate ",(0,o.kt)("strong",{parentName:"p"},"Mutate Task (Mutate Task)"),", and send the generated Task to Appropriate Worker execution and final submission and update of Part status."),(0,o.kt)("p",null,"Merge and Mutate are actually two different tasks."),(0,o.kt)("p",null,"The Merge task is to select some smaller parts to synthesize a larger part, so as to reduce the number of files accessed during query, thereby reducing the time required for query."),(0,o.kt)("p",null,"The Mutate task is to perform changes on some columns in the part (Modify column, Drop column, etc.). The Mutate task is generated by the Alter query. For an Alter query, we can split it into two parts, one is to modify the schema operation of the table, and the other is to generate a Mutate Task to be executed by the background task if the data needs to be changed. Data modification operations."),(0,o.kt)("h3",{id:"merge-task-part-selection"},"Merge task Part selection"),(0,o.kt)("p",null,"From the very beginning of design, ByConity requires that a system be able to handle different scenarios and businesses of different scales at the same time: the coexistence of real-time tables and offline tables, the coexistence of large-scale tables and small tables, the coexistence of wide tables and narrow tables, etc., complex fields and simple fields coexist. Such a complex application scenario means that the Parts of each table have no uniform rules to follow in terms of size, timeliness, and orderliness. To this end, we design and implement an adaptive Part selection strategy. The general process is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Maintain the latest data write time, total number of Parts and total size for each partition (Partition)."),(0,o.kt)("li",{parentName:"ul"},"First select a batch of partitions from all partitions, and users can specify their preferred strategy for each table: sort by write time; sort by the number of parts or training in rotation."),(0,o.kt)("li",{parentName:"ul"},"For each selected partition, scan all its Parts, calculate the benefits of merging each other according to the number of rows, size, and writing time of the Parts, and finally select multiple groups of Parts in the order of benefits."),(0,o.kt)("li",{parentName:"ul"},"Finally, for each selected partition, if no high-yielding Merge task is finally selected from the partition, the partition will not be selected for a subsequent period of time to achieve adaptive adjustment.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5686).Z,width:"852",height:"1022"})),(0,o.kt)("p",null,"Figure X-2"),(0,o.kt)("p",null,"As shown in the figure, in the Partition selection stage, we selected Partition 1 (the largest number of Parts) and Partition 2 (the latest data writing). Then calculate the combined income between Parts from these two Partitions, and finally select three groups of Parts: p11~p12, p13~p16, and p23~p24."),(0,o.kt)("h3",{id:"task-scheduling-management"},"Task scheduling management"),(0,o.kt)("p",null,"For each group of Parts selected above, we will estimate its task overhead, such as required disk size, occupied memory size, and other information. Then select the most suitable Worker for this task through ",(0,o.kt)("u",null,"Resource Manager")," (Note: link to RM), and send it out for execution."),(0,o.kt)("p",null,"When Worker executes a task, it obtains the required Part through the interface provided by the storage layer. The merging process of Part on Worker is similar to the principle of Community ClickHouse."),(0,o.kt)("p",null,"After the Merge task is executed, the Worker returns a successful execution flag to the Server. After that, the server can submit the newly generated Part and mark the merged source Part, waiting for subsequent GC background tasks to process."),(0,o.kt)("h3",{id:"heartbeat-mechanism"},"Heartbeat Mechanism"),(0,o.kt)("p",null,"Since the execution time of the MergeMutate task may be relatively long, we need to use the heartbeat mechanism to detect whether the task on the Worker has failed or whether the Worker has been down, and remove the failed task on the Server in time. At the same time, the Worker side will also judge whether the Server is down by the time of the last synchronization heartbeat when executing the task, so as to end the task in advance to avoid wasting resources."),(0,o.kt)("h2",{id:"gc-background-tasks"},"GC background tasks"),(0,o.kt)("h3",{id:"part-visibility-judgment"},"Part visibility judgment"),(0,o.kt)("p",null,"Different from the part visibility judgment in the community, ByConity has made some adjustments to the part visibility judgment in order to better implement the MVCC (Multi-Version Concurrency Control) feature."),(0,o.kt)("p",null,"First, briefly introduce the naming structure of writing part. Part naming is as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(12296).Z,width:"852",height:"320"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Community version Part visibility judgment, taking the Merge task as an example")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(20853).Z,width:"852",height:"762"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ByConityPart visibility judgment (TODO)")),(0,o.kt)("h3",{id:"gc-task"},"GC Task"),(0,o.kt)("p",null,"After understanding the role and process of ",(0,o.kt)("u",null,"Merge")," and Part visibility rules, you can better understand the working mechanism of GC."),(0,o.kt)("p",null,"As shown in Figure X-1, the GC background task of each table runs independently, and it is mainly responsible for discovering and deleting the eliminated parts generated by the Merge task."),(0,o.kt)("p",null,"When the server marks an obsolete part, it does not change any state of the part, but generates a new corresponding marked part, and the marked part does not occupy the actual storage space. Doing so can guarantee the absolute immutability of all Parts throughout the lifetime. ","*","*"),(0,o.kt)("p",null,"Based on Figure X-2, after the Merge is completed, it will become the state shown in Figure X-3 below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(87449).Z,width:"852",height:"480"})),(0,o.kt)("p",null,"When the GC background task is running, it is similar to the Merge background task,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A batch of Partitions will be selected in order of the total number of Parts and total size."),(0,o.kt)("li",{parentName:"ul"},"Then scan all Parts in the Partition, and delete the Part covered by the mark (that is, the blue part)."),(0,o.kt)("li",{parentName:"ul"},"Then scan all Parts in the Partition again, and delete the marked Part (that is, the red part).")),(0,o.kt)("h2",{id:"consumer-tasks"},"CONSUMER tasks"),(0,o.kt)("p",null,"ByConity inherits the basic design of community Kafka consumption, and designs and implements a new consumption table engine CnchKafka based on the new cloud-native architecture. The basic consumption principle is consistent with the community, and the entire consumption link is realized through a <CnchKafka consumption table, Materialized View materialized view table, storage table> triplet, where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CnchKafka consumption table: responsible for subscribing to Kafka topics and consuming messages; parsing the obtained messages and writing them as Blocks;"),(0,o.kt)("li",{parentName:"ul"},"Materialized View materialized view table: build a data path from the consumption table to the storage table, write the block consumed by CnchKafka into the storage table, and provide a simple filtering function;"),(0,o.kt)("li",{parentName:"ul"},"Storage table: Support various MergeTree storage tables of Cnch.")),(0,o.kt)("p",null,"The basic data path is as follow:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5554).Z,width:"852",height:"492"})),(0,o.kt)("p",null,"The components in the figure are ByConity components related to CnchKafka. For specific component descriptions, please refer to the architecture document."),(0,o.kt)("h3",{id:"kafkaconsumemanager"},"KafkaConsumeManager"),(0,o.kt)("p",null,"Each CnchKafka consumption table will start a Manager (that is, CONSUMER type background task) at the server layer to be responsible for scheduling and managing all consumer tasks. The Manager itself is a resident thread on the server side, and its service is guaranteed to be stable through the high availability of the server and DaemonManager."),(0,o.kt)("p",null,"The main implementation and functions of KafkaConsumeManager include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Distribute the topic partition evenly to each consumer according to the configured number of consumers;"),(0,o.kt)("li",{parentName:"ul"},"Interact with the Catalog to obtain the offset consumed by the partition;"),(0,o.kt)("li",{parentName:"ul"},"Schedule the consumer to the configured Virtual Warehouse node for execution:"),(0,o.kt)("li",{parentName:"ul"},"Node selection supports multiple policy configurations to ensure load balancing;"),(0,o.kt)("li",{parentName:"ul"},"Regularly detect each consumer task to ensure the stability of task execution.")),(0,o.kt)("h3",{id:"kafkaconsumer"},"KafkaConsumer"),(0,o.kt)("p",null,"Each KafkaConsumer is implemented as a resident thread and executed on the Virtual Warehouse node. It is responsible for consuming data from the specified topic partition, converting it into parts and writing it to VFS, and submitting meta information back to the server side for writing to the Catalog. main feature:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inherit the batch writing mode of the community (each consumption cycle defaults to 8 seconds);"),(0,o.kt)("li",{parentName:"ul"},"Each consumption process guarantees atomicity through Transaction:"),(0,o.kt)("li",{parentName:"ul"},"Create transactions by interacting with Server RPC;"),(0,o.kt)("li",{parentName:"ul"},"The transaction commit will submit the written part meta-information and the latest consumed offset at the same time.")),(0,o.kt)("p",null,"Refer to the figure below for the execution process of a single consumption:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3138).Z,width:"852",height:"580"})),(0,o.kt)("h3",{id:"exactly-once"},"Exactly-Once"),(0,o.kt)("p",null,"Compared with the community implementation, the CnchKafka implementation has enhanced consumption semantics, that is, from the community's At-Least-Once semantics to Exactly-Once semantics. This is mainly due to the guarantee of the new architecture Transaction."),(0,o.kt)("p",null,"Since each round of consumption will go through transaction management, and the corresponding offset will be submitted at the same time as the data metadata information is submitted each time. Since the transaction guarantees the atomicity of the commit, the data metadata and offset are either submitted successfully at the same time, or both fail to be submitted."),(0,o.kt)("p",null,"This ensures that the data and offset are always consistent, and each restart of consumption will continue to consume from the last submitted offset position, thus realizing Exactly-Once."),(0,o.kt)("h3",{id:"automatic-fault-tolerance-implementation"},"Automatic fault tolerance implementation"),(0,o.kt)("p",null,"CnchKafka's overall fault-tolerant strategy adopts ",(0,o.kt)("strong",{parentName:"p"},"fast failure")," approach, namely:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KafkaConsumeManager regularly detects consumer tasks, if the detection fails, a new consumer is immediately pulled;"),(0,o.kt)("li",{parentName:"ul"},"In each execution of KafkaConsumer, the two interactions with Server RPC (creating transaction and submitting transaction) will verify the validity of itself to the Manager. If the verification fails (for example, the Manager has pulled a new consumer, etc.), it will Take the initiative to kill yourself.")),(0,o.kt)("h3",{id:"modify-consumption-parameters"},"Modify consumption parameters"),(0,o.kt)("p",null,"Supports quick modification of Setting parameters through the ALTER command, which is mainly used to adjust the number of consumers and improve consumption capabilities."),(0,o.kt)("p",null,"Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ALTER TABLE <cnch_kafka_name> MODIFY SETTING <name1> = <value1>, <name2> = <value2>\n\n")),(0,o.kt)("p",null,"Execution of this command will automatically restart the consumption task."),(0,o.kt)("h3",{id:"manually-start-and-stop-consumption"},"Manually start and stop consumption"),(0,o.kt)("p",null,"In some scenarios, users may need to manually stop consumption, and then manually resume; we provide the corresponding SYSTEM command implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SYSTEM START/STOP/RESTART CONSUME <cnch_kafka_name>\n\n")),(0,o.kt)("p",null,"Note: The START/STOP command will persist the corresponding state to the Catalog, so after executing the STOP command, if you do not execute START, even if the service restarts, the consumption task will not resume."),(0,o.kt)("h2",{id:"control-background-tasks"},"Control background tasks"),(0,o.kt)("p",null,"The system command is provided to control the opening and closing of background tasks. Unlike the community, the control through the system command is a persistent operation, and background tasks that have been stopped will not be rescheduled after the server restarts."),(0,o.kt)("p",null,"Provide the system table system.bg_threads to view the status of background tasks, including thread status, scheduling times, scheduling exception information, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SYSTEM STOP/START/RESTART CONSUME db.table;\nSYSTEM STOP/START MERGES/GC db.table;\nSELECT * FROM system.bg_threads WHERE database = 'db' AND table = 'table';\n")),(0,o.kt)("h2",{id:"common-error"},"common error"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connection Refused from DaemonManager")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Code: 5038. DB::Exception: Received from 127.0.0.1:9000. DB::Exception: 112:[E111]Fail to connect Socket{id=1155 addr=127.0.0.1:10090} (0x0x7f2f9674f6c0): Connection refused [R1][E112]Not connected to 127.0.0.1:10090 yet, server_id=1155 [R2][E112]Not connected to 127.0.0.1:10090 yet, server_id=1155 [R3][E112]Not connected to 127.0.0.1:10090 yet, server_id=1155.\n\n")),(0,o.kt)("p",null,"The specific error information is as above, where 10090 is the rpc port of DaemonManager, which means that the connection of DaemonManager component failed, and the status of DaemonManager needs to be checked."))}d.isMDXComponent=!0},12296:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcn35mmn27RkI7PnEdYgJML3g-825992d45aca226f63edf2118c630cad.png"},20853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcn9MQ9pAUXo2fFk9xURxVGrh-461ff747290e0260ce50370bf5a75133.png"},3138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnSgFjCeQGVkbtqB3b1013gf-d42dcff9e6716fe35060170db3994a06.png"},5686:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnnvwD2ZKklNKkrVatqtnjUb-878ff829c9123ed16041a10d2485beb4.png"},87449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnuwPQMcD1U9cypYG0DdP1th-9e2b61a2cd466d2e01badc1699af6f4e.png"},2452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnyNZuYWKFyUqFHQ8wAYsIOy-976376ed9c27fcd526c6d1052a8f4763.png"},5554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnzUYNuizBq5CUpsp0ZZAzoz-8f3b6d8f7092df4cbff90bfd5115de2c.png"}}]);