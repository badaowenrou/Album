(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/listContent"],{"0405":function(t,n,a){"use strict";a.r(n);var e=a("f2db"),i=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(n,t,function(){return e[t]})}(s);n["default"]=i.a},4182:function(t,n,a){"use strict";var e,i=function(){var t=this,n=t.$createElement;t._self._c},s=[];a.d(n,"b",function(){return i}),a.d(n,"c",function(){return s}),a.d(n,"a",function(){return e})},"82b2":function(t,n,a){"use strict";a.r(n);var e=a("4182"),i=a("0405");for(var s in i)"default"!==s&&function(t){a.d(n,t,function(){return i[t]})}(s);a("fd0c");var o,c=a("f0c5"),l=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);n["default"]=l.exports},cde5:function(t,n,a){},ef82:function(t,n,a){"use strict";(function(t){a("23cd"),a("921b");e(a("66fd"));var n=e(a("82b2"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},f2db:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a("d7be"),i={name:"listContent",data:function(){return{alibumList:[],isLabelOpen:!1,isLogin:!1,className:"",changeName:"",changeIndex:"",albumInfo:"",classId:""}},onLoad:function(t){this.getAlbum(t.id),this.classId=t.id},onShow:function(){1==t.getStorageSync("isF5List")&&(this.alibumList=[],this.getAlbum(this.classId),t.setStorageSync("isF5List",!1))},methods:{changeCut:function(n){var a=this;""==this.albumInfo&&""==this.changeName||(""==this.changeIndex&&(this.changeIndex=0),t.showLoading({title:"删除中",mask:!0}),e.sget({url:"album/cutType",data:{id:a.alibumList[a.changeIndex].Id}}).then(function(n){1024==n.data.code?(t.showToast({title:"删除成功"}),a.alibumList.splice(a.changeIndex,1),a.changeIndex="",a.changeName="",a.albumInfo=""):t.showToast({title:n.data.msg,icon:"none"}),t.hideLoading()}).catch(function(t){console.log(t)}))},changeSave:function(n){var a=this;""!=this.changeName?(t.showLoading({title:"保存中",mask:!0}),e.sget({url:"album/saveType",data:{changeName:a.changeName,changeInfo:a.albumInfo,id:a.alibumList[a.changeIndex].Id}}).then(function(n){1024==n.data.code?(t.showToast({title:"保存成功"}),a.alibumList[a.changeIndex].title=a.changeName,a.alibumList[a.changeIndex].info=a.changeInfo):t.showToast({title:n.data.msg,icon:"none"}),t.hideLoading()}).catch(function(t){console.log(t)})):t.showToast({title:"不能为空",icon:"none"})},changeLeftRight:function(n){var a=this,i=n.currentTarget.dataset.id,s=this.changeName,o=this;if(""!=s||void 0!=s){if(1==i)var c=this.alibumList[this.changeIndex-1];else c=this.alibumList[this.changeIndex+1];var l=c&&c["sort"];if(void 0==c)return 0;e.sget({url:"album/changeTypeSort",data:{AID:o.alibumList[o.changeIndex].Id,ASORT:l,BID:c.Id,BSORT:o.alibumList[o.changeIndex]["sort"]}}).then(function(n){if(1024==n.data.code){t.showToast({title:"更换成功"});var e=o.alibumList[o.changeIndex]["sort"],s=o.alibumList,u=o.alibumList[o.changeIndex];u["sort"]=l;c["sort"]=e,1==i?(s[o.changeIndex]=c,s[a.changeIndex-1]=u,a.changeIndex=a.changeIndex-1):(s[o.changeIndex]=c,s[a.changeIndex+1]=u,a.changeIndex=a.changeIndex+1),o.alibumList=s}else t.showToast({title:n.data.msg,icon:"none"});t.hideLoading()}).catch(function(t){console.log(t)})}else t.showToast({title:"你还没有选择类别",icon:"none"})},showOther:function(n){var a=n.currentTarget.dataset.index,e=(this.alibumList[a].Id,this.alibumList[a].title),i=this.alibumList[a].info;console.log(a),this.changeName=e,this.changeIndex=a,this.albumInfo=i,t.showToast({title:"选择成功，顶部开始管理",icon:"none"})},showLabelContent:function(){this.isLabelOpen=!this.isLabelOpen},addClass:function(){var n=this;""!=this.className?(t.showLoading({title:"添加中",mask:!0}),e.http({url:"album/addAlbum",data:{className:n.className,classInfo:n.albumInfo,classId:n.classId}}).then(function(a){1024==a.data.code?(t.showToast({title:"添加成功"}),n.alibumList.push({Id:a.data.Id,title:n.className,class_id:n.classId,img:"http://qzonestyle.gtimg.cn/aoi/img/photo/logic/pic-none.png?rf=albumlist&t=5",info:n.albumInfo,num:0,sort:a.data.Id-1}),n.className="",n.albumInfo=""):t.showToast({title:a.data.msg,icon:"none"}),t.hideLoading()}).catch(function(t){console.log(t)})):t.showToast({title:"不能为空",icon:"none"})},showPic:function(n){var a=n.currentTarget.dataset.index;t.navigateTo({url:"../pic/pic?id="+this.alibumList[a].Id})},getAlbum:function(t){var n=this;e.get({url:"album/getAlbumClassPic",data:{id:t}}).then(function(t){n.alibumList=n.alibumList.concat(t.data)}).catch(function(t){console.log(t)})}},mounted:function(){""!=t.getStorageSync("session")&&void 0!=t.getStorageSync("session")&&t.getStorageSync("session").length>10?this.isLogin=!0:this.isLogin=!1}};n.default=i}).call(this,a("543d")["default"])},fd0c:function(t,n,a){"use strict";var e=a("cde5"),i=a.n(e);i.a}},[["ef82","common/runtime","common/vendor"]]]);