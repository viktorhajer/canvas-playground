(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+f/S":function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o=function(){function t(t){this.enabled=!1,t.streams.length&&(this.streamToDisplay=t.streams[0])}return t.prototype.ngOnInit=function(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.video=document.createElement("video"),this.video.srcObject=this.streamToDisplay,this.video.width=640,this.video.height=480,this.video.autoplay=!0,this.init(),this.toggleEnabled()},t.prototype.ngOnDestroy=function(){this.enabled=!1},t.prototype.toggleEnabled=function(){this.enabled=!this.enabled,this.enabled&&this.process()},t.prototype.init=function(){},t.prototype.computeFrame=function(){},t.prototype.process=function(){var t=this;this.video&&(this.ctx.clearRect(0,0,this.video.width,this.video.height),this.ctx.drawImage(this.video,0,0,this.video.width,this.video.height),this.computeFrame()),this.enabled&&setTimeout(function(){return t.process()},1)},t}()},"0z2X":function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o=function(){function t(){}return t.rgbToHsv=function(t){var n,e,o=t[0]/255,i=t[1]/255,r=t[2]/255,s=Math.max(o,i,r),c=Math.min(o,i,r),a=s,g=s-c;if(e=0===s?0:g/s,s===c)n=0;else{switch(s){case o:n=(i-r)/g+(i<r?6:0);break;case i:n=(r-o)/g+2;break;case r:n=(o-i)/g+4}n/=6}return[n,e,a]},t.hex2rgb=function(t){var n,e,o;return"#"==t.charAt(0)&&(t=t.substr(1)),n=t.charAt(0)+t.charAt(1),e=t.charAt(2)+t.charAt(3),o=t.charAt(4)+t.charAt(5),[n=parseInt(n,16),e=parseInt(e,16),o=parseInt(o,16)]},t.rgb2hex=function(t,n,e){var o=Array.apply(null,arguments).join().match(/\d+/g);return((o[0]<<16)+(o[1]<<8)+ +o[2]).toString(16)},t.rgb2String=function(t){return"rgba("+t[0]+", "+t[1]+", "+t[2]+", 1.0)"},t.replaceAlphaInColor=function(t,n){var e=t.lastIndexOf(",");return-1==e?t:""+t.slice(0,e+1)+n+")"},t}()},FIYE:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o=[".sample-container[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]{display:flex;justify-content:center}.filter-buttons[_ngcontent-%COMP%]{display:flex;width:100%}.filter-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:12px;margin:0 10px}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]{width:80px;height:45px;background:#20a8da;display:flex;align-items:center;justify-content:center;margin:3px;color:#fff;border-radius:5px;cursor:pointer;transition:all 150ms}.filter-buttons[_ngcontent-%COMP%]   .filter-button.extra[_ngcontent-%COMP%]{background:#dc9e9e}.filter-buttons[_ngcontent-%COMP%]   .filter-button.enabled[_ngcontent-%COMP%]{background:#0f6484;color:#fff}.filter-buttons[_ngcontent-%COMP%]   .filter-button.enabled.extra[_ngcontent-%COMP%]{background:#c55757}.filter-buttons[_ngcontent-%COMP%]   .filter-button.selected[_ngcontent-%COMP%]{background:#d4d4d4;color:#000}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-align:center;padding:2px;cursor:pointer}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover{background:#000;transition:all 150ms}.filter-buttons[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover.selected{color:#fff}.settings-container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{display:flex;align-items:center;width:450px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;align-items:center;width:130px;font-size:12px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:10px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:250px;margin-right:5px}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .value-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:80px;padding:5px 10px;letter-spacing:1px;text-transform:uppercase;font-weight:700;font-size:12px;color:#555;border:none;background:0 0}.settings-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;font-size:10px;line-height:25px}"]},QLLi:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e("CcnG"),i=e("vARd"),r=function(){function t(t){this.snackBar=t}return t.prototype.info=function(t){this.snackBar.open(t,"",{duration:3e3})},t.prototype.error=function(t){this.snackBar.open(t,"",{duration:5e3})},t.ngInjectableDef=o.V({factory:function(){return new t(o.Z(i.b))},token:t,providedIn:"root"}),t}()},cpEJ:function(t,n,e){"use strict";var o=function(t){return t[t.INFO=0]="INFO",t[t.WARNING=1]="WARNING",t[t.ERROR=2]="ERROR",t[t.STATISTICS=3]="STATISTICS",t}({}),i=function(){return function(t,n,e,o){this.timestamp=t,this.message=n,this.level=e,this.context=o}}(),r=function(){function t(t,n){this.service=t,this.classname=n}return t.prototype.clearLogs=function(){this.service.clearLogs()},t.prototype.logHighlighted=function(t,n){console.info("%c"+this.formatContext(n)+": "+t,"color: #3CB371; font-size: medium"),this.service.info(t,this.formatContext(n))},t.prototype.logEvent=function(t,n,e){console.groupCollapsed("%c"+n,"color: #483D8B; font-weight: bold;"),console.info("%c"+this.formatContext(null)+": "+t,"color: #483D8B; font-weight: bold"),e&&console.dir(e),console.groupEnd(),this.service.info(t,this.formatContext(null))},t.prototype.logInfo=function(t,n){console.info(this.formatContext(n)+": "+t),this.service.info(t,this.formatContext(n))},t.prototype.logWarning=function(t,n){console.warn(this.formatContext(n)+": "+t),this.service.warning(t,this.formatContext(n))},t.prototype.logError=function(t,n,e){console.groupCollapsed("%c"+this.formatContext(n)+": "+t,"color: red; font-weight: bold;"),e&&console.dir(e),console.groupEnd(),this.service.error(t,this.formatContext(n))},t.prototype.logStatistics=function(t,n){this.service.statistics(t,this.formatContext(n))},t.prototype.formatContext=function(t){return this.classname+(t?"."+t:"")},t}(),s=e("CcnG");e.d(n,"a",function(){return a});var c=function(){function t(){this.logMessages=[]}return t.prototype.clearLogs=function(){this.logMessages=[]},t.prototype.info=function(t,n){this.createAndLogMessage(t,o.INFO,n)},t.prototype.warning=function(t,n){this.createAndLogMessage(t,o.WARNING,n)},t.prototype.error=function(t,n){this.createAndLogMessage(t,o.ERROR,n)},t.prototype.statistics=function(t,n){this.createAndLogMessage(t,o.STATISTICS,n)},t.prototype.createAndLogMessage=function(t,n,e){this.logMessages.push(new i((new Date).getTime(),t,n,e)),this.logMessages.length>500&&(this.logMessages=this.logMessages.slice(50))},t.ngInjectableDef=s.V({factory:function(){return new t},token:t,providedIn:"root"}),t}(),a=function(){function t(t){this.loggerService=t}return t.prototype.create=function(t){return new r(this.loggerService,t)},t.ngInjectableDef=s.V({factory:function(){return new t(s.Z(c))},token:t,providedIn:"root"}),t}()}}]);