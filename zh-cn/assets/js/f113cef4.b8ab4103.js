"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3496],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(4778),a=(t(9496),t(9613));const o={title:"\u5b89\u88c5 FoundationDB",tags:["Docs"]},l=void 0,i={unversionedId:"deployment/foundationdb-installation",id:"deployment/foundationdb-installation",title:"\u5b89\u88c5 FoundationDB",description:"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u5c06\u5728 3 \u53f0\u7269\u7406\u673a\u4e0a\u8bbe\u7f6e Foundation DB \u96c6\u7fa4\u3002\u5b83\u4eec\u90fd\u4f7f\u7528 debian \u64cd\u4f5c\u7cfb\u7edf\u3002\u6211\u53c2\u8003\u4e86\u4e24\u4e2a\u5b98\u65b9\u6307\u5357\uff1a\u5728 Linux \u4e0a\u5165\u95e8 \u548c \u6784\u5efa\u4e00\u4e2a\u96c6\u7fa4\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/foundationdb-installation.mdx",sourceDirName:"deployment",slug:"/deployment/foundationdb-installation",permalink:"/zh-cn/docs/deployment/foundationdb-installation",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/foundationdb-installation.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"\u5b89\u88c5 FoundationDB",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 docker wrapper \u5c06 ByConity \u90e8\u7f72\u5230\u7269\u7406\u670d\u52a1\u5668",permalink:"/zh-cn/docs/deployment/docker-wrapper"},next:{title:"\u5b89\u88c5 HDFS",permalink:"/zh-cn/docs/deployment/hdfs-installation"}},d={},s=[],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u5c06\u5728 3 \u53f0\u7269\u7406\u673a\u4e0a\u8bbe\u7f6e Foundation DB \u96c6\u7fa4\u3002\u5b83\u4eec\u90fd\u4f7f\u7528 debian \u64cd\u4f5c\u7cfb\u7edf\u3002\u6211\u53c2\u8003\u4e86\u4e24\u4e2a\u5b98\u65b9\u6307\u5357\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/getting-started-linux.html"},"\u5728 Linux \u4e0a\u5165\u95e8")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/building-cluster.html"},"\u6784\u5efa\u4e00\u4e2a\u96c6\u7fa4"),"\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases/"},"\u8fd9\u91cc"),"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fdb\u884c\u5b89\u88c5\u3002\u6211\u4eec\u9700\u8981\u4e0b\u8f7d ",(0,a.kt)("strong",{parentName:"p"},"server"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"monitor")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"cli")," \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,a.kt)("strong",{parentName:"p"},"sha256")," \u6821\u9a8c\u548c\u6587\u4ef6\u3002\u6211\u4f1a\u9009\u62e9\u7248\u672c\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"7.1.25"),"\uff0c\u56e0\u4e3a\u5b83\u662f\u5f53\u65f6\u6700\u65b0\u7684\u7248\u672c\u3002\\\n\u5728\u60a8\u7684\u76ee\u5f55\u4e2d\uff0c\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"foundationdb")," \u7684\u6587\u4ef6\u5939\u3002\\\n\u7136\u540e\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"foundationdb")," \u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," \u7684\u5b50\u6587\u4ef6\u5939\u3002\\\n\u5728\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"foundationdb/bin")," \u6587\u4ef6\u5939\u4e2d\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u4e0b\u8f7d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L -o fdbserver.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbserver.x86_64\ncurl -L -o fdbserver.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbserver.x86_64.sha256\n\ncurl -L -o fdbmonitor.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbmonitor.x86_64\ncurl -L -o fdbmonitor.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbmonitor.x86_64.sha256\n\ncurl -L -o fdbcli.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbcli.x86_64\ncurl -L -o fdbcli.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbcli.x86_64.sha256\n")),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u8ba9\u6211\u4eec\u5bf9\u53ef\u6267\u884c\u6587\u4ef6\u8fdb\u884c\u6821\u9a8c\u4ee5\u67e5\u770b\u4e0b\u8f7d\u662f\u5426\u6210\u529f\u3002\u8fd9\u4e24\u4e2a\u6821\u9a8c\u548c\u5e94\u8be5\u76f8\u7b49\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ sha256sum --binary fdbserver.x86_64\n73b70a75464e64fd0a01a7536e110e31c3e6ce793d425aecfc40f0be9f0652b7 *fdbserver.x86_64\n\n$ cat fdbserver.x86_64.sha256\n73b70a75464e64fd0a01a7536e110e31c3e6ce793d425aecfc40f0be9f0652b7  fdbserver.x86_64\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u5220\u9664\u8fd9\u4e9b sha256 \u6821\u9a8c\u548c\u6587\u4ef6\uff0c\u56e0\u4e3a\u6211\u4eec\u4e0d\u518d\u9700\u8981\u5b83\u4eec\uff0c\u6211\u4eec\u8fd8\u5c06\u91cd\u547d\u540d\u53ef\u6267\u884c\u6587\u4ef6\u4ee5\u5220\u9664\u7ed3\u5c3e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64")," \u5e76\u7ed9\u5b83\u4eec\u53ef\u6267\u884c\u6743\u9650\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm *.sha256\nmv fdbcli.x86_64 fdbcli\nmv fdbmonitor.x86_64 fdbmonitor\nmv fdbserver.x86_64 fdbserver\nchmod ug+x fdbcli fdbmonitor fdbserver\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e9b\u6587\u4ef6\u5939\u6765\u5b58\u50a8\u914d\u7f6e\u3001\u6570\u636e\u548c\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /<your_directory>/fdb_runtime/config\nmkdir -p /<your_directory>/fdb_runtime/data\nmkdir -p /<your_directory>/fdb_runtime/logs\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/<your_directory>/fdb_runtime/config/"),"\u6587\u4ef6\u5939\u4e0b\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"foundationdb.conf"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/foundationdb.conf\n[fdbmonitor]\nuser = root\n\n[general]\ncluster-file = /<your_directory>/fdb_runtime/config/fdb.cluster\nrestart-delay = 60\n\n[fdbserver]\n\ncommand = /<your_directory>/foundationdb/bin/fdbserver\ndatadir = /<your_directory>/fdb_runtime/data/$ID\nlogdir = /<your_directory>/fdb_runtime/logs/\npublic-address = auto:$ID\nlisten-address = public\n\n\n[fdbserver.4500]\nclass=stateless\n[fdbserver.4501]\nclass=transaction\n[fdbserver.4502]\nclass=storage\n[fdbserver.4503]\nclass=stateless\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u76f8\u540c\u7684\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"fdb.cluster"),"\u7684\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"<your_ip_address>"),"\u66ff\u6362\u4e3a\u4f60\u7684\u673a\u5668IP\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/fdb.cluster\nclusterdsc:test@<your_ip_address>:4500\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5c06FDB\u5b89\u88c5\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"systemd"),"\u670d\u52a1\u3002\u56e0\u6b64\uff0c\u5728\u540c\u4e00\u6587\u4ef6\u5939\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"fdb.service"),"\u7684\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/fdb.service\n[Unit]\nDescription=FoundationDB (KV storage for cnch metastore)\n\n[Service]\nRestart=always\nRestartSec=30\nTimeoutStopSec=600\nExecStart=/<your_directory>/foundationdb/bin/fdbmonitor --conffile /<your_directory>/fdb_runtime/config/foundationdb.conf --lockfile /<your_directory>/fdb_runtime/fdbmonitor.pid\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u51c6\u5907\u5de5\u4f5c\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u5c06FDB\u5b89\u88c5\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"systemd"),"\u4e2d\u3002"),(0,a.kt)("p",null,"\u5c06\u670d\u52a1\u6587\u4ef6\u590d\u5236\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/"),"\u76ee\u5f55\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cp fdb.service /etc/systemd/system/\n")),(0,a.kt)("p",null,"\u91cd\u65b0\u52a0\u8f7d\u670d\u52a1\u6587\u4ef6\u4ee5\u5305\u62ec\u65b0\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl daemon-reload\n")),(0,a.kt)("p",null,"\u542f\u7528\u5e76\u542f\u52a8\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable fdb.service\nsystemctl start fdb.service\n")),(0,a.kt)("p",null,"\u68c0\u67e5\u670d\u52a1\u5e76\u67e5\u770b\u5b83\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ systemctl status fdb.service\n\u25cf fdb.service - FoundationDB (KV storage for cnch metastore)\n   Loaded: loaded (/etc/systemd/system/fdb.service; disabled; vendor preset: enabled)\n   Active: active (running) since Tue 2023-01-17 18:35:42 CST; 20s ago\n\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u5df2\u7ecf\u5728\u4e00\u53f0\u673a\u5668\u4e0a\u5b89\u88c5\u4e86FDB\u670d\u52a1\uff0c\u6211\u5c06\u91cd\u590d\u76f8\u540c\u7684\u6b65\u9aa4\u5728\u53e6\u5916\u4e24\u53f0\u673a\u5668\u4e0a\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u5728\u6240\u6709\u4e09\u53f0\u673a\u5668\u4e0a\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u8fde\u63a5\u5b83\u4eec\u4ee5\u5f62\u6210\u4e00\u4e2a\u96c6\u7fa4\u3002\u73b0\u5728\u56de\u5230\u7b2c\u4e00\u53f0\u8282\u70b9\uff0c\u4f7f\u7528fdbcli\u8fde\u63a5\u5230FDB\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./foundationdb/bin/fdbcli -C fdb_runtime/config/fdb.cluster\nUsing cluster file `fdb_runtime/config/fdb.cluster'.\n\nThe database is unavailable; type `status' for more information.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb>\n")),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u521d\u59cb\u5316\u6570\u636e\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"configure new single ssd\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4ece\u53e6\u5916\u4e24\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u52a0\u5165\u96c6\u7fa4\uff0c\u5e76\u5c06\u5730\u5740\u66ff\u6362\u4e3a\u4f60\u7684\u673a\u5668\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"coordinators <node_1_ip_address>:4500 <node_2_ip_address>:4500 <node_3_ip_address>:4500\n")),(0,a.kt)("p",null,"\u7136\u540e\u9000\u51fafdbcli\uff0c\u4f60\u4f1a\u53d1\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"fdb.cluster"),"\u6587\u4ef6\u73b0\u5728\u6709\u4e86\u65b0\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat fdb_runtime/config/fdb.cluster\n# DO NOT EDIT!\n# This file is auto-generated, it is not to be edited by hand\nclusterdsc:wwxVEcyLvSiO3BGKxjIw7Sg5d1UTX5ad@example1.host.com:4500,example2.host.com:4500,example3.host.com:4500\n")),(0,a.kt)("p",null,"\u5c06\u6b64\u6587\u4ef6\u590d\u5236\u5230\u53e6\u5916\u4e24\u53f0\u673a\u5668\u5e76\u66ff\u6362\u65e7\u6587\u4ef6\uff0c\u7136\u540e\u91cd\u65b0\u542f\u52a8fdb\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl restart fdb.service\n")),(0,a.kt)("p",null,"\u7136\u540e\u8fd4\u56de\u7b2c\u4e00\u53f0\u673a\u5668\uff0c\u518d\u6b21\u4f7f\u7528fdbcli\u8fde\u63a5\u5230FDB\uff0c\u5e76\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5197\u4f59\u6a21\u5f0f\u66f4\u6539\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"triple"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"configure triple\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728fdbcli\u4e2d\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\u547d\u4ee4\u4ee5\u67e5\u770b\u7ed3\u679c\uff0c\u4f60\u5e94\u8be5\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"fdb> status\n\nUsing cluster file `fdb_runtime/config/fdb.cluster'.\n\nConfiguration:\n  Redundancy mode        - triple\n  Storage engine         - ssd-2\n  Coordinators           - 3\n  Usable Regions         - 1\n")),(0,a.kt)("p",null,"\u8fd9\u5c31\u5b8c\u6210\u4e86FoundationDB\u670d\u52a1\u5668\u7684\u5b89\u88c5\u3002\u73b0\u5728\u4f60\u62e5\u6709\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"fdb.cluster"),"\u6587\u4ef6\u3002\u6211\u4eec\u5c06\u5728Byconity\u7684\u914d\u7f6e\u4e2d\u4f7f\u7528\u5b83\u3002"))}u.isMDXComponent=!0}}]);