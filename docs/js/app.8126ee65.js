(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)s=o[d],r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"18a5":function(t,e,n){"use strict";var a=n("c13e"),r=n.n(a);r.a},2:function(t,e){},"21bb":function(t,e,n){},3:function(t,e){},3507:function(t,e,n){"use strict";var a=n("f8b2"),r=n.n(a);r.a},4:function(t,e){},5:function(t,e){},5695:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("8c4f"),i=n("e454"),s=n.n(i),o=n("70a1"),c=n.n(o),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[!t.Blockchain.pendingAuth&&t.Blockchain.isUserSignedIn()?n("div",[n("NavBar"),n("router-view",{staticClass:"view"})],1):t._e(),t.Blockchain.pendingAuth||t.Blockchain.isUserSignedIn()?t._e():n("div",[n("SignIn")],1),t.Blockchain.pendingAuth?n("div",[n("h4",{staticClass:"centered",attrs:{id:"loading-header"}},[t._v("Loading...")])]):t._e()])},l=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav-bar"}},[n("div",{staticClass:"mdl-layout mdl-layout--fixed-header"},[n("div",{staticClass:"mdl-layout__header navbarcolour"},[n("div",{staticClass:"mdl-layout__header-row"},[t._m(0),n("div",{staticClass:"user-and-state"},[n("span",{staticClass:"sync-status"},[n("i",{staticClass:"material-icons"},[t._v(t._s(t.syncIcon))])]),n("br")]),n("div",{staticClass:"mdl-layout-spacer"}),n("nav",{staticClass:"mdl-navigation mdl-layout--large-screen-only"},[n("div",{staticClass:"username"},[t._v("\n            User: "+t._s(t.userName)),n("br")]),n("NavBarLink",{attrs:{name:"tasks"}}),n("NavBarLink",{attrs:{name:"projects",defaultRoute:""}})],1),n("nav",{staticClass:"mdl-navigation mdl-layout--large-screen-only"},[n("a",{staticClass:"mdl-navigation__link",on:{click:t.signOut}},[t._v("\n            Sign out\n          ")])])])])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"mdl-layout-title"},[a("img",{staticClass:"logo",attrs:{src:n("cf05")}})])}],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{attrs:{to:"/"+t.name}},[n("a",{staticClass:"mdl-navigation__link",class:{selected:t.path=="/"+t.name||t.defaultRoute&&"/"==t.path}},[t._v("\n    "+t._s(t.Utils.capitalizeFirst(t.name))+"\n  ")])])},m=[],h=(n("6b54"),{generateId:function(){return Date.now().toString()},capitalizeFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},dictToListWithIds:function(t){var e=[];for(var n in t)e.push(Object.assign({id:n},t[n]));return e}}),v={name:"NavBarLink",data:function(){return{Utils:h}},props:{name:String,defaultRoute:Boolean},computed:{path:function(){return this.$route.fullPath}}},g=v,b=(n("f77e"),n("2877")),k=Object(b["a"])(g,f,m,!1,null,"a2cb4988",null),_=k.exports,y=(n("96cf"),n("3b8d")),j=n("e4d3"),w=n.n(j),x={tasks:"drello_tasks.json",projects:"projects_.json"},S=new w.a.AppConfig(["store_write","publish_data"]),T=new w.a.UserSession({appConfig:S});function C(t,e){return O.apply(this,arguments)}function O(){return O=Object(y["a"])(regeneratorRuntime.mark(function t(e,n){var a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:{encrypt:!0},t.next=3,T.putFile(n,JSON.stringify(e),a);case 3:case"end":return t.stop()}},t)})),O.apply(this,arguments)}function E(t){return R.apply(this,arguments)}function R(){return R=Object(y["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{decrypt:!0},console.log("Reading the file: "+e),t.next=4,T.getFile(e,n);case 4:return a=t.sent,t.prev=5,console.log("Got content: "+a),t.abrupt("return",JSON.parse(a));case 10:return t.prev=10,t.t0=t["catch"](5),console.error(t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}},t,null,[[5,10]])})),R.apply(this,arguments)}var B={pendingAuth:!1,getUserSession:function(){return T},getUserName:function(){return T.loadUserData().username},isUserSignedIn:function(){return T.isUserSignedIn()},checkAuth:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!T.isSignInPending()){t.next=13;break}return t.prev=1,this.pendingAuth=!0,t.next=5,T.handlePendingSignIn();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.error(t.t0);case 10:return t.prev=10,this.pendingAuth=!1,t.finish(10);case 13:case"end":return t.stop()}},t,this,[[1,7,10,13]])}));function e(){return t.apply(this,arguments)}return e}(),signIn:function(){T.redirectToSignIn()},signOut:function(){T.signUserOut(),location.reload()},getProjects:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E(x.projects);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),getTasks:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E(x.tasks);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),saveProjects:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C(e,x.projects);case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),saveTasks:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C(e,x.tasks);case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},P=n("2ef0"),I=n.n(P),L={projects:{},tasks:{},syncStatus:"Synced",loadStateFromBlockchain:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Loading state from blockchain"),t.next=3,B.getProjects();case 3:return e=t.sent,t.next=6,B.getTasks();case 6:n=t.sent,e&&a["a"].set(this,"projects",e),n&&a["a"].set(this,"tasks",n);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updateStateToBlockchain:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.updateProjects,a=void 0!==n&&n,r=e.updateTasks,i=void 0!==r&&r,console.log("Updating blockchain state with projects: ".concat(a,", with tasks: ").concat(i)),t.prev=2,!a){t.next=8;break}return this.syncStatus="Syncing projects",this.updatingStateInBlockchain=!0,t.next=8,B.saveProjects(this.projects);case 8:if(!i){t.next=13;break}return this.syncStatus="Syncing tasks",this.updatingStateInBlockchain=!0,t.next=13,B.saveTasks(this.tasks);case 13:this.syncStatus="Synced",t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](2),console.error(t.t0),this.syncStatus="Syncing failed";case 20:case"end":return t.stop()}},t,this,[[2,16]])}));function e(e){return t.apply(this,arguments)}return e}(),upsertProject:function(t){var e=this.defaultUpsert(t,"projects","Project");return this.updateStateToBlockchain({updateProjects:!0}),e},removeProject:function(t){this.defaultRemove(t,"projects","Project"),this.updateStateToBlockchain({updateProjects:!0})},upsertTask:function(t){var e=this.defaultUpsert(t,"tasks","Task");return this.updateStateToBlockchain({updateTasks:!0}),e},removeTask:function(t){this.defaultRemove(t,"tasks","Task"),this.updateStateToBlockchain({updateTasks:!0})},defaultUpsert:function(t,e,n){console.log("Updating ".concat(n)),console.log(t),t.id||(t.id=h.generateId());var r=I.a.clone(t);return a["a"].set(this[e],t.id,r),r},defaultRemove:function(t,e,n){if(!t.id)throw new Error("".concat(n," without id can not be removed"));console.log("Removing ".concat(n)),console.log(t);var r=I.a.clone(this[e]);delete r[t.id],a["a"].set(this,e,r)}},$=L,N={name:"NavBar",data:function(){return $.loadStateFromBlockchain(),{userName:B.getUserName(),state:$}},computed:{path:function(){return this.$route.fullPath},syncIcon:function(){switch(this.state.syncStatus){case"Synced":return"cloud_done";case"Syncing failed":return"cloud_off";default:return"cloud_upload"}}},components:{NavBarLink:_},methods:{signOut:function(){B.signOut()}}},U=N,M=(n("3507"),Object(b["a"])(U,d,p,!1,null,"61fb2a62",null)),A=M.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-container"},[n("h4",{staticClass:"centered"},[t._v("Welcome to drello. please sign in to continue.")]),n("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",on:{click:t.signIn}},[t._v("\n    Sign in to blockstack\n  ")])])},W=[],D={name:"ShoppingLists",props:{},methods:{signIn:function(){B.signIn()}}},J=D,z=(n("c5c1"),Object(b["a"])(J,F,W,!1,null,"7de03a84",null)),V=z.exports;B.checkAuth();var q={name:"app",data:function(){return{Blockchain:B}},components:{NavBar:A,SignIn:V}},G=q,H=(n("5c0b"),Object(b["a"])(G,u,l,!1,null,null,null)),K=H.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"centered"},[t._v("Projects")]),n("EditableListTemplate",{attrs:{elements:t.elements,dataModel:t.dataModel,addable:!0,editable:!0,removable:!0,upsert:t.state.upsertProject.bind(t.state),remove:t.state.removeProject.bind(t.state)}})],1)},X=[],Y=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"mdl-data-table mdl-shadow--2dp centered"},[n("thead",[n("tr",[t._l(t.fields,function(e){return n("th",{key:e},[t._v("\n          "+t._s(t.Utils.capitalizeFirst(e))+"\n        ")])}),t.editable?n("th"):t._e()],2)]),n("tbody",t._l(t.elements,function(e){return n("EditableListElement",{key:e.id,attrs:{data:e,dataModel:t.dataModel,editable:t.editable,removable:t.removable,startWithEditing:e.id==t.idOfEditingElement,upsert:t.upsert,remove:t.remove}})}),1)]),n("div",{staticClass:"add-button-container"},[t.addable?n("button",{staticClass:"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--green-300",attrs:{type:"button"},on:{click:t.addNew}},[n("span",{staticClass:"material-icons"},[t._v("add")])]):t._e()])])}),Z=[],tt=(n("ac6a"),n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[t._l(t.fields,function(e){return n("td",{key:e},["checkbox"===t.getType(e)&&t.editing&&"ref"!==t.getType(e)&&"link"!==t.getType(e)?n("input",{directives:[{name:"model",rawName:"v-model",value:t.data[e],expression:"data[field]"}],staticClass:"mdl-textfield__input",attrs:{id:e,type:"checkbox"},domProps:{checked:Array.isArray(t.data[e])?t._i(t.data[e],null)>-1:t.data[e]},on:{change:function(n){var a=t.data[e],r=n.target,i=!!r.checked;if(Array.isArray(a)){var s=null,o=t._i(a,s);r.checked?o<0&&t.$set(t.data,e,a.concat([s])):o>-1&&t.$set(t.data,e,a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.data,e,i)}}}):"radio"===t.getType(e)&&t.editing&&"ref"!==t.getType(e)&&"link"!==t.getType(e)?n("input",{directives:[{name:"model",rawName:"v-model",value:t.data[e],expression:"data[field]"}],staticClass:"mdl-textfield__input",attrs:{id:e,type:"radio"},domProps:{checked:t._q(t.data[e],null)},on:{change:function(n){return t.$set(t.data,e,null)}}}):t.editing&&"ref"!==t.getType(e)&&"link"!==t.getType(e)?n("input",{directives:[{name:"model",rawName:"v-model",value:t.data[e],expression:"data[field]"}],staticClass:"mdl-textfield__input",attrs:{id:e,type:t.getType(e)},domProps:{value:t.data[e]},on:{input:function(n){n.target.composing||t.$set(t.data,e,n.target.value)}}}):t._e(),t.editing&&"ref"==t.getType(e)?n("select",{directives:[{name:"model",rawName:"v-model",value:t.data[e],expression:"data[field]"}],attrs:{id:e},on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.data,e,n.target.multiple?a:a[0])}}},t._l(t.getRefVals(e),function(a){return n("option",{key:a.id,domProps:{value:a.id}},[t._v("\n        "+t._s(t.getRefTitle(a.id,e))+"\n      ")])}),0):t._e(),"link"==t.getType(e)?n("a",{attrs:{href:t.data[e]}},[t._v("See tasks for project")]):t._e(),t.editing||"ref"==t.getType(e)||"link"===t.getType(e)?t._e():n("span",[t._v("\n      "+t._s(t.data[e])+"\n    ")]),t.editing||"ref"!=t.getType(e)?t._e():n("span",[t._v("\n      "+t._s(t.getRefTitle(t.data[e],e))+"\n    ")])])}),t.editable?n("td",[t.editing?t._e():n("a",{attrs:{href:"#"},on:{click:t.startEditing}},[n("span",{staticClass:"material-icons"},[t._v("edit")])]),t.editing?n("a",{attrs:{href:"#"},on:{click:t.stopEditing}},[n("span",{staticClass:"material-icons"},[t._v("save")])]):t._e(),t.removable?n("a",{attrs:{href:"#"},on:{click:t.removeElement}},[n("span",{staticClass:"material-icons"},[t._v("delete")])]):t._e()]):t._e()],2)}),et=[],nt=(n("7514"),n("7618")),at={name:"EditableListTemplate",data:function(){return{editing:this.startWithEditing,getType:function(t){var e=this.dataModel[t];switch(e){case"String":return"text";case"Date":return"date";case"Money":return"number";case"Link":return"link";default:return"object"==Object(nt["a"])(e)&&"Reference"==e.kind?"ref":"text"}},getRefVals:function(t){if("ref"!==this.getType(t))throw"Can not get ref vals from non-reference";return this.dataModel[t].refCollection},getRefTitle:function(t,e){var n=this.getRefVals(e),a=n.find(function(e){return e.id==t});return a?a.name:""}}},props:{data:Object,dataModel:Object,editable:Boolean,removable:Boolean,startWithEditing:Boolean,upsert:Function,remove:Function},computed:{fields:function(){return Object.keys(this.dataModel)}},methods:{startEditing:function(){this.editing=!0},stopEditing:function(){this.upsert(this.data),this.editing=!1},removeElement:function(){var t=confirm("Are you sure you want to delete element with id: "+this.data.id);t&&this.remove(this.data)}}},rt=at,it=(n("18a5"),Object(b["a"])(rt,tt,et,!1,null,"549cd258",null)),st=it.exports,ot={name:"EditableListTemplate",props:{elements:Array,dataModel:Object,addable:Boolean,editable:Boolean,removable:Boolean,upsert:Function,remove:Function},data:function(){return{idOfEditingElement:null,Utils:h}},components:{EditableListElement:st},computed:{fields:function(){return Object.keys(this.dataModel)}},methods:{addNew:function(){var t=this.upsert({});this.idOfEditingElement=t.id}}},ct=ot,ut=(n("9ece"),Object(b["a"])(ct,Y,Z,!1,null,"71600c5b",null)),lt=ut.exports,dt={name:"Projects",data:function(){return{dataModel:{name:"String",description:"String",category:"String",tasks:"Link"},state:$}},computed:{elements:function(){var t=h.dictToListWithIds(this.state.projects);return t.map(function(t){return t.tasks="/#/tasks/".concat(t.name),t})}},components:{EditableListTemplate:lt}},pt=dt,ft=(n("6c44"),Object(b["a"])(pt,Q,X,!1,null,"17ee9d9e",null)),mt=ft.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"centered"},[t._v("Tasks "+t._s(t.project?" - "+t.project:""))]),n("div",{staticClass:"cards mdl-grid"},[n("Card",{attrs:{id:"taskslength",value:t.tasksLength,label:"Number of tasks",icon:"list",color:"#1A8FE2",suffix:"tasks"}})],1),n("EditableListTemplate",{attrs:{elements:t.elements,dataModel:t.dataModel,addable:!0,editable:!0,removable:!0,upsert:t.state.upsertTask.bind(t.state),remove:t.state.removeTask.bind(t.state)}})],1)},vt=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdl-cell mdl-cell--2-col"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5"},[n("i",{staticClass:"material-icons"},[t._v(t._s(t.icon))])]),n("div",{staticClass:"col-7"},[n("div",{staticClass:"numbers"},[n("div",[n("h4",{staticClass:"card-title"},[t._v(t._s(t.value)+" "+t._s(t.suffix))])])])])])]),n("div",{staticClass:"card-footer"},[n("hr"),n("div",{staticClass:"stats"},[n("div",[n("i",{staticClass:"fa fa-refresh"}),t._v("\n                  "+t._s(t.label)+"\n              ")])])])])])},bt=[],kt=(n("c5f6"),{name:"Card",props:{value:Number,label:String,icon:String,color:String,suffix:String}}),_t=kt,yt=(n("cab7"),Object(b["a"])(_t,gt,bt,!1,null,"23e95ea2",null)),jt=yt.exports,wt={name:"Tasks",data:function(){return{state:$}},computed:{project:function(){return this.$route.params.project},tasksLength:function(){return this.elements.length},elements:function(){var t=this,e=h.dictToListWithIds(this.state.tasks);if(console.log(this.$route),this.$route.params.project){var n=h.dictToListWithIds(this.state.projects).find(function(e){return e.name==t.$route.params.project});n&&(e=e.filter(function(t){return t.project==n.id}))}return e},dataModel:function(){return{project:{kind:"Reference",refCollection:h.dictToListWithIds(this.state.projects)},title:"String",description:"String",deadline:"Date"}}},components:{EditableListTemplate:lt,Card:jt}},xt=wt,St=(n("fa9f"),Object(b["a"])(xt,ht,vt,!1,null,"493fca5a",null)),Tt=St.exports;a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].use(s.a),a["a"].directive("mdl",{inserted:function(t){return c.a.componentHandler.upgradeElement(t)}});var Ct=[{path:"/",component:mt},{path:"/projects",component:mt},{path:"/tasks",component:Tt},{path:"/tasks/:project",component:Tt}],Ot=new r["a"]({routes:Ct}),Et=new a["a"]({router:Ot,render:function(t){return t(K)}}).$mount("#app");e["default"]=Et},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},"6bd8":function(t,e,n){},"6c44":function(t,e,n){"use strict";var a=n("21bb"),r=n.n(a);r.a},"735b":function(t,e,n){},"98b3":function(t,e,n){},"9ece":function(t,e,n){"use strict";var a=n("eb39"),r=n.n(a);r.a},c13e:function(t,e,n){},c5c1:function(t,e,n){"use strict";var a=n("735b"),r=n.n(a);r.a},cab7:function(t,e,n){"use strict";var a=n("5695"),r=n.n(a);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.0d6be9fd.png"},eb39:function(t,e,n){},f77e:function(t,e,n){"use strict";var a=n("6bd8"),r=n.n(a);r.a},f8b2:function(t,e,n){},fa9f:function(t,e,n){"use strict";var a=n("98b3"),r=n.n(a);r.a}});
//# sourceMappingURL=app.8126ee65.js.map