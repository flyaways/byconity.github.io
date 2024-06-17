"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[5971],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},15137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(64778),n=(r(59496),r(49613));const o={title:"Virtual Warehouse Configuration",sidebar_position:2,tags:["Docs"]},i="Virtual Warehouse Configuration",l={unversionedId:"admin-guides/virtual-warehouse-configuration",id:"version-0.3.0/admin-guides/virtual-warehouse-configuration",title:"Virtual Warehouse Configuration",description:"Document Type: Tutorial",source:"@site/versioned_docs/version-0.3.0/admin-guides/virtual-warehouse-configuration.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/virtual-warehouse-configuration",permalink:"/docs/0.3.0/admin-guides/virtual-warehouse-configuration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.3.0/admin-guides/virtual-warehouse-configuration.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:2,frontMatter:{title:"Virtual Warehouse Configuration",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Resource Manager",permalink:"/docs/0.3.0/admin-guides/resource-manager"},next:{title:"Scaling",permalink:"/docs/0.3.0/admin-guides/scale-up-down"}},u={},s=[{value:"system.virtual_warehouses",id:"systemvirtual_warehouses",level:2},{value:"system.worker_groups",id:"systemworker_groups",level:2},{value:"system.workers",id:"systemworkers",level:2},{value:"local mode",id:"local-mode",level:2},{value:"cluster mode",id:"cluster-mode",level:2},{value:"Create Virtual Warehouse",id:"create-virtual-warehouse",level:3},{value:"Creat Worker Group",id:"creat-worker-group",level:3},{value:"Creat K8s Worker Pods",id:"creat-k8s-worker-pods",level:3}],p={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"virtual-warehouse-configuration"},"Virtual Warehouse Configuration"),(0,n.kt)("p",null,"Document Type: Tutorial"),(0,n.kt)("p",null,"Document format: tutorial purpose, pre-preparation, step-by-step explanation of principles & examples, and related document recommendations;"),(0,n.kt)("h1",{id:"calculate-the-relationship-between-groups-workers-and-servers"},"Calculate the relationship between groups, Workers and Servers"),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"./resource-manager"},"Resource Manager")," chapter, we introduced ",(0,n.kt)("strong",{parentName:"p"},"Virtual Warehouse")," (referred to as VW), ",(0,n.kt)("strong",{parentName:"p"},"Worker Group")," (referred to as WG) and Worker. In a ByConity cluster, computing resources are divided into multiple Virtual Warehouse, each Virtual Warehouse contains multiple Worker Groups with the same configuration, and each Worker Group contains multiple workers. Resources can be freely expanded and contracted at different levels to achieve elastic computing. Taking expansion as an example, we can have different expansion methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vertically expand the CPU and MEM resources of the Worker to improve the processing performance of a single node."),(0,n.kt)("li",{parentName:"ul"},"Increase the number of workers in a Worker Group to improve the performance of the Worker Group when processing queries."),(0,n.kt)("li",{parentName:"ul"},"Increase the number of Worker Group in the Virtual Warehouse to improve the concurrency capability of the Virtual Warehouse to process queries."),(0,n.kt)("li",{parentName:"ul"},"Add new Virtual Warehouse resources for new businesses or tenants to achieve resource isolation between tenants.")),(0,n.kt)("p",null,"The service node, which we also call server, mainly undertakes the functions of sql receiving, scheduling, and result return. Computing nodes, also called workers, are mainly responsible for computing tasks, which can be data writing, user query, or some background tasks. User queries and background tasks can share the same worker to improve utilization, or use independent workers to ensure strict resource isolation. Users can build multiple virtual_warehouses according to the characteristics, priorities, and business categories of computing tasks, and set different resource elasticity policies to improve computing efficiency and reduce costs."),(0,n.kt)("h1",{id:"view-virtual-warehouse-information"},"View Virtual Warehouse information"),(0,n.kt)("p",null,"We provide a set of system tables to query the metadata related to the Virtual Warehouse. These system tables only provide observable capabilities, and the Virtual Warehouse information cannot be changed by modifying the table content. If you need to modify the configuration of the Virtual Warehouse, please refer to ","[Modify the configuration of the Virtual Warehouse]"," (todo: link)."),(0,n.kt)("h2",{id:"systemvirtual_warehouses"},"system.virtual_warehouses"),(0,n.kt)("p",null,"The system table shows the meta information, main fields and descriptions of all virtual warehouse (VW):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descriptions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the virtual warehouse, unique identification.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The type of the virtual warehouse, Default/Write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"num_workers")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of workers configured for each worker group by this virtual warehouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"active_worker_groups"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of running worker groups in this virtual warehouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"active_workers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of healthy workers in this virtual warehouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"min_worker_groups"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The minimum number of worker groups this virtual warehouse is allowed to run")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_worker_groups"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of worker groups that this virtual warehouse is allowed to run")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_concurrent_queries"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of concurrent queries allowed by the virtual warehouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_queued_queries"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of queued queries allowed by this virtual warehouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_queued_waiting_ms"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum waiting time for queued queries allowed by this virtual warehouse (milliseconds)")))),(0,n.kt)("h2",{id:"systemworker_groups"},"system.worker_groups"),(0,n.kt)("p",null,"This system table displays the meta information, main fields and descriptions of all worker groups (WG):\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descriptions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vw_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the virtual warehouse to which this worker group belongs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The id of the worker group, unique identification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"num_workers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of workers configured for each worker group by this virtual warehouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"linked_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If the worker group is a Shared type, linked_id points to the Physical worker group it refers to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"active_workers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of active workers in this worker group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"min_cpu_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The smallest worker cpu_usage in the worker group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_cpu_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum worker cpu_usage in the worker group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"avg_cpu_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average cpu_usage of all workers in this worker group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"min_mem_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The smallest worker memory_usage in the worker group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_mem_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The largest worker memory_usage in the worker group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"avg_mem_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average memory_usage of all workers in the worker group")))),(0,n.kt)("h2",{id:"systemworkers"},"system.workers"),(0,n.kt)("p",null,"The system table records all running worker information, main fields and descriptions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descriptions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"worker_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The id of the worker, unique identification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vw_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The virtual warehouse the worker belongs to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"worker_group_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The worker group the worker belongs to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"host"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The host (ip) of the worker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tcp_port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The tcp_port of the worker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current cpu_usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current memory_usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory_available"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current memory amount\uff08byte\uff09 available")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last_update_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The latest heartbeat update time")))),(0,n.kt)("p",null,"Create and use Virtual Warehouse"),(0,n.kt)("p",null,"We provide two different configuration methods, local mode and cluster mode, to create Virtual Warehouse."),(0,n.kt)("p",null,"In local mode, you can directly fill in the Virtual Warehouse and worker group related information in the configuration file, which is convenient for debugging or demo operation."),(0,n.kt)("p",null,"Cluster mode is the recommended way to use it in a production environment. At this time, we need to create a Virtual Warehouse through specific SQL, and create actual Virtual Warehouse resources through corresponding K8s operations."),(0,n.kt)("h2",{id:"local-mode"},"local mode"),(0,n.kt)("p",null,"When starting the resource manager component, we can fill in the Virtual Warehouse related information in the configuration file (refer to ",(0,n.kt)("a",{parentName:"p",href:"./cluster-configuration"},"cluster-configuration")," resource manager section). The resource manager will directly create corresponding Virtual Warehouse (and worker group) based on these information. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<vws>\n  <vw>\n    <name>vw_default</name>\n    <type>Default</type>\n    <num_workers>1</num_workers>\n    <worker_groups>\n      <worker_group>\n        <name>wg_default</name>\n        <type>Physical</type>\n      </worker_group>\n    </worker_groups>\n  </vw>\n</vws>\n\n")),(0,n.kt)("p",null,"We have configured a Virtual Warehouse named vw_default, the type is Default, and it is expected that there will be 1 worker in this vw (num_workers is only used as an instruction to create a vw, the actual number of workers can be ",(0,n.kt)("u",null,"query related system tables"),(0,n.kt)("u",null,"(todo: link ","[view Virtual Warehouse information]"),(0,n.kt)("u",null,")")," get). At the same time, we configured 1 replica for this Virtual Warehouse, named wg_default."),(0,n.kt)("p",null,"When starting the server component, we can directly configure the worker information corresponding to each vw in the service discovery part of the configuration file (refer to ",(0,n.kt)("a",{parentName:"p",href:"./cluster-configuration"},"cluster configuration")," server part)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<service_discovery>\n  <mode>local</mode>\n  <vw>\n    <psm>data.cnch.vw_default</psm>\n    <node>\n      <vw_name>vw_default</vw_name>\n      <host>10.1.2.3</host>\n      <hostname>vw_default0</hostname>\n      <ports>\n        \x3c!-- TCP/Primary --\x3e\n        <port><name>PORT0</name><value>31067</value></port>\n        \x3c!-- RPC --\x3e\n        <port><name>PORT1</name><value>32099</value></port>\n        \x3c!-- HTTP --\x3e\n        <port><name>PORT2</name><value>35166</value></port>\n        \x3c!-- Exchange --\x3e\n        <port><name>PORT5</name><value>39481</value></port>\n        \x3c!-- Exchange status --\x3e\n        <port><name>PORT6</name><value>39482</value></port>\n      </ports>\n    </node>\n  </vw>\n</service_discovery>\n\n")),(0,n.kt)("p",null,"In this example, when the server does service discovery, it will find a worker whose ip is 10.1.2.3 in the virtual warehouse vw_default."),(0,n.kt)("h2",{id:"cluster-mode"},"cluster mode"),(0,n.kt)("p",null,"We can create new Virtual Warehouse while the ByConity cluster is running."),(0,n.kt)("h3",{id:"create-virtual-warehouse"},"Create Virtual Warehouse"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE WAREHOUSE\nIF NOT EXISTS `vw_default`\nSETTINGS num_workers = 1, type = 'Default',\n         auto_suspend = 3600, auto_resume = 1,\n         min_worker_groups = 0, max_worker_groups = 1, max_concurrent_queries=200;\n\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CREATE WAREHOUSE IF NOT EXISTS "),"$VW_NAME",(0,n.kt)("inlineCode",{parentName:"p"}," SETTINGS ...")," This SQL is used to create computed groups. $VW_NAME is the unique identifier of the computing group. When creating a computing group, num_workers and type in the settings are required. For other configurations, please refer to the ","[View Virtual Warehouse Information]"," section."),(0,n.kt)("h3",{id:"creat-worker-group"},"Creat Worker Group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE WORKER GROUP\nIF NOT EXISTS `wg_default` in `vw_default`\nSETTINGS type = 'Physical';\n\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CREATE WORKER GROUP IF NOT EXISTS "),"$WG_NAME",(0,n.kt)("inlineCode",{parentName:"p"},"SETTINGS ..."),"This SQL is used to create a worker group. $WG_NAME is the unique identifier of the worker group."),(0,n.kt)("h3",{id:"creat-k8s-worker-pods"},"Creat K8s Worker Pods"),(0,n.kt)("p",null,"After ByConity creates the meta information of the virtual warehouses and worker group, you can create the corresponding K8s Worker resource, and configure the corresponding environment variables VIRTUAL_WAREHOUSE_ID=$VW_NAME, WORKER_GROUP_ID=$WG_NAME for the worker."),(0,n.kt)("p",null,"After the Worker is started, it can be automatically registered in the corresponding virtual warehouse and worker group."),(0,n.kt)("p",null,"For specific operations, please check\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ByConity/byconity-deploy"},"https://github.com/ByConity/byconity-deploy")),(0,n.kt)("h1",{id:"modify-virtual-warehouses"},"Modify Virtual Warehouses"),(0,n.kt)("p",null,"In addition to viewing and creating virtual warehouses information, we can also modify virtual warehouses related meta information at runtime."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"DROP WAREHOUSE IF EXISTS `vw_default`;\nDROP WORKER GROUP IF EXISTS `wg_default`;\n\n")),(0,n.kt)("p",null,"The above DROP statement will delete the specified virtual warehouses and worker group."),(0,n.kt)("p",null,"Note: When the virtual warehouse specified by the worker pod cannot be found in the ByConity meta information, the resource manager will reject the registration of the worker, so the worker cannot be used to process queries."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALTER WAREHOUSE `vw_default`\nSETTINGS auto_suspend = 3600, auto_resume = 0,\n          min_worker_groups = 0, max_worker_groups = 0, max_concurrent_queries=50;\n\n")),(0,n.kt)("p",null,"The above ALTER statement can modify the configuration of the virtual warehouses. After modification, all worker groups in the virtual warehouses will use the new configuration."),(0,n.kt)("p",null,"Note: We cannot modify the configuration of the worker group through ",(0,n.kt)("inlineCode",{parentName:"p"},"ALTER WORKER GROUP ..."),". All configurations of a worker group are inherited from the configuration of the owning virtual warehouses, so no such syntax exists."))}d.isMDXComponent=!0}}]);