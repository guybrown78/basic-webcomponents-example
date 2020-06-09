import{r as t,c as i,h as e,g as n}from"./p-a431e206.js";const o=class{constructor(e){t(this,e),this.clientLogoSource=null,this.showUserAccount=!1,this.isOpen=!1,this.dropdownItems=[],this.parsedOptions=[],this.dropdownIdentifier="user-account-dd-nav",this.observer=null,this.tfUserAccountDropdownSelected=i(this,"tfUserAccountDropdownSelected",7)}handleClick(t){if(this.isOpen){const i=t.composedPath()[0];i.matches(".dd-panel")||i.matches(".dd-panel-container")||i.matches(".dd-panel-bg")||i.matches(".dd-link")||i.matches("slot")||(t.preventDefault(),t.stopPropagation(),this.isOpen=!1)}}onHandleOptionClicked(t){this.isOpen&&t.detail.parent===this.dropdownIdentifier&&(t.preventDefault(),t.stopPropagation(),this.tfUserAccountDropdownSelected.emit(Object.assign({},t.detail)),this.isOpen=!1)}onToggle(){this.isOpen=!this.isOpen}componentWillLoad(){this.parseDropdownItems(),this.initiateObserverMutation()}initiateObserverMutation(){const t=this;this.observer=new MutationObserver((function(i){i.length&&t.parseDropdownItems()})),this.observer.observe(this.slotElement,{attributes:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.observer.disconnect()}parseDropdownItems(){const t=this.slotElement.getElementsByTagName("tf-dropdown-option");let i=[];Array.from(t).forEach(t=>{const e=t.innerHTML.replace(/<\!--.*?-->/g,"");i.push({value:t.getAttribute("value"),label:e})}),i.length&&(this.dropdownItems=[...i])}render(){let t=null,i=null;return this.showUserAccount&&(t=e("div",{class:"account-navigation-container"},e("tf-icon-button",{icon:this.isOpen?"close":"user",size:"xs",colour:this.isOpen?"navy":"white","outline-colour":"navy",onClick:this.onToggle.bind(this)})),i=e("div",{class:`\n\t\t\t\t\tdd-panel \n\t\t\t\t\t${this.isOpen?"show":"hide"}\n\t\t\t\t`},e("div",{class:"dd-panel-container dd-panel-grey"},e("div",{class:"dd-panel-bg"},this.dropdownItems.map((t,i)=>e("tf-dropdown-rendered-option",{class:i+1<this.dropdownItems.length?"show-dividing-border":"",value:t.value,"element-title":t.label,colour:"grey",parent:this.dropdownIdentifier},t.label)))))),e("div",{class:"outer-container"},e("div",{class:"client-logo-container"},e("div",{class:"client-logo"},e("img",{class:"client-logo-image",src:this.clientLogoSource})),t),i)}get slotElement(){return n(this)}};o.style=".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px}.client-logo-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}";export{o as tf_app_client_logo}