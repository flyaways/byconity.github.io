"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3830],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=d(t),s=a,u=y["".concat(p,".").concat(s)]||y[s]||m[s]||i;return t?o.createElement(u,r(r({ref:n},c),{},{components:t})):o.createElement(u,r({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[y]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=t(4778),a=(t(9496),t(9613));const i={title:"\u8f6f\u4ef6\u5305\u90e8\u7f72",tags:["Docs"]},r=void 0,l={unversionedId:"deployment/package-deployment",id:"deployment/package-deployment",title:"\u8f6f\u4ef6\u5305\u90e8\u7f72",description:"\uff03\u8f6f\u4ef6\u5305\u90e8\u7f72",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/package-deployment.mdx",sourceDirName:"deployment",slug:"/deployment/package-deployment",permalink:"/zh-cn/docs/deployment/package-deployment",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/package-deployment.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"\u8f6f\u4ef6\u5305\u90e8\u7f72",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5 HDFS",permalink:"/zh-cn/docs/deployment/hdfs-installation"}},p={},d=[{value:"\u5b89\u88c5 FoundationDB \u548c HDFS",id:"\u5b89\u88c5-foundationdb-\u548c-hdfs",level:2},{value:"\u5b89\u88c5 FoundationDB \u5ba2\u6237\u7aef",id:"\u5b89\u88c5-foundationdb-\u5ba2\u6237\u7aef",level:2},{value:"\u90e8\u7f72 ByConity \u8f6f\u4ef6\u5305",id:"\u90e8\u7f72-byconity-\u8f6f\u4ef6\u5305",level:2},{value:"\u5b89\u88c5 byconity-common-static",id:"\u5b89\u88c5-byconity-common-static",level:3},{value:"\u914d\u7f6e <code>cnch_config.xml</code>",id:"\u914d\u7f6e-cnch_configxml",level:3},{value:"\u914d\u7f6e <code>fdb.config</code>",id:"\u914d\u7f6e-fdbconfig",level:3}],c={toc:d},y="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(y,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uff03\u8f6f\u4ef6\u5305\u90e8\u7f72\n\u5c06 ByConity \u90e8\u7f72\u5230\u7269\u7406\u673a\u5668\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u3002\n\u4f8b\u5982\uff0c\u4e3a Debian OS \u5b89\u88c5 Debian \u8f6f\u4ef6\u5305\uff0c\u4e3a Centos OS \u5b89\u88c5 rpm \u8f6f\u4ef6\u5305\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5-foundationdb-\u548c-hdfs"},"\u5b89\u88c5 FoundationDB \u548c HDFS"),(0,a.kt)("p",null,"ByConity \u4f7f\u7528 FoundationDB \u4f5c\u4e3a\u5143\u5b58\u50a8\uff0c\u4f7f\u7528 HDFS \u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\u3002\u56e0\u6b64\uff0c\u5728\u5f00\u59cb\u90e8\u7f72 ByConity \u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u90e8\u7f72 FoundationDB \u548c HDFS\u3002"),(0,a.kt)("p",null,"\u8981\u90e8\u7f72 ",(0,a.kt)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/"},"Foundation")," \u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"./foundationdb-installation"},"\u6b64\u5904"),"\u7684\u5b89\u88c5\u6307\u5357\u3002"),(0,a.kt)("p",null,"\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u90e8\u7f72\u4e00\u4e2a HDFS \u96c6\u7fa4\uff0c\u5176\u4e2d\u5305\u62ec\u540d\u79f0\u8282\u70b9\u548c\u6570\u636e\u8282\u70b9\uff0c\u5e76\u5728 HDFS \u4e2d\u521b\u5efa\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"/user/clickhouse")," \u4ee5\u5b58\u50a8\u6570\u636e\u3002\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"./hdfs-installation"},"\u6b64\u5904"),"\u7684\u5b89\u88c5\u6307\u5357\u3002\u5b8c\u6210\u6b64\u6b65\u9aa4\u540e\uff0c\u60a8\u5c06\u5f97\u5230\u540d\u79f0\u8282\u70b9 url\uff0c\u901a\u5e38\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"core-site.xml")," \u914d\u7f6e\u4e2d\u627e\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," \u7684\u503c\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5-foundationdb-\u5ba2\u6237\u7aef"},"\u5b89\u88c5 FoundationDB \u5ba2\u6237\u7aef"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c06\u5f00\u59cb\u90e8\u7f72 Byconity\u3002ByConity \u8f6f\u4ef6\u5305\u4f9d\u8d56\u4e8e FoundationDB \u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\u3002\u56e0\u6b64\uff0c\u5728\u5c06 ByConity \u8f6f\u4ef6\u5305\u90e8\u7f72\u5230\u4efb\u4f55\u8ba1\u7b97\u673a\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u90e8\u7f72 FoundationDB \u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\u3002FoundationDB \u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\u4e0e FoundationDB \u670d\u52a1\u5668\u7248\u672c\u7d27\u5bc6\u8026\u5408\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u9009\u62e9\u4e0e FoundationDB \u670d\u52a1\u5668\u7248\u672c\u5339\u914d\u7684\u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\u3002"),(0,a.kt)("p",null,"\u8981\u90e8\u7f72 FoundationDB \u5ba2\u6237\u7aef\u8f6f\u4ef6\u5305\uff0c\u6211\u4eec\u8f6c\u5230 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases"},"\u9875\u9762")," \u4e0a\uff0c\u627e\u5230\u9002\u5408\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u7684\u6b63\u786e\u8f6f\u4ef6\u5305\u5e76\u4e0b\u8f7d\u5b83\u3002\u4f8b\u5982\uff0c\u5728\u6b64\u5904\u6211\u4e0b\u8f7d\u7248\u672c ",(0,a.kt)("inlineCode",{parentName:"p"},"7.1.27")," \u7528\u4e8e Debian OS\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"amd64")," \u673a\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L -o foundationdb-clients_7.1.27-1_amd64.deb https://github.com/apple/foundationdb/releases/download/7.1.27/foundationdb-clients_7.1.27-1_amd64.deb\n")),(0,a.kt)("p",null,"\u7136\u540e\u4f7f\u7528\u6b64\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i foundationdb-clients_7.1.27-1_amd64.deb\n")),(0,a.kt)("h2",{id:"\u90e8\u7f72-byconity-\u8f6f\u4ef6\u5305"},"\u90e8\u7f72 ByConity \u8f6f\u4ef6\u5305"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u90e8\u7f72 ByConity \u8f6f\u4ef6\u5305\uff0c\u60a8\u53ef\u4ee5\u5728\u53d1\u5e03 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/releases"},"\u9875\u9762")," \u4e2d\u627e\u5230\u5b83\u4eec\u3002\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u81ea\u5df1\u6784\u5efa\u8f6f\u4ef6\u5305\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u6309\u7167\u6b64 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/tree/master/docker/packager"},"\u6307\u5357"),"\u3002"),(0,a.kt)("h3",{id:"\u5b89\u88c5-byconity-common-static"},"\u5b89\u88c5 byconity-common-static"),(0,a.kt)("p",null,"\u9700\u8981\u5b89\u88c5\u7684\u7b2c\u4e00\u4e2a\u8f6f\u4ef6\u5305\u662f\u5e38\u89c1\u8f6f\u4ef6\u5305 ",(0,a.kt)("inlineCode",{parentName:"p"},"byconity-common-static"),"\uff0c\u8fd9\u662f\u6240\u6709\u5176\u4ed6\u8f6f\u4ef6\u5305\u90fd\u4f9d\u8d56\u7684\u8f6f\u4ef6\u5305\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i byconity-common-static_0.1.1.1_amd64.deb\n")),(0,a.kt)("p",null,"\u4e4b\u540e\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/cnch_config.xml")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/fdb.config"),"\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"cnch_config.xml")," \u6587\u4ef6\u5305\u542b service_discovery \u914d\u7f6e\u3001hdfs \u914d\u7f6e\u548c foundationdb \u96c6\u7fa4\u914d\u7f6e\u8def\u5f84\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"fdb.config")," \u662f FoundationDB \u96c6\u7fa4\u7684\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e-cnch_configxml"},"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h3"},"cnch_config.xml")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cnch_config.xml")," \u6587\u4ef6\u5305\u542b\u4e24\u90e8\u5206\u9700\u8981\u7528\u6237\u914d\u7f6e\u7684\u5185\u5bb9\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"service_discovery")," \u6807\u7b7e\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs_nnproxy")," \u6807\u7b7e\u3002\u5728 ByConity \u4e2d\uff0c\u7ec4\u4ef6\u4e4b\u95f4\u6709\u4e09\u79cd\u76f8\u4e92\u53d1\u73b0\u7684\u65b9\u5f0f\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," \u6807\u7b7e\u7528\u4e8e\u6307\u5b9a\u65b9\u5f0f\uff0c\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"local"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"dns")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"consul"),"\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," \u6a21\u5f0f\u4e0b\uff0c\u7528\u6237\u9700\u8981\u5728\u6b64\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u6240\u6709\u7ec4\u4ef6\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\uff0c\u901a\u8fc7\u66ff\u6362\u5360\u4f4d\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"{your_xxx_address}"),"\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"{your_server_address}"),"\uff09\uff0c\u8be5\u5360\u4f4d\u7b26\u5b9e\u9645\u4e0a\u662f\u7ec4\u4ef6\u7684 IP \u5730\u5740\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.2.72"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs_nnproxy")," \u6807\u7b7e\uff0c\u5305\u542b HDFS \u540d\u79f0\u8282\u70b9\u7684\u5730\u5740\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e-fdbconfig"},"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h3"},"fdb.config")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fdb.config")," \u662f FoundationDB \u5ba2\u6237\u7aef\u8fde\u63a5\u5230 FoundationDB \u670d\u52a1\u5668\u7684\u6587\u4ef6\uff0c\u60a8\u5c06\u5728\u914d\u7f6e FoundationDB \u670d\u52a1\u5668\u540e\u62e5\u6709\u5b83\u3002\u5728",(0,a.kt)("a",{parentName:"p",href:"./foundationdb-installation"},"\u8fd9\u91cc"),"\u9605\u8bfb\u66f4\u591a\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u4e4b\u540e\u5728\u60a8\u60f3\u8981\u5b89\u88c5 TSO \u670d\u52a1\u7684\u673a\u5668\u4e0a\u3002\u4e0b\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"byconity-tso")," \u5305\u5e76\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i byconity-tso_0.1.1.1_amd64.deb\n")),(0,a.kt)("p",null,"\u5982\u679c\u8fd9\u662f\u7b2c\u4e00\u6b21\u5728\u7cfb\u7edf\u4e0a\u5b89\u88c5\u8be5\u8f6f\u4ef6\u5305\uff0c\u5219\u4e0d\u4f1a\u7acb\u5373\u542f\u52a8\uff0c\u800c\u662f\u5728\u4e0b\u4e00\u6b21\u91cd\u542f\u65f6\u542f\u52a8\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u5176\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status byconity-tso\n")),(0,a.kt)("p",null,"TSO \u670d\u52a1\u7684\u914d\u7f6e\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/byconity-tso.xml"),"\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u81ea\u5df1\u7684\u9700\u6c42\u8fdb\u884c\u914d\u7f6e\uff0c\u4f46\u9ed8\u8ba4\u503c\u5df2\u8db3\u591f\u597d\u7528\u3002\u82e5\u8981\u7acb\u5373\u542f\u52a8\u8be5\u670d\u52a1\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl start byconity-tso\n")),(0,a.kt)("p",null,"\u4e0b\u6b21\u518d\u6b21\u5b89\u88c5\u8be5\u8f6f\u4ef6\u5305\uff08\u4f8b\u5982\uff0c\u60a8\u60f3\u8981\u5347\u7ea7\uff09\uff0c\u5219\u65e0\u9700\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," \u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\uff0c\u5b89\u88c5 ByConity \u8d44\u6e90\u7ba1\u7406\u5668\u3001ByConity \u670d\u52a1\u5668\u3001ByConity \u5de5\u4f5c\u5668\u3001ByConity \u5de5\u4f5c\u5668\u5199\u5165\u548c ByConity \u5b88\u62a4\u7a0b\u5e8f\u7ba1\u7406\u5668\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"byconity-resource-manager"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"byconity-daemon-manger")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"byconity-tso")," \u662f\u8f7b\u91cf\u7ea7\u670d\u52a1\uff0c\u56e0\u6b64\u53ef\u4ee5\u5b89\u88c5\u5728\u5171\u4eab\u673a\u5668\u4e0a\u4e0e\u5176\u4ed6\u8f6f\u4ef6\u5305\u4e00\u8d77\u4f7f\u7528\u3002\u4f46\u662f\uff0c\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"byconity-server"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"byconity-worker")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"byconity-worker-write"),"\uff0c\u6211\u4eec\u5e94\u8be5\u5c06\u5b83\u4eec\u5206\u522b\u5b89\u88c5\u5728\u4e0d\u540c\u7684\u673a\u5668\u4e0a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i byconity-resource-manager_0.1.1.1_amd64.deb \nsudo dpkg -i byconity-server_0.1.1.1_amd64.deb \nsudo dpkg -i byconity-worker_0.1.1.1_amd64.deb \nsudo dpkg -i byconity-worker-write_0.1.1.1_amd64.deb \nsudo dpkg -i byconity-daemon-manager_0.1.1.1_amd64.deb \n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u5b89\u88c5\u66f4\u591a\u7684\u5de5\u4f5c\u8282\u70b9\u3002\u6bcf\u4e2a\u5de5\u4f5c\u8282\u70b9\u90fd\u6709\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"WORKER_ID"),"\u7684\u8bbe\u7f6e\u9879\uff0c\u5728\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/(byconity-worker|byconity-worker-write).xml"),"\u4e2d\u914d\u7f6e\u5de5\u4f5c\u8282\u70b9\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"worker id"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"worker id"),"\u5728\u5de5\u4f5c\u8282\u70b9\u4e4b\u95f4\u5fc5\u987b\u662f\u552f\u4e00\u7684\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"WORKER_ID"),"\u7684\u9ed8\u8ba4\u503c\u4e3a\u7a7a\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"worker_id"),"\u4f1a\u81ea\u52a8\u5206\u914d\u4e3a\u4e3b\u673a\u673a\u5668\u7684IP\u5730\u5740\u3002"))}m.isMDXComponent=!0}}]);