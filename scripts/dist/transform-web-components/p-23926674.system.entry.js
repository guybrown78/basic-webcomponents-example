System.register(["./p-ef598e09.system.js","./p-b4c994b0.system.js"],(function(t){"use strict";var o,r,e,i,n;return{setters:[function(t){o=t.r;r=t.c;e=t.h;i=t.g},function(t){n=t.g}],execute:function(){var a=".dd-container{position:relative;display:inline-block;text-align:left}.dd-panel{position:absolute;margin-top:.5rem;width:14rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-ql-panel{width:200px;left:-75px;-webkit-transform-origin:top left;transform-origin:top left}.right{-webkit-transform-origin:top right;transform-origin:top right;right:0}.left{-webkit-transform-origin:top left;transform-origin:top left;left:0}.center{left:-70px;-webkit-transform-origin:center;transform-origin:center}.dd-panel.show{pointer-events:auto;opacity:1;--transform-scale-x:1;--transform-scale-y:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel.hide{pointer-events:none;opacity:0;--transform-scale-x:.95;--transform-scale-y:.95;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:75ms;transition-duration:75ms}.dd-panel-container{border-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-navy{background-color:#363154}.colour-default,.colour-grey{background-color:#d0dfe3}.colour-white{background-color:#fff}.dd-panel-bg{padding-top:.25rem;padding-bottom:.25rem}";var s=t("tf_dropdown",function(){function t(t){o(this,t);this.generatedId=String(Math.floor(Math.random()*99999));this.isOpen=false;this.displayTitle="";this.dropdownId=null;this.size="default";this.colour="grey";this.disabled=false;this.position="right";this.parsedOptions=[];this.tfDropdownSelected=r(this,"tfDropdownSelected",7)}t.prototype.handleClick=function(t){if(this.isOpen){var o=t.composedPath()[0];if(!o.matches(".dd-panel")&&!o.matches(".dd-panel-container")&&!o.matches(".dd-panel-bg")&&!o.matches(".dd-link")&&!o.matches("slot")){t.preventDefault();t.stopPropagation();this.isOpen=false}}};t.prototype.onHandleCloseDropdown=function(){this.isOpen=false};t.prototype.onHandleOptionClicked=function(t){if(this.isOpen&&t.detail.parent===this.generatedId){t.preventDefault();t.stopPropagation();var o=this.dropdownId;this.tfDropdownSelected.emit(Object.assign(Object.assign({},t.detail),{dropdownId:o}));this.isOpen=false}};t.prototype.onToggle=function(){this.isOpen=!this.isOpen};t.prototype.componentWillLoad=function(){var t=this;var o=this.slotElement.getElementsByTagName("tf-dropdown-option");Array.from(o).forEach((function(o){var r=o.innerHTML.replace(/<\!--.*?-->/g,"");t.parsedOptions.push({value:o.getAttribute("value"),title:r})}))};t.prototype.render=function(){var t=this;var o=this.position.toLowerCase()==="left"?"left":"right";var r=e("slot",null);if(this.parsedOptions.length){r=this.parsedOptions.map((function(o){return e("tf-dropdown-rendered-option",{value:o.value,"element-title":o.title,colour:t.colour,parent:t.generatedId},o.title)}))}return e("div",{class:"dd-container"},e("tf-button-container",{id:this.dropdownId},e("tf-button",{size:"m",icon:this.isOpen?"chevron-up":"chevron-down","icon-position":"right",colour:this.colour,onClick:this.onToggle.bind(this)},this.displayTitle)),e("div",{class:"\n\t\t\t\t\tdd-panel \n\t\t\t\t\t"+o+" \n\t\t\t\t\t"+(this.isOpen?"show":"hide")+"\n\t\t\t\t"},e("div",{class:"\n\t\t\t\t\t\tdd-panel-container \n\t\t\t\t\t\t"+n(this.colour)+"\n\t\t\t\t\t"},e("div",{class:"dd-panel-bg"},r))))};Object.defineProperty(t.prototype,"slotElement",{get:function(){return i(this)},enumerable:true,configurable:true});return t}());s.style=a}}}));