import{r as e,h as r}from"./p-a431e206.js";const o=class{constructor(r){e(this,r),this.tabColour="default",this.colour="default",this.showFooter=!1,this.footerBorder="none"}render(){let e=null;return this.showFooter&&(e=r("div",{class:"footer-contents colour-"+this.footerBorder},r("slot",{name:"footer"}))),[r("section",{class:"card-container"},r("header",{class:"card-header tab-"+this.tabColour},r("slot",{name:"tab-title"})),r("div",{class:"card-body colour-"+this.colour},r("slot",{name:"data"})),r("footer",{class:"card-footer colour-"+this.colour},e))]}};o.style="*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.card-container{min-width:100%;max-width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;position:relative;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.card-header{padding:.5rem .25rem 1.5rem;font-size:.875rem;line-height:1.25rem;text-transform:uppercase;font-weight:500;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-body,.card-header{background-color:#d0dfe3;border-top-left-radius:.5rem;border-top-right-radius:.5rem}.card-body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.75rem .25rem;margin-top:-1rem}.card-footer{min-height:10px;padding:0 .25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:#d0dfe3}.footer-contents{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;vertical-align:middle;-ms-flex-align:center;align-items:center;padding-top:.5rem;padding-bottom:.5rem;border-style:solid;border-width:1px 0 0}@media (min-width:640px){.card-container{min-width:195px;max-width:195px}}";export{o as tf_info_card}