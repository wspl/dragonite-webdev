webpackJsonp([1],{250:function(t,e,a){"use strict";var s=a(5),n=a(497),r=a(492),i=a.n(r);s.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Landing",component:i.a}]})},251:function(t,e,a){function s(t){a(345)}var n=a(43)(a(252),a(495),s,null,null);t.exports=n.exports},252:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},253:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(491),n=a.n(s),r=a(258);e.default={components:{DetailItem:n.a},name:"connection",props:["data","index"],data:function(){return{open:!1,uprate:"N/A",downrate:"N/A"}},watch:{data:function(t,e){var s=this.$route.query.tick,n=(t.sendraw-e.sendraw)*(1e3/s),i=(t.recvraw-e.recvraw)*(1e3/s);this.uprate=a.i(r.a)(n).text+"/s",this.downrate=a.i(r.a)(i).text+"/s"}},methods:{toggle:function(){this.open=!this.open},formatDataSize:r.a}}},254:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(256);e.default={name:"detail-item",components:{LineChart:s.a},props:["label","value","unit"],data:function(){return{sampleData:{labels:["1","2","3","4","5"],datasets:[{label:"Delay",backgroundColor:"#f87979",data:[40,20,30,15,66]}]},sampleOptions:{legend:{display:!1},scales:{xAxes:[{ticks:{fontColor:"#aaa",fontSize:12}}],yAxes:[{ticks:{fontColor:"#aaa",fontSize:12}}]}}}}}},255:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(261),n=a.n(s),r=a(260),i=a.n(r),l=a(490),o=a.n(l);e.default={components:{Connection:o.a},name:"landing",data:function(){return{latest:{},api:this.$route.query.api||"http://localhost:8000/statistics",tick:this.$route.query.tick||1e3,apiStatus:""}},watch:{api:function(t){this.$router.push({path:"/",query:{api:t,tick:this.tick}})},tick:function(t){this.$router.push({path:"/",query:{api:this.api,tick:t}})}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;setTimeout(i()(n.a.mark(function e(){var a,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.api);case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,t.latest=s,t.apiStatus="API Server Connected",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.apiStatus=e.t0.toString();case 14:t.fetchData();case 15:case"end":return e.stop()}},e,t,[[0,11]])})))}},beforeRouteUpdate:function(t,e,a){a(),this.api=t.query.api||"http://localhost:8000/statistics",this.tick=t.query.tick||1e3}}},256:function(t,e,a){"use strict";var s=a(485);a.n(s);e.a=s.Line.extend({props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},257:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(5),n=a(251),r=a.n(n),i=a(250);s.default.config.productionTip=!1,new s.default({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},258:function(t,e,a){"use strict";function s(t){var e=["B","KB","MB","GB","TB","PB","EB","ZB","YB","BB","NB","DB"];for(var a in e){var s=e[a];if(t/Math.pow(1024,a)<1024)return{num:t/Math.pow(1024,a),unit:s,text:(t/Math.pow(1024,a)).toFixed(2)+" "+s}}}e.a=s},343:function(t,e){},344:function(t,e){},345:function(t,e){},346:function(t,e){},474:function(t,e,a){function s(t){return a(n(t))}function n(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":135,"./af.js":135,"./ar":142,"./ar-dz":136,"./ar-dz.js":136,"./ar-kw":137,"./ar-kw.js":137,"./ar-ly":138,"./ar-ly.js":138,"./ar-ma":139,"./ar-ma.js":139,"./ar-sa":140,"./ar-sa.js":140,"./ar-tn":141,"./ar-tn.js":141,"./ar.js":142,"./az":143,"./az.js":143,"./be":144,"./be.js":144,"./bg":145,"./bg.js":145,"./bn":146,"./bn.js":146,"./bo":147,"./bo.js":147,"./br":148,"./br.js":148,"./bs":149,"./bs.js":149,"./ca":150,"./ca.js":150,"./cs":151,"./cs.js":151,"./cv":152,"./cv.js":152,"./cy":153,"./cy.js":153,"./da":154,"./da.js":154,"./de":157,"./de-at":155,"./de-at.js":155,"./de-ch":156,"./de-ch.js":156,"./de.js":157,"./dv":158,"./dv.js":158,"./el":159,"./el.js":159,"./en-au":160,"./en-au.js":160,"./en-ca":161,"./en-ca.js":161,"./en-gb":162,"./en-gb.js":162,"./en-ie":163,"./en-ie.js":163,"./en-nz":164,"./en-nz.js":164,"./eo":165,"./eo.js":165,"./es":167,"./es-do":166,"./es-do.js":166,"./es.js":167,"./et":168,"./et.js":168,"./eu":169,"./eu.js":169,"./fa":170,"./fa.js":170,"./fi":171,"./fi.js":171,"./fo":172,"./fo.js":172,"./fr":175,"./fr-ca":173,"./fr-ca.js":173,"./fr-ch":174,"./fr-ch.js":174,"./fr.js":175,"./fy":176,"./fy.js":176,"./gd":177,"./gd.js":177,"./gl":178,"./gl.js":178,"./gom-latn":179,"./gom-latn.js":179,"./he":180,"./he.js":180,"./hi":181,"./hi.js":181,"./hr":182,"./hr.js":182,"./hu":183,"./hu.js":183,"./hy-am":184,"./hy-am.js":184,"./id":185,"./id.js":185,"./is":186,"./is.js":186,"./it":187,"./it.js":187,"./ja":188,"./ja.js":188,"./jv":189,"./jv.js":189,"./ka":190,"./ka.js":190,"./kk":191,"./kk.js":191,"./km":192,"./km.js":192,"./kn":193,"./kn.js":193,"./ko":194,"./ko.js":194,"./ky":195,"./ky.js":195,"./lb":196,"./lb.js":196,"./lo":197,"./lo.js":197,"./lt":198,"./lt.js":198,"./lv":199,"./lv.js":199,"./me":200,"./me.js":200,"./mi":201,"./mi.js":201,"./mk":202,"./mk.js":202,"./ml":203,"./ml.js":203,"./mr":204,"./mr.js":204,"./ms":206,"./ms-my":205,"./ms-my.js":205,"./ms.js":206,"./my":207,"./my.js":207,"./nb":208,"./nb.js":208,"./ne":209,"./ne.js":209,"./nl":211,"./nl-be":210,"./nl-be.js":210,"./nl.js":211,"./nn":212,"./nn.js":212,"./pa-in":213,"./pa-in.js":213,"./pl":214,"./pl.js":214,"./pt":216,"./pt-br":215,"./pt-br.js":215,"./pt.js":216,"./ro":217,"./ro.js":217,"./ru":218,"./ru.js":218,"./sd":219,"./sd.js":219,"./se":220,"./se.js":220,"./si":221,"./si.js":221,"./sk":222,"./sk.js":222,"./sl":223,"./sl.js":223,"./sq":224,"./sq.js":224,"./sr":226,"./sr-cyrl":225,"./sr-cyrl.js":225,"./sr.js":226,"./ss":227,"./ss.js":227,"./sv":228,"./sv.js":228,"./sw":229,"./sw.js":229,"./ta":230,"./ta.js":230,"./te":231,"./te.js":231,"./tet":232,"./tet.js":232,"./th":233,"./th.js":233,"./tl-ph":234,"./tl-ph.js":234,"./tlh":235,"./tlh.js":235,"./tr":236,"./tr.js":236,"./tzl":237,"./tzl.js":237,"./tzm":239,"./tzm-latn":238,"./tzm-latn.js":238,"./tzm.js":239,"./uk":240,"./uk.js":240,"./ur":241,"./ur.js":241,"./uz":243,"./uz-latn":242,"./uz-latn.js":242,"./uz.js":243,"./vi":244,"./vi.js":244,"./x-pseudo":245,"./x-pseudo.js":245,"./yo":246,"./yo.js":246,"./zh-cn":247,"./zh-cn.js":247,"./zh-hk":248,"./zh-hk.js":248,"./zh-tw":249,"./zh-tw.js":249};s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id=474},489:function(t,e){t.exports={name:"vue-chartjs",version:"2.6.4",description:"vue.js wrapper for chart.js",author:"Jakub Juszczak <jakub@posteo.de>",homepage:"http://vue-chartjs.org",license:"MIT",contributors:[{name:"Thorsten Lünborg",web:"https://github.com/LinusBorg"},{name:"Juan Carlos Alonso",web:"https://github.com/jcalonso"}],maintainers:[{name:"Jakub Juszczak",email:"jakub@posteo.de",web:"http://www.jakubjuszczak.de"}],repository:{type:"git",url:"git+ssh://git@github.com:apertureless/vue-chartjs.git"},bugs:{url:"https://github.com/apertureless/vue-chartjs/issues"},keywords:["ChartJs","Vue","Visualisation","Wrapper","Charts"],main:"dist/vue-chartjs.js",unpkg:"dist/vue-chartjs.full.min.js",module:"es/index.js","jsnext:main":"es/index.js",files:["src","dist","es"],scripts:{dev:"node build/dev-server.js",build:"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es",unit:"karma start test/unit/karma.conf.js --single-run",e2e:"node test/e2e/runner.js",test:"npm run unit",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",release:"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js && webpack --progress --hide-modules --config  ./build/webpack.release.full.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.full.min.js",prepublish:"yarn run lint && yarn run test && yarn run build"},dependencies:{lodash:"^4.17.4"},peerDependencies:{"chart.js":"^2.5.0",vue:"^2.3.3"},devDependencies:{"babel-cli":"^6.24.1","babel-core":"^6.24.1","babel-loader":"^7.0.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-runtime":"^6.23.0",chai:"^3.5.0","chart.js":"^2.5.0",chromedriver:"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.10.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta-loader":"^2.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4",karma:"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"1.8.1",lolex:"^1.6.0",mocha:"^3.1.0",nightwatch:"^0.9.14",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.13","selenium-server":"^3.3.1",shelljs:"^0.7.7",sinon:"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8",vue:"^2.3.3","vue-hot-reload-api":"^2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^12.0.4","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.3.3",webpack:"^1.13.2","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"1.1.1"},engines:{node:">=6.9.0"},babel:{presets:["es2015"]},browserify:{transform:["babelify"]},greenkeeper:{ignore:["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]}}},490:function(t,e,a){function s(t){a(344)}var n=a(43)(a(253),a(494),s,null,null);t.exports=n.exports},491:function(t,e,a){function s(t){a(343)}var n=a(43)(a(254),a(493),s,null,null);t.exports=n.exports},492:function(t,e,a){function s(t){a(346)}var n=a(43)(a(255),a(496),s,null,null);t.exports=n.exports},493:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-item"},[a("div",{staticClass:"di-header"},[a("span",{staticClass:"di-header-label"},[t._v(t._s(t.label))]),t._v(" "),a("span",{staticClass:"di-header-value"},[t._v(t._s(t.value)),a("small",[t._v(t._s(t.unit))])])])])},staticRenderFns:[]}},494:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tbody",{staticClass:"connection"},[a("tr",{on:{click:t.toggle}},[a("th",{attrs:{align:"right"}},[t._v(t._s(t.index))]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v(t._s(t.data.description))]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v(t._s(t.data.remote))]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v(t._s(t.data.rtt))]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v(t._s(t.uprate))]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v(t._s(t.downrate))]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("N/A")])]),t._v(" "),t.open?a("tr",[a("td",{staticClass:"detail",attrs:{colspan:"7"}},[a("table",{staticClass:"detail-table"},[a("tr",[a("td",{attrs:{width:"50%"}},[a("detail-item",{attrs:{label:"RTT",value:t.data.rtt,unit:"MS"}})],1),t._v(" "),a("td",[a("detail-item",{attrs:{label:"DevRTT",value:t.data.devrtt,unit:"MS"}})],1)]),t._v(" "),a("tr",[a("td",{attrs:{width:"50%"}},[a("detail-item",{attrs:{label:"Send",value:t.formatDataSize(t.data.send).num.toFixed(2),unit:t.formatDataSize(t.data.send).unit}})],1),t._v(" "),a("td",[a("detail-item",{attrs:{label:"Recv",value:t.formatDataSize(t.data.recv).num.toFixed(2),unit:t.formatDataSize(t.data.recv).unit}})],1)]),t._v(" "),a("tr",[a("td",{attrs:{width:"50%"}},[a("detail-item",{attrs:{label:"SendRaw",value:t.formatDataSize(t.data.sendraw).num.toFixed(2),unit:t.formatDataSize(t.data.sendraw).unit}})],1),t._v(" "),a("td",[a("detail-item",{attrs:{label:"RecvRaw",value:t.formatDataSize(t.data.recvraw).num.toFixed(2),unit:t.formatDataSize(t.data.recvraw).unit}})],1)]),t._v(" "),a("tr",[a("td",{attrs:{width:"50%"}},[a("detail-item",{attrs:{label:"SendPkt",value:t.data.sendpkt}})],1),t._v(" "),a("td",[a("detail-item",{attrs:{label:"RecvCount",value:t.data.recvcount}})],1)]),t._v(" "),a("tr",[a("td",{attrs:{width:"50%"}},[a("detail-item",{attrs:{label:"Resend",value:t.data.resend}})],1),t._v(" "),a("td",[a("detail-item",{attrs:{label:"Dup",value:t.data.dup}})],1)])])])]):t._e()])},staticRenderFns:[]}},495:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("p",{staticClass:"web-title"},[t._v("Dragonite WebDev")]),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},496:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"landing"},[a("div",{staticClass:"options"},[a("p",{staticClass:"options-title"},[t._v("Options")]),t._v(" "),a("div",{staticClass:"options-field"},[a("label",[t._v("API Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.api,expression:"api"}],domProps:{value:t.api},on:{input:function(e){e.target.composing||(t.api=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"options-field"},[a("label",[t._v("Tick")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tick,expression:"tick"}],domProps:{value:t.tick},on:{input:function(e){e.target.composing||(t.tick=e.target.value)}}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.apiStatus,expression:"apiStatus"}],staticClass:"api-status"},[t._v(t._s(t.apiStatus))])]),t._v(" "),a("table",{staticClass:"connection-table"},[t._m(0),t._v(" "),t._l(t.latest.connections,function(t,e){return a("connection",{key:e,attrs:{index:e,data:t}})})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{align:"right"}},[t._v("#")]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("Desc")]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("RemoteAddr")]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("RTT")]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("Upload Rate")]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("Download Rate")]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("Action")])])}]}}},[257]);
//# sourceMappingURL=app.c5cd6ff9843b7bbe3b14.js.map