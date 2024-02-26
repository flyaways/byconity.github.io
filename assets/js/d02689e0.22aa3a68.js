"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7933],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(4778),a=(n(9496),n(9613));const r={title:"Data Import Tuning",sidebar_position:3,tags:["Docs"]},o="Import Tuning",l={unversionedId:"data-import/data-import-tuning",id:"data-import/data-import-tuning",title:"Data Import Tuning",description:"Direct Write Method Tuning",source:"@site/docs/data-import/data-import-tuning.mdx",sourceDirName:"data-import",slug:"/data-import/data-import-tuning",permalink:"/docs/data-import/data-import-tuning",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/data-import/data-import-tuning.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"Data Import Tuning",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Data Description",permalink:"/docs/data-import/data-introduction"},next:{title:"Stream Import",permalink:"/docs/data-import/import-methods/stream-import"}},p={},u=[{value:"Direct Write Method Tuning",id:"direct-write-method-tuning",level:2},{value:"Dumper Method Tuning",id:"dumper-method-tuning",level:2}],s={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"import-tuning"},"Import Tuning"),(0,a.kt)("h2",{id:"direct-write-method-tuning"},"Direct Write Method Tuning"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT VALUES"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT INFILE"),", or the ",(0,a.kt)("inlineCode",{parentName:"p"},"PartWriter")," tool for writing, the number of generated Parts directly affects the number of writes to HDFS, which in turn affects the overall write time. To optimize this process, the number of Parts should be minimized."),(0,a.kt)("p",null,"The direct write process is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Read a portion of the file data."),(0,a.kt)("li",{parentName:"ol"},"Split this data based on ",(0,a.kt)("inlineCode",{parentName:"li"},"PartitionBy"),"."),(0,a.kt)("li",{parentName:"ol"},"Further split the data based on ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterBy"),"."),(0,a.kt)("li",{parentName:"ol"},"Write the split data as new Parts and store them in HDFS.")),(0,a.kt)("p",null,"Tuning suggestions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To reduce the number of Parts, we can arrange data with the same partition and Bucket together in the file. This way, when reading some new data each time, the number of generated Parts will be as small as possible. The data can be sorted according to the requirements of having the same partition and the same Bucket within the partition.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The calculation rules for Buckets are:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"SPLIT_NUMBER")," is not specified, the ",(0,a.kt)("inlineCode",{parentName:"li"},"BucketNumber")," is obtained by calculating the SipHash of the columns used by ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterByKey")," and then taking the modulus of the ",(0,a.kt)("inlineCode",{parentName:"li"},"BucketNumber"),"."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"SPLIT_NUMBER")," is specified:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Calculate ",(0,a.kt)("inlineCode",{parentName:"li"},"SplitValue"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterBy")," is a single column, use the ",(0,a.kt)("inlineCode",{parentName:"li"},"dtspartition")," function to calculate the corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"SplitValue"),"."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterBy")," is multiple columns, use ",(0,a.kt)("inlineCode",{parentName:"li"},"SipHash")," to calculate the corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"SplitValue")," for these columns."))),(0,a.kt)("li",{parentName:"ul"},"Calculate ",(0,a.kt)("inlineCode",{parentName:"li"},"BucketNumber"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If it is ",(0,a.kt)("inlineCode",{parentName:"li"},"WithRange"),", use ",(0,a.kt)("inlineCode",{parentName:"li"},"SplitValue * BucketCount / SplitNumber")," to calculate the corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"BucketNumber"),"."),(0,a.kt)("li",{parentName:"ul"},"If it is not ",(0,a.kt)("inlineCode",{parentName:"li"},"WithRange"),", use ",(0,a.kt)("inlineCode",{parentName:"li"},"SplitValue % BucketCount")," to calculate the corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"BucketNumber"),".")))))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"When reading files:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the size of each row of data is small, consider increasing ",(0,a.kt)("inlineCode",{parentName:"li"},"max_insert_block_size")," to read larger blocks of data at a time, resulting in larger Parts."),(0,a.kt)("li",{parentName:"ul"},"If the read file is not from HDFS/CFS and multiple files are matched using wildcards, adjust both ",(0,a.kt)("inlineCode",{parentName:"li"},"min_insert_block_size_rows")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"min_insert_block_size_bytes")," accordingly.")),(0,a.kt)("h2",{id:"dumper-method-tuning"},"Dumper Method Tuning"),(0,a.kt)("p",null,"When using Dumper for data migration, a table and some of its partitions can be specified at once and written to HDFS. The time consumption of this process is related to the data size of the table and the number of Parts. To optimize this process:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"parallel")," parameter can be used to increase the concurrency of uploading Parts."),(0,a.kt)("li",{parentName:"ul"},"It is possible to wait for the Parts to merge locally before using Dumper for uploading.")))}c.isMDXComponent=!0}}]);