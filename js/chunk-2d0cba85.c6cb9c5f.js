(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cba85"],{"4b34":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vip"},[o("v-list",{attrs:{total:t.total,list:t.list,childmenu:t.pmenu}}),o("v-alert",{ref:"al",attrs:{childmenu:t.pmenu,list:t.list}})],1)},i=[],n=o("adb5"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-dialog",{attrs:{title:1==t.childmenu.isup?"编辑":"添加",visible:t.childmenu.isshow},on:{"update:visible":function(e){return t.$set(t.childmenu,"isshow",e)},closed:t.rest}},[o("el-form",{attrs:{model:t.form}},[o("el-form-item",{attrs:{label:"手机号",prop:"phone","label-width":t.formLabelWidth}},[o("el-input",{attrs:{type:"password","show-password":"",clearable:"",autocomplete:"off"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),o("el-form-item",{attrs:{label:"昵名",prop:"nickname","label-width":t.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),o("el-form-item",{attrs:{label:"密码",prop:"password","label-width":t.formLabelWidth}},[o("el-input",{attrs:{type:"password","show-password":"",clearable:"",autocomplete:"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),o("el-form-item",{attrs:{label:"状态","label-width":t.formLabelWidth}},[o("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.rest}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.add()}}},[t._v("确 定")])],1)],1)],1)},l=[],r={name:"alert",props:["childmenu","list"],data:function(){return{formLabelWidth:"100px",form:{uid:"",phone:"",nickname:"",password:"",status:2}}},mounted:function(){},methods:{formempty:function(){this.form={uid:"",phone:"",nickname:"",password:"",status:2}},add:function(){var t=this;1==this.childmenu.isup&&(this.form.id=this.childmenu.id,Object(n["U"])(this.form).then((function(e){200==e.data.code&&(t.$message({message:"修改成功",type:"success"}),t.$parent.init(),t.rest(),t.formempty())})))},rest:function(){this.childmenu.isshow=!1,this.childmenu.isup=!1},getad:function(t){var e=this;Object(n["S"])(t).then((function(o){200==o.data.code&&(e.form=o.data.list,e.form.uid=t)}))}}},u=r,c=o("2877"),d=Object(c["a"])(u,a,l,!1,null,"0293f9d3",null),m=d.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:"","tree-props":{children:"children"}}},[o("el-table-column",{attrs:{prop:"uid",label:"用户编号",sortable:"",width:"180"}}),o("el-table-column",{attrs:{prop:"nickname",label:"昵称",sortable:"",width:"180"}}),o("el-table-column",{attrs:{prop:"phone",label:"电话号"}}),o("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?o("el-button",{attrs:{type:"primary"}},[t._v("启用")]):o("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary"},on:{click:function(o){return t.up(e.row.uid)}}},[t._v("编辑")])]}}])})],1)],1)},f=[],h={name:"list",props:["list","childmenu"],data:function(){return{}},mounted:function(){},methods:{up:function(t){this.$parent.upload(t)}}},b=h,v=Object(c["a"])(b,p,f,!1,null,"ce7fe4e0",null),w=v.exports,k={name:"vip",components:{vList:w,vAlert:m},data:function(){return{pmenu:{isshow:!1,isup:!1,id:0},total:0,pageSize:2,list:[]}},mounted:function(){this.init()},methods:{init:function(){this.vipgetlist()},vipgetlist:function(){var t=this;Object(n["T"])().then((function(e){200==e.data.code&&(t.list=e.data.list)}))},upload:function(t){this.pmenu.isup=!0,this.pmenu.isshow=!0,this.pmenu.id=t,this.$refs.al.getad(t)}}},y=k,_=Object(c["a"])(y,s,i,!1,null,"674f7602",null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0cba85.c6cb9c5f.js.map