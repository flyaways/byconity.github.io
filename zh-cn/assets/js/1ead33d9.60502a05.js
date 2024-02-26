"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2782],{9613:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>d});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},k=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,c=e.originalType,u=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),p=i(r),b=l,d=p["".concat(u,".").concat(b)]||p[b]||s[b]||c;return r?n.createElement(d,a(a({ref:t},k),{},{components:r})):n.createElement(d,a({ref:t},k))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=r.length,a=new Array(c);a[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var i=2;i<c;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var n=r(4778),l=(r(9496),r(9613));const c={title:"Bucket table \u6700\u4f73\u5b9e\u8df5\u624b\u518c",tags:["Docs"]},a="Bucket table \u8bf4\u660e",o={unversionedId:"advanced-guide/bucket-table-best-practice",id:"version-0.2.0/advanced-guide/bucket-table-best-practice",title:"Bucket table \u6700\u4f73\u5b9e\u8df5\u624b\u518c",description:"\u5728 ByConity \u4e2d\u4f7f\u7528 Bucket table \u65f6\uff0c\u7cfb\u7edf\u4f1a\u4f9d\u636e\u7528\u6237\u5efa\u8868\u8bed\u53e5\u4e2d\u63d0\u4f9b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5217\u3001\u8868\u8fbe\u5f0f\u6574\u7406\u8868\u6570\u636e\uff0c\u5c06\u76f8\u540c\u503c\u7684\u6570\u636e\u805a\u7c07\u5728\u540c\u4e00\u4e2a bucket number \u4e0b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/advanced-guide/bucket-table-best-practice.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/bucket-table-best-practice",permalink:"/zh-cn/docs/0.2.0/advanced-guide/bucket-table-best-practice",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/advanced-guide/bucket-table-best-practice.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Bucket table \u6700\u4f73\u5b9e\u8df5\u624b\u518c",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u540e\u53f0\u4efb\u52a1",permalink:"/zh-cn/docs/0.2.0/advanced-guide/background-task-configuration"},next:{title:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406",permalink:"/zh-cn/docs/0.2.0/advanced-guide/column-based-storage"}},u={},i=[],k={toc:i},p="wrapper";function s(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bucket-table-\u8bf4\u660e"},"Bucket table \u8bf4\u660e"),(0,l.kt)("p",null,"\u5728 ByConity \u4e2d\u4f7f\u7528 Bucket table \u65f6\uff0c\u7cfb\u7edf\u4f1a\u4f9d\u636e\u7528\u6237\u5efa\u8868\u8bed\u53e5\u4e2d\u63d0\u4f9b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5217\u3001\u8868\u8fbe\u5f0f\u6574\u7406\u8868\u6570\u636e\uff0c\u5c06\u76f8\u540c\u503c\u7684\u6570\u636e\u805a\u7c07\u5728\u540c\u4e00\u4e2a bucket number \u4e0b\u3002"),(0,l.kt)("h1",{id:"\u4f7f\u7528-bucket-table-\u7684\u6536\u76ca"},"\u4f7f\u7528 Bucket table \u7684\u6536\u76ca"),(0,l.kt)("p",null,"\u4f7f\u7528 cluster key \u805a\u851f\u6570\u636e\u5728\u5927\u8868\u4e0a\u53ef\u4ee5\u83b7\u5f97\u4ee5\u4e0b\u51e0\u9879\u6536\u76ca\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9488\u5bf9 cluster key \u7684\u70b9\u67e5\u53ef\u4ee5\u8fc7\u6ee4\u6389\u5927\u90e8\u5206\u6570\u636e\uff0c\u964d\u4f4e IO \u91cf\u83b7\u5f97\u66f4\u77ed\u7684\u6267\u884c\u65f6\u95f4\u548c\u66f4\u9ad8\u7684\u5e76\u53d1 QPS"),(0,l.kt)("li",{parentName:"ol"},"\u9488\u5bf9 cluster key \u7684\u805a\u5408\u8ba1\u7b97\uff0c\u8ba1\u7b97\u8282\u70b9\u53ef\u4ee5\u5728\u6570\u636e\u5b50\u96c6\u8fdb\u884c\u9884\u5148\u8ba1\u7b97\uff0c\u5b9e\u73b0\u66f4\u5c0f\u7684\u5185\u5b58\u5360\u7528\u548c\u66f4\u77ed\u7684\u6267\u884c\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ol"},"\u4e24\u5f20\u6216\u8005\u591a\u5f20\u8868\u9488\u5bf9 cluster key \u7684 join \u53ef\u4ee5\u83b7\u5f97 co-located join \u7684\u4f18\u5316\uff0c\u6781\u5927\u7684\u964d\u4f4e shuffle \u6570\u636e\u91cf\u5e76\u5f97\u5230\u66f4\u77ed\u7684\u6267\u884c\u65f6\u95f4")),(0,l.kt)("h1",{id:"\u4ec0\u4e48\u65f6\u5019\u8003\u8651\u4f7f\u7528-bucket-table"},"\u4ec0\u4e48\u65f6\u5019\u8003\u8651\u4f7f\u7528 Bucket table"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8868\u8db3\u591f\u5927\uff0c\u610f\u5473\u7740\u5728\u4e00\u4e2a\u5206\u533a\u4e0b\u7684 parts \u6570\u91cf\u81f3\u5c11\u9700\u8981\u663e\u8457\u591a\u4e8e worker \u6570\u91cf"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u8bed\u53e5\u53ef\u4ee5\u4ece\u4e0a\u8ff0\u6536\u76ca\u70b9\u4e2d\u83b7\u76ca")),(0,l.kt)("h1",{id:"\u5982\u4f55\u9009\u62e9-cluster-key"},"\u5982\u4f55\u9009\u62e9 cluster key"),(0,l.kt)("p",null,"Cluster key \u53ef\u4ee5\u662f\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5217\u3001\u8868\u8fbe\u5f0f\uff0c\u5efa\u8bae\u6700\u591a\u4f7f\u7528 3 \u4e2a\u5b57\u6bb5\uff0c\u66f4\u591a\u7684\u5b57\u6bb5\u901a\u5e38\u4f1a\u5f15\u5165\u8fc7\u9ad8\u7684\u5199\u5165\u4ee3\u4ef7\u4e14\u83b7\u76ca\u8bed\u53e5\u8303\u56f4\u66f4\u5c0f\u3002"),(0,l.kt)("p",null,"\u9009\u62e9\u6b63\u786e\u7684 cluster key \u5bf9\u4e8e\u6027\u80fd\u7684\u5f71\u54cd\u975e\u5e38\u663e\u8457\uff0c\u56e0\u6b64\u9700\u8981\u614e\u91cd\u9009\u62e9\u3002\u901a\u5e38\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u539f\u5219\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7ecf\u5e38\u7528\u4e8e\u76f8\u7b49\u3001IN \u8fc7\u6ee4\u7684\u5217"),(0,l.kt)("li",{parentName:"ol"},"\u5e38\u7528\u7684\u805a\u5408\u5217"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u8868\u7684 join key")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u573a\u666f\u5982\u679c\u5e38\u7528\u7684\u60c5\u51b5\u662f\u4e24\u5217\u7ec4\u5408\uff0c\u6bd4\u5982 a = 1 and b = 2\uff0c\u90a3\u4e48 cluster key \u9009\u62e9\u4e24\u5217\u53ef\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6548\u679c\u3002"),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u9700\u8981\u8003\u8651\u7684\u7ef4\u5ea6\u662f\u5217\u7684 distinct \u503c\u6570\u91cf\uff0c\u9274\u4e8e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u76f8\u540c cluster key \u7684\u6570\u636e\u4f1a\u5f52\u5c5e\u4e8e\u540c\u4e00\u4e2a bucket number"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a bucket number \u4e0b\u7684\u6240\u6709 parts \u4f1a\u53d1\u9001\u5230\u540c\u4e00\u4e2a worker \u4e2d\u8fdb\u884c\u8ba1\u7b97")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u80fd\u5229\u7528\u6240\u6709 worker \u8282\u70b9\u8fdb\u884c\u8ba1\u7b97\uff0cdistinct \u503c\u9700\u8981\u81f3\u5c11\u8d85\u8fc7 worker \u6570\u91cf"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c distinct \u503c\u6570\u91cf\u8f83\u5c0f\uff0c\u504f\u5411\u4e8e\u9009\u62e9\u6700\u5927\u7684 distinct \u503c\uff0c\u6700\u597d\u4e3a worker \u6570\u91cf\u7684\u500d\u6570\uff0c\u4ee5\u5b9e\u73b0\u67e5\u8be2\u65f6\u6570\u636e\u5206\u5e03\u7684\u66f4\u5747\u8861")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8868 test\uff0c\u7528\u6237\u5e38\u7528\u7684\u8fc7\u6ee4\u5217\u662f c1, c2, c3\uff0c\u5217\u76f8\u4e92\u72ec\u7acb"),(0,l.kt)("li",{parentName:"ol"},"worker \u6570\u91cf\u4e3a 30"),(0,l.kt)("li",{parentName:"ol"},"distinct c1 \u4e3a 6"),(0,l.kt)("li",{parentName:"ol"},"distinct c2 \u4e3a 8"),(0,l.kt)("li",{parentName:"ol"},"distinct c3 \u4e3a 5")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa 3 \u5217\u5355\u72ec\u7684 distinct \u90fd\u5c0f\u4e8e worker \u6570\u91cf\u3002disticnt c1, c2 \u4e3a 48 \u867d\u7136\u5927\u4e8e worker \u6570\u91cf\uff0c\u4f46\u662f\u4e0d\u662f worker \u6570\u91cf\u7684\u500d\u6570\uff0c\u56e0\u6b64\u4e5f\u4e0d\u662f\u5408\u9002\u7684 cluster key\u3002distinct c1, c3 \u4e3a 30 \u6b63\u597d\u4e3a worker \u6570\u91cf\u7684 1 \u500d\uff0c\u4f46\u8003\u8651\u6570\u636e\u5206\u5e03\u7684\u5747\u8861\u6027\uff0c\u9009\u62e9\u66f4\u5927\u7684 distinct c1, c2, c3 \u4e3a 8 \u500d worker \u6570\u91cf\u66f4\u4e3a\u5408\u9002"),(0,l.kt)("h1",{id:"\u5982\u4f55\u9009\u62e9-bucket-number"},"\u5982\u4f55\u9009\u62e9 bucket number"),(0,l.kt)("p",null,"\u9274\u4e8e\u5728\u4e00\u4e2a\u5206\u533a\u5185"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u884c\u6570\u636e\u4f1a\u4f9d\u636e cluster key \u7684\u503c\u6309 ",(0,l.kt)("inlineCode",{parentName:"li"},"% BUCKETS")," \u8ba1\u7b97\u5f97\u5230\u76f8\u5e94 bucket number"),(0,l.kt)("li",{parentName:"ol"},"\u540c\u4e00\u4e2a bucket number \u7684 parts \u5728\u67e5\u8be2\u65f6\u4f1a\u53d1\u9001\u5230\u540c\u4e00\u4e2a worker \u8282\u70b9\u4e0a\u8ba1\u7b97")),(0,l.kt)("p",null,"\u56e0\u6b64\u9009\u62e9\u4e00\u4e2a\u5408\u9002\u7684 bucket number \u5bf9\u4e8e\u5b58\u50a8\u548c\u67e5\u8be2\u90fd\u6709\u91cd\u5927\u7684\u5f71\u54cd\uff0c\u4e00\u822c\u6709\u5982\u4e0b\u539f\u5219\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u786e\u4fdd bucket number \u4e3a worker \u6570\u91cf\u7684\u500d\u6570\uff0c\u8fd9\u662f\u4e3a\u4e86\u4fdd\u8bc1\u67e5\u8be2\u65f6\u5206\u914d\u7684\u5747\u8861\uff0c\u4e00\u822c\u5efa\u8bae\u8bbe\u7f6e\u4e3a 1 \u500d\u6216\u8005 2 \u500d\uff08\u9884\u7559\u6269\u5145 worker \u8282\u70b9\u4f59\u5ea6\uff09worker \u8282\u70b9\u6570\u91cf\u5373\u53ef"),(0,l.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u4e00\u4e2a\u5206\u533a\u4e0b\u4e00\u4e2a bucket number \u4e2d\u6709\u8db3\u591f\u591a\u7684\u6570\u636e\uff0c\u4e0d\u8981\u751f\u6210\u592a\u5c0f\u7684 parts\uff0c\u56e0\u6b64\u5efa\u8bae\u5982\u679c\u8868\u6bd4\u8f83\u5c0f\uff0c\u81f3\u5c11\u786e\u4fdd\u4e00\u4e2a\u5206\u533a\u7684\u4e00\u4e2a bucket number parts \u5927\u5c0f\u8d85\u8fc7 1GB\u3002\u4e0d\u8981\u8bbe\u7f6e\u8fc7\u9ad8\u7684 bucket nubmer\uff0c\u53ef\u4ee5\u51fa\u73b0\u5c0f\u4e8e worker \u6570\u91cf\u7684 bucket number")),(0,l.kt)("h1",{id:"\u5982\u4f55\u51b3\u5b9a\u662f\u5426\u8981\u4fee\u6539-cluster-by-\u5b9a\u4e49"},"\u5982\u4f55\u51b3\u5b9a\u662f\u5426\u8981\u4fee\u6539 cluster by \u5b9a\u4e49"),(0,l.kt)("p",null,"\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u56e0\u4e3a\u6570\u636e\u53d8\u5316\u3001\u67e5\u8be2\u6a21\u5f0f\u53d8\u5316\u3001worker \u8282\u70b9\u6570\u91cf\u53d8\u5316\uff0c\u7528\u6237\u53ef\u80fd\u4f1a\u60f3\u8981\u91cd\u65b0\u8bbe\u7f6e cluster key \u548c bucket number\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u8003\u8651\u5b9e\u65bd\u4fee\u6539\u7684\u4ee3\u4ef7\uff0c\u6743\u8861\u662f\u5426\u9700\u8981\u4fee\u6539\u5df2\u7ecf\u4f55\u65f6\u4fee\u6539\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 cluster by \u5b9a\u4e49\u9700\u8981\u5bf9\u73b0\u5b58\u5df2\u6709\u6570\u636e\u505a recluster\uff0c\u9700\u8981\u8bc4\u4f30\u73b0\u5b58\u6570\u636e\u91cf\u4f30\u7b97 recluster \u6267\u884c\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ol"},"recluster \u671f\u95f4\u73b0\u5b58\u6570\u636e\u7684\u67e5\u8be2\u4f1a\u56de\u9000\u4e3a\u4e00\u5f20\u666e\u901a\u8868\uff0c\u6240\u6709 bucket table \u7684\u6536\u76ca\u6682\u65f6\u90fd\u5931\u53bb"),(0,l.kt)("li",{parentName:"ol"},"Recluster \u4f1a\u5360\u7528 write worker \u7684\u8d44\u6e90\uff0c\u9700\u8981\u8bc4\u4f30\u5f53\u524d cnch \u96c6\u7fa4\u662f\u5426\u6709\u72ec\u7acb\u7684 write worker \u4ee5\u53ca\u5f53\u524d\u8d1f\u62c5\uff0c\u8bc4\u4f30\u5bf9\u73b0\u6709\u67e5\u8be2\u3001merge \u7b49\u4efb\u52a1\u7684\u5f71\u54cd")),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u4fee\u6539 cluster by \u5b9a\u4e49\u7684\u60c5\u51b5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 cluster key"),(0,l.kt)("li",{parentName:"ol"},"\u6b64\u65f6\u610f\u5473\u7740\u5f53\u524d\u7684\u6570\u636e\u5df2\u7ecf\u65e0\u6cd5\u83b7\u5f97 bucket table \u6536\u76ca\uff0c\u56e0\u6b64\u65e0\u9700\u8003\u8651 recluster \u671f\u95f4\u5931\u53bb\u7684\u6536\u76ca"),(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u8bc4\u4f30 recluster \u4efb\u52a1\u5bf9\u4e8e\u73b0\u6709\u4efb\u52a1\u7684\u5f71\u54cd\u5224\u65ad\u662f\u5426\u53ef\u4ee5\u6267\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 bucket number"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u524d bucket table \u7684\u6536\u76ca\u4ecd\u5728\uff0c\u56e0\u6b64\u9700\u8981\u548c\u4e1a\u52a1\u65b9\u786e\u8ba4\u53ef\u4ee5\u63a5\u53d7\u7684\u6027\u80fd\u56de\u9000\u7684\u65f6\u95f4\uff0c\u8fdb\u4e00\u6b65\u6839\u636e recluster \u65f6\u95f4\u5224\u65ad\u662f\u5426\u53ef\u4ee5\u6267\u884c\uff0c\u4ee5\u53ca\u786e\u5b9a\u5f00\u59cb\u6267\u884c\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ol"},"\u4e5f\u9700\u8981\u8bc4\u4f30 recluster \u4efb\u52a1\u5bf9\u4e8e\u73b0\u6709\u4efb\u52a1\u7684\u5f71\u54cd\u5224\u65ad\u662f\u5426\u53ef\u4ee5\u6267\u884c")))}s.isMDXComponent=!0}}]);