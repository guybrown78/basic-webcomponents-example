var __awaiter=this&&this.__awaiter||function(t,r,o,e){function n(t){return t instanceof o?t:new o((function(r){r(t)}))}return new(o||(o=Promise))((function(o,i){function a(t){try{l(e.next(t))}catch(r){i(r)}}function s(t){try{l(e["throw"](t))}catch(r){i(r)}}function l(t){t.done?o(t.value):n(t.value).then(a,s)}l((e=e.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,n,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(r){return l([t,r])}}function l(a){if(e)throw new TypeError("Generator is already executing.");while(o)try{if(e=1,n&&(i=a[0]&2?n["return"]:a[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;if(n=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;n=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}if(i[2])o.ops.pop();o.trys.pop();continue}a=r.call(t,o)}catch(s){a=[6,s];n=0}finally{e=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-ef598e09.system.js"],(function(t){"use strict";var r,o,e;return{setters:[function(t){r=t.r;o=t.c;e=t.h}],execute:function(){var n=".modal-wrapper{position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50}.modal-wrapper.show{pointer-events:auto}.modal-wrapper.hide{pointer-events:none}.backdrop-container{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-transition-property:opacity;transition-property:opacity}.backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#868398;opacity:.75}.backdrop.hide{pointer-events:none;opacity:0;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.backdrop.show{pointer-events:auto;opacity:.75;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal{background-color:#fff;border-radius:.5rem;padding:1.25rem 1rem 1rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.modal.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal.hide{pointer-events:none;opacity:0;--transform-translate-y:1rem;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.modal-header{display:-ms-flexbox;display:flex}.modal-header.header-style-default,.modal-header.header-style-modal{border:solid #32f7dc;border-width:0 0 4px}.title{-ms-flex:1 1 0%;flex:1 1 0%;font-weight:800;color:#363154}.title.header-style-default,.title.header-style-modal{margin-top:.75rem;margin-bottom:.75rem;font-size:1.5rem;line-height:1.75rem}.title.header-style-alert{margin-top:.5rem;margin-bottom:.75rem;font-size:1.25rem;line-height:1.25rem}.close-button{margin-left:10px}#app-logo-initials{color:#363154;text-align:center}tf-icon-close{height:16px;width:16px}.modal-body{margin-top:.5rem;margin-bottom:.5rem}.modal-footer{margin-top:1.25rem}.cancel-wrapper,.confirm-wrapper{display:-ms-flexbox;display:flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.cancel-wrapper{margin-top:.75rem}tf-button{width:100%}@media (min-width:640px){.modal-wrapper{top:0;right:0;bottom:0;left:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.modal{max-width:32rem;width:100%;padding:1.5rem}.modal.show{--transform-scale-x:1;--transform-scale-y:1}.modal.hide,.modal.show{--transform-translate-y:0}.modal.hide{--transform-scale-x:.95;--transform-scale-y:.95}.modal-footer{margin-top:1.5rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:.75rem;gap:.75rem;grid-auto-flow:row dense}.confirm-wrapper{grid-column-start:2}.cancel-wrapper{margin-top:0;grid-column-start:1}}";var i=t("tf_modal",function(){function t(t){r(this,t);this.isOpen=false;this.headerStyle="modal";this.showCancel=true;this.showConfirm=true;this.showClose=true;this.cancelText="Cancel";this.confirmText="Confirm";this.cancelColour="grey";this.confirmColour="aqua";this.tfModalClosed=o(this,"tfModalClosed",7);this.tfModalConfirmed=o(this,"tfModalConfirmed",7)}t.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.opened=true;return[2]}))}))};t.prototype.openedPropChanged=function(t,r){if(t!==r){this.isOpen=t}};t.prototype.onClose=function(){this.opened=false;this.tfModalClosed.emit()};t.prototype.onConfirm=function(){this.opened=false;this.tfModalConfirmed.emit()};t.prototype.render=function(){return e("div",{class:"modal-wrapper "+(this.isOpen?"show":"hide")},e("div",{class:"backdrop-container"},e("div",{class:"\n\t\t\t\t\tbackdrop\n\t\t\t\t\t"+(this.isOpen?"show":"hide")+"\n\t\t\t\t"})),e("div",{class:"\n\t\t\t\tmodal\n\t\t\t\t"+(this.isOpen?"show":"hide")+"\n\t\t\t"},e("header",{class:"modal-header header-style-"+this.headerStyle},e("h2",{class:"title header-style-"+this.headerStyle},this.displayTitle),this.showClose&&e("div",{class:"close-button"},e("tf-icon-button",{onClick:this.onClose.bind(this),colour:"grey",icon:"close"}))),e("section",{class:"modal-body"},e("slot",null)),e("footer",{class:"modal-footer"},this.showConfirm&&e("span",{class:"confirm-wrapper"},e("tf-button",{onClick:this.onConfirm.bind(this),colour:this.confirmColour},this.confirmText)),this.showCancel&&e("span",{class:"cancel-wrapper"},e("tf-button",{onClick:this.onClose.bind(this),colour:this.cancelColour},this.cancelText)))))};Object.defineProperty(t,"watchers",{get:function(){return{opened:["openedPropChanged"]}},enumerable:true,configurable:true});return t}());i.style=n}}}));