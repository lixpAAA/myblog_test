(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{256:function(t,a,s){"use strict";s.r(a);var r=s(17),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"关于arcgis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于arcgis"}},[t._v("#")]),t._v(" 关于arcgis")]),t._v(" "),s("h1",{attrs:{id:"arcgis-api在nginx部署步骤及一些坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arcgis-api在nginx部署步骤及一些坑"}},[t._v("#")]),t._v(" arcgis API在nginx部署步骤及一些坑")]),t._v(" "),s("h3",{attrs:{id:"_1-arcgis-api下载地址："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-arcgis-api下载地址："}},[t._v("#")]),t._v(" 1.  arcgis API下载地址：")]),t._v(" "),s("p",[t._v("链接："),s("a",{attrs:{href:"https://developers.arcgis.com/downloads/apis-and-sdks",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1),t._v("\n可能会让你注册登陆一下")]),t._v(" "),s("h3",{attrs:{id:"_2-api的部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-api的部署"}},[t._v("#")]),t._v(" 2.  API的部署")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("这里以nginx为例介绍，当然你也可以部署在类似tomcat这类服务器上，    原理\n差不多，这里就不做阐述。\n")])])]),s("h3",{attrs:{id:"_1-解压api文件（例如：-arcgis-js-v413-api-zip）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-解压api文件（例如：-arcgis-js-v413-api-zip）"}},[t._v("#")]),t._v(" 1.  解压API文件（例如： arcgis_js_v413_api.zip）")]),t._v(" "),s("h3",{attrs:{id:"_2-这里可以参考官方教程：打开解压后的目录，找到install-html-点击打开，可以跟着里面教程走。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-这里可以参考官方教程：打开解压后的目录，找到install-html-点击打开，可以跟着里面教程走。"}},[t._v("#")]),t._v(" 2. 这里可以参考官方教程：打开解压后的目录，找到install.html,点击打开，可以跟着里面教程走。")]),t._v(" "),s("h4",{attrs:{id:"_3-简单说一下第二步的操作，-在解压后的目录-找到init-js和dojo-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-简单说一下第二步的操作，-在解压后的目录-找到init-js和dojo-js"}},[t._v("#")]),t._v(" 3. 简单说一下第二步的操作， 在解压后的目录 找到init.js和dojo.js")]),t._v(" "),s("p",[t._v("以我的为例： （在linux上同理）D:\\ArcGISAPIForJS\\arcgis_js_v413_api\\arcgis_js_api\\library\\4.13\\init.js和\nD:\\ArcGISAPIForJS\\arcgis_js_v413_api\\arcgis_js_api\\library\\4.13\\dojo\\dojo.js")]),t._v(" "),s("h4",{attrs:{id:"_4-利用编辑器打开这两个文件，查找到-hostname-and-path-to-jsapi-并把它替换成你的ip加端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-利用编辑器打开这两个文件，查找到-hostname-and-path-to-jsapi-并把它替换成你的ip加端口"}},[t._v("#")]),t._v(" 4. 利用编辑器打开这两个文件，查找到 [HOSTNAME_AND_PATH_TO_JSAPI]并把它替换成你的IP加端口")]),t._v(" "),s("p",[t._v('例如我的：把baseUrl:"http://[HOSTNAME_AND_PATH_TO_JSAPI]/dojo" 改成baseUrl:"http://localhost:8099/dojo"， 注意这个地方我把https改成了http，如果你服务器用的是https，这里就不用改了，  注意要把两个文件都要改了')]),t._v(" "),s("h4",{attrs:{id:"_5-配置nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置nginx"}},[t._v("#")]),t._v(" 5.  配置nginx")]),t._v(" "),s("h5",{attrs:{id:"_1-没有nginx可以到这里下载一下：http-nginx-org-en-download-html，-自己按照自己操作系统下载，不做过多介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-没有nginx可以到这里下载一下：http-nginx-org-en-download-html，-自己按照自己操作系统下载，不做过多介绍"}},[t._v("#")]),t._v(" 1.  没有nginx可以到这里下载一下：http://nginx.org/en/download.html， 自己按照自己操作系统下载，不做过多介绍")]),t._v(" "),s("h5",{attrs:{id:"_2-打开nginx下的nginx-conf文件：以下是我的配置可以参考，只需要改下-server下的内容："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-打开nginx下的nginx-conf文件：以下是我的配置可以参考，只需要改下-server下的内容："}},[t._v("#")]),t._v(" 2.  打开nginx下的nginx.conf文件：以下是我的配置可以参考，只需要改下 Server下的内容："),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191129142629640.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI2MzgxMzU5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("一定要注意location的顺序，这个你可以去了解一下nginx配置location的优先级，再次就是 **add_header Access-Control-Allow-Origin * always;**这个一定要有， 之所以要配置这个是为了避免开发过程你可能会遇到一些跨域问题。")]),t._v(" "),s("h4",{attrs:{id:"_6-以上几个步骤，配置基本完成了，接下来可以复制以下内容去测试了："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-以上几个步骤，配置基本完成了，接下来可以复制以下内容去测试了："}},[t._v("#")]),t._v(" 6. 以上几个步骤，配置基本完成了，接下来可以复制以下内容去测试了：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initial-scale=1, maximum-scale=1, user-scalable=no"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("ArcGIS JavaScript Tutorials"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Create a JavaScript starter app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("link rel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),t._v(" href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8099/esri/themes/light/main.css"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8099/dojo/dojo.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   #viewDiv "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewDiv"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esri/Map"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esri/views/MapView"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MapView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       basemap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topo-vector"')]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MapView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewDiv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       center"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("118.80500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.02700")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// longitude, latitude")]),t._v("\n       zoom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("然后保存，打开页面，能看到地图说明配置成功，如果没有，多半是一些路径配置问题，仔细检查下。")]),t._v(" "),s("h4",{attrs:{id:"_7-出现字体文件-woff-woff-访问404："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-出现字体文件-woff-woff-访问404："}},[t._v("#")]),t._v(" 7.  出现字体文件 .woff .woff 访问404：")]),t._v(" "),s("p",[t._v("在nginx文件目录下找到mime.types并打开，添加如下内容：\napplication/font-woff                            woff;\napplication/font-woff2                         woff2;")]),t._v(" "),s("h4",{attrs:{id:"_8-访问官网api文档太慢解决："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-访问官网api文档太慢解决："}},[t._v("#")]),t._v(" 8. 访问官网API文档太慢解决：")]),t._v(" "),s("h4",{attrs:{id:"_1-下载api参考文档：https-developers-arcgis-com-downloads-apis-and-sdks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载api参考文档：https-developers-arcgis-com-downloads-apis-and-sdks"}},[t._v("#")]),t._v(" 1.  下载API参考文档：https://developers.arcgis.com/downloads/apis-and-sdks"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191129170103509.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI2MzgxMzU5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("步骤同上解压，nginx添加配置\tlocation /api {\nalias   D:/ArcGISAPIForJS/arcgis_js_v413_sdk/;\nindex  install.html;\n}\n这样你在浏览器输入localhost：8099/api  就可以访问参考文档了。\n当然个人对nginx配置了解甚少， 以上只是参考更多nginx配置可以到\n"),s("a",{attrs:{href:"http://shouce.jb51.net/nginx/left.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);