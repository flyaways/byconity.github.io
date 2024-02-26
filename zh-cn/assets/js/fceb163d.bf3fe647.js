"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[152],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,k=u["".concat(i,".").concat(d)]||u[d]||g[d]||r;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:l,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var n=a(4778),l=(a(9496),a(9613));const r={title:"Hive External Catalog",tags:["Docs"]},o="External Catalog",c={unversionedId:"basic-guide/hive-external-catalog",id:"version-0.2.0/basic-guide/hive-external-catalog",title:"Hive External Catalog",description:"Byconity \u9664\u4e86\u652f\u6301\u4f7f\u7528\u5916\u8868\u8bbf\u95ee Hive \u6570\u636e\u610f\u5916\uff0c\u4e5f\u652f\u6301\u901a\u8fc7 External Catalog \u65b9\u5f0f\u8bbf\u95ee.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/hive-external-catalog.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/hive-external-catalog",permalink:"/zh-cn/docs/0.2.0/basic-guide/hive-external-catalog",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/hive-external-catalog.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Hive External Catalog",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1\u5e93\u8868",permalink:"/zh-cn/docs/0.2.0/basic-guide/database-table-design"},next:{title:"Hive External Table",permalink:"/zh-cn/docs/0.2.0/basic-guide/hive-external-table"}},i={},s=[{value:"\u521b\u5efa Hive Catalog",id:"\u521b\u5efa-hive-catalog",level:2},{value:"\u521b\u5efa Glue Catalog",id:"\u521b\u5efa-glue-catalog",level:2},{value:"\u4e09\u6bb5\u5f0f\u547d\u540d",id:"\u4e09\u6bb5\u5f0f\u547d\u540d",level:2},{value:"\u8de8 Catalog \u67e5\u8be2",id:"\u8de8-catalog-\u67e5\u8be2",level:2},{value:"Show Databases and Tables",id:"show-databases-and-tables",level:2},{value:"Switch Catalog",id:"switch-catalog",level:2},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"\u5b9e\u73b0\u7ec6\u8282",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"external-catalog"},"External Catalog"),(0,l.kt)("p",null,"Byconity \u9664\u4e86\u652f\u6301\u4f7f\u7528\u5916\u8868\u8bbf\u95ee Hive \u6570\u636e\u610f\u5916\uff0c\u4e5f\u652f\u6301\u901a\u8fc7 External Catalog \u65b9\u5f0f\u8bbf\u95ee."),(0,l.kt)("h1",{id:"config-external_catalog_mgr"},"Config ",(0,l.kt)("inlineCode",{parentName:"h1"},"external_catalog_mgr")),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5c06 External Catalog \u7684\u5143\u4fe1\u606f\u5b58\u50a8\u5728 Byconity \u7684\u5143\u6570\u636e\u5b58\u50a8\u4e2d. \u56e0\u6b64\u6211\u4eec\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"cnch_config.yaml")," \u4e2d\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"external_catalog_mgr"),"\uff0c\u4ee5\u914d\u7f6e External Catalog \u76f8\u5173\u7684\u5143\u6570\u636e\u7684\u5b58\u653e\u4f4d\u7f6e."),(0,l.kt)("p",null,"\u4e00\u822c\u800c\u8a00, \u7528\u6237\u53ef\u4ee5\u9009\u62e9\u5c06 External Catalog \u5143\u6570\u636e\u548c Byconity \u5143\u6570\u636e\u4fe1\u606f\u653e\u5728\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u6240\u4ee5\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u590d\u7528\u4e4b\u524d\u5143\u6570\u636e\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog_service"),"\u914d\u7f6e\u7684\u5185\u5bb9\uff0c\u6bd4\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"external_catalog_mgr:\ntype: fdb\nfdb:\n  cluster_file: /config/fdb.cluster\n")),(0,l.kt)("h1",{id:"\u521b\u5efa-external-catalog"},"\u521b\u5efa External Catalog"),(0,l.kt)("p",null,"\u76ee\u524d\u53ea\u652f\u6301 IAM \u9274\u6743."),(0,l.kt)("h2",{id:"\u521b\u5efa-hive-catalog"},"\u521b\u5efa Hive Catalog"),(0,l.kt)("p",null,"\u6570\u636e\u5728 s3 \u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create external catalog hive_s3\nproperties\n  type='hive',\n  hive.metastore.uri = 'thrift://hive_thrift_server_ip:port',\n  aws.s3.region= 's3_region',\n  aws.s3.endpoint = 's3_endpoint',\n  aws.s3.access_key = 's3_ak',\n  aws.s3.secret_key = 's3_sk'\n")),(0,l.kt)("p",null,"\u6570\u636e\u5728 hdfs \u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"create external catalog hive_hdfs\nproperties\n    type='hive',\n    hive.metastore.uri = 'thrift://hive_thrift_server_ip:port',\n")),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\uff0c \u5bf9\u4e8e\u5b58\u50a8\u5728 HDFS \u4e0a\u7684 Hive \u5916\u8868\uff0c \u6211\u4eec\u53ea\u652f\u6301\u8bfb\u914d\u7f6e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"cnch-config.yaml")," \u4e2d\u7684 HDFS \u7684\u6570\u636e."),(0,l.kt)("h2",{id:"\u521b\u5efa-glue-catalog"},"\u521b\u5efa Glue Catalog"),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u8bd5\u9a8c\u6027\u7684\u652f\u6301\u4e86 AWS Glue Datacatalog."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"create external catalog glue_s3\nproperties\ntype='glue',\n    aws.glue.endpoint = 'glue_endpoint',\n    aws.glue.region='glue_region',\n    aws.glue.catalog_id='glue_catalog_id',\n    aws.glue.access_key = 'glue_ak',\n    aws.glue.secret_key = 'glue_sk',\n    aws.s3.region= 's3_region',\n    aws.s3.endpoint = 's3_endpoint',\n    aws.s3.access_key =   's3_ak',\n    aws.s3.secret_key =   's3_sk'\n\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"glue_catalog_id"),"\u662f\u4e00\u4e2a 12 \u4f4d\u6570\u5b57\u7684 AWS \u8d26\u53f7\u540d\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://repost.aws/questions/QUWxpW7KY7RsCj2ttURvb7jQ/get-glue-data-catalog-name-id"},"Aws Account ID Doc"),"."),(0,l.kt)("h1",{id:"\u5220\u9664-external-catalog"},"\u5220\u9664 External Catalog"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5982\u4e0b\u5220\u9664 External Catalog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"drop external catalog your_catalog_name;\n")),(0,l.kt)("h1",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,l.kt)("p",null,"\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u521b\u5efa\u597d\u4e86\u4e00\u4e2a\u540d\u53eb",(0,l.kt)("inlineCode",{parentName:"p"},"hive_s3"),"\u7684 External Catalog"),(0,l.kt)("h2",{id:"\u4e09\u6bb5\u5f0f\u547d\u540d"},"\u4e09\u6bb5\u5f0f\u547d\u540d"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog_name.db_name.table_name")," \u8fd9\u79cd\u4e09\u6bb5\u5f0f\u547d\u540d\u65b9\u5f0f\u76f4\u63a5\u8bbf\u95ee Hive \u4e2d\u7684\u8868, \u6bd4\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"    select * from hive_s3.hive_db_name.hive_table_name;\n")),(0,l.kt)("p",null,"Byconity \u539f\u751f\u7684 CnchMergeTree \u8868 \u4e5f\u53ef\u4ee5\u7528\u5982\u4e0b SQL \u8bbf\u95ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"    select * from cnch.cnch_db_name.cnch_db_name;\n    -- this is equivalent to select * from  cnch_db_name.cnch_db_name;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cnch")," (cloud-native-clickhouse \u7684\u7f29\u5199) \u88ab\u7528\u4f5c\u4e86 Byconity \u9ed8\u8ba4 Catalog \u7684\u540d\u5b57\u3002"),(0,l.kt)("h2",{id:"\u8de8-catalog-\u67e5\u8be2"},"\u8de8 Catalog \u67e5\u8be2"),(0,l.kt)("p",null,"\u5229\u7528 External Catalog\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u5c06 Hive \u5916\u8868\u548c Cnch \u7684 CnchMergeTree \u8868\u505a join"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," select * from hive_s3.hive_db.hive_table union all select (1) from cnch.cnch_db.cnch_table;\n")),(0,l.kt)("h2",{id:"show-databases-and-tables"},"Show Databases and Tables"),(0,l.kt)("p",null,"\u5217\u51fa Catalog \u4e2d\u7684\u6570\u636e\u5e93\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," show databases [from hive_catalog]\n")),(0,l.kt)("p",null,"\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," show tables from [hive_catalog.][database]\n")),(0,l.kt)("p",null,"\u83b7\u53d6\u8868\u7684\u521b\u5efa\u8bed\u53e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," show create table [hive_catalog.][database.][table]\n")),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c \u5916\u8868\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"show create table")," \u7ed3\u679c\u7c7b\u4f3c\u4e0b\u9762"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE `hive_catalog$$hive_db_name`.hive_table_name UUID 'some-uuid' (--field list -- `cc_call_center_sk` Nullable(Int64), `cc_call_center_id` Nullable(String))) ENGINE = CnchHive(hive_catalog, hive_db_name, hive_table_name) PARTITION BY tuple() SETTINGS endpoint = 'hive_endpoint', ak_id = 's3_ak', ak_secret = 's3_sk', region = 's3_region'\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u53ea\u7528\u4e8e\u5c55\u793a\u5916\u8868\u7684 schema \u4fe1\u606f\uff0c\u4e0d\u80fd\u7528\u6765\u5728 Hive \u4e2d\u521b\u5efa\u5916\u8868."),(0,l.kt)("p",null,"\u76ee\u524d Byconity \u8fd8\u6ca1\u6709\u652f\u6301\u76f4\u63a5\u521b\u5efa Hive \u8868\u7684\u529f\u80fd."),(0,l.kt)("h2",{id:"switch-catalog"},"Switch Catalog"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b SQL \u6765\u6539\u53d8\u9ed8\u8ba4\u7684 Catalog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    switch catalog hive_s3;\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u518d\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    select * from tpcds.call_center;\n")),(0,l.kt)("p",null,"Byconity \u5c31\u4f1a\u4ece Hive \u4e2d\u7684 tpcds \u6570\u636e\u5e93\u7684 call_center \u8868\u8bfb\u53d6\u6570\u636e.\n\u8981\u5207\u6362\u4f1a\u9ed8\u8ba4\u7684 Catalog\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    switch catalog cnch;\n")),(0,l.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    use hive_s3.tpcds\n")),(0,l.kt)("p",null,"\u76f4\u63a5\u5c06\u9ed8\u8ba4\u7684\u6570\u636e\u5e93\u6539\u5230 Hive \u7684 tpcds \u6570\u636e\u5e93\u3002\n\u4e3a\u4e86\u5207\u6362\u6362\u6765, \u76f4\u63a5\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    use cnch.cnch_database_name\n")),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u7ec6\u8282"},"\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("p",null,"\u6211\u4eec\u91c7\u7528\u4e86\u4e00\u79cd\u7c7b\u4f3c\u6539\u5199 SQL \u7684\u65b9\u5f0f\u6765\u652f\u6301\u591a Catalog."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    select * from catalog_name.db.tbl\n")),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\u4f1a\u88ab\u6539\u5199\u5230"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    select * from `catalog_name$$db`.tbl\n")),(0,l.kt)("p",null,"\u6240\u4ee5\u8bf7\u7528\u6237\u5728\u65e5\u5fd7\u4e2d\u770b\u5230\u76f8\u5173\u5185\u5bb9\u7684\u65f6\u5019\u4e0d\u8981\u60ca\u8bb6."))}g.isMDXComponent=!0}}]);