(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8yHT":function(t,n,e){"use strict";e.r(n);var l=e("CcnG"),i=function(){return function(){}}(),o=e("t68o"),s=e("zbXB"),r=e("NcP4"),c=e("xYTU"),u=e("pMnS"),a=e("Ip0R"),b=e("3mea"),h=e("mrSG"),d=function(){function t(t){this.label=t,this.areas=[],this.numberOfPixelsInAreas=[],this.enabled=!1}return t.prototype.detect=function(t,n,e){var l=t.getImageData(0,0,n,e),i=l.data;this.selectedIndex=null,this.areas=[],this.numberOfPixelsInAreas=[],this.reset(),this.doOperation(i,n),this.doOperation(i,n,!1),t.putImageData(l,0,0)},t.prototype.toggleEnabled=function(){this.enabled=!this.enabled},t.prototype.getAreaIndex=function(t,n,e){return void 0===e&&(e=50),Math.floor(t/e)+"-"+Math.floor(n/e)},t.prototype.highlightPixel=function(t,n){t[n]=256},t.prototype.doOperation=function(t,n,e){void 0===e&&(e=!0);for(var l=0,i=0;i<t.length;i+=4){var o=i%(4*n),s=Math.floor(o/4);0===o&&i>0&&l++,e?this.processPixel(t,s,l,i):this.highlightArea(t,s,l,i)}},t}(),g=function(t){function n(){var n=t.call(this,"Dark")||this;return n.counter=0,n}return h.c(n,t),n.prototype.processPixel=function(t,n,e,l){var i=(t[l]+t[l+1]+t[l+2])/3/256,o=this.getAreaIndex(n,e);this.counter++,this.prevIndex&&this.prevIndex===o||(this.prevIndex=o,this.counter=1),this.areas[o]=this.areas[o]?this.areas[o]+i:i,this.numberOfPixelsInAreas[o]=this.counter},n.prototype.highlightArea=function(t,n,e,l){this.selectedIndex||this.findHighlightedArea(),this.getAreaIndex(n,e)===this.selectedIndex&&this.highlightPixel(t,l)},n.prototype.reset=function(){this.counter=0,this.prevIndex=null},n.prototype.findHighlightedArea=function(){this.selectedIndex="0-0";for(var t=this.areas[this.selectedIndex]/this.numberOfPixelsInAreas[this.selectedIndex],n=Object.keys(this.areas),e=0;e<n.length;e++){var l=n[e];this.areas[l]/this.numberOfPixelsInAreas[l]<t&&(t=this.areas[l]/this.numberOfPixelsInAreas[l],this.selectedIndex=l)}},n}(d),f=function(t){function n(){var n=t.call(this,"Light")||this;return n.counter=0,n}return h.c(n,t),n.prototype.processPixel=function(t,n,e,l){var i=(t[l]+t[l+1]+t[l+2])/3/256,o=this.getAreaIndex(n,e);this.counter++,this.prevIndex&&this.prevIndex===o||(this.prevIndex=o,this.counter=1),this.areas[o]=this.areas[o]?this.areas[o]+i:i,this.numberOfPixelsInAreas[o]=this.counter},n.prototype.highlightArea=function(t,n,e,l){this.selectedIndex||this.findHighlightedArea(),this.getAreaIndex(n,e)===this.selectedIndex&&this.highlightPixel(t,l)},n.prototype.highlightPixel=function(t,n){t[n]=0,t[n+1]=0},n.prototype.reset=function(){this.counter=0,this.prevIndex=null},n.prototype.findHighlightedArea=function(){this.selectedIndex="0-0";for(var t=this.areas[this.selectedIndex]/this.numberOfPixelsInAreas[this.selectedIndex],n=Object.keys(this.areas),e=0;e<n.length;e++){var l=n[e];this.areas[l]/this.numberOfPixelsInAreas[l]>t&&(t=this.areas[l]/this.numberOfPixelsInAreas[l],this.selectedIndex=l)}},n}(d),p=function(){function t(t){this.streamService=t,this.detectors=[],this.streamService.streams.length&&(this.streamToDisplay=this.streamService.streams[0]),this.detectors=[new g,new f]}return t.prototype.ngOnDestroy=function(){this.stop()},t.prototype.start=function(){var t=this;this.video=document.createElement("video"),this.video.srcObject=this.streamToDisplay,this.video.width=640,this.video.height=480,this.video.autoplay=!0,this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.interval=setInterval(function(){return t.update()},30)},t.prototype.stop=function(){clearInterval(this.interval),this.interval=null},t.prototype.isSelectedDetector=function(t){return!!this.selectedDetector&&this.selectedDetector.label===t.label},t.prototype.selectDetector=function(t){this.isSelectedDetector(t)?this.selectedDetector=null:t.enabled||(this.selectedDetector&&this.selectedDetector.toggleEnabled(),this.selectedDetector=t),t.toggleEnabled()},t.prototype.update=function(){if(this.video){var t=this.video.width,n=this.video.height;this.ctx.drawImage(this.video,0,0,t,n),this.ctx.filter="none",this.selectedDetector&&this.selectedDetector.detect(this.ctx,t,n)}},t}(),x=l.qb({encapsulation:0,styles:[[".sample-container[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]{display:flex;justify-content:center}.filter-buttons[_ngcontent-%COMP%]{display:flex;width:100%}.filter-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:12px;margin:0 10px}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]{width:80px;height:45px;background:#20a8da;display:flex;align-items:center;justify-content:center;margin:3px;color:#fff;border-radius:5px;cursor:pointer;transition:all 150ms}.filter-buttons[_ngcontent-%COMP%]   .filter-button.extra[_ngcontent-%COMP%]{background:#dc9e9e}.filter-buttons[_ngcontent-%COMP%]   .filter-button.enabled[_ngcontent-%COMP%]{background:#0f6484;color:#fff}.filter-buttons[_ngcontent-%COMP%]   .filter-button.enabled.extra[_ngcontent-%COMP%]{background:#c55757}.filter-buttons[_ngcontent-%COMP%]   .filter-button.selected[_ngcontent-%COMP%]{background:#d4d4d4;color:#000}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-align:center;padding:2px;cursor:pointer}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover{background:#000;transition:all 150ms}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover.selected{color:#fff}.settings-container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{display:flex;align-items:center;width:450px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;align-items:center;width:130px;font-size:12px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:10px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:250px;margin-right:5px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .value-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:80px;padding:5px 10px;letter-spacing:1px;text-transform:uppercase;font-weight:700;font-size:12px;color:#555;border:none;background:0 0}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;font-size:10px;line-height:25px}"]],data:{}});function A(t){return l.Lb(0,[(t()(),l.sb(0,0,null,null,1,"p",[["class","module-message"]],null,null,null,null,null)),(t()(),l.Jb(-1,null,["Select media stream"]))],null,null)}function m(t){return l.Lb(0,[(t()(),l.sb(0,0,null,null,2,"a",[["class","filter-button extra"]],null,[[null,"click"]],function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.start()&&l),l},null,null)),(t()(),l.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(t()(),l.Jb(-1,null,["Start"]))],null,null)}function O(t){return l.Lb(0,[(t()(),l.sb(0,0,null,null,2,"a",[["class","filter-button enabled extra"]],null,[[null,"click"]],function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.stop()&&l),l},null,null)),(t()(),l.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(t()(),l.Jb(-1,null,["Stop"]))],null,null)}function P(t){return l.Lb(0,[(t()(),l.sb(0,0,null,null,2,"a",[["class","filter-button"]],[[2,"enabled",null],[2,"selected",null]],[[null,"click"]],function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.selectDetector(t.context.$implicit)&&l),l},null,null)),(t()(),l.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(t()(),l.Jb(2,null,["",""]))],null,function(t,n){t(n,0,0,n.context.$implicit.enabled,n.component.isSelectedDetector(n.context.$implicit)),t(n,2,0,n.context.$implicit.label)})}function v(t){return l.Lb(0,[(t()(),l.sb(0,0,null,null,1,"div",[["class","page-title"]],null,null,null,null,null)),(t()(),l.Jb(-1,null,["Detectors"])),(t()(),l.sb(2,0,null,null,12,"div",[["class","page-content"]],null,null,null,null,null)),(t()(),l.jb(16777216,null,null,1,null,A)),l.rb(4,16384,null,0,a.k,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(t()(),l.sb(5,0,null,null,7,"div",[["class","panel"]],null,null,null,null,null)),(t()(),l.sb(6,0,null,null,6,"div",[["class","filter-buttons"]],null,null,null,null,null)),(t()(),l.jb(16777216,null,null,1,null,m)),l.rb(8,16384,null,0,a.k,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(t()(),l.jb(16777216,null,null,1,null,O)),l.rb(10,16384,null,0,a.k,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(t()(),l.jb(16777216,null,null,1,null,P)),l.rb(12,278528,null,0,a.j,[l.R,l.O,l.u],{ngForOf:[0,"ngForOf"]},null),(t()(),l.sb(13,0,null,null,1,"div",[["class","sample-container panel"]],null,null,null,null,null)),(t()(),l.sb(14,0,null,null,0,"canvas",[["height","480"],["id","canvas"],["width","640"]],null,null,null,null,null))],function(t,n){var e=n.component;t(n,4,0,!e.streamToDisplay),t(n,8,0,!e.interval),t(n,10,0,e.interval),t(n,12,0,e.detectors)},null)}function M(t){return l.Lb(0,[(t()(),l.sb(0,0,null,null,1,"ng-component",[],null,null,null,v,x)),l.rb(1,180224,null,0,p,[b.a],null,null)],null,null)}var C=l.ob("ng-component",p,M,{},{},[]),I=e("t/Na"),_=e("gIcY"),y=e("eDkP"),k=e("Fzqc"),D=e("M2Lx"),w=e("uGex"),j=e("o3x0"),S=e("jQLj"),z=e("Wf4p"),L=e("dWZg"),R=e("mVsa"),E=e("v9Dh"),H=e("ZYjt"),J=e("4c35"),T=e("qAlS"),q=e("seP3"),F=e("UodH"),N=e("lLAP"),B=e("/VYK"),Y=e("b716"),X=e("SMsm"),$=e("y4qS"),G=e("BHnd"),K=e("Blfk"),W=e("6Wmm"),Z=e("La40"),U=e("vARd"),V=e("w+lc"),Q=e("PCNd"),tt=e("ZYCi");e.d(n,"DetectionModuleNgFactory",function(){return nt});var nt=l.pb(i,[],function(t){return l.zb([l.Ab(512,l.j,l.eb,[[8,[o.a,s.b,s.a,r.a,c.a,c.b,u.a,C]],[3,l.j],l.z]),l.Ab(4608,a.m,a.l,[l.w,[2,a.v]]),l.Ab(4608,I.h,I.n,[a.d,l.D,I.l]),l.Ab(4608,I.o,I.o,[I.h,I.m]),l.Ab(5120,I.a,function(t){return[t]},[I.o]),l.Ab(4608,I.k,I.k,[]),l.Ab(6144,I.i,null,[I.k]),l.Ab(4608,I.g,I.g,[I.i]),l.Ab(6144,I.b,null,[I.g]),l.Ab(4608,I.f,I.j,[I.b,l.s]),l.Ab(4608,I.c,I.c,[I.f]),l.Ab(4608,_.n,_.n,[]),l.Ab(4608,y.a,y.a,[y.g,y.c,l.j,y.f,y.d,l.s,l.B,a.d,k.b,[2,a.g]]),l.Ab(5120,y.h,y.i,[y.a]),l.Ab(4608,D.c,D.c,[]),l.Ab(5120,w.a,w.b,[y.a]),l.Ab(5120,j.b,j.c,[y.a]),l.Ab(135680,j.d,j.d,[y.a,l.s,[2,a.g],[2,j.a],j.b,[3,j.d],y.c]),l.Ab(4608,S.h,S.h,[]),l.Ab(5120,S.a,S.b,[y.a]),l.Ab(4608,z.a,z.p,[[2,z.f],L.a]),l.Ab(4608,z.b,z.b,[]),l.Ab(5120,R.b,R.f,[y.a]),l.Ab(5120,E.a,E.b,[y.a]),l.Ab(4608,H.f,z.c,[[2,z.g],[2,z.j]]),l.Ab(1073742336,a.c,a.c,[]),l.Ab(1073742336,I.e,I.e,[]),l.Ab(1073742336,I.d,I.d,[]),l.Ab(1073742336,_.l,_.l,[]),l.Ab(1073742336,_.c,_.c,[]),l.Ab(1073742336,k.a,k.a,[]),l.Ab(1073742336,J.g,J.g,[]),l.Ab(1073742336,L.b,L.b,[]),l.Ab(1073742336,T.b,T.b,[]),l.Ab(1073742336,y.e,y.e,[]),l.Ab(1073742336,z.j,z.j,[[2,z.d],[2,H.g]]),l.Ab(1073742336,z.o,z.o,[]),l.Ab(1073742336,z.m,z.m,[]),l.Ab(1073742336,z.l,z.l,[]),l.Ab(1073742336,D.d,D.d,[]),l.Ab(1073742336,q.a,q.a,[]),l.Ab(1073742336,w.c,w.c,[]),l.Ab(1073742336,F.c,F.c,[]),l.Ab(1073742336,j.g,j.g,[]),l.Ab(1073742336,N.a,N.a,[]),l.Ab(1073742336,S.i,S.i,[]),l.Ab(1073742336,z.q,z.q,[]),l.Ab(1073742336,z.k,z.k,[]),l.Ab(1073742336,B.b,B.b,[]),l.Ab(1073742336,Y.a,Y.a,[]),l.Ab(1073742336,R.e,R.e,[]),l.Ab(1073742336,X.c,X.c,[]),l.Ab(1073742336,$.p,$.p,[]),l.Ab(1073742336,G.l,G.l,[]),l.Ab(1073742336,K.c,K.c,[]),l.Ab(1073742336,W.b,W.b,[]),l.Ab(1073742336,E.c,E.c,[]),l.Ab(1073742336,Z.j,Z.j,[]),l.Ab(1073742336,U.e,U.e,[]),l.Ab(1073742336,V.a,V.a,[]),l.Ab(1073742336,Q.a,Q.a,[]),l.Ab(1073742336,tt.n,tt.n,[[2,tt.t],[2,tt.k]]),l.Ab(1073742336,i,i,[]),l.Ab(256,I.l,"XSRF-TOKEN",[]),l.Ab(256,I.m,"X-XSRF-TOKEN",[]),l.Ab(256,z.e,z.h,[]),l.Ab(1024,tt.i,function(){return[[{path:"",component:p}]]},[])])})}}]);