"use strict";(globalThis.webpackChunkthe_world_of_beer=globalThis.webpackChunkthe_world_of_beer||[]).push([[157],{7157:(e,t,n)=>{n.r(t),n.d(t,{pwa_camera_modal_instance:()=>a});var o=n(4361),r=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{h(o.next(e))}catch(t){i(t)}}function c(e){try{h(o.throw(e))}catch(t){i(t)}}function h(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}h((o=o.apply(e,t||[])).next())}))},i=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=function(){function e(e){var t=this;(0,o.r)(this,e),this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.handlePhoto=function(e){return r(t,void 0,void 0,(function(){return i(this,(function(t){return this.onPhoto.emit(e),[2]}))}))},this.handleNoDeviceError=function(e){return r(t,void 0,void 0,(function(){return i(this,(function(t){return this.noDeviceError.emit(e),[2]}))}))},this.onPhoto=(0,o.c)(this,"onPhoto",7),this.noDeviceError=(0,o.c)(this,"noDeviceError",7)}return e.prototype.handleBackdropClick=function(e){e.target!==this.el&&this.onPhoto.emit(null)},e.prototype.handleComponentClick=function(e){e.stopPropagation()},e.prototype.handleBackdropKeyUp=function(e){"Escape"===e.key&&this.onPhoto.emit(null)},e.prototype.render=function(){var e=this;return(0,o.h)("div",{class:"wrapper",onClick:function(t){return e.handleBackdropClick(t)}},(0,o.h)("div",{class:"content"},(0,o.h)("pwa-camera",{onClick:function(t){return e.handleComponentClick(t)},facingMode:this.facingMode,handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width:600px){.content{width:100%;height:100%}}"},enumerable:!0,configurable:!0}),e}()}}]);
//# sourceMappingURL=157.3e6ce0bf.chunk.js.map