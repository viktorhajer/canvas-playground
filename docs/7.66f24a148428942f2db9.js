(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8yHT":function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),o=e("t68o"),r=e("xYTU"),s=e("pMnS"),c=e("Ip0R"),u=e("mrSG"),a=e("3mea"),b=function(){function n(n){this.label=n,this.areas=[],this.numberOfPixelsInAreas=[],this.enabled=!1}return n.prototype.detect=function(n,t,e){var l=n.getImageData(0,0,t,e),i=l.data;this.selectedIndex=null,this.areas=[],this.numberOfPixelsInAreas=[],this.reset(),this.doOperation(i,t),this.doOperation(i,t,!1),n.putImageData(l,0,0)},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.getAreaIndex=function(n,t,e){return void 0===e&&(e=50),Math.floor(n/e)+"-"+Math.floor(t/e)},n.prototype.highlightPixel=function(n,t){n[t]=256},n.prototype.doOperation=function(n,t,e){void 0===e&&(e=!0);for(var l=0,i=0;i<n.length;i+=4){var o=i%(4*t),r=Math.floor(o/4);0===o&&i>0&&l++,e?this.processPixel(n,r,l,i):this.highlightArea(n,r,l,i)}},n}(),d=function(n){function t(){var t=n.call(this,"Darkest")||this;return t.counter=0,t}return u.c(t,n),t.prototype.processPixel=function(n,t,e,l){var i=(n[l]+n[l+1]+n[l+2])/3/256,o=this.getAreaIndex(t,e);this.counter++,this.prevIndex&&this.prevIndex===o||(this.prevIndex=o,this.counter=1),this.areas[o]=this.areas[o]?this.areas[o]+i:i,this.numberOfPixelsInAreas[o]=this.counter},t.prototype.highlightArea=function(n,t,e,l){this.selectedIndex||this.findHighlightedArea(),this.getAreaIndex(t,e)===this.selectedIndex&&this.highlightPixel(n,l)},t.prototype.reset=function(){this.counter=0,this.prevIndex=null},t.prototype.findHighlightedArea=function(){this.selectedIndex="0-0";for(var n=this.areas[this.selectedIndex]/this.numberOfPixelsInAreas[this.selectedIndex],t=Object.keys(this.areas),e=0;e<t.length;e++){var l=t[e];this.areas[l]/this.numberOfPixelsInAreas[l]<n&&(n=this.areas[l]/this.numberOfPixelsInAreas[l],this.selectedIndex=l)}},t}(b),g=function(n){function t(){var t=n.call(this,"Lightest")||this;return t.counter=0,t}return u.c(t,n),t.prototype.processPixel=function(n,t,e,l){var i=(n[l]+n[l+1]+n[l+2])/3/256,o=this.getAreaIndex(t,e);this.counter++,this.prevIndex&&this.prevIndex===o||(this.prevIndex=o,this.counter=1),this.areas[o]=this.areas[o]?this.areas[o]+i:i,this.numberOfPixelsInAreas[o]=this.counter},t.prototype.highlightArea=function(n,t,e,l){this.selectedIndex||this.findHighlightedArea(),this.getAreaIndex(t,e)===this.selectedIndex&&this.highlightPixel(n,l)},t.prototype.highlightPixel=function(n,t){n[t]=0,n[t+1]=0},t.prototype.reset=function(){this.counter=0,this.prevIndex=null},t.prototype.findHighlightedArea=function(){this.selectedIndex="0-0";for(var n=this.areas[this.selectedIndex]/this.numberOfPixelsInAreas[this.selectedIndex],t=Object.keys(this.areas),e=0;e<t.length;e++){var l=t[e];this.areas[l]/this.numberOfPixelsInAreas[l]>n&&(n=this.areas[l]/this.numberOfPixelsInAreas[l],this.selectedIndex=l)}},t}(b),f=function(n){function t(t){var e=n.call(this,t)||this;return e.detectors=[],e.detectors=[new d,new g],e}return u.c(t,n),t.prototype.isSelectedDetector=function(n){return!!this.selectedDetector&&this.selectedDetector.label===n.label},t.prototype.selectDetector=function(n){this.isSelectedDetector(n)?this.selectedDetector=null:n.enabled||(this.selectedDetector&&this.selectedDetector.toggleEnabled(),this.selectedDetector=n),n.toggleEnabled()},t.prototype.computeFrame=function(){this.selectedDetector&&this.selectedDetector.detect(this.ctx,this.video.width,this.video.height)},t}(e("+f/S").a),h=l.qb({encapsulation:0,styles:[[".sample-container[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]{display:flex;justify-content:center}.filter-buttons[_ngcontent-%COMP%]{display:flex;width:100%}.filter-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:12px;margin:0 10px}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]{width:80px;height:45px;background:#20a8da;display:flex;align-items:center;justify-content:center;margin:3px;color:#fff;border-radius:5px;cursor:pointer;transition:all 150ms}.filter-buttons[_ngcontent-%COMP%]   .filter-button.extra[_ngcontent-%COMP%]{background:#dc9e9e}.filter-buttons[_ngcontent-%COMP%]   .filter-button.enabled[_ngcontent-%COMP%]{background:#0f6484;color:#fff}.filter-buttons[_ngcontent-%COMP%]   .filter-button.enabled.extra[_ngcontent-%COMP%]{background:#c55757}.filter-buttons[_ngcontent-%COMP%]   .filter-button.selected[_ngcontent-%COMP%]{background:#d4d4d4;color:#000}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-align:center;padding:2px;cursor:pointer}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover{background:#000;transition:all 150ms}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover.selected{color:#fff}.settings-container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{display:flex;align-items:center;width:450px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;align-items:center;width:130px;font-size:12px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:10px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:250px;margin-right:5px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .value-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:80px;padding:5px 10px;letter-spacing:1px;text-transform:uppercase;font-weight:700;font-size:12px;color:#555;border:none;background:0 0}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;font-size:10px;line-height:25px}"]],data:{}});function p(n){return l.Jb(0,[(n()(),l.sb(0,0,null,null,1,"p",[["class","module-message"]],null,null,null,null,null)),(n()(),l.Ib(-1,null,["Select media stream"]))],null,null)}function x(n){return l.Jb(0,[(n()(),l.sb(0,0,null,null,2,"a",[["class","filter-button extra"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.toggleEnabled()&&l),l}),null,null)),(n()(),l.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),l.Ib(-1,null,["Start"]))],null,null)}function A(n){return l.Jb(0,[(n()(),l.sb(0,0,null,null,2,"a",[["class","filter-button enabled extra"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.toggleEnabled()&&l),l}),null,null)),(n()(),l.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),l.Ib(-1,null,["Stop"]))],null,null)}function O(n){return l.Jb(0,[(n()(),l.sb(0,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null],[2,"selected",null]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.selectDetector(n.context.$implicit)&&l),l}),null,null)),(n()(),l.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),l.Ib(2,null,["",""]))],null,(function(n,t){n(t,0,0,t.context.$implicit.enabled,t.component.isSelectedDetector(t.context.$implicit)),n(t,2,0,t.context.$implicit.label)}))}function P(n){return l.Jb(0,[(n()(),l.sb(0,0,null,null,1,"div",[["class","page-title"]],null,null,null,null,null)),(n()(),l.Ib(-1,null,["Detectors"])),(n()(),l.sb(2,0,null,null,12,"div",[["class","page-content"]],null,null,null,null,null)),(n()(),l.jb(16777216,null,null,1,null,p)),l.rb(4,16384,null,0,c.j,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(n()(),l.sb(5,0,null,null,7,"div",[["class","panel"]],null,null,null,null,null)),(n()(),l.sb(6,0,null,null,6,"div",[["class","filter-buttons"]],null,null,null,null,null)),(n()(),l.jb(16777216,null,null,1,null,x)),l.rb(8,16384,null,0,c.j,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(n()(),l.jb(16777216,null,null,1,null,A)),l.rb(10,16384,null,0,c.j,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(n()(),l.jb(16777216,null,null,1,null,O)),l.rb(12,278528,null,0,c.i,[l.R,l.O,l.u],{ngForOf:[0,"ngForOf"]},null),(n()(),l.sb(13,0,null,null,1,"div",[["class","sample-container panel"]],null,null,null,null,null)),(n()(),l.sb(14,0,null,null,0,"canvas",[["height","480"],["id","canvas"],["width","640"]],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,4,0,!e.streamToDisplay),n(t,8,0,!e.enabled),n(t,10,0,e.enabled),n(t,12,0,e.detectors)}),null)}function m(n){return l.Jb(0,[(n()(),l.sb(0,0,null,null,1,"ng-component",[],null,null,null,P,h)),l.rb(1,245760,null,0,f,[a.a],null,null)],(function(n,t){n(t,1,0)}),null)}var M=l.ob("ng-component",f,m,{},{},[]),C=e("t/Na"),I=e("gIcY"),_=e("eDkP"),v=e("Fzqc"),y=e("M2Lx"),k=e("uGex"),j=e("Wf4p"),w=e("mVsa"),D=e("o3x0"),S=e("ZYjt"),z=e("4c35"),J=e("dWZg"),R=e("qAlS"),E=e("seP3"),F=e("/VYK"),H=e("b716"),N=e("y4qS"),T=e("BHnd"),Y=e("SMsm"),q=e("Blfk"),L=e("UodH"),$=e("lLAP"),B=e("6Wmm"),G=e("La40"),K=e("vARd"),W=e("w+lc"),X=e("PCNd"),Z=e("ZYCi");e.d(t,"DetectionModuleNgFactory",(function(){return U}));var U=l.pb(i,[],(function(n){return l.zb([l.Ab(512,l.j,l.eb,[[8,[o.a,r.a,r.b,s.a,M]],[3,l.j],l.z]),l.Ab(4608,c.l,c.k,[l.w,[2,c.u]]),l.Ab(4608,C.h,C.n,[c.c,l.D,C.l]),l.Ab(4608,C.o,C.o,[C.h,C.m]),l.Ab(5120,C.a,(function(n){return[n]}),[C.o]),l.Ab(4608,C.k,C.k,[]),l.Ab(6144,C.i,null,[C.k]),l.Ab(4608,C.g,C.g,[C.i]),l.Ab(6144,C.b,null,[C.g]),l.Ab(4608,C.f,C.j,[C.b,l.s]),l.Ab(4608,C.c,C.c,[C.f]),l.Ab(4608,I.l,I.l,[]),l.Ab(4608,_.a,_.a,[_.g,_.c,l.j,_.f,_.d,l.s,l.B,c.c,v.b,[2,c.f]]),l.Ab(5120,_.h,_.i,[_.a]),l.Ab(4608,y.c,y.c,[]),l.Ab(5120,k.a,k.b,[_.a]),l.Ab(4608,j.a,j.a,[]),l.Ab(5120,w.b,w.f,[_.a]),l.Ab(5120,D.b,D.c,[_.a]),l.Ab(135680,D.d,D.d,[_.a,l.s,[2,c.f],[2,D.a],D.b,[3,D.d],_.c]),l.Ab(4608,S.f,j.b,[[2,j.d],[2,j.f]]),l.Ab(1073742336,c.b,c.b,[]),l.Ab(1073742336,C.e,C.e,[]),l.Ab(1073742336,C.d,C.d,[]),l.Ab(1073742336,I.j,I.j,[]),l.Ab(1073742336,I.c,I.c,[]),l.Ab(1073742336,v.a,v.a,[]),l.Ab(1073742336,z.g,z.g,[]),l.Ab(1073742336,J.b,J.b,[]),l.Ab(1073742336,R.b,R.b,[]),l.Ab(1073742336,_.e,_.e,[]),l.Ab(1073742336,j.f,j.f,[[2,j.c],[2,S.g]]),l.Ab(1073742336,j.j,j.j,[]),l.Ab(1073742336,j.h,j.h,[]),l.Ab(1073742336,j.g,j.g,[]),l.Ab(1073742336,y.d,y.d,[]),l.Ab(1073742336,E.a,E.a,[]),l.Ab(1073742336,k.c,k.c,[]),l.Ab(1073742336,F.b,F.b,[]),l.Ab(1073742336,H.a,H.a,[]),l.Ab(1073742336,N.p,N.p,[]),l.Ab(1073742336,T.l,T.l,[]),l.Ab(1073742336,Y.c,Y.c,[]),l.Ab(1073742336,q.c,q.c,[]),l.Ab(1073742336,w.e,w.e,[]),l.Ab(1073742336,L.c,L.c,[]),l.Ab(1073742336,$.a,$.a,[]),l.Ab(1073742336,B.b,B.b,[]),l.Ab(1073742336,D.g,D.g,[]),l.Ab(1073742336,G.j,G.j,[]),l.Ab(1073742336,K.e,K.e,[]),l.Ab(1073742336,W.a,W.a,[]),l.Ab(1073742336,X.a,X.a,[]),l.Ab(1073742336,Z.n,Z.n,[[2,Z.t],[2,Z.k]]),l.Ab(1073742336,i,i,[]),l.Ab(256,C.l,"XSRF-TOKEN",[]),l.Ab(256,C.m,"X-XSRF-TOKEN",[]),l.Ab(1024,Z.i,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);