(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{zsk6:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){return function(){}}(),a=t("t68o"),i=t("zbXB"),s=t("NcP4"),o=t("xYTU"),r=t("pMnS"),c=t("FIYE"),b=t("gIcY"),h=t("Ip0R"),d=t("3mea"),g=function(){function l(l){this.streamService=l,this.enabled=!1,this.minSpeed=80,this.trackerSize=40,this.trackerSpeed=4,this.colorToTrack="#EFD0CF",this.colorTolerance=[.2,1,1],this.hsvColor=[],this.streamService.streams.length&&(this.streamToDisplay=this.streamService.streams[0]),this.setColorToTrack(this.rgbToHsv(this.hex2rgb(this.colorToTrack)))}return l.prototype.toggleEnabled=function(){this.enabled=!this.enabled,this.enabled&&this.start()},l.prototype.start=function(){this.video=document.createElement("video"),this.video.srcObject=this.streamToDisplay,this.video.width=640,this.video.height=480,this.video.autoplay=!0,this.canvasBlended=document.createElement("canvas"),this.canvasBlended.width=this.video.width,this.canvasBlended.height=this.video.height,this.ctxBlended=this.canvasBlended.getContext("2d"),this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.update()},l.prototype.update=function(){var l=this;this.ctx.drawImage(this.video,0,0,this.video.width,this.video.height),this.computeFrame(),this.enabled&&setTimeout(function(){return l.update()},1)},l.prototype.computeFrame=function(){var l,n,t,u=this.ctx.getImageData(0,0,this.video.width,this.video.height);this.blend(u),this.ctx.strokeStyle="black",this.ctx.lineWidth=2;for(var e=u.data.length/4,a=0;a<e;a+=4)if(t=4*a,l=a%u.width,n=Math.round(a/u.width),this.isObjectColor(u,this.frameBlended,t)){this.objectShape={x:l,y:n};break}this.objectShape&&!this.actualShape?this.actualShape=this.objectShape:this.objectShape&&this.actualShape&&(this.actualShape.x+=(this.objectShape.x-this.actualShape.x)/this.trackerSpeed,this.actualShape.y+=(this.objectShape.y-this.actualShape.y)/this.trackerSpeed),this.actualShape&&this.ctx.strokeRect(this.actualShape.x-this.trackerSize/2,this.actualShape.y-this.trackerSize/2,this.trackerSize,this.trackerSize)},l.prototype.blend=function(l){this.lastImageData||(this.lastImageData=l);var n=this.ctx.createImageData(this.video.width,this.video.height);this.createBlendedMask(n.data,l.data,this.lastImageData.data),this.ctxBlended.putImageData(n,0,0),this.frameBlended=this.ctxBlended.getImageData(0,0,this.video.width,this.video.height),this.lastImageData=l},l.prototype.createBlendedMask=function(l,n,t){if(n.length!=t.length)return null;for(var u=0;u<.25*n.length;){var e=Math.abs((n[4*u]+n[4*u+1]+n[4*u+2])/3-(t[4*u]+t[4*u+1]+t[4*u+2])/3)>this.minSpeed?255:0;l[4*u]=e,l[4*u+1]=e,l[4*u+2]=e,l[4*u+3]=255,++u}},l.prototype.isObjectColor=function(l,n,t){var u=l.data,e=n.data;if((e[t+0]+e[t+1]+e[t+2])/3<255)return!1;var a=this.rgbToHsv([u[t+0],u[t+1],u[t+2]]);return(a[0]<this.hsvColor[0]-this.colorTolerance[0]/2||a[0]>this.hsvColor[0]+this.colorTolerance[0]/2)&&(a[1]<this.hsvColor[1]-this.colorTolerance[1]/2||a[1]>this.hsvColor[1]+this.colorTolerance[1]/2)&&(a[2]<this.hsvColor[2]-this.colorTolerance[2]/2||a[2]>this.hsvColor[2]+this.colorTolerance[2]/2)},l.prototype.setColorToTrack=function(l){this.hsvColor=l},l.prototype.rgbToHsv=function(l){var n,t,u=l[0]/255,e=l[1]/255,a=l[2]/255,i=Math.max(u,e,a),s=Math.min(u,e,a),o=i,r=i-s;if(t=0===i?0:r/i,i===s)n=0;else{switch(i){case u:n=(e-a)/r+(e<a?6:0);break;case e:n=(a-u)/r+2;break;case a:n=(u-e)/r+4}n/=6}return[n,t,o]},l.prototype.hex2rgb=function(l){var n,t,u;return"#"==l.charAt(0)&&(l=l.substr(1)),n=l.charAt(0)+l.charAt(1),t=l.charAt(2)+l.charAt(3),u=l.charAt(4)+l.charAt(5),[n=parseInt(n,16),t=parseInt(t,16),u=parseInt(u,16)]},l.prototype.rgb2hex=function(l,n,t){var u=Array.apply(null,arguments).join().match(/\d+/g);return((u[0]<<16)+(u[1]<<8)+ +u[2]).toString(16)},l.prototype.pickColor=function(l){var n=this.ctx.getImageData(0,0,this.video.width,this.video.height).data,t=this.video.width*l.layerY+l.layerX,u=n[4*t+0],e=n[4*t+1],a=n[4*t+2];this.colorToTrack="#"+this.rgb2hex(u,e,a),this.setColorToTrack(this.rgbToHsv([u,e,a]))},l}(),p=u.qb({encapsulation:0,styles:[[".filter-button[_ngcontent-%COMP%]{width:45px;height:35px}"],c.a],data:{}});function v(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,1,"p",[["class","module-message panel"]],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Select media stream"]))],null,null)}function m(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,2,"a",[["class","filter-button extra"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.toggleEnabled()&&u),u},null,null)),(l()(),u.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Start"]))],null,null)}function C(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,47,"div",[["class","settings panel"]],null,null,null,null,null)),(l()(),u.sb(1,0,null,null,46,"div",[["class","settings-container"]],null,null,null,null,null)),(l()(),u.sb(2,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),u.sb(4,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Tracker speed: "])),(l()(),u.sb(6,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),u.sb(7,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var e=!0,a=l.component;return"input"===n&&(e=!1!==u.Cb(l,8)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.Cb(l,8).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Cb(l,8)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Cb(l,8)._compositionEnd(t.target.value)&&e),"change"===n&&(e=!1!==u.Cb(l,9).onChange(t.target.value)&&e),"input"===n&&(e=!1!==u.Cb(l,9).onChange(t.target.value)&&e),"blur"===n&&(e=!1!==u.Cb(l,9).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.trackerSpeed=t)&&e),e},null,null)),u.rb(8,16384,null,0,b.b,[u.G,u.k,[2,b.a]],null,null),u.rb(9,16384,null,0,b.m,[u.G,u.k],null,null),u.Gb(1024,null,b.e,function(l,n){return[l,n]},[b.b,b.m]),u.rb(11,671744,null,0,b.h,[[8,null],[8,null],[8,null],[6,b.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,b.f,null,[b.h]),u.rb(13,16384,null,0,b.g,[[4,b.f]],null,null),(l()(),u.sb(14,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Jb(15,null,["(value: ",")"])),(l()(),u.sb(16,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),u.sb(17,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),u.sb(18,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Tracker size: "])),(l()(),u.sb(20,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),u.sb(21,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var e=!0,a=l.component;return"input"===n&&(e=!1!==u.Cb(l,22)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.Cb(l,22).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Cb(l,22)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Cb(l,22)._compositionEnd(t.target.value)&&e),"change"===n&&(e=!1!==u.Cb(l,23).onChange(t.target.value)&&e),"input"===n&&(e=!1!==u.Cb(l,23).onChange(t.target.value)&&e),"blur"===n&&(e=!1!==u.Cb(l,23).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.trackerSize=t)&&e),e},null,null)),u.rb(22,16384,null,0,b.b,[u.G,u.k,[2,b.a]],null,null),u.rb(23,16384,null,0,b.m,[u.G,u.k],null,null),u.Gb(1024,null,b.e,function(l,n){return[l,n]},[b.b,b.m]),u.rb(25,671744,null,0,b.h,[[8,null],[8,null],[8,null],[6,b.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,b.f,null,[b.h]),u.rb(27,16384,null,0,b.g,[[4,b.f]],null,null),(l()(),u.sb(28,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Jb(29,null,["(value: ",")"])),(l()(),u.sb(30,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),u.sb(31,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),u.sb(32,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Move speed: "])),(l()(),u.sb(34,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),u.sb(35,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var e=!0,a=l.component;return"input"===n&&(e=!1!==u.Cb(l,36)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.Cb(l,36).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Cb(l,36)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Cb(l,36)._compositionEnd(t.target.value)&&e),"change"===n&&(e=!1!==u.Cb(l,37).onChange(t.target.value)&&e),"input"===n&&(e=!1!==u.Cb(l,37).onChange(t.target.value)&&e),"blur"===n&&(e=!1!==u.Cb(l,37).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.minSpeed=t)&&e),e},null,null)),u.rb(36,16384,null,0,b.b,[u.G,u.k,[2,b.a]],null,null),u.rb(37,16384,null,0,b.m,[u.G,u.k],null,null),u.Gb(1024,null,b.e,function(l,n){return[l,n]},[b.b,b.m]),u.rb(39,671744,null,0,b.h,[[8,null],[8,null],[8,null],[6,b.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,b.f,null,[b.h]),u.rb(41,16384,null,0,b.g,[[4,b.f]],null,null),(l()(),u.sb(42,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Jb(43,null,["(value: ",")"])),(l()(),u.sb(44,0,null,null,3,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),u.sb(45,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),u.sb(46,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Jb(47,null,["Color: ",""]))],function(l,n){var t=n.component;l(n,11,0,t.trackerSpeed),l(n,25,0,t.trackerSize),l(n,39,0,t.minSpeed)},function(l,n){var t=n.component;l(n,7,0,1,20,u.Cb(n,13).ngClassUntouched,u.Cb(n,13).ngClassTouched,u.Cb(n,13).ngClassPristine,u.Cb(n,13).ngClassDirty,u.Cb(n,13).ngClassValid,u.Cb(n,13).ngClassInvalid,u.Cb(n,13).ngClassPending),l(n,15,0,t.trackerSpeed),l(n,21,0,10,100,u.Cb(n,27).ngClassUntouched,u.Cb(n,27).ngClassTouched,u.Cb(n,27).ngClassPristine,u.Cb(n,27).ngClassDirty,u.Cb(n,27).ngClassValid,u.Cb(n,27).ngClassInvalid,u.Cb(n,27).ngClassPending),l(n,29,0,t.trackerSize),l(n,35,0,1,120,u.Cb(n,41).ngClassUntouched,u.Cb(n,41).ngClassTouched,u.Cb(n,41).ngClassPristine,u.Cb(n,41).ngClassDirty,u.Cb(n,41).ngClassValid,u.Cb(n,41).ngClassInvalid,u.Cb(n,41).ngClassPending),l(n,43,0,t.minSpeed),l(n,47,0,t.colorToTrack)})}function A(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,1,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Motion Tracking"])),(l()(),u.sb(2,0,null,null,11,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,v)),u.rb(4,16384,null,0,h.k,[u.R,u.O],{ngIf:[0,"ngIf"]},null),(l()(),u.sb(5,0,null,null,3,"div",[["class","panel"]],null,null,null,null,null)),(l()(),u.sb(6,0,null,null,2,"div",[["class","filter-buttons"]],null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,m)),u.rb(8,16384,null,0,h.k,[u.R,u.O],{ngIf:[0,"ngIf"]},null),(l()(),u.sb(9,0,null,null,2,"div",[["class","sample-container panel"]],null,null,null,null,null)),(l()(),u.sb(10,0,null,null,1,"div",[["class","canvas-container"]],null,null,null,null,null)),(l()(),u.sb(11,0,null,null,0,"canvas",[["height","480"],["id","canvas"],["width","640"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.pickColor(t)&&u),u},null,null)),(l()(),u.jb(16777216,null,null,1,null,C)),u.rb(13,16384,null,0,h.k,[u.R,u.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,4,0,!t.streamToDisplay),l(n,8,0,!t.enabled),l(n,13,0,!!t.streamToDisplay)},null)}function f(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,1,"ng-component",[],null,null,null,A,p)),u.rb(1,49152,null,0,g,[d.a],null,null)],null,null)}var k=u.ob("ng-component",g,f,{},{},[]),S=t("t/Na"),T=t("eDkP"),y=t("Fzqc"),x=t("M2Lx"),I=t("uGex"),j=t("o3x0"),w=t("jQLj"),M=t("Wf4p"),D=t("dWZg"),B=t("mVsa"),z=t("v9Dh"),G=t("ZYjt"),E=t("4c35"),J=t("qAlS"),P=t("seP3"),_=t("UodH"),F=t("lLAP"),L=t("/VYK"),O=t("b716"),R=t("SMsm"),Y=t("y4qS"),q=t("BHnd"),H=t("Blfk"),N=t("6Wmm"),U=t("La40"),V=t("vARd"),X=t("w+lc"),W=t("PCNd"),K=t("ZYCi");t.d(n,"TrackingModuleNgFactory",function(){return Z});var Z=u.pb(e,[],function(l){return u.zb([u.Ab(512,u.j,u.eb,[[8,[a.a,i.b,i.a,s.a,o.a,o.b,r.a,k]],[3,u.j],u.z]),u.Ab(4608,h.m,h.l,[u.w,[2,h.v]]),u.Ab(4608,S.h,S.n,[h.d,u.D,S.l]),u.Ab(4608,S.o,S.o,[S.h,S.m]),u.Ab(5120,S.a,function(l){return[l]},[S.o]),u.Ab(4608,S.k,S.k,[]),u.Ab(6144,S.i,null,[S.k]),u.Ab(4608,S.g,S.g,[S.i]),u.Ab(6144,S.b,null,[S.g]),u.Ab(4608,S.f,S.j,[S.b,u.s]),u.Ab(4608,S.c,S.c,[S.f]),u.Ab(4608,b.n,b.n,[]),u.Ab(4608,T.a,T.a,[T.g,T.c,u.j,T.f,T.d,u.s,u.B,h.d,y.b,[2,h.g]]),u.Ab(5120,T.h,T.i,[T.a]),u.Ab(4608,x.c,x.c,[]),u.Ab(5120,I.a,I.b,[T.a]),u.Ab(5120,j.b,j.c,[T.a]),u.Ab(135680,j.d,j.d,[T.a,u.s,[2,h.g],[2,j.a],j.b,[3,j.d],T.c]),u.Ab(4608,w.h,w.h,[]),u.Ab(5120,w.a,w.b,[T.a]),u.Ab(4608,M.a,M.p,[[2,M.f],D.a]),u.Ab(4608,M.b,M.b,[]),u.Ab(5120,B.b,B.f,[T.a]),u.Ab(5120,z.a,z.b,[T.a]),u.Ab(4608,G.f,M.c,[[2,M.g],[2,M.j]]),u.Ab(1073742336,h.c,h.c,[]),u.Ab(1073742336,S.e,S.e,[]),u.Ab(1073742336,S.d,S.d,[]),u.Ab(1073742336,b.l,b.l,[]),u.Ab(1073742336,b.c,b.c,[]),u.Ab(1073742336,y.a,y.a,[]),u.Ab(1073742336,E.g,E.g,[]),u.Ab(1073742336,D.b,D.b,[]),u.Ab(1073742336,J.b,J.b,[]),u.Ab(1073742336,T.e,T.e,[]),u.Ab(1073742336,M.j,M.j,[[2,M.d],[2,G.g]]),u.Ab(1073742336,M.o,M.o,[]),u.Ab(1073742336,M.m,M.m,[]),u.Ab(1073742336,M.l,M.l,[]),u.Ab(1073742336,x.d,x.d,[]),u.Ab(1073742336,P.a,P.a,[]),u.Ab(1073742336,I.c,I.c,[]),u.Ab(1073742336,_.c,_.c,[]),u.Ab(1073742336,j.g,j.g,[]),u.Ab(1073742336,F.a,F.a,[]),u.Ab(1073742336,w.i,w.i,[]),u.Ab(1073742336,M.q,M.q,[]),u.Ab(1073742336,M.k,M.k,[]),u.Ab(1073742336,L.b,L.b,[]),u.Ab(1073742336,O.a,O.a,[]),u.Ab(1073742336,B.e,B.e,[]),u.Ab(1073742336,R.c,R.c,[]),u.Ab(1073742336,Y.p,Y.p,[]),u.Ab(1073742336,q.l,q.l,[]),u.Ab(1073742336,H.c,H.c,[]),u.Ab(1073742336,N.b,N.b,[]),u.Ab(1073742336,z.c,z.c,[]),u.Ab(1073742336,U.j,U.j,[]),u.Ab(1073742336,V.e,V.e,[]),u.Ab(1073742336,X.a,X.a,[]),u.Ab(1073742336,W.a,W.a,[]),u.Ab(1073742336,K.n,K.n,[[2,K.t],[2,K.k]]),u.Ab(1073742336,e,e,[]),u.Ab(256,S.l,"XSRF-TOKEN",[]),u.Ab(256,S.m,"X-XSRF-TOKEN",[]),u.Ab(256,M.e,M.h,[]),u.Ab(1024,K.i,function(){return[[{path:"",component:g}]]},[])])})}}]);