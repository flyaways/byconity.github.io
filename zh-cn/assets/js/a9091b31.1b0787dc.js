"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3409],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(4778),a=(r(9496),r(9613));const i={title:"\u5bfc\u5165\u8c03\u4f18",tags:["Docs"]},l="\u5bfc\u5165\u8c03\u4f18",o={unversionedId:"advanced-guide/import-optimisation",id:"version-0.2.0/advanced-guide/import-optimisation",title:"\u5bfc\u5165\u8c03\u4f18",description:"\u76ee\u524d CNCH \u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f\u6709\u5982\u4e0b\u51e0\u79cd\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/advanced-guide/import-optimisation.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/import-optimisation",permalink:"/zh-cn/docs/0.2.0/advanced-guide/import-optimisation",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/advanced-guide/import-optimisation.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"\u5bfc\u5165\u8c03\u4f18",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u590d\u6742\u67e5\u8be2\u6a21\u578b\u548c\u6267\u884c\u8c03\u4f18",permalink:"/zh-cn/docs/0.2.0/advanced-guide/complex-query-model-and-optimisation"},next:{title:"Column ingestion query",permalink:"/zh-cn/docs/0.2.0/advanced-guide/ingest-column"}},u={},p=[{value:"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18",id:"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18",level:2},{value:"Dumper \u65b9\u5f0f\u8c03\u4f18",id:"dumper-\u65b9\u5f0f\u8c03\u4f18",level:2}],c={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5bfc\u5165\u8c03\u4f18"},"\u5bfc\u5165\u8c03\u4f18"),(0,a.kt)("h1",{id:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f"},"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f"),(0,a.kt)("p",null,"\u76ee\u524d CNCH \u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f\u6709\u5982\u4e0b\u51e0\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"INSERT INFILE"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u5408\u5df2\u7ecf\u751f\u6210\u597d\u6570\u636e\u6587\u4ef6\u7684\u60c5\u51b5\uff0c\u5728\u6570\u636e\u91cf\u8f83\u5c11\u7684\u60c5\u51b5\u53ef\u4ee5\u76f4\u63a5\u8bfb\u53d6\u8fdc\u7a0b/\u672c\u5730\u7684\u6570\u636e\u6587\u4ef6\u5bfc\u5165 CNCH\uff0c\u6570\u636e\u91cf\u5927\u7684\u60c5\u51b5(\u8d85\u8fc7\u6570 GB)\u4e0b\u5efa\u8bae\u8d70 PartWriter \u548c Attach \u7684\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"INSERT VALUES"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u5408\u4e34\u65f6\u63d2\u5165\u5c11\u91cf\u7684\u6570\u636e\u7528\u6765\u6d4b\u8bd5"),(0,a.kt)("li",{parentName:"ul"},"INSERT SELECT"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u5408\u9700\u8981\u4fdd\u5b58\u67d0\u5f20\u8868\u7ed3\u679c\u5e76\u4f9b\u540e\u7eed\u67e5\u8be2\u7684\u60c5\u51b5"),(0,a.kt)("li",{parentName:"ul"},"Dumper&Attach"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u5408\u4ece\u672c\u5730\u7248\u8fc1\u79fb\u5230 CNCH \u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u76f4\u63a5\u5c06\u6574\u4e2a\u96c6\u7fa4\u7684\u6570\u636e\u76f4\u63a5\u7528 Dumper \u5199\u5165 HDFS \u4e2d\uff0c\u518d\u5229\u7528 Attach \u5c06\u8fd9\u4e9b\u6570\u636e\u76f4\u63a5\u79fb\u52a8\u5230 CNCH \u4e2d\u5e76\u8fdb\u884c\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"PartWriter&Attach"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6570\u636e\u91cf\u5927\u4e14\u6587\u4ef6\u6570\u91cf\u591a\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u5229\u7528 Spark \u7b49\u4efb\u52a1\u7528 PartWriter \u5c06\u539f\u59cb\u7684\u6587\u4ef6\u751f\u6210\u65b0\u7684 Part \u6587\u4ef6\uff0c\u5e76\u5199\u5165 HDFS \u4e2d\uff0c\u968f\u540e\u53ef\u4ee5\u5229\u7528 Attach \u529f\u80fd\u5c06\u6570\u636e\u79fb\u52a8\u5230 CNCH \u4e2d\u5e76\u8fdb\u884c\u67e5\u8be2")),(0,a.kt)("h1",{id:"\u8c03\u4f18\u624b\u6bb5"},"\u8c03\u4f18\u624b\u6bb5"),(0,a.kt)("h2",{id:"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18"},"\u76f4\u63a5\u5199\u5165\u65b9\u5f0f\u8c03\u4f18"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 INSERT VALUES, INSERT INFILE \u6216\u8005 PartWriter \u5de5\u5177\u5199\u5165\u65f6\uff0c\u6700\u540e\u751f\u6210\u7684 Part \u6570\u91cf\u4f1a\u5f71\u54cd\u5199\u5165 HDFS \u7684\u6b21\u6570\u8fdb\u800c\u5f71\u54cd\u5199\u5165\u6574\u4f53\u7684\u8017\u65f6\uff0c\u56e0\u6b64\u5e94\u5f53\u5c3d\u91cf\u51cf\u5c11 Part \u7684\u6570\u91cf\u3002\u76f4\u63a5\u5199\u5165\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u90e8\u5206\u6587\u4ef6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u8fd9\u90e8\u5206\u6570\u636e\u6309\u7167 PartitionBy \u8fdb\u884c\u5207\u5206"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u8fd9\u90e8\u5206\u6570\u636e\u6309\u7167 ClusterBy \u8fdb\u884c\u5207\u5206"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5207\u5206\u5b8c\u7684\u6570\u636e\u5199\u6210\u65b0\u7684 Part \u5e76\u5199\u5165 HDFS")),(0,a.kt)("p",null,"\u8c03\u4f18\u624b\u6bb5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u51cf\u5c11 Part \u7684\u6570\u91cf\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u6587\u4ef6\u4e2d\u5177\u6709\u76f8\u540c\u7684\u5206\u533a\u548c Bucket \u7684\u6570\u636e\u6392\u5217\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u6bcf\u6b21\u8bfb\u53d6\u4e00\u4e9b\u65b0\u7684\u6570\u636e\u540e\uff0c\u751f\u6210\u7684 Part \u6570\u91cf\u4f1a\u5c3d\u53ef\u80fd\u5c11\u3002\u53ef\u4ee5\u5c06\u6570\u636e\u6309\u7167\u5206\u533a\u76f8\u540c\uff0c\u5206\u533a\u5185 Bucket \u76f8\u540c\u7684\u8981\u6c42\u8fdb\u884c\u6392\u5e8f\uff0cBucket \u7684\u8ba1\u7b97\u89c4\u5219\u662f\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a SPLIT_NUMBER\uff0c\u4f1a\u5c06 ClusterByKey \u6240\u4f7f\u7528\u7684\u5217\u8ba1\u7b97 SipHash \u540e\u5bf9 BucketNumber \u53d6\u6a21\u5f97\u5230 BucketNumber"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86 SPLIT_NUMBER"),(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97 SplitValue"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c ClusterBy \u67d0\u4e00\u5217\uff0c\u5229\u7528 dtspartition \u51fd\u6570\u8ba1\u7b97\u51fa\u5bf9\u5e94\u7684 SplitValue"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c ClusterBy \u591a\u5217\uff0c\u5219\u5c06\u8fd9\u4e9b\u5217\u5229\u7528 SipHash \u8ba1\u7b97\u51fa\u5bf9\u5e94\u7684 SplitValue"),(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97 BucketNumber"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f WithRange\uff0c\u5219\u7528 SplitValue ","*"," BucketCount / SplitNumber \u8ba1\u7b97\u5bf9\u5e94 BucketNumber"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u662f WithRange\uff0c\u5219\u7528 SplitValue % BucketCount \u8ba1\u7b97\u5bf9\u5e94 BucketNumber")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bfb\u53d6\u6587\u4ef6\u65f6"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6bcf\u884c\u6570\u636e\u5927\u5c0f\u5e76\u4e0d\u5927\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u5927 max_insert_block_size \u6765\u4e00\u6b21\u8bfb\u53d6\u66f4\u5927\u7684 Block\uff0c\u4ece\u800c\u751f\u6210\u66f4\u5927\u7684 Part"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u8bfb\u53d6\u7684\u6587\u4ef6\u4e0d\u662f HDFS/CFS \u7684\uff0c\u540c\u65f6\u4f7f\u7528\u901a\u914d\u7b26\u5339\u914d\u4e86\u591a\u4e2a\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u540c\u65f6\u8c03\u5927 min_insert_block_size_rows \u548c min_insert_block_size_bytes")),(0,a.kt)("h2",{id:"dumper-\u65b9\u5f0f\u8c03\u4f18"},"Dumper \u65b9\u5f0f\u8c03\u4f18"),(0,a.kt)("p",null,"Dumper \u8fc1\u79fb\u7684\u65f6\u5019\u53ef\u4ee5\u4e00\u6b21\u6307\u5b9a\u4e00\u5f20\u8868\u53ca\u5176\u4e2d\u7684\u90e8\u5206\u5206\u533a\uff0c\u5c06\u5176\u5199\u5230 HDFS \u4e2d\uff0c\u8fd9\u90e8\u5206\u8017\u65f6\u4e0e\u8868\u7684\u6570\u636e\u5927\u5c0f\u4ee5\u53ca Part \u6570\u91cf\u6709\u5173\uff0c\u53ef\u4ee5\u4f7f\u7528 parallel \u53c2\u6570\u8c03\u5927\u4e0a\u4f20 Part \u7684\u5e76\u53d1\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u7b49\u5f85 Part \u5728\u672c\u5730\u5148 Merge \u7684\u6bd4\u8f83\u5145\u5206\u540e\u518d\u4f7f\u7528 Dumper \u8fdb\u884c\u4e0a\u4f20\u3002"))}s.isMDXComponent=!0}}]);