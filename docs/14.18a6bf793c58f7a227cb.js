(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9+ei":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=function(){return function(){}}(),o=t("t68o"),u=t("zbXB"),a=t("NcP4"),s=t("xYTU"),r=t("pMnS"),c=t("gIcY"),b=t("Ip0R"),g=t("mrSG"),d=t("3mea"),f=t("0z2X"),p=function(){function n(){}return n.drawCircle=function(n,l,t,e,i,o){void 0===o&&(o=!0);var u=n.width/n.offsetWidth,a=n.height/n.offsetHeight;l.beginPath(),l.arc(t.x*u,t.y*a,e,0,2*Math.PI,!1),o?(l.fillStyle=i,l.fill()):(l.strokeStyle=i,l.stroke())},n}(),C=t("+f/S"),h=15,m=function(n){function l(l){var t=n.call(this,l)||this;return t.label="Test",t.markerColor="#ffffff",t.pointerRadiusInc=0,t.animationCounter=h,t}return g.c(l,n),l.prototype.init=function(){var n=this;this.canvas.addEventListener("mousemove",function(l){return n.movePointer(l)}),this.canvas.addEventListener("click",function(){return n.clickPointer()}),this.canvas.addEventListener("wheel",function(l){return n.resizePointer(l)})},l.prototype.computeFrame=function(){this.animationCounter=Math.min(this.animationCounter+1,h);var n=f.a.rgb2String(f.a.hex2rgb(this.markerColor)),l=5+this.pointerRadiusInc;if(this.pointerPosition&&(p.drawCircle(this.canvas,this.ctx,this.pointerPosition,l,n,!0),this.ctx.fillStyle="#ffffff",this.ctx.font="12px Arial",this.ctx.fillText(this.label,this.pointerPosition.x,this.pointerPosition.y-l-2)),this.animationCounter<h){p.drawCircle(this.canvas,this.ctx,this.clickedPosition,l,n,!1);var t=this.animationCounter/h;l*=10*t,n=f.a.replaceAlphaInColor(n,1-t),p.drawCircle(this.canvas,this.ctx,this.clickedPosition,l,n,!0)}},l.prototype.clickPointer=function(){this.clickedPosition=this.pointerPosition,this.animationCounter=0},l.prototype.movePointer=function(n){n.offsetX&&(this.pointerPosition={x:n.offsetX,y:n.offsetY})},l.prototype.resizePointer=function(n){this.pointerRadiusInc+=n.deltaY<0?6:-6,this.pointerRadiusInc<0?this.pointerRadiusInc=0:this.pointerRadiusInc>100&&(this.pointerRadiusInc=100)},l}(C.a),P=e.qb({encapsulation:0,styles:[[".sample-container[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]{display:flex;justify-content:center}.filter-buttons[_ngcontent-%COMP%]{display:flex;width:100%}.filter-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:12px;margin:0 10px}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]{width:80px;height:45px;background:#20a8da;display:flex;align-items:center;justify-content:center;margin:3px;color:#fff;border-radius:5px;cursor:pointer;transition:all 150ms}.filter-buttons[_ngcontent-%COMP%]   .filter-button.extra[_ngcontent-%COMP%]{background:#dc9e9e}.filter-buttons[_ngcontent-%COMP%]   .filter-button.enabled[_ngcontent-%COMP%]{background:#0f6484;color:#fff}.filter-buttons[_ngcontent-%COMP%]   .filter-button.enabled.extra[_ngcontent-%COMP%]{background:#c55757}.filter-buttons[_ngcontent-%COMP%]   .filter-button.selected[_ngcontent-%COMP%]{background:#d4d4d4;color:#000}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-align:center;padding:2px;cursor:pointer}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover{background:#000;transition:all 150ms}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover.selected{color:#fff}.settings-container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{display:flex;align-items:center;width:450px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;align-items:center;width:130px;font-size:12px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:10px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:250px;margin-right:5px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .value-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:200px;padding:5px 10px;font-weight:700;font-size:12px;color:#555;border:none;background:0 0}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;font-size:10px;line-height:25px}"]],data:{}});function A(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,1,"p",[["class","module-message panel"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Select media stream"]))],null,null)}function M(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,23,"div",[["class","settings panel"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,22,"div",[["class","settings-container"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,10,"div",[["class","form-field"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(n()(),e.sb(4,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Label: "])),(n()(),e.sb(6,0,null,null,6,"div",[["class","value-input"]],null,null,null,null,null)),(n()(),e.sb(7,0,null,null,5,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var i=!0,o=n.component;return"input"===l&&(i=!1!==e.Cb(n,8)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==e.Cb(n,8).onTouched()&&i),"compositionstart"===l&&(i=!1!==e.Cb(n,8)._compositionStart()&&i),"compositionend"===l&&(i=!1!==e.Cb(n,8)._compositionEnd(t.target.value)&&i),"ngModelChange"===l&&(i=!1!==(o.label=t)&&i),i},null,null)),e.rb(8,16384,null,0,c.b,[e.G,e.k,[2,c.a]],null,null),e.Gb(1024,null,c.e,function(n){return[n]},[c.b]),e.rb(10,671744,null,0,c.h,[[8,null],[8,null],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.f,null,[c.h]),e.rb(12,16384,null,0,c.g,[[4,c.f]],null,null),(n()(),e.sb(13,0,null,null,10,"div",[["class","form-field"]],null,null,null,null,null)),(n()(),e.sb(14,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(n()(),e.sb(15,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Marker color: "])),(n()(),e.sb(17,0,null,null,6,"div",[["class","value-input"]],null,null,null,null,null)),(n()(),e.sb(18,0,null,null,5,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var i=!0,o=n.component;return"input"===l&&(i=!1!==e.Cb(n,19)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==e.Cb(n,19).onTouched()&&i),"compositionstart"===l&&(i=!1!==e.Cb(n,19)._compositionStart()&&i),"compositionend"===l&&(i=!1!==e.Cb(n,19)._compositionEnd(t.target.value)&&i),"ngModelChange"===l&&(i=!1!==(o.markerColor=t)&&i),i},null,null)),e.rb(19,16384,null,0,c.b,[e.G,e.k,[2,c.a]],null,null),e.Gb(1024,null,c.e,function(n){return[n]},[c.b]),e.rb(21,671744,null,0,c.h,[[8,null],[8,null],[8,null],[6,c.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.f,null,[c.h]),e.rb(23,16384,null,0,c.g,[[4,c.f]],null,null)],function(n,l){var t=l.component;n(l,10,0,t.label),n(l,21,0,t.markerColor)},function(n,l){n(l,7,0,e.Cb(l,12).ngClassUntouched,e.Cb(l,12).ngClassTouched,e.Cb(l,12).ngClassPristine,e.Cb(l,12).ngClassDirty,e.Cb(l,12).ngClassValid,e.Cb(l,12).ngClassInvalid,e.Cb(l,12).ngClassPending),n(l,18,0,e.Cb(l,23).ngClassUntouched,e.Cb(l,23).ngClassTouched,e.Cb(l,23).ngClassPristine,e.Cb(l,23).ngClassDirty,e.Cb(l,23).ngClassValid,e.Cb(l,23).ngClassInvalid,e.Cb(l,23).ngClassPending)})}function v(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,1,"div",[["class","page-title"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Presenter"])),(n()(),e.sb(2,0,null,null,7,"div",[["class","page-content"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,A)),e.rb(4,16384,null,0,b.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(5,0,null,null,2,"div",[["class","sample-container panel"]],null,null,null,null,null)),(n()(),e.sb(6,0,null,null,1,"div",[["class","canvas-container"]],null,null,null,null,null)),(n()(),e.sb(7,0,null,null,0,"canvas",[["height","480"],["id","canvas"],["width","640"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,M)),e.rb(9,16384,null,0,b.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,4,0,!t.streamToDisplay),n(l,9,0,!!t.streamToDisplay)},null)}function _(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,v,P)),e.rb(1,245760,null,0,m,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var O=e.ob("ng-component",m,_,{},{},[]),x=t("t/Na"),k=t("eDkP"),y=t("Fzqc"),w=t("M2Lx"),I=t("uGex"),j=t("o3x0"),S=t("jQLj"),z=t("Wf4p"),R=t("dWZg"),L=t("mVsa"),T=t("v9Dh"),G=t("ZYjt"),D=t("4c35"),E=t("qAlS"),X=t("seP3"),Y=t("UodH"),q=t("lLAP"),J=t("/VYK"),N=t("b716"),F=t("SMsm"),B=t("y4qS"),U=t("BHnd"),V=t("Blfk"),W=t("6Wmm"),H=t("La40"),K=t("vARd"),Z=t("w+lc"),Q=t("PCNd"),$=t("ZYCi");t.d(l,"PresenterModuleNgFactory",function(){return nn});var nn=e.pb(i,[],function(n){return e.zb([e.Ab(512,e.j,e.eb,[[8,[o.a,u.b,u.a,a.a,s.a,s.b,r.a,O]],[3,e.j],e.z]),e.Ab(4608,b.m,b.l,[e.w,[2,b.v]]),e.Ab(4608,x.h,x.n,[b.d,e.D,x.l]),e.Ab(4608,x.o,x.o,[x.h,x.m]),e.Ab(5120,x.a,function(n){return[n]},[x.o]),e.Ab(4608,x.k,x.k,[]),e.Ab(6144,x.i,null,[x.k]),e.Ab(4608,x.g,x.g,[x.i]),e.Ab(6144,x.b,null,[x.g]),e.Ab(4608,x.f,x.j,[x.b,e.s]),e.Ab(4608,x.c,x.c,[x.f]),e.Ab(4608,c.n,c.n,[]),e.Ab(4608,k.a,k.a,[k.g,k.c,e.j,k.f,k.d,e.s,e.B,b.d,y.b,[2,b.g]]),e.Ab(5120,k.h,k.i,[k.a]),e.Ab(4608,w.c,w.c,[]),e.Ab(5120,I.a,I.b,[k.a]),e.Ab(5120,j.b,j.c,[k.a]),e.Ab(135680,j.d,j.d,[k.a,e.s,[2,b.g],[2,j.a],j.b,[3,j.d],k.c]),e.Ab(4608,S.h,S.h,[]),e.Ab(5120,S.a,S.b,[k.a]),e.Ab(4608,z.a,z.p,[[2,z.f],R.a]),e.Ab(4608,z.b,z.b,[]),e.Ab(5120,L.b,L.f,[k.a]),e.Ab(5120,T.a,T.b,[k.a]),e.Ab(4608,G.f,z.c,[[2,z.g],[2,z.j]]),e.Ab(1073742336,b.c,b.c,[]),e.Ab(1073742336,x.e,x.e,[]),e.Ab(1073742336,x.d,x.d,[]),e.Ab(1073742336,c.l,c.l,[]),e.Ab(1073742336,c.c,c.c,[]),e.Ab(1073742336,y.a,y.a,[]),e.Ab(1073742336,D.g,D.g,[]),e.Ab(1073742336,R.b,R.b,[]),e.Ab(1073742336,E.b,E.b,[]),e.Ab(1073742336,k.e,k.e,[]),e.Ab(1073742336,z.j,z.j,[[2,z.d],[2,G.g]]),e.Ab(1073742336,z.o,z.o,[]),e.Ab(1073742336,z.m,z.m,[]),e.Ab(1073742336,z.l,z.l,[]),e.Ab(1073742336,w.d,w.d,[]),e.Ab(1073742336,X.a,X.a,[]),e.Ab(1073742336,I.c,I.c,[]),e.Ab(1073742336,Y.c,Y.c,[]),e.Ab(1073742336,j.g,j.g,[]),e.Ab(1073742336,q.a,q.a,[]),e.Ab(1073742336,S.i,S.i,[]),e.Ab(1073742336,z.q,z.q,[]),e.Ab(1073742336,z.k,z.k,[]),e.Ab(1073742336,J.b,J.b,[]),e.Ab(1073742336,N.a,N.a,[]),e.Ab(1073742336,L.e,L.e,[]),e.Ab(1073742336,F.c,F.c,[]),e.Ab(1073742336,B.p,B.p,[]),e.Ab(1073742336,U.l,U.l,[]),e.Ab(1073742336,V.c,V.c,[]),e.Ab(1073742336,W.b,W.b,[]),e.Ab(1073742336,T.c,T.c,[]),e.Ab(1073742336,H.j,H.j,[]),e.Ab(1073742336,K.e,K.e,[]),e.Ab(1073742336,Z.a,Z.a,[]),e.Ab(1073742336,Q.a,Q.a,[]),e.Ab(1073742336,$.n,$.n,[[2,$.t],[2,$.k]]),e.Ab(1073742336,i,i,[]),e.Ab(256,x.l,"XSRF-TOKEN",[]),e.Ab(256,x.m,"X-XSRF-TOKEN",[]),e.Ab(256,z.e,z.h,[]),e.Ab(1024,$.i,function(){return[[{path:"",component:m}]]},[])])})}}]);