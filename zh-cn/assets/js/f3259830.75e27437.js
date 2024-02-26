"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7362],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),k=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=k(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=k(a),m=n,g=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var k=2;k<l;k++)i[k]=a[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var r=a(4778),n=(a(9496),a(9613));const l={title:"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1",tags:["Docs"]},i="\u7ba1\u7406\u540e\u53f0\u4efb\u52a1",o={unversionedId:"basic-guide/background-task-management",id:"version-0.2.0/basic-guide/background-task-management",title:"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1",description:"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/background-task-management.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/background-task-management",permalink:"/zh-cn/docs/0.2.0/basic-guide/background-task-management",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/basic-guide/background-task-management.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"URLs",permalink:"/zh-cn/docs/0.2.0/sql-syntax/urls"},next:{title:"\u8fde\u63a5\u5ba2\u6237\u7aef",permalink:"/zh-cn/docs/0.2.0/basic-guide/client-connection"}},u={},k=[{value:"\u5e38\u7528\u540e\u53f0\u4efb\u52a1",id:"\u5e38\u7528\u540e\u53f0\u4efb\u52a1",level:2},{value:"MergeMutate \u540e\u53f0\u4efb\u52a1",id:"mergemutate-\u540e\u53f0\u4efb\u52a1",level:2},{value:"Merge \u4efb\u52a1 Part \u7684\u9009\u62e9",id:"merge-\u4efb\u52a1-part-\u7684\u9009\u62e9",level:3},{value:"\u4efb\u52a1\u8c03\u5ea6\u7ba1\u7406",id:"\u4efb\u52a1\u8c03\u5ea6\u7ba1\u7406",level:3},{value:"\u5fc3\u8df3\u673a\u5236",id:"\u5fc3\u8df3\u673a\u5236",level:3},{value:"GC \u540e\u53f0\u4efb\u52a1",id:"gc-\u540e\u53f0\u4efb\u52a1",level:2},{value:"Part \u53ef\u89c1\u6027\u5224\u65ad",id:"part-\u53ef\u89c1\u6027\u5224\u65ad",level:3},{value:"GC Task",id:"gc-task",level:3},{value:"CONSUMER \u4efb\u52a1",id:"consumer-\u4efb\u52a1",level:2},{value:"KafkaConsumeManager",id:"kafkaconsumemanager",level:3},{value:"KafkaConsumer",id:"kafkaconsumer",level:3},{value:"Exactly-Once",id:"exactly-once",level:3},{value:"\u81ea\u52a8\u5bb9\u9519\u5b9e\u73b0",id:"\u81ea\u52a8\u5bb9\u9519\u5b9e\u73b0",level:3},{value:"\u4fee\u6539\u6d88\u8d39\u53c2\u6570",id:"\u4fee\u6539\u6d88\u8d39\u53c2\u6570",level:3},{value:"\u624b\u52a8\u542f\u505c\u6d88\u8d39",id:"\u624b\u52a8\u542f\u505c\u6d88\u8d39",level:3},{value:"\u63a7\u5236\u540e\u53f0\u4efb\u52a1",id:"\u63a7\u5236\u540e\u53f0\u4efb\u52a1",level:2},{value:"\u5e38\u89c1\u62a5\u9519",id:"\u5e38\u89c1\u62a5\u9519",level:2}],c={toc:k},p="wrapper";function s(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1"},"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1"),(0,n.kt)("p",null,"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b"),(0,n.kt)("p",null,"\u6587\u6863\u7ed3\u6784\uff1a\u6559\u7a0b\u76ee\u7684\uff0c\u524d\u7f6e\u51c6\u5907\uff0c\u5206\u6b65\u9aa4\u8bb2\u89e3\u539f\u7406 & \u793a\u4f8b\uff0c\u76f8\u5173\u6587\u6863\u63a8\u8350\uff1b"),(0,n.kt)("p",null,"\u5185\u5bb9\u63d0\u8981\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5e38\u89c1\u7684\u540e\u53f0\u4efb\u52a1\u6709\u54ea\u4e9b\uff0c\u5206\u522b\u662f\u4ec0\u4e48\u4f5c\u7528"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u4f55\u624b\u5de5\u542f\u52a8\u548c\u7ec8\u6b62\u540e\u53f0\u4efb\u52a1"),(0,n.kt)("li",{parentName:"ol"},"\u5e38\u89c1\u62a5\u9519\u5e94\u8be5\u5982\u4f55\u5904\u7406")),(0,n.kt)("p",null,"ByConity \u590d\u7528\u4e86",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/"},"\u793e\u533a ClickHouse MergeTree")," \u7684\u7ecf\u5178\u8bbe\u8ba1\uff0c\u610f\u5473\u7740\u5728\u6570\u636e\u5199\u5165\u65f6\u4ee5 Part \u7c92\u5ea6\u8fdb\u884c\u5b58\u50a8\uff0c\u5e76\u4fdd\u8bc1\u6bcf\u4e2a Part \u5185\u90e8\u7684\u6570\u636e\u6709\u5e8f\u6027\uff0c\u6267\u884c\u67e5\u8be2\u65f6\u5e76\u884c\u5904\u7406\u591a\u4e2a Part\u3002\u540e\u53f0 Merge \u7ebf\u7a0b\u5c06\u591a\u4e2a Part \u4e0d\u65ad\u5408\u5e76\u6210\u66f4\u5927\u7684 Part\uff0c\u4e0d\u4ec5\u80fd\u51cf\u5c11 Part \u6570\u91cf\uff0c\u4e5f\u80fd\u5b9e\u73b0\u66f4\u5927\u8303\u56f4\u7684\u6570\u636e\u6709\u5e8f\u6027\uff0c\u662f\u6301\u7eed\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u7684\u5173\u952e\u64cd\u4f5c\u3002"),(0,n.kt)("h2",{id:"\u5e38\u7528\u540e\u53f0\u4efb\u52a1"},"\u5e38\u7528\u540e\u53f0\u4efb\u52a1"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MergeMutate \u540e\u53f0\u4efb\u52a1\uff1a"),"\u7531\u4e8e ByConity \u662f\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u67b6\u6784\uff0cPart \u4e0d\u518d\u5c5e\u4e8e\u67d0\u4e2a\u56fa\u5b9a\u7684\u8282\u70b9\uff0c\u6bcf\u4e2a Part \u53ef\u4ee5\u88ab\u4efb\u610f\u7684\u8ba1\u7b97\u8282\u70b9\u5904\u7406\uff0c\u56e0\u6b64\u6bcf\u4e2a\u8ba1\u7b97\u8282\u70b9\u5e76\u4e0d\u50cf\u793e\u533a ClickHouse \u4e00\u6837\u8fd0\u884c\u4e13\u95e8\u7684 Merge \u548c Mutate \u7ebf\u7a0b\u3002\u53d6\u800c\u4ee3\u4e4b\u5730\uff0c\u6211\u4eec\u5728 Server \u7ec4\u4ef6\u4e0a\u4e3a\u6bcf\u4e2a\u8868\u521b\u5efa\u4e00\u4e2a Merge \u548c Mutate \u540e\u53f0\u4efb\u52a1\uff0c\u7531\u8be5\u4efb\u52a1\u6765\u7edf\u4e00\u7ba1\u7406\u548c\u8c03\u5ea6\u5bf9\u5e94\u8868\u7684\u6240\u6709 Merge \u548c Mutate \u4efb\u52a1\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GC","*","*"),"\u540e\u53f0\u4efb\u52a1\uff1a","*","*","\u628a\u591a\u4e2a Part \u5408\u5e76\u6210\u4e00\u4e2a\u65b0\u7684 Part\uff0c\u610f\u5473\u7740\u539f\u6709\u7684 Part \u5c06\u4e0d\u518d\u88ab\u4f7f\u7528\uff0c\u53ca\u65f6\u5220\u9664\u8fd9\u4e9b\u88ab\u6dd8\u6c70\u7684 Part \u6709\u52a9\u4e8e\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\u3002\u4e3a\u6b64\u6211\u4eec\u4e3a\u6bcf\u4e2a\u8868\u8fd0\u884c\u4e00\u4e2a\u4e13\u95e8\u7684 GC\uff08\u5783\u573e\u56de\u6536 Garbage Collection\uff09\u540e\u53f0\u4efb\u52a1\uff0c\u8d1f\u8d23\u8be5\u8868\u7684\u8fc7\u671f Part \u7684\u53d1\u73b0\u548c\u5220\u9664\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CONSUMER \u540e\u53f0\u4efb\u52a1\uff1a"),"\u57fa\u4e8e ByConity \u7684\u4e91\u539f\u751f\u65b0\u67b6\u6784\uff0c\u5728\u5b9e\u65f6\u5bfc\u5165\u6d88\u8d39\uff08aka CnchKafka\uff09\u4e0a\u505a\u4e86\u65b0\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6bcf\u5f20 Kafka \u6d88\u8d39\u8868\u5728 server \u6bb5\u5e38\u9a7b\u6267\u884c\u4e00\u4e2a CONSUMER \u540e\u53f0\u4efb\u52a1\uff08ConsumeManager\uff09\uff1b"),(0,n.kt)("li",{parentName:"ul"},"CONSUMER \u540e\u53f0\u4efb\u52a1\u8d1f\u8d23\u8bfb\u53d6 Kafka \u5143\u4fe1\u606f\uff0c\u5e76\u5c06 partition \u5206\u914d\u7ed9\u5404\u4e2a consumer task\uff0c\u7136\u540e\u5c06 task \u4efb\u52a1\u5206\u53d1\u5230 worker \u8282\u70b9\u6267\u884c\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u540c\u65f6\uff0cCONSUMER \u4efb\u52a1\u9700\u8981\u7ef4\u6301\u4e0e task \u7684\u5fc3\u8df3\uff0c\u4fdd\u8bc1\u6bcf\u4e2a consumer task \u5904\u4e8e\u6b63\u5e38\u7684\u5de5\u4f5c\u72b6\u6001\u3002")),(0,n.kt)("p",null,"\u5728\u8bbe\u8ba1\u4e0a\uff0cMerge \u548c GC \u662f\u4e24\u4e2a\u72ec\u7acb\u7684\u8fc7\u7a0b\u3002\u6211\u4eec\u5728\u4e00\u4e2a Merge \u4efb\u52a1\u5b8c\u6210\u4e4b\u540e\uff0c\u4e0d\u4f1a\u7acb\u5373\u5c06\u65e7 Part \u5220\u9664\uff0c\u800c\u662f\u5bf9\u5e94\u7684\u4e3a\u6bcf\u4e2a\u65e7 Part \u751f\u6210\u4e00\u4e2a\u6dd8\u6c70\u6807\u8bb0\uff0c\u7b49\u5f85\u540e\u7eed GC \u4efb\u52a1\u7edf\u4e00\u5904\u7406\u3002\u8fd9\u6837\u7684\u8bbe\u8ba1\u80fd\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4fdd\u6301 Part \u751f\u547d\u5468\u671f\u7684\u4e00\u81f4\u6027\uff0c\u67e5\u8be2\u6267\u884c\u8fc7\u7a0b\u4e0d\u4f1a\u51fa\u73b0\u201c\u6b63\u5728\u4f7f\u7528\u4e00\u4e2a\u88ab\u5220\u9664\u7684 Part\u201d\u7684\u4e0d\u4e00\u81f4\u884c\u4e3a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u5927\u91cf\u96f6\u788e\u7684\u5143\u6570\u636e\u548c\u5b58\u50a8\u8bbf\u95ee\u64cd\u4f5c\u3002Merge \u5b8c\u6210\u65f6\u7acb\u5373\u5220\u9664\u65e7 Part \u610f\u5473\u7740\u5927\u91cf\u96f6\u788e\u7684 IO \u64cd\u4f5c\uff0c\u4f7f\u5f97\u64cd\u4f5c\u53d8\u5f97\u4f4e\u6548\uff0c\u4e5f\u5bb9\u6613\u5f71\u54cd\u5176\u4ed6\u6d41\u7a0b\u7684\u6b63\u5e38\u6267\u884c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u7b80\u5355\u7684\u5b9e\u73b0\u3002\u65e0\u9700\u8fc7\u591a\u8003\u8651 Merge \u4efb\u52a1\u72b6\u6001\u548c Part \u72b6\u6001\u95f4\u7684\u4e00\u81f4\u6027\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1730).Z,width:"852",height:"408"})),(0,n.kt)("p",null,"\u56fe X-1"),(0,n.kt)("h2",{id:"mergemutate-\u540e\u53f0\u4efb\u52a1"},"MergeMutate \u540e\u53f0\u4efb\u52a1"),(0,n.kt)("p",null,"MergeMutate \u540e\u53f0\u4efb\u52a1\u4e3b\u8981\u8d1f\u8d23\uff1a\u9009\u62e9\u5408\u9002\u7684 Part \u751f\u6210\u5bf9\u5e94\u7684 ",(0,n.kt)("strong",{parentName:"p"},"Merge \u4efb\u52a1(Merge Task)"),"\u3001\u9009\u62e9\u5408\u9002\u7684 part \u751f\u6210 ",(0,n.kt)("strong",{parentName:"p"},"Mutate \u4efb\u52a1(Mutate Task)"),"\uff0c\u5e76\u5c06\u751f\u6210\u7684 Task \u4e0b\u53d1\u7ed9\u5408\u9002\u7684 Worker \u6267\u884c\u4ee5\u53ca\u6700\u7ec8\u63d0\u4ea4\u548c\u66f4\u65b0 Part \u72b6\u6001\u3002"),(0,n.kt)("p",null,"Merge \u548c Mutate \u5b9e\u9645\u4e0a\u662f\u4e24\u79cd\u4e0d\u540c\u7684\u4efb\u52a1\u3002"),(0,n.kt)("p",null,"Merge \u4efb\u52a1\u662f\u9009\u62e9\u4e00\u4e9b\u8f83\u5c0f parts \u5408\u6210\u4e00\u4e2a\u6bd4\u8f83\u5927\u7684 part\uff0c\u4ee5\u51cf\u5c11\u67e5\u8be2\u65f6\u8bbf\u95ee\u7684\u6587\u4ef6\u6570\u91cf\uff0c\u4ece\u800c\u964d\u4f4e\u67e5\u8be2\u6240\u9700\u8981\u7684\u65f6\u95f4\u3002"),(0,n.kt)("p",null,"Mutate \u4efb\u52a1\u5219\u662f\u5bf9 part \u4e2d\u7684\u67d0\u4e9b\u5217\u6267\u884c\u53d8\u66f4(Modify column, Drop column \u7b49)\u3002Mutate \u4efb\u52a1\u7531 Alter query \u751f\u6210\u7684\uff0c\u5bf9\u4e8e\u4e00\u4e2a Alter query\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u62c6\u5206\u6210\u4e24\u90e8\u5206\uff0c\u4e00\u662f\u4fee\u6539\u8868\u7684 schema \u64cd\u4f5c\uff0c\u4e8c\u662f\u5982\u679c\u9700\u8981\u5bf9\u6570\u636e\u505a\u53d8\u66f4\uff0c\u5219\u4f1a\u751f\u6210\u4e00\u4e2a Mutate Task \u7531\u540e\u53f0\u4efb\u52a1\u6267\u884c\u6570\u636e\u4fee\u6539\u64cd\u4f5c\u3002"),(0,n.kt)("h3",{id:"merge-\u4efb\u52a1-part-\u7684\u9009\u62e9"},"Merge \u4efb\u52a1 Part \u7684\u9009\u62e9"),(0,n.kt)("p",null,"ByConity \u4ece\u8bbe\u8ba1\u4e4b\u521d\u5c31\u8981\u6c42\u80fd\u7528\u4e00\u5957\u7cfb\u7edf\u540c\u65f6\u5904\u7406\u4e0d\u540c\u573a\u666f\u548c\u4e0d\u540c\u89c4\u6a21\u7684\u4e1a\u52a1\uff1a\u5b9e\u65f6\u8868\u548c\u79bb\u7ebf\u8868\u5171\u5b58\u3001\u8d85\u5927\u89c4\u6a21\u8868\u548c\u5c0f\u8868\u5171\u5b58\u3001\u5bbd\u8868\u548c\u7a84\u8868\u5171\u5b58\u7b49\u3001\u590d\u6742\u5b57\u6bb5\u548c\u7b80\u5355\u5b57\u6bb5\u5171\u5b58\u3002\u8fd9\u6837\u590d\u6742\u7684\u5e94\u7528\u573a\u666f\u610f\u5473\u7740\u5404\u4e2a\u8868\u7684 Part \u5728\u5927\u5c0f\u3001\u65f6\u6548\u6027\u3001\u6709\u5e8f\u6027\u7b49\u5404\u65b9\u9762\u90fd\u6ca1\u6709\u7edf\u4e00\u7684\u89c4\u5f8b\u53ef\u5faa\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e86\u4e00\u4e2a\u81ea\u9002\u5e94\u7684 Part \u9009\u62e9\u7b56\u7565\u3002\u5176\u5927\u81f4\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e2a\u5206\u533a\uff08Partition\uff09\u7ef4\u62a4\u5176\u6700\u65b0\u7684\u6570\u636e\u5199\u5165\u65f6\u95f4\u3001Part \u7684\u603b\u6570\u91cf\u548c\u603b\u5927\u5c0f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9996\u5148\u4ece\u6240\u6709\u5206\u533a\u4e2d\u9009\u62e9\u4e00\u6279\u5206\u533a\uff0c\u7528\u6237\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u8868\u6307\u5b9a\u81ea\u5df1\u503e\u5411\u7684\u7b56\u7565\uff1a\u6309\u5199\u5165\u65f6\u95f4\u6392\u5e8f\uff1b\u6309 Part \u6570\u91cf\u6392\u5e8f\u6216\u8f6e\u8bad\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u9009\u51fa\u7684\u6bcf\u4e2a\u5206\u533a\uff0c\u626b\u63cf\u5176\u6240\u6709 Part\uff0c\u6309\u7167 Part \u7684\u884c\u6570\u3001\u5927\u5c0f\u3001\u5199\u5165\u65f6\u95f4\u7b49\u4fe1\u606f\uff0c\u8ba1\u7b97\u76f8\u4e92\u5408\u5e76\u7684\u6536\u76ca\u5927\u5c0f\uff0c\u5e76\u6700\u7ec8\u6309\u6536\u76ca\u987a\u5e8f\u9009\u51fa\u591a\u7ec4 Part\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u88ab\u9009\u62e9\u7684\u5206\u533a\uff0c\u5982\u679c\u6700\u540e\u6ca1\u6709\u4ece\u8be5\u5206\u533a\u9009\u51fa\u6536\u76ca\u9ad8\u7684 Merge \u4efb\u52a1\uff0c\u5219\u5728\u540e\u7eed\u4e00\u6bb5\u65f6\u95f4\u5185\u5c06\u4e0d\u518d\u9009\u62e9\u8be5\u5206\u533a\uff0c\u4ee5\u5b9e\u73b0\u81ea\u9002\u5e94\u7684\u8c03\u6574\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9126).Z,width:"852",height:"1022"})),(0,n.kt)("p",null,"\u56fe X-2"),(0,n.kt)("p",null,"\u5982\u56fe\uff0c\u5728\u9009\u62e9 Partition \u9636\u6bb5\uff0c\u6211\u4eec\u9009\u62e9\u4e86 Partition 1 \uff08Part \u6570\u91cf\u6700\u591a\uff09\u548c Partition 2\uff08\u6700\u65b0\u6570\u636e\u5199\u5165\uff09\u3002\u7136\u540e\u4ece\u8fd9\u4e24\u4e2a Partition \u4e2d\u8ba1\u7b97 Part \u95f4\u5408\u5e76\u6536\u76ca\uff0c\u6700\u7ec8\u9009\u51fa\u4e09\u7ec4 Part\uff1ap11~p12\u3001p13~p16 \u4ee5\u53ca p23~p24\u3002"),(0,n.kt)("p",null,"\uff08TODO: \u8865\u5145\u4e00\u4e2a partition \u6ca1\u9009\u51fa\u7ed3\u679c\u7684\u4f8b\u5b50\uff1f\uff09"),(0,n.kt)("h3",{id:"\u4efb\u52a1\u8c03\u5ea6\u7ba1\u7406"},"\u4efb\u52a1\u8c03\u5ea6\u7ba1\u7406"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u8ff0\u9009\u51fa\u7684\u6bcf\u7ec4 Part\uff0c\u6211\u4eec\u5c06\u9884\u4f30\u5176\u4efb\u52a1\u5f00\u9500\uff0c\u5982\u6240\u9700\u78c1\u76d8\u5927\u5c0f\u3001\u5360\u7528\u5185\u5b58\u5927\u5c0f\u7b49\u4fe1\u606f\u3002\u7136\u540e\u901a\u8fc7",(0,n.kt)("u",null,"Resource Manager"),"\uff08\u6ce8\uff1alink to RM\uff09 \u4e3a\u6b64\u4efb\u52a1\u9009\u62e9\u6700\u5408\u9002\u7684 Worker\uff0c\u5e76\u4e0b\u53d1\u6267\u884c\u3002"),(0,n.kt)("p",null,"Worker \u6267\u884c\u4efb\u52a1\u65f6\uff0c\u901a\u8fc7\u5b58\u50a8\u5c42\u6240\u63d0\u4f9b\u7684\u63a5\u53e3\uff0c\u83b7\u53d6\u6240\u9700 Part\u3002Worker \u4e0a Part \u7684\u5408\u5e76\u6d41\u7a0b\u548c\u793e\u533a ClickHouse \u539f\u7406\u7c7b\u4f3c\u3002"),(0,n.kt)("p",null,"Merge \u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\uff0cWorker \u5411 Server \u8fd4\u56de\u6210\u529f\u6267\u884c\u7684\u6807\u5fd7\u3002\u6b64\u540e\uff0cServer \u5373\u53ef\u5bf9\u65b0\u751f\u6210\u7684 Part \u8fdb\u884c\u63d0\u4ea4\uff0c\u5e76\u5bf9\u88ab\u5408\u5e76\u7684\u6e90 Part \u8fdb\u884c\u6807\u8bb0\uff0c\u7b49\u5f85\u540e\u7eed GC \u540e\u53f0\u4efb\u52a1\u5904\u7406\u3002"),(0,n.kt)("h3",{id:"\u5fc3\u8df3\u673a\u5236"},"\u5fc3\u8df3\u673a\u5236"),(0,n.kt)("p",null,"\u7531\u4e8e MergeMutate \u4efb\u52a1\u6267\u884c\u65f6\u95f4\u53ef\u80fd\u4f1a\u6bd4\u8f83\u4e45\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u901a\u8fc7\u5fc3\u8df3\u673a\u5236\u53bb\u68c0\u6d4b Worker \u4e0a\u7684\u4efb\u52a1\u662f\u5426\u5df2\u7ecf\u5931\u8d25\u6216\u8005 Worker \u662f\u5426\u5df2\u7ecf\u5b95\u673a\uff0c\u4ee5\u53ca\u65f6\u79fb\u9664 Server \u4e0a\u5df2\u7ecf\u5931\u8d25\u7684\u4efb\u52a1\u3002\u540c\u65f6 Worker \u7aef\u4e5f\u4f1a\u5728\u6267\u884c\u4efb\u52a1\u65f6\u901a\u8fc7\u4e0a\u4e00\u6b21\u540c\u6b65\u5fc3\u8df3\u7684\u65f6\u95f4\u6765\u5224\u65ad Server \u662f\u5426\u5df2\u7ecf\u5b95\u673a\uff0c\u4ece\u800c\u63d0\u524d\u7ed3\u675f\u4efb\u52a1\u907f\u514d\u6d6a\u8d39\u8d44\u6e90\u3002"),(0,n.kt)("h2",{id:"gc-\u540e\u53f0\u4efb\u52a1"},"GC \u540e\u53f0\u4efb\u52a1"),(0,n.kt)("h3",{id:"part-\u53ef\u89c1\u6027\u5224\u65ad"},"Part \u53ef\u89c1\u6027\u5224\u65ad"),(0,n.kt)("p",null,"\u533a\u522b\u4e8e\u793e\u533a\u7684 Part \u53ef\u89c1\u6027\u5224\u65ad\uff0cByConity \u4e3a\u4e86\u66f4\u597d\u7684\u5b9e\u73b0 MVCC(Multi-Version Concurrency Control)\u7279\u6027\uff0c\u5bf9 part \u7684\u53ef\u89c1\u6027\u5224\u65ad\u505a\u4e86\u4e00\u4e9b\u8c03\u6574\u3002"),(0,n.kt)("p",null,"\u9996\u5148\u7b80\u5355\u4ecb\u7ecd\u5199 part \u7684\u547d\u540d\u7ed3\u6784\uff0cpart \u547d\u540d\u5982\u4e0b\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7942).Z,width:"852",height:"320"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u793e\u533a\u7248\u672c Part \u53ef\u89c1\u6027\u5224\u65ad\uff0c\u4ee5 Merge \u4efb\u52a1\u4e3a\u4f8b")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5120).Z,width:"852",height:"762"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"ByConityPart \u53ef\u89c1\u6027\u5224\u65ad (TODO)")),(0,n.kt)("h3",{id:"gc-task"},"GC Task"),(0,n.kt)("p",null,"\u7406\u89e3",(0,n.kt)("u",null,"Merge"),"\u7684\u4f5c\u7528\u548c\u6d41\u7a0b\u4ee5\u53ca Part \u53ef\u89c1\u6027\u89c4\u5219\u4e4b\u540e\uff0c\u5c31\u80fd\u66f4\u597d\u7684\u7406\u89e3 GC \u5de5\u4f5c\u673a\u5236\u3002"),(0,n.kt)("p",null,"\u5982\u56fe X-1\uff0c\u6bcf\u4e2a\u8868\u7684 GC \u540e\u53f0\u4efb\u52a1\u72ec\u7acb\u8fd0\u884c\uff0c\u5b83\u4e3b\u8981\u8d1f\u8d23\u53d1\u73b0\u548c\u5220\u9664 Merge \u4efb\u52a1\u4ea7\u751f\u7684\u6dd8\u6c70 Part\u3002"),(0,n.kt)("p",null,"Server \u5bf9\u4e00\u4e2a\u88ab\u6dd8\u6c70\u7684 Part \u8fdb\u884c\u6807\u8bb0\u65f6\uff0c\u5e76\u4e0d\u6539\u53d8\u8be5 Part \u7684\u4efb\u4f55\u72b6\u6001\uff0c\u800c\u662f\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4e0e\u4e4b\u5bf9\u5e94\u7684\u6807\u8bb0 Part\uff0c\u6807\u8bb0 Part \u4e0d\u5360\u7528\u5b9e\u9645\u7684\u5b58\u50a8\u7a7a\u95f4\u3002\u8fd9\u6837\u505a\u80fd\u4fdd\u8bc1\u6240\u6709 Part \u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u7684",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u53d8\u6027\uff08immutability\uff09\u3002")),(0,n.kt)("p",null,"\u57fa\u4e8e\u56fe X-2\uff0c\u5728 Merge \u5b8c\u6210\u5c06\u53d8\u6210\u5982\u4e0b\u56fe X-3 \u7684\u72b6\u6001\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1258).Z,width:"852",height:"480"})),(0,n.kt)("p",null,"GC \u540e\u53f0\u4efb\u52a1\u8fd0\u884c\u65f6\uff0c\u548c Merge \u540e\u53f0\u4efb\u52a1\u7c7b\u4f3c\uff0c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u6309\u7167 Part \u603b\u6570\u91cf\u548c\u603b\u5927\u5c0f\u987a\u5e8f\u9009\u62e9\u4e00\u6279 Partition\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7136\u540e\u626b\u63cf Partition \u5185\u6240\u6709 Part\uff0c\u5bf9\u88ab\u6807\u8bb0\u8986\u76d6\u7684 Part\uff08\u5373\u84dd\u8272\u90e8\u5206\uff09\u6267\u884c\u5220\u9664\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7136\u540e\u518d\u6b21\u626b\u63cf Partition \u5185\u6240\u6709 Part\uff0c\u5bf9\u6807\u8bb0 Part\uff08\u5373\u7ea2\u8272\u90e8\u5206\uff09\u6267\u884c\u5220\u9664\u64cd\u4f5c\u3002")),(0,n.kt)("h2",{id:"consumer-\u4efb\u52a1"},"CONSUMER \u4efb\u52a1"),(0,n.kt)("p",null,"ByConity \u7ee7\u627f\u4e86\u793e\u533a Kafka \u6d88\u8d39\u7684\u57fa\u672c\u8bbe\u8ba1\uff0c\u5e76\u57fa\u4e8e\u4e91\u539f\u751f\u65b0\u67b6\u6784\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e86\u5168\u65b0\u7684\u6d88\u8d39\u8868\u5f15\u64ce CnchKafka\u3002\u57fa\u672c\u6d88\u8d39\u539f\u7406\u4e0e\u793e\u533a\u4fdd\u6301\u4e00\u81f4\uff0c\u901a\u8fc7\u4e00\u4e2a <CnchKafka \u6d88\u8d39\u8868\u3001Materialized View \u7269\u5316\u89c6\u56fe\u8868\u3001\u5b58\u50a8\u8868 > \u4e09\u5143\u7ec4\u5b9e\u73b0\u6574\u4e2a\u6d88\u8d39\u94fe\u8def\uff0c\u5176\u4e2d\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CnchKafka \u6d88\u8d39\u8868\uff1a\u8d1f\u8d23\u8ba2\u9605 Kafka topic \u5e76\u6d88\u8d39\u6d88\u606f\uff1b\u5c06\u5f97\u5230\u7684\u6d88\u606f\u89e3\u6790\u540e\u5199\u4e3a Block\uff1b"),(0,n.kt)("li",{parentName:"ul"},"Materialized View \u7269\u5316\u89c6\u56fe\u8868\uff1a\u6784\u5efa\u4ece\u6d88\u8d39\u8868\u5230\u5b58\u50a8\u8868\u7684\u6570\u636e\u901a\u8def\uff0c\u5c06 CnchKafka \u6d88\u8d39\u7684 Block \u5199\u5165\u5b58\u50a8\u8868\uff0c\u5e76\u63d0\u4f9b\u7b80\u5355\u7684\u8fc7\u6ee4\u529f\u80fd\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u8868\uff1a\u652f\u6301 Cnch \u591a\u79cd MergeTree \u5b58\u50a8\u8868\u3002")),(0,n.kt)("p",null,"\u57fa\u672c\u6570\u636e\u901a\u8def\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4594).Z,width:"852",height:"492"})),(0,n.kt)("p",null,"\u56fe\u4e2d\u5404\u7ec4\u4ef6\u662f ByConity \u6d89\u53ca CnchKafka \u7684\u7ec4\u4ef6\uff0c\u5177\u4f53\u7ec4\u4ef6\u8bf4\u660e\u8bf7\u53c2\u8003\u67b6\u6784\u6587\u6863\u3002"),(0,n.kt)("h3",{id:"kafkaconsumemanager"},"KafkaConsumeManager"),(0,n.kt)("p",null,"\u6bcf\u5f20 CnchKafka \u6d88\u8d39\u8868\u4f1a\u5728 Server \u5c42\u542f\u52a8\u4e00\u4e2a Manager\uff08\u5373 CONSUMER \u7c7b\u578b\u540e\u53f0\u4efb\u52a1\uff09\u8d1f\u8d23\u8c03\u5ea6\u548c\u7ba1\u7406\u6240\u6709\u7684\u6d88\u8d39\u8005\u4efb\u52a1\u3002Manager \u672c\u8eab\u662f Server \u7aef\u7684\u4e00\u4e2a\u5e38\u9a7b\u7ebf\u7a0b\uff0c\u901a\u8fc7 Server \u7684\u9ad8\u53ef\u7528\u548c DaemonManager \u4fdd\u8bc1\u5176\u670d\u52a1\u7a33\u5b9a\u3002"),(0,n.kt)("p",null,"KafkaConsumeManager \u4e3b\u8981\u5b9e\u73b0\u548c\u529f\u80fd\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u914d\u7f6e\u7684 consumer \u6570\u76ee\u5c06 topic partition \u5747\u5300\u5206\u53d1\u5230\u6bcf\u4e2a consumer\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4e0e Catalog \u4ea4\u4e92\uff0c\u83b7\u53d6 partition \u6d88\u8d39\u7684 offset\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u8c03\u5ea6 consumer \u5230\u914d\u7f6e\u7684 Virtual Warehouse \u8282\u70b9\u6267\u884c\uff1a"),(0,n.kt)("li",{parentName:"ul"},"\u8282\u70b9\u9009\u62e9\u652f\u6301\u591a\u79cd\u7b56\u7565\u914d\u7f6e\uff0c\u4fdd\u8bc1\u8d1f\u8f7d\u5747\u8861\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u671f\u63a2\u6d3b\u6bcf\u4e2a consumer \u4efb\u52a1\uff0c\u4fdd\u8bc1\u4efb\u52a1\u6267\u884c\u7684\u7a33\u5b9a\u6027\u3002")),(0,n.kt)("h3",{id:"kafkaconsumer"},"KafkaConsumer"),(0,n.kt)("p",null,"\u6bcf\u4e2a KafkaConsumer \u5b9e\u73b0\u4e3a\u4e00\u4e2a\u5e38\u9a7b\u7ebf\u7a0b\u5728 Virtual Warehouse \u8282\u70b9\u6267\u884c\uff0c\u8d1f\u8d23\u4ece\u6307\u5b9a\u7684 topic partition \u6d88\u8d39\u6570\u636e\uff0c\u8f6c\u6362\u4e3a part \u5199\u5165 VFS\uff0c\u5e76\u5c06\u5143\u4fe1\u606f\u63d0\u4ea4\u56de Server \u7aef\u5199\u5165 Catalog\u3002\u4e3b\u8981\u7279\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u793e\u533a\u7684\u6512\u6279\u5199\u5165\u6a21\u5f0f\uff08\u6bcf\u6b21\u6d88\u8d39\u5468\u671f\u9ed8\u8ba4 8 \u79d2\uff09\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u6d88\u8d39\u8fc7\u7a0b\u901a\u8fc7 Transaction \u4fdd\u8bc1\u539f\u5b50\u6027\uff1a"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4e0e Server RPC \u4ea4\u4e92\u521b\u5efa\u4e8b\u52a1\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u63d0\u4ea4\u4f1a\u540c\u65f6\u63d0\u4ea4\u5199\u5165\u7684 part \u5143\u4fe1\u606f\u4ee5\u53ca\u6700\u65b0\u6d88\u8d39\u7684 offset\u3002")),(0,n.kt)("p",null,"\u5355\u6b21\u6d88\u8d39\u6267\u884c\u6d41\u7a0b\u53ef\u53c2\u8003\u4e0b\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7481).Z,width:"852",height:"580"})),(0,n.kt)("h3",{id:"exactly-once"},"Exactly-Once"),(0,n.kt)("p",null,"\u4e0e\u793e\u533a\u5b9e\u73b0\u76f8\u6bd4\uff0cCnchKafka \u5b9e\u73b0\u589e\u5f3a\u4e86\u6d88\u8d39\u8bed\u4e49\uff0c\u5373\u4ece\u793e\u533a\u7684 At-Least-Once \u8bed\u4e49\uff0c\u5347\u7ea7\u4e3a Exactly-Once \u8bed\u4e49\u3002\u8fd9\u4e3b\u8981\u5f97\u76ca\u4e8e\u65b0\u67b6\u6784 Transaction \u4e8b\u52a1\u7684\u4fdd\u8bc1\u3002"),(0,n.kt)("p",null,"\u7531\u4e8e\u6bcf\u8f6e\u6d88\u8d39\u90fd\u4f1a\u901a\u8fc7\u4e8b\u52a1\u7ba1\u7406\uff0c\u4e14\u6bcf\u6b21\u63d0\u4ea4\u6570\u636e\u5143\u4fe1\u606f\u7684\u540c\u65f6\u63d0\u4ea4\u5bf9\u5e94\u7684 offset\u3002\u7531\u4e8e\u4e8b\u52a1\u4fdd\u8bc1\u4e86\u63d0\u4ea4\u7684\u539f\u5b50\u6027\uff0c\u90a3\u4e48\u6570\u636e\u5143\u4fe1\u606f\u548c offset \u8981\u4e48\u540c\u65f6\u63d0\u4ea4\u6210\u529f\uff0c\u8981\u4e48\u90fd\u63d0\u4ea4\u5931\u8d25\u3002"),(0,n.kt)("p",null,"\u8fd9\u6837\u5c31\u4fdd\u8bc1\u4e86\u6570\u636e\u548c offset \u59cb\u7ec8\u4e00\u81f4\uff0c\u6bcf\u6b21\u6d88\u8d39\u91cd\u542f\u90fd\u4ece\u4e0a\u6b21\u63d0\u4ea4\u7684 offset \u4f4d\u7f6e\u7ee7\u7eed\u6d88\u8d39\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86 Exactly-Once\u3002"),(0,n.kt)("h3",{id:"\u81ea\u52a8\u5bb9\u9519\u5b9e\u73b0"},"\u81ea\u52a8\u5bb9\u9519\u5b9e\u73b0"),(0,n.kt)("p",null,"CnchKafka \u6574\u4f53\u5bb9\u9519\u7b56\u7565\u91c7\u53d6",(0,n.kt)("strong",{parentName:"p"},"\u5feb\u901f\u5931\u8d25"),"\u65b9\u5f0f\uff0c\u5373\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KafkaConsumeManager \u5b9a\u671f\u63a2\u6d3b consumer \u4efb\u52a1\uff0c\u63a2\u6d3b\u5931\u8d25\uff0c\u7acb\u5373\u62c9\u8d77\u4e00\u4e2a\u65b0\u7684 consumer\uff1b"),(0,n.kt)("li",{parentName:"ul"},"KafkaConsumer \u6bcf\u6b21\u6267\u884c\u4e2d\uff0c\u4e0e Server RPC \u7684\u4e24\u6b21\u4ea4\u4e92\uff08\u521b\u5efa\u4e8b\u52a1\u548c\u63d0\u4ea4\u4e8b\u52a1\uff09\u90fd\u4f1a\u5411 Manager \u6821\u9a8c\u81ea\u8eab\u7684\u6709\u6548\u6027\uff0c\u5982\u679c\u6821\u9a8c\u5931\u8d25\uff08\u6bd4\u5982 Manager \u5df2\u7ecf\u62c9\u8d77\u4e86\u4e00\u4e2a\u65b0\u7684 consumer \u7b49\uff09\uff0c\u4f1a\u4e3b\u52a8 kill \u81ea\u5df1\u3002")),(0,n.kt)("h3",{id:"\u4fee\u6539\u6d88\u8d39\u53c2\u6570"},"\u4fee\u6539\u6d88\u8d39\u53c2\u6570"),(0,n.kt)("p",null,"\u652f\u6301\u901a\u8fc7 ALTER \u547d\u4ee4\u5feb\u901f\u4fee\u6539 Setting \u53c2\u6570\uff0c\u4e3b\u8981\u7528\u4e8e\u8c03\u6574\u6d88\u8d39\u8005\u6570\u76ee\u7b49\u63d0\u5347\u6d88\u8d39\u80fd\u529b\u3002"),(0,n.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALTER TABLE <cnch_kafka_name> MODIFY SETTING <name1> = <value1>, <name2> = <value2>\n\n")),(0,n.kt)("p",null,"\u8be5\u547d\u4ee4\u6267\u884c\u4f1a\u81ea\u52a8\u91cd\u542f\u6d88\u8d39\u4efb\u52a1\u3002"),(0,n.kt)("h3",{id:"\u624b\u52a8\u542f\u505c\u6d88\u8d39"},"\u624b\u52a8\u542f\u505c\u6d88\u8d39"),(0,n.kt)("p",null,"\u5728\u4e00\u4e9b\u573a\u666f\u4e2d\u7528\u6237\u53ef\u80fd\u9700\u8981\u624b\u52a8\u505c\u6b62\u6d88\u8d39\uff0c\u968f\u540e\u624b\u52a8\u6062\u590d\uff1b\u6211\u4eec\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684 SYSTEM \u547d\u4ee4\u5b9e\u73b0\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SYSTEM START/STOP/RESTART CONSUME <cnch_kafka_name>\n\n")),(0,n.kt)("p",null,"\u6ce8\u610f\uff1aSTART/STOP \u547d\u4ee4\u4f1a\u5c06\u5bf9\u5e94\u72b6\u6001\u6301\u4e45\u5316\u5230 Catalog\uff0c\u56e0\u6b64\u5728\u6267\u884c STOP \u547d\u4ee4\u540e\uff0c\u5982\u679c\u4e0d\u6267\u884c START\uff0c\u5373\u4f7f\u670d\u52a1\u91cd\u542f\uff0c\u6d88\u8d39\u4efb\u52a1\u4e5f\u4e0d\u4f1a\u6062\u590d\u3002"),(0,n.kt)("h2",{id:"\u63a7\u5236\u540e\u53f0\u4efb\u52a1"},"\u63a7\u5236\u540e\u53f0\u4efb\u52a1"),(0,n.kt)("p",null,"\u63d0\u4f9b system \u547d\u4ee4\u63a7\u5236\u540e\u53f0\u4efb\u52a1\u7684\u5f00\u542f\u4e0e\u5173\u95ed\uff0c\u4e0e\u793e\u533a\u4e0d\u540c\u7684\u662f\uff0c\u901a\u8fc7 system \u547d\u4ee4\u63a7\u5236\u662f\u6301\u4e45\u5316\u64cd\u4f5c\uff0c\u5df2\u7ecf\u505c\u6b62\u7684\u540e\u53f0\u4efb\u52a1\u4e0d\u4f1a\u5728 server \u91cd\u542f\u540e\u91cd\u65b0\u8c03\u5ea6\u3002"),(0,n.kt)("p",null,"\u63d0\u4f9b\u7cfb\u7edf\u8868 system.bg_threads \u67e5\u770b\u540e\u53f0\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u5305\u62ec\u7ebf\u7a0b\u72b6\u6001\uff0c\u8c03\u5ea6\u6b21\u6570\uff0c\u8c03\u5ea6\u5f02\u5e38\u4fe1\u606f\u7b49\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SYSTEM STOP/START/RESTART CONSUME db.table;\nSYSTEM STOP/START MERGES/GC db.table;\nSELECT * FROM system.bg_threads WHERE database = 'db' AND table = 'table';\n")),(0,n.kt)("h2",{id:"\u5e38\u89c1\u62a5\u9519"},"\u5e38\u89c1\u62a5\u9519"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connection Refused from DaemonManager")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Code: 5038. DB::Exception: Received from 127.0.0.1:9000. DB::Exception: 112:[E111]Fail to connect Socket{id=1155 addr=127.0.0.1:10090} (0x0x7f2f9674f6c0): Connection refused [R1][E112]Not connected to 127.0.0.1:10090 yet, server_id=1155 [R2][E112]Not connected to 127.0.0.1:10090 yet, server_id=1155 [R3][E112]Not connected to 127.0.0.1:10090 yet, server_id=1155.\n\n")),(0,n.kt)("p",null,"\u5177\u4f53\u62a5\u9519\u4fe1\u606f\u5982\u4e0a\uff0c\u5176\u4e2d 10090 \u4e3a DaemonManger \u7684 rpc \u7aef\u53e3\uff0c\u5219\u8bf4\u660e DaemonManager \u7ec4\u4ef6\u8fde\u63a5\u5931\u8d25\uff0c\u9700\u68c0\u67e5 DaemonManager \u7684\u72b6\u6001\u3002"))}s.isMDXComponent=!0},7942:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcn35mmn27RkI7PnEdYgJML3g-825992d45aca226f63edf2118c630cad.png"},5120:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcn9MQ9pAUXo2fFk9xURxVGrh-461ff747290e0260ce50370bf5a75133.png"},7481:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcnSgFjCeQGVkbtqB3b1013gf-d42dcff9e6716fe35060170db3994a06.png"},9126:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcnnvwD2ZKklNKkrVatqtnjUb-878ff829c9123ed16041a10d2485beb4.png"},1258:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcnuwPQMcD1U9cypYG0DdP1th-9e2b61a2cd466d2e01badc1699af6f4e.png"},1730:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcnyNZuYWKFyUqFHQ8wAYsIOy-976376ed9c27fcd526c6d1052a8f4763.png"},4594:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcnzUYNuizBq5CUpsp0ZZAzoz-8f3b6d8f7092df4cbff90bfd5115de2c.png"}}]);