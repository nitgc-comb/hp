(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-638f2eb9"],{"69cd":function(t,e,n){t.exports=n.p+"img/procon_2019.d74c0034.jpg"},"828e":function(t,e,n){t.exports=n.p+"img/procon_2019_2.93f0fd2f.jpg"},b5a1:function(t,e,n){var i={"./members.jpg":"f6c4","./plate.jpg":"0b1a","./procon_2019.jpg":"69cd","./procon_2019_2.jpg":"828e","./top.jpg":"c9c7","./typing.jpg":"4036"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id="b5a1"},f820:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("SectionTitle",{attrs:{icon:"check-circle",title:"活動内容"}}),n("SectionContent",{attrs:{icon:"laptop-code",image:"members",left:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("プログラミング講座")]},proxy:!0},{key:"description",fn:function(){return[t._v("4月から9月にかけて、新たに入った人を対象にプログラミング講座を行っています。 この講座で、プログラミングを基礎の基礎から分かりやすく、 丁寧に説明し、全員がある程度プログラミングスキルを習得できることを目指しています。")]},proxy:!0}])}),n("SectionContent",{attrs:{icon:"gamepad",image:"typing",right:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("ゲーム制作")]},proxy:!0},{key:"description",fn:function(){return[t._v("プログラミング講座が終わると、得た知識を生かして各々でゲームの制作を行い始めます。ゲームのジャンルや制作環境などに制約はなく、それぞれ作りたいものを作ります。そして、 部内イベント「マスダヤモンの戦い」にて制作した作品を用いてコンテストを行います。さらに今度はその作品を来年度の高専祭にて展示し、 学内の学生や来場される一般の方々に試遊していただいています。")]},proxy:!0}])}),n("SectionContent",{attrs:{icon:"users",image:"procon_2019",left:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("コンテストへの参加")]},proxy:!0},{key:"description",fn:function(){return[t._v("全国の高専規模で行われる大会はロボコンだけではありません。プログラミングの技術、発想を競う「全国高専プログラミングコンテスト」というものも毎年開催されています。 プログラミングコンテスト(プロコン)では、プログラミングの技術を競う競技部門に加え、テーマについて新しいプロダクトを提案する課題部門、自由な発想で新しいプロダクトを提案する自由部門の3部門あり、 岐阜高専コンピュータ倶楽部は毎年各部門に参加しています。コンテストは、競技や発表以外にも、他高専の学生との交流もでき、参加した学生からは毎年とても充実していたと聞きます。")]},proxy:!0}])})],1),n("section",[n("SectionTitle",{attrs:{icon:"award",title:"コンテスト参加・受賞歴"}}),n("h4",{staticClass:"year-section-title"},[t._v("2019")]),n("AwardList",{attrs:{year:"2019"}}),n("h4",{staticClass:"year-section-title"},[t._v("2018")]),n("AwardList",{attrs:{year:"2018"}})],1)])},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"section-title"},[n("font-awesome-icon",{attrs:{icon:t.icon}}),t._v(t._s(t.title))],1)},s=[],o={props:{icon:{type:String,default:""},title:{type:String,default:""}}},l=o,c=n("2877"),u=Object(c["a"])(l,a,s,!1,null,null,null),p=u.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-content",class:{"img-l":t.left,"img-r":t.right}},[t.image?i("img",{staticClass:"section-content-img",attrs:{src:n("b5a1")("./"+t.image+".jpg")}}):t._e(),i("div",{staticClass:"content-explain"},[i("h4",{staticClass:"sub-section-title"},[i("font-awesome-icon",{attrs:{icon:t.icon}}),t._t("title")],2),i("p",{staticClass:"description"},[t._t("description")],2)])])},f=[],_={props:{icon:{type:String,default:""},image:{type:String,default:""},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1}}},v=_,g=Object(c["a"])(v,d,f,!1,null,null,null),y=g.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history"},t._l(t.awardData,(function(t){return n("AwardListItem",{key:t.id,attrs:{date:t.date,title:t.title,url:t.url,result:t.result}})})),1)},w=[],C=n("1725"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-card"},[n("div",{staticClass:"event-title"},[n("a",{attrs:{href:t.url,target:"block"}},[t._v(t._s(t.title)),n("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1),n("div",{staticClass:"event-date"},[t._v(t._s(t.date))])]),t._l(this.result,(function(e){return n("div",{staticClass:"event-card-item"},[n("div",{staticClass:"item-category"},[t._v(t._s(e.category))]),n("div",{staticClass:"item-award"},[t._v(t._s(e.award))]),n("div",{staticClass:"event-card-item-title"},[t._v(t._s(e.title))])])}))],2)},S=[],b={props:{title:{type:String,default:null},date:{type:String,default:null},result:{type:Array,default:function(){return[]}},url:{type:String,default:null}}},x=b,j=Object(c["a"])(x,h,S,!1,null,null,null),k=j.exports,O={data:function(){return{awardData:C.award[this.year]}},props:{year:{type:String,default:""}},components:{AwardListItem:k}},E=O,A=Object(c["a"])(E,m,w,!1,null,null,null),L=A.exports,$={components:{SectionTitle:p,SectionContent:y,AwardList:L}},D=$,T=Object(c["a"])(D,i,r,!1,null,null,null);e["default"]=T.exports}}]);