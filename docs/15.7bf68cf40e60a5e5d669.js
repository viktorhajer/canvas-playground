(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6+xS":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("t68o"),a=u("xYTU"),o=u("pMnS"),s=u("FIYE"),r=u("gIcY"),b=u("Ip0R"),c=u("QFrE"),g=function(){function l(l){this.recordService=l,this.leftIndex=0,this.rightIndex=0,this.leftHorizontal=0,this.leftVertical=0,this.rightHorizontal=0,this.rightVertical=0,this.alpha=50,this.frequency=42,this.actVideo=0,this.initalized=!1,this.playing=!1,this.paused=!0,this.devices=[]}return l.prototype.ngOnInit=function(){var l=this;this.videoWidth=740,this.videoHeight=480,this.canvas=document.getElementById("canvas"),this.canvas.width=1040,this.canvas.height=680,this.ctx=this.canvas.getContext("2d"),this.devices=[],this.initDevices().then((function(n){return l.devices=n}))},l.prototype.ngOnDestroy=function(){this.playing=!1},l.prototype.init=function(){var l=this;this.playing=!1,this.paused=!0,this.recordService.canStop()&&this.recordService.stop(),this.setVideo(this.devices[this.leftIndex]).then((function(n){return l.leftVideo=n,l.setVideo(l.devices[l.rightIndex])})).then((function(n){return l.rightVideo=n})).then((function(){return l.recordService.init(l.canvas.captureStream())})).then((function(){return l.initalized=!0}))},l.prototype.togglePause=function(){this.playing?this.paused=!this.paused:(this.paused=!1,this.playing=!0,this.drawInterval())},l.prototype.drawInterval=function(){var l=this;this.paused||(1===this.actVideo?(this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.leftVideo,this.leftHorizontal,this.leftVertical,this.videoWidth,this.videoHeight)):this.ctx.drawImage(this.rightVideo,this.rightHorizontal,this.rightVertical,this.videoWidth,this.videoHeight),this.actVideo=(this.actVideo+1)%2,this.ctx.globalAlpha=this.alpha/100),this.playing&&setTimeout((function(){return l.drawInterval()}),this.frequency)},l.prototype.initDevices=function(){return navigator.mediaDevices.enumerateDevices().then((function(l){return l.filter((function(l){return"videoinput"===l.kind})).map((function(l){return l.deviceId}))}))},l.prototype.setVideo=function(l){var n=this;return navigator.mediaDevices.getUserMedia({audio:!1,video:{width:this.videoWidth,height:this.videoHeight,deviceId:{exact:l},resizeMode:"none",frameRate:24}}).then((function(l){return n.setStreamToVideo(l)}))},l.prototype.setStreamToVideo=function(l){var n=document.createElement("video");return n.srcObject=l,n.width=this.videoWidth,n.height=this.videoHeight,n.autoplay=!0,n},l}(),d=e.qb({encapsulation:0,styles:[["#spatial-effect-container[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{width:calc(100vw - 300px)}#spatial-effect-container[_ngcontent-%COMP%]   .settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{width:auto}#spatial-effect-container[_ngcontent-%COMP%]   .settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:600px}"],s.a],data:{}});function h(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.rb(1,147456,null,0,r.h,[e.k,e.G,[2,r.i]],{value:[0,"value"]},null),e.rb(2,147456,null,0,r.m,[e.k,e.G,[8,null]],{value:[0,"value"]},null),(l()(),e.Ib(3,null,["",""]))],(function(l,n){l(n,1,0,n.context.index),l(n,2,0,n.context.index)}),(function(l,n){l(n,3,0,n.context.index)}))}function p(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.rb(1,147456,null,0,r.h,[e.k,e.G,[2,r.i]],{value:[0,"value"]},null),e.rb(2,147456,null,0,r.m,[e.k,e.G,[8,null]],{value:[0,"value"]},null),(l()(),e.Ib(3,null,["",""]))],(function(l,n){l(n,1,0,n.context.index),l(n,2,0,n.context.index)}),(function(l,n){l(n,3,0,n.context.index)}))}function C(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Video: "]))],null,null)}function f(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Start"]))],null,null)}function v(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Pause"]))],null,null)}function m(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,4,"a",[["class","filter-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.togglePause()&&e),e}),null,null)),(l()(),e.jb(16777216,null,null,1,null,f)),e.rb(2,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,v)),e.rb(4,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,!u.playing||u.paused),l(n,4,0,u.playing&&!u.paused)}),null)}function I(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Recording: "]))],null,null)}function A(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,2,"a",[["class","filter-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.recordService.start()&&e),e}),null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Start"]))],null,null)}function y(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,2,"a",[["class","filter-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.recordService.pause()&&e),e}),null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Pause"]))],null,null)}function k(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,2,"a",[["class","filter-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.recordService.resume()&&e),e}),null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Resume"]))],null,null)}function x(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,2,"a",[["class","filter-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.recordService.stop()&&e),e}),null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Stop"]))],null,null)}function M(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,2,"a",[["class","filter-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.recordService.download("video")&&e),e}),null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Download"]))],null,null)}function S(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,37,"div",[["class","filter-buttons"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Init: "])),(l()(),e.sb(3,0,null,null,2,"a",[["class","filter-button extra"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.init()&&e),e}),null,null)),(l()(),e.sb(4,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Init"])),(l()(),e.sb(6,0,null,null,7,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var t=!0,i=l.component;return"change"===n&&(t=!1!==e.Cb(l,7).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,7).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.leftIndex=u)&&t),t}),null,null)),e.rb(7,16384,null,0,r.i,[e.G,e.k],null,null),e.Fb(1024,null,r.d,(function(l){return[l]}),[r.i]),e.rb(9,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.e,null,[r.g]),e.rb(11,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.jb(16777216,null,null,1,null,h)),e.rb(13,278528,null,0,b.i,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.sb(14,0,null,null,7,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var t=!0,i=l.component;return"change"===n&&(t=!1!==e.Cb(l,15).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,15).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.rightIndex=u)&&t),t}),null,null)),e.rb(15,16384,null,0,r.i,[e.G,e.k],null,null),e.Fb(1024,null,r.d,(function(l){return[l]}),[r.i]),e.rb(17,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.e,null,[r.g]),e.rb(19,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.jb(16777216,null,null,1,null,p)),e.rb(21,278528,null,0,b.i,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.jb(16777216,null,null,1,null,C)),e.rb(23,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,m)),e.rb(25,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,I)),e.rb(27,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,A)),e.rb(29,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,y)),e.rb(31,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,k)),e.rb(33,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,x)),e.rb(35,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,M)),e.rb(37,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,9,0,u.leftIndex),l(n,13,0,u.devices),l(n,17,0,u.rightIndex),l(n,21,0,u.devices),l(n,23,0,u.initalized),l(n,25,0,u.initalized),l(n,27,0,u.playing),l(n,29,0,u.playing&&u.recordService.canStart()),l(n,31,0,u.playing&&u.recordService.canPause()),l(n,33,0,u.playing&&u.recordService.canResume()),l(n,35,0,u.playing&&u.recordService.canStop()),l(n,37,0,u.playing&&u.recordService.canDownload())}),(function(l,n){l(n,6,0,e.Cb(n,11).ngClassUntouched,e.Cb(n,11).ngClassTouched,e.Cb(n,11).ngClassPristine,e.Cb(n,11).ngClassDirty,e.Cb(n,11).ngClassValid,e.Cb(n,11).ngClassInvalid,e.Cb(n,11).ngClassPending),l(n,14,0,e.Cb(n,19).ngClassUntouched,e.Cb(n,19).ngClassTouched,e.Cb(n,19).ngClassPristine,e.Cb(n,19).ngClassDirty,e.Cb(n,19).ngClassValid,e.Cb(n,19).ngClassInvalid,e.Cb(n,19).ngClassPending)}))}function V(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,1,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Spatial Effect"])),(l()(),e.sb(2,0,null,null,92,"div",[["class","page-content"],["id","spatial-effect-container"]],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,2,"div",[["class","panel"]],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,S)),e.rb(5,16384,null,0,b.j,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(6,0,null,null,2,"div",[["class","sample-container"]],null,null,null,null,null)),(l()(),e.sb(7,0,null,null,1,"div",[["class","canvas-container"]],null,null,null,null,null)),(l()(),e.sb(8,0,null,null,0,"canvas",[["id","canvas"]],null,null,null,null,null)),(l()(),e.sb(9,0,null,null,85,"div",[["class","settings panel"]],null,null,null,null,null)),(l()(),e.sb(10,0,null,null,84,"div",[["class","settings-container"]],null,null,null,null,null)),(l()(),e.sb(11,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),e.sb(12,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.sb(13,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Video #1 horizontal: "])),(l()(),e.sb(15,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),e.sb(16,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Cb(l,17)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,17).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Cb(l,17)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Cb(l,17)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Cb(l,18).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Cb(l,18).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,18).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.leftHorizontal=u)&&t),t}),null,null)),e.rb(17,16384,null,0,r.b,[e.G,e.k,[2,r.a]],null,null),e.rb(18,16384,null,0,r.k,[e.G,e.k],null,null),e.Fb(1024,null,r.d,(function(l,n){return[l,n]}),[r.b,r.k]),e.rb(20,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.e,null,[r.g]),e.rb(22,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.sb(23,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(24,null,["(value: ",")"])),(l()(),e.sb(25,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),e.sb(26,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.sb(27,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Video #1 vertical: "])),(l()(),e.sb(29,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),e.sb(30,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Cb(l,31)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,31).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Cb(l,31)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Cb(l,31)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Cb(l,32).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Cb(l,32).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,32).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.leftVertical=u)&&t),t}),null,null)),e.rb(31,16384,null,0,r.b,[e.G,e.k,[2,r.a]],null,null),e.rb(32,16384,null,0,r.k,[e.G,e.k],null,null),e.Fb(1024,null,r.d,(function(l,n){return[l,n]}),[r.b,r.k]),e.rb(34,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.e,null,[r.g]),e.rb(36,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.sb(37,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(38,null,["(value: ",")"])),(l()(),e.sb(39,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),e.sb(40,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.sb(41,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Video #2 horizontal: "])),(l()(),e.sb(43,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),e.sb(44,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Cb(l,45)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,45).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Cb(l,45)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Cb(l,45)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Cb(l,46).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Cb(l,46).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,46).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.rightHorizontal=u)&&t),t}),null,null)),e.rb(45,16384,null,0,r.b,[e.G,e.k,[2,r.a]],null,null),e.rb(46,16384,null,0,r.k,[e.G,e.k],null,null),e.Fb(1024,null,r.d,(function(l,n){return[l,n]}),[r.b,r.k]),e.rb(48,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.e,null,[r.g]),e.rb(50,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.sb(51,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(52,null,["(value: ",")"])),(l()(),e.sb(53,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),e.sb(54,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.sb(55,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Video #2 vertical: "])),(l()(),e.sb(57,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),e.sb(58,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Cb(l,59)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,59).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Cb(l,59)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Cb(l,59)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Cb(l,60).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Cb(l,60).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,60).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.rightVertical=u)&&t),t}),null,null)),e.rb(59,16384,null,0,r.b,[e.G,e.k,[2,r.a]],null,null),e.rb(60,16384,null,0,r.k,[e.G,e.k],null,null),e.Fb(1024,null,r.d,(function(l,n){return[l,n]}),[r.b,r.k]),e.rb(62,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.e,null,[r.g]),e.rb(64,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.sb(65,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(66,null,["(value: ",")"])),(l()(),e.sb(67,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),e.sb(68,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.sb(69,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Alpha: "])),(l()(),e.sb(71,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),e.sb(72,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Cb(l,73)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,73).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Cb(l,73)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Cb(l,73)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Cb(l,74).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Cb(l,74).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,74).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.alpha=u)&&t),t}),null,null)),e.rb(73,16384,null,0,r.b,[e.G,e.k,[2,r.a]],null,null),e.rb(74,16384,null,0,r.k,[e.G,e.k],null,null),e.Fb(1024,null,r.d,(function(l,n){return[l,n]}),[r.b,r.k]),e.rb(76,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.e,null,[r.g]),e.rb(78,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.sb(79,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(80,null,["(value: ",")"])),(l()(),e.sb(81,0,null,null,13,"div",[["class","form-field"]],null,null,null,null,null)),(l()(),e.sb(82,0,null,null,2,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.sb(83,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Frequency: "])),(l()(),e.sb(85,0,null,null,9,"div",[["class","range-input"]],null,null,null,null,null)),(l()(),e.sb(86,0,null,null,6,"input",[["type","range"]],[[8,"min",0],[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Cb(l,87)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,87).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Cb(l,87)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Cb(l,87)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Cb(l,88).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Cb(l,88).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Cb(l,88).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.frequency=u)&&t),t}),null,null)),e.rb(87,16384,null,0,r.b,[e.G,e.k,[2,r.a]],null,null),e.rb(88,16384,null,0,r.k,[e.G,e.k],null,null),e.Fb(1024,null,r.d,(function(l,n){return[l,n]}),[r.b,r.k]),e.rb(90,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.e,null,[r.g]),e.rb(92,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.sb(93,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(94,null,["(value: ",")"]))],(function(l,n){var u=n.component;l(n,5,0,!!u.devices.length),l(n,20,0,u.leftHorizontal),l(n,34,0,u.leftVertical),l(n,48,0,u.rightHorizontal),l(n,62,0,u.rightVertical),l(n,76,0,u.alpha),l(n,90,0,u.frequency)}),(function(l,n){var u=n.component;l(n,16,0,-150,150,e.Cb(n,22).ngClassUntouched,e.Cb(n,22).ngClassTouched,e.Cb(n,22).ngClassPristine,e.Cb(n,22).ngClassDirty,e.Cb(n,22).ngClassValid,e.Cb(n,22).ngClassInvalid,e.Cb(n,22).ngClassPending),l(n,24,0,u.leftHorizontal),l(n,30,0,-150,150,e.Cb(n,36).ngClassUntouched,e.Cb(n,36).ngClassTouched,e.Cb(n,36).ngClassPristine,e.Cb(n,36).ngClassDirty,e.Cb(n,36).ngClassValid,e.Cb(n,36).ngClassInvalid,e.Cb(n,36).ngClassPending),l(n,38,0,u.leftVertical),l(n,44,0,-150,150,e.Cb(n,50).ngClassUntouched,e.Cb(n,50).ngClassTouched,e.Cb(n,50).ngClassPristine,e.Cb(n,50).ngClassDirty,e.Cb(n,50).ngClassValid,e.Cb(n,50).ngClassInvalid,e.Cb(n,50).ngClassPending),l(n,52,0,u.rightHorizontal),l(n,58,0,-150,150,e.Cb(n,64).ngClassUntouched,e.Cb(n,64).ngClassTouched,e.Cb(n,64).ngClassPristine,e.Cb(n,64).ngClassDirty,e.Cb(n,64).ngClassValid,e.Cb(n,64).ngClassInvalid,e.Cb(n,64).ngClassPending),l(n,66,0,u.rightVertical),l(n,72,0,0,100,e.Cb(n,78).ngClassUntouched,e.Cb(n,78).ngClassTouched,e.Cb(n,78).ngClassPristine,e.Cb(n,78).ngClassDirty,e.Cb(n,78).ngClassValid,e.Cb(n,78).ngClassInvalid,e.Cb(n,78).ngClassPending),l(n,80,0,u.alpha),l(n,86,0,0,300,e.Cb(n,92).ngClassUntouched,e.Cb(n,92).ngClassTouched,e.Cb(n,92).ngClassPristine,e.Cb(n,92).ngClassDirty,e.Cb(n,92).ngClassValid,e.Cb(n,92).ngClassInvalid,e.Cb(n,92).ngClassPending),l(n,94,0,u.frequency)}))}function j(l){return e.Jb(0,[(l()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,V,d)),e.rb(1,245760,null,0,g,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var P=e.ob("ng-component",g,j,{},{},[]),O=u("t/Na"),T=u("eDkP"),_=u("Fzqc"),F=u("M2Lx"),w=u("uGex"),R=u("Wf4p"),z=u("mVsa"),G=u("o3x0"),D=u("ZYjt"),H=u("4c35"),J=u("dWZg"),E=u("qAlS"),U=u("seP3"),q=u("/VYK"),W=u("b716"),Y=u("y4qS"),N=u("BHnd"),B=u("SMsm"),K=u("Blfk"),L=u("UodH"),X=u("lLAP"),Z=u("6Wmm"),Q=u("La40"),$=u("vARd"),ll=u("w+lc"),nl=u("PCNd"),ul=u("ZYCi");u.d(n,"SpatialEffectModuleNgFactory",(function(){return el}));var el=e.pb(t,[],(function(l){return e.zb([e.Ab(512,e.j,e.eb,[[8,[i.a,a.a,a.b,o.a,P]],[3,e.j],e.z]),e.Ab(4608,b.l,b.k,[e.w,[2,b.u]]),e.Ab(4608,O.h,O.n,[b.c,e.D,O.l]),e.Ab(4608,O.o,O.o,[O.h,O.m]),e.Ab(5120,O.a,(function(l){return[l]}),[O.o]),e.Ab(4608,O.k,O.k,[]),e.Ab(6144,O.i,null,[O.k]),e.Ab(4608,O.g,O.g,[O.i]),e.Ab(6144,O.b,null,[O.g]),e.Ab(4608,O.f,O.j,[O.b,e.s]),e.Ab(4608,O.c,O.c,[O.f]),e.Ab(4608,r.l,r.l,[]),e.Ab(4608,T.a,T.a,[T.g,T.c,e.j,T.f,T.d,e.s,e.B,b.c,_.b,[2,b.f]]),e.Ab(5120,T.h,T.i,[T.a]),e.Ab(4608,F.c,F.c,[]),e.Ab(5120,w.a,w.b,[T.a]),e.Ab(4608,R.a,R.a,[]),e.Ab(5120,z.b,z.f,[T.a]),e.Ab(5120,G.b,G.c,[T.a]),e.Ab(135680,G.d,G.d,[T.a,e.s,[2,b.f],[2,G.a],G.b,[3,G.d],T.c]),e.Ab(4608,D.f,R.b,[[2,R.d],[2,R.f]]),e.Ab(1073742336,b.b,b.b,[]),e.Ab(1073742336,O.e,O.e,[]),e.Ab(1073742336,O.d,O.d,[]),e.Ab(1073742336,r.j,r.j,[]),e.Ab(1073742336,r.c,r.c,[]),e.Ab(1073742336,_.a,_.a,[]),e.Ab(1073742336,H.g,H.g,[]),e.Ab(1073742336,J.b,J.b,[]),e.Ab(1073742336,E.b,E.b,[]),e.Ab(1073742336,T.e,T.e,[]),e.Ab(1073742336,R.f,R.f,[[2,R.c],[2,D.g]]),e.Ab(1073742336,R.j,R.j,[]),e.Ab(1073742336,R.h,R.h,[]),e.Ab(1073742336,R.g,R.g,[]),e.Ab(1073742336,F.d,F.d,[]),e.Ab(1073742336,U.a,U.a,[]),e.Ab(1073742336,w.c,w.c,[]),e.Ab(1073742336,q.b,q.b,[]),e.Ab(1073742336,W.a,W.a,[]),e.Ab(1073742336,Y.p,Y.p,[]),e.Ab(1073742336,N.l,N.l,[]),e.Ab(1073742336,B.c,B.c,[]),e.Ab(1073742336,K.c,K.c,[]),e.Ab(1073742336,z.e,z.e,[]),e.Ab(1073742336,L.c,L.c,[]),e.Ab(1073742336,X.a,X.a,[]),e.Ab(1073742336,Z.b,Z.b,[]),e.Ab(1073742336,G.g,G.g,[]),e.Ab(1073742336,Q.j,Q.j,[]),e.Ab(1073742336,$.e,$.e,[]),e.Ab(1073742336,ll.a,ll.a,[]),e.Ab(1073742336,nl.a,nl.a,[]),e.Ab(1073742336,ul.n,ul.n,[[2,ul.t],[2,ul.k]]),e.Ab(1073742336,t,t,[]),e.Ab(256,O.l,"XSRF-TOKEN",[]),e.Ab(256,O.m,"X-XSRF-TOKEN",[]),e.Ab(1024,ul.i,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);