"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2854],{49613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var i=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?i.createElement(h,r(r({ref:n},s),{},{components:t})):i.createElement(h,r({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(64778),o=(t(59496),t(49613));const a={title:"Client Connection",sidebar_position:1,tags:["Docs"]},r="Connecting to the Client",l={unversionedId:"integration/client-connection",id:"integration/client-connection",title:"Client Connection",description:"Document Type: Tutorial",source:"@site/docs/integration/client-connection.mdx",sourceDirName:"integration",slug:"/integration/client-connection",permalink:"/docs/integration/client-connection",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/integration/client-connection.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"Client Connection",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Materialized View",permalink:"/docs/query-optimization/materialized-view"},next:{title:"Data Visualization",permalink:"/docs/integration/data-visualization"}},c={},u=[{value:"Command Line Interface (CLI)",id:"command-line-interface-cli",level:2},{value:"Docker Client",id:"docker-client",level:3},{value:"Clickhouse Client",id:"clickhouse-client",level:3},{value:"Drivers for Various Languages",id:"drivers-for-various-languages",level:2},{value:"Python",id:"python",level:3},{value:"clickhouse-connect",id:"clickhouse-connect",level:4},{value:"clickhouse-driver",id:"clickhouse-driver",level:4},{value:"Go",id:"go",level:3},{value:"Connect using clickhouse-go",id:"connect-using-clickhouse-go",level:4},{value:"Connect using ch-go",id:"connect-using-ch-go",level:4},{value:"Java",id:"java",level:3},{value:"HTTP",id:"http",level:2},{value:"Reference Documentation",id:"reference-documentation",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-to-the-client"},"Connecting to the Client"),(0,o.kt)("p",null,"Document Type: Tutorial"),(0,o.kt)("p",null,"Document Structure: Tutorial Purpose, Preparation, Step-by-Step Explanation & Examples, Related Document Recommendations;"),(0,o.kt)("p",null,"Content Summary:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What client or driver methods does ByConity provide for interacting with other systems?"),(0,o.kt)("li",{parentName:"ol"},"How to download and start these clients after deploying the cluster?")),(0,o.kt)("h2",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,o.kt)("h3",{id:"docker-client"},(0,o.kt)("a",{parentName:"h3",href:"https://hub.docker.com/r/yandex/clickhouse-server/"},"Docker Client")),(0,o.kt)("p",null,"If you have already installed Docker, you can establish a ByConity connection with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it yandex/clickhouse-client --host 127.0.0.1 --port 9000 --user default --password xxxx\n")),(0,o.kt)("p",null,"The following options are all ",(0,o.kt)("strong",{parentName:"p"},"optional")," and depend on your situation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--host xxx"),": Host IP or domain name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--port 9000"),": TCP port, default is 9000"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--user default"),": Username"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--password xxxx"),": Password")),(0,o.kt)("h3",{id:"clickhouse-client"},"Clickhouse Client"),(0,o.kt)("p",null,"Byconity is compatible with clients provided by the ClickHouse open-source community."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/integrations/sql-clients/clickhouse-client-local"},"Reference for installing ClickhouseClient on various operating systems"),". Below is an installation command for MacOS x86_64 as an example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/macos/clickhouse' \\\n&& chmod a+x ./clickhouse\n\nsudo mv ./clickhouse /usr/local/bin/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Establish a connection:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse client --host 127.0.0.1 --password xxxx\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can view optional parameters with ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse client --help"),". The parameters here are consistent with those following ",(0,o.kt)("inlineCode",{parentName:"li"},"docker run -it yandex/clickhouse-client ..."))),(0,o.kt)("h2",{id:"drivers-for-various-languages"},"Drivers for Various Languages"),(0,o.kt)("p",null,"The open-source drivers for various languages provided by Clickhouse can be directly used for Byconity connections."),(0,o.kt)("h3",{id:"python"},"Python"),(0,o.kt)("h4",{id:"clickhouse-connect"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/ClickHouse/clickhouse-connect"},"clickhouse-connect")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clickhouse-connect only supports python3"),(0,o.kt)("li",{parentName:"ul"},"Installation: ",(0,o.kt)("inlineCode",{parentName:"li"},"pip3 install clickhouse-connect")),(0,o.kt)("li",{parentName:"ul"},"Example code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import clickhouse_connect\n\n# connect\nclient = clickhouse_connect.get_client(host='localhost', username='default', password='xxxx')\n\n# query\nquery_result = client.query('SHOW DATABASES;')\nprint(query_result.result_set)\n")),(0,o.kt)("h4",{id:"clickhouse-driver"},(0,o.kt)("a",{parentName:"h4",href:"https://pypi.org/project/clickhouse-driver/"},"clickhouse-driver")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python3 installation: ",(0,o.kt)("inlineCode",{parentName:"li"},"pip3 install clickhouse-driver")),(0,o.kt)("li",{parentName:"ul"},"Python2 installation: ",(0,o.kt)("inlineCode",{parentName:"li"},"pip install clickhouse-driver")),(0,o.kt)("li",{parentName:"ul"},"Example code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from clickhouse_driver import Client\nfrom clickhouse_driver import connect\n\n# connect\nclient = Client(host='localhost', port=9000, user='default', password='xxxx')\n\n# query\nquery_result = client.execute('SHOW DATABASES;')\nprint(query_result)\n")),(0,o.kt)("h3",{id:"go"},"Go"),(0,o.kt)("h4",{id:"connect-using-clickhouse-go"},"Connect using ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/ClickHouse/clickhouse-go"},"clickhouse-go")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compared to ch-go below, clickhouse-go provides more friendly support for Go types and is recommended. It is implemented using ch-go underneath."),(0,o.kt)("li",{parentName:"ul"},"Install in your project with ",(0,o.kt)("inlineCode",{parentName:"li"},"go get github.com/ClickHouse/clickhouse-go/v2")),(0,o.kt)("li",{parentName:"ul"},"Example code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "context"\n "log"\n "net"\n "time"\n\n "github.com/ClickHouse/clickhouse-go/v2"\n)\n\nfunc main() {\n ctx := context.Background()\n\n // Configure connection parameters\n conn, err := clickhouse.Open(&clickhouse.Options{\n Addr:     []string{"127.0.0.1"},\n Auth:     clickhouse.Auth{Database: "my_db", Username: "default", Password: "xxxx"},\n DialContext: func(ctx context.Context, addr string) (net.Conn, error) {\n var d net.Dialer\n return d.DialContext(ctx, "tcp", addr)\n },\n Settings: clickhouse.Settings{\n "max_execution_time": 60,\n },\n DialTimeout:      time.Duration(10) * time.Second,\n MaxOpenConns:     5,\n MaxIdleConns:     5,\n ConnMaxLifetime:  time.Duration(10) * time.Minute,\n ConnOpenStrategy: clickhouse.ConnOpenInOrder,\n })\n if err != nil {\n log.Panic(err)\n }\n\n if err := conn.Ping(ctx); err != nil {\n log.Panic(err)\n }\n\n // Execute SQL\n if err := conn.Exec(ctx, "SHOW DATABASES;"); err != nil {\n log.Panic(err)\n }\n}\n')),(0,o.kt)("h4",{id:"connect-using-ch-go"},"Connect using ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/ClickHouse/ch-go"},"ch-go")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ch-go provides better support for Clickhouse data types and slightly higher performance than clickhouse-go."),(0,o.kt)("li",{parentName:"ul"},"Install with ",(0,o.kt)("inlineCode",{parentName:"li"},"go get github.com/ClickHouse/ch-go")),(0,o.kt)("li",{parentName:"ul"},"Example code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "context"\n "fmt"\n\n "github.com/ClickHouse/ch-go"\n "github.com/ClickHouse/ch-go/proto"\n)\n\nfunc main() {\n ctx := context.Background()\n c, err := ch.Dial(ctx, ch.Options{Address: "localhost:9000"})\n if err != nil {\n panic(err)\n }\n var (\n numbers int\n data    proto.ColUInt64\n )\n if err := c.Do(ctx, ch.Query{\n Body: "SELECT number FROM system.numbers LIMIT 500000000",\n Result: proto.Results{\n {Name: "number", Data: &data},\n },\n // OnResult will be called on the next received data block.\n OnResult: func(ctx context.Context, b proto.Block) error {\n numbers += len(data)\n return nil\n },\n }); err != nil {\n panic(err)\n }\n fmt.Println("numbers:", numbers)\n}\n')),(0,o.kt)("h3",{id:"java"},"Java"),(0,o.kt)("p",null,"Connecting with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-jdbc"},"clickhouse-jdbc")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install via Maven configuration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    \x3c!-- please stop using ru.yandex.clickhouse as it's been deprecated --\x3e\n    <groupId>com.clickhouse</groupId>\n    <artifactId>clickhouse-jdbc</artifactId>\n    <version>0.3.2-patch11</version>\n    \x3c!-- use uber jar with all dependencies included, change classifier to http for smaller jar --\x3e\n    <classifier>all</classifier>\n    <exclusions>\n        <exclusion>\n            <groupId>*</groupId>\n            <artifactId>*</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String url = "jdbc:ch://localhost:8123";\nProperties properties = new Properties();\nproperties.setProperty("max_execution_time", "120");\nClickHouseDataSource dataSource = new ClickHouseDataSource(url, properties);\ntry (Connection conn = dataSource.getConnection("default", "password");\n    Statement stmt = conn.createStatement()) {\n    ResultSet rs = stmt.executeQuery("SHOW DATABASES;");\n    while(rs.next()) {\n        // ...\n    }\n}\n')),(0,o.kt)("h2",{id:"http"},"HTTP"),(0,o.kt)("p",null,"ByConity also provides an HTTP connection method, allowing you to execute SQL using curl or Postman. Here's a curl example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST '127.0.0.1:8123/?max_execution_time=60&default_format=Native' \\\n--header 'Authorization: Basic xxx' \\\n--header 'Content-Type: text/plain' \\\n--data-raw 'SHOW DATABASES;'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Basic Auth")," (username + password) encryption method is used, and the encrypted result corresponds to the ",(0,o.kt)("inlineCode",{parentName:"li"},"--header 'Authorization: Basic xxx'")," above."),(0,o.kt)("li",{parentName:"ul"},"The SQL to be executed is directly written in the Body, corresponding to the ",(0,o.kt)("inlineCode",{parentName:"li"},"--data-raw 'SHOW DATABASES;'")," above."),(0,o.kt)("li",{parentName:"ul"},"The default port for the HTTP interface is ",(0,o.kt)("inlineCode",{parentName:"li"},"8123"),"."),(0,o.kt)("li",{parentName:"ul"},"Example parameters:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_execution_time=60")," specifies the maximum wait time (in seconds) for the query."),(0,o.kt)("li",{parentName:"ul"},"By default, the returned data is in ",(0,o.kt)("inlineCode",{parentName:"li"},"TabSeparated")," format, but ",(0,o.kt)("inlineCode",{parentName:"li"},"default_format")," can specify a different default format.")))),(0,o.kt)("h2",{id:"reference-documentation"},"Reference Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/zh/interfaces/http"},"Clickhouse HTTP Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/integrations/language-clients"},"Clickhouse Drivers for Various Languages Reference"))))}d.isMDXComponent=!0}}]);