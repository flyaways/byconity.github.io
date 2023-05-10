"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8875],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),i=s(t),m=o,h=i["".concat(d,".").concat(m)]||i[m]||u[m]||r;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p[i]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(4778),o=(t(9496),t(9613));const r={title:"\u5b89\u88c5 HDFS",tags:["Docs"]},l=void 0,p={unversionedId:"deployment/hdfs-installation",id:"deployment/hdfs-installation",title:"\u5b89\u88c5 HDFS",description:"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u5c06\u57283\u53f0\u673a\u5668\u4e0a\u8bbe\u7f6eHDFS\uff0c\u5176\u4e2d1\u53f0\u673a\u5668\u7528\u4e8enamenode\uff0c\u5176\u4ed62\u53f0\u673a\u5668\u7528\u4e8edatanode\u3002\u6211\u53c2\u8003\u4e86\u4ee5\u4e0b\u5b98\u65b9\u6587\u6863SingleCluster\u548cClusterSetup\u3002\u6211\u5c06\u5b89\u88c5HDFS\u7248\u672c3.3.4\uff0c\u56e0\u6b64\u6211\u9700\u8981Java-8\uff0c\u56e0\u4e3a\u8fd9\u662f\u63a8\u8350\u7684Java\u7248\u672c\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/hdfs-installation.mdx",sourceDirName:"deployment",slug:"/deployment/hdfs-installation",permalink:"/zh-cn/docs/deployment/hdfs-installation",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/hdfs-installation.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"\u5b89\u88c5 HDFS",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5 FoundationDB",permalink:"/zh-cn/docs/deployment/foundationdb-installation"},next:{title:"\u8f6f\u4ef6\u5305\u90e8\u7f72",permalink:"/zh-cn/docs/deployment/package-deployment"}},d={},s=[],c={toc:s},i="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(i,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u5c06\u57283\u53f0\u673a\u5668\u4e0a\u8bbe\u7f6eHDFS\uff0c\u5176\u4e2d1\u53f0\u673a\u5668\u7528\u4e8enamenode\uff0c\u5176\u4ed62\u53f0\u673a\u5668\u7528\u4e8edatanode\u3002\u6211\u53c2\u8003\u4e86\u4ee5\u4e0b\u5b98\u65b9\u6587\u6863",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html"},"SingleCluster"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/ClusterSetup.html"},"ClusterSetup"),"\u3002\u6211\u5c06\u5b89\u88c5HDFS\u7248\u672c3.3.4\uff0c\u56e0\u6b64\u6211\u9700\u8981Java-8\uff0c\u56e0\u4e3a\u8fd9\u662f\u63a8\u8350\u7684Java\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u57283\u53f0\u673a\u5668\u4e0a\u5b89\u88c5Java\u3002\u6709\u5f88\u591a\u5b89\u88c5Java\u7684\u65b9\u6cd5\uff0c\u4f46\u6211\u5c06\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\nsudo apt-get install openjdk-8-jdk\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u4e0b\u8f7d\u4e00\u4e2aHadoop\u53d1\u884c\u7248\uff0c\u89e3\u538b\u7f29\u5e76\u8fdb\u5165\u8be5\u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl -L -o hadoop-3.3.4.tar.gz https://dlcdn.apache.org/hadoop/common/stable/hadoop-3.3.4.tar.gz\n$ tar xvf hadoop-3.3.4.tar.gz\n$ ls\nhadoop-3.3.4  hadoop-3.3.4.tar.gz\n$ cd hadoop-3.3.4\n")),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u5728\u8be5\u76ee\u5f55\u4e2d\uff0c\u6211\u4eec\u7f16\u8f91\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hadoop-env.sh"),"\u4ee5\u8bbe\u7f6e\u9002\u5f53\u7684\u73af\u5883\u3002\u6211\u9700\u8981\u53d6\u6d88\u6ce8\u91ca\u5e76\u4fee\u6539\u4e0b\u9762\u7684\u884c\u4ee5\u8bbe\u7f6e\u4e00\u4e9b\u53d8\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export JAVA_HOME=/usr/lib/jvm/java-8-byteopenjdk-amd64\nexport HADOOP_HOME=/<your_directory>/hdfs/hadoop-3.3.4\nexport HADOOP_LOG_DIR=/<your_directory>/hdfs/logs\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u7f16\u8f91\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/core-site.xml"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u201cvalue\u201d\u6807\u7b7e\u5c06\u662f\u60a8\u7684namenode\u5730\u5740\u7684\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"<configuration>\n        <property>\n                <name>fs.defaultFS</name>\n                <value>hdfs://<your_name_node_ip_address>:12000</value>\n        </property>\n</configuration>\n")),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u6240\u6709\u4e09\u53f0\u673a\u5668\u7684\u901a\u7528\u8bbe\u7f6e\u3002\u4ece\u73b0\u5728\u5f00\u59cb\uff0cnamenode\u548cdatanode\u7684\u8bbe\u7f6e\u662f\u4e0d\u540c\u7684\u3002\n\u5728\u6211\u4eec\u60f3\u8981\u5b89\u88c5namenode\u7684\u8282\u70b9\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5305\u542bdatanode\u5217\u8868\u7684\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u5728\u6211\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u521b\u5efa\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"datanodes_list.txt"),"\uff0c\u5176\u5185\u5bb9\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /root/user_xyz/hdfs/datanodes_list.txt\n<datanode_1_address>\n<datanode_2_address>\n")),(0,o.kt)("p",null,"\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u4ee5\u5b58\u50a8namenode\u8fd0\u884c\u65f6\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /<your_directory>/hdfs/root_data_path_for_namenode\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u7f16\u8f91\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hdfs-site.xml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>dfs.replication</name>\n                <value>1</value>\n        </property>\n        <property>\n                <name>dfs.namenode.name.dir</name>\n                <value>file:///<your_directory>/hdfs/root_data_path_for_namenode</value>\n        </property>\n        <property>\n                <name>dfs.hosts</name>\n                <value>/<your_directory>/hdfs/datanodes_list.txt</value>\n        </property>\n\n</configuration>\n")),(0,o.kt)("p",null,"\u8fd9\u5c31\u662f\u5173\u4e8enamenode\u7684\u5168\u90e8\u5185\u5bb9\u3002\u73b0\u5728\u5bf9\u4e8e\u90a3\u4e24\u4e2a\u9700\u8981\u90e8\u7f72\u6570\u636e\u8282\u70b9\u7684\u8282\u70b9\uff0c\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u6765\u5b58\u50a8\u6570\u636e\u8282\u70b9\u7684\u8fd0\u884c\u65f6\u6570\u636e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /root/user_xyz/hdfs/root_data_path_for_datanode\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u7f16\u8f91\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hdfs-site.xml"),"\uff0c\u5185\u5bb9\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>dfs.data.dir</name>\n                <value>file:///<your_directory>/hdfs/root_data_path_for_datanode</value>\n        </property>\n</configuration>\n")),(0,o.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u914d\u7f6e\uff0c\u73b0\u5728\u8f6c\u5230namenode\u673a\u5668\uff0c\u8fdb\u5165hadoop\u76ee\u5f55\n\u683c\u5f0f\u5316\u6587\u4ef6\u7cfb\u7edf\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8namenode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs namenode -format\nbin/hdfs --daemon start namenode\n")),(0,o.kt)("p",null,"\u7136\u540e\u8fdb\u5165\u53e6\u5916\u4e24\u4e2a\u6570\u636e\u8282\u70b9\u673a\u5668\uff0c\u8fdb\u5165hadoop\u76ee\u5f55\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u6570\u636e\u8282\u70b9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs --daemon start datanode\n")),(0,o.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86HDFS\u7684\u8bbe\u7f6e\u3002\u73b0\u5728\u6211\u4eec\u5c06\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u6765\u5b58\u50a8\u6570\u636e\u3002\n\u56e0\u6b64\uff0c\u8fdb\u5165namenode\u673a\u5668\uff0c\u5728hadoop\u76ee\u5f55\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs dfs -mkdir -p /user/clickhouse/\nbin/hdfs dfs -chown clickhouse /user/clickhouse\nbin/hdfs dfs -chmod -R 775 /user/clickhouse\n")))}u.isMDXComponent=!0}}]);