'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');
const utils = require('./utils-087faf22.js');

const AnchorTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
    }
    render() {
        return (index.h("a", { href: this.url, title: this.tagTitle }, index.h("slot", null)));
    }
};
AnchorTag.style = "a{\n\t\t\t@apply font-medium text-blue-600 transition ease-in-out duration-150;\n\t\t}\n\t\ta:hover{\n\t\t\t@apply text-blue-500;\n\t\t}\n\t\ta:focus{\n\t\t\t@apply outline-none underline;\n\t\t}";

const formStylesCss = ".form-card,.form-card-wrapper{position:relative}.form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.top{z-index:50}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}.form-card-errors{margin-top:-5px;z-index:10}.form-errors{background-color:#b92950;color:#fff;padding-top:.75rem;padding-bottom:.75rem}.form-errors-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.form-errors-icon{width:30px;height:35px;padding-right:.75rem;color:#b92950}.form-errors-icon-spacer{display:block;display:block;height:.25rem}.error-message-title{font-family:Roboto Condensed,sans-serif;color:#fff;font-weight:700}.form-errors-items{list-style-type:none;margin:0;padding:0}.hex-exclamation-icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.hexagon-svg{height:35px;color:#fff}.hex-fill,.hex-outline{fill:currentColor}.exclamation-icon{height:18px;width:18px;position:absolute;z-index:50;color:#b92950}.form-error-list-item{display:block}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";

const FormCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "form-card-wrapper" }, index.h("div", { class: "form-card top" }, index.h("slot", null)), index.h("div", { class: "form-card-errors" }, index.h("slot", { name: "formerrors" }))));
    }
};
FormCard.style = formStylesCss;

const formStylesCss$1 = ".form-card,.form-card-wrapper{position:relative}.form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.top{z-index:50}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}.form-card-errors{margin-top:-5px;z-index:10}.form-errors{background-color:#b92950;color:#fff;padding-top:.75rem;padding-bottom:.75rem}.form-errors-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.form-errors-icon{width:30px;height:35px;padding-right:.75rem;color:#b92950}.form-errors-icon-spacer{display:block;display:block;height:.25rem}.error-message-title{font-family:Roboto Condensed,sans-serif;color:#fff;font-weight:700}.form-errors-items{list-style-type:none;margin:0;padding:0}.hex-exclamation-icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.hexagon-svg{height:35px;color:#fff}.hex-fill,.hex-outline{fill:currentColor}.exclamation-icon{height:18px;width:18px;position:absolute;z-index:50;color:#b92950}.form-error-list-item{display:block}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";

const FormTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "form-title" }, index.h("slot", null)));
    }
};
FormTitle.style = formStylesCss$1;

const formStylesCss$2 = ".form-card,.form-card-wrapper{position:relative}.form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.top{z-index:50}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}.form-card-errors{margin-top:-5px;z-index:10}.form-errors{background-color:#b92950;color:#fff;padding-top:.75rem;padding-bottom:.75rem}.form-errors-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.form-errors-icon{width:30px;height:35px;padding-right:.75rem;color:#b92950}.form-errors-icon-spacer{display:block;display:block;height:.25rem}.error-message-title{font-family:Roboto Condensed,sans-serif;color:#fff;font-weight:700}.form-errors-items{list-style-type:none;margin:0;padding:0}.hex-exclamation-icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.hexagon-svg{height:35px;color:#fff}.hex-fill,.hex-outline{fill:currentColor}.exclamation-icon{height:18px;width:18px;position:absolute;z-index:50;color:#b92950}.form-error-list-item{display:block}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";

const FormTitle$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: `form-wrapper` }, index.h("slot", null)));
    }
};
FormTitle$1.style = formStylesCss$2;

const elementsCss = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";

const HOneTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        return (index.h("h2", { class: `
				tag-h1 
				${utils.getColourClassname(this.colour)}
				${utils.getTextAlignClassname(this.textAlign)}
			` }, index.h("slot", null)));
    }
};
HOneTag.style = elementsCss;

const inputCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}*,input,input[type=password],input[type=text]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input::-webkit-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-input::-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder,.form-input::-moz-placeholder,.form-input::-ms-input-placeholder,.form-input::-webkit-input-placeholder,.form-input::placeholder{color:#d7e3e7;opacity:1}.form-input.form-input-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error::-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder,.form-input.form-input-error::-moz-placeholder,.form-input.form-input-error::-ms-input-placeholder,.form-input.form-input-error::-webkit-input-placeholder,.form-input.form-input-error::placeholder{color:#f8b4b4;opacity:1}.form-input:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-input-styled{display:block;width:100%}.form-input-error{color:#771d1d;border-color:#f8b4b4}.form-input-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.form-input-leading-icon{padding-left:2.5rem}.form-input-trailing-icon{padding-right:2.5rem}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}.svg-container{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none}.svg-leading{top:0;bottom:0;left:0;padding-left:.75rem}.svg-trailing{top:0;bottom:0;right:0;padding-right:.75rem}.svg-icon{color:#9fa6b2}.svg-error-icon,.svg-icon{height:1.25rem;width:1.25rem}.svg-error-icon{color:#f98080}@media (min-width:640px){.form-input-styled{font-size:.875rem;line-height:1.25rem}}";

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showLeadingIcon = false;
        this.showTrailingIcon = false;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.placeholder = '';
        this.required = false;
        this.autoComplete = 'on';
        this.inputType = 'text';
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
        this.tfOnInput = index.createEvent(this, "tfOnInput", 7);
    }
    errorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    }
    async getValue() {
        try {
            return this.itemRef.value;
        }
        catch (e) {
            throw `Can't find itemRef.value for ${this.name} tf-input. More details: ${e}`;
        }
    }
    async getItemRef() {
        try {
            return this.itemRef;
        }
        catch (e) {
            throw `Can't find itemRef for ${this.name} tf-input. More details: ${e}`;
        }
    }
    componentWillLoad() {
        if (this.hint) {
            this.showHint = true;
        }
        this.setError();
        if (this.hideLabel) {
            this.showLabel = false;
        }
        if (this.icon && this.iconPosition) {
            if (this.iconPosition == 'left' || this.iconPosition == 'leading') {
                this.showLeadingIcon = true;
            }
            if (this.iconPosition == 'right' || this.iconPosition == 'trailing') {
                this.showTrailingIcon = true;
            }
        }
    }
    async onUserInput(event) {
        this.value = await this.getValue();
        this.tfOnInput.emit({
            id: this.name,
            value: this.value,
            proxyEvent: Object.assign({}, event)
        });
    }
    setError() {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the input field';
        }
        this.showErrorIcon = this.showError = this.error;
    }
    render() {
        let bottomText = null;
        if (this.showHint) {
            bottomText = index.h("p", { class: "hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = index.h("p", { class: "error" }, this.errorMessage);
        }
        //
        let leadingSVG = null;
        let trailingSVG = null;
        let IconTag = null;
        //
        if (this.showLeadingIcon || this.showTrailingIcon) {
            IconTag = `tf-icon-${this.icon}`;
        }
        if (this.showLeadingIcon) {
            leadingSVG = (index.h("div", { class: "svg-container svg-leading" }, index.h(IconTag, { class: "svg-icon" })));
        }
        //
        if (this.showTrailingIcon) {
            trailingSVG = (index.h("div", { class: "svg-container svg-trailing" }, index.h(IconTag, { class: "svg-icon" })));
        }
        else if (this.showErrorIcon) {
            trailingSVG = (index.h("div", { class: "svg-container svg-trailing" }, index.h("tf-icon-exclamation", { class: "svg-error-icon" })));
        }
        //
        return (index.h("div", { class: "label-input-container" }, index.h("label", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`, htmlFor: this.name }, this.label), index.h("div", { class: "input-container" }, leadingSVG, index.h("input", { id: this.name, name: this.name, ref: el => this.itemRef = el, class: `
							form-input 
							form-input-styled 
							${this.showError ? 'form-input-error' : ''} 
							${this.showLeadingIcon ? 'form-input-leading-icon' : ''} 
							${this.showTrailingIcon || this.showErrorIcon ? 'form-input-trailing-icon' : ''}
						`, placeholder: this.placeholder, required: this.required, type: this.inputType, value: this.value, autoComplete: this.autoComplete, onInput: this.onUserInput.bind(this) }), trailingSVG), bottomText));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "error": ["errorChanged"]
    }; }
};
List.style = inputCss;

const nodeFlexCss = "#node-container,.node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container,.base-node,.node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl,.fxl{display:-ms-flexbox;display:flex;margin-right:1rem}#flex,.flex{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%}#fxr,.fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";

const Node = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.rWidth = null;
    }
    render() {
        let stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        return (index.h("div", { id: "base-node", class: "base-node" }, index.h("div", { id: "flex", class: "flex" }, index.h("slot", { name: "flex" })), index.h("div", { id: "fxr", class: "fxr", style: stylesR }, index.h("slot", { name: "fxr" }))));
    }
};
Node.style = nodeFlexCss;

exports.tf_a_tag = AnchorTag;
exports.tf_form_card = FormCard;
exports.tf_form_title = FormTitle;
exports.tf_form_wrapper = FormTitle$1;
exports.tf_h1 = HOneTag;
exports.tf_input = List;
exports.tf_node_flex_fxr = Node;
