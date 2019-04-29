(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qe3A:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),i=t("t68o"),r=t("zbXB"),a=t("NcP4"),o=t("xYTU"),s=t("pMnS"),c=t("FIYE"),b=t("gIcY"),f=t("Ip0R"),p=t("3mea"),h=t("mrSG"),d=function(){function l(l,n,t,e,u,i){this.label=l,this.enabled=n,this.paramType=t,this.param=e,this.rangeStart=u,this.rangeEnd=i}return l.prototype.toggleEnabled=function(){this.enabled=!this.enabled},l.prototype.isRangeType=function(){return this.paramType===g.RANGE},l}(),g=function(l){return l[l.RANGE=0]="RANGE",l[l.SWITCH=1]="SWITCH",l}({}),A=function(l){function n(){return l.call(this,"Contrast",!1,g.RANGE,100,0,200)||this}return h.c(n,l),n.prototype.filter=function(l){var n="";l.filter&&"none"!==l.filter&&(n=l.filter),l.filter=n+" contrast("+this.param+"%)"},n}(d),m=function(l){function n(){return l.call(this,"Blur",!1,g.RANGE,0,0,30)||this}return h.c(n,l),n.prototype.filter=function(l){var n="";l.filter&&"none"!==l.filter&&(n=l.filter),l.filter=n+" blur("+this.param+"px)"},n}(d),v=function(l){function n(){return l.call(this,"Brightness",!1,g.RANGE,100,0,200)||this}return h.c(n,l),n.prototype.filter=function(l){var n="";l.filter&&"none"!==l.filter&&(n=l.filter),l.filter=n+" brightness("+this.param+"%)"},n}(d),y=function(l){function n(){return l.call(this,"Sharpening",!1,g.RANGE,1,1,90)||this}return h.c(n,l),n.prototype.filter=function(l,n,t){for(var e=[0,-1,0,-1,5,-1,0,-1,0],u=Math.round(Math.sqrt(e.length)),i=.5*u|0,r=l.createImageData(n,t),a=r.data,o=l.getImageData(0,0,n,t).data,s=t;s--;)for(var c=n;c--;){for(var b=s,f=c,p=4*(s*n+c),h=0,d=0,g=0,A=0;A<u;A++)for(var m=0;m<u;m++){var v=b+A-i,y=f+m-i;if(v>=0&&v<t&&y>=0&&y<n){var C=4*(v*n+y),I=e[A*u+m];h+=o[C]*I,d+=o[C+1]*I,g+=o[C+2]*I}}var F=this.param/100;a[p]=h*F+o[p]*(1-F),a[p+1]=d*F+o[p+1]*(1-F),a[p+2]=g*F+o[p+2]*(1-F),a[p+3]=o[p+3]}l.putImageData(r,0,0)},n}(d),C=function(l){function n(){return l.call(this,"Grayscale",!1,g.RANGE,0,0,100)||this}return h.c(n,l),n.prototype.filter=function(l){var n="";l.filter&&"none"!==l.filter&&(n=l.filter),l.filter=n+" grayscale("+this.param+"%)"},n}(d),I=function(l){function n(){return l.call(this,"Invert",!1,g.RANGE,0,0,100)||this}return h.c(n,l),n.prototype.filter=function(l){var n="";l.filter&&"none"!==l.filter&&(n=l.filter),l.filter=n+" invert("+this.param+"%)"},n}(d),F=function(l){function n(){return l.call(this,"Saturate",!1,g.RANGE,100,0,300)||this}return h.c(n,l),n.prototype.filter=function(l){var n="";l.filter&&"none"!==l.filter&&(n=l.filter),l.filter=n+" saturate("+this.param+"%)"},n}(d),R=function(l){function n(){return l.call(this,"Hue rotation",!1,g.RANGE,0,0,360)||this}return h.c(n,l),n.prototype.filter=function(l){var n="";l.filter&&"none"!==l.filter&&(n=l.filter),l.filter=n+" hue-rotate("+this.param+"deg)"},n}(d),k=function(l){function n(){return l.call(this,"Threshold",!1,g.RANGE,125,0,255)||this}return h.c(n,l),n.prototype.filter=function(l,n,t){for(var e=l.getImageData(0,0,n,t),u=e.data,i=0;i<u.length;i+=4)u[i]=u[i+1]=u[i+2]=.2126*u[i]+.7152*u[i+1]+.0722*u[i+2]>=this.param?255:0;l.putImageData(e,0,0)},n}(d),E=function(){function l(l){this.streamService=l,this.filters=[],this.streamService.streams.length&&(this.streamToDisplay=this.streamService.streams[0]),this.filters=[new y,new I,new R,new C,new F,new A,new m,new v,new k]}return l.prototype.ngOnDestroy=function(){this.stop()},l.prototype.start=function(){var l=this;this.video=document.createElement("video"),this.video.srcObject=this.streamToDisplay,this.video.width=640,this.video.height=480,this.video.autoplay=!0,this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.interval=setInterval(function(){return l.update()},30)},l.prototype.stop=function(){clearInterval(this.interval),this.interval=null},l.prototype.isSelectedFilter=function(l){return!!this.selectedFilter&&this.selectedFilter.label===l.label},l.prototype.selectFilter=function(l){this.isSelectedFilter(l)?this.selectedFilter=null:l.enabled||(this.selectedFilter=l),l.toggleEnabled()},l.prototype.update=function(){var l=this;if(this.video){var n=this.video.width,t=this.video.height;this.ctx.drawImage(this.video,0,0,n,t),this.ctx.filter="none",this.filters.filter(function(l){return l.enabled}).forEach(function(e){e.filter(l.ctx,n,t)})}},l}(),S=e.qb({encapsulation:0,styles:[c.a],data:{}});function j(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"p",[["class","module-message"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Select media stream"]))],null,null)}function w(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"a",[["class","filter-button extra"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.start()&&e),e},null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Start"]))],null,null)}function G(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"a",[["class","filter-button enabled extra"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.stop()&&e),e},null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Stop"]))],null,null)}function N(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null],[2,"selected",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectFilter(l.context.$implicit)&&e),e},null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(2,null,["",""]))],null,function(l,n){l(n,0,0,n.context.$implicit.enabled,n.component.isSelectedFilter(n.context.$implicit)),l(n,2,0,n.context.$implicit.label)})}function x(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var u=!0,i=l.component;return"input"===n&&(u=!1!==e.Cb(l,1)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e.Cb(l,1).onTouched()&&u),"compositionstart"===n&&(u=!1!==e.Cb(l,1)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e.Cb(l,1)._compositionEnd(t.target.value)&&u),"change"===n&&(u=!1!==e.Cb(l,2).onChange(t.target.value)&&u),"input"===n&&(u=!1!==e.Cb(l,2).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e.Cb(l,2).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(i.selectedFilter.param=t)&&u),u},null,null)),e.rb(1,16384,null,0,b.b,[e.G,e.k,[2,b.a]],null,null),e.rb(2,16384,null,0,b.m,[e.G,e.k],null,null),e.Gb(1024,null,b.e,function(l,n){return[l,n]},[b.b,b.m]),e.rb(4,671744,null,0,b.h,[[8,null],[8,null],[8,null],[6,b.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,b.f,null,[b.h]),e.rb(6,16384,null,0,b.g,[[4,b.f]],null,null)],function(l,n){l(n,4,0,n.component.selectedFilter.param)},function(l,n){var t=n.component;l(n,0,0,t.selectedFilter.rangeStart,t.selectedFilter.rangeEnd,e.Cb(n,6).ngClassUntouched,e.Cb(n,6).ngClassTouched,e.Cb(n,6).ngClassPristine,e.Cb(n,6).ngClassDirty,e.Cb(n,6).ngClassValid,e.Cb(n,6).ngClassInvalid,e.Cb(n,6).ngClassPending)})}function T(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(1,null,["(value: ",")"]))],null,function(l,n){l(n,1,0,n.component.selectedFilter.param)})}function D(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,10,"div",[["class","settings panel"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,9,"div",[["class","settings-container"]],null,null,null,null,null)),(l()(),e.sb(2,0,null,null,8,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.sb(4,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Jb(5,null,["",""])),(l()(),e.sb(6,0,null,null,4,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,x)),e.rb(8,16384,null,0,f.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,T)),e.rb(10,16384,null,0,f.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,8,0,t.selectedFilter.isRangeType()),l(n,10,0,t.selectedFilter.isRangeType())},function(l,n){l(n,5,0,n.component.selectedFilter.label)})}function L(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Filters"])),(l()(),e.sb(2,0,null,null,14,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,j)),e.rb(4,16384,null,0,f.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(5,0,null,null,7,"div",[["class","panel"]],null,null,null,null,null)),(l()(),e.sb(6,0,null,null,6,"div",[["class","filter-buttons"]],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,w)),e.rb(8,16384,null,0,f.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,G)),e.rb(10,16384,null,0,f.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,N)),e.rb(12,278528,null,0,f.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.sb(13,0,null,null,1,"div",[["class","sample-container panel"]],null,null,null,null,null)),(l()(),e.sb(14,0,null,null,0,"canvas",[["height","480"],["id","canvas"],["width","640"]],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,D)),e.rb(16,16384,null,0,f.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,4,0,!t.streamToDisplay),l(n,8,0,!t.interval),l(n,10,0,t.interval),l(n,12,0,t.filters),l(n,16,0,!!t.selectedFilter)},null)}function O(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,L,S)),e.rb(1,180224,null,0,E,[p.a],null,null)],null,null)}var J=e.ob("ng-component",E,O,{},{},[]),M=t("t/Na"),q=t("eDkP"),B=t("Fzqc"),P=t("M2Lx"),Y=t("uGex"),H=t("o3x0"),W=t("jQLj"),z=t("Wf4p"),X=t("dWZg"),$=t("mVsa"),K=t("v9Dh"),U=t("ZYjt"),V=t("4c35"),Z=t("qAlS"),_=t("seP3"),Q=t("UodH"),ll=t("lLAP"),nl=t("/VYK"),tl=t("b716"),el=t("SMsm"),ul=t("y4qS"),il=t("BHnd"),rl=t("Blfk"),al=t("6Wmm"),ol=t("La40"),sl=t("vARd"),cl=t("w+lc"),bl=t("PCNd"),fl=t("ZYCi");t.d(n,"FiltersModuleNgFactory",function(){return pl});var pl=e.pb(u,[],function(l){return e.zb([e.Ab(512,e.j,e.eb,[[8,[i.a,r.b,r.a,a.a,o.a,o.b,s.a,J]],[3,e.j],e.z]),e.Ab(4608,f.m,f.l,[e.w,[2,f.v]]),e.Ab(4608,M.h,M.n,[f.d,e.D,M.l]),e.Ab(4608,M.o,M.o,[M.h,M.m]),e.Ab(5120,M.a,function(l){return[l]},[M.o]),e.Ab(4608,M.k,M.k,[]),e.Ab(6144,M.i,null,[M.k]),e.Ab(4608,M.g,M.g,[M.i]),e.Ab(6144,M.b,null,[M.g]),e.Ab(4608,M.f,M.j,[M.b,e.s]),e.Ab(4608,M.c,M.c,[M.f]),e.Ab(4608,b.n,b.n,[]),e.Ab(4608,q.a,q.a,[q.g,q.c,e.j,q.f,q.d,e.s,e.B,f.d,B.b,[2,f.g]]),e.Ab(5120,q.h,q.i,[q.a]),e.Ab(4608,P.c,P.c,[]),e.Ab(5120,Y.a,Y.b,[q.a]),e.Ab(5120,H.b,H.c,[q.a]),e.Ab(135680,H.d,H.d,[q.a,e.s,[2,f.g],[2,H.a],H.b,[3,H.d],q.c]),e.Ab(4608,W.h,W.h,[]),e.Ab(5120,W.a,W.b,[q.a]),e.Ab(4608,z.a,z.p,[[2,z.f],X.a]),e.Ab(4608,z.b,z.b,[]),e.Ab(5120,$.b,$.f,[q.a]),e.Ab(5120,K.a,K.b,[q.a]),e.Ab(4608,U.f,z.c,[[2,z.g],[2,z.j]]),e.Ab(1073742336,f.c,f.c,[]),e.Ab(1073742336,M.e,M.e,[]),e.Ab(1073742336,M.d,M.d,[]),e.Ab(1073742336,b.l,b.l,[]),e.Ab(1073742336,b.c,b.c,[]),e.Ab(1073742336,B.a,B.a,[]),e.Ab(1073742336,V.g,V.g,[]),e.Ab(1073742336,X.b,X.b,[]),e.Ab(1073742336,Z.b,Z.b,[]),e.Ab(1073742336,q.e,q.e,[]),e.Ab(1073742336,z.j,z.j,[[2,z.d],[2,U.g]]),e.Ab(1073742336,z.o,z.o,[]),e.Ab(1073742336,z.m,z.m,[]),e.Ab(1073742336,z.l,z.l,[]),e.Ab(1073742336,P.d,P.d,[]),e.Ab(1073742336,_.a,_.a,[]),e.Ab(1073742336,Y.c,Y.c,[]),e.Ab(1073742336,Q.c,Q.c,[]),e.Ab(1073742336,H.g,H.g,[]),e.Ab(1073742336,ll.a,ll.a,[]),e.Ab(1073742336,W.i,W.i,[]),e.Ab(1073742336,z.q,z.q,[]),e.Ab(1073742336,z.k,z.k,[]),e.Ab(1073742336,nl.b,nl.b,[]),e.Ab(1073742336,tl.a,tl.a,[]),e.Ab(1073742336,$.e,$.e,[]),e.Ab(1073742336,el.c,el.c,[]),e.Ab(1073742336,ul.p,ul.p,[]),e.Ab(1073742336,il.l,il.l,[]),e.Ab(1073742336,rl.c,rl.c,[]),e.Ab(1073742336,al.b,al.b,[]),e.Ab(1073742336,K.c,K.c,[]),e.Ab(1073742336,ol.j,ol.j,[]),e.Ab(1073742336,sl.e,sl.e,[]),e.Ab(1073742336,cl.a,cl.a,[]),e.Ab(1073742336,bl.a,bl.a,[]),e.Ab(1073742336,fl.n,fl.n,[[2,fl.t],[2,fl.k]]),e.Ab(1073742336,u,u,[]),e.Ab(256,M.l,"XSRF-TOKEN",[]),e.Ab(256,M.m,"X-XSRF-TOKEN",[]),e.Ab(256,z.e,z.h,[]),e.Ab(1024,fl.i,function(){return[[{path:"",component:E}]]},[])])})}}]);