"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2678],{49613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>y});var a=n(59496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(n),d=l,y=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(y,i(i({ref:e},s),{},{components:n})):a.createElement(y,i({ref:e},s))}));function y(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[c]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81959:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(64778),l=(n(59496),n(49613));const r={title:"\u4e8b\u52a1\u7ba1\u7406",sidebar_position:10,tags:["Docs"]},i="\u4e8b\u52a1\u548c\u5e76\u53d1\u63a7\u5236",o={unversionedId:"admin-guides/transaction-management",id:"version-0.3.0/admin-guides/transaction-management",title:"\u4e8b\u52a1\u7ba1\u7406",description:"\u4e8b\u52a1\u6982\u89c8",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/admin-guides/transaction-management.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/transaction-management",permalink:"/zh-cn/docs/0.3.0/admin-guides/transaction-management",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.3.0/admin-guides/transaction-management.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:10,frontMatter:{title:"\u4e8b\u52a1\u7ba1\u7406",sidebar_position:10,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1",permalink:"/zh-cn/docs/0.3.0/admin-guides/background-task-management"},next:{title:"TPC-DS\u57fa\u51c6\u6d4b\u8bd5",permalink:"/zh-cn/docs/0.3.0/benchmarks/tpc-ds"}},u={},p=[{value:"\u4e8b\u52a1\u6982\u89c8",id:"\u4e8b\u52a1\u6982\u89c8",level:2},{value:"\u5143\u6570\u636e\u5b58\u50a8\u9009\u578b",id:"\u5143\u6570\u636e\u5b58\u50a8\u9009\u578b",level:2},{value:"\u5206\u5e03\u5f0f\u65f6\u949f",id:"\u5206\u5e03\u5f0f\u65f6\u949f",level:2},{value:"\u4e8b\u52a1\u5904\u7406",id:"\u4e8b\u52a1\u5904\u7406",level:2},{value:"\u5e76\u53d1\u63a7\u5236",id:"\u5e76\u53d1\u63a7\u5236",level:2},{value:"\u591a\u7248\u672c",id:"\u591a\u7248\u672c",level:3},{value:"\u9501",id:"\u9501",level:3},{value:"\u5783\u573e\u56de\u6536",id:"\u5783\u573e\u56de\u6536",level:2}],s={toc:p},c="wrapper";function m(t){let{components:e,...r}=t;return(0,l.kt)(c,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e8b\u52a1\u548c\u5e76\u53d1\u63a7\u5236"},"\u4e8b\u52a1\u548c\u5e76\u53d1\u63a7\u5236"),(0,l.kt)("h2",{id:"\u4e8b\u52a1\u6982\u89c8"},"\u4e8b\u52a1\u6982\u89c8"),(0,l.kt)("p",null,"\u5728 ByConity \u91cc\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u8d28\u91cf\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e8b\u52a1\u8bed\u4e49\u7684\u652f\u6301\u3002\u6bcf\u6761 SQL \u8bed\u53e5\u90fd\u4f1a\u8f6c\u6362\u4e3a\u4e00\u4e2a\u4e8b\u52a1\u53bb\u6267\u884c\uff0c\u4e8b\u52a1\u63d0\u4f9b\u4e86\u539f\u5b50\u6027\u3001\u4e00\u81f4\u6027\u3001\u9694\u79bb\u6027\u548c\u6301\u4e45\u6027 (ACID) \u5c5e\u6027\u7684\u4fdd\u8bc1\uff0c\u65e8\u5728\u5728\u5e76\u53d1\u8bfb\u5199\uff0c\u8f6f\u4ef6\u5f02\u5e38\uff0c\u786c\u4ef6\u5f02\u5e38\u7b49\u5404\u79cd\u60c5\u51b5\u4e0b\u4ecd\u7136\u53ef\u4ee5\u4fdd\u8bc1\u6570\u636e\u7684\u6b63\u786e\u6027\u548c\u5b8c\u6574\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u539f\u5b50\u6027\uff08Atomicity\uff09\u4fdd\u8bc1\u6bcf\u4e00\u4e2a\u4e8b\u52a1\u88ab\u89c6\u4e3a\u4e00\u4e2a\u5355\u5143\uff0c\u4e8b\u52a1\u8981\u4e48\u5b8c\u5168\u6210\u529f\u8981\u4e48\u5f7b\u5e95\u5931\u8d25\u3002\u5728\u4e8b\u52a1\u6210\u529f\u4e4b\u524d\uff0c\u5199\u5165\u7684\u6570\u636e\u4e0d\u53ef\u89c1\uff0c\u4e0d\u4f1a\u51fa\u73b0\u90e8\u5206\u6570\u636e\u53ef\u89c1\u7684\u60c5\u51b5\u3002\u4e8b\u52a1\u5931\u8d25\u4e4b\u540e\uff0c\u4f1a\u628a\u5199\u5165\u7684\u90e8\u5206\u6570\u636e\u81ea\u52a8\u6e05\u7406\u6389\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u5783\u573e\u6570\u636e\u7684\u6b8b\u7559\u3002ByConity \u5728\u5404\u79cd\u60c5\u51b5\u4e0b\u90fd\u4f1a\u4fdd\u8bc1\u539f\u5b50\u6027\uff0c\u5305\u62ec\u6389\u7535\uff0c\u9519\u8bef\u548c\u5b95\u673a\u7b49\u5404\u79cd\u5f02\u5e38\u60c5\u51b5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\uff08Consistency\uff09\u4fdd\u8bc1\u6570\u636e\u5e93\u53ea\u4f1a\u4ece\u4e00\u4e2a\u6709\u6548\u7684\u72b6\u6001\u53d8\u6210\u53e6\u5916\u4e00\u4e2a\u6709\u6548\u7684\u72b6\u6001\uff0c\u4efb\u4f55\u6570\u636e\u7684\u5199\u5165\u5fc5\u987b\u9075\u5faa\u5df2\u7ecf\u5b9a\u4e49\u597d\u7684\u89c4\u5219\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9694\u79bb\u6027\uff08Isolation\uff09\u786e\u4fdd\u6570\u636e\u5e93 SQL \u5e76\u53d1\u6267\u884c\uff08\u4f8b\u5982\uff0c\u540c\u4e00\u65f6\u523b\u8bfb\u5199\u540c\u4e00\u5f20\u8868\uff09\u7684\u6b63\u786e\u6027\uff0c\u786e\u4fdd\u6570\u636e\u5e93\u7684\u72b6\u6001\u5728\u5e76\u53d1\u573a\u666f\u4e0b\u80fd\u7b49\u4ef7\u4e8e\u67d0\u79cd\u987a\u5e8f\u6267\u884c\u7684\u72b6\u6001\uff0c\u4e8b\u52a1\u4e4b\u95f4\u4e92\u4e0d\u5f71\u54cd\u3002\u9694\u79bb\u6027\u662f\u5e76\u53d1\u63a7\u5236\u7684\u76ee\u6807\uff0c\u53ef\u4ee5\u6709\u591a\u79cd\u9694\u79bb\u7ea7\u522b\u7684\u5b9e\u73b0\uff0cByConity \u4e3a\u7528\u6237\u63d0\u4f9b\u7684\u662f read committed\uff08rc\uff09\u9694\u79bb\u7ea7\u522b\u7684\u652f\u6301\u3002\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\u7684\u5199\u5165\u5bf9\u4e8e\u5176\u4ed6\u4e8b\u52a1\u662f\u4e0d\u53ef\u89c1\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6301\u4e45\u6027\uff08Durability\uff09\u4fdd\u8bc1\u6570\u636e\u7684\u9ad8\u53ef\u7528\u6027\u3002\u4e00\u65e6\u4e8b\u52a1\u6210\u529f\u63d0\u4ea4\uff0c\u5176\u5199\u5165\u7684\u6570\u636e\u4f1a\u88ab\u6301\u4e45\u5316\uff0c\u5373\u4f7f\u5728\u51fa\u73b0\u5404\u79cd\u7cfb\u7edf failure \u7684\u60c5\u51b5\u4e0b\u4e0d\u4e22\u5931\u3002ByConity \u91c7\u53d6\u7684\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u7ed3\u6784\uff0c\u5229\u7528\u4e86\u6210\u719f\u7684\u9ad8\u53ef\u7528\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u6216\u8005\u5bf9\u8c61\u5b58\u50a8\uff08\u4f8b\u5982 hdfs\uff0cS3\uff09\uff0c\u4fdd\u8bc1\u6210\u529f\u4e8b\u52a1\u6240\u63d0\u4ea4\u6570\u636e\u7684\u9ad8\u53ef\u7528\u3002")),(0,l.kt)("h2",{id:"\u5143\u6570\u636e\u5b58\u50a8\u9009\u578b"},"\u5143\u6570\u636e\u5b58\u50a8\u9009\u578b"),(0,l.kt)("p",null,"ByConity \u662f\u4e00\u6b3e\u5206\u6790\u578b\u6570\u636e\u5e93\uff08OLAP\uff09\uff0c\u4e0e\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08OLTP\uff09\u5728\u4e8b\u52a1\u4e0a\u7684\u9700\u6c42\u662f\u4e0d\u540c\u3002\u5206\u6790\u578b\u5728\u4e8b\u52a1\u4e0a\u7684\u8bc9\u6c42\u662f\u9488\u5bf9\u9ad8\u541e\u5410\u4f4e\u5ef6\u8fdf\u7684\u573a\u666f\uff1b\u76f8\u53cd\uff0cOLTP \u6570\u636e\u5e93\u7684\u8bc9\u6c42\u662f\u9762\u5411\u9ad8 QPS \u5b9e\u65f6\u7684\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u57fa\u672c\u7684 ACID \u5c5e\u6027\u9700\u8981\u4fdd\u8bc1\uff0cByConity \u5728\u4e8b\u52a1\u5b9e\u73b0\u9009\u578b\u4e0a\u4e3b\u8981\u6709 3 \u4e2a\u7279\u522b\u7684\u9700\u6c42\u3002\u9996\u5148\uff0cByConity \u5355\u4e2a\u4e8b\u52a1\u53ef\u80fd\u6d89\u53ca\u5230\u6d77\u91cf\u6570\u636e\uff08\u4f8b\u5982\uff0c\u4e0a\u4ebf\u884c\u7ea7\u522b\uff09\uff0c\u4e8b\u52a1\u5bf9\u6570\u636e\u541e\u5410\u548c\u5199\u5165\u6027\u80fd\u6709\u8f83\u9ad8\u8981\u6c42\uff0c\u5e76\u4e14\u9700\u8981\u4fdd\u8bc1\u5176\u539f\u5b50\u6027\uff1b\u5176\u6b21\uff0c\u5206\u6790\u578b\u6570\u636e\u5e93\u7684 workload \u4e2d\u8bfb\u7684\u6bd4\u4f8b\u9ad8\u4e8e\u5199\uff0c\u4e8b\u52a1\u9700\u8981\u4fdd\u8bc1\u8bfb workload \u4e0d\u4f1a\u88ab\u5199 workload \u5f71\u54cd\u548c\u963b\u585e\uff1b\u6700\u540e\uff0c\u4e8b\u52a1\u9700\u8981\u5177\u5907\u7075\u6d3b\u53ef\u63a7\u7684\u5e76\u53d1\u63a7\u5236\u7684\u529f\u80fd\uff0cByConity \u91cc\u9664\u4e86\u9700\u8981\u5904\u7406\u7528\u6237\u4fa7\u5e76\u53d1\u7684 workload\uff0c\u8fd8\u9700\u8981\u5904\u7406\u5e76\u53d1\u7684\u540e\u53f0\u4efb\u52a1\u3002"),(0,l.kt)("p",null,"ByConity \u7684\u4e8b\u52a1\u5904\u7406\u4e3b\u8981\u662f\u5bf9\u7528\u6237\u6570\u636e\u7684\u5143\u6570\u636e\u8fdb\u884c\u7ba1\u7406\uff0c\u5143\u6570\u636e\u5305\u62ec\u7528\u6237\u7684 db\uff08\u6570\u636e\u5e93\u5143\u6570\u636e\uff09\uff0ctable\uff08\u6570\u636e\u8868\u5143\u6570\u636e\uff09\u548c part\uff08part \u662f\u6570\u636e\u6587\u4ef6\u7684\u5143\u6570\u636e\uff0c\u5305\u62ec\u4e86 part \u540d\u5b57\uff0ccolumns\uff0c\u884c\u6570\uff0c\u72b6\u6001\uff0c\u7248\u672c\uff0c\u63d0\u4ea4\u65f6\u95f4\u7b49\u4fe1\u606f\uff09\u3002\u968f\u7740\u6570\u636e\u7684\u589e\u957f\uff0c\u5143\u6570\u636e\u672c\u8eab\u6570\u91cf\u7ea7\u4e5f\u4f1a\u7ebf\u6027\u589e\u957f\uff0c\u4e0d\u80fd\u4e22\u5931\u5e76\u4e14\u9700\u8981\u9ad8\u53ef\u7528\uff0c\u6240\u4ee5\u9700\u8981\u4e00\u4e2a\u5206\u5e03\u5f0f\u5b58\u50a8\u6216\u5206\u5e03\u5f0f\u6570\u636e\u5e93\u7684\u65b9\u6848\u3002\u6211\u4eec\u9009\u62e9\u4e86\u6210\u719f\u7684\u5206\u5e03\u5f0f Key-value \u6570\u636e\u5e93 \u4f5c\u4e3a ByConity \u4e2d\u4e0a\u8ff0\u5143\u6570\u636e\u7684\u5b58\u50a8\u65b9\u6848\uff0c\u901a\u8fc7\u62bd\u8c61\u5143\u6570\u636e\u8bfb\u5199 API\uff0c\u540e\u7aef\u9002\u914d\u82f9\u679c\u516c\u53f8\u5f00\u53d1\u7684 FoundationDB\u3002"),(0,l.kt)("h2",{id:"\u5206\u5e03\u5f0f\u65f6\u949f"},"\u5206\u5e03\u5f0f\u65f6\u949f"),(0,l.kt)("p",null,"\u4e8b\u52a1\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u7684\u6267\u884c\u9700\u8981\u5728\u5206\u5e03\u5f0f\u4e0d\u540c\u8282\u70b9\u4e2d\u8fdb\u884c\u65f6\u949f\u540c\u6b65\u3002ByConity \u91c7\u53d6\u4e86\u7b80\u5355\u5b9e\u7528\u7684 Timestamp Oracle\uff08TSO\uff09\u65b9\u6848\u3002\u5176\u4f18\u70b9\u9996\u5148\u7b80\u5355\u6613\u61c2\uff0c\u91c7\u53d6\u4e2d\u5fc3\u6388\u65f6\uff0c\u80fd\u591f\u786e\u5b9a\u552f\u4e00\u65f6\u95f4\u3002\u7136\u540e\u662f\u6027\u80fd\u597d\uff0c\u901a\u5e38\u4e00\u4e2a tso \u8282\u70b9\u80fd\u652f\u6301 1m+ \u7684 QPS\u3002\u7f3a\u70b9\u662f\u4e0d\u9002\u5408\u8de8\u6570\u636e\u4e2d\u5fc3\u7684\u573a\u666f\uff0c\u6240\u6709\u4e8b\u52a1\u4ece TSO \u83b7\u53d6\u65f6\u95f4\u5ef6\u8fdf\u8f83\u9ad8\u3002\u7531\u4e8e TSO \u662f\u4e2d\u5fc3\u5316\u6388\u65f6\u65b9\u6848\uff0cByConity \u4e3a\u5176\u63d0\u4f9b\u4e86\u9ad8\u53ef\u7528\u670d\u52a1\u3002"),(0,l.kt)("p",null,"TSO \u4f7f\u7528\u6df7\u5408\u903b\u8f91\u65f6\u949f\uff0c\u65f6\u949f\u7531\u7269\u7406\u90e8\u5206\u548c\u903b\u8f91\u90e8\u5206\u7ec4\u6210\uff0c64 \u4f4d\u8868\u793a\u4e00\u4e2a\u65f6\u95f4\u3002\u4e3a\u4e86\u907f\u514d TSO \u5b95\u673a\u5bfc\u81f4\u7684\u65f6\u95f4\u6233\u4e22\u5931\uff0c\u9700\u8981\u5bf9\u65f6\u95f4\u6233\u6301\u4e45\u5316\u3002\u4f46\u662f\u5982\u679c\u6bcf\u6b21\u6388\u65f6\u90fd\u6301\u4e45\u5316\u5c06\u4f1a\u964d\u4f4e\u6027\u80fd\uff0c\u6240\u4ee5 TSO \u4f1a\u9884\u7533\u8bf7\u4e00\u4e2a\u53ef\u5206\u914d\u7684\u65f6\u95f4\u7a97\u53e3\uff08\u4f8b\u5982 3s\uff09\u7533\u8bf7\u6210\u529f\u4e4b\u540e\uff0cTSO \u53ef\u4ee5\u5728\u5185\u5b58\u4e2d\u76f4\u63a5\u5206\u914d 3 \u79d2\u7a97\u53e3\u4e4b\u5185\u7684\u6240\u6709\u65f6\u95f4\u6233\u3002\u5ba2\u6237\u7aef\u8bf7\u6c42\u65f6\u95f4\u6233\uff0c\u903b\u8f91\u65f6\u949f\u90e8\u5206\u968f\u7740\u8bf7\u6c42\u9012\u589e\u3002\u5982\u679c\u51fa\u73b0\u903b\u8f91\u90e8\u5206\u6ea2\u51fa\u60c5\u51b5\uff0c\u4f1a\u7761\u7720 50ms \u7b49\u5f85\u7269\u7406\u65f6\u949f\u88ab\u63a8\u8fdb\u3002TSO \u4f1a\u6bcf 50ms \u68c0\u67e5\u65f6\u949f\uff0c\u5982\u679c\u5f53\u524d TSO \u7684\u7269\u7406\u65f6\u949f\u5df2\u7ecf\u843d\u540e\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u9700\u8981\u66f4\u65b0 TSO \u7684\u7269\u7406\u65f6\u949f\u90e8\u5206\u4e3a\u5f53\u524d\u7269\u7406\u65f6\u95f4\u3002\u5982\u679c\u903b\u8f91\u65f6\u949f\u90e8\u5206\u8fc7\u534a\uff0c\u4e5f\u4f1a\u589e\u52a0 TSO \u7684\u7269\u7406\u65f6\u949f\uff0c\u4e00\u65e6\u7269\u7406\u65f6\u949f\u589e\u957f\uff0c\u903b\u8f91\u65f6\u949f\u6e05\u96f6\u3002\u5982\u679c\u5f53\u524d\u65f6\u95f4\u7a97\u53e3\u5df2\u7ecf\u7528\u5b8c\uff0c\u9700\u8981\u7533\u8bf7\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7a97\u53e3\u3002\u540c\u65f6\u66f4\u65b0\u6301\u4e45\u5316\u7684\u7a97\u53e3\u4e0a\u754c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(27415).Z,width:"1262",height:"230"})),(0,l.kt)("h2",{id:"\u4e8b\u52a1\u5904\u7406"},"\u4e8b\u52a1\u5904\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Atomicity\uff08\u539f\u5b50\u6027\uff09")),(0,l.kt)("p",null,"ByConity \u5355\u4e2a\u4e8b\u52a1\u5728\u5143\u6570\u636e\u7ba1\u7406\u4e0a\u6709\u9ad8\u541e\u5410\u8bfb\u5199\u7684\u9700\u6c42\uff0c\u7531\u4e8e\u5206\u5e03\u5f0f key-value \u6570\u636e\u5e93\uff08\u4f8b\u5982 FoundationDB\uff09\u5bf9\u5355\u6b21\u539f\u5b50\u5199\u5165\u7684 value \u90fd\u6709\u5927\u5c0f\u9650\u5236\uff08\u4f8b\u5982 10MB\uff09\uff0cByConity \u81ea\u5df1\u5728\u5206\u5e03\u5f0f key-value \u5b58\u50a8\u4e4b\u540e\u5b9e\u73b0\u4e86 2 \u9636\u6bb5\uff0c\u4f7f\u5f97\u5355\u6b21\u5199\u5165\u5927\u5c0f\u4e0d\u53d7\u9650\u5e76\u4e14\u66f4\u52a0\u7075\u6d3b\u53ef\u63a7\u3002\u5728\u7b2c\u4e00\u9636\u6bb5\u53ef\u4ee5\u5206\u6279\u591a\u6b21\u5199\u5165\u4efb\u610f\u6570\u636e\uff0c\u5e76\u4e14\u4e0d\u53ef\u89c1\u3002\u7b2c\u4e8c\u9636\u6bb5\u5bf9\u4e8b\u52a1\u8fdb\u884c\u63d0\u4ea4\uff0c\u63d0\u4ea4\u6210\u529f\u4e4b\u540e\u6240\u6709\u5199\u5165\u7684\u6570\u636e\u540c\u65f6\u53ef\u89c1\u3002\u4e0b\u9762\u4ee5\u4e00\u4e2a insert sql \u4e3a\u4f8b\uff0c\u63cf\u8ff0\u4e86 2 \u9636\u6bb5\u539f\u5b50\u63d0\u4ea4\u7684\u4e00\u4e2a\u8be6\u7ec6\u6d41\u7a0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9636\u6bb5 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"a: \u5728 kv \u91cc\u5199\u5165\u4e8b\u52a1\u8bb0\u5f55\uff08txn record\uff09\uff0c\u552f\u4e00\u6807\u8bc6\u5f53\u524d\u4e8b\u52a1\uff1b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"b: \u89e3\u6790 insert sql \u5e76\u6267\u884c\uff1b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"c: \u5728\u8fdc\u7aef\u6587\u4ef6\u7cfb\u7edf\u6216\u8005\u5bf9\u8c61\u5b58\u50a8\u5199\u5165\u6570\u636e\u4e4b\u524d\uff0c\u5148\u628a\u8981\u5199\u5165\u6570\u636e\u7684\u4f4d\u7f6e\u4fe1\u606f\u5199\u5165 undo buffer\uff08\u4f9b\u5931\u8d25\u60c5\u51b5\u4e0b\u6e05\u7406\u4f7f\u7528\uff09\uff1b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"d: \u628a\u6570\u636e\u5199\u5165\u5230\u8fdc\u7aef\u6587\u4ef6\u7cfb\u7edf\u6216\u8005\u5bf9\u8c61\u5b58\u50a8\uff1b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"e: \u63d0\u4ea4\u6570\u636e\u7684\u5143\u4fe1\u606f part\uff0c\u5199\u5165\u5230 kv \u4e2d\uff1b"))),(0,l.kt)("li",{parentName:"ul"},"\u9636\u6bb5 2"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u4e8b\u52a1\uff0c\u5e76\u66f4\u65b0\u4e8b\u52a1\u8bb0\u5f55\u7684\u63d0\u4ea4\u65f6\u95f4\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u66f4\u65b0 part \u6570\u636e\u7684\u63d0\u4ea4\u65f6\u95f4\u4e3a\u4e8b\u52a1\u7684\u63d0\u4ea4\u65f6\u95f4\uff08part \u672a\u66f4\u65b0\u63d0\u4ea4\u65f6\u95f4\u4e4b\u524d\uff0c\u9700\u8981\u53cd\u67e5\u4e8b\u52a1\u8bb0\u5f55\u7684\u63d0\u4ea4\u65f6\u95f4\uff09\uff1b")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(36437).Z,width:"2700",height:"1748"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"                                                       \u4e8b\u52a1\u63d0\u4ea4\u8be6\u7ec6\u6d41\u7a0b\u56fe\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Consistency\uff08\u4e00\u81f4\u6027\uff09")),(0,l.kt)("p",null,"ByConity \u9009\u62e9\u7684\u5206\u5e03\u5f0f key-value \u5b58\u50a8\u7cfb\u7edf\uff0cByteKV \u548c Foundation \u5df2\u7ecf\u63d0\u4f9b\u4e86\u4e00\u81f4\u6027\u7684\u652f\u6301\uff0c\u76f4\u63a5\u590d\u7528\u5373\u53ef\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Isolation\uff08\u9694\u79bb\u6027\uff09")),(0,l.kt)("p",null,"ByConity \u5bf9\u7528\u6237\u63d0\u4f9b Read Committed\uff08RC\uff09\u9694\u79bb\u7ea7\u522b\u7684\u652f\u6301\u3002\u6bcf\u4e2a\u4e8b\u52a1\u521d\u59cb\u5316\u7684\u65f6\u5019\u4f1a\u4ece TSO \u670d\u52a1\u83b7\u53d6\u4e00\u4e2a\u65f6\u95f4\u6233\uff08timestamp\uff09\u4f5c\u4e3a\u5176 ID \u548c\u5f00\u59cb\u65f6\u95f4\uff0c\u63d0\u4ea4\u7684\u65f6\u5019\u4f1a\u518d\u4ece TSO \u670d\u52a1\u83b7\u53d6\u4e00\u4e2a\u63d0\u4ea4\u65f6\u95f4\uff0c\u5728\u4e8b\u52a1\u63d0\u4ea4\u7684\u65f6\u5019\u66f4\u65b0 KV \u91cc\u4e8b\u52a1\u8bb0\u5f55\u7684\u63d0\u4ea4\u65f6\u95f4\u5e76\u5f02\u6b65\u66f4\u65b0 part \u7684\u63d0\u4ea4\u65f6\u95f4\u3002\u8bfb\u4e8b\u52a1\u53ef\u4ee5\u8bfb\u53d6\u5230\u5df2\u7ecf\u63d0\u4ea4\u6210\u529f\uff08\u5bf9\u5e94\u4e8b\u52a1\u63d0\u4ea4\u5373\u6210\u529f\uff09\u5e76\u4e14\u63d0\u4ea4\u65f6\u95f4\u5c0f\u4e8e\u8bfb\u4e8b\u52a1\u5f00\u59cb\u65f6\u95f4\u7684 part \u5143\u6570\u636e\u4fe1\u606f\uff0c\u4ece\u800c\u5b9e\u73b0 RC \u8bed\u4e49\u3002\u76f8\u6bd4\u66f4\u52a0\u4e25\u683c\u7684\u9694\u79bb\u7ea7\u522b\uff0cRC \u9694\u79bb\u7ea7\u522b\u53ef\u4ee5\u6700\u5927\u5316\u8bfb\u6027\u80fd\u3002\u800c\u66f4\u4e25\u683c\u7684\u9694\u79bb\u7ea7\u522b\u4f8b\u5982 Serializable Snapshot Isolation\uff08SSI\uff09\uff0c\u8bfb\u53ef\u80fd\u4f1a\u88ab\u5199\u5165 block\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Durability\uff08\u6301\u4e45\u6027\uff09")),(0,l.kt)("p",null,"ByConity \u5143\u6570\u636e\u6301\u4e45\u5230 FoundationDB \u4e2d\uff0c\u5206\u5e03\u5f0f Key-value \u5b58\u50a8\u7684\u7279\u6027\u63d0\u4f9b\u4e86\u6301\u4e45\u5316\u548c\u9ad8\u53ef\u7528\u7684\u4fdd\u969c\u3002"),(0,l.kt)("h2",{id:"\u5e76\u53d1\u63a7\u5236"},"\u5e76\u53d1\u63a7\u5236"),(0,l.kt)("p",null,"ByConity \u5229\u7528\u591a\u7248\u672c\u548c\u9501\u6765\u4fdd\u8bc1\u5e76\u53d1\u8bfb\u5199\u573a\u666f\u4e0b\u6570\u636e\u7684\u6b63\u786e\u6027\u3002ByConity \u9664\u4e86\u6765\u81ea\u7528\u6237\u7684 workload\uff0c\u5185\u90e8\u8fd8\u6709\u540e\u53f0\u4efb\u52a1\uff08merge/alter \u4efb\u52a1\u548c\u552f\u4e00\u952e\u8868\u7684\u53bb\u91cd\u4efb\u52a1\uff09\u7684\u5e76\u53d1\u8bfb\u5199\u9700\u8981\u5904\u7406\u3002ByConity \u9009\u62e9\u4e86 RC \u9694\u79bb\u7ea7\u522b\uff0c\u5bf9\u4e8e\u65b0\u7684\u5199\u5165\uff08\u4f8b\u5982 insert\uff09\uff0c\u7531\u4e8e\u4e0d\u53ef\u89c1\uff0c\u53ef\u4ee5\u65e0\u9501\u6267\u884c\u3002\u5bf9\u4e8e\u5df2\u6709\u6570\u636e\uff0c\u5728\u5e76\u53d1\u8bfb\u5199\u65f6\uff0c\u9700\u8981\u8fdb\u884c\u5e76\u53d1\u63a7\u5236\u3002\u5bf9\u4e8e\u5e76\u53d1\u8bfb\u548c\u5199\u8fd9\u79cd\u573a\u666f\uff0cByConity \u5229\u7528\u591a\u7248\u672c\u89e3\u51b3\u4e86\u8bfb\u548c\u5199\u51b2\u7a81\uff0c\u63d0\u4f9b\u4e86\u8bfb\u5199\u6027\u80fd\u3002\u5bf9\u4e8e\u5e76\u53d1\u5199\u7684\u573a\u666f\uff08\u4f8b\u5982 merge \u548c\u552f\u4e00\u952e\u8868\u7684\u53bb\u91cd\u4efb\u52a1\uff09\uff0c\u5229\u7528\u4e86\u52a0\u9501\u6765\u4fdd\u8bc1\u6570\u636e\u7684\u6b63\u786e\u6027\u3002"),(0,l.kt)("h3",{id:"\u591a\u7248\u672c"},"\u591a\u7248\u672c"),(0,l.kt)("p",null,"\u6bcf\u4e2a part \u7684\u5143\u6570\u636e\u9664\u53bb\u5176\u539f\u6709\u57fa\u672c\u4fe1\u606f\u4e4b\u5916\uff0c\u90fd\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684\u7248\u672c\uff08version\uff09\uff0c\u6bcf\u6b21\u5bf9\u5df2\u6709\u6570\u636e\u8fdb\u884c\u53d8\u66f4\uff0c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u7248\u672c\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5728\u539f\u6709\u6570\u636e\u4e0a\u8fdb\u884c\u66f4\u65b0\u3002\u5bf9\u4e8e RC \u9694\u79bb\u7ea7\u522b\uff0c\u5df2\u7ecf\u5f00\u59cb\u7684\u8bfb\u4e8b\u52a1\uff0c\u4ecd\u7136\u7ee7\u7eed\u8bfb\u53d6\u65e7\u7684\u7248\u672c\uff0c\u65b0\u7248\u672c\u5bf9\u5176\u4e0d\u53ef\u89c1\uff0c\u8fd9\u6837\u8bfb\u548c\u5199\u4e92\u76f8\u4e0d\u5f71\u54cd\uff0c\u6700\u5927\u5316\u8bfb\u5199\u6027\u80fd\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(64403).Z,width:"2902",height:"484"})),(0,l.kt)("h3",{id:"\u9501"},"\u9501"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f KV \u9501")),(0,l.kt)("p",null,"ByConity \u5bf9\u4e8e DDL \u63d0\u4f9b\u4e86\u5168\u5c40 KV \u6392\u4ed6\u9501\u907f\u514d\u5e76\u53d1\u7684\u5bf9 table schema \u8fdb\u884c\u53d8\u66f4\uff0c\u5206\u5e03\u5f0f kv \u9501\u662f\u5168\u5c40\u5171\u4eab\uff0c\u4e0d\u540c\u7684\u8282\u70b9\u90fd\u53ef\u4ee5\u5171\u4eab\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u8bfb\u5199\u9501"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5171\u4eab\u9501\u548c\u6392\u4ed6\u9501"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7b49\u5f85"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e0d\u540c\u7c92\u5ea6")),(0,l.kt)("p",null,"ByConity \u63d0\u4f9b\u4e86\u591a\u7ea7\u7ec6\u7c92\u5ea6 DML \u8bfb\u5199\u9501\u7684\u652f\u6301\uff0cDML \u76f8\u5173\u7684\u4efb\u52a1\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u5728\u4e0d\u540c\u7c92\u5ea6\u6301\u4e0d\u540c\u7c7b\u578b\u7684\u9501\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        Table\n       /      \\\n      bucket   \\\n      /         \\\n   partition   partition\n\n")),(0,l.kt)("h2",{id:"\u5783\u573e\u56de\u6536"},"\u5783\u573e\u56de\u6536"),(0,l.kt)("p",null,"ByConity \u5bf9\u4e8e\u4e0d\u53ef\u89c1\u7684 part \u548c\u7248\u672c\u4f1a\u5b9a\u671f\u8fdb\u884c\u56de\u6536\uff0c\u4f8b\u5982 merge \u4efb\u52a1\u751f\u6210\u65b0\u7684 part \u4e4b\u540e\uff0c\u5bf9\u4e8e\u65e7\u7684 part\uff0c\u5f53\u4e0d\u518d\u88ab\u67e5\u8be2\u5f15\u7528\u4e4b\u540e\uff0c\u5c31\u4f1a\u8fdb\u884c\u56de\u6536\uff0c\u91ca\u653e\u7a7a\u95f4\uff0c\u964d\u4f4e\u6210\u672c\u3002"))}m.isMDXComponent=!0},27415:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/boxcnIQ0kKkzfdE6l3QnZZ31iGb-67025378c3aed94d75829fe30f891205.png"},64403:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/boxcnJmeAgBLo86uZBHIHKbdRhc-7001920c7102836eb91b1e294c3d52de.png"},36437:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/boxcnSsWWnS2sH5qiwBsILZyaNg-e9a60b83384e263f275e957ef7797cc2.png"}}]);