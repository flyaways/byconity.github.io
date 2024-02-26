"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2017],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),y=i,v=u["".concat(l,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(4778),i=(n(9496),n(9613));const o={},a="ByConity \u5f00\u53d1\u73af\u5883\u8bbe\u7f6e",c={unversionedId:"quick-start/set-up-byconity-dev-env",id:"version-0.2.0/quick-start/set-up-byconity-dev-env",title:"ByConity \u5f00\u53d1\u73af\u5883\u8bbe\u7f6e",description:"\u6211\u4eec\u7684\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u501f\u52a9 VS code \u4e2d\u7684\u4e00\u4e2a\u53eb\u505a Dev Container \u7684\u63d2\u4ef6\u6765\u8fde\u63a5\u5230\u8fd0\u884c\u5728\u865a\u62df\u673a\u4e0a\u7684 Debian 11 \u5f00\u53d1\u73af\u5883\u3002\u6240\u4ee5\u6211\u4eec\u4e5f\u5efa\u8bae\u4f60\u7528\u540c\u6837\u7684\u65b9\u5f0f\u6765\u5f00\u53d1\uff0c\u8fd9\u6837\u80fd\u907f\u514d\u5f88\u591a\u4f9d\u8d56\u548c\u517c\u5bb9\u7684\u95ee\u9898\u3002\u4e86\u89e3\u66f4\u591a\u53ef\u53c2\u8003: official dev set\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/quick-start/set-up-byconity-dev-env.mdx",sourceDirName:"quick-start",slug:"/quick-start/set-up-byconity-dev-env",permalink:"/zh-cn/docs/0.2.0/quick-start/set-up-byconity-dev-env",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/quick-start/set-up-byconity-dev-env.mdx",tags:[],version:"0.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5728 Kubernetes \u4e0a\u90e8\u7f72 ByConity",permalink:"/zh-cn/docs/0.2.0/quick-start/deploy-byconity-with-k8s"},next:{title:"ANSI Compatibility",permalink:"/zh-cn/docs/0.2.0/sql-syntax/ansi-compatibility"}},l={},s=[{value:"\u542f\u52a8 dev-env \u955c\u50cf",id:"\u542f\u52a8-dev-env-\u955c\u50cf",level:2},{value:"\u5b89\u88c5 dev container \u63d2\u4ef6",id:"\u5b89\u88c5-dev-container-\u63d2\u4ef6",level:2},{value:"\u8fde\u63a5\u5230 docker \u5bb9\u5668",id:"\u8fde\u63a5\u5230-docker-\u5bb9\u5668",level:2},{value:"\u627e\u4e0d\u5230\u5934\u6587\u4ef6\u7684\u95ee\u9898",id:"\u627e\u4e0d\u5230\u5934\u6587\u4ef6\u7684\u95ee\u9898",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"byconity-\u5f00\u53d1\u73af\u5883\u8bbe\u7f6e"},"ByConity \u5f00\u53d1\u73af\u5883\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u6211\u4eec\u7684\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u501f\u52a9 VS code \u4e2d\u7684\u4e00\u4e2a\u53eb\u505a Dev Container \u7684\u63d2\u4ef6\u6765\u8fde\u63a5\u5230\u8fd0\u884c\u5728\u865a\u62df\u673a\u4e0a\u7684 Debian 11 \u5f00\u53d1\u73af\u5883\u3002\u6240\u4ee5\u6211\u4eec\u4e5f\u5efa\u8bae\u4f60\u7528\u540c\u6837\u7684\u65b9\u5f0f\u6765\u5f00\u53d1\uff0c\u8fd9\u6837\u80fd\u907f\u514d\u5f88\u591a\u4f9d\u8d56\u548c\u517c\u5bb9\u7684\u95ee\u9898\u3002\u4e86\u89e3\u66f4\u591a\u53ef\u53c2\u8003: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/blob/master/docker/debian/dev-env/README.md"},"official dev set"),"\u3002"),(0,i.kt)("h2",{id:"\u542f\u52a8-dev-env-\u955c\u50cf"},"\u542f\u52a8 dev-env \u955c\u50cf"),(0,i.kt)("p",null,"\u9996\u5148"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ByConity/ByConity.git\n\n# \u6ce8\u610f\u8981\u5148\u8fdb\u5165\u5230\u8fd9\u4e2a\u76ee\u5f55\u4e0b\ncd byconity/docker/debian/dev-env\n\n# \u83b7\u53d6\u6700\u65b0\u7684\u955c\u50cf\nmake pull\n\n# \u542f\u52a8\u5bb9\u5668\nmake run\n")),(0,i.kt)("p",null,"\u8fdb\u5165\u5bb9\u5668\u4e4b\u540e\uff0c\u5148\u7f16\u8bd1\u4e00\u4e0b Byconity \u6e90\u7801\u3002\u8fd9\u6837\u505a\u7684\u76ee\u7684\u5c31\u662f\u8ba9 vscode \u80fd\u591f\u6b63\u786e\u8bc6\u522b\u5e76\u5173\u8054\u4e00\u4e0b\u5934\u6587\u4ef6\u3002\u907f\u514d\u540e\u7eed\u5728 vscode \u4e2d\u8c03\u8bd5\u65f6\u62a5\u5f88\u591a\u5934\u6587\u4ef6\u627e\u4e0d\u5230\u7684\u9519\u8bef\u3002\u4e0b\u9762\u662f\u5177\u4f53\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u955c\u50cf\u4e2d\u6ca1\u6709\u5b50\u6a21\u5757\uff0c\u8fd8\u9700\u8981\u624b\u52a8\u628a\u5b50\u6a21\u5757\u90fd\u4e0b\u5230\u81ea\u5df1\u7535\u8111\u4e0a\u3002\u786e\u4fdd\u81ea\u5df1\u7f51\u7edc\u901a\u7545\uff0c\u5e76\u8010\u5fc3\u7b49\u5f85\u3002\u8fd9\u4e2a\u547d\u4ee4\u662f\u5728\u5bb9\u5668\u7684\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u7684\uff0c\u5c31\u662f\u521a\u8fdb\u53bb\u65f6\u6240\u5728\u76ee\u5f55\u6267\u884c\u7684\uff0c\u4e0d\u9700\u8981\u5207\u6362\u76ee\u5f55\u3002\ngit submodule update --init --recursive\n\n# \u751f\u6210\u4e00\u4e0b\u7f16\u8bd1\u8981\u7528\u7684\u4e2d\u95f4\u6587\u4ef6\ncmake -S /root/ByConity -B build_dev\n\n# \u6700\u540e\u97622\u7684\u542b\u4e49\u662f\u4f7f\u75282\u4e2a\u5e76\u884c\u4efb\u52a1\u8fdb\u884c\u7f16\u8bd1\uff0c\u9700\u8981\u6839\u636e\u81ea\u5df1\u673a\u5668\u8d44\u6e90\u8c03\u6574\uff0c\u5efa\u8bae\u7528\u5185\u5b58\u5927\u5c0f\u9664\u4ee54\uff0c\u59828g\u5185\u5b58\u5c31\u75282\u4e2a\u5e76\u884c\u4efb\u52a1\u7f16\u8bd1\u3002\nninja -C build_dev clickhouse-server -j 2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6267\u884c cmake run \u7684\u76ee\u5f55\n",(0,i.kt)("img",{alt:"the directory where cmake runs",src:n(5955).Z,width:"2084",height:"522"}))),(0,i.kt)("p",null,"\u7f16\u8bd1\u597d\u7684\u6587\u4ef6\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"${BYCONITY_SOURCE}/build_dev/program")),(0,i.kt)("h1",{id:"\u914d\u7f6e-vscode"},"\u914d\u7f6e vscode"),(0,i.kt)("p",null,"\u987a\u5229\u7f16\u8bd1\u901a\u8fc7\u540e\uff0c\u5c31\u53ef\u4ee5\u914d\u7f6e vscode \u7684\u5f00\u53d1\u8c03\u8bd5\u73af\u5883\u4e86"),(0,i.kt)("h2",{id:"\u5b89\u88c5-dev-container-\u63d2\u4ef6"},"\u5b89\u88c5 dev container \u63d2\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Install dev container",src:n(7645).Z,width:"1872",height:"731"})),(0,i.kt)("h1",{id:"\u5728-vscode-\u4e2d\u5f00\u53d1"},"\u5728 vscode \u4e2d\u5f00\u53d1"),(0,i.kt)("h2",{id:"\u8fde\u63a5\u5230-docker-\u5bb9\u5668"},"\u8fde\u63a5\u5230 docker \u5bb9\u5668"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docker container connection",src:n(2256).Z,width:"1342",height:"808"})),(0,i.kt)("h2",{id:"\u627e\u4e0d\u5230\u5934\u6587\u4ef6\u7684\u95ee\u9898"},"\u627e\u4e0d\u5230\u5934\u6587\u4ef6\u7684\u95ee\u9898"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5373\u4f7f\u4e0a\u9762\u7684\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u6ca1\u6709\u51fa\u9519 vscode \u4e5f\u4f1a\u62a5\u7ea2\u63d0\u793a\u627e\u4e0d\u5230\u5934\u6587\u4ef6\uff0c\u4e0d\u7528\u62c5\u5fc3\uff0c\u5b83\u53ea\u662f\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u6765\u8bc6\u522b\u5934\u6587\u4ef6\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Header file cannot be found problems",src:n(3918).Z,width:"2124",height:"1190"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"vscode \u73af\u5883\u642d\u5efa\u5b8c\u6210\n",(0,i.kt)("img",{alt:"fixed problems with header files not being found",src:n(4822).Z,width:"2070",height:"1258"}))))}p.isMDXComponent=!0},3918:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Header file cannot be found problems-0118f6dc38a982c6915efe7877fe0eb1.jpg"},7645:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Install dev container-0557a8a1cf6908b29a6f7b9b6c197785.jpg"},2256:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Open the development container in vscode-8346e00e14c59c023816a1fe650cdb72.jpg"},4822:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fixed problems with header files not being found-492100f49f1a516c7b397a39a55fe2a2.jpg"},5955:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/the directory where cmake runs-bd18dad5e7b0aeb243feae55ae9964b5.jpg"}}]);