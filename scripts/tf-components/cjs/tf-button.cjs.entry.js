'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');
const utils = require('./utils-087faf22.js');

const buttonCss = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.tw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.size-s{padding:.5rem .75rem;line-height:1rem}.size-default,.size-m,.size-s{font-size:.875rem;border-radius:.375rem}.size-default,.size-m{padding:.5rem 1rem;line-height:1.25rem}.size-l{padding:.5rem 1rem}.size-l,.size-xl{font-size:1rem;line-height:1.5rem;border-radius:.375rem}.size-xl{padding:.75rem 1.5rem}.colour-blue,.colour-default{color:#fff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260a4}.colour-blue:active,.colour-default:active{outline:0;border-color:#32f7dc;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45);background-color:#1e3d85}.colour-blue:focus,.colour-default:focus{outline:0;border-color:#1e3d85;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-aqua{outline:0;color:#122551;background-color:#32f7dc}.colour-aqua:hover{outline:0;background-color:#84faea}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2ad2bb}.colour-aqua:focus{outline:0;border-color:#2ad2bb;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:active{border-color:#363154;background-color:#25223a}.colour-navy:active,.colour-navy:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy:focus{border-color:#25223a}.colour-grey{color:#122551;background-color:#d0dfe3}.colour-grey:hover{background-color:#d7e3e7}.colour-grey:active{border-color:#d0dfe3;background-color:#b1bdc1}.colour-grey:active,.colour-grey:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-grey:focus{border-color:#b1bdc1}.colour-white{color:#122551;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:active{border-color:#ecf2f3;background-color:#e7eff1}.colour-white:active,.colour-white:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-white:focus{border-color:#e7eff1}.disabled,.disabled:hover{color:#b1bdc1;background-color:#e7eff1}.icon-xs-l{margin-left:-.125rem;margin-right:.5rem}.icon-xs-l,.icon-xs-r{height:1rem;width:1rem}.icon-xs-r{margin-left:.5rem;margin-right:-.125rem}.icon-s-l{margin-left:-.125rem;margin-right:.5rem}.icon-s-l,.icon-s-r{height:1rem;width:1rem}.icon-s-r{margin-left:.5rem;margin-right:-.125rem}.icon-default-l,.icon-m-l{margin-left:-.25rem;margin-right:.5rem;height:1.25rem;width:1.25rem}.icon-default-r,.icon-m-r{margin-left:.5rem;margin-right:-.25rem;height:1.25rem;width:1.25rem}.icon-l-l{margin-left:-.25rem;margin-right:.75rem}.icon-l-l,.icon-l-r{height:1.25rem;width:1.25rem}.icon-l-r{margin-left:.75rem;margin-right:-.25rem}.icon-xl-l{margin-left:-.25rem;margin-right:.75rem}.icon-xl-l,.icon-xl-r{height:1.25rem;width:1.25rem}.icon-xl-r{margin-left:.75rem;margin-right:-.25rem}.hex-container{display:-ms-flexbox;display:flex;position:relative}.hex-container.icon-btn-size-xs{width:30px;height:34px}.hex-container.icon-btn-size-s{width:35px;height:40px}.hex-container.icon-btn-size-default,.hex-container.icon-btn-size-m{width:40px;height:46px}.hex-container.icon-btn-size-l{width:45px;height:52px}.hex-container.icon-btn-size-xl{width:50px;height:58px}.central-icon{position:absolute;z-index:20;pointer-events:none}.icon-size-s,.icon-size-xs{width:15px;height:15px}.icon-size-default,.icon-size-m{width:16px;height:16px}.icon-size-l{width:18px;height:18px}.icon-size-xl{width:20px;height:20px}.hex-btn{padding:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border:1px transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;background-color:transparent}.hex-btn,.hex-fill,.hex-outline{-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.hex-fill,.hex-outline{fill:currentColor}.svg-colour-white{color:#fff}.svg-colour-aqua{color:#32f7dc}.svg-colour-blue,.svg-colour-default{color:#224595}.svg-colour-navy{color:#363154}.svg-colour-grey{color:#d0dfe3}.hex-btn:hover{border-style:none;background-color:transparent}.hex-btn:hover .svg-colour-white:hover{color:#f3f5f9}.hex-btn:hover .svg-colour-aqua:hover{color:#84faea}.hex-btn:hover .svg-colour-blue,.hex-btn:hover .svg-colour-default{color:#4260a4}.hex-btn:hover .svg-colour-navy{color:#534f6d}.hex-btn:hover .svg-colour-grey{color:#d7e3e7}.hex-btn:active{border-style:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.hex-btn:active .svg-colour-white:active{color:#ecf2f3}.hex-btn:active .svg-colour-aqua:active{color:#2ad2bb}.hex-btn:active .svg-colour-blue,.hex-btn:active .svg-colour-default{color:#1e3d85}.hex-btn:active .svg-colour-navy{color:#25223a}.hex-btn:active .svg-colour-grey{color:#b1bdc1}.hex-btn:focus{border-style:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.hex-btn:focus .svg-colour-white:active{color:#ecf2f3}.hex-btn:focus .svg-colour-aqua:focus{color:#2ad2bb}.hex-btn:focus .svg-colour-blue,.hex-btn:focus .svg-colour-default{color:#1e3d85}.hex-btn:focus .svg-colour-navy{color:#25223a}.hex-btn:focus .svg-colour-grey{color:#b1bdc1}.hexagon{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:10}.hexagon-svg{fill:rgba(255,255,0,0);width:100%;height:100%}";

const Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'default';
        this.colour = 'default';
        this.icon = null;
        this.iconPosition = 'default';
        this.buttonId = null;
        this.buttonType = 'button';
        this.disabled = false;
    }
    getIconClassname(s, p) {
        let className = s === "xl" || s === "extra-large" ?
            p === "right" ? "icon-xl-r" : "icon-xl-l"
            : s === "l" || s === "large" ?
                p === "right" ? "icon-l-r" : "icon-l-l"
                : s === "m" || s === "medium" ?
                    p === "right" ? "icon-m-r" : "icon-m-l"
                    : s === "s" || s === "small" ?
                        p === "right" ? "icon-s-r" : "icon-s-l"
                        : s === "xs" || s === "extra-small" ?
                            p === "right" ? "icon-xs-r" : "icon-xs-l"
                            : p === "right" ? "icon-default-r" : "icon-default-l";
        return className;
    }
    render() {
        let icon = null;
        if (this.icon) {
            const IconTag = `tf-icon-${this.icon}`;
            // icon = <IconTag class={`icon-${this.size}-${this.iconPosition === 'right' ? 'r' : 'l'}`}></IconTag>;
            icon = index.h(IconTag, { class: this.getIconClassname(this.size, this.iconPosition) });
        }
        return (index.h("span", { id: "button-containing-span" }, index.h("button", { class: `
						tw-btn 
						${utils.getSizeClassname(this.size)}
						${utils.getColourClassname(this.colour)}
						${this.disabled ? 'disabled' : ''}
					`, type: this.buttonType, id: this.buttonId, disabled: this.disabled }, (icon && (this.iconPosition == 'left' || this.iconPosition == 'default')) &&
            icon, index.h("slot", null), (icon && this.iconPosition == 'right') &&
            icon)));
    }
};
Button.style = buttonCss;

exports.tf_button = Button;
