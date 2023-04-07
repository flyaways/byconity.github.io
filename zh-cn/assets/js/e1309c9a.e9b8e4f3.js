"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[741],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(n),_=a,k=u["".concat(c,".").concat(_)]||u[_]||d[_]||l;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=_;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},4213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(4778),a=(n(9496),n(9613));const l={title:"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570",tags:["Docs"]},s="\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570",o={unversionedId:"basic-guide/cluster-configuration",id:"basic-guide/cluster-configuration",title:"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570",description:"\u6587\u6863\u7c7b\u578b\uff1a\u8bf4\u660e\u578b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/basic-guide/cluster-configuration.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/cluster-configuration",permalink:"/zh-cn/docs/basic-guide/cluster-configuration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/basic-guide/cluster-configuration.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u5ba2\u6237\u7aef",permalink:"/zh-cn/docs/basic-guide/client-connection"},next:{title:"\u5bfc\u51fa\u6570\u636e",permalink:"/zh-cn/docs/basic-guide/data-export"}},c={},i=[{value:"Server \u914d\u7f6e\u53c2\u6570",id:"server-\u914d\u7f6e\u53c2\u6570",level:2},{value:"cnch_type",id:"cnch_type",level:3},{value:"tcp_port",id:"tcp_port",level:3},{value:"http_port",id:"http_port",level:3},{value:"rpc_port",id:"rpc_port",level:3},{value:"exchange_port",id:"exchange_port",level:3},{value:"exchange_status_port",id:"exchange_status_port",level:3},{value:"path",id:"path",level:3},{value:"tmp_path",id:"tmp_path",level:3},{value:"users_config",id:"users_config",level:3},{value:"Service discovery",id:"service-discovery",level:3},{value:"Catalog service",id:"catalog-service",level:3},{value:"HDFS \xa0 \u914d\u7f6e\u53c2\u6570",id:"hdfs--\u914d\u7f6e\u53c2\u6570",level:2},{value:"hdfs_user",id:"hdfs_user",level:3},{value:"cfs_addr",id:"cfs_addr",level:3},{value:"hdfs_addr",id:"hdfs_addr",level:3},{value:"hdfs_ha_nameservice",id:"hdfs_ha_nameservice",level:3},{value:"<del>hdfs_nnproxy</del>",id:"hdfs_nnproxy",level:3},{value:"storage_configuration",id:"storage_configuration",level:3},{value:"hdfs3_config",id:"hdfs3_config",level:3},{value:"disk_cache_strategies",id:"disk_cache_strategies",level:3},{value:"cnch_kafka_log",id:"cnch_kafka_log",level:3},{value:"brpc",id:"brpc",level:3},{value:"cnch_transaction_cleaner_max_threads",id:"cnch_transaction_cleaner_max_threads",level:3},{value:"cnch_transaction_cleaner_queue_size",id:"cnch_transaction_cleaner_queue_size",level:3},{value:"dance_merge_selector",id:"dance_merge_selector",level:3},{value:"exchange_timeout_ms",id:"exchange_timeout_ms",level:3},{value:"zookeeper",id:"zookeeper",level:3},{value:"TSO \u914d\u7f6e\u53c2\u6570",id:"tso-\u914d\u7f6e\u53c2\u6570",level:2},{value:"tso_service",id:"tso_service",level:3},{value:"keeper_server",id:"keeper_server",level:3},{value:"service_discovery",id:"service_discovery",level:3},{value:"Daemon Manager \u914d\u7f6e\u53c2\u6570",id:"daemon-manager-\u914d\u7f6e\u53c2\u6570",level:2},{value:"daemon_manager",id:"daemon_manager",level:3},{value:"cnch_data_retention_time_in_sec",id:"cnch_data_retention_time_in_sec",level:3},{value:"Resource Manager \u914d\u7f6e\u53c2\u6570",id:"resource-manager-\u914d\u7f6e\u53c2\u6570",level:2},{value:"resource_manager",id:"resource_manager",level:3},{value:"catalog",id:"catalog",level:3},{value:"catalog_service",id:"catalog_service",level:3}],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570"},"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570"),(0,a.kt)("p",null,"\u6587\u6863\u7c7b\u578b\uff1a\u8bf4\u660e\u578b"),(0,a.kt)("p",null,"\u5185\u5bb9\u63d0\u8981\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5b89\u88c5\u90e8\u7f72\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u7406\u89e3\u54ea\u4e9b\u57fa\u7840\u53c2\u6570"),(0,a.kt)("li",{parentName:"ol"},"\u5404\u7ec4\u4ef6\u5206\u522b\u6709\u54ea\u4e9b\u9ad8\u7ea7\u53c2\u6570\uff0c\u4f5c\u7528\u662f\u4ec0\u4e48")),(0,a.kt)("h2",{id:"server-\u914d\u7f6e\u53c2\u6570"},"Server \u914d\u7f6e\u53c2\u6570"),(0,a.kt)("p",null,"ByConity(\u66fe\u7528\u5185\u90e8\u4ee3\u53f7 CNCH) Server \u7aef\u7684\u914d\u7f6e\u4fdd\u5b58\u5728 cnch-server.xml \u4e2d\uff0c\u8fdb\u7a0b\u542f\u52a8\u65f6\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"--config-file")," \u6307\u5b9a\uff0c server \u4f1a\u81ea\u52a8\u4ece cnch-server.xml \u4e2d\u52a0\u8f7d\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"cnch_type"},"cnch_type"),(0,a.kt)("p",null,"\u914d\u7f6e ByConity \u8fdb\u7a0b\u7c7b\u578b\uff0c\u53ef\u914d\u7f6e\u4e3a server \u6216\u8005 worker\u3002\u5176\u4e2d server \u4e3b\u8981\u8d1f\u8d23\u63a5\u6536\u67e5\u8be2\u8bf7\u6c42\u5e76\u8d1f\u8d23\u5c06\u67e5\u8be2\u8c03\u5ea6\u5230 worker\uff1bworker \u8282\u70b9\u4e3b\u8981\u8d1f\u8d23\u6267\u884c\u6765\u81ea server \u7684\u67e5\u8be2\u4efb\u52a1\u3002\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_type>server</cnch_type>\n\n")),(0,a.kt)("h3",{id:"tcp_port"},"tcp_port"),(0,a.kt)("p",null,"server \u548c\u5ba2\u6237\u7aef\u8fdb\u884c\u8fde\u63a5\u7684 TCP \u7aef\u53e3"),(0,a.kt)("p",null,"Example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<tcp_port>9000</tcp_port>\n\n")),(0,a.kt)("h3",{id:"http_port"},"http_port"),(0,a.kt)("p",null,"server \u4e0e\u5ba2\u6237\u7aef\u8fdb\u884c\u8fde\u63a5\u7684 HTTP \u7aef\u53e3"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<https_port>9999</https_port>\n\n")),(0,a.kt)("h3",{id:"rpc_port"},"rpc_port"),(0,a.kt)("p",null,"server \u4e0e\u5176\u4ed6\u7ec4\u4ef6\u8fdb\u884c\u4ea4\u4e92\u7684 RPC \u7aef\u53e3"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<rpc_port>8124</rpc_port>\n\n")),(0,a.kt)("h3",{id:"exchange_port"},"exchange_port"),(0,a.kt)("p",null,"\u590d\u6742\u67e5\u8be2\u7684\u6570\u636e\u4f20\u8f93\u7aef\u53e3 \uff08\u5c06\u6765\u8003\u8651\u4e0e rpc_port \u5408\u5e76\uff09"),(0,a.kt)("h3",{id:"exchange_status_port"},"exchange_status_port"),(0,a.kt)("p",null,"\u590d\u6742\u67e5\u8be2\u7684\u63a7\u5236\u6307\u4ee4\u7aef\u53e3 \uff08\u5c06\u6765\u8003\u8651\u4e0e rpc_port \u5408\u5e76\uff09"),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\u672c\u5730\u6570\u636e\u8def\u5f84\u76ee\u5f55"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<path>/var/lib/clickhouse/</path>\n\n")),(0,a.kt)("h3",{id:"tmp_path"},"tmp_path"),(0,a.kt)("p",null,"\u672c\u5730\u4e34\u65f6\u76ee\u5f55\u8def\u5f84,\u7528\u6765\u5b58\u653e\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u7684\u4e34\u65f6\u6570\u636e"),(0,a.kt)("p",null,"Example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<tmp_path>/var/lib/clickhouse/tmp/</tmp_path>\n\n")),(0,a.kt)("h3",{id:"users_config"},"users_config"),(0,a.kt)("p",null,"\u7528\u6237\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<users_config>/path/to/userconf/users.xml</users_config>\n\n")),(0,a.kt)("h3",{id:"service-discovery"},"Service discovery"),(0,a.kt)("p",null,"\u914d\u7f6e\u4e0e server \u8fdb\u7a0b\u901a\u4fe1\u7684\u5176\u4ed6\u7ec4\u4ef6(\u5305\u62ec\u5176\u4ed6 server)\u3002\u4e0e server \u4ea4\u4e92\u7684\u5176\u4ed6\u7ec4\u4ef6\u6709 server, tso, daemon manager, virtual warehouse \u4ee5\u53ca resource manager"),(0,a.kt)("p",null,"keys",(0,a.kt)("strong",{parentName:"p"},":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," : \u670d\u52a1\u53d1\u73b0\u6a21\u5f0f, \u53ef\u9009\u62e9\u7684\u914d\u7f6e\u53c2\u6570\u4e3a local , dns, consul"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cluster"),": \u96c6\u7fa4\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disable_cache"),"\uff1a\u5982\u679c\u914d\u7f6e\u4e3a false, \u5c06\u542f\u7528\u7f13\u5b58\u4ee5\u51cf\u5c11\u8c03\u7528\u670d\u52a1\u53d1\u73b0\u7684\u6b21\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cache_timeout")," : \u7f13\u5b58\u8fc7\u671f\u65f6\u95f4")),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<service_discovery>\n    <mode>dns</mode>\n    <cluster>default</cluster>\n        <disable_cache>false</disable_cache>\n        <cache_timeout>5</cache_timeout>\n    <server>\n        <psm>data.cnch.server</psm>\n        <service>cnch-server-pp</service>\n        <headless_service>cnch-server-pp-headless</headless_service>\n    </server>\n    <tso>\n        <psm>data.cnch.tso</psm>\n        <service>cnch-tso</service>\n        <headless_service>cnch-tso-headless</headless_service>\n    </tso>\n    <vw>\n        <psm>data.cnch.vw</psm>\n    </vw>\n    <daemon_manager>\n        <psm>data.cnch.daemon_manager</psm>\n        <service>cnch-daemon-manager</service>\n        <headless_service>cnch-daemon-manager-headless</headless_service>\n    </daemon_manager>\n    <resource_manager>\n        <psm>data.cnch.resource_manager</psm>\n        <service>cnch-resource-manager</service>\n        <headless_service>cnch-resource-manager-headless</headless_service>\n    </resource_manager>\n</service_discovery>\n\n")),(0,a.kt)("h3",{id:"catalog-service"},"Catalog service"),(0,a.kt)("p",null,"\u96c6\u7fa4\u5143\u6570\u636e\u76f8\u5173\u914d\u7f6e"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," : \u5143\u6570\u636e\u5b58\u50a8\u5f15\u64ce\u7c7b\u578b\uff0c\u652f\u6301 bytekv, fdb")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\x3c!-- For foundationDB metastore--\x3e\n<catalog_service>\n    \x3c!--TODO: move name_space into catalog_service tag --\x3e\n    \x3c!--Metastore storage type, support `bytekv` and `fdb`--\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/cluster_config</cluster_file>\n    </fdb>\n</catalog_service>\n\n")),(0,a.kt)("h3",{id:""}),(0,a.kt)("h2",{id:"hdfs--\u914d\u7f6e\u53c2\u6570"},"HDFS \xa0 \u914d\u7f6e\u53c2\u6570"),(0,a.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u65f6\uff0c\u4f1a\u6309\u7167 cfs_addr>hdfs_addr>hdfs_ha_nameservice>hdfs_nnproxy \u7684\u987a\u5e8f\u6765\u68c0\u6d4b\u914d\u7f6e\u9879\uff0c\u4e00\u4f46\u547d\u4e2d\u67d0\u4e2a\u914d\u7f6e\u9879\u914d\u7f6e\u5219\u4f7f\u7528\u5bf9\u5e94\u7684\u914d\u7f6e\u9879\u6765\u8bbf\u95ee HDFS"),(0,a.kt)("h3",{id:"hdfs_user"},"hdfs_user"),(0,a.kt)("p",null,"\u8bbf\u95ee HDFS \u65f6\u9ed8\u8ba4\u4f7f\u7528\u7684\u7528\u6237\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4 clickhouse"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<hdfs_user>clickhouse</hdfs_user>\n\n")),(0,a.kt)("h3",{id:"cfs_addr"},"cfs_addr"),(0,a.kt)("p",null,"cfs \u670d\u52a1\u7684\u5730\u5740\uff0c\u683c\u5f0f\u4e3a cfs://service_url"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cfs_addr>cfs://service_url</cfs_addr>\n\n")),(0,a.kt)("h3",{id:"hdfs_addr"},"hdfs_addr"),(0,a.kt)("p",null,"hdfs \u670d\u52a1\u7684\u5730\u5740\uff0c\u683c\u5f0f\u4e3a hdfs://nnip:nnport/path"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<hdfs_addr>hdfs://nnip:nnport/path</hdfs_addr>\n\n")),(0,a.kt)("h3",{id:"hdfs_ha_nameservice"},"hdfs_ha_nameservice"),(0,a.kt)("p",null,"hdfs \u670d\u52a1\u7684\u540d\u79f0\uff0c\u9700\u8981\u5728 libhdfs3 \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u63d0\u524d\u914d\u7f6e\u597d"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<hdfs_ha_nameservice>hdfs_service</hdfs_ha_nameservice>\n\n")),(0,a.kt)("h3",{id:"hdfs_nnproxy"},(0,a.kt)("del",{parentName:"h3"},"hdfs_nnproxy")),(0,a.kt)("p",null,(0,a.kt)("del",{parentName:"p"},"\u8bbf\u95ee"),(0,a.kt)("del",{parentName:"p"},"HDFS"),(0,a.kt)("del",{parentName:"p"},"\u65f6\u9ed8\u8ba4\u4f7f\u7528\u7684 nnproxy \u540d\u79f0\uff0c\u9ed8\u8ba4 nnproxy")),(0,a.kt)("p",null,(0,a.kt)("del",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~~<hdfs_nnproxy>nnproxy</hdfs_nnproxy>~~\n\n")),(0,a.kt)("h3",{id:"storage_configuration"},"storage_configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63a5\u4e0b\u6765\u7684\u914d\u7f6e\u5c42\u7ea7\u4e0e\u914d\u7f6e\u6587\u4ef6\u4e2d storage_configuration \u914d\u7f6e\u5c42\u7ea7\u4e00\u4e00\u5bf9\u5e94")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"storage_configuration"),(0,a.kt)("li",{parentName:"ul"},"cnch_default_policy\uff0c\u6307\u5b9a CNCH \u5b58\u50a8\u5b9e\u9645\u6570\u636e\u6240\u4f7f\u7528\u7684 StoragePolicy\uff0c\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u662f cnch_default_hdfs\uff0c\u8fd9\u4e2a StoragePolicy \u4e2d\u5e94\u5f53\u4ec5\u5305\u542b HDFSDisk"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u5efa\u8868\u7684\u65f6\u5019\uff0c\u5bf9\u4e8e CNCH \u8868\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a storage_policy \u8fd9\u4e2a MergeTreeSettings\uff0c\u5219\u4f1a\u88ab\u9ed8\u8ba4\u4fee\u6539\u4e3a ${cnch_default_policy}"),(0,a.kt)("li",{parentName:"ul"},"cnch_auxility_policy\uff0c\u6307\u5b9a CNCH \u5728\u672c\u5730\u78c1\u76d8\u4e0a\u5b58\u50a8\u4e34\u65f6\u6570\u636e\u6240\u4f7f\u7528\u7684 StoragePolicy\uff0c\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u662f default"),(0,a.kt)("li",{parentName:"ul"},"disks"),(0,a.kt)("li",{parentName:"ul"},"${DISK_NAME}"),(0,a.kt)("li",{parentName:"ul"},"type\uff0c\u8fd9\u4e2a\u78c1\u76d8\u7684\u7c7b\u578b\uff0c\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u662f local"),(0,a.kt)("li",{parentName:"ul"},"CNCH \u652f\u6301\u9009\u7528 hdfs/bytehdfs \u8fd9\u4e24\u79cd\u78c1\u76d8\u4f5c\u4e3a\u8fdc\u7aef\u5b58\u50a8\uff0c\u76ee\u524d\u8be5 StoragePolicy \u4e2d\u4ec5\u652f\u6301\u5355\u4e2a Disk"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u4e0e\u5185\u90e8\u7684\u914d\u7f6e\u517c\u5bb9\uff0chdfs/bytehdfs \u5747\u89e3\u6790\u4e3a\u5185\u90e8\u7684 bytehdfs \u8fd9\u79cd Disk\uff0c\u793e\u533a\u7248\u672c\u7684 HDFSDisk \u7684 type \u88ab\u91cd\u547d\u540d\u4e3a communityhdfs"),(0,a.kt)("li",{parentName:"ul"},"CNCH \u6240\u4f7f\u7528\u7684 StoragePolicy \u6240\u6307\u5b9a\u7684 HDFSDisk\uff0c\u5176\u914d\u7f6e\u9879\u5728\u6240\u6709\u7684 Server/Worker \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u90fd\u5e94\u5f53\u76f8\u540c"),(0,a.kt)("li",{parentName:"ul"},"path"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5c06\u88ab\u5b58\u50a8\u5728\u8fd9\u4e2a Disk \u7684\u54ea\u4e2a\u8def\u5f84\u4e2d\uff0c\u5fc5\u9700\u7684\u914d\u7f6e\u9879"),(0,a.kt)("li",{parentName:"ul"},"hdfs_params"),(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9 bytehdfs \u7c7b\u578b\u7684\u78c1\u76d8\u6240\u65b0\u589e\u7684\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u5305\u542b\u5982\u4e0b\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"hdfs_user\uff0c\u8fde\u63a5 hdfs \u6240\u4f7f\u7528\u7684 user\uff0c\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u662f clickhouse"),(0,a.kt)("li",{parentName:"ul"},"cfs_addr\uff0ccfs \u7684\u5730\u5740\uff0c\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u4ec5\u5728\u4f7f\u7528 cfs \u65f6\u9700\u8981\u914d\u7f6e\u6b64\u914d\u7f6e\u9879"),(0,a.kt)("li",{parentName:"ul"},"hdfs_addr\uff0chdfs \u7684 namenode \u7684\u5730\u5740\uff0c\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u5982 hdfs://nnip:nnport/path"),(0,a.kt)("li",{parentName:"ul"},"hdfs_ha_nameservice\uff0c\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528 hdfs \u7684 HA\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u914d\u7f6e\u9879\u6307\u5b9a\u5bf9\u5e94\u7684 service\uff0c\u5bf9\u5e94\u7684 hdfs \u914d\u7f6e\u9700\u8981\u901a\u8fc7 hdfs3_config \u914d\u7f6e\u6587\u4ef6\u6765\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"hdfs_nnproxy\uff0chdfs \u7684 nnproxy \u7684\u5730\u5740\uff0c\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u662f nnproxy"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c DiskByteHDFS \u6ca1\u6709\u914d\u7f6e hdfs_params \u914d\u7f6e\u9879\uff0c\u5219\u4f1a\u53bb\u914d\u7f6e\u6587\u4ef6\u4e2d\u627e\u5230\u5168\u5c40\u7684\u914d\u7f6e\u9879\uff0c\u4f8b\u5982\u914d\u7f6e\u6587\u4ef6\u4e2d hdfs_user \u8fd9\u4e2a\u914d\u7f6e\u9879\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},"policies"),(0,a.kt)("li",{parentName:"ul"},"${STORAGE_POLICY_NAME}"),(0,a.kt)("li",{parentName:"ul"},"volumes"),(0,a.kt)("li",{parentName:"ul"},"${VOLUME_NAME}"),(0,a.kt)("li",{parentName:"ul"},"default\uff0c\u8fd9\u4e2a Volume \u4e2d\u7684\u9ed8\u8ba4\u78c1\u76d8\uff0c\u5fc5\u9700\u7684\u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u7684\u78c1\u76d8\u4f1a\u88ab\u7528\u6765\u5b58\u653e\u90e8\u5206\u4e0d\u652f\u6301\u591a\u76d8\u5b58\u50a8\u7684\u6570\u636e\uff0c\u4f8b\u5982 metastore \u7b49"),(0,a.kt)("li",{parentName:"ul"},"disk\uff0c\u8fd9\u4e2a Volume \u6240\u5305\u542b\u7684\u6240\u6709\u78c1\u76d8\u540d\u79f0\uff0c\u5fc5\u9700\u7684\u914d\u7f6e\u9879\uff0c\u5bf9\u5e94 Disk \u9700\u8981\u5728 storage_configuration.disks \u4e2d\u914d\u7f6e\u597d")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<storage_configuration>\n    <disks>\n        <default></default>\n        <server_local_disk1>\n            <path>/home/ch_test_service/service_test_env/server_data1/</path>\n        </server_local_disk1>\n        <server_local_disk2>\n            <path>/home/ch_test_service/service_test_env/server_data2/</path>\n        </server_local_disk2>\n        <server_hdfs_disk0>\n            <path>/user/cnch/</path>\n            <type>bytehdfs</type>\n        </server_hdfs_disk0>\n    </disks>\n    <policies>\n        <default>\n            <volumes>\n                <local>\n                    <default>default</default>\n                    <disk>default</disk>\n                    <disk>server_local_disk1</disk>\n                    <disk>server_local_disk2</disk>\n                </local>\n            </volumes>\n        </default>\n        <cnch_default_hdfs>\n            <volumes>\n                <hdfs>\n                    <default>server_hdfs_disk0</default>\n                    <disk>server_hdfs_disk0</disk>\n                </hdfs>\n            </volumes>\n        </cnch_default_hdfs>\n    </policies>\n</storage_configuration>\n\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u517c\u5bb9\u5185\u90e8\u65e7\u7248\u672c\u7684\u914d\u7f6e\u9879\uff0c\u5982\u679c\u7528\u6237\u4ec5\u6307\u5b9a\u4e86 default \u8fd9\u4e00\u4e2a StoragePolicy\uff0c\u540c\u65f6\u5305\u542b hdfs \u548c local \u8fd9\u4e24\u4e2a volume\uff0c\u90a3\u4e48\u8fd9\u4e2a\u914d\u7f6e\u9879\u4f1a\u88ab\u89e3\u6790\u6210\u4e24\u4e2a StoragePolicy\uff0c\u4e00\u4e2a\u662f default\uff0c\u4f46\u662f\u4ec5\u5305\u542b local \u8fd9\u4e2a volume\uff0c\u53e6\u4e00\u4e2a\u662f ${cnch_default_policy}\uff0c\u4ec5\u5305\u542b hdfs \u8fd9\u4e2a volume")),(0,a.kt)("h3",{id:"hdfs3_config"},"hdfs3_config"),(0,a.kt)("p",null,"libhdfs3 \u914d\u7f6e\u6587\u4ef6\u8def\u5f84"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<hdfs3_config>/path/to/conf/hdfs3.xml</hdfs3_config>\n\n")),(0,a.kt)("h3",{id:"disk_cache_strategies"},"disk_cache_strategies"),(0,a.kt)("p",null,"\u914d\u7f6e disk cache \u7b56\u7565\uff0c\u5305\u62ec\u7b56\u7565 simple \u548c lru \u4e24\u79cd\u4e0d\u540c\u7b56\u7565\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lru"),"\uff0cLRUCache \u6dd8\u6c70\u7b56\u7565\u76f8\u5173\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"lru_max_size\uff0cDiskCache \u6700\u5927\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4 2T"),(0,a.kt)("li",{parentName:"ul"},"random_drop_threshold\uff0cCache \u961f\u5217\u6709\u957f\u5ea6\u9650\u5236\uff0c\u5f53\u961f\u5217\u957f\u5ea6\u5230\u8fbe\u4e00\u5b9a\u6bd4\u4f8b\u540e\u4f1a\u6309\u4e00\u5b9a\u51e0\u7387\u5f00\u59cb\u4e22\u5f03 Cache \u8bf7\u6c42\u6765\u907f\u514d\u5927\u8868 Scan \u5bfc\u81f4 Cache \u961f\u5217\u88ab\u5360\u6ee1\uff0c\u9ed8\u8ba4 50%"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"simple"),"\uff0cCache \u7b56\u7565\u76f8\u5173\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"segment_size\uff0cDiskCache \u7684\u7c92\u5ea6\uff0c\u9ed8\u8ba4 8192\uff0c\u5373\u5c06\u4e00\u4e2a ColumnStream \u7684\u6700\u591a 8192 \u4e2a GranuleCache \u7ec4\u6210\u4e00\u4e2a DiskCacheSegment"),(0,a.kt)("li",{parentName:"ul"},"hits_to_cache\uff0c\u6570\u636e\u5f00\u59cb Cache \u7684\u9608\u503c\uff0c\u9ed8\u8ba4\u4e3a 2")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<disk_cache_strategies>\n    <simple>\n        <lru_max_size>1099511627776</lru_max_size>\n    </simple>\n</disk_cache_strategies>\n\n")),(0,a.kt)("h3",{id:"cnch_kafka_log"},"cnch_kafka_log"),(0,a.kt)("p",null,"\u914d\u7f6e\u540e\uff0cCNCH \u5c06\u5f00\u542f kafka_log, \u53ef\u901a\u8fc7\u7cfb\u7edf\u8868\u67e5\u770b\u6d88\u8d39\u65e5\u5fd7"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_kafka_log>\n    <database>cnch_system</database>\n    <table>cnch_kafka_log</table>\n    <flush_max_row_count>10000</flush_max_row_count>\n    <flush_interval_milliseconds>7500</flush_interval_milliseconds>\n</cnch_kafka_log>\n\n")),(0,a.kt)("h3",{id:"brpc"},"brpc"),(0,a.kt)("h3",{id:"cnch_transaction_cleaner_max_threads"},"cnch_transaction_cleaner_max_threads"),(0,a.kt)("p",null,"CNCH \u540e\u53f0\u6e05\u7406 transaction record \u7684\u7ebf\u7a0b\u6c60\u5927\u5c0f\uff0c\u9ed8\u8ba4 128"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_transaction_cleaner_max_threads>128</cnch_transaction_cleaner_max_threads>\n\n")),(0,a.kt)("h3",{id:"cnch_transaction_cleaner_queue_size"},"cnch_transaction_cleaner_queue_size"),(0,a.kt)("p",null,"CNCH \u540e\u53f0\u6e05\u7406 transaction record \u7684\u7ebf\u7a0b\u6c60\u961f\u5217\u5927\u5c0f\uff0c\u9ed8\u8ba4 10000"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_transaction_cleaner_queue_size>10000</cnch_transaction_cleaner_queue_size>\n\n")),(0,a.kt)("h3",{id:"dance_merge_selector"},"dance_merge_selector"),(0,a.kt)("p",null,"\u914d\u7f6e\u81ea\u7814 merge \u9009\u62e9\u7b56\u7565\u53c2\u6570"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dance_merge_selector>\n    <max_total_rows_to_merge>10000000</max_total_rows_to_merge>\n</dance_merge_selector>\n\n")),(0,a.kt)("h3",{id:"exchange_timeout_ms"},"exchange_timeout_ms"),(0,a.kt)("p",null,"\u590d\u6742\u67e5\u8be2\u6570\u636e\u4f20\u8f93 rpc \u8d85\u65f6\uff0c\u9ed8\u8ba4 100000"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<exchange_timeout_ms>100000</exchange_timeout_ms>\n\n")),(0,a.kt)("h3",{id:"zookeeper"},"zookeeper"),(0,a.kt)("p",null,"\u914d\u7f6e zookeeper \uff08\u53ef\u9009\uff09\uff0c \u5f53\u4f7f\u7528 clickhouse keeper \u65f6\u9700\u8981\u914d\u7f6e\u4e3a\u7a7a"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<zookeeper></zookeeper>\n\n")),(0,a.kt)("h2",{id:"tso-\u914d\u7f6e\u53c2\u6570"},"TSO \u914d\u7f6e\u53c2\u6570"),(0,a.kt)("h3",{id:"tso_service"},"tso_service"),(0,a.kt)("p",null,"\u914d\u7f6e tso \u670d\u52a1\uff0c\u5305\u62ec\u670d\u52a1\u7aef\u53e3\uff0c\u5143\u6570\u636e\u5b58\u50a8\uff0ckeeper \u7b49"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"port"),": TSO \u670d\u52a1 TCP \u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"keeper"),": tso\uff0cserver_master \u7b49\u7ec4\u4ef6 leader \u9009\u4e3e\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type"),": TSO \u5143\u6570\u636e\u5b58\u50a8\u5f15\u64ce")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<tso_service>\n    <port>8080</port>\n    <keeper>\n        <port>2181</port>\n    </keeper>\n    \x3c!-- Support for CNCH-CE Merge. Metastore store type, support `bytekv` and `fdb` --\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/conf/fdb.cluster</cluster_file>>\n    </fdb>\n </tso_service>\n\n")),(0,a.kt)("h3",{id:"keeper_server"},"keeper_server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"path: keeper \u6570\u636e\u5b58\u50a8\u8def\u5f84")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<path>/var/lib/tso_server/keeper/</path>\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keeper_server"),(0,a.kt)("li",{parentName:"ul"},"tcp_port\uff1akeeper \u670d\u52a1\u7684 tcp \u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"server_id\uff1akeeper \u5185\u90e8 leader \u9009\u4e3e\u7684 id\uff0c\u9700\u8981\u662f int \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"log_storage_path\uff1akeeper log \u5b58\u50a8\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"snapshot_storage_path\uff1akeeper snapshot \u5b58\u50a8\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"coordination_settings\uff1a\u652f\u6301\u5b9a\u5236\u5316 keeper settings"),(0,a.kt)("li",{parentName:"ul"},"raft_configuration\uff1a\u53ef\u9009\uff0c\u652f\u6301\u4ece\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6 keeper \u8282\u70b9\u3002\u5982\u4f7f\u7528\u670d\u52a1\u53d1\u73b0\u8bfb\u53d6 keeper \u8282\u70b9\uff0c\u5219\u4e0d\u80fd\u914d\u7f6e\u8be5\u914d\u7f6e\u9879"),(0,a.kt)("li",{parentName:"ul"},"id: \u540c\u4e0a server_id"),(0,a.kt)("li",{parentName:"ul"},"hostname: ip \u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},"port: keeper \u5185\u90e8\u901a\u4fe1 port\uff0c\u4e0e tcp_port \u4e0d\u540c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<keeper_server>\n    <tcp_port>9181</tcp_port>\n    <server_id>1</server_id>\n    <log_storage_path>/var/lib/tso_server/keeper/log</log_storage_path>\n    <snapshot_storage_path>/var/lib/tso_server/keeper1/snapshots</snapshot_storage_path>\n\n    <coordination_settings>\n        <operation_timeout_ms>10000</operation_timeout_ms>\n        <session_timeout_ms>30000</session_timeout_ms>\n        <raft_logs_level>warning</raft_logs_level>\n        <compress_logs>0</compress_logs>\n    </coordination_settings>\n\x3c!--\n    <raft_configuration>\n        <server>\n            <id>1</id>\n            <hostname>host0</hostname>\n            <port>9445</port>\n        </server>\n        <server>\n            <id>2</id>\n            <hostname>host1</hostname>\n            <port>9445</port>\n        </server>\n        <server>\n            <id>3</id>\n            <hostname>host2</hostname>\n            <port>9445</port>\n        </server>\n    </raft_configuration>\n--\x3e\n</keeper_server>\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"zookeeper")),(0,a.kt)("p",null,"\u914d\u7f6e zookeeper \u4ee5\u542f\u7528 leader election\uff0c\u4e5f\u53ef\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u6765\u83b7\u53d6 zookeeper \u7684\u8282\u70b9\u4fe1\u606f\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u914d\u7f6e\u4e00\u4e2a\u7a7a\u7684 zookeeper \u6807\u7b7e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<zookeeper>\n    \x3c!--\n    <node index="1">\n        <host>host0</host>\n        <port>9181</port>\n    </node>\n    --\x3e\n</zookeeper>\n\n')),(0,a.kt)("h3",{id:"service_discovery"},"service_discovery"),(0,a.kt)("p",null,"\u670d\u52a1\u53d1\u73b0\u76f8\u5173\u914d\u7f6e\uff0c\u9ad8\u53ef\u7528 TSO \u8fdb\u7a0b\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u83b7\u53d6\u5176\u4ed6 TSO server \u5730\u5740\u53ca\u7aef\u53e3\u8fdb\u884c\u901a\u4fe1"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," : \u4e0e\u5176\u4ed6\u6a21\u5757 service discovery \u4e00\u6837\uff0c\u652f\u6301 dns, consul, local \u7b49\u6a21\u5f0f")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<service_discovery>\n    <mode>dns</mode>\n    <tso>\n        <psm>data.cnch.tso</psm>\n        <service>cnch-tso</service>\n        <headless_service>cnch-tso-headless</headless_service>\n    </tso>\n</service_discovery>\n\n")),(0,a.kt)("h2",{id:"daemon-manager-\u914d\u7f6e\u53c2\u6570"},"Daemon Manager \u914d\u7f6e\u53c2\u6570"),(0,a.kt)("h3",{id:"daemon_manager"},"daemon_manager"),(0,a.kt)("p",null,"\u914d\u7f6e daemon manager \u8fdb\u7a0b\u7aef\u53e3\u4ee5\u53ca\u8c03\u5ea6\u540e\u53f0\u4efb\u52a1\u7684\u4fe1\u606f"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"port: DM \u8fdb\u7a0b TCP \u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"http: DM \u8fdb\u7a0b http \u7aef\u53e3\u7b49\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"workload_thread_interval_ms: \u540e\u53f0\u4efb\u52a1\u8c03\u5ea6\u7684\u65f6\u95f4\u95f4\u9694"),(0,a.kt)("li",{parentName:"ul"},"daemon_jobs: DM \u8d1f\u8d23\u8c03\u5ea6\u7684\u540e\u53f0\u4efb\u52a1\u7c7b\u578b\u53ca\u914d\u7f6e\u3002\u53ef\u8c03\u5ea6\u7684\u4efb\u52a1\u7c7b\u578b\u5305\u62ec\uff1aPART_GC, PART_MERGE, CONSUMER, GLOBAL_GC, TXN_GC \u7b49")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<daemon_manager>\n    <port>8090</port>\n    <http>\n        <port>8091</port>\n        <receive_timeout>1800</receive_timeout>\n        <send_timeout>1800</send_timeout>\n    </http>\n    <workload_thread_interval_ms>1000</workload_thread_interval_ms>\n    <daemon_jobs>\n        <job>\n            <name>PART_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>PART_MERGE</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>CONSUMER</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>GLOBAL_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>50000</interval>\n        </job>\n        <job>\n            <name>TXN_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>600000</interval>\n        </job>\n        <job>\n            <name>DEDUP_WORKER</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>PART_CLUSTERING</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n    </daemon_jobs>\n</daemon_manager>\n\n")),(0,a.kt)("h3",{id:"cnch_data_retention_time_in_sec"},"cnch_data_retention_time_in_sec"),(0,a.kt)("p",null,"\u88ab\u5220\u9664\u7684\u8868\u53ca\u6570\u636e\u5e93\u5728\u88ab\u5f7b\u5e95\u6e05\u7406\u4e4b\u524d\u7684\u4fdd\u7559\u65f6\u95f4\uff0c\u9ed8\u8ba4 3 \u5929\u3002\u671f\u95f4\u5185\uff0c\u7528\u6237\u53ef\u4ee5\u6062\u590d\u5df2\u7ecf\u5220\u9664\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_data_retention_time_in_sec>86400</cnch_data_retention_time_in_sec>\n\n")),(0,a.kt)("h2",{id:"resource-manager-\u914d\u7f6e\u53c2\u6570"},"Resource Manager \u914d\u7f6e\u53c2\u6570"),(0,a.kt)("h3",{id:"resource_manager"},"resource_manager"),(0,a.kt)("p",null,"\u914d\u7f6e resource manager \u8fdb\u7a0b\u7aef\u53e3\u3001\u521d\u59cb VW \u914d\u7f6e\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"Keys\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"port: "),"\u670d\u52a1\u542f\u52a8\u7684\u7aef\u53e3\u53f7"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vws: "),"\u521d\u59cb\u914d\u7f6e\u7684 VW \u76f8\u5173\u4fe1\u606f")),(0,a.kt)("p",null,"Example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<resource_manager>\n    <port>18989</port>\n    <vws>\n        <vw>\n            <name>vw_default</name>\n            <type>Default</type>\n            <num_workers>1</num_workers>\n            <worker_groups>\n                <worker_group>\n                    <name>wg_default</name>\n                    <type>Physical</type>\n                </worker_group>\n            </worker_groups>\n        </vw>\n    </vws>\n</resource_manager>\n\n")),(0,a.kt)("h3",{id:"catalog"},"catalog"),(0,a.kt)("p",null,"Catalog \u76f8\u5173\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name_space")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<name_space>default</name_space>\n\n")),(0,a.kt)("h3",{id:"catalog_service"},"catalog_service"),(0,a.kt)("p",null,"catalog_service \u76f8\u5173\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - catalog \u670d\u52a1\u7684\u7c7b\u578b")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\x3c!-- For foundationDB metastore--\x3e\n<catalog_service>\n    \x3c!--TODO: move name_space into catalog_service tag --\x3e\n    \x3c!--Metastore storage type, support `bytekv` and `fdb`--\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/cluster_config</cluster_file>\n    </fdb>\n</catalog_service>\n\n")))}d.isMDXComponent=!0}}]);