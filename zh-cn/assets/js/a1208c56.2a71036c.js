"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[451],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(k,c(c({ref:t},u),{},{components:a})):r.createElement(k,c({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=a[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(4778),n=(a(9496),a(9613));const l={title:"\u76d1\u63a7\u96c6\u7fa4",sidebar_position:5,tags:["Docs"]},c="\u76d1\u63a7\u96c6\u7fa4",i={unversionedId:"admin-guides/monitoring",id:"admin-guides/monitoring",title:"\u76d1\u63a7\u96c6\u7fa4",description:"\u5e38\u89c1\u7684\u76d1\u63a7\u6307\u6807",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/admin-guides/monitoring.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/monitoring",permalink:"/zh-cn/docs/admin-guides/monitoring",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/admin-guides/monitoring.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:5,frontMatter:{title:"\u76d1\u63a7\u96c6\u7fa4",sidebar_position:5,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u53ef\u7528",permalink:"/zh-cn/docs/admin-guides/high-availability"},next:{title:"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570",permalink:"/zh-cn/docs/admin-guides/cluster-configuration"}},s={},o=[{value:"\u5e38\u89c1\u7684\u76d1\u63a7\u6307\u6807",id:"\u5e38\u89c1\u7684\u76d1\u63a7\u6307\u6807",level:2},{value:"Prometheus \u76d1\u63a7\u6307\u6807\uff1a",id:"prometheus-\u76d1\u63a7\u6307\u6807",level:3},{value:"VictoriaMetric \u6307\u6807\u805a\u5408\uff1a",id:"victoriametric-\u6307\u6807\u805a\u5408",level:3},{value:"\u4e00\u4e9b\u91cd\u8981\u6307\u6807",id:"\u4e00\u4e9b\u91cd\u8981\u6307\u6807",level:2},{value:"\u914d\u7f6e Server\u7684 Grafana \u770b\u677f",id:"\u914d\u7f6e-server\u7684-grafana-\u770b\u677f",level:2},{value:"\u91cd\u8981\u6307\u6807",id:"\u91cd\u8981\u6307\u6807",level:2},{value:"\u914d\u7f6eTSO \u7684Grafana \u770b\u677f",id:"\u914d\u7f6etso-\u7684grafana-\u770b\u677f",level:2}],u={toc:o},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u76d1\u63a7\u96c6\u7fa4"},"\u76d1\u63a7\u96c6\u7fa4"),(0,n.kt)("h2",{id:"\u5e38\u89c1\u7684\u76d1\u63a7\u6307\u6807"},"\u5e38\u89c1\u7684\u76d1\u63a7\u6307\u6807"),(0,n.kt)("h3",{id:"prometheus-\u76d1\u63a7\u6307\u6807"},"Prometheus \u76d1\u63a7\u6307\u6807\uff1a"),(0,n.kt)("p",null,"\u5f15\u64ce\u5728 HTTP \u63a5\u53e3 ",(0,n.kt)("inlineCode",{parentName:"p"},"/metrics")," \u8def\u5f84\u4e0b\u5410\u51fa\u76d1\u63a7\u9879\uff0c\u9ed8\u8ba4\u7aef\u53e3 8123\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5bf9\u5e94\u7aef\u53e3\u8f93\u51fa\u3002"),(0,n.kt)("p",null,"\u53ef\u901a\u8fc7 kubectl \u67e5\u770b\u5bf9\u5e94\u7684 metric \u8f93\u51fa"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl port-forward -n cnch cnch-default-server-0 8123:8123\n# \u7528port-forward\u529f\u80fd\u4ee3\u7406\u7aef\u53e3\n\n")),(0,n.kt)("p",null,"\u4e4b\u540e\u53ef\u4ee5\u7528\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:8123/metrics")," \uff0c\u53ef\u67e5\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a\u7684\u6307\u6807\u663e\u793a\u3002\u6bcf\u4e00\u884c\u5bf9\u5e94\u4e00\u4e2a\u5177\u4f53\u6307\u6807\u9879\uff0c\u7b26\u5408 Prometheus \u7ea6\u5b9a\u7684\u6307\u6807\u683c\u5f0f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1881).Z,width:"2208",height:"496"})),(0,n.kt)("h3",{id:"victoriametric-\u6307\u6807\u805a\u5408"},"VictoriaMetric \u6307\u6807\u805a\u5408\uff1a"),(0,n.kt)("p",null,"\u5bf9\u6307\u6807\u7684\u5b58\u50a8\u9009\u62e9 VictoriaMetric\uff0c\u65b9\u4fbf\u8fdb\u884c\u5b58\u50a8\u7684\u6a2a\u5411\u6269\u5c55\u548c\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\u3002\u5176\u4e2d\u91cd\u8981\u7684\u529f\u80fd\u662f VMRule\uff0c\u53ef\u5bf9\u539f\u59cb\u6307\u6807\u8fdb\u884c\u805a\u5408\u3002\u56e0\u5404\u7ec4\u4ef6\u5410\u51fa\u7684\u539f\u59cb Prometheus \u6307\u6807\u5176\u4e2d\u4e00\u90e8\u5206\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6765\u6784\u5efa\u76d1\u63a7\u544a\u8b66\uff0c\u53e6\u4e00\u90e8\u5206\u6bd4\u8f83\u590d\u6742\uff0c\u4e0d\u5bb9\u6613\u76f4\u63a5\u6784\u5efa\u76d1\u63a7\u770b\u677f\u548c\u544a\u8b66\uff0c\u6240\u4ee5\u901a\u8fc7 VWRule \u8fdb\u884c\u805a\u5408\u3002"),(0,n.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u89c4\u5219\u53c2\u8003\u6587\u4ef6 ",(0,n.kt)("a",{target:"_blank",href:a(321).Z},"cnch-metrics.yaml"),"\uff0c\u53ef\u901a\u8fc7kubectl\u6267\u884c\u914d\u7f6e\u751f\u6548\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubctl apply -f cnch-metrics.yaml # \u914d\u7f6e\u5bf9\u5e94rule\n")),(0,n.kt)("h1",{id:"\u76d1\u63a7\u670d\u52a1\u8282\u70b9server"},"\u76d1\u63a7\u670d\u52a1\u8282\u70b9\uff08Server\uff09"),(0,n.kt)("h2",{id:"\u4e00\u4e9b\u91cd\u8981\u6307\u6807"},"\u4e00\u4e9b\u91cd\u8981\u6307\u6807"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\uff08\u5176\u4e2d\u5e26\u53cc\u5f15\u53f7\u7684\u662f\u7ecf\u8fc7 VM \u805a\u5408\u7684\uff09"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cnch:latency:queries_cluster:pct95 cnch:latency:queries_cluster:pct99"),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5ef6\u8fdf pct99 \u548c pct55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cnch:latency:queries_cluster:slow_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5927\u4e8e 10s \u7684\u6162\u67e5\u8be2\u5360\u6bd4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cnch:profile_events:labelled_query_vw:total_rate5m"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6240\u6709 VW \u7684\u603b QPS\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cnch:profile_events:labelled_query_vw:error_rate5m"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6240\u6709 VW \u5931\u8d25\u7684 QPS\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cnch_current_metrics_query"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5176\u4e2d\u7684 label \u540d query_type \u503c\u4e3a insert \u662f\u5199\u5165\u7684 query")))),(0,n.kt)("h2",{id:"\u914d\u7f6e-server\u7684-grafana-\u770b\u677f"},"\u914d\u7f6e Server\u7684 Grafana \u770b\u677f"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4949).Z,width:"3337",height:"9813"})),(0,n.kt)("p",null,"\u770b\u677f\u91cd\u70b9\u5185\u5bb9\u8bf4\u660e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u770b\u677f\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8868\u8fbe\u5f0f"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Queries Ducations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'cnch:latency:queries_cluster:pct95{namespace="$namespace", cluster="$cluster"}\u548ccnch:latency:queries_cluster:pct99{namespace="$namespace", cluster="$cluster"}')),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5ef6\u8fdf\u7684 P99 \u548c P95 \u503c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Slow Queries > 10s"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'cnch:latency:queries_cluster:slow_ratio{namespace="$namespace", cluster="$cluster"}')),(0,n.kt)("td",{parentName:"tr",align:null},"\u5927\u4e8e 10s \u7684\u6162\u67e5\u8be2\u5360\u6bd4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Queries Per Second"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'sum(cnch:profile_events:labelled_query_vw:total_rate5m{namespace="$namespace", cluster="$cluster", workload=~"$workload"})')),(0,n.kt)("td",{parentName:"tr",align:null},"\u6240\u6709 VW \u7684\u603b QPS\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VW Queries Success"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'1 - (sum by (pod) (cnch:profile_events:labelled_query_vw:error_rate5m{cluster="$cluster", namespace="$namespace", workload=~"$workload", pod=~"$pod"}) sum by (pod) (cnch:profile_events:labelled_query_vw:total_rate5m{cluster="$cluster", namespace="$namespace", workload=~"$workload", pod=~"$pod"}))')),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 error_rate5m \u548c total_rate5m \u76f8\u51cf\u548c\u9664\u540e\uff0c\u5f97\u5230\u6210\u529f\u7387")))),(0,n.kt)("p",null,"Server \u7684\u5b8c\u6574 Grafana \u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff0c\u53ef\u5728 Grafana \u7684 UI \u5bfc\u5165\uff1a",(0,n.kt)("a",{target:"_blank",href:a(4786).Z},"cnch-server.json")),(0,n.kt)("h1",{id:"\u76d1\u63a7-tso"},"\u76d1\u63a7 TSO"),(0,n.kt)("h2",{id:"\u91cd\u8981\u6307\u6807"},"\u91cd\u8981\u6307\u6807"),(0,n.kt)("p",null,"\u4e0b\u9762\u6458\u5f55\u5bf9 TSO \u6bd4\u8f83\u91cd\u8981\u7684\u6307\u6807\uff0c\u8fdb\u884c\u8bf4\u660e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cnch:tso:requests:error_rate5m"),(0,n.kt)("td",{parentName:"tr",align:null},"TSO \u7ec4\u4ef6\u7684\u5931\u8d25 QPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cnch:tso:requests:total_rate5m"),(0,n.kt)("td",{parentName:"tr",align:null},"TSO \u7ec4\u4ef6\u7684\u603b QPS")))),(0,n.kt)("h2",{id:"\u914d\u7f6etso-\u7684grafana-\u770b\u677f"},"\u914d\u7f6eTSO \u7684Grafana \u770b\u677f"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9752).Z,width:"3355",height:"5626"})),(0,n.kt)("p",null,"\u5176\u4e2d\u91cd\u8981\u7684\u6307\u6807\u8bf4\u660e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u770b\u677f\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8868\u8fbe\u5f0f"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TSO Server Requests Per Sec"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'cnch:tso:requests:total_rate5m{namespace="$namespace", cluster="$cluster", workload=~".*server.*"}')),(0,n.kt)("td",{parentName:"tr",align:null},"Server \u7ec4\u4ef6\u5bf9 TSO \u67e5\u8be2\u7684\u7684 QPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TSO Worker Requests Per Sec"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'cnch:tso:requests:total_rate5m{namespace="$namespace", cluster="$cluster", workload!~".*(server\\|**kafka**).*"}')),(0,n.kt)("td",{parentName:"tr",align:null},"\u53bb\u9664 server \u548c kafka\uff0c\u53ea\u770b\u5404 worker \u5bf9 TSO \u7684\u8bf7\u6c42 QPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TSO Servers Requests Server Rate"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'cnch:tso:requests:error_rate5m{namespace="$namespace", cluster="$cluster", workload=~".*server.*"} cnch:tso:requests:total_rate5m{namespace="$namespace", cluster="$cluster", workload=~".*server.*"}')),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528 error_rate \u548c total_rate \u76f8\u9664\uff0c\u8fc7\u6ee4\u51fa TSO \u67e5\u8be2\u7684\u5931\u8d25\u7387")))),(0,n.kt)("p",null,"TSO \u5b8c\u6574\u7684\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a",(0,n.kt)("a",{target:"_blank",href:a(8027).Z},"cnch-tso.json")),(0,n.kt)("h1",{id:"\u5176\u4ed6\u53ef\u4ee5\u76d1\u63a7\u7684\u4fe1\u606f"},"\u5176\u4ed6\u53ef\u4ee5\u76d1\u63a7\u7684\u4fe1\u606f"),(0,n.kt)("p",null,"\u5176\u4ed6\u5e38\u7528\u7684\u76d1\u63a7\u770b\u677f\u914d\u7f6e\u6b64\u5904\u5217\u51fa\uff0c\u4e0d\u518d\u4e00\u4e00\u622a\u56fe"),(0,n.kt)("p",null,"Cluster Overview: \u6574\u4e2a\u96c6\u7fa4\u6982\u89c8 ",(0,n.kt)("a",{target:"_blank",href:a(8729).Z},"cnch-cluster.json")),(0,n.kt)("p",null,"VW: \u5404\u8ba1\u7b97\u7ec4 Virtual Warehouse \u7684\u8be6\u60c5 ",(0,n.kt)("a",{target:"_blank",href:a(2918).Z},"cnch-vw.json")),(0,n.kt)("p",null,"DaemonManager: \u7ba1\u7406 Merge \u7b49\u540e\u53f0\u4efb\u52a1\u7684\u7ec4\u4ef6 ",(0,n.kt)("a",{target:"_blank",href:a(4925).Z},"cnch-daemonmanager.json")))}d.isMDXComponent=!0},8729:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/cnch-cluster-defa551fd417f26c9d0c8e0c0e9c8613.json"},4925:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/cnch-daemonmanager-50a069af4bc2e5eb5bd58652959bb1f8.json"},321:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/cnch-metrics-56612630a00f5b499057c51a1ce29067.yaml"},4786:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/cnch-server-9c3a5e54b12f5d1f9fd04500abba5385.json"},8027:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/cnch-tso-002675d24f0dc0acf8901284c6ffdbb5.json"},2918:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/cnch-vw-9aaaa58db804949d69e5f0f302c1546e.json"},9752:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcn3CLoRUlpCEDJnEy8f6dxPe-9a6fde5cfab3aa39288f253a549a1c39.jpeg"},1881:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcnMqU9e8xvq46v7IH9ORtLCf-69b89b581b04f353e3f545df9f414d45.png"},4949:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/boxcnvwueXWFISCRgsRJ66J2vKb-8988c2af21fed0034abda7d7d9f4154c.jpeg"}}]);