(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RpJu:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),e=u("t68o"),o=u("zbXB"),a=u("NcP4"),s=u("xYTU"),b=u("pMnS"),r=u("FIYE"),c=u("gIcY"),d=u("Ip0R"),h=u("3mea"),g=function(){function l(l){this.streamService=l,this.limit=0,this.color="",this.mode=0,this.streamService.streams.length&&(this.streamToDisplay=this.streamService.streams[0])}return l.prototype.ngOnDestroy=function(){this.stop()},l.prototype.start=function(){var l=this;this.video=document.createElement("video"),this.video.srcObject=this.streamToDisplay,this.video.width=640,this.video.height=480,this.video.autoplay=!0,this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.interval=setInterval(function(){return l.update()},30)},l.prototype.stop=function(){clearInterval(this.interval),this.interval=null},l.prototype.pickColor=function(l){var n=this.ctx.getImageData(0,0,this.video.width,this.video.height).data,u=this.video.width*l.layerY+l.layerX,t=n[4*u+0],i=n[4*u+1],e=n[4*u+2];this.color="#"+this.rgb2hex(t,i,e),this.colorRGB={red:t,green:i,blue:e}},l.prototype.setMode=function(l){this.mode=l},l.prototype.isMode=function(l){return this.mode===l},l.prototype.update=function(){if(this.video){var l=this.video.width,n=this.video.height;this.ctx.drawImage(this.video,0,0,l,n),this.color.length&&this.updateCanvas(this.ctx,l,n)}},l.prototype.updateCanvas=function(l,n,u){for(var t=l.getImageData(0,0,n,u),i=t.data,e=i.length/4,o=0;o<e;o++)switch(this.mode){case 0:this.hideColor(i,o,i[4*o+0],i[4*o+1],i[4*o+2]);break;case 1:this.showColor(i,o,i[4*o+0],i[4*o+1],i[4*o+2]);break;case 2:this.highlightColor(i,o,i[4*o+0],i[4*o+1],i[4*o+2])}l.putImageData(t,0,0)},l.prototype.hideColor=function(l,n,u,t,i){this.inArea(u,this.colorRGB.red,this.limit)&&this.inArea(t,this.colorRGB.green,this.limit)&&this.inArea(i,this.colorRGB.blue,this.limit)&&(l[4*n+3]=0)},l.prototype.showColor=function(l,n,u,t,i){this.inArea(u,this.colorRGB.red,this.limit)&&this.inArea(t,this.colorRGB.green,this.limit)&&this.inArea(i,this.colorRGB.blue,this.limit)||(l[4*n+3]=0)},l.prototype.highlightColor=function(l,n,u,t,i){if(!(this.inArea(u,this.colorRGB.red,this.limit)&&this.inArea(t,this.colorRGB.green,this.limit)&&this.inArea(i,this.colorRGB.blue,this.limit))){var e=(u+t+i)/3;l[4*n+0]=e,l[4*n+1]=e,l[4*n+2]=e}},l.prototype.inArea=function(l,n,u){return l>=n-u&&l<=n+u},l.prototype.rgb2hex=function(l,n,u){var t=Array.apply(null,arguments).join().match(/\d+/g);return((t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16)},l}(),p=t.qb({encapsulation:0,styles:[[".canvas-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{position:absolute}"],r.a],data:{}});function m(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"p",[["class","module-message panel"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Select media stream"]))],null,null)}function v(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"a",[["class","filter-button extra"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.start()&&t),t},null,null)),(l()(),t.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Start"]))],null,null)}function A(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"a",[["class","filter-button enabled extra"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.stop()&&t),t},null,null)),(l()(),t.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Stop"]))],null,null)}function f(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,26,"div",[["class","settings panel"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,25,"div",[["class","settings-container"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,10,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Color: "])),(l()(),t.sb(6,0,null,null,6,"div",[["class","value-input"]],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,5,"input",[["disabled",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0,e=l.component;return"input"===n&&(i=!1!==t.Cb(l,8)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Cb(l,8).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Cb(l,8)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Cb(l,8)._compositionEnd(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(e.color=u)&&i),i},null,null)),t.rb(8,16384,null,0,c.b,[t.G,t.k,[2,c.a]],null,null),t.Gb(1024,null,c.e,function(l){return[l]},[c.b]),t.rb(10,671744,null,0,c.h,[[8,null],[8,null],[8,null],[6,c.e]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.f,null,[c.h]),t.rb(12,16384,null,0,c.g,[[4,c.f]],null,null),(l()(),t.sb(13,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),t.sb(14,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Limit: "])),(l()(),t.sb(17,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),t.sb(18,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0,e=l.component;return"input"===n&&(i=!1!==t.Cb(l,19)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Cb(l,19).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Cb(l,19)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Cb(l,19)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Cb(l,20).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Cb(l,20).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Cb(l,20).onTouched()&&i),"ngModelChange"===n&&(i=!1!==(e.limit=u)&&i),i},null,null)),t.rb(19,16384,null,0,c.b,[t.G,t.k,[2,c.a]],null,null),t.rb(20,16384,null,0,c.m,[t.G,t.k],null,null),t.Gb(1024,null,c.e,function(l,n){return[l,n]},[c.b,c.m]),t.rb(22,671744,null,0,c.h,[[8,null],[8,null],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.f,null,[c.h]),t.rb(24,16384,null,0,c.g,[[4,c.f]],null,null),(l()(),t.sb(25,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(26,null,["(value: ",")"]))],function(l,n){var u=n.component;l(n,10,0,"",u.color),l(n,22,0,u.limit)},function(l,n){var u=n.component;l(n,7,0,t.Cb(n,12).ngClassUntouched,t.Cb(n,12).ngClassTouched,t.Cb(n,12).ngClassPristine,t.Cb(n,12).ngClassDirty,t.Cb(n,12).ngClassValid,t.Cb(n,12).ngClassInvalid,t.Cb(n,12).ngClassPending),l(n,18,0,0,200,t.Cb(n,24).ngClassUntouched,t.Cb(n,24).ngClassTouched,t.Cb(n,24).ngClassPristine,t.Cb(n,24).ngClassDirty,t.Cb(n,24).ngClassValid,t.Cb(n,24).ngClassInvalid,t.Cb(n,24).ngClassPending),l(n,26,0,u.limit)})}function C(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Color Keying"])),(l()(),t.sb(2,0,null,null,23,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,m)),t.rb(4,16384,null,0,d.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(5,0,null,null,14,"div",[["class","panel"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,13,"div",[["class","filter-buttons"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,v)),t.rb(8,16384,null,0,d.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,A)),t.rb(10,16384,null,0,d.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(11,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode(0)&&t),t},null,null)),(l()(),t.sb(12,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Hide"])),(l()(),t.sb(14,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode(1)&&t),t},null,null)),(l()(),t.sb(15,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Show"])),(l()(),t.sb(17,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode(2)&&t),t},null,null)),(l()(),t.sb(18,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Hightlight"])),(l()(),t.sb(20,0,null,null,3,"div",[["class","sample-container panel"]],null,null,null,null,null)),(l()(),t.sb(21,0,null,null,2,"div",[["class","canvas-container"]],null,null,null,null,null)),(l()(),t.sb(22,0,null,null,0,"canvas",[["height","480"],["id","canvas"],["width","640"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.pickColor(u)&&t),t},null,null)),(l()(),t.sb(23,0,null,null,0,"img",[["src","assets/green-effect-background.jpg"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,f)),t.rb(25,16384,null,0,d.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,!u.streamToDisplay),l(n,8,0,!u.interval),l(n,10,0,u.interval),l(n,25,0,!!u.streamToDisplay)},function(l,n){var u=n.component;l(n,11,0,u.isMode(0)),l(n,14,0,u.isMode(1)),l(n,17,0,u.isMode(2))})}function y(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"ng-component",[],null,null,null,C,p)),t.rb(1,180224,null,0,g,[h.a],null,null)],null,null)}var k=t.ob("ng-component",g,y,{},{},[]),I=u("t/Na"),M=u("eDkP"),j=u("Fzqc"),G=u("M2Lx"),R=u("uGex"),w=u("o3x0"),S=u("jQLj"),x=u("Wf4p"),B=u("dWZg"),D=u("mVsa"),J=u("v9Dh"),T=u("ZYjt"),L=u("4c35"),P=u("qAlS"),O=u("seP3"),_=u("UodH"),E=u("lLAP"),Y=u("/VYK"),q=u("b716"),N=u("SMsm"),F=u("y4qS"),K=u("BHnd"),X=u("Blfk"),z=u("6Wmm"),H=u("La40"),U=u("vARd"),V=u("w+lc"),W=u("PCNd"),Z=u("ZYCi");u.d(n,"ColorKeyingModuleNgFactory",function(){return Q});var Q=t.pb(i,[],function(l){return t.zb([t.Ab(512,t.j,t.eb,[[8,[e.a,o.b,o.a,a.a,s.a,s.b,b.a,k]],[3,t.j],t.z]),t.Ab(4608,d.m,d.l,[t.w,[2,d.v]]),t.Ab(4608,I.h,I.n,[d.d,t.D,I.l]),t.Ab(4608,I.o,I.o,[I.h,I.m]),t.Ab(5120,I.a,function(l){return[l]},[I.o]),t.Ab(4608,I.k,I.k,[]),t.Ab(6144,I.i,null,[I.k]),t.Ab(4608,I.g,I.g,[I.i]),t.Ab(6144,I.b,null,[I.g]),t.Ab(4608,I.f,I.j,[I.b,t.s]),t.Ab(4608,I.c,I.c,[I.f]),t.Ab(4608,c.n,c.n,[]),t.Ab(4608,M.a,M.a,[M.g,M.c,t.j,M.f,M.d,t.s,t.B,d.d,j.b,[2,d.g]]),t.Ab(5120,M.h,M.i,[M.a]),t.Ab(4608,G.c,G.c,[]),t.Ab(5120,R.a,R.b,[M.a]),t.Ab(5120,w.b,w.c,[M.a]),t.Ab(135680,w.d,w.d,[M.a,t.s,[2,d.g],[2,w.a],w.b,[3,w.d],M.c]),t.Ab(4608,S.h,S.h,[]),t.Ab(5120,S.a,S.b,[M.a]),t.Ab(4608,x.a,x.p,[[2,x.f],B.a]),t.Ab(4608,x.b,x.b,[]),t.Ab(5120,D.b,D.f,[M.a]),t.Ab(5120,J.a,J.b,[M.a]),t.Ab(4608,T.f,x.c,[[2,x.g],[2,x.j]]),t.Ab(1073742336,d.c,d.c,[]),t.Ab(1073742336,I.e,I.e,[]),t.Ab(1073742336,I.d,I.d,[]),t.Ab(1073742336,c.l,c.l,[]),t.Ab(1073742336,c.c,c.c,[]),t.Ab(1073742336,j.a,j.a,[]),t.Ab(1073742336,L.g,L.g,[]),t.Ab(1073742336,B.b,B.b,[]),t.Ab(1073742336,P.b,P.b,[]),t.Ab(1073742336,M.e,M.e,[]),t.Ab(1073742336,x.j,x.j,[[2,x.d],[2,T.g]]),t.Ab(1073742336,x.o,x.o,[]),t.Ab(1073742336,x.m,x.m,[]),t.Ab(1073742336,x.l,x.l,[]),t.Ab(1073742336,G.d,G.d,[]),t.Ab(1073742336,O.a,O.a,[]),t.Ab(1073742336,R.c,R.c,[]),t.Ab(1073742336,_.c,_.c,[]),t.Ab(1073742336,w.g,w.g,[]),t.Ab(1073742336,E.a,E.a,[]),t.Ab(1073742336,S.i,S.i,[]),t.Ab(1073742336,x.q,x.q,[]),t.Ab(1073742336,x.k,x.k,[]),t.Ab(1073742336,Y.b,Y.b,[]),t.Ab(1073742336,q.a,q.a,[]),t.Ab(1073742336,D.e,D.e,[]),t.Ab(1073742336,N.c,N.c,[]),t.Ab(1073742336,F.p,F.p,[]),t.Ab(1073742336,K.l,K.l,[]),t.Ab(1073742336,X.c,X.c,[]),t.Ab(1073742336,z.b,z.b,[]),t.Ab(1073742336,J.c,J.c,[]),t.Ab(1073742336,H.j,H.j,[]),t.Ab(1073742336,U.e,U.e,[]),t.Ab(1073742336,V.a,V.a,[]),t.Ab(1073742336,W.a,W.a,[]),t.Ab(1073742336,Z.n,Z.n,[[2,Z.t],[2,Z.k]]),t.Ab(1073742336,i,i,[]),t.Ab(256,I.l,"XSRF-TOKEN",[]),t.Ab(256,I.m,"X-XSRF-TOKEN",[]),t.Ab(256,x.e,x.h,[]),t.Ab(1024,Z.i,function(){return[[{path:"",component:g}]]},[])])})}}]);