"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8831],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(4778),n=(a(9496),a(9613));const i={title:"\u6570\u636e\u9884\u52a0\u8f7d",sidebar_position:2,tags:["Docs"]},l="\u6570\u636e\u9884\u52a0\u8f7d",o={unversionedId:"query-optimization/query-optimization-with-cache-preload",id:"query-optimization/query-optimization-with-cache-preload",title:"\u6570\u636e\u9884\u52a0\u8f7d",description:"\u6570\u636e\u7f13\u5b58\uff08Disk Cache\uff09",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/query-optimization/query-optimization-with-cache-preload.mdx",sourceDirName:"query-optimization",slug:"/query-optimization/query-optimization-with-cache-preload",permalink:"/zh-cn/docs/query-optimization/query-optimization-with-cache-preload",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/query-optimization/query-optimization-with-cache-preload.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u6570\u636e\u9884\u52a0\u8f7d",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u4f18\u5316\u5668",permalink:"/zh-cn/docs/query-optimization/query-optimizer"},next:{title:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18",permalink:"/zh-cn/docs/query-optimization/complex-query-optimization"}},p={},c=[{value:"\u6570\u636e\u7f13\u5b58\uff08Disk Cache\uff09",id:"\u6570\u636e\u7f13\u5b58disk-cache",level:2},{value:"\u9884\u52a0\u8f7d (Cache Preload)",id:"\u9884\u52a0\u8f7d-cache-preload",level:2},{value:"\u5982\u4f55\u5f00\u542f\u548c\u914d\u7f6e",id:"\u5982\u4f55\u5f00\u542f\u548c\u914d\u7f6e",level:3},{value:"\u624b\u52a8\u9884\u52a0\u8f7d",id:"\u624b\u52a8\u9884\u52a0\u8f7d",level:3}],u={toc:c},m="wrapper";function s(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6570\u636e\u9884\u52a0\u8f7d"},"\u6570\u636e\u9884\u52a0\u8f7d"),(0,n.kt)("h2",{id:"\u6570\u636e\u7f13\u5b58disk-cache"},"\u6570\u636e\u7f13\u5b58\uff08Disk Cache\uff09"),(0,n.kt)("p",null,"\u5728ByConity\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e2d\uff0c\u56e0\u4e3a\u4f7f\u7528\u4e86\u4e91\u5b58\u50a8\uff0c\u62c9\u957f\u4e86I/O\u65f6\u95f4\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cByConity\u901a\u8fc7\u5728\u6bcf\u4e2aWorker\u4e0a\u8bbe\u7f6eDisk Cache\u6765\u4f18\u5316\u8bfb\u5199\u6027\u80fd\u3002\u5f53\u6211\u4eec\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u6570\u636e\u65f6\uff0c\u4f1a\u5728Worker\u672c\u5730Cache\u4e00\u4efd\u6570\u636e\uff0c\u4e0b\u6b21\u76f4\u63a5\u8bbf\u95eeCache\u4e2d\u6570\u636e\u3002\u5982\u679c Cache \u6ee1\u4e86\uff0cByConity\u901a\u8fc7\u4e00\u79cd\u6539\u8fdb\u7684 Bucket lru \u7b97\u6cd5\u6765\u6dd8\u6c70\u6389\u3002\u5728\u5143\u6570\u636e\u7ef4\u5ea6\uff0cByConity\u5728Server\u7aef\u7684\u5185\u5b58\u4e2d\u4e5f\u8fdb\u884c\u4e86\u7f13\u5b58\uff0c\u4ee5Table\u548cPartition\u4f5c\u4e3a\u7c92\u5ea6\u3002\n",(0,n.kt)("img",{src:a(3099).Z,width:"1280",height:"527"})),(0,n.kt)("h2",{id:"\u9884\u52a0\u8f7d-cache-preload"},"\u9884\u52a0\u8f7d (Cache Preload)"),(0,n.kt)("p",null,"\u57280.2.0\u7248\u672c\u4e0a\uff0cByConity\u5bf9\u51b7\u8bfb\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u652f\u6301\u4e86\u9884\u52a0\u8f7d\uff08Cache Preload\uff09\u7684\u529f\u80fd\u3002ByConity\u4f7f\u7528\u4e86\u5b58\u7b97\u5206\u79bb\u7684\u67b6\u6784\uff0c\u4f7f\u7528\u4e86Disk Cache\u7684\u6982\u5ff5\uff0c\u8bbf\u95ee\u8fc7\u7684\u6570\u636e\u4f1a\u88abCache\u8d77\u6765\uff0c\u5e76\u4f7f\u7528\u4e00\u4e9b\u6dd8\u6c70\u7b56\u7565\u5bf9\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u6ca1\u6709\u8bbf\u95ee\uff0c\u6216\u8005\u8bbf\u95ee\u5c11\u7684\u6570\u636e\u5254\u9664\u6389\u3002\u4f46\u8fd9\u79cd\u4f9d\u7136\u4f1a\u5b58\u5728\u51b7\u8bfb\u7684\u60c5\u51b5\uff0c\u964d\u4f4e\u8bfb\u5199\u6027\u80fd\uff0c\u6240\u4ee5\u5e0c\u671b\u5728\u8f7d\u5165\u6570\u636e\u7684\u8fc7\u7a0b\u4e5f\u80fd\u52a0\u901f\uff0c\u6240\u8c13\u63d0\u524d\u9884\u70ed\uff0c\u5728\u7528\u6237\u67e5\u8be2\u524d\u5c31\u628a\u6570\u636e\u8f7d\u5165Cache\u4e2d\u3002"),(0,n.kt)("p",null,"\u9884\u52a0\u8f7d\u529f\u80fd\u901a\u8fc7\u5c06\u6570\u636e\u4ece\u8fdc\u7aef\u5b58\u50a8\u9884\u5148\u52a0\u8f7d\u5230\u672c\u5730\u78c1\u76d8\u7f13\u5b58\u4e2d\uff0c\u4ee5\u6b64\u6765\u52a0\u901f\u5373\u5c06\u6267\u884c\u7684\u67e5\u8be2\u3002\u9884\u52a0\u8f7d\u5b8c\u6210\u540e\uff0c\u67e5\u8be2\u64cd\u4f5c\u5c06\u76f4\u63a5\u4ece\u672c\u5730\u78c1\u76d8\u800c\u975e\u8fdc\u7a0b\u5b58\u50a8\u4e2d\u8bfb\u53d6\u6570\u636e\u3002\u76ee\u524d\u9884\u52a0\u8f7d\uff08Cache Preload\uff09\u652f\u6301\u4e24\u79cd\u7c7b\u578b\uff0c\u4e00\u79cd\u662f\u81ea\u52a8\u9884\u52a0\u8f7d\uff08Auto Preload\uff09\uff0c\u4e00\u79cd\u662f\u624b\u52a8\u9884\u52a0\u8f7d\uff08Manual Preload\uff09\uff0c\u540c\u65f6\u5728Preload\u7ea7\u522b\u4e0a\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u652f\u6301\u4ec5\u5143\u6570\u636e\uff08Meta\uff09\u548c\u4ec5\u6570\u636e\uff08Data\uff09\u7684Preload\uff0c\u4e5f\u53ef\u4ee5\u652f\u6301Meta & Data\u540c\u65f6Preload\u6570\u636e\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u5f00\u542f\u548c\u914d\u7f6e"},"\u5982\u4f55\u5f00\u542f\u548c\u914d\u7f6e"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8868\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"parts_preload_level")," \u5e94\u5927\u4e8e 0 (\u82e5\u672a\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 0)\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b DDL \u547d\u4ee4\u66f4\u65b0\u6b64\u8bbe\u7f6e\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table_name MODIFY SETTINGS parts_preload_level = {level};\n")),(0,n.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"parts_preload_level")," \u7684\u503c\u542b\u4e49\u5982\u4e0b\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0\uff1a\u7981\u7528\u8868\u7684\u9884\u52a0\u8f7d\u529f\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"1\uff1a\u5f00\u542f\u8868\u7684\u9884\u52a0\u8f7d\u529f\u80fd\uff0c\u4f46\u4ec5\u9884\u52a0\u8f7d\u5143\u6570\u636e\uff0c\u5305\u62ec\u6821\u9a8c\u548c\u3001\u4e3b\u7d22\u5f15\u548c\u6807\u8bb0\u3002"),(0,n.kt)("li",{parentName:"ul"},"2\uff1a\u5f00\u542f\u8868\u7684\u9884\u52a0\u8f7d\u529f\u80fd\uff0c\u4f46\u53ea\u9884\u52a0\u8f7d\u6570\u636e\uff0c\u4e0d\u5305\u62ec\u5143\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"3\uff1a\u5f00\u542f\u8868\u7684\u9884\u52a0\u8f7d\u529f\u80fd\uff0c\u9884\u52a0\u8f7d\u5143\u6570\u636e\u53ca\u90e8\u5206\u6570\u636e\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8868\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"enable_local_disk_cache")," \u5e94\u8bbe\u7f6e\u4e3a 1\uff08\u82e5\u672a\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 1\uff09\u3002\u53ef\u901a\u8fc7\u4ee5\u4e0b DDL \u547d\u4ee4\u8fdb\u884c\u66f4\u65b0\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table_name MODIFY SETTINGS enable_local_disk_cache = 1;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"user.xml")," \u5185\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"parts_preload_level")," \u5e94\u5927\u4e8e 0\uff08\u9ed8\u8ba4\u4e3a 1\uff09\n\u5176\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"parts_preload_level")," \u7684\u503c\u542b\u4e49\u5982\u4e0b\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0\uff1a\u7981\u7528\u9884\u52a0\u8f7d\u3002\u5373\uff1a\u6240\u6709\u8868\u90fd\u5c06\u5173\u95ed\u9884\u52a0\u8f7d\u64cd\u4f5c\uff0c\u5373\u4f7f\u8868\u8bbe\u7f6eparts_preload_level>0"),(0,n.kt)("li",{parentName:"ul"},"1\uff1a\u5219\u4ec5\u8868\u793a\u5141\u8bb8\u8868\u9884\u52a0\u8f7d\u64cd\u4f5c\uff0c\u5e76\u4e14\u5b9e\u9645\u9884\u52a0\u8f7d\u7ea7\u522b\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e")))),(0,n.kt)("h3",{id:"\u624b\u52a8\u9884\u52a0\u8f7d"},"\u624b\u52a8\u9884\u52a0\u8f7d"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u542f\u7528\u9884\u52a0\u8f7d\u529f\u80fd\u4e4b\u524d\u7684\u8868\u683c\u65e7\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b DDL \u89e6\u53d1\u9884\u52a0\u8f7d\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DISK CACHE PRELOAD TABLE [db.]table_name [PARTITION p] [SYNC|ASYNC] [SETTINGS parts_preload_level = {level}, virtual_warehouse = {vw_name}];\n")),(0,n.kt)("p",null,"   \u5176\u4e2d\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5206\u533a ",(0,n.kt)("inlineCode",{parentName:"li"},"p"),"\uff1a\u6307\u5b9a\u76ee\u6807\u5206\u533a\u8fdb\u884c\u52a0\u8f7d\u3002\u5982\u679c\u7701\u7565\u6b64\u53c2\u6570\uff0c\u9ed8\u8ba4\u4f1a\u9884\u52a0\u8f7d\u8868\u5185\u7684\u6240\u6709\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SYNC"),"|",(0,n.kt)("inlineCode",{parentName:"li"},"ASYNC"),"\uff1a\u540c\u6b65\u6216\u5f02\u6b65\u9884\u52a0\u8f7d\u6a21\u5f0f\u3002",(0,n.kt)("inlineCode",{parentName:"li"},"ASYNC")," \u4f1a\u7acb\u5373\u8fd4\u56de\u6210\u529f\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"SYNC")," \u4f1a\u963b\u585e\u76f4\u5230\u9884\u52a0\u8f7d\u5b8c\u6210\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"parts_preload_level"),"\uff1a\u624b\u52a8\u9884\u52a0\u8f7d\u65f6\u7684\u6570\u636e\u7ea7\u522b\uff0c\u5982\u679c\u8bbe\u7f6e\uff0c\u5219\u4f1a\u8986\u76d6\u8868\u8bbe\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"virtual_warehouse"),"\uff1a\u6307\u5b9a\u9884\u52a0\u8f7d\u76ee\u6807\u7684\u865a\u62df\u4ed3\u5e93\u8282\u70b9\u3002")),(0,n.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u63d2\u5165\u7684\u6570\u636e\u4f1a\u81ea\u52a8\u9884\u52a0\u8f7d\u5230\u672c\u5730\u78c1\u76d8\uff0c\u76ee\u6807vw\u8282\u70b9\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"li"},"virtual_warehouse"),"\u4e2d\u7ed1\u5b9a\u7684vw\uff0c\u9884\u52a0\u8f7d\u7ea7\u522b\u4e5f\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"li"},"parts_preload_level"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5408\u5e76\u540e\u4ea7\u751f\u7684\u6570\u636e\u81ea\u52a8\u9884\u52a0\u8f7d\u5230\u672c\u5730\u78c1\u76d8\uff0c\u76ee\u6807vw\u8282\u70b9\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"li"},"virtual_warehouse"),"\u4e2d\u7ed1\u5b9a\u7684vw\uff0c\u9884\u52a0\u8f7d\u7ea7\u522b\u4e5f\u53d6\u51b3\u4e8e\u8868\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"li"},"parts_preload_level"),"\u3002")))}s.isMDXComponent=!0},3099:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/disk-cache-b943e84f01ac248b6b5ffb7466c23284.png"}}]);