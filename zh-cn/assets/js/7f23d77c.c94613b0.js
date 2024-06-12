"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[5580],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(64778),i=(n(59496),n(49613));const a={title:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18",sidebar_position:3,tags:["Docs"]},l="\u590d\u6742\u67e5\u8be2\u8c03\u4f18",o={unversionedId:"query-optimization/complex-query-optimization",id:"query-optimization/complex-query-optimization",title:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18",description:"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/query-optimization/complex-query-optimization.mdx",sourceDirName:"query-optimization",slug:"/query-optimization/complex-query-optimization",permalink:"/zh-cn/docs/query-optimization/complex-query-optimization",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/query-optimization/complex-query-optimization.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u9884\u52a0\u8f7d",permalink:"/zh-cn/docs/query-optimization/query-optimization-with-cache-preload"},next:{title:"\u901a\u8fc7\u6295\u5f71\u4f18\u5316",permalink:"/zh-cn/docs/query-optimization/query-optimization-with-projection"}},p={},u=[{value:"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b",id:"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b",level:2},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u590d\u6742\u67e5\u8be2\u8c03\u4f18"},"\u590d\u6742\u67e5\u8be2\u8c03\u4f18"),(0,i.kt)("h2",{id:"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b"},"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b"),(0,i.kt)("p",null,"\u5206\u6790\u578b\u67e5\u8be2\u53ef\u4ee5\u5206\u4e3a\u7b80\u5355\u67e5\u8be2\u548c\u590d\u6742\u67e5\u8be2\uff0c\u7b80\u5355\u67e5\u8be2\u901a\u5e38\u662f\u5355\u8868\u68c0\u7d22\u805a\u5408\u3001\u5927\u8868\u4e0e\u5c0f\u8868 Join \u67e5\u8be2\uff0c\u67e5\u8be2\u54cd\u5e94\u5feb\uff1b\u590d\u6742\u67e5\u8be2\u6307\u7684\u662f\u6709\u5927\u8868\u3001\u591a\u8868\u5173\u8054\u548c\u590d\u6742\u7684\u903b\u8f91\u5904\u7406\uff0c\u901a\u5e38\u67e5\u8be2\u54cd\u5e94\u6162\u6d88\u8017\u8d44\u6e90\u591a\u3002ByConity \u5728\u590d\u6742\u67e5\u8be2\u4e0a\u8fdb\u884c\u4e86\u4f18\u5316\u8bbe\u8ba1\u3002\n\u7b80\u5355\u7684\u67e5\u8be2\u53ef\u4ee5\u91c7\u7528\u4e24\u9636\u6bb5\u6267\u884c\u6a21\u578b\uff0c\u8ba1\u7b97\u8282\u70b9\u4e0a\u9762\u6267\u884c\u7684 partial \u9636\u6bb5\uff0c\u670d\u52a1\u8282\u70b9\u4e0a\u9762\u6267\u884c\u7684 final \u9636\u6bb5\uff0c\u4e00\u65e6\u6211\u4eec\u9700\u8981\u6267\u884c\u4e00\u4e2a\u590d\u6742\u7684\u591a\u4e2a\u805a\u5408\u6216\u8005 join \u7684\u67e5\u8be2\uff0c\u4e24\u9636\u6bb5\u7684\u6267\u884c\u6a21\u578b\u7075\u6d3b\u6027\u975e\u5e38\u4f4e\uff0c\u4e5f\u8ba9\u67e5\u8be2\u7684\u4f18\u5316\u53d8\u5f97\u68d8\u624b\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u652f\u6301\u5206\u5e03\u5f0f\u67e5\u8be2\uff0c\u65b9\u4fbf\u6267\u884c\u4f18\u5316\u5668\u4ea7\u751f\u7684\u6267\u884c\u8ba1\u5212\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u652f\u6301\u591a\u8f6e\u5206\u5e03\u5f0f\u6267\u884c\u6a21\u5f0f\u7684\u590d\u6742\u67e5\u8be2\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97677).Z,width:"1070",height:"462"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," \u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b\u56fe")),(0,i.kt)("p",null,"\u590d\u6742\u67e5\u8be2\u7684\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Query SQL String \u901a\u8fc7 parser \u89e3\u6790\u4e3a AST"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9 AST \u505a\u6539\u5199\u548c\u4f18\u5316\uff0c\u4ea7\u751f\u6267\u884c\u8ba1\u5212"),(0,i.kt)("li",{parentName:"ul"},"\u542f\u7528\u4f18\u5316\u5668\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u4f18\u5316\u5668\u4ea7\u751f\u6267\u884c\u8ba1\u5212\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u6267\u884c\u8ba1\u5212\u5207\u5206\u4e3a\u591a\u4e2a PlanSegment"),(0,i.kt)("li",{parentName:"ul"},"PlanSegment \u5373\u5206\u5e03\u5f0f\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e2a\u6267\u884c\u7247\u6bb5\uff0c\u5b83\u5305\u542b"),(0,i.kt)("li",{parentName:"ul"},"\u6267\u884c\u9700\u8981\u7684 AST \u7247\u6bb5\uff0c\u6216\u8005\u4e00\u4e2a\u7531 PlanNode \u6784\u6210\u7684\u903b\u8f91\u6267\u884c\u8ba1\u5212\u7247\u6bb5"),(0,i.kt)("li",{parentName:"ul"},"PlanSegment \u6267\u884c\u7684\u8282\u70b9\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"PlanSegment \u7684\u4e0a\u4e0b\u6e38\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u5305\u62ec\u4e0a\u6e38\u7684\u8f93\u5165\u6d41\uff0c\u4e0b\u6e38\u9700\u8981\u7684\u8f93\u5165\u6d41"),(0,i.kt)("li",{parentName:"ul"},"\u5f15\u64ce\u7684\u8c03\u5ea6\u5668\u4f1a\u5c06\u8fd9\u4e9b PlanSegment \u6784\u6210\u4e00\u4e2a DAG\uff0c\u7136\u540e\u6309\u62d3\u6251\u6392\u5e8f\u4e0b\u53d1\u7ed9\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u6536\u5230 PlanSegment \u4e4b\u540e\uff0c\u5f00\u59cb\u9a71\u52a8 PlanSegment \u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b\u6570\u636e\u6e90\u7684 PlanSegment \u5f00\u59cb\u8bfb\u53d6\u6570\u636e\uff0c\u5c06\u6570\u636e\u6309\u7167\u4e00\u5b9a\u7684 shuffle \u89c4\u5219\u5206\u53d1\u5230\u4e0b\u6e38\u7684\u5404\u4e2a\u8282\u70b9\u4e0a"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b exchange \u8f93\u5165\u7684 PlanSegment \u7b49\u5f85\u4e0a\u6e38\u7684\u6570\u636e\uff0c\u5982\u679c\u9700\u8981\u7ee7\u7eed\u505a shuffle \u5219\u4f1a\u7ee7\u7eed\u5c06\u6570\u636e\u4e0b\u53d1\u7ed9\u5404\u4e2a\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"\u591a\u8f6e stage \u5b8c\u6210\u4e4b\u540e\uff0c\u7ed3\u679c\u4f1a\u8fd4\u56de\u5230\u670d\u52a1\u7aef")),(0,i.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),(0,i.kt)("p",null,"\u5f00\u542f\u4f18\u5316\u5668\u4f1a\u81ea\u52a8\u8d70\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b\u3002\u901a\u8fc7\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_optimizer=1"),"\uff0c\u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"dialect_type='ANSI'")," \u53ef\u4ee5\u5f00\u542f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u7edf\u8ba1\u4fe1\u606f\u5b58\u5728")),(0,i.kt)("p",null,"\u6ca1\u6709\u7edf\u8ba1\u4fe1\u606f\uff0c\u751f\u6210\u7684\u67e5\u8be2\u8ba1\u5212\u4e0d\u662f\u6700\u4f18\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"show stats [<db_name>.]<table_name>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5206\u6790\u8ba1\u5212\u6bcf\u4e00\u4e2a Step \u7684\u8017\u65f6")),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"explain analyze sql")," \u53ef\u4ee5\u663e\u793a\u6bcf\u4e00\u4e2a Step \u7684\u8017\u65f6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exchange \u53c2\u6570\u8c03\u4f18")),(0,i.kt)("p",null,"Exchange \u7b97\u5b50\u8d1f\u8d23 PlanSegment \u4e4b\u95f4\u7684\u6570\u636e\u4f20\u8f93\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"exchange_source_pipeline_threads")," \u5f71\u54cd pipeline \u6267\u884c\u7684\u603b\u7ebf\u7a0b\u6570\u76ee\uff0c\u5c24\u5176\u662f\u975e source \u7684 pipeline(\u6307\u76f4\u63a5\u4ece\u5b58\u50a8\u8bfb\u53d6\u6570\u636e\u7684 pipeline)\uff0c\u76ee\u524d\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a CPU \u6838\u6570\uff0c\u76ee\u524d\u5e76\u6ca1\u6709\u4e00\u4e2a\u7406\u60f3\u63a8\u8350\u503c\uff0c\u53ef\u4ee5\u8003\u8651/2 \u6216\u8005","*","2 \u89c2\u5bdf\u7ed3\u679c\u3002\u5982\u679c\u67e5\u8be2\u5185\u5b58\u5360\u7528\u8f83\u5927\uff0c\u53ef\u4ee5\u8c03\u5c0f\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"exchange_timeout_ms")," Exhange \u8d85\u65f6\u65f6\u95f4\uff08ms)\uff0c\u9ed8\u8ba4\u4e3a 100s\uff0c\u5982\u679c\u51fa\u73b0 Exchange \u76f8\u5173\u8d85\u65f6\u62a5\u9519\u53ef\u4ee5\u9002\u5f53\u8c03\u5927"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"exchange_unordered_output_parallel_size")," \u5f71\u54cd exchange \u8f93\u51fa\u6570\u636e\u7684\u5e76\u53d1\u80fd\u529b\uff0c\u9ed8\u8ba4\u4e3a 8\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8c03\u6574\u3002\u5982\u679c exchange_source_pipeline_threads \u8c03\u6574\u6bd4\u8f83\u5927\uff0c\u53ef\u4ee5\u9002\u5f53\u8c03\u5927 exchange_unordered_output_parallel_size\uff0c\u589e\u52a0\u4e0a\u6e38\u8f93\u51fa\u80fd\u529b\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"exchange_enable_block_compress")," \u662f\u5426\u5f00\u542f exchange \u538b\u7f29\uff0c\u9ed8\u8ba4\u5f00\u542f\uff0c\u5982\u679c CPU \u74f6\u9888\u6bd4\u7f51\u7edc\u660e\u663e\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5173\u95ed"))}s.isMDXComponent=!0},97677:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/complex-query-model-9adadd60bf95fe79b67512fe58018575.png"}}]);