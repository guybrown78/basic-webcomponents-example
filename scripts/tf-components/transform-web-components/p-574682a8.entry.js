import{r as t,c as o,h as r}from"./p-a431e206.js";const e=class{constructor(r){t(this,r),this.showHint=!1,this.showError=!1,this.showLabel=!0,this.showErrorIcon=!1,this.name=null,this.label=null,this.hint=null,this.checked=!1,this.required=!1,this.errorMessage=null,this.error=!1,this.hideLabel=!1,this.tfOnChecked=o(this,"tfOnChecked",7)}errorChanged(t,o){t!==o&&(this.error=t,this.setError())}async getChecked(){try{return this.itemRef.checked}catch(t){throw`Can't find itemRef.checked for ${this.name} tf-checkbox. More details: ${t}`}}async getValue(){try{return this.itemRef.value}catch(t){throw`Can't find itemRef.value for ${this.name} tf-checkbox. More details: ${t}`}}async getItemRef(){try{return this.itemRef}catch(t){throw`Can't find itemRef for ${this.name} tf-checkbox. More details: ${t}`}}componentWillLoad(){this.hint&&(this.showHint=!0),this.setError(),this.hideLabel&&(this.showLabel=!1)}async onUserInteraction(t){const o=await this.getChecked();this.checked=o,this.tfOnChecked.emit({id:this.name,checked:o,value:o,proxyEvent:Object.assign({},t)})}setError(){this.errorMessage||(this.errorMessage="Error with the selection"),this.showErrorIcon=this.showError=this.error}render(){let t=r("p",{class:"bottom-text hide"}," ");return this.showHint&&(t=r("p",{class:"bottom-text hint"},this.hint)),this.showError&&(t=r("p",{class:"bottom-text error"},this.errorMessage)),r("div",{class:"checkbox-wrapper"},r("div",{class:"input-label-container"},r("div",{class:"checkbox-container"},r("input",{id:this.name,name:this.name,ref:t=>this.itemRef=t,type:"checkbox",class:`\n\t\t\t\t\t\t\t\tform-checkbox \n\t\t\t\t\t\t\t\tform-checkbox-styled \n\t\t\t\t\t\t\t\t${this.showError?"form-checkbox-error":""} \n\t\t\t\t\t\t\t`,checked:this.checked,required:this.required,onInput:this.onUserInteraction.bind(this)})),r("label",{class:this.showLabel?"form-label":"form-label-sr-only",htmlFor:this.name},this.label)),t)}static get watchers(){return{error:["errorChanged"]}}};e.style=".checkbox-wrapper{-ms-flex-direction:column;flex-direction:column;margin-top:1rem}.form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.input-label-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-container{width:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}*,input,input[type=checkbox]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.form-checkbox{-webkit-print-color-adjust:exact;color-adjust:exact;background-origin:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0;width:1.5rem;height:1.5rem;color:#224595;border-color:#d0dfe3;border-width:1px;border-radius:.25rem}.form-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-checkbox::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-checkbox:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-checkbox:checked:focus{border-color:transparent}.form-checkbox-styled{height:1rem;width:1rem;color:#224595;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-checkbox-error{color:#771d1d;border-color:#f8b4b4}.form-checkbox-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.bottom-text{margin-left:30px;margin-top:2px;font-size:.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#d0dfe3}";export{e as tf_checkbox}