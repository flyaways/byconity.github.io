"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3832],{49613:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>g});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},k=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return r?a.createElement(g,o(o({ref:t},k),{},{components:r})):a.createElement(g,o({ref:t},k))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=r(64778),n=(r(59496),r(49613));const l={title:"\u914d\u7f6e\u8ba1\u7b97\u7ec4",tags:["Docs"]},o="\u914d\u7f6e\u8ba1\u7b97\u7ec4",p={unversionedId:"basic-guide/virtual-warehouse-configuration",id:"version-0.2.0/basic-guide/virtual-warehouse-configuration",title:"\u914d\u7f6e\u8ba1\u7b97\u7ec4",description:"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/virtual-warehouse-configuration.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/virtual-warehouse-configuration",permalink:"/zh-cn/docs/0.2.0/basic-guide/virtual-warehouse-configuration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/virtual-warehouse-configuration.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"\u914d\u7f6e\u8ba1\u7b97\u7ec4",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u76d1\u63a7\u96c6\u7fa4",permalink:"/zh-cn/docs/0.2.0/basic-guide/monitoring"},next:{title:"Byconity 0.2.0 s3 storage upgrade checklist",permalink:"/zh-cn/docs/0.2.0/advanced-guide/0.2.0_s3_upgrade_checklist"}},u={},i=[{value:"system.virtual_warehouses",id:"systemvirtual_warehouses",level:2},{value:"system.worker_groups",id:"systemworker_groups",level:2},{value:"system.workers",id:"systemworkers",level:2},{value:"\u672c\u5730\u6a21\u5f0f",id:"\u672c\u5730\u6a21\u5f0f",level:2},{value:"\u96c6\u7fa4\u6a21\u5f0f",id:"\u96c6\u7fa4\u6a21\u5f0f",level:2},{value:"\u521b\u5efa\u8ba1\u7b97\u7ec4",id:"\u521b\u5efa\u8ba1\u7b97\u7ec4",level:3},{value:"\u521b\u5efa\u8ba1\u7b97\u7ec4\u526f\u672c",id:"\u521b\u5efa\u8ba1\u7b97\u7ec4\u526f\u672c",level:3},{value:"\u521b\u5efa K8s Worker Pods",id:"\u521b\u5efa-k8s-worker-pods",level:3}],k={toc:i},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u914d\u7f6e\u8ba1\u7b97\u7ec4"},"\u914d\u7f6e\u8ba1\u7b97\u7ec4"),(0,n.kt)("p",null,"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b"),(0,n.kt)("p",null,"\u6587\u6863\u683c\u5f0f\uff1a\u6559\u7a0b\u76ee\u7684\uff0c\u524d\u7f6e\u51c6\u5907\uff0c\u5206\u6b65\u9aa4\u8bb2\u89e3\u539f\u7406 & \u793a\u4f8b\uff0c\u76f8\u5173\u6587\u6863\u63a8\u8350\uff1b"),(0,n.kt)("h1",{id:"\u8ba1\u7b97\u7ec4worker-\u548c-server-\u7684\u5173\u7cfb"},"\u8ba1\u7b97\u7ec4\u3001Worker \u548c Server \u7684\u5173\u7cfb"),(0,n.kt)("p",null,"\u5728",(0,n.kt)("a",{parentName:"p",href:"../advanced-guide/resource-manager"},"\u8d44\u6e90\u7ba1\u7406\u5668")," \u7ae0\u8282\u6211\u4eec\u4ecb\u7ecd\u4e86",(0,n.kt)("strong",{parentName:"p"},"\u8ba1\u7b97\u7ec4"),"\uff08Virtual Warehouse, \u7b80\u79f0 VW\uff09\u3001",(0,n.kt)("strong",{parentName:"p"},"\u8ba1\u7b97\u7ec4\u526f\u672c"),"\uff08Worker Group, \u7b80\u79f0 WG\uff09\u548c\u8ba1\u7b97\u8282\u70b9\u7b49\u6982\u5ff5\u3002\u4e00\u4e2a ByConity \u96c6\u7fa4\u4e2d\uff0c\u8ba1\u7b97\u8d44\u6e90\u88ab\u5212\u5206\u4e3a\u591a\u4e2a\u8ba1\u7b97\u7ec4\uff0c\u6bcf\u4e2a\u8ba1\u7b97\u7ec4\u5305\u542b\u591a\u4e2a\u914d\u7f6e\u76f8\u540c\u7684\u8ba1\u7b97\u7ec4\u526f\u672c\uff0c\u6bcf\u4e2a\u8ba1\u7b97\u7ec4\u526f\u672c\u5219\u5305\u542b\u591a\u4e2a\u8ba1\u7b97\u8282\u70b9\u3002\u53ef\u4ee5\u5728\u4e0d\u540c\u7ea7\u522b\u5bf9\u8d44\u6e90\u8fdb\u884c\u81ea\u7531\u7684\u6269\u7f29\u5bb9\uff0c\u5b9e\u73b0\u5f39\u6027\u8ba1\u7b97\u3002\u4ee5\u6269\u5bb9\u4e3a\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u6269\u5bb9\u65b9\u5f0f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9 Worker \u7684 CPU\u3001MEM \u8d44\u6e90\u8fdb\u884c\u7eb5\u5411\u6269\u5bb9\uff0c\u4ee5\u63d0\u5347\u5355\u8282\u70b9\u7684\u5904\u7406\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u52a0\u4e00\u4e2a\u8ba1\u7b97\u7ec4\u526f\u672c\u5185 Worker \u7684\u6570\u91cf\uff0c\u4ee5\u63d0\u5347\u8ba1\u7b97\u7ec4\u526f\u672c\u5904\u7406\u67e5\u8be2\u65f6\u7684\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u52a0\u8ba1\u7b97\u7ec4\u5185\u8ba1\u7b97\u7ec4\u526f\u672c\u7684\u6570\u91cf\uff0c\u4ee5\u63d0\u5347\u8ba1\u7b97\u7ec4\u5904\u7406\u67e5\u8be2\u7684\u5e76\u53d1\u80fd\u529b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u65b0\u7684\u4e1a\u52a1\u6216\u79df\u6237\u589e\u52a0\u65b0\u7684\u8ba1\u7b97\u7ec4\u8d44\u6e90\uff0c\u5b9e\u73b0\u79df\u6237\u95f4\u8d44\u6e90\u9694\u79bb\u3002")),(0,n.kt)("p",null,"\u670d\u52a1\u8282\u70b9\uff0c\u6211\u4eec\u4e5f\u79f0\u4e3a server\uff0c\u4e3b\u8981\u627f\u62c5 sql \u63a5\u6536\uff0c\u8c03\u5ea6\uff0c\u548c\u7ed3\u679c\u56de\u4f20\u7684\u4f5c\u7528\u3002\u8ba1\u7b97\u8282\u70b9\uff0c\u6211\u4eec\u4e5f\u79f0\u4e3a worker\uff0c\u4e3b\u8981\u627f\u62c5\u7684\u662f\u8ba1\u7b97\u4efb\u52a1\uff0c\u8fd9\u4e9b\u4efb\u52a1\u53ef\u4ee5\u662f\u6570\u636e\u5199\u5165\u3001\u7528\u6237\u67e5\u8be2\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e9b\u540e\u53f0\u4efb\u52a1\u3002\u7528\u6237\u67e5\u8be2\u548c\u540e\u53f0\u4efb\u52a1\uff0c\u53ef\u4ee5\u5171\u4eab\u76f8\u540c\u7684\u8ba1\u7b97\u8282\u70b9\u4ee5\u63d0\u9ad8\u5229\u7528\u7387\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u72ec\u7acb\u7684\u8ba1\u7b97\u8282\u70b9\u4ee5\u4fdd\u8bc1\u4e25\u683c\u7684\u8d44\u6e90\u9694\u79bb\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u8ba1\u7b97\u4efb\u52a1\u7684\u7279\u6027\u3001\u4f18\u5148\u7ea7\u548c\u4e1a\u52a1\u7c7b\u522b\u4e0d\u540c\uff0c\u6784\u5efa\u591a\u4e2a\u8ba1\u7b97\u7ec4\uff0c\u5e76\u8bbe\u7f6e\u4e0d\u540c\u7684\u8d44\u6e90\u5f39\u6027\u7b56\u7565\uff0c\u63d0\u9ad8\u8ba1\u7b97\u6548\u7387\u964d\u4f4e\u6210\u672c\u3002"),(0,n.kt)("h1",{id:"\u67e5\u770b\u8ba1\u7b97\u7ec4\u4fe1\u606f"},"\u67e5\u770b\u8ba1\u7b97\u7ec4\u4fe1\u606f"),(0,n.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e00\u7ec4\u7cfb\u7edf\u8868\u53ef\u4ee5\u67e5\u8be2\u8ba1\u7b97\u7ec4\u76f8\u5173\u5143\u4fe1\u606f\uff0c\u8fd9\u4e9b\u7cfb\u7edf\u8868\u53ea\u63d0\u4f9b\u53ef\u89c2\u6d4b\u7684\u80fd\u529b\uff0c\u4e0d\u80fd\u901a\u8fc7\u4fee\u6539\u8868\u5185\u5bb9\u6765\u66f4\u6539\u8ba1\u7b97\u7ec4\u4fe1\u606f\u3002\u5982\u9700\u4fee\u6539\u8ba1\u7b97\u7ec4\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003","[\u4fee\u6539\u8ba1\u7b97\u7ec4\u914d\u7f6e]","\uff08todo:link\uff09\u3002"),(0,n.kt)("h2",{id:"systemvirtual_warehouses"},"system.virtual_warehouses"),(0,n.kt)("p",null,"\u8be5\u7cfb\u7edf\u8868\u5c55\u793a\u6240\u6709\u8ba1\u7b97\u7ec4\uff08VW\uff09\u7684\u5143\u4fe1\u606f\uff0c\u4e3b\u8981\u5b57\u6bb5\u53ca\u8bf4\u660e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u542b\u4e49"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u7684\u540d\u79f0\uff0c\u552f\u4e00\u6807\u8bc6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u7684\u7c7b\u578b\uff0cDefault/Write\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"num_workers")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u4e3a\u6bcf\u4e2a worker group \u914d\u7f6e\u7684 worker \u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"active_worker_groups"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u4e2d\u6b63\u5728\u8fd0\u884c\u7684\u8ba1\u7b97\u7ec4\u526f\u672c\uff08worker group\uff09\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"active_workers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u4e2d\u6b63\u5728\u5065\u5eb7\u8fd0\u884c\u7684 worker \u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"min_worker_groups"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u5141\u8bb8\u8fd0\u884c\u7684\u6700\u5c0f\u8ba1\u7b97\u7ec4\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_worker_groups"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u5141\u8bb8\u8fd0\u884c\u7684\u6700\u5927\u8ba1\u7b97\u7ec4\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_concurrent_queries"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u5141\u8bb8\u7684\u6700\u5927\u67e5\u8be2\u5e76\u53d1\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_queued_queries"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u5141\u8bb8\u7684\u6700\u5927\u6392\u961f\u67e5\u8be2\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_queued_waiting_ms"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u5141\u8bb8\u7684\u6392\u961f\u67e5\u8be2\u6700\u5927\u7b49\u5f85\u65f6\u957f\uff08\u6beb\u79d2\uff09")))),(0,n.kt)("h2",{id:"systemworker_groups"},"system.worker_groups"),(0,n.kt)("p",null,"\u8be5\u7cfb\u7edf\u8868\u5c55\u793a\u6240\u6709\u8ba1\u7b97\u7ec4\u526f\u672c\uff08WG\uff09\u7684\u5143\u4fe1\u606f\uff0c\u4e3b\u8981\u5b57\u6bb5\u53ca\u8bf4\u660e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53f3\u5bf9\u9f50"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vw_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u6240\u5c5e\u7684 virtual warehouse \u7684\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u7684 id\uff0c\u552f\u4e00\u6807\u8bc6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"num_workers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 virtual warehouse \u4e3a\u6bcf\u4e2a worker group \u914d\u7f6e\u7684 worker \u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"linked_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u8be5 worker group \u662f\u4e00\u4e2a Shared \u7c7b\u578b\uff0c\u5219 linked_id \u6307\u5411\u5176\u5f15\u7528\u7684 Physical worker group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"active_workers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u4e2d\u6b63\u5728\u5065\u5eb7\u8fd0\u884c\u7684 worker \u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"min_cpu_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u4e2d\u6700\u5c0f\u7684 worker \u7684 cpu_usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_cpu_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u4e2d\u6700\u5927\u7684 worker \u7684 cpu_usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"avg_cpu_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u6240\u6709 worker \u7684 cpu_usage \u5747\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"min_mem_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u4e2d\u6700\u5c0f\u7684 worker \u7684 memory_usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_mem_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u4e2d\u6700\u5927\u7684 worker \u7684 memory_usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"avg_mem_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be5 worker group \u6240\u6709 worker \u7684 memory_usage \u5747\u503c")))),(0,n.kt)("h2",{id:"systemworkers"},"system.workers"),(0,n.kt)("p",null,"\u8be5\u7cfb\u7edf\u8868\u8bb0\u5f55\u6240\u6709\u8fd0\u884c\u4e2d\u7684 worker \u4fe1\u606f\uff0c\u4e3b\u8981\u5b57\u6bb5\u53ca\u8bf4\u660e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u542b\u4e49"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"worker_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"worker \u7684 id\uff0c\u552f\u4e00\u6807\u8bc6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vw_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"worker \u6240\u5c5e\u7684 virtual warehouse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"worker_group_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"worker \u6240\u5c5e\u7684 worker group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"host"),(0,n.kt)("td",{parentName:"tr",align:"left"},"worker \u7684 host (ip)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tcp_port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"worker \u7684 tcp_port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u7684 cpu_usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory_usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u7684 memory_usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory_available"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u53ef\u7528\u7684 memory \u91cf\uff08\u5b57\u8282\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last_update_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6700\u8fd1\u7684\u5fc3\u8df3\u66f4\u65b0\u65f6\u95f4")))),(0,n.kt)("h1",{id:"\u521b\u5efa\u53ca\u4f7f\u7528\u8ba1\u7b97\u7ec4"},"\u521b\u5efa\u53ca\u4f7f\u7528\u8ba1\u7b97\u7ec4"),(0,n.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u672c\u5730\u6a21\u5f0f\u548c\u96c6\u7fa4\u6a21\u5f0f\u4e24\u79cd\u4e0d\u540c\u7684\u914d\u7f6e\u65b9\u5f0f\u6765\u521b\u5efa\u8ba1\u7b97\u7ec4\u3002"),(0,n.kt)("p",null,"\u672c\u5730\u6a21\u5f0f\u53ef\u4ee5\u76f4\u63a5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u586b\u5199\u8ba1\u7b97\u7ec4\u548c\u8ba1\u7b97\u7ec4\u526f\u672c\u76f8\u5173\u4fe1\u606f\uff0c\u4fbf\u4e8e\u8c03\u8bd5\u6216 demo \u8fd0\u884c\u3002"),(0,n.kt)("p",null,"\u96c6\u7fa4\u6a21\u5f0f\u5219\u662f\u751f\u4ea7\u73af\u5883\u4e0b\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u901a\u8fc7\u7279\u5b9a\u7684 SQL \u6765\u521b\u5efa\u8ba1\u7b97\u7ec4\uff0c\u5e76\u901a\u8fc7\u5bf9\u5e94\u7684 K8s \u64cd\u4f5c\u521b\u5efa\u5b9e\u9645\u7684\u8ba1\u7b97\u7ec4\u8d44\u6e90\u3002"),(0,n.kt)("h2",{id:"\u672c\u5730\u6a21\u5f0f"},"\u672c\u5730\u6a21\u5f0f"),(0,n.kt)("p",null,"\u5728\u542f\u52a8 resource manager \u7ec4\u4ef6\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\uff08\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"./cluster-configuration"},"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570")," Resource Manager \u90e8\u5206\uff09\u4e2d\u586b\u5199\u8ba1\u7b97\u7ec4\u76f8\u5173\u4fe1\u606f\u3002Resource Manager \u4f1a\u76f4\u63a5\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u521b\u5efa\u5bf9\u5e94\u7684\u8ba1\u7b97\u7ec4\uff08\u4ee5\u53ca\u8ba1\u7b97\u7ec4\u526f\u672c\uff09\u3002\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<vws>\n  <vw>\n    <name>vw_default</name>\n    <type>Default</type>\n    <num_workers>1</num_workers>\n    <worker_groups>\n      <worker_group>\n        <name>wg_default</name>\n        <type>Physical</type>\n      </worker_group>\n    </worker_groups>\n  </vw>\n</vws>\n\n")),(0,n.kt)("p",null,"\u6211\u4eec\u914d\u7f6e\u4e86\u4e00\u4e2a\u540d\u4e3a vw_default \u7684\u8ba1\u7b97\u7ec4\uff0c\u7c7b\u578b\u4e3a Default\uff0c\u5e76\u4e14\u9884\u671f\u8be5 vw \u4e2d\u6709 1 \u4e2a worker\uff08num_workers \u4ec5\u4f5c\u4e3a\u521b\u5efa vw \u7684\u4e00\u4e2a\u6307\u793a\u4fe1\u606f\uff0c\u8fd0\u884c\u65f6\u5b9e\u9645 worker \u6570\u91cf\u53ef\u4ee5",(0,n.kt)("u",null,"\u67e5\u8be2\u76f8\u5173\u7cfb\u7edf\u8868"),(0,n.kt)("u",null,"\uff08","[\u67e5\u770b\u8ba1\u7b97\u7ec4\u4fe1\u606f]"),(0,n.kt)("u",null,"\uff09"),"\u83b7\u5f97\uff09\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4e3a\u8be5\u8ba1\u7b97\u7ec4\u914d\u7f6e\u4e86 1 \u4e2a\u526f\u672c\uff0c\u540d\u4e3a wg_default\u3002"),(0,n.kt)("p",null,"\u5728\u542f\u52a8 server \u7ec4\u4ef6\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff08\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"./cluster-configuration"},"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570")," Server \u90e8\u5206\uff09\u670d\u52a1\u53d1\u73b0\u90e8\u5206\u76f4\u63a5\u914d\u7f6e\u6bcf\u4e2a VW \u5bf9\u5e94\u7684 Worker \u4fe1\u606f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<service_discovery>\n  <mode>local</mode>\n  <vw>\n    <psm>data.cnch.vw_default</psm>\n    <node>\n      <vw_name>vw_default</vw_name>\n      <host>10.1.2.3</host>\n      <hostname>vw_default0</hostname>\n      <ports>\n        \x3c!-- TCP/Primary --\x3e\n        <port><name>PORT0</name><value>31067</value></port>\n        \x3c!-- RPC --\x3e\n        <port><name>PORT1</name><value>32099</value></port>\n        \x3c!-- HTTP --\x3e\n        <port><name>PORT2</name><value>35166</value></port>\n        \x3c!-- Exchange --\x3e\n        <port><name>PORT5</name><value>39481</value></port>\n        \x3c!-- Exchange status --\x3e\n        <port><name>PORT6</name><value>39482</value></port>\n      </ports>\n    </node>\n  </vw>\n</service_discovery>\n\n")),(0,n.kt)("p",null,"\u5728\u8be5\u793a\u4f8b\u4e2d\uff0cserver \u505a\u670d\u52a1\u53d1\u73b0\u65f6\uff0c\u4f1a\u627e\u5230\u8ba1\u7b97\u7ec4 vw_default \u6709\u4e00\u4e2a ip \u4e3a 10.1.2.3 \u7684 worker\u3002"),(0,n.kt)("h2",{id:"\u96c6\u7fa4\u6a21\u5f0f"},"\u96c6\u7fa4\u6a21\u5f0f"),(0,n.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ByConity \u96c6\u7fa4\u8fd0\u884c\u65f6\uff0c\u521b\u5efa\u65b0\u7684\u8ba1\u7b97\u7ec4\u3002"),(0,n.kt)("h3",{id:"\u521b\u5efa\u8ba1\u7b97\u7ec4"},"\u521b\u5efa\u8ba1\u7b97\u7ec4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE WAREHOUSE\nIF NOT EXISTS `vw_default`\nSETTINGS num_workers = 1, type = 'Default',\n         auto_suspend = 3600, auto_resume = 1,\n         min_worker_groups = 0, max_worker_groups = 1, max_concurrent_queries=200;\n\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CREATE WAREHOUSE IF NOT EXISTS "),"$VW_NAME",(0,n.kt)("inlineCode",{parentName:"p"}," SETTINGS ...")," \u8fd9\u4e2aSQL\u7528\u4e8e\u521b\u5efa\u8ba1\u7b97\u7ec4\u3002$VW_NAME \u4e3a\u8be5\u8ba1\u7b97\u7ec4\u7684\u552f\u4e00\u6807\u8bc6\u3002\u521b\u5efa\u8ba1\u7b97\u7ec4\u65f6\uff0csettings \u4e2d num_workers \u548c type \u4e3a\u5fc5\u586b\u9879\uff0c\u5176\u4ed6\u914d\u7f6e\u53ef\u53c2\u8003","[\u67e5\u770b\u8ba1\u7b97\u7ec4\u4fe1\u606f]","\u5c0f\u8282\u3002"),(0,n.kt)("h3",{id:"\u521b\u5efa\u8ba1\u7b97\u7ec4\u526f\u672c"},"\u521b\u5efa\u8ba1\u7b97\u7ec4\u526f\u672c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE WORKER GROUP\nIF NOT EXISTS `wg_default` in `vw_default`\nSETTINGS type = 'Physical';\n\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CREATE WORKER GROUP IF NOT EXISTS "),"$WG_NAME",(0,n.kt)("inlineCode",{parentName:"p"},"SETTINGS ..."),"\u8fd9\u4e2aSQL\u7528\u4e8e\u521b\u5efa\u8ba1\u7b97\u7ec4\u526f\u672c\u3002$WG_NAME \u4e3a\u8be5\u8ba1\u7b97\u7ec4\u526f\u672c\u7684\u552f\u4e00\u6807\u8bc6\u3002"),(0,n.kt)("h3",{id:"\u521b\u5efa-k8s-worker-pods"},"\u521b\u5efa K8s Worker Pods"),(0,n.kt)("p",null,"ByConity \u521b\u5efa\u8ba1\u7b97\u7ec4\u548c\u8ba1\u7b97\u7ec4\u526f\u672c\u7684\u5143\u4fe1\u606f\u540e\uff0c\u5219\u53ef\u4ee5\u521b\u5efa\u5bf9\u5e94\u7684 K8s Worker \u8d44\u6e90\uff0c\u4e3a worker \u914d\u7f6e\u5bf9\u5e94\u7684\u73af\u5883\u53d8\u91cf VIRTUAL_WAREHOUSE_ID=$VW_NAME, WORKER_GROUP_ID=$WG_NAME\u3002"),(0,n.kt)("p",null,"Worker \u542f\u52a8\u540e\u5373\u53ef\u81ea\u52a8\u6ce8\u518c\u5230\u5bf9\u5e94\u7684 virtual warehouse \u548c worker group \u4e2d\u3002\u5177\u4f53\u64cd\u4f5c\u89c1\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ByConity/byconity-deploy"},"https://github.com/ByConity/byconity-deploy")),(0,n.kt)("h1",{id:"\u4fee\u6539\u8ba1\u7b97\u7ec4"},"\u4fee\u6539\u8ba1\u7b97\u7ec4"),(0,n.kt)("p",null,"\u9664\u4e86\u8ba1\u7b97\u7ec4\u4fe1\u606f\u7684\u67e5\u770b\u548c\u521b\u5efa\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4fee\u6539\u8ba1\u7b97\u7ec4\u76f8\u5173\u7684\u5143\u4fe1\u606f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"DROP WAREHOUSE IF EXISTS `vw_default`;\nDROP WORKER GROUP IF EXISTS `wg_default`;\n\n")),(0,n.kt)("p",null,"\u4e0a\u8ff0 DROP \u8bed\u53e5\u5c06\u5220\u9664\u6307\u5b9a\u7684\u8ba1\u7b97\u7ec4\u548c\u8ba1\u7b97\u7ec4\u526f\u672c\u3002"),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a\u5f53 ByConity \u5143\u4fe1\u606f\u4e2d\u627e\u4e0d\u5230 worker pod \u6307\u5b9a\u7684 virtual warehouse \u65f6\uff0cresource manager \u5c06\u62d2\u7edd\u8be5 worker \u7684\u6ce8\u518c\uff0c\u56e0\u6b64\u8be5 worker \u4e5f\u65e0\u6cd5\u88ab\u7528\u4e8e\u5904\u7406\u67e5\u8be2\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALTER WAREHOUSE `vw_default`\nSETTINGS auto_suspend = 3600, auto_resume = 0,\n         min_worker_groups = 0, max_worker_groups = 0, max_concurrent_queries=50;\n\n")),(0,n.kt)("p",null,"\u4e0a\u8ff0 ALTER \u8bed\u53e5\u53ef\u4ee5\u4fee\u6539\u8ba1\u7b97\u7ec4\u7684\u914d\u7f6e\uff0c\u4fee\u6539\u540e\uff0c\u8ba1\u7b97\u7ec4\u5185\u6240\u6709\u7684\u8ba1\u7b97\u7ec4\u526f\u672c\u90fd\u5c06\u4f7f\u7528\u65b0\u7684\u914d\u7f6e\u3002"),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a\u6211\u4eec\u65e0\u6cd5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"ALTER WORKER GROUP ...")," \u6765\u4fee\u6539\u8ba1\u7b97\u7ec4\u526f\u672c\u7684\u914d\u7f6e\u3002\u8ba1\u7b97\u7ec4\u526f\u672c\u7684\u6240\u6709\u914d\u7f6e\u90fd\u7ee7\u627f\u81ea\u6240\u5c5e\u8ba1\u7b97\u7ec4\u7684\u914d\u7f6e\uff0c\u56e0\u6b64\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u8bed\u6cd5\u3002"))}s.isMDXComponent=!0}}]);