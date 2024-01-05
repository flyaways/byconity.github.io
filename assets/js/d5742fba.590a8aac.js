"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7931],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(4778),r=(n(9496),n(9613));const i={title:"Cluster Configuration",tags:["Docs"]},o="Cluster Configuration",l={unversionedId:"basic-guide/cluster-configuration",id:"basic-guide/cluster-configuration",title:"Cluster Configuration",description:"Document Type: Descriptive",source:"@site/docs/basic-guide/cluster-configuration.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/cluster-configuration",permalink:"/docs/next/basic-guide/cluster-configuration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/basic-guide/cluster-configuration.mdx",tags:[{label:"Docs",permalink:"/docs/next/tags/docs"}],version:"current",frontMatter:{title:"Cluster Configuration",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Client Connection",permalink:"/docs/next/basic-guide/client-connection"},next:{title:"Export Data",permalink:"/docs/next/basic-guide/data-export"}},s={},c=[{value:"Server Configuration Parameters",id:"server-configuration-parameters",level:2},{value:"cnch_type",id:"cnch_type",level:3},{value:"tcp_port",id:"tcp_port",level:3},{value:"http_port",id:"http_port",level:3},{value:"rpc_port",id:"rpc_port",level:3},{value:"exchange_port",id:"exchange_port",level:3},{value:"exchange_status_port",id:"exchange_status_port",level:3},{value:"path",id:"path",level:3},{value:"tmp_path",id:"tmp_path",level:3},{value:"users_config",id:"users_config",level:3},{value:"Service discovery",id:"service-discovery",level:3},{value:"Catalog service",id:"catalog-service",level:3},{value:"HDFS configuration parameters",id:"hdfs-configuration-parameters",level:2},{value:"hdfs_user",id:"hdfs_user",level:3},{value:"cfs_addr",id:"cfs_addr",level:3},{value:"hdfs_addr",id:"hdfs_addr",level:3},{value:"hdfs_ha_nameservice",id:"hdfs_ha_nameservice",level:3},{value:"storage_configuration",id:"storage_configuration",level:3},{value:"hdfs3_config",id:"hdfs3_config",level:3},{value:"disk_cache_strategies",id:"disk_cache_strategies",level:3},{value:"cnch_kafka_log",id:"cnch_kafka_log",level:3},{value:"brpc",id:"brpc",level:3},{value:"cnch_transaction_cleaner_max_threads",id:"cnch_transaction_cleaner_max_threads",level:3},{value:"cnch_transaction_cleaner_queue_size",id:"cnch_transaction_cleaner_queue_size",level:3},{value:"dance_merge_selector",id:"dance_merge_selector",level:3},{value:"exchange_timeout_ms",id:"exchange_timeout_ms",level:3},{value:"TSO configuration parameters",id:"tso-configuration-parameters",level:2},{value:"tso_service",id:"tso_service",level:3},{value:"service_discovery",id:"service_discovery",level:3},{value:"Daemon Manager configuration parameters",id:"daemon-manager-configuration-parameters",level:2},{value:"daemon_manager",id:"daemon_manager",level:3},{value:"cnch_data_retention_time_in_sec",id:"cnch_data_retention_time_in_sec",level:3},{value:"Resource Manager configuration parameters",id:"resource-manager-configuration-parameters",level:2},{value:"resource_manager",id:"resource_manager",level:3},{value:"catalog",id:"catalog",level:3},{value:"catalog_service",id:"catalog_service",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,r.kt)("p",null,"Document Type: Descriptive"),(0,r.kt)("p",null,"Summary:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the process of installation and deployment, what basic parameters need to be understood"),(0,r.kt)("li",{parentName:"ol"},"What are the advanced parameters of each component and what are their functions?")),(0,r.kt)("h2",{id:"server-configuration-parameters"},"Server Configuration Parameters"),(0,r.kt)("p",null,"ByConity (formerly codenamed CNCH) server-side configuration is stored in cnch-server.xml, specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"--config-file")," when the process starts, and the server will automatically load the configuration from cnch-server.xml."),(0,r.kt)("h3",{id:"cnch_type"},"cnch_type"),(0,r.kt)("p",null,"Configure the ByConity process type, which can be configured as server or worker. Among them, the server is mainly responsible for receiving query requests and dispatching queries to workers; the worker nodes are mainly responsible for executing query tasks from the server. Examples are as follows:"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<cnch_type>server</cnch_type>\n\n")),(0,r.kt)("h3",{id:"tcp_port"},"tcp_port"),(0,r.kt)("p",null,"The TCP port used by server and client to connect"),(0,r.kt)("p",null,"Example\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<tcp_port>9000</tcp_port>\n\n")),(0,r.kt)("h3",{id:"http_port"},"http_port"),(0,r.kt)("p",null,"The HTTP port used by server and client to connect"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<https_port>9999</https_port>\n\n")),(0,r.kt)("h3",{id:"rpc_port"},"rpc_port"),(0,r.kt)("p",null,"The RPC port for server to interact with other components"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<rpc_port>8124</rpc_port>\n\n")),(0,r.kt)("h3",{id:"exchange_port"},"exchange_port"),(0,r.kt)("p",null,"Data transfer port for complex queries (to be considered for merging with rpc_port in the future)"),(0,r.kt)("h3",{id:"exchange_status_port"},"exchange_status_port"),(0,r.kt)("p",null,"Control command port for complex queries (to be considered for merging with rpc_port in the future)"),(0,r.kt)("h3",{id:"path"},"path"),(0,r.kt)("p",null,"Local data path directory"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<path>/var/lib/clickhouse/</path>\n\n")),(0,r.kt)("h3",{id:"tmp_path"},"tmp_path"),(0,r.kt)("p",null,"Local temporary directory path, used to store temporary data during the query process"),(0,r.kt)("p",null,"Example\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<tmp_path>/var/lib/clickhouse/tmp/</tmp_path>\n\n")),(0,r.kt)("h3",{id:"users_config"},"users_config"),(0,r.kt)("p",null,"The path to the user-related configuration file."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<users_config>/path/to/userconf/users.xml</users_config>\n\n")),(0,r.kt)("h3",{id:"service-discovery"},"Service discovery"),(0,r.kt)("p",null,"Configure other components (including other servers) that communicate with the server process. Other components that interact with the server are server, tso, daemon manager, virtual warehouse and resource manager"),(0,r.kt)("p",null,"keys",(0,r.kt)("strong",{parentName:"p"},":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mode")," : service discovery mode, optional configuration parameters are local , dns, consul"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cluster")," : cluster name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disable_cache")," : If configured as false, caching will be enabled to reduce the number of calls to service discovery"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cache_timeout")," : cache expiration time")),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<service_discovery>\n    <mode>dns</mode>\n    <cluster>default</cluster>\n        <disable_cache>false</disable_cache>\n        <cache_timeout>5</cache_timeout>\n    <server>\n        <psm>data.cnch.server</psm>\n        <service>cnch-server-pp</service>\n        <headless_service>cnch-server-pp-headless</headless_service>\n    </server>\n    <tso>\n        <psm>data.cnch.tso</psm>\n        <service>cnch-tso</service>\n        <headless_service>cnch-tso-headless</headless_service>\n    </tso>\n    <vw>\n        <psm>data.cnch.vw</psm>\n    </vw>\n    <daemon_manager>\n        <psm>data.cnch.daemon_manager</psm>\n        <service>cnch-daemon-manager</service>\n        <headless_service>cnch-daemon-manager-headless</headless_service>\n    </daemon_manager>\n    <resource_manager>\n        <psm>data.cnch.resource_manager</psm>\n        <service>cnch-resource-manager</service>\n        <headless_service>cnch-resource-manager-headless</headless_service>\n    </resource_manager>\n</service_discovery>\n\n")),(0,r.kt)("h3",{id:"catalog-service"},"Catalog service"),(0,r.kt)("p",null,"Catalog service related configuration"),(0,r.kt)("p",null,"Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," : Metadata storage engine type, support bytekv, fdb")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x3c!-- For foundationDB metastore--\x3e\n<catalog_service>\n    \x3c!--TODO: move name_space into catalog_service tag --\x3e\n    \x3c!--Metastore storage type, support `bytekv` and `fdb`--\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/cluster_config</cluster_file>\n    </fdb>\n</catalog_service>\n\n")),(0,r.kt)("h3",{id:""}),(0,r.kt)("h2",{id:"hdfs-configuration-parameters"},"HDFS configuration parameters"),(0,r.kt)("p",null,"When starting the service, the configuration items will be detected in the order of cfs_addr>hdfs_addr>hdfs_ha_nameservice>hdfs_nnproxy. Once a configuration item configuration is hit, the corresponding configuration item will be used to access HDFS"),(0,r.kt)("h3",{id:"hdfs_user"},"hdfs_user"),(0,r.kt)("p",null,"The name of the user used by default when accessing HDFS, the default is clickhouse"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<hdfs_user>clickhouse</hdfs_user>\n\n")),(0,r.kt)("h3",{id:"cfs_addr"},"cfs_addr"),(0,r.kt)("p",null,"The address of the cfs service, the format is cfs://service_url"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<cfs_addr>cfs://service_url</cfs_addr>\n\n")),(0,r.kt)("h3",{id:"hdfs_addr"},"hdfs_addr"),(0,r.kt)("p",null,"The address of hdfs service, the format is hdfs://nnip:nnport/path"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<hdfs_addr>hdfs://nnip:nnport/path</hdfs_addr>\n\n")),(0,r.kt)("h3",{id:"hdfs_ha_nameservice"},"hdfs_ha_nameservice"),(0,r.kt)("p",null,"If the user's HDFS cluster supports High Avaliability feature,  the namespace needs to be configured in advance in the configuration file, and the addresses of the namespace need to be configured in ",(0,r.kt)("a",{parentName:"p",href:"#markdown-header-hdfs3_config"},"libhdfs3\nconfig"),".\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<hdfs_ha_nameservice>hdfs_service</hdfs_ha_nameservice>\n\n")),(0,r.kt)("p",null,"and in libhdfs3 config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<property>\n<name>dfs.nameservices</name>\n<value>my-hadoop</value>\n</property>\n<property>\n<name>dfs.ha.namenodes.my-hadoop</name>\n<value>machine1, machine2</value>\n</property>\n<property>\n<name>dfs.namenode.rpc-address.my-hadoop.machine1</name>\n<value>master:65212</value>\n</property>\n<property>\n<name>dfs.namenode.rpc-address.my-hadoop.machine2</name>\n<value>standby:65212</value>\n</property>\n")),(0,r.kt)("h3",{id:"storage_configuration"},"storage_configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The next configuration level corresponds to the storage_configuration configuration level in the configuration file")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"storage_configuration",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cnch_default_policy, specifies the StoragePolicy used by ByConity to store actual data, an optional configuration item, the default is cnch_default_hdfs, and the default storage policy for cnch should only include one HDFSDisk or S3Disk",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When creating a table, for a ByConity table, if the storage_policy MergeTreeSettings is not specified, it will be changed to ${cnch_default_policy} by default"))),(0,r.kt)("li",{parentName:"ul"},"cnch_auxility_policy, specifies the StoragePolicy used by ByConity to store temporary data on the local disk, optional configuration item, the default is default"),(0,r.kt)("li",{parentName:"ul"},"disks",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"${DISK_NAME}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"type, the type of this disk, optional configuration item, the default is local",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ByConity supports the selection of four disks, hdfs/bytehdfs/s3/bytes3, as remote storage. Currently, only a single Disk is supported in the StoragePolicy"),(0,r.kt)("li",{parentName:"ul"},"In order to be compatible with the internal configuration, hdfs/bytehdfs are resolved to the internal bytehdfs Disk, s3/bytes3 are resolved to internal bytes3 disk, and the type of the community version HDFSDisk is renamed to communityhdfs, community version S3Disk is renamed to communitys3"),(0,r.kt)("li",{parentName:"ul"},"The configuration items of HDFSDisk/S3Disk specified by the StoragePolicy used by ByConity should be the same in all Server/Worker configuration files"))),(0,r.kt)("li",{parentName:"ul"},"path",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Which path or data key prefix of this Disk will the data be stored in, required configuration items"))),(0,r.kt)("li",{parentName:"ul"},"hdfs_params",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A new optional configuration item for disks of type bytehdfs, including the following parameters",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hdfs_user, the user used to connect to hdfs, an optional configuration item, the default is clickhouse"),(0,r.kt)("li",{parentName:"ul"},"cfs_addr, the address of cfs, an optional configuration item, this configuration item needs to be configured only when using cfs"),(0,r.kt)("li",{parentName:"ul"},"hdfs_addr, the namenode address of hdfs, optional configuration items, such as hdfs://nnip:nnport/path"),(0,r.kt)("li",{parentName:"ul"},"hdfs_ha_nameservice, an optional configuration item. If you need to use hdfs HA, you can use this configuration item to specify the corresponding service. The corresponding hdfs configuration needs to be configured through the hdfs3_config configuration file"),(0,r.kt)("li",{parentName:"ul"},"hdfs_nnproxy, nnproxy address of hdfs, optional configuration item, default is nnproxy"),(0,r.kt)("li",{parentName:"ul"},"If DiskByteHDFS does not configure the hdfs_params configuration item, it will find the global configuration item in the configuration file, such as the value of the hdfs_user configuration item in the configuration file"))))),(0,r.kt)("li",{parentName:"ul"},"region",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For bytes3 disk, specified the region of s3 service"))),(0,r.kt)("li",{parentName:"ul"},"endpoint",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For bytes3 disk, specified the endpoint of s3 service"))),(0,r.kt)("li",{parentName:"ul"},"bucket",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For bytes3 disk, specified the bucket of s3 service"))),(0,r.kt)("li",{parentName:"ul"},"akid",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For bytes3 disk, specified the access key id of s3 service, if not configured, will check environment variable AWS_ACCESS_KEY_ID"))),(0,r.kt)("li",{parentName:"ul"},"aksecret",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For bytes3 disk, specified the access key secret of s3 service, if not configured, will check environment variable AWS_SECRET_ACCESS_KEY"))))))),(0,r.kt)("li",{parentName:"ul"},"policies",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"${STORAGE_POLICY_NAME}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"volumes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"${VOLUME_NAME}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"default, the default disk in this Volume, a required configuration item, the default disk will be used to store some data that does not support multi-disk storage, such as metastore, etc."),(0,r.kt)("li",{parentName:"ul"},"disk, the name of all the disks contained in this Volume, the required configuration items, the corresponding Disk needs to be configured in storage_configuration.disks")))))))))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"configuration demo (with both hdfs and s3 as storage, but hdfs as default)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<storage_configuration>\n    <disks>\n        <default></default>\n        <server_local_disk1>\n            <path>/home/ch_test_service/service_test_env/server_data1/</path>\n        </server_local_disk1>\n        <server_local_disk2>\n            <path>/home/ch_test_service/service_test_env/server_data2/</path>\n        </server_local_disk2>\n        <server_hdfs_disk0>\n            <path>/user/cnch/</path>\n            <type>bytehdfs</type>\n        </server_hdfs_disk0>\n        <server_s3_disk0>\n            <type>bytes3</type>\n            <region>cn-beijing</region>\n            <endpoint>https://tos-s3-cn-beijing.volces.com</endpoint>\n            <bucket>byconity</bucket>\n            <path>test-service/</path>\n            <ak_id>some_access_key_id</ak_id>\n            <ak_secret>some_access_key_secret</ak_secret>\n        </server_s3_disk0>\n    </disks>\n    <policies>\n        <default>\n            <volumes>\n                <local>\n                    <default>default</default>\n                    <disk>default</disk>\n                    <disk>server_local_disk1</disk>\n                    <disk>server_local_disk2</disk>\n                </local>\n            </volumes>\n        </default>\n        <cnch_default_hdfs>\n            <volumes>\n                <hdfs>\n                    <default>server_hdfs_disk0</default>\n                    <disk>server_hdfs_disk0</disk>\n                </hdfs>\n            </volumes>\n        </cnch_default_hdfs>\n        <cnch_default_s3>\n            <volumes>\n                <s3>\n                    <default>server_s3_disk0</default>\n                    <disk>server_s3_disk0</disk>\n                </s3>\n            </volumes>\n        </cnch_default_s3>\n    </policies>\n</storage_configuration>\n\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In order to be compatible with the internal configuration items of the old version, if the user only specifies a StoragePolicy of default, which also includes two volumes of hdfs and local, then this configuration item will be parsed into two StoragePolicy, one is default, but only contains The local volume, the other is ${cnch_default_policy}, which only includes the hdfs volume"),(0,r.kt)("li",{parentName:"ol"},"By specified multiple storage policy in storage_configuration, you can specified how the data of table is stored. For example, you can set cnch_default_policy to ",(0,r.kt)("inlineCode",{parentName:"li"},"cnch_default_hdfs")," to let data store in hdfs by default, and specified some table stored in s3 by specify settings in create table query",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    create table test_store (key Int) engine = CnchMergeTree order by key settings storage_policy = 'cnch_default_s3';\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"One thing to note is that s3 storage is still a preview feature, the support for attach&detach is still WIP, data store layout and format may still have some changes before it's fully available")))),(0,r.kt)("h3",{id:"hdfs3_config"},"hdfs3_config"),(0,r.kt)("p",null,"libhdfs3 configuration doc path"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<hdfs3_config>/path/to/conf/hdfs3.xml</hdfs3_config>\n\n")),(0,r.kt)("h3",{id:"disk_cache_strategies"},"disk_cache_strategies"),(0,r.kt)("p",null,"Configure the disk cache strategy, including two different strategies: simple and lru:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lru"),", LRUCache elimination policy related configuration"),(0,r.kt)("li",{parentName:"ul"},"lru_max_size, the maximum size of DiskCache, the default is 2T"),(0,r.kt)("li",{parentName:"ul"},"random_drop_threshold, the cache queue has a length limit. When the queue length reaches a certain percentage, cache requests will be discarded with a certain probability to avoid large table scans causing the cache queue to be full. The default is 50%"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"simple"),", Cache policy related configuration"),(0,r.kt)("li",{parentName:"ul"},"segment_size, the granularity of DiskCache, the default is 8192, that is, up to 8192 GranuleCaches of a ColumnStream form a DiskCacheSegment"),(0,r.kt)("li",{parentName:"ul"},"hits_to_cache, the threshold of data start Cache, the default is 2")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<disk_cache_strategies>\n    <simple>\n        <lru_max_size>1099511627776</lru_max_size>\n    </simple>\n</disk_cache_strategies>\n\n")),(0,r.kt)("h3",{id:"cnch_kafka_log"},"cnch_kafka_log"),(0,r.kt)("p",null,"After configuration, ByConity will open kafka_log, and the consumption log can be viewed through the system table"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<cnch_kafka_log>\n    <database>cnch_system</database>\n    <table>cnch_kafka_log</table>\n    <flush_max_row_count>10000</flush_max_row_count>\n    <flush_interval_milliseconds>7500</flush_interval_milliseconds>\n</cnch_kafka_log>\n\n")),(0,r.kt)("h3",{id:"brpc"},"brpc"),(0,r.kt)("h3",{id:"cnch_transaction_cleaner_max_threads"},"cnch_transaction_cleaner_max_threads"),(0,r.kt)("p",null,"The thread pool size of ByConity background cleaning transaction record, the default is 128"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<cnch_transaction_cleaner_max_threads>128</cnch_transaction_cleaner_max_threads>\n\n")),(0,r.kt)("h3",{id:"cnch_transaction_cleaner_queue_size"},"cnch_transaction_cleaner_queue_size"),(0,r.kt)("p",null,"The thread pool queue size of ByConity background cleaning transaction record, the default is 10000"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<cnch_transaction_cleaner_queue_size>10000</cnch_transaction_cleaner_queue_size>\n\n")),(0,r.kt)("h3",{id:"dance_merge_selector"},"dance_merge_selector"),(0,r.kt)("p",null,"Configure self-developed merge selection strategy parameters"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dance_merge_selector>\n    <max_total_rows_to_merge>10000000</max_total_rows_to_merge>\n</dance_merge_selector>\n\n")),(0,r.kt)("h3",{id:"exchange_timeout_ms"},"exchange_timeout_ms"),(0,r.kt)("p",null,"Complex query data transfer rpc timeout, default 100000"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<exchange_timeout_ms>100000</exchange_timeout_ms>\n\n")),(0,r.kt)("h2",{id:"tso-configuration-parameters"},"TSO configuration parameters"),(0,r.kt)("h3",{id:"tso_service"},"tso_service"),(0,r.kt)("p",null,"Configure tso service, including service port, metadata storage, etc."),(0,r.kt)("p",null,"Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"port"),": TSO service TCP port"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),": TSO metadata storage engine")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<tso_service>\n    <port>8080</port>\n    \x3c!-- Support for CNCH-CE Merge. Metastore store type, support `bytekv` and `fdb` --\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/conf/fdb.cluster</cluster_file>>\n    </fdb>\n </tso_service>\n\n")),(0,r.kt)("h3",{id:"service_discovery"},"service_discovery"),(0,r.kt)("p",null,"Service discovery related configuration, the highly available TSO process obtains other TSO server addresses and ports for communication through service discovery"),(0,r.kt)("p",null,"Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mode")," : Like other modules service discovery, it supports dns, consul, local and other modes")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<service_discovery>\n    <mode>dns</mode>\n    <tso>\n        <psm>data.cnch.tso</psm>\n        <service>cnch-tso</service>\n        <headless_service>cnch-tso-headless</headless_service>\n    </tso>\n</service_discovery>\n\n")),(0,r.kt)("h2",{id:"daemon-manager-configuration-parameters"},"Daemon Manager configuration parameters"),(0,r.kt)("h3",{id:"daemon_manager"},"daemon_manager"),(0,r.kt)("p",null,"Configure daemon manager process ports and information about scheduling background tasks"),(0,r.kt)("p",null,"Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pport: DM process TCP port"),(0,r.kt)("li",{parentName:"ul"},"http: DM process http port and other configurations"),(0,r.kt)("li",{parentName:"ul"},"workload_thread_interval_ms: The time interval for background task scheduling"),(0,r.kt)("li",{parentName:"ul"},"daemon_jobs: The type and configuration of background tasks that DM is responsible for scheduling. Schedulable task types include: PART_GC, PART_MERGE, CONSUMER, GLOBAL_GC, TXN_GC, etc.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<daemon_manager>\n    <port>8090</port>\n    <http>\n        <port>8091</port>\n        <receive_timeout>1800</receive_timeout>\n        <send_timeout>1800</send_timeout>\n    </http>\n    <workload_thread_interval_ms>1000</workload_thread_interval_ms>\n    <daemon_jobs>\n        <job>\n            <name>PART_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>PART_MERGE</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>CONSUMER</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>GLOBAL_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>50000</interval>\n        </job>\n        <job>\n            <name>TXN_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>600000</interval>\n        </job>\n        <job>\n            <name>DEDUP_WORKER</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>PART_CLUSTERING</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n    </daemon_jobs>\n</daemon_manager>\n\n")),(0,r.kt)("h3",{id:"cnch_data_retention_time_in_sec"},"cnch_data_retention_time_in_sec"),(0,r.kt)("p",null,"The retention time of deleted tables and databases before being completely cleaned up, defaults to 3 days. During this period, users can recover deleted data."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<cnch_data_retention_time_in_sec>86400</cnch_data_retention_time_in_sec>\n\n")),(0,r.kt)("h2",{id:"resource-manager-configuration-parameters"},"Resource Manager configuration parameters"),(0,r.kt)("h3",{id:"resource_manager"},"resource_manager"),(0,r.kt)("p",null,"Configure resource manager process port, initial VW configuration and other information."),(0,r.kt)("p",null,"Keys\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"port: "),"The port number where the service starts"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vws: ")," Initially configured VW related information")),(0,r.kt)("p",null,"Example\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<resource_manager>\n    <port>18989</port>\n    <vws>\n        <vw>\n            <name>vw_default</name>\n            <type>Default</type>\n            <num_workers>1</num_workers>\n            <worker_groups>\n                <worker_group>\n                    <name>wg_default</name>\n                    <type>Physical</type>\n                </worker_group>\n            </worker_groups>\n        </vw>\n    </vws>\n</resource_manager>\n\n")),(0,r.kt)("h3",{id:"catalog"},"catalog"),(0,r.kt)("p",null,"Catalog related configuration."),(0,r.kt)("p",null,"Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name_space")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<name_space>default</name_space>\n\n")),(0,r.kt)("h3",{id:"catalog_service"},"catalog_service"),(0,r.kt)("p",null,"catalog_service related configuration."),(0,r.kt)("p",null,"Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - catalog service type")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x3c!-- For foundationDB metastore--\x3e\n<catalog_service>\n    \x3c!--TODO: move name_space into catalog_service tag --\x3e\n    \x3c!--Metastore storage type, support `bytekv` and `fdb`--\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/cluster_config</cluster_file>\n    </fdb>\n</catalog_service>\n\n")))}p.isMDXComponent=!0}}]);