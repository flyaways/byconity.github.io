"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1899],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,b=p["".concat(a,".").concat(d)]||p[d]||y[d]||i;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(4778),o=(n(9496),n(9613));const i={title:"\u6784\u5efa\u7f16\u8bd1",sidebar_position:1,tags:["Docs"]},c="\u5728Linux\u4e0a\u7f16\u8bd1ByConity\u6e90\u7801",l={unversionedId:"developer-guides/how-to-build-byconity",id:"developer-guides/how-to-build-byconity",title:"\u6784\u5efa\u7f16\u8bd1",description:"\u73af\u5883\u4f9d\u8d56",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer-guides/how-to-build-byconity.mdx",sourceDirName:"developer-guides",slug:"/developer-guides/how-to-build-byconity",permalink:"/zh-cn/docs/developer-guides/how-to-build-byconity",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer-guides/how-to-build-byconity.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u6784\u5efa\u7f16\u8bd1",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"TPC-DS\u57fa\u51c6\u6d4b\u8bd5",permalink:"/zh-cn/docs/benchmarks/tpc-ds"},next:{title:"\u5f00\u53d1\u73af\u5883",permalink:"/zh-cn/docs/developer-guides/set-up-byconity-dev-env"}},a={},s=[{value:"\u73af\u5883\u4f9d\u8d56",id:"\u73af\u5883\u4f9d\u8d56",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u7f16\u8bd1 ByConity",id:"\u7f16\u8bd1-byconity",level:2}],u={toc:s},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5728linux\u4e0a\u7f16\u8bd1byconity\u6e90\u7801"},"\u5728Linux\u4e0a\u7f16\u8bd1ByConity\u6e90\u7801"),(0,o.kt)("h2",{id:"\u73af\u5883\u4f9d\u8d56"},"\u73af\u5883\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728Linux\u73af\u5883\u4e0b\uff0c\u6e90\u7801\u7f16\u8bd1 ByConity \u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Git\nCMake 3.17 or newer\nNinja\nC++ compiler: clang-11 or clang-12\nLinker: lld\nThird-Party Library: openssl\n\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("p",null,"Debian 11 (Bullseye) \u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install git cmake ccache python3 ninja-build libssl-dev\n\n# install llvm 12\nsudo apt install lsb-release wget software-properties-common gnupg # pre-requisites of llvm.sh\nwget https://apt.llvm.org/llvm.sh\nchmod +x llvm.sh\nsudo ./llvm.sh 12\n\n")),(0,o.kt)("h2",{id:"\u7f16\u8bd1-byconity"},"\u7f16\u8bd1 ByConity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone --recursive <ByConity Repository URL> byconity\n\ncd byconity\nmkdir build && cd build\nexport CC=clang-12\nexport CXX=clang++-12\ncmake ..\nninja\n\n")),(0,o.kt)("p",null,"\u53ef\u6267\u884c\u6587\u4ef6\u5728 programs \u76ee\u5f55\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-client    # byconity client\nclickhouse-server    # byconity server\nclickhouse-worker    # byconity worker\ntso_server           # byconity tso\ndaemon_manager       # byconity daemon manager\nresource_manager     # byconity resource manager\n\n")))}y.isMDXComponent=!0}}]);