webpackJsonp([25],{"8bm3":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.cell p[data-v-ebdbae2c]{\r\n  -webkit-margin-before: 0em;\r\n  -webkit-margin-after: 0em;\n}\n.avatar[data-v-ebdbae2c]{\r\n  width:22px;\r\n  height: 22px;\n}\r\n",""])},OuAp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BO1k"),l=a.n(i),s=a("woOf"),n=a.n(s),r=a("vLgD");var o=a("cAgV"),u=a("0xDb"),c={name:"complexTable",directives:{waves:o.a},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{pageStart:1,items_per_page:10},totalQuery:{},importanceOptions:["vip","wangzhe",""],sortOptions:[{label:"按ID升序列",key:"+id"},{label:"按ID降序",key:"-id"}],statusOptions:["published","draft","deleted"],showAuditor:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},filters:{statusFilter:function(t){return{published:"success",draft:"info",deleted:"danger"}[t]}},created:function(){this.getTotal(),this.getList()},methods:{getTotal:function(){var t,e=this;this.totalQuery=n()({},this.listQuery),this.totalQuery.items_per_page="All",(t=this.totalQuery,Object(r.a)({url:"/wechatuserlist?_format=json",method:"get",params:t})).then(function(t){e.total=t.data.length})},getList:function(){var t,e=this;this.listQuery.page=parseInt(this.listQuery.pageStart)-1,this.listLoading=!0,(t=this.listQuery,Object(r.a)({url:"/wechatuserlist?_format=json",method:"get",params:t})).then(function(t){e.list=t.data,e.listLoading=!1})},handleFilter:function(){this.listQuery.pageStart=1,this.listQuery.page=parseInt(this.listQuery.pageStart)-1,this.getTotal(),this.getList()},handleSizeChange:function(t){this.listQuery.items_per_page=t,this.getTotal(),this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getTotal(),this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleUpdate:function(t){var e=this;this.temp=n()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=n()({},t.temp);a.timestamp=+new Date(a.timestamp),(void 0)(a).then(function(){var e=!0,a=!1,i=void 0;try{for(var s,n=l()(t.list);!(e=(s=n.next()).done);e=!0){var r=s.value;if(r.id===t.temp.id){var o=t.list.indexOf(r);t.list.splice(o,1,t.temp);break}}}catch(t){a=!0,i=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw i}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(u.c)(e[t]):e[t]})})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"昵称",clearable:""},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.nickname,callback:function(e){t.$set(t.listQuery,"nickname",e)},expression:"listQuery.nickname"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"淘宝ID",clearable:""},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.adzoneid,callback:function(e){t.$set(t.listQuery,"adzoneid",e)},expression:"listQuery.adzoneid"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"京东ID",clearable:""},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.jdadzoneid,callback:function(e){t.$set(t.listQuery,"jdadzoneid",e)},expression:"listQuery.jdadzoneid"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"推荐人",clearable:""},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.parentid,callback:function(e){t.$set(t.listQuery,"parentid",e)},expression:"listQuery.parentid"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"等级"},model:{value:t.listQuery.level,callback:function(e){t.$set(t.listQuery,"level",e)},expression:"listQuery.level"}},t._l(t.importanceOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"头像",width:"65"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"avatar",attrs:{src:t.row.headimgurl}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"省份",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.province))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"城市",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.city))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"昵称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.nickname))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"淘宝推广位",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.adzoneid))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"京东推广位",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.jdadzoneid))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"性别",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.sex))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"关注时间",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.subscribe_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"等级",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.level))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"220","class-name":"small-padding"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),"published"!=e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleModifyStatus(e.row,"published")}}},[t._v("发布\n          ")]):t._e(),t._v(" "),"deleted"!=e.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleModifyStatus(e.row,"deleted")}}},[t._v("删除\n          ")]):t._e()]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.pageStart,"page-sizes":[10,20,30,50],"page-size":t.listQuery.items_per_page,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"pageStart",e)}}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"时间",prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"重要性"}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"点评"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"阅读数统计",visible:t.dialogPvVisible},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"渠道"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(c,d,!1,function(t){a("Z2T4")},"data-v-ebdbae2c",null);e.default=p.exports},Z2T4:function(t,e,a){var i=a("8bm3");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("155fc178",i,!0)}});