"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3290],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(y,a(a({ref:t},d),{},{components:n})):o.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(64778),r=(n(59496),n(49613));const i={},a="ByConity development environment",l={unversionedId:"quick-start/set-up-byconity-dev-env",id:"version-0.2.0/quick-start/set-up-byconity-dev-env",title:"ByConity development environment",description:"Our core developers develop ByConity using a plugin called Dev Containers in vscode.This plugin allows us to connect to a Docker container environment running on a Debian 11 virtual machine.So we recommend you to do the same in case of compatibility issues.",source:"@site/versioned_docs/version-0.2.0/quick-start/set-up-byconity-dev-env.mdx",sourceDirName:"quick-start",slug:"/quick-start/set-up-byconity-dev-env",permalink:"/docs/0.2.0/quick-start/set-up-byconity-dev-env",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/quick-start/set-up-byconity-dev-env.mdx",tags:[],version:"0.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy ByConity in Kubernetes",permalink:"/docs/0.2.0/quick-start/deploy-byconity-with-k8s"},next:{title:"ANSI Compatibility",permalink:"/docs/0.2.0/sql-syntax/ansi-compatibility"}},c={},s=[{value:"run dev-env image",id:"run-dev-env-image",level:2},{value:"Install dev container",id:"install-dev-container",level:2},{value:"Connect to the Docker container",id:"connect-to-the-docker-container",level:2},{value:"How to fix the Header files cannot be found problem",id:"how-to-fix-the-header-files-cannot-be-found-problem",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"byconity-development-environment"},"ByConity development environment"),(0,r.kt)("p",null,"Our core developers develop ByConity using a plugin called Dev Containers in vscode.This plugin allows us to connect to a Docker container environment running on a Debian 11 virtual machine.So we recommend you to do the same in case of compatibility issues.\nFor more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/blob/master/docker/debian/dev-env/README.md"},"offical dev"),"\u3002"),(0,r.kt)("h2",{id:"run-dev-env-image"},"run dev-env image"),(0,r.kt)("p",null,"Start by pulling the image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ByConity/ByConity.git\n\ncd byconity/docker/debian/dev-env\n\n# get the latest image\nmake pull\n")),(0,r.kt)("p",null,'You can start the container "byconity/dev-env" with the following command:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# run container\nmake run\n")),(0,r.kt)("p",null,"Inside the container, you can compile the ByConity code using the following commands.\nThe compiled binary is located in your local file system under ",(0,r.kt)("inlineCode",{parentName:"p"},"${BYCONITY_SOURCE}/build_dev/program")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# get submodule, otherwise the IDE reports the error include head file error\n\ngit submodule update --init --recursive\n\ncmake -S /root/ByConity -B build_dev\n\n# 64 means that 64 threads are used for building, you have to change it depending on your computer\nninja -C build_dev clickhouse-server -j 64\n")),(0,r.kt)("h1",{id:"config-vscode"},"Config vscode"),(0,r.kt)("h2",{id:"install-dev-container"},"Install dev container"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Install dev container",src:n(62510).Z,width:"1872",height:"731"})),(0,r.kt)("h1",{id:"develop-in-vscode"},"Develop in vscode"),(0,r.kt)("h2",{id:"connect-to-the-docker-container"},"Connect to the Docker container"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker container connection",src:n(53299).Z,width:"1342",height:"808"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you use vscode for the first time, it reports many problems with header files cannot be found, as follows")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Header file cannot be found problems",src:n(40274).Z,width:"2124",height:"1190"})),(0,r.kt)("h2",{id:"how-to-fix-the-header-files-cannot-be-found-problem"},"How to fix the Header files cannot be found problem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now you need to go to the ~/ByConity directory of your Docker container and run the following command to download the submodules in Docker. The repository to download is quite large, so be patient and make sure your network is working properly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the module download is complete, switch to the ~/ByConity directory again and run"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# get submodule is essential, otherwise the IDE will report an include head file error\n\ngit submodule update --init --recursive\n\n# cmake again\ncmake -S /root/ByConity -B build_dev\n\n# 64 means that 64 threads are used for building, you need change this depending on your computer\nninja -C build_dev clickhouse-server -j 64\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the directory where cmake runs\n",(0,r.kt)("img",{alt:"the directory where cmake runs",src:n(44581).Z,width:"2084",height:"522"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After the execution is finished, the problem that the header file cannot be found is solved.\n",(0,r.kt)("img",{alt:"fixed problems with header files not being found",src:n(46961).Z,width:"2070",height:"1258"})))))}p.isMDXComponent=!0},40274:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Header file cannot be found problems-0118f6dc38a982c6915efe7877fe0eb1.jpg"},62510:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Install dev container-0557a8a1cf6908b29a6f7b9b6c197785.jpg"},53299:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Open the development container in vscode-8346e00e14c59c023816a1fe650cdb72.jpg"},46961:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/fixed problems with header files not being found-492100f49f1a516c7b397a39a55fe2a2.jpg"},44581:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/the directory where cmake runs-bd18dad5e7b0aeb243feae55ae9964b5.jpg"}}]);