"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3956],{49613:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):k(k({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=m(a),d=r,c=u["".concat(o,".").concat(d)]||u[d]||s[d]||l;return a?n.createElement(c,k(k({ref:e},p),{},{components:a})):n.createElement(c,k({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,k=new Array(l);k[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[u]="string"==typeof t?t:r,k[1]=i;for(var m=2;m<l;m++)k[m]=a[m];return n.createElement.apply(null,k)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9996:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>k,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(64778),r=(a(59496),a(49613));const l={title:"\u4eceKafka\u5bfc\u5165",sidebar_position:3,tags:["Docs"]},k="\u5bfc\u5165\u6570\u636e",i={unversionedId:"data-import/import-methods/import-from-kafka",id:"version-0.3.0/data-import/import-methods/import-from-kafka",title:"\u4eceKafka\u5bfc\u5165",description:"\u4ece Kafka \u5bfc\u5165",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/data-import/import-methods/import-from-kafka.mdx",sourceDirName:"data-import/import-methods",slug:"/data-import/import-methods/import-from-kafka",permalink:"/zh-cn/docs/0.3.0/data-import/import-methods/import-from-kafka",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/data-import/import-methods/import-from-kafka.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:3,frontMatter:{title:"\u4eceKafka\u5bfc\u5165",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u4eceHDFS\u5bfc\u5165",permalink:"/zh-cn/docs/0.3.0/data-import/import-methods/import-from-hdfs"},next:{title:"\u76f4\u63a5\u8bbf\u95eeMySQL\u8868",permalink:"/zh-cn/docs/0.3.0/data-import/import-methods/direct-access-via-mysql"}},o={},m=[{value:"\u4ece Kafka \u5bfc\u5165",id:"\u4ece-kafka-\u5bfc\u5165",level:2},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:3},{value:"\u5efa\u8868",id:"\u5efa\u8868",level:4},{value:"\u865a\u62df\u5217\u652f\u6301",id:"\u865a\u62df\u5217\u652f\u6301",level:4},{value:"Setting \u53c2\u6570\u8bf4\u660e",id:"setting-\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u4fee\u6539\u6d88\u8d39\u53c2\u6570",id:"\u4fee\u6539\u6d88\u8d39\u53c2\u6570",level:4},{value:"\u624b\u52a8\u542f\u505c\u6d88\u8d39",id:"\u624b\u52a8\u542f\u505c\u6d88\u8d39",level:4},{value:"\u91cd\u7f6e offset",id:"\u91cd\u7f6e-offset",level:4},{value:"\u91cd\u7f6e\u5230\u7279\u6b8a\u4f4d\u7f6e",id:"\u91cd\u7f6e\u5230\u7279\u6b8a\u4f4d\u7f6e",level:4},{value:"\u8fd0\u7ef4\u624b\u518c",id:"\u8fd0\u7ef4\u624b\u518c",level:3},{value:"\u5e38\u89c1\u6d88\u8d39\u6027\u80fd\u8c03\u4f18",id:"\u5e38\u89c1\u6d88\u8d39\u6027\u80fd\u8c03\u4f18",level:4},{value:"\u8c03\u6574 max-block-size",id:"\u8c03\u6574-max-block-size",level:4},{value:"\u8c03\u6574 num_consumers",id:"\u8c03\u6574-num_consumers",level:4},{value:"\u7528\u4e8e\u8f85\u52a9\u6392\u67e5\u7684\u7cfb\u7edf\u8868",id:"\u7528\u4e8e\u8f85\u52a9\u6392\u67e5\u7684\u7cfb\u7edf\u8868",level:4},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:4},{value:"\u4e8b\u4ef6\u8868\uff08event_table\uff09",id:"\u4e8b\u4ef6\u8868event_table",level:5},{value:"\u4e8b\u4ef6\u7c7b\u578b\u8bf4\u660e\uff08event_type\uff09",id:"\u4e8b\u4ef6\u7c7b\u578b\u8bf4\u660eevent_type",level:5},{value:"\u6d88\u8d39\u72b6\u6001\u8868\uff1asystem.cnch_kafka_tables",id:"\u6d88\u8d39\u72b6\u6001\u8868systemcnch_kafka_tables",level:5},{value:"\u5e38\u89c1\u6392\u67e5\u6d88\u8d39\u5f02\u5e38\u8bb0\u5f55",id:"\u5e38\u89c1\u6392\u67e5\u6d88\u8d39\u5f02\u5e38\u8bb0\u5f55",level:4}],p={toc:m},u="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5bfc\u5165\u6570\u636e"},"\u5bfc\u5165\u6570\u636e"),(0,r.kt)("h2",{id:"\u4ece-kafka-\u5bfc\u5165"},"\u4ece Kafka \u5bfc\u5165"),(0,r.kt)("p",null,"CnchKafka \u662f ByConity \u57fa\u4e8e\u793e\u533a ClickHouse Kafka \u8868\u5f15\u64ce\u81ea\u7814\u5b9e\u73b0\u7684\u9002\u914d\u4e91\u539f\u751f\u67b6\u6784\u7684\u8868\u5f15\u64ce\uff0c\u7528\u4e8e\u9ad8\u6548\u5feb\u901f\u5730\u5c06\u7528\u6237\u6570\u636e\u4ece Apache Kafka \u5b9e\u65f6\u5bfc\u5165 ByConity\uff1b\u5176\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u65e2\u9002\u914d\u4e86\u4e91\u539f\u751f\u65b0\u67b6\u6784\uff0c\u540c\u65f6\u5728\u793e\u533a\u5b9e\u73b0\u57fa\u7840\u4e0a\u589e\u5f3a\u4e86\u90e8\u5206\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,r.kt)("h4",{id:"\u5efa\u8868"},"\u5efa\u8868"),(0,r.kt)("p",null,"\u521b\u5efa CnchKafka \u6d88\u8d39\u8868\u548c\u793e\u533a\u539f\u751f\u5efa Kafka \u8868\u7c7b\u4f3c\uff0c\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Setting")," \u53c2\u6570\u914d\u7f6e Kafka \u6570\u636e\u6e90\u53ca\u6d88\u8d39\u53c2\u6570\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE kafka_test.cnch_kafka_consume\n(\n    `i` Int64,\n    `ts` DateTime\n)\nENGINE = CnchKafka()\nSETTINGS\nkafka_broker_list = '10.10.10.10:9092',  -- replace with your own broker list\nkafka_topic_list = 'my_kafka_test_topic', -- topic name to subcribe\nkafka_group_name = 'hansome_boy_consume_group', -- your consumer-group name\nkafka_format = 'JSONEachRow', -- always be json\nkafka_row_delimiter = '\\n', -- always be \\n\nkafka_num_consumers = 1\n\n")),(0,r.kt)("p",null,"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Setting")," \u53c2\u6570\u8bf4\u660e\u53ca\u5176\u4ed6\u66f4\u591a\u53c2\u6570\u652f\u6301\u8bf7\u53c2\u8003\u4e0b\u65b9\u8bf4\u660e\uff09"),(0,r.kt)("p",null,"\u7531\u4e8e Kafka \u6d88\u8d39\u8bbe\u8ba1\u9700\u8981\u4e09\u5f20\u8868\uff0c\u6240\u4ee5\u8fd8\u9700\u8981\u540c\u6b65\u521b\u5efa\u53e6\u5916\u4e24\u5f20\u8868\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u521b\u5efa\u5b58\u50a8\u8868\uff08\u4ee5 CnchMergeTree \u4e3a\u4f8b\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE kafka_test.cnch_store_kafka\n(\n    `i` Int64,\n    `ts` DateTime\n)\nENGINE = CnchMergeTree\nPARTITION BY toDate(ts)\nORDER BY ts\n\n")),(0,r.kt)("p",null,"\u6700\u540e\u521b\u5efa\u7269\u5316\u89c6\u56fe\u8868\uff08\u5fc5\u987b Kafka \u8868\u548c\u5b58\u50a8\u8868\u521b\u5efa\u6210\u529f\u540e\u624d\u80fd\u521b\u5efa\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE MATERIALIZED VIEW kafka_test.cnch_kafka_view\nTO kafka_test.cnch_store_kafka\n(\n    `i` Int64,\n    `ts` DateTime\n)\nAS\nSELECT * -- you can add virtual columns here if you need\nFROM kafka_test.cnch_kafka_consume\n\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6709\u5bf9\u5e94 topic \u7684\u6d88\u8d39\u6743\u9650\uff0c\u90a3\u4e48\u4e09\u5f20\u8868\u521b\u5efa\u597d\u4ee5\u540e\uff0c\u6d88\u8d39\u5c31\u4f1a\u81ea\u52a8\u5f00\u59cb\u6267\u884c\u3002"),(0,r.kt)("h4",{id:"\u865a\u62df\u5217\u652f\u6301"},"\u865a\u62df\u5217\u652f\u6301"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u4e1a\u52a1\u9700\u8981\u83b7\u53d6 Kafka \u6d88\u606f\u7684\u5143\u6570\u636e\uff08e.g. \u6d88\u606f\u7684 partition, offset \u7b49\uff09\u3002\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 virtual columns \u529f\u80fd\u6765\u6ee1\u8db3\u8fd9\u4e2a\u9700\u6c42\u3002virtual columns \u4e0d\u9700\u8981\u5728\u5efa\u8868\u7684\u65f6\u5019\u6307\u5b9a\uff0c\u662f\u8868\u5f15\u64ce\u672c\u8eab\u7684\u5c5e\u6027\u3002\u53ef\u4ee5\u653e\u5230 VIEW \u8868\u7684 SELECT \u8bed\u53e5\u4e2d\u5b58\u50a8\u5230\u5e95\u8868\u4e2d\uff08\u5f53\u5e95\u8868\u6dfb\u52a0\u4e86\u5bf9\u5e94\u5217\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT\n    _topic,    -- String\n    _partition,    -- UInt64\n    _key,    -- String\n    _offset,    -- UInt64\n    _content,  -- String: \u5b8c\u6574\u7684\u6d88\u606f\u5185\u5bb9\n    *    -- \u6b63\u5e38\u5217\u53ef\u4ee5\u901a\u8fc7*\u5c55\u5f00\uff0c\u865a\u62df\u5217\u5219\u4e0d\u80fd\nFROM kafka_test.cnch_kafka_consume\n\n")),(0,r.kt)("h4",{id:"setting-\u53c2\u6570\u8bf4\u660e"},"Setting \u53c2\u6570\u8bf4\u660e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'| **\u53c2\u6570\u540d**                                    | **\u7c7b\u578b**        | **\u5fc5\u586b/\u9ed8\u8ba4\u503c** | **\u8bf4\u660e**                                                                                                                                                                                                                          |\n| :-------------------------------------------- | :-------------- | :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| kafka_cluster / kafka_broker_list             | String          | \u5fc5\u586b            | \u516c\u53f8\u5185\u90e8 Kafka \u96c6\u7fa4\uff1b\u793e\u533a\u7248\u672c Kafka \u8bf7\u4f7f\u7528 `kafka_broker_list` \u53c2\u6570\u3002                                                                                                                                                             |\n| kafka_topic_list                              | String          | \u5fc5\u586b            | \u53ef\u4ee5\u591a\u4e2a\uff0c\u9017\u53f7\u5206\u9694\u3002                                                                                                                                                                                                              |\n| kafka_group_name                              | String          | \u5fc5\u586b            | consumer group name\uff0c\u6d88\u8d39\u7ec4\u3002                                                                                                                                                                                                     |\n| kafka_format                                  | String          | \u5fc5\u586b            | \u6d88\u606f\u683c\u5f0f\uff1b\u76ee\u524d\u6700\u5e38\u7528 JSONEachRow\u3002                                                                                                                                                                                                |\n| kafka_row_delimiter                           | String          | \'\\0\'            | \u4e00\u822c\u4f7f\u7528 \'\\n\'\u3002                                                                                                                                                                                                                   |\n| kafka_num_consumers                           | UInt64          | 1               | \u6d88\u8d39\u8005\u4e2a\u6570\uff0c\u5efa\u8bae\u4e0d\u8d85\u8fc7 topic \u4e2d\u6700\u5927 partition \u6570\u76ee\u3002                                                                                                                                                                              |\n| kafka_max_block_size                          | UInt64          | 65536           | \u5199\u5165 block_size\uff0c\u4e0a\u9650 1M\u3002                                                                                                                                                                                                         |\n| kafka_max_poll_interval_ms                    | Milliseconds    | 7500            | the max time to poll from broker each iteration\u3002                                                                                                                                                                                  |\n| kafka_schema                                  | String          | ""              | schema \u6587\u4ef6\u8bbe\u7f6e\u53c2\u6570\uff0c\u4ee5\u6587\u4ef6\u540d + \u5192\u53f7 + \u6d88\u606f\u540d\u683c\u5f0f\u8bbe\u7f6e\u3002\u5982\uff1a `schema.proto:MyMessage`\u3002                                                                                                                                             |\n| kafka_format_schema_path                      | String          | ""              | \u8fdc\u7aef schema \u6587\u4ef6\u8def\u5f84(\u4e0d\u542b\u6587\u4ef6\u540d)\u8bbe\u7f6e\u53c2\u6570\uff0c\u76ee\u524d\u53ea\u652f\u6301 hdfs\u3002\uff08\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\uff0c\u5c06\u4ece\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\u7684\u9ed8\u8ba4\u8def\u5f84\u8bfb\u53d6\uff09\u3002                                                                                                               |\n| kafka_protobuf_enable_multiple_message        | bool            | true            | \u8bbe\u7f6e\u4e3a true\uff0c\u8868\u793a\u53ef\u4ee5\u4ece\u4e00\u6761 kafka \u6d88\u606f\u4e2d\u8bfb\u53d6\u591a\u4e2a protobuf \u7684 message\uff0c\u5f7c\u6b64\u4ee5\u5404\u81ea\u957f\u5ea6\u4e3a\u95f4\u9694\u3002                                                                                                                                        |\n| kafka_protobuf_default_length_parser          | bool            | false           | \u4ec5\u5728 `kafka_protobuf_enable_multiple_message` \u4e3a true \u751f\u6548\uff1atrue \u8868\u793a\u6d88\u606f\u5934\u90e8\u6709\u53d8\u91cf\u8bb0\u5f55\u957f\u5ea6\uff1bfalse \u8868\u793a\u7528\u4e00\u4e2a\u56fa\u5b9a\u7684 8 \u5b57\u8282\u4f5c\u4e3a\u5934\u90e8\u8bb0\u5f55\u957f\u5ea6\u3002                                                                                      |\n| kafka_extra_librdkafka_config                 | Json format string | ""           | \u5176\u4ed6 rdkafka \u652f\u6301\u7684\u53c2\u6570\uff0c\u901a\u5e38\u7528\u4e8e\u9274\u6743 (More params refer to [here](https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md#:~:text=see%20dedicated%20API-,ssl.ca.location,-*)).                                      |\n| cnch_vw_write                                 | String          | "vw_write"      | \u914d\u7f6e\u6d88\u8d39\u4f7f\u7528 Virtual WareHouse\uff0cconsumer \u4efb\u52a1\u5c06\u88ab\u8c03\u5ea6\u5230\u914d\u7f6e\u7684 Virtual Warehouse \u8282\u70b9\u6267\u884c\u3002                                                                                                                                        |\n| kafka_cnch_schedule_mode                      | String          | "random"        | ConsumeManager \u8c03\u5ea6 consumer \u4efb\u52a1\u65f6\u5019\u91c7\u53d6\u7684\u8c03\u5ea6\u7b56\u7565\uff0c\u76ee\u524d\u652f\u6301\uff1arandom, hash, and least_consumers\uff1b\u5982\u679c\u662f\u72ec\u7acb vw \u6216\u6d88\u8d39\u8005\u6570\u76ee\u5927\u4e8e 10\uff0c\u63a8\u8350\u4f7f\u7528 least_consumers\u3002                                                                   |\n')),(0,r.kt)("h4",{id:"\u4fee\u6539\u6d88\u8d39\u53c2\u6570"},"\u4fee\u6539\u6d88\u8d39\u53c2\u6570"),(0,r.kt)("p",null,"\u652f\u6301\u901a\u8fc7 ALTER \u547d\u4ee4\u5feb\u901f\u4fee\u6539 Setting \u53c2\u6570\uff0c\u4e3b\u8981\u7528\u4e8e\u8c03\u6574\u6d88\u8d39\u8005\u6570\u76ee\u7b49\u63d0\u5347\u6d88\u8d39\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER TABLE <cnch_kafka_name> MODIFY SETTING <name1> = <value1>, <name2> = <value2>\n\n")),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u6267\u884c\u4f1a\u81ea\u52a8\u91cd\u542f\u6d88\u8d39\u4efb\u52a1\u3002"),(0,r.kt)("h4",{id:"\u624b\u52a8\u542f\u505c\u6d88\u8d39"},"\u624b\u52a8\u542f\u505c\u6d88\u8d39"),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u573a\u666f\u4e2d\u7528\u6237\u53ef\u80fd\u9700\u8981\u624b\u52a8\u505c\u6b62\u6d88\u8d39\uff0c\u968f\u540e\u624b\u52a8\u6062\u590d\uff1b\u6211\u4eec\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684 SYSTEM \u547d\u4ee4\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SYSTEM START/STOP/RESTART CONSUME <cnch_kafka_name>\n\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aSTART/STOP \u547d\u4ee4\u4f1a\u5c06\u5bf9\u5e94\u72b6\u6001\u6301\u4e45\u5316\u5230 Catalog\uff0c\u56e0\u6b64\u5728\u6267\u884c STOP \u547d\u4ee4\u540e\uff0c\u5982\u679c\u4e0d\u6267\u884c START\uff0c\u5373\u4f7f\u670d\u52a1\u91cd\u542f\uff0c\u6d88\u8d39\u4efb\u52a1\u4e5f\u4e0d\u4f1a\u6062\u590d\u3002"),(0,r.kt)("h4",{id:"\u91cd\u7f6e-offset"},"\u91cd\u7f6e offset"),(0,r.kt)("p",null,"\u7531\u4e8e CnchKafka \u7684 offset \u7531\u5f15\u64ce\u81ea\u8eab\u7ba1\u7406\u548c\u4fdd\u5b58\uff0c\u5f53\u7528\u6237\u9700\u8981\u91cd\u542f offset \u65f6\uff0c\u6211\u4eec\u540c\u6837\u5b9e\u73b0\u4e86 SYSTEM \u547d\u4ee4\u64cd\u4f5c\u3002\u5177\u4f53\u652f\u6301\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\uff1a"),(0,r.kt)("h4",{id:"\u91cd\u7f6e\u5230\u7279\u6b8a\u4f4d\u7f6e"},"\u91cd\u7f6e\u5230\u7279\u6b8a\u4f4d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6309\u6700\u65b0\u4f4d\u7f6e/\u8d77\u59cb\u4f4d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SYSTEM RESET CONSUME OFFSET \'{"database_name":"XXX", "table_name": "XXX", "offset_value":-1}\'\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u7684\u7279\u6b8a\u4f4d\u7f6e\u7684 value \u503c\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    enum Offset {\n        OFFSET_BEGINNING = -2,\n        OFFSET_END = -1,\n        OFFSET_STORED = -1000,\n        OFFSET_INVALID = -1001\n    };\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6309\u65f6\u95f4\u6233\u91cd\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SYSTEM RESET CONSUME OFFSET \'{"database_name":"XXX", "table_name": "XXX", "timestamp":1646125258000}\'\n\n')),(0,r.kt)("p",null,"\u5176\u4e2d timestamp \u7684\u503c\u5e94\u8be5\u4e3a Kafka \u4fa7\u6570\u636e\u6709\u6548\u671f\u5185\u7684\u67d0\u4e2a\u65f6\u95f4\u7684\u65f6\u95f4\u6233\uff0c\u4e14\u4e3a\u6beb\u79d2\u7ea7\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a offset \u5177\u4f53 value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'system reset consume offset \'{"database_name":"XXX", "table_name": "XXX", "topic_name": "XXX", "offset_values":[{"partition":0, "offset":100}, {"partition":10, "offset":101}]}\'\n\n')),(0,r.kt)("p",null,"\u6307\u5b9a\u7279\u5b9a topic partition \u5230\u7279\u5b9a offset value\uff0c\u6bd4\u8f83\u5c11\u89c1\u3002"),(0,r.kt)("h3",{id:"\u8fd0\u7ef4\u624b\u518c"},"\u8fd0\u7ef4\u624b\u518c"),(0,r.kt)("h4",{id:"\u5e38\u89c1\u6d88\u8d39\u6027\u80fd\u8c03\u4f18"},"\u5e38\u89c1\u6d88\u8d39\u6027\u80fd\u8c03\u4f18"),(0,r.kt)("p",null,"\u5f53\u6d88\u8d39\u6301\u7eed\u51fa\u73b0 lag\uff0c\u901a\u5e38\u4e3a\u6d88\u8d39\u80fd\u529b\u4e0d\u8db3\u3002CnchKafka \u5efa\u8868\u9ed8\u8ba4 1 \u4e2a\u6d88\u8d39\uff0c\u5355\u6b21\u6d88\u8d39\u5199\u5165\u6700\u5927 block size \u4e3a 65536. \u5f53\u6d88\u8d39\u80fd\u529b\u4e0d\u8db3\u65f6\uff0c\u4f18\u5148\u8c03\u6574\u6d88\u8d39\u8005\u548c block-size \u53c2\u6570\u3002\u8c03\u6574\u65b9\u5f0f\u53c2\u8003\u4e0a\u6587",(0,r.kt)("strong",{parentName:"p"},"\u4fee\u6539\u6d88\u8d39\u53c2\u6570")),(0,r.kt)("h4",{id:"\u8c03\u6574-max-block-size"},"\u8c03\u6574 max-block-size"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8be5\u53c2\u6570\u76f4\u63a5\u5f71\u54cd\u6d88\u8d39\u5185\u5b58\u4f7f\u7528\uff0c\u503c\u8d8a\u5927\u6240\u9700\u5185\u5b58\u8d8a\u5927\u3002\u5bf9\u4e8e\u4e00\u4e9b\u5355\u6761\u6570\u636e\u8f83\u5927\u7684\u6d88\u8d39\u8868\uff0c\u8c28\u614e\u8c03\u6574\u8be5\u53c2\u6570\uff0c\u907f\u514d\u7206\u5185\u5b58\u3002\uff08\u4e0a\u9650\u4e3a 1M\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u7528\u6237\u5bf9\u6570\u636e\u5ef6\u65f6\u8981\u6c42\u4e0d\u9ad8\uff0c\u4e14\u6570\u636e\u91cf\u5927 \u5185\u5b58\u5145\u8db3\u65f6\uff0c\u53ef\u540c\u6b65\u8c03\u6574\u6b64\u53c2\u6570\u4ee5\u53ca\u201ckafka_max_poll_interval_ms\u201d\u53c2\u6570\uff0c\u8ba9\u6bcf\u4e00\u8f6e\u6d88\u8d39\u65f6\u95f4\u589e\u52a0\uff0c\u6bcf\u6b21\u5199\u5165\u7684 part \u53d8\u5927\uff0c\u964d\u4f4e MERGE \u538b\u529b\uff0c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002")),(0,r.kt)("h4",{id:"\u8c03\u6574-num_consumers"},"\u8c03\u6574 num_consumers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8be5\u53c2\u6570\u4e0a\u9650\u4e3a\u6d88\u8d39 topic \u5bf9\u5e94\u7684 partition \u6570\u76ee\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6d88\u8d39\u65e0 lag \u60c5\u51b5\u4e0b\uff0c\u5c3d\u53ef\u80fd\u51cf\u5c11\u6b64\u53c2\u6570\uff08\u5373\u907f\u514d\u65e0\u610f\u4e49\u589e\u5927\u6b64\u53c2\u6570\uff09\uff0c\u51cf\u5c11\u8d44\u6e90\u4f7f\u7528\uff0c\u540c\u65f6\u907f\u514d\u6d88\u8d39\u4ea7\u751f\u8fc7\u591a\u788e part\uff0c\u589e\u5927 MERGE \u538b\u529b\uff0c\u4e14\u4e0d\u5229\u4e8e\u67e5\u8be2\u3002")),(0,r.kt)("h4",{id:"\u7528\u4e8e\u8f85\u52a9\u6392\u67e5\u7684\u7cfb\u7edf\u8868"},"\u7528\u4e8e\u8f85\u52a9\u6392\u67e5\u7684\u7cfb\u7edf\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u4e8b\u4ef6\uff1acnch_system.cnch_kafka_log")),(0,r.kt)("p",null,"kakfa_log \u8868\u8bb0\u5f55\u4e86\u4e00\u4e9b\u6d88\u8d39\u7684\u57fa\u672c\u4e8b\u4ef6\uff0c\u5f00\u542f\u9700\u8981\u5728 config.xml \u4e2d\u914d\u7f6e kafka_log \u9879\uff08server&worker \u5747\u9700\u914d\u7f6e\uff09\uff0c\u91cd\u542f\u4e4b\u540e\u751f\u6548\u3002"),(0,r.kt)("p",null,"kafka_log \u5728 Virtual Warehouse \u7531 consumer \u4efb\u52a1\u5199\u5165\uff0c\u5b9e\u65f6\u6c47\u805a\u5230\u5168\u5c40\u7684 cnch_system.cnch_kafka_log \u8868\u4e2d\uff0c\u5b9e\u73b0\u4ece Server \u6bb5\u67e5\u770b\u6240\u6709\u6d88\u8d39\u8868\u7684\u6d88\u8d39\u8bb0\u5f55\u3002"),(0,r.kt)("h4",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("h5",{id:"\u4e8b\u4ef6\u8868event_table"},"\u4e8b\u4ef6\u8868\uff08event_table\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u5217\u540d")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Enum8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89c1\u4e0b\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u53d1\u751f\u65e5\u671f\u3002\u5206\u533a\u5b57\u6bb5\uff0c\u5efa\u8bae\u6bcf\u6b21\u67e5\u8be2\u90fd\u5e26\u4e0a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event_time"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u53d1\u751f\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration_ms"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u6301\u7eed\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cnch_database"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"CnchKafka \u5e93\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cnch_table"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"CnchKafka \u8868\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"consumer \u4efb\u52a1\u5e93\u540d\uff08\u76ee\u524d\u540c cnch_database\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"consumer \u4efb\u52a1\u8868\u540d\uff08\u901a\u5e38\u4e3a cnch_table \u52a0\u65f6\u95f4\u6233\u53ca\u6d88\u8d39\u8005\u7f16\u53f7\u540e\u7f00\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u7f16\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metric"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u884c\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"has_error"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"1 \u4ee3\u8868\u6709\u5f02\u5e38\uff1b0 \u4ee3\u8868\u65e0\u5f02\u5e38\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exception"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u5e38\u8bf4\u660e")))),(0,r.kt)("h5",{id:"\u4e8b\u4ef6\u7c7b\u578b\u8bf4\u660eevent_type"},"\u4e8b\u4ef6\u7c7b\u578b\u8bf4\u660e\uff08event_type\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"UInt8 \u503c")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"String \u503c")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"POLL"),(0,r.kt)("td",{parentName:"tr",align:null},"metric \u8868\u793a\u6d88\u8d39\u4e86\u591a\u5c11\u6761\u6570\u636e\uff0cduration_ms \u8986\u76d6\u4e86\u4e00\u6b21\u5b8c\u6574\u7684\u6d88\u8d39\u6d41\u7a0b\uff0c\u5305\u542b WRITE \u7684\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"PARSE_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"metric \u8868\u793a\u89e3\u6790\u51fa\u9519\u7684\u6d88\u8d39\u6761\u6570\uff0c\u5982\u679c\u6709\u591a\u6761\u89e3\u6790\u51fa\u9519\uff0c\u4ec5\u6311\u9009\u4e00\u6761\u6253\u5370\u51fa\u6765\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"WRITE"),(0,r.kt)("td",{parentName:"tr",align:null},"metric \u8868\u793a\u5199\u5165\u6570\u636e\u7684\u884c\u6570\uff0cduration_ms \u57fa\u672c\u4e0a\u7b49\u540c\u4e8e\u6570\u636e\u6301\u4e45\u5316\u7684\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"EXCEPTION"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8fc7\u7a0b\u7684\u5f02\u5e38\u3002\u5e38\u89c1\u7684\u6709\uff1a\u9274\u6743\u5f02\u5e38\uff0c\u6570\u636e\u6301\u4e45\u5316\u5931\u8d25\uff0cVIEW SELECT \u6267\u884c\u5931\u8d25\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"EMPTY_MESSAGE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u6d88\u606f\u6761\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"FILTER"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u9636\u6bb5\u88ab\u8fc7\u6ee4\u7684\u6570\u636e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"COMMIT"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u540e\u4e8b\u52a1\u63d0\u4ea4\u8bb0\u5f55\uff0c\u53ea\u6709\u8be5\u6761\u8bb0\u5f55\u624d\u8868\u793a\u6570\u636e\u5199\u5165\u6210\u529f\uff0c\u53ef\u4f5c\u4e3a\u6570\u636e\u5ba1\u8ba1\u6807\u51c6")))),(0,r.kt)("h5",{id:"\u6d88\u8d39\u72b6\u6001\u8868systemcnch_kafka_tables"},"\u6d88\u8d39\u72b6\u6001\u8868\uff1asystem.cnch_kafka_tables"),(0,r.kt)("p",null,"kafka_tables \u8bb0\u5f55\u4e86 CnchKafka \u8868\u7684\u5b9e\u65f6\u72b6\u6001\uff0c\u9ed8\u8ba4\u5f00\u59cb\uff0c\u4e3a\u5185\u5b58\u8868\uff1b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u5b57\u6bb5\u540d")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u6570\u636e\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka \u8868\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"kafka \u8868\u552f\u4e00\u6807\u8bc6 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kafka_cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"kafka \u96c6\u7fa4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topics"),(0,r.kt)("td",{parentName:"tr",align:null},"Array(String)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39 topic \u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer_group"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u5c5e\u6d88\u8d39\u7ec4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_consumers"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5b9e\u9645\u6b63\u5728\u6267\u884c\u7684\u6d88\u8d39\u8005\u6570\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer_tables"),(0,r.kt)("td",{parentName:"tr",align:null},"Array(String)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5404\u4e2a\u6d88\u8d39\u8005\u5bf9\u5e94\u7684\u6570\u636e\u8868\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer_hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"Array(String)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5404\u4e2a\u6d88\u8d39\u8005\u5206\u53d1\u5230\u7684\u6267\u884c\u8282\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consuemr_partitions"),(0,r.kt)("td",{parentName:"tr",align:null},"Array(String)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5404\u4e2a\u6d88\u8d39\u8005\u5206\u914d\u5230\u7684\u9700\u8981\u6d88\u8d39\u7684 partition")))),(0,r.kt)("h4",{id:"\u5e38\u89c1\u6392\u67e5\u6d88\u8d39\u5f02\u5e38\u8bb0\u5f55"},"\u5e38\u89c1\u6392\u67e5\u6d88\u8d39\u5f02\u5e38\u8bb0\u5f55"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b CnchKafka \u6d88\u8d39\u8868\u5b9e\u65f6\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT * FROM system.cnch_kafka_tables\nWHERE database = <database_name> AND name = <cnch_kafka_table>\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6700\u8fd1\u6d88\u8d39\u8bb0\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT * FROM cnch_system.cnch_kafka_log\nWHERE event_date = today()\n AND cnch_database = <database_name>\n AND cnch_table = <cnch_kafka_table>\n AND event_time > now() - 600 -- \u6700\u8fd1\u5341\u5206\u949f\nORDER BY event_time\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6309\u5c0f\u65f6\u7edf\u8ba1\u5f53\u5929\u6d88\u8d39\u8bb0\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT\n toHour(event_time) as hour,\n sumIf(metric, event_type = 'POLL') as poll_rows,\n sumIf(metric, event_type = 'PARSE_ERROR') as error_rows,\n sumIf(metric, event_type = 'COMMIT') as commit_rows\nFROM cnch_system.cnch_kafka_log\nWHERE event_date = today()\n AND cnch_database = <database_name>\n AND cnch_table = <cnch_kafka_table>\nGROUP BY hour\nORDER BY hour\n\n")))}s.isMDXComponent=!0}}]);