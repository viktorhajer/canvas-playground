(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5nYy":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("t68o"),s=u("zbXB"),a=u("NcP4"),o=u("xYTU"),b=u("pMnS"),c=u("FIYE"),r=u("gIcY"),d=u("Ip0R"),h=u("3mea"),p=function(){function l(l){this.streamService=l,this.power=0,this.sensitivity=15,this.mode1=0,this.mode2=0,this.previousData=[],this.streamService.streams.length&&(this.streamToDisplay=this.streamService.streams[0])}return l.prototype.ngOnDestroy=function(){this.stop()},l.prototype.start=function(){var l=this;this.video=document.createElement("video"),this.video.srcObject=this.streamToDisplay,this.video.width=640,this.video.height=480,this.video.autoplay=!0,this.canvas=document.createElement("canvas"),this.canvas.width=this.video.width,this.canvas.height=this.video.height,this.ctx=this.canvas.getContext("2d"),this.canvDiff=document.getElementById("canvas"),this.ctxDiff=this.canvDiff.getContext("2d"),this.interval=setInterval(function(){return l.update()},30)},l.prototype.stop=function(){clearInterval(this.interval),this.interval=null},l.prototype.setMode1=function(l){this.mode1=l},l.prototype.isMode1=function(l){return this.mode1===l},l.prototype.setMode2=function(l){this.mode2=l},l.prototype.isMode2=function(l){return this.mode2===l},l.prototype.update=function(){if(this.video){var l=this.video.width,n=this.video.height;this.ctx.drawImage(this.video,0,0,l,n),this.ctxDiff.drawImage(this.video,0,0,l,n);for(var u=this.ctx.getImageData(0,0,l,n),t=this.ctxDiff.getImageData(0,0,l,n),e=u.data,i=t.data,s=0,a=0;a<e.length;a+=4){for(var o=(e[a]+e[a+1]+e[a+2])/3,b=0,c=0;c<3;c++){var r=e[a+c];e[a+c]=o,(b=Math.abs(this.previousData[a]-e[a+c]))>this.sensitivity&&(2===c||0!=this.mode2)?(i[a+c]=255-o,0===this.mode2?i[a+c]=255-o:1===this.mode2?i[a+c]=o:2===this.mode2?i[a+c]=b:3===this.mode2?i[a+c]=255-b:4===this.mode2?i[a+c]=r:5===this.mode2&&(i[a+c]=0),s+=.01):0===this.mode1?i[a+c]=r:1===this.mode1?i[a+c]=o:2===this.mode1?i[a+c]=b:3===this.mode1&&(i[a+c]=255-b)}4===this.mode1&&b<=this.sensitivity&&(i[a+3]=0),this.previousData[a]=o}this.ctx.putImageData(u,0,0),this.ctxDiff.putImageData(t,0,0),this.power=Math.floor(s)}},l}(),g=t.qb({encapsulation:0,styles:[[".canvas-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{position:absolute}.filter-button[_ngcontent-%COMP%]{width:45px;height:35px}"],c.a],data:{}});function f(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"p",[["class","module-message panel"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Select media stream"]))],null,null)}function v(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"a",[["class","filter-button extra"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.start()&&t),t},null,null)),(l()(),t.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Start"]))],null,null)}function m(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"a",[["class","filter-button enabled extra"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.stop()&&t),t},null,null)),(l()(),t.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Stop"]))],null,null)}function A(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,26,"div",[["class","settings panel"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,25,"div",[["class","settings-container"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,10,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Movement Power: "])),(l()(),t.sb(6,0,null,null,6,"div",[["class","value-input"]],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,5,"input",[["disabled",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,8)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,8).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,8)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,8)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.power=u)&&e),e},null,null)),t.rb(8,16384,null,0,r.b,[t.G,t.k,[2,r.a]],null,null),t.Gb(1024,null,r.e,function(l){return[l]},[r.b]),t.rb(10,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.e]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.f,null,[r.h]),t.rb(12,16384,null,0,r.g,[[4,r.f]],null,null),(l()(),t.sb(13,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),t.sb(14,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Sensitivity: "])),(l()(),t.sb(17,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),t.sb(18,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,19)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,19).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,19)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,19)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Cb(l,20).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Cb(l,20).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,20).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(i.sensitivity=u)&&e),e},null,null)),t.rb(19,16384,null,0,r.b,[t.G,t.k,[2,r.a]],null,null),t.rb(20,16384,null,0,r.m,[t.G,t.k],null,null),t.Gb(1024,null,r.e,function(l,n){return[l,n]},[r.b,r.m]),t.rb(22,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.f,null,[r.h]),t.rb(24,16384,null,0,r.g,[[4,r.f]],null,null),(l()(),t.sb(25,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(26,null,["(value: ",")"]))],function(l,n){var u=n.component;l(n,10,0,"",u.power),l(n,22,0,u.sensitivity)},function(l,n){var u=n.component;l(n,7,0,t.Cb(n,12).ngClassUntouched,t.Cb(n,12).ngClassTouched,t.Cb(n,12).ngClassPristine,t.Cb(n,12).ngClassDirty,t.Cb(n,12).ngClassValid,t.Cb(n,12).ngClassInvalid,t.Cb(n,12).ngClassPending),l(n,18,0,0,100,t.Cb(n,24).ngClassUntouched,t.Cb(n,24).ngClassTouched,t.Cb(n,24).ngClassPristine,t.Cb(n,24).ngClassDirty,t.Cb(n,24).ngClassValid,t.Cb(n,24).ngClassInvalid,t.Cb(n,24).ngClassPending),l(n,26,0,u.sensitivity)})}function C(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Motion Detection"])),(l()(),t.sb(2,0,null,null,47,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,f)),t.rb(4,16384,null,0,d.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(5,0,null,null,38,"div",[["class","panel"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,37,"div",[["class","filter-buttons"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,v)),t.rb(8,16384,null,0,d.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,m)),t.rb(10,16384,null,0,d.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(11,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode1(0)&&t),t},null,null)),(l()(),t.sb(12,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M1C"])),(l()(),t.sb(14,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode1(1)&&t),t},null,null)),(l()(),t.sb(15,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M1BW"])),(l()(),t.sb(17,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode1(2)&&t),t},null,null)),(l()(),t.sb(18,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M1B"])),(l()(),t.sb(20,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode1(3)&&t),t},null,null)),(l()(),t.sb(21,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M1W"])),(l()(),t.sb(23,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode1(4)&&t),t},null,null)),(l()(),t.sb(24,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M1T"])),(l()(),t.sb(26,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode2(0)&&t),t},null,null)),(l()(),t.sb(27,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M2Blue"])),(l()(),t.sb(29,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode2(1)&&t),t},null,null)),(l()(),t.sb(30,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M2BW"])),(l()(),t.sb(32,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode2(2)&&t),t},null,null)),(l()(),t.sb(33,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M2Diff"])),(l()(),t.sb(35,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode2(3)&&t),t},null,null)),(l()(),t.sb(36,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M2IDiff"])),(l()(),t.sb(38,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode2(4)&&t),t},null,null)),(l()(),t.sb(39,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M2C"])),(l()(),t.sb(41,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setMode2(5)&&t),t},null,null)),(l()(),t.sb(42,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M2B"])),(l()(),t.sb(44,0,null,null,3,"div",[["class","sample-container panel"]],null,null,null,null,null)),(l()(),t.sb(45,0,null,null,2,"div",[["class","canvas-container"]],null,null,null,null,null)),(l()(),t.sb(46,0,null,null,0,"canvas",[["height","480"],["id","canvas"],["width","640"]],null,null,null,null,null)),(l()(),t.sb(47,0,null,null,0,"img",[["src","assets/green-effect-background.jpg"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,A)),t.rb(49,16384,null,0,d.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,!u.streamToDisplay),l(n,8,0,!u.interval),l(n,10,0,u.interval),l(n,49,0,!!u.streamToDisplay)},function(l,n){var u=n.component;l(n,11,0,u.isMode1(0)),l(n,14,0,u.isMode1(1)),l(n,17,0,u.isMode1(2)),l(n,20,0,u.isMode1(3)),l(n,23,0,u.isMode1(4)),l(n,26,0,u.isMode2(0)),l(n,29,0,u.isMode2(1)),l(n,32,0,u.isMode2(2)),l(n,35,0,u.isMode2(3)),l(n,38,0,u.isMode2(4)),l(n,41,0,u.isMode2(5))})}function M(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"ng-component",[],null,null,null,C,g)),t.rb(1,180224,null,0,p,[h.a],null,null)],null,null)}var k=t.ob("ng-component",p,M,{},{},[]),y=u("t/Na"),D=u("eDkP"),I=u("Fzqc"),w=u("M2Lx"),x=u("uGex"),J=u("o3x0"),j=u("jQLj"),S=u("Wf4p"),P=u("dWZg"),T=u("mVsa"),O=u("v9Dh"),B=u("ZYjt"),L=u("4c35"),G=u("qAlS"),_=u("seP3"),E=u("UodH"),R=u("lLAP"),Y=u("/VYK"),q=u("b716"),N=u("SMsm"),W=u("y4qS"),F=u("BHnd"),z=u("Blfk"),U=u("6Wmm"),V=u("La40"),X=u("vARd"),K=u("w+lc"),Z=u("PCNd"),H=u("ZYCi");u.d(n,"MotionModuleNgFactory",function(){return Q});var Q=t.pb(e,[],function(l){return t.zb([t.Ab(512,t.j,t.eb,[[8,[i.a,s.b,s.a,a.a,o.a,o.b,b.a,k]],[3,t.j],t.z]),t.Ab(4608,d.m,d.l,[t.w,[2,d.v]]),t.Ab(4608,y.h,y.n,[d.d,t.D,y.l]),t.Ab(4608,y.o,y.o,[y.h,y.m]),t.Ab(5120,y.a,function(l){return[l]},[y.o]),t.Ab(4608,y.k,y.k,[]),t.Ab(6144,y.i,null,[y.k]),t.Ab(4608,y.g,y.g,[y.i]),t.Ab(6144,y.b,null,[y.g]),t.Ab(4608,y.f,y.j,[y.b,t.s]),t.Ab(4608,y.c,y.c,[y.f]),t.Ab(4608,r.n,r.n,[]),t.Ab(4608,D.a,D.a,[D.g,D.c,t.j,D.f,D.d,t.s,t.B,d.d,I.b,[2,d.g]]),t.Ab(5120,D.h,D.i,[D.a]),t.Ab(4608,w.c,w.c,[]),t.Ab(5120,x.a,x.b,[D.a]),t.Ab(5120,J.b,J.c,[D.a]),t.Ab(135680,J.d,J.d,[D.a,t.s,[2,d.g],[2,J.a],J.b,[3,J.d],D.c]),t.Ab(4608,j.h,j.h,[]),t.Ab(5120,j.a,j.b,[D.a]),t.Ab(4608,S.a,S.p,[[2,S.f],P.a]),t.Ab(4608,S.b,S.b,[]),t.Ab(5120,T.b,T.f,[D.a]),t.Ab(5120,O.a,O.b,[D.a]),t.Ab(4608,B.f,S.c,[[2,S.g],[2,S.j]]),t.Ab(1073742336,d.c,d.c,[]),t.Ab(1073742336,y.e,y.e,[]),t.Ab(1073742336,y.d,y.d,[]),t.Ab(1073742336,r.l,r.l,[]),t.Ab(1073742336,r.c,r.c,[]),t.Ab(1073742336,I.a,I.a,[]),t.Ab(1073742336,L.g,L.g,[]),t.Ab(1073742336,P.b,P.b,[]),t.Ab(1073742336,G.b,G.b,[]),t.Ab(1073742336,D.e,D.e,[]),t.Ab(1073742336,S.j,S.j,[[2,S.d],[2,B.g]]),t.Ab(1073742336,S.o,S.o,[]),t.Ab(1073742336,S.m,S.m,[]),t.Ab(1073742336,S.l,S.l,[]),t.Ab(1073742336,w.d,w.d,[]),t.Ab(1073742336,_.a,_.a,[]),t.Ab(1073742336,x.c,x.c,[]),t.Ab(1073742336,E.c,E.c,[]),t.Ab(1073742336,J.g,J.g,[]),t.Ab(1073742336,R.a,R.a,[]),t.Ab(1073742336,j.i,j.i,[]),t.Ab(1073742336,S.q,S.q,[]),t.Ab(1073742336,S.k,S.k,[]),t.Ab(1073742336,Y.b,Y.b,[]),t.Ab(1073742336,q.a,q.a,[]),t.Ab(1073742336,T.e,T.e,[]),t.Ab(1073742336,N.c,N.c,[]),t.Ab(1073742336,W.p,W.p,[]),t.Ab(1073742336,F.l,F.l,[]),t.Ab(1073742336,z.c,z.c,[]),t.Ab(1073742336,U.b,U.b,[]),t.Ab(1073742336,O.c,O.c,[]),t.Ab(1073742336,V.j,V.j,[]),t.Ab(1073742336,X.e,X.e,[]),t.Ab(1073742336,K.a,K.a,[]),t.Ab(1073742336,Z.a,Z.a,[]),t.Ab(1073742336,H.n,H.n,[[2,H.t],[2,H.k]]),t.Ab(1073742336,e,e,[]),t.Ab(256,y.l,"XSRF-TOKEN",[]),t.Ab(256,y.m,"X-XSRF-TOKEN",[]),t.Ab(256,S.e,S.h,[]),t.Ab(1024,H.i,function(){return[[{path:"",component:p}]]},[])])})}}]);