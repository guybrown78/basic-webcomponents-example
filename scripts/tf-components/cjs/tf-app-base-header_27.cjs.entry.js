'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');
const utils = require('./utils-087faf22.js');

const appHeaderCss = "header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.app-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.app-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.app-logo-icon{color:#224595}.app-logo-icon.clickable{cursor:pointer}.app-logo-initials{color:#fff;text-transform:uppercase;font-weight:400;font-size:1.25rem;text-align:center}.app-logo-initials::-moz-selection{color:none;background:none}.app-logo-initials::selection{color:none;background:none}.app-logo-initials::-moz-selection{color:none;background:none}h1{margin:0 0 0 .75rem;color:#fff;font-size:1.5rem;font-family:Roboto Condensed,sans-serif;line-height:1.5;font-weight:400}@media only screen and (max-width:640px){#app-logo-title{display:none}}#central-contailer{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;padding:0 3.125rem;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}@media only screen and (max-width:640px){#central-contailer{display:none}}#quick-link-icon{color:#363154;font-size:1.25rem;text-align:center}#quick-link-icon::-moz-selection{color:none;background:none}#quick-link-icon::selection{color:none;background:none}#quick-link-icon::-moz-selection{color:none;background:none}#client-logo-container{justify-self:flex-end}#client-logo{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:112px;height:59px}#client-logo img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}#account-navigation-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:40px;height:59px}@media only screen and (max-width:640px){#account-navigation-container{display:none}}";

const AppHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.appTitle = null;
        this.appInitials = null;
        this.showAppLogo = true;
        this.isLogoClickable = true;
        this.showClientLogo = false;
        this.showUserAccount = false;
        this.clientLogoSource = null;
        this.tfAppLogoClicked = index.createEvent(this, "tfAppLogoClicked", 7);
    }
    onButtonClickHandler(event) {
        if (this.isLogoClickable) {
            event.preventDefault();
            this.tfAppLogoClicked.emit();
        }
    }
    componentWillLoad() {
        this.hasQuickLinksSlot = !!this.hostElement.querySelector('[slot="quicklinks"]');
        this.hasClientLogoSlot = !!this.hostElement.querySelector('[slot="clientlogo"]');
        //
        if (!this.hasClientLogoSlot && (this.showClientLogo || this.userAccountMenuItems || this.clientLogoSource)) {
            console.log(`Client logo set in the App Header with parameters has depreciated. It is encouraged that the Client Logo and User Account navigation elements (tf-app-client-logo) are set in the slot slot="clientlogo". See https://tf-web-components-angular.netlify.app/header for more information and examples`);
        }
    }
    render() {
        let clientLogo = null;
        if (this.hasClientLogoSlot) {
            clientLogo = index.h("slot", { name: "clientlogo" });
        }
        else if (this.clientLogoSource && (this.clientLogoSource && this.showClientLogo)) {
            clientLogo = (index.h("div", { id: "client-logo-container" }, index.h("tf-client-logo", { "show-client-logo": this.showClientLogo, "client-logo-source": this.clientLogoSource, "show-user-account": this.showUserAccount, "user-account-menu-items": this.userAccountMenuItems })));
        }
        let appLogo = null;
        if (this.showAppLogo) {
            appLogo = (index.h("div", { class: "app-logo-container" }, index.h("div", { class: "app-logo" }, index.h("tf-product-logo", { class: `app-logo-icon ${this.isLogoClickable ? "clickable" : ""}`, code: this.appInitials, colour: this.isLogoClickable ? "gradient" : "white", "initials-colour": this.isLogoClickable ? "white" : "blue", size: "large", "as-outline": "false", onClick: (event) => {
                    this.onButtonClickHandler(event);
                    // this.onButtonClickHandler.bind(this);
                } }), index.h("h1", { class: "app-logo-title" }, this.appTitle))));
        }
        return (index.h("header", null, appLogo, index.h("div", { id: "central-contailer" }, index.h("slot", { name: "quicklinks" })), clientLogo));
    }
    get hostElement() { return index.getElement(this); }
};
AppHeader.style = appHeaderCss;

const clientLogoCss = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px;position:relative}.client-logo-image{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.client-logo-image.image-eval{width:auto;height:auto;opacity:0}.client-logo-image.image-width-dominant{width:100%;height:auto;opacity:1}.client-logo-image.image-default,.client-logo-image.image-height-dominant{width:auto;height:100%;opacity:1}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);right:0;z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}.hide-slot{display:none}";

const AppHeader$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clientLogoSource = null;
        this.showUserAccount = false;
        // @Prop() userAccountMenuItems:any;
        this.isOpen = false;
        this.logoImageClass = "evaluate";
        this.dropdownItems = [];
        this.parsedOptions = [];
        this.dropdownIdentifier = "user-account-dd-nav";
        this.observer = null;
        this.tfUserAccountDropdownSelected = index.createEvent(this, "tfUserAccountDropdownSelected", 7);
    }
    clientLogoSourcePropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.logoImageClass = "evaluate";
        }
    }
    handleClick(event) {
        if (this.isOpen) {
            const target = event.composedPath()[0];
            if (!target.matches('.dd-panel') &&
                !target.matches('.dd-panel-container') &&
                !target.matches('.dd-panel-bg') &&
                !target.matches('.dd-link') &&
                !target.matches('slot')) {
                event.preventDefault();
                event.stopPropagation();
                this.isOpen = false;
            }
        }
    }
    onHandleOptionClicked(event) {
        if (this.isOpen && event.detail.parent === this.dropdownIdentifier) {
            event.preventDefault();
            event.stopPropagation();
            this.tfUserAccountDropdownSelected.emit(Object.assign({}, event.detail));
            this.isOpen = false;
        }
    }
    //
    onToggle() {
        this.isOpen = !this.isOpen;
    }
    componentWillLoad() {
        this.parseDropdownItems();
        this.initiateObserverMutation();
    }
    initiateObserverMutation() {
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };
        //
        const that = this;
        // Callback function to execute when mutations are observed
        const callback = function (mutationsList) {
            if (mutationsList.length) {
                that.parseDropdownItems();
            }
            // Use traditional 'for loops' for IE 11
            // for(let mutation of mutationsList) {
            // 		if (mutation.type === 'childList') {
            // 		}
            // }
        };
        // Create an observer instance linked to the callback function
        this.observer = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        this.observer.observe(this.slotElement, config);
        // Disconnect the observing as componetnet is removed from DOM
    }
    disconnectedCallback() {
        // Stop observing the slotElement change
        this.observer.disconnect();
    }
    parseDropdownItems() {
        const optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        let items = [];
        Array.from(optionsEls).forEach(opt => {
            const label = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            items.push({
                value: opt.getAttribute('value'),
                label,
            });
        });
        if (items.length) {
            this.dropdownItems = [...items];
        }
    }
    onClientLogoLoaded() {
        if (this.imgRef.width > this.imgRef.height) {
            this.logoImageClass = "width-dom";
        }
        else {
            this.logoImageClass = "height-dom";
        }
    }
    render() {
        let userAccount = null;
        let userAccountDropdown = null;
        if (this.showUserAccount) {
            userAccount = (index.h("div", { class: "account-navigation-container" }, index.h("tf-icon-button", { icon: this.isOpen ? 'close' : 'user', size: "xs", colour: this.isOpen ? 'navy' : 'white', "outline-colour": "navy", onClick: this.onToggle.bind(this) })));
            //
            userAccountDropdown = (index.h("div", { class: `
					dd-panel 
					${this.isOpen ? 'show' : 'hide'}
				` }, index.h("div", { class: `dd-panel-container dd-panel-grey` }, index.h("div", { class: "dd-panel-bg" }, this.dropdownItems.map((item, index$1) => {
                return (index.h("tf-dropdown-rendered-option", { class: index$1 + 1 < this.dropdownItems.length ? "show-dividing-border" : "", value: item.value, "element-title": item.label, colour: "grey", parent: this.dropdownIdentifier }, item.label));
            })), index.h("div", { class: "hide-slot" }, index.h("slot", null)))));
        }
        //
        return (index.h("div", { class: "outer-container" }, index.h("div", { class: "client-logo-container" }, index.h("div", { class: "client-logo" }, index.h("img", { ref: el => this.imgRef = el, class: `
								client-logo-image
								${this.logoImageClass === "evaluate" ? "image-eval"
                : this.logoImageClass === "width-dom" ? "image-width-dominant"
                    : this.logoImageClass === "height-dom" ? "image-height-dominant"
                        : "image-default"}
							`, src: this.clientLogoSource, onLoad: this.onClientLogoLoaded.bind(this) })), userAccount), userAccountDropdown));
    }
    get slotElement() { return index.getElement(this); }
    static get watchers() { return {
        "clientLogoSource": ["clientLogoSourcePropChanged"]
    }; }
};
AppHeader$1.style = clientLogoCss;

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

const cardCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}section{padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}section.default,section.grey{background-color:#d0dfe3}section.white{background-color:#fff}section.navy{background-color:#363154}section.blue{background-color:#224595}section.aqua{background-color:#32f7dc}section.transparent{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}#card-content-container{margin-bottom:.3125rem;background-color:#fff;border-radius:.4375rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);padding:.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}";

const Card = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'default';
        this.padding = 'default';
    }
    render() {
        return (index.h("section", { class: `
				${this.colour} 
				${utils.getPaddingClassname(this.padding)}
			` }, index.h("slot", null)));
    }
};
Card.style = cardCss;

const cardContainerCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width:640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#d0dfe3}#contained-card.navy{background-color:#363154}.parent-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;min-height:100%;height:auto;width:100%;margin-right:15px}@media only screen and (max-width:640px){.parent-card-slot-wrapper{margin-right:0;min-height:auto;margin-bottom:15px}}.parent-card-slot-wrapper:last-of-type{margin-right:0}.edge-ie-slot-fix,slot[name=slot1],slot[name=slot2],slot[name=slot3],tf-contained-card{display:block;width:100%}.hidden-slot{display:none}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";

const CardContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'default';
        this.cardItems = [];
    }
    componentWillLoad() {
        const nodeEls = this.slotElement.getElementsByTagName('tf-contained-card');
        //
        this.totalCards = Array.from(nodeEls).length;
        // Array.from(nodeEls).forEach(n => {
        // 	this.cardItems.push({
        // 		html:n.innerHTML
        // 	})
        // 	n.innerHTML = ""
        // 	n = null;
        // })
    }
    render() {
        const slots = Array.apply(null, { length: this.totalCards })
            .map((n, i) => {
            n = i + 1;
            const slotName = `slot${n}`;
            return (index.h("div", { class: "parent-card-slot-wrapper" }, index.h("slot", { name: slotName })));
        });
        // const slots = this.cardItems.map((item,i) => {
        // 		const slotName = `slot${i + 1}`
        // 		return (
        // 			<div class="parent-card-slot-wrapper">
        // 				<tf-contained-card innerHTML={item.html} />
        // 				<div class="hidden-slot"><slot name={slotName} /></div>
        // 			</div>
        // 		)
        // 	})
        return (index.h("div", { id: "card-container" }, slots));
    }
    get slotElement() { return index.getElement(this); }
};
CardContainer.style = cardContainerCss;

const cardTitleCss = "h2{-webkit-margin-before:20px;margin-block-start:20px;-webkit-margin-after:15px;margin-block-end:15px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;margin-left:0;margin-right:0;font-family:Roboto Condensed,sans-serif;font-size:22px;line-height:22px;font-weight:700;display:block}h2.blue,h2.default{color:#224595}h2.white{color:#fff}";

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = "blue";
    }
    render() {
        return (index.h("tf-h2", { colour: this.colour }, index.h("slot", null)));
    }
};
CardTitle.style = cardTitleCss;

const clientLogoCss$1 = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px;position:relative}.client-logo-image{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.client-logo-image.image-eval{width:auto;height:auto;opacity:0}.client-logo-image.image-width-dominant{width:100%;height:auto;opacity:1}.client-logo-image.image-default,.client-logo-image.image-height-dominant{width:auto;height:100%;opacity:1}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);right:0;z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}.hide-slot{display:none}";

const AppHeader$2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showClientLogo = false;
        this.clientLogoSource = null;
        this.showUserAccount = false;
        this.isOpen = false;
        this.dropdownItems = [
            { label: 'My Account', value: 'userAccount' },
            { label: 'Log Out', value: 'signOut' }
        ];
        this.dropdownIdentifier = "user-account-dd-nav";
        this.tfUserAccountDropdownSelected = index.createEvent(this, "tfUserAccountDropdownSelected", 7);
    }
    userAccountMenuItemsPropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setDropdownItems();
        }
    }
    handleClick(event) {
        if (this.isOpen) {
            const target = event.composedPath()[0];
            if (!target.matches('.dd-panel') &&
                !target.matches('.dd-panel-container') &&
                !target.matches('.dd-panel-bg') &&
                !target.matches('.dd-link') &&
                !target.matches('slot')) {
                event.preventDefault();
                event.stopPropagation();
                this.isOpen = false;
            }
        }
    }
    onHandleOptionClicked(event) {
        if (this.isOpen && event.detail.parent === this.dropdownIdentifier) {
            event.preventDefault();
            event.stopPropagation();
            this.tfUserAccountDropdownSelected.emit(Object.assign({}, event.detail));
            this.isOpen = false;
        }
    }
    onToggle() {
        this.isOpen = !this.isOpen;
    }
    componentWillLoad() {
        this.setDropdownItems();
    }
    setDropdownItems() {
    }
    render() {
        let userAccount = null;
        let userAccountDropdown = null;
        if (this.showUserAccount) {
            userAccount = (index.h("div", { class: "account-navigation-container" }, index.h("tf-icon-button", { icon: this.isOpen ? 'close' : 'user', size: "xs", colour: this.isOpen ? 'navy' : 'white', "outline-colour": "navy", onClick: this.onToggle.bind(this) })));
            //
            userAccountDropdown = (index.h("div", { class: `
					dd-panel 
					${this.isOpen ? 'show' : 'hide'}
				` }, index.h("div", { class: `dd-panel-container dd-panel-grey` }, index.h("div", { class: "dd-panel-bg" }, this.dropdownItems.map((item, index$1) => {
                return (index.h("tf-dropdown-rendered-option", { class: index$1 + 1 < this.dropdownItems.length ? "show-dividing-border" : "", value: item.value, "element-title": item.label, colour: "grey", parent: this.dropdownIdentifier }, item.label));
            })))));
        }
        //
        return (index.h("div", { class: "outer-container" }, index.h("div", { class: "client-logo-container" }, index.h("div", { class: "client-logo" }, index.h("img", { class: "client-logo-image", src: this.clientLogoSource })), userAccount), userAccountDropdown));
    }
    static get watchers() { return {
        "userAccountMenuItems": ["userAccountMenuItemsPropChanged"]
    }; }
};
AppHeader$2.style = clientLogoCss$1;

const cardContainerCss$1 = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width:640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#d0dfe3}#contained-card.navy{background-color:#363154}.parent-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;min-height:100%;height:auto;width:100%;margin-right:15px}@media only screen and (max-width:640px){.parent-card-slot-wrapper{margin-right:0;min-height:auto;margin-bottom:15px}}.parent-card-slot-wrapper:last-of-type{margin-right:0}.edge-ie-slot-fix,slot[name=slot1],slot[name=slot2],slot[name=slot3],tf-contained-card{display:block;width:100%}.hidden-slot{display:none}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";

const ContainedCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'default';
    }
    render() {
        return (index.h("div", { id: "contained-card", class: this.colour }, index.h("div", { id: "contained-card-slot-wrapper" }, index.h("slot", null))));
    }
};
ContainedCard.style = cardContainerCss$1;

const DropdownOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};

const dropdownLinkCss = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.dd-link:focus,.dd-link:hover{background-color:#b1bdc1}.dd-link:focus{outline:0}.colour-blue{color:#fff;background-color:#224595}.colour-blue:hover{background-color:#4260a4}.colour-blue:focus{outline:0;background-color:#1e3d85}.colour-aqua{color:#363154;background-color:#32f7dc}.colour-aqua:hover{background-color:#84faea}.colour-aqua:focus{outline:0;background-color:#2ad2bb}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:focus{outline:0;background-color:#25223a}.colour-default,.colour-grey{color:#363154;background-color:#d0dfe3}.colour-default:hover,.colour-grey:hover{background-color:#b1bdc1}.colour-default:focus,.colour-grey:focus{outline:0;background-color:#b1bdc1}.colour-white{color:#363154;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:focus{outline:0;background-color:#e7eff1}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;line-height:1.25rem}";

const DropdownRenderedOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'grey';
        this.elementTitle = '';
        this.value = '';
        this.parent = '';
        this.tfDropdownOptionClicked = index.createEvent(this, "tfDropdownOptionClicked", 7);
    }
    onDropdownOptionClicked() {
        this.tfDropdownOptionClicked.emit({
            value: this.value,
            parent: this.parent
        });
    }
    render() {
        return (index.h("div", { onClick: this.onDropdownOptionClicked.bind(this), "element-title": !this.elementTitle ? `${this.value}` : this.elementTitle, class: `
					dd-link 
					${utils.getColourClassname(this.colour)}
				` }, index.h("span", { class: "dd-link-title" }, index.h("slot", null))));
    }
};
DropdownRenderedOption.style = dropdownLinkCss;

const elementsCss = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";

const HTwoTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        return (index.h("h2", { class: `
				tag-h2 
				${utils.getColourClassname(this.colour)}
				${utils.getTextAlignClassname(this.textAlign)}
			` }, index.h("slot", null)));
    }
};
HTwoTag.style = elementsCss;

const iconButtonCss = ".hex-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.button{cursor:pointer}.non-button{cursor:default}.hex-container.disabled{cursor:default;opacity:.5}.icon-btn-size-xs{width:30px;height:34px}.icon-btn-size-s{width:35px;height:40px}.icon-btn-size-default,.icon-btn-size-m{width:40px;height:46px}.icon-btn-size-l{width:45px;height:52px}.icon-btn-size-xl{width:50px;height:58px}.hexagon{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;z-index:10}.svg-colour-white{color:#fff}.svg-colour-aqua{color:#32f7dc}.svg-colour-blue,.svg-colour-default{color:#224595}.svg-colour-navy{color:#363154}.svg-colour-grey{color:#d0dfe3}.hexagon-svg{width:100%;height:100%}.hex-fill,.hex-outline{fill:currentColor;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.icon{position:absolute;z-index:20;pointer-events:none}.icon-size-xs{width:16px;height:16px;top:8px;left:7px}.icon-size-s{width:16px;height:16px;top:12px;left:9.5px}.icon-size-default,.icon-size-m{width:16px;height:16px;top:15px;left:12px}.icon-size-l{width:18px;height:18px;top:17px;left:13.5px}.icon-size-xl{width:20px;height:20px;top:19px;left:15px}.icon-svg{width:100%;height:100%}";

function getIconColourFromBG(colour) {
    switch (colour.toLowerCase()) {
        case 'navy':
        case 'blue':
        case 'gradient':
            return "white";
        case 'default':
        case 'white':
        case 'grey':
        case 'aqua':
        default:
            return "navy";
    }
}
const IconButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonId = null;
        this.size = 'default';
        this.colour = 'default';
        this.outlineColour = null;
        this.icon = null;
        this.asButton = true;
        //
        this.buttonType = 'button';
        this.disabled = false;
    }
    render() {
        const size = this.size;
        const oColour = !this.outlineColour ? this.colour : this.outlineColour;
        const colour = this.colour;
        const iColour = !this.iconColour ? getIconColourFromBG(colour) : this.iconColour;
        //
        const IconTag = `tf-icon-${this.icon}`;
        const icon = index.h(IconTag, { class: "icon-svg" });
        return (index.h("div", { class: `
					hex-container
					${size === "xl" || size === "extra-large" ? "icon-btn-size-xl"
                : size === "l" || size === "large" ? "icon-btn-size-l"
                    : size === "m" || size === "medium" ? "icon-btn-size-m"
                        : size === "s" || size === "small" ? "icon-btn-size-s"
                            : size === "xs" || size === "extra-small" ? "icon-btn-size-xs"
                                : "icon-btn-size-default"}
					${this.asButton ? 'button' : 'non-button'}
					${this.disabled ? 'disabled' : ''}
				`, role: `button`, id: this.buttonId }, index.h("div", { class: `
						hexagon
						${size === "xl" || size === "extra-large" ? "icon-btn-size-xl"
                : size === "l" || size === "large" ? "icon-btn-size-l"
                    : size === "m" || size === "medium" ? "icon-btn-size-m"
                        : size === "s" || size === "small" ? "icon-btn-size-s"
                            : size === "xs" || size === "extra-small" ? "icon-btn-size-xs"
                                : "icon-btn-size-default"}
					` }, index.h("svg", { class: "hexagon-svg", viewBox: "0 0 44 50", xmlns: "http://www.w3.org/2000/svg" }, index.h("g", { stroke: "none", "stroke-width": "0", fill: "none", "fill-rule": "evenodd" }, index.h("path", { class: `
									hex-outline 
									${oColour === "white" ? "svg-colour-white"
                : oColour === "blue" ? "svg-colour-blue"
                    : oColour === "aqua" ? "svg-colour-aqua"
                        : oColour === "grey" ? "svg-colour-grey"
                            : oColour === "navy" ? "svg-colour-navy"
                                : "svg-colour-default"}
								`, d: "M22.0051334,50 C20.9875773,50 19.94393,49.7081067 19.0307386,49.12432 L2.85420568,39.6510548 C1.00173174,38.642696 -0.12018909,36.5994427 0.0102668206,34.4500464 L0.0102668206,15.5300517 C-0.12018909,13.3806554 1.00173174,11.3374021 2.88029686,10.3025076 L19.0307386,0.855778161 C20.8310302,-0.285259387 23.1792366,-0.285259387 24.9795282,0.855778161 L41.1560611,10.3290434 C42.9302615,11.4435452 44,13.4071912 44,15.503516 L44,34.4765822 C44,36.572907 42.9302615,38.5630888 41.1821523,39.6510548 L24.9795282,49.1508558 C24.0663368,49.7081067 23.0487807,50 22.0051334,50 Z" }), index.h("path", { class: `
									hex-fill 
									${colour === "white" ? "svg-colour-white"
                : colour === "blue" ? "svg-colour-blue"
                    : colour === "aqua" ? "svg-colour-aqua"
                        : colour === "grey" ? "svg-colour-grey"
                            : colour === "navy" ? "svg-colour-navy"
                                : "svg-colour-default"}
								`, d: "M21.991651,2 C21.2515462,2 20.5114415,2.20861678 19.8734201,2.62585034 L19.8478993,2.65192744 L4.0249702,11.9353741 C2.69788582,12.6655329 1.90673937,14.0997732 2.00882278,15.6122449 L2.00882278,15.6643991 L2.00882278,34.361678 C1.90673937,35.8741497 2.69788582,37.30839 3.99944934,38.0385488 L19.8734201,47.3741497 C21.1749837,48.2086168 22.8083183,48.2086168 24.1098818,47.3741497 L24.1354026,47.3480726 L39.9838526,38.0385488 C41.2343744,37.2562358 42,35.8219955 42,34.3095238 L42,15.6904762 C42,14.1780045 41.2343744,12.7437642 39.9583317,11.9353741 L24.1098818,2.59977324 C23.4718605,2.20861678 22.7317557,2 21.991651,2 Z" })))), index.h("div", { class: `
					icon
					${iColour === "white" ? "svg-colour-white"
                : iColour === "blue" ? "svg-colour-blue"
                    : iColour === "aqua" ? "svg-colour-aqua"
                        : iColour === "grey" ? "svg-colour-grey"
                            : iColour === "navy" ? "svg-colour-navy"
                                : "svg-colour-default"}
					${size === "xl" || size === "extra-large" ? "icon-size-xl"
                : size === "l" || size === "large" ? "icon-size-l"
                    : size === "m" || size === "medium" ? "icon-size-m"
                        : size === "s" || size === "small" ? "icon-size-s"
                            : size === "xs" || size === "extra-small" ? "icon-size-xs"
                                : "icon-size-default"}
				` }, icon)));
    }
};
IconButton.style = iconButtonCss;

const iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";

const ChevronDown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })));
        // return(
        // 	<svg 
        // 		aria-hidden="true" 
        // 		focusable="false" 
        // 		class="svg-inline chevron-down w-14" 
        // 		role="img" 
        // 		xmlns="http://www.w3.org/2000/svg" 
        // 		viewBox="0 0 448 512">
        // 			<path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
        // 			</path>	
        // 	</svg>
        // )
    }
};
ChevronDown.style = iconsCss;

const iconsCss$1 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";

const ChevronUp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" })));
        // return(
        // 	<svg 
        // 		aria-hidden="true" 
        // 		focusable="false" 
        // 		class="svg-inline chevron-up w-14" 
        // 		role="img" 
        // 		xmlns="http://www.w3.org/2000/svg" 
        // 		viewBox="0 0 448 512">
        // 			<path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
        // 	</svg>
        // )
    }
};
ChevronUp.style = iconsCss$1;

const mainContentCss = "main{padding:0 1.375rem;display:block}";

const MainContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("main", null, index.h("slot", null)));
    }
};
MainContent.style = mainContentCss;

const modalCss = ".modal-wrapper{position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50}.modal-wrapper.show{pointer-events:auto}.modal-wrapper.hide{pointer-events:none}.backdrop-container{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-transition-property:opacity;transition-property:opacity}.backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#868398;opacity:.75}.backdrop.hide{pointer-events:none;opacity:0;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.backdrop.show{pointer-events:auto;opacity:.75;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal{background-color:#fff;border-radius:.5rem;padding:1.25rem 1rem 1rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.modal.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal.hide{pointer-events:none;opacity:0;--transform-translate-y:1rem;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.modal-header{display:-ms-flexbox;display:flex}.modal-header.header-style-default,.modal-header.header-style-modal{border:solid #32f7dc;border-width:0 0 4px}.title{-ms-flex:1 1 0%;flex:1 1 0%;font-weight:800;color:#363154}.title.header-style-default,.title.header-style-modal{margin-top:.75rem;margin-bottom:.75rem;font-size:1.5rem;line-height:1.75rem}.title.header-style-alert{margin-top:.5rem;margin-bottom:.75rem;font-size:1.25rem;line-height:1.25rem}.close-button{margin-left:10px}#app-logo-initials{color:#363154;text-align:center}tf-icon-close{height:16px;width:16px}.modal-body{margin-top:.5rem;margin-bottom:.5rem}.modal-footer{margin-top:1.25rem}.cancel-wrapper,.confirm-wrapper{display:-ms-flexbox;display:flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.cancel-wrapper{margin-top:.75rem}tf-button{width:100%}@media (min-width:640px){.modal-wrapper{top:0;right:0;bottom:0;left:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.modal{max-width:32rem;width:100%;padding:1.5rem}.modal.show{--transform-scale-x:1;--transform-scale-y:1}.modal.hide,.modal.show{--transform-translate-y:0}.modal.hide{--transform-scale-x:.95;--transform-scale-y:.95}.modal-footer{margin-top:1.5rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:.75rem;gap:.75rem;grid-auto-flow:row dense}.confirm-wrapper{grid-column-start:2}.cancel-wrapper{margin-top:0;grid-column-start:1}}";

const ModalTest = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headerStyle = "modal";
        this.showCancel = true;
        this.showConfirm = true;
        this.showClose = true;
        this.cancelText = "Cancel";
        this.confirmText = "Confirm";
        this.cancelColour = "grey";
        this.confirmColour = "aqua";
        this.tfModalClosed = index.createEvent(this, "tfModalClosed", 7);
        this.tfModalConfirmed = index.createEvent(this, "tfModalConfirmed", 7);
    }
    onClose() {
        console.log("onClose");
    }
    onConfirm() {
        console.log("onConfirm");
    }
    render() {
        return (index.h("div", { class: `modal-wrapper show` }, index.h("div", { class: "backdrop-container" }, index.h("div", { class: `
					backdrop
					show
				` })), index.h("div", { class: `
				modal
				show
			` }, index.h("header", { class: `modal-header ${this.headerStyle === "modal" ? "header-style-modal"
                : this.headerStyle === "modal" ? "header-style-alert"
                    : "header-style-default"}` }, index.h("h2", { class: `title ${this.headerStyle === "modal" ? "header-style-modal"
                : this.headerStyle === "modal" ? "header-style-alert"
                    : "header-style-default"}` }, this.displayTitle), this.showClose &&
            index.h("div", { class: "close-button" }, index.h("tf-icon-button", { onClick: this.onClose.bind(this), colour: "grey", icon: "close" }))), index.h("section", { class: "modal-body" }, index.h("slot", null)), index.h("footer", { class: "modal-footer" }, this.showConfirm &&
            index.h("span", { class: "confirm-wrapper" }, index.h("tf-button", { onClick: this.onConfirm.bind(this), colour: this.confirmColour }, this.confirmText)), this.showCancel &&
            index.h("span", { class: "cancel-wrapper" }, index.h("tf-button", { onClick: this.onClose.bind(this), colour: this.cancelColour }, this.cancelText))))));
    }
};
ModalTest.style = modalCss;

const nodeCss = ".node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem;@apply flex flex-1;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}.flex{@apply flex flex-1;-ms-flex:1 1 0%;flex:1 1 0%}";

const Node = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "node-container" }, index.h("div", { class: "flex" }, index.h("slot", null))));
    }
};
Node.style = nodeCss;

const elementsCss$1 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";

const PTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        const textAlign = this.textAlign;
        const colour = this.colour;
        return (index.h("p", { class: `
				tag-p 
				${colour === "white" ? "colour-white"
                : colour === "blue" ? "colour-blue"
                    : colour === "aqua" ? "colour-aqua"
                        : colour === "grey" ? "colour-grey"
                            : colour === "navy" ? "colour-navy"
                                : "colour-default"}
				${textAlign === "right" ? "text-align-right"
                : textAlign === "center" ? "text-align-center"
                    : textAlign === "justify" ? "text-align-justify"
                        : textAlign === "left" ? "text-align-left"
                            : "text-align-left"}
			` }, index.h("slot", null)));
    }
};
PTag.style = elementsCss$1;

const ParaTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
        this.textAlign = "left";
    }
    render() {
        const styles = {
            textAlign: this.textAlign,
        };
        return (index.h("p", { style: styles }, index.h("slot", null)));
    }
};
ParaTag.style = "p{\n\t\t\tmargin-block-start: 10px;\n    \tmargin-block-end: 10px;\n    \tmargin-inline-start: 0px;\n\t\t\tmargin-inline-end: 0px;\n\t\t\tmargin-left:0;\n\t\t\tmargin-right\t:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:block;\n\t\t}";

const Bi = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M98.4,118.9l-4.7,4.7c-1,1-2.2,1.4-3.5,1.4H63.5V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7c1,1,1.5,2.2,1.5,3.6
	v6.5c0,1.4-0.5,2.6-1.5,3.6l-4.1,4.1l4.1,4.1c1,1,1.5,2.2,1.5,3.6v6.6C100,116.6,99.4,117.9,98.4,118.9z M91.3,88.3
	c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H72.2V97h14.4c0.4,0,0.7-0.1,1-0.4l3.3-3.3c0.3-0.3,0.4-0.6,0.4-1V88.3z
		M91.3,109.9c0-0.4-0.1-0.7-0.4-1l-3.4-3.4c-0.3-0.3-0.6-0.4-1-0.4H72.2v11.8h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6
	c0.3-0.3,0.4-0.6,0.4-1V109.9z`),
    getPath(`M118.5,125V98h-7.3v-7.2h15.4V125H118.5z M118,84.7v-9.2h9.2v9.2H118z`)));
const CM = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M80.7,123.5c-1,1-2.2,1.5-3.6,1.5H61.6c-1.4,0-2.6-0.5-3.6-1.5l-5.9-5.9c-1-1-1.5-2.2-1.5-3.6V88
		c0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h15.6c1.4,0,2.6,0.5,3.6,1.5l6.2,6.2l-5.8,5.7l-4.9-4.9c-0.3-0.3-0.6-0.4-1-0.4
		H63.4c-0.4,0-0.7,0.1-1,0.4l-2.8,2.8c-0.3,0.3-0.4,0.6-0.4,1v23.1c0,0.4,0.1,0.7,0.4,1l2.8,2.8c0.3,0.3,0.6,0.4,1,0.4h11.9
		c0.4,0,0.7-0.1,1-0.4l4.9-4.9l5.8,5.7L80.7,123.5z`),
    getPath(`M138.8,125V86.9L127.1,125h-8.9l-11.7-38.1V125H98V77.1h13.2l11.3,37.1L134,77.1h13.2V125H138.8z`)));
const EL = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M64,125V77.1h32.1v8.2H72.6v11.6h23.5v8.2H72.6v11.7h23.5v8.2H64z`),
    getPath(`M110.2,125V77.1h8.6v39.7h23.5v8.2H110.2z`)));
const LM = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M53.6,125V77.1h8.6v39.7h23.5v8.2H53.6z`),
    getPath(`M136,125V86.9L124.2,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H136z`)));
const MP = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M92,125V86.9L80.3,125h-8.9L59.7,86.9V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H92z`),
    getPath(`M151.4,99.9l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-18.1V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7
		c1,1,1.5,2.2,1.5,3.6v9.5C153,97.7,152.4,98.9,151.4,99.9z M144.3,88.3c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4h-16.2
		v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z`)));
const R3 = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M88.4,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7
		c1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-1.7L98.9,125H88.4z M86.9,88.3
		c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H67.8v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z`),
    getPath(`M137.2,120l-3.4,3.4c-1,1-2.2,1.6-3.7,1.6h-14.8c-1.4,0-2.7-0.6-3.7-1.6l-5-5l5.1-5l4,4
		c0.3,0.3,0.6,0.4,1.1,0.4h11.8c0.4,0,0.8-0.1,1.1-0.4l0.3-0.3c0.3-0.3,0.4-0.6,0.4-1v-9.8c0-0.4-0.1-0.7-0.4-1l-1.6-1.6
		c-0.3-0.3-0.6-0.4-1.1-0.4h-8.5v-7.2h8.5c0.4,0,0.8-0.1,1.1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V86c0-0.4-0.1-0.7-0.4-1l-0.3-0.3
		c-0.3-0.3-0.6-0.4-1.1-0.4h-11.8c-0.4,0-0.8,0.1-1.1,0.4l-4,4l-5.1-5l5-5c1-1,2.2-1.6,3.7-1.6h14.8c1.4,0,2.7,0.6,3.7,1.6l3.4,3.4
		c1,1,1.4,2.1,1.4,3.4v8.1c0,1.4-0.5,2.6-1.5,3.6l-2.5,2.5l2.6,2.6c1,1,1.4,2.1,1.4,3.4v10.8C138.6,117.9,138.2,119,137.2,120z`)));
const RP = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M87.2,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125H58V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7
		c1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4H83L97.8,125H87.2z M85.8,88.3
		c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H66.6v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z`),
    getPath(`M144.8,99.9l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-18.1V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7
		c1,1,1.5,2.2,1.5,3.6v9.5C146.3,97.7,145.8,98.9,144.8,99.9z M137.7,88.3c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4
		h-16.2v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z`)));
const Si = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M102.6,117.6l-5.9,5.9c-1,1-2.2,1.5-3.6,1.5h-20c-1.4,0-2.6-0.5-3.6-1.5l-6.1-6.1l5.7-5.8l4.8,4.8
		c0.3,0.3,0.6,0.4,1,0.4h16.3c0.4,0,0.7-0.1,1-0.4l2.8-2.8c0.3-0.3,0.4-0.6,0.4-1v-4.6c0-0.7-0.6-1.4-1.4-1.4l-25.8-3.4
		c-2.8-0.4-5-2.9-5-5.6V88c0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h20c1.4,0,2.6,0.5,3.6,1.5l6.1,6.1l-5.7,5.8l-4.8-4.8
		c-0.3-0.3-0.6-0.4-1-0.4H76.2c-0.4,0-0.7,0.1-1,0.4l-2.8,2.8c-0.3,0.3-0.4,0.6-0.4,1v4.6c0,0.7,0.6,1.4,1.3,1.4L99.1,99
		c2.8,0.4,5,2.9,5,5.6v9.4C104.1,115.3,103.6,116.6,102.6,117.6z`),
    getPath(`M122.7,125V98h-7.3v-7.2h15.4V125H122.7z M122.2,84.7v-9.2h9.2v9.2H122.2z`)));
const SM = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M86.1,117.6l-5.9,5.9c-1,1-2.2,1.5-3.6,1.5h-20c-1.4,0-2.6-0.5-3.6-1.5l-6.1-6.1l5.7-5.8l4.8,4.8
		c0.3,0.3,0.6,0.4,1,0.4h16.3c0.4,0,0.7-0.1,1-0.4l2.8-2.8c0.3-0.3,0.4-0.6,0.4-1v-4.6c0-0.7-0.6-1.4-1.4-1.4l-25.8-3.4
		c-2.8-0.4-5-2.9-5-5.6V88c0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h20c1.4,0,2.6,0.5,3.6,1.5l6.1,6.1l-5.7,5.8l-4.8-4.8
		c-0.3-0.3-0.6-0.4-1-0.4H59.8c-0.4,0-0.7,0.1-1,0.4L56,88.5c-0.3,0.3-0.4,0.6-0.4,1v4.6c0,0.7,0.6,1.4,1.3,1.4L82.7,99
		c2.8,0.4,5,2.9,5,5.6v9.4C87.6,115.3,87.1,116.6,86.1,117.6z`),
    getPath(`M141.4,125V86.9L129.7,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H141.4z`)));
const T = (index.h("g", { fill: "currentColor", stroke: "currentColor", transform: "translate(55, 67)" },
    getPath(`M38.3497327,64.8842632 C38.2733272,65.9947036 38.6512172,67.0883792 39.3959848,67.9122876 C40.1407525,68.7361961 41.1878744,69.2189579 42.2951179,69.2488947 C43.4014548,69.232514 44.4546498,68.7692546 45.2171993,67.9635852 C45.9797488,67.1579158 46.3874421,66.0776779 46.3483412,64.9664737 L46.3483412,19.5825263 C46.3854153,18.4732976 45.9765863,17.3957694 45.2140427,16.5929183 C44.4514991,15.7900672 43.3994468,15.329493 42.2951179,15.3150526 C41.1909407,15.342137 40.145584,15.8208726 39.4008328,16.6405307 C38.6560815,17.4601888 38.2764456,18.5497709 38.3497327,19.6572632 L38.3497327,64.8842632 Z`),
    getPath(`M4.41793239,0.367684211 C3.31292656,0.290902886 2.22460366,0.670651488 1.40472752,1.41908204 C0.584851387,2.16751258 0.104452313,3.2197845 0.0746619497,4.33247368 C0.0919266492,5.44526108 0.554254431,6.50421099 1.35738336,7.27051411 C2.16051228,8.03681724 3.23681227,8.44594453 4.34356132,8.40563158 L80.3768239,8.40563158 C81.4806238,8.44288806 82.5528785,8.03204828 83.3518003,7.26575433 C84.1507221,6.49946037 84.6090422,5.44223392 84.6234119,4.33247368 C84.5955131,3.22183908 84.1177848,2.17075034 83.3007286,1.42233091 C82.4836724,0.673911478 81.3980655,0.29299296 80.2950157,0.367684211 L4.41793239,0.367684211 Z`)));
const TM = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M71.6,85.2V125H63V85.2H49.1v-8.2h36.3v8.2H71.6z`),
    getPath(`M136.2,125V86.9L124.5,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H136.2z`)));
const VL = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    index.h("g", null,
        getPath(`M78.1,125H67.8L52.3,77.1h8.9l11.9,38.6l12-38.6h8.7L78.1,125z`),
        getPath(`M102.8,125V77.1h8.6v39.7h23.5v8.2H102.8z`)),
    index.h("g", null, getPath(`M138.3,81.4v8.5h-4.5v-8.5h-8.6v-4.5h8.6v-8.5h4.5v8.5h8.5v4.5H138.3z`))));
const VR = (index.h("g", { fill: "currentColor", stroke: "currentColor" },
    getPath(`M78,125H67.7L52.2,77.1h8.9L73,115.6l12-38.6h8.7L78,125z`),
    getPath(`M131.9,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7
		c1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-1.7l14.8,18.9H131.9z M130.5,88.3
		c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4h-16.2v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z`)));
function getPath(d) {
    return index.h("path", { d: d });
}
function getClientInitials(code) {
    if (!code) {
        return null;
    }
    switch (code.toLowerCase()) {
        case 'bi':
            return Bi;
        case 'cm':
            return CM;
        case 'el':
            return EL;
        case 'lm':
            return LM;
        case 'mp':
            return MP;
        case 'r3':
            return R3;
        case 'rp':
            return RP;
        case 'si':
            return Si;
        case 'sm':
            return SM;
        case 't':
            return T;
        case 'tm':
            return TM;
        case 'vl':
            return VL;
        case 'vr':
            return VR;
        case '':
        default:
            return null;
    }
}

const productCss = ".product-icon,.product-logo{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.product-logo{-webkit-transform:scale(1.185);transform:scale(1.185)}.product-logo svg{width:100%;height:100%;fill:transparent}.colour-default,.colour-white{color:#fff}.colour-navy{color:#363154}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.size-s{width:35px;height:40px;line-height:18px;font-size:18px}.size-default,.size-m{width:40px;height:46px;line-height:20px;font-size:20px}.size-l{width:45px;height:52px;line-height:21px;font-size:21px}.size-xl{width:50px;height:58px;line-height:23px;font-size:23px}.initials{display:-ms-flexbox;display:flex;position:absolute;z-index:5;text-transform:uppercase;font-weight:400;text-align:center}";

const fillData = `M84.7,188.6 C80.8,188.6 76.8,187.5 73.3,185.3 L11.3,149.6 C4.2,145.8 -0.1,138.1 0.4,130 L0.4,58.7 C-0.1,50.6 4.2,42.9 11.4,39 L73.3,3.4 C80.2,-0.9 89.2,-0.9 96.1,3.4 L158.1,39.1 C164.9,43.3 169,50.7 169,58.6 L169,130.1 C169,138 164.9,145.5 158.2,149.6 L96.1,185.4 C92.6,187.5 88.7,188.6 84.7,188.6 Z`;
const outlineData = `M99.7,193.6c-3.9,0-7.9-1.1-11.4-3.3l-62-35.7c-7.1-3.8-11.4-11.5-10.9-19.6V63.7c-0.5-8.1,3.8-15.8,11-19.7
L88.3,8.4c6.9-4.3,15.9-4.3,22.8,0l62,35.7c6.8,4.2,10.9,11.6,10.9,19.5v71.5c0,7.9-4.1,15.4-10.8,19.5l-62.1,35.8
C107.6,192.5,103.7,193.6,99.7,193.6z M99.7,11.2c-2.9,0-5.8,0.8-8.3,2.4l-0.1,0.1l-62,35.6c-5.2,2.8-8.3,8.3-7.9,14.1v0.2v71.7
c-0.4,5.8,2.7,11.3,7.8,14.1l62.2,35.8c5.1,3.2,11.5,3.2,16.6,0l0.1-0.1l62.1-35.7c4.9-3,7.9-8.5,7.9-14.3V63.7c0-5.8-3-11.3-8-14.4
L108,13.5C105.5,12,102.6,11.2,99.7,11.2z`;
function getInitialsColourFromBG(colour) {
    switch (colour.toLowerCase()) {
        case 'navy':
        case 'blue':
        case 'gradient':
            return "white";
        case 'default':
        case 'white':
        case 'grey':
        case 'aqua':
        default:
            return "navy";
    }
}
const ProductOutline = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'default';
        this.size = 'default';
        this.asOutline = true;
    }
    render() {
        let initialsColourClass = this.initialsColour ? `colour-${this.initialsColour}` : `colour-${this.colour}`;
        if (!this.initialsColour && !this.asOutline) {
            initialsColourClass = `colour-${getInitialsColourFromBG(this.colour)}`;
        }
        const content = getClientInitials(this.code);
        let initialsFallback = null;
        if (!content) {
            initialsFallback = (index.h("div", { class: `initials ${initialsColourClass}` }, !this.initials ? this.code : this.initials));
        }
        return (index.h("div", { class: `
				product-logo 
				${this.size === "xl" || this.size === "extra-large" ? "size-xl"
                : this.size === "l" || this.size === "large" ? "size-l"
                    : this.size === "m" || this.size === "medium" ? "size-m"
                        : this.size === "s" || this.size === "small" ? "size-s"
                            : this.size === "xs" || this.size === "extra-small" ? "size-s"
                                : "size-default"} 
				${this.colour === "white" ? "colour-white"
                : this.colour === "blue" ? "colour-blue"
                    : this.colour === "aqua" ? "colour-aqua"
                        : this.colour === "grey" ? "colour-grey"
                            : this.colour === "navy" ? "colour-navy"
                                : "colour-default"} 
			` }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200" }, index.h("linearGradient", { id: "grad", x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, index.h("stop", { offset: "0%", "stop-color": "#005fab" }), index.h("stop", { offset: "30%", "stop-color": "#004997" }), index.h("stop", { offset: "67%", "stop-color": "#00297a" }), index.h("stop", { offset: "89%", "stop-color": "#00297a" }), index.h("stop", { offset: "89%", "stop-color": "#00287a" }), index.h("stop", { offset: "100%", "stop-color": "#161b4b" })), index.h("path", { fill: this.colour === "gradient" ? "url(#grad)" : "currentColor", stroke: this.colour === "gradient" ? "url(#grad)" : "currentColor", transform: this.asOutline ? '' : "translate(12 5)", d: this.asOutline ? outlineData : fillData }), index.h("g", { class: initialsColourClass }, content)), initialsFallback));
    }
};
ProductOutline.style = productCss;

const dropdownCss = ".dd-container{position:relative;display:inline-block;text-align:left}.dd-panel{position:absolute;margin-top:.5rem;width:14rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-ql-panel{width:200px;left:-75px;-webkit-transform-origin:top left;transform-origin:top left}.right{-webkit-transform-origin:top right;transform-origin:top right;right:0}.left{-webkit-transform-origin:top left;transform-origin:top left;left:0}.center{left:-70px;-webkit-transform-origin:center;transform-origin:center}.dd-panel.show{pointer-events:auto;opacity:1;--transform-scale-x:1;--transform-scale-y:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel.hide{pointer-events:none;opacity:0;--transform-scale-x:.95;--transform-scale-y:.95;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:75ms;transition-duration:75ms}.dd-panel-container{border-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-navy{background-color:#363154}.colour-default,.colour-grey{background-color:#d0dfe3}.colour-white{background-color:#fff}.dd-panel-bg{padding-top:.25rem;padding-bottom:.25rem}.hide-slot{display:none}";

const QuickLinks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatedId = String(Math.floor(Math.random() * 99999));
        this.isOpen = false;
        // @Prop( {reflect: true, mutable:true }) displayTitle:string = "";
        this.dropdownId = null;
        // @Prop( {reflect: true}) size = 'default';
        // @Prop( {reflect: true}) colour = 'grey';
        this.disabled = false;
        this.parsedOptions = [];
        this.tfDropdownSelected = index.createEvent(this, "tfDropdownSelected", 7);
    }
    handleClick(event) {
        if (this.isOpen) {
            const target = event.composedPath()[0];
            if (!target.matches('.dd-panel') &&
                !target.matches('.dd-panel-container') &&
                !target.matches('.dd-panel-bg') &&
                !target.matches('.dd-link') &&
                !target.matches('slot')) {
                event.preventDefault();
                event.stopPropagation();
                this.isOpen = false;
            }
        }
    }
    onHandleCloseDropdown() {
        this.isOpen = false;
    }
    onHandleOptionClicked(event) {
        if (this.isOpen && event.detail.parent === this.generatedId) {
            event.preventDefault();
            event.stopPropagation();
            const dropdownId = this.dropdownId;
            this.tfDropdownSelected.emit(Object.assign(Object.assign({}, event.detail), { dropdownId }));
            //
            this.isOpen = false;
        }
    }
    onToggle() {
        this.isOpen = !this.isOpen;
    }
    componentWillLoad() {
        // parse table header element
        const optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        // 
        Array.from(optionsEls).forEach(opt => {
            const title = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            this.parsedOptions.push({
                value: opt.getAttribute('value'),
                title,
            });
        });
    }
    render() {
        let options = (index.h("slot", null));
        if (this.parsedOptions.length) {
            options = this.parsedOptions.map(opt => (index.h("tf-dropdown-rendered-option", { value: opt.value, "element-title": opt.title, colour: "grey", parent: this.generatedId }, opt.title)));
        }
        return (index.h("div", { class: "dd-container" }, index.h("tf-icon-button", { size: 'xl', icon: this.isOpen ? 'close' : 'add', colour: this.isOpen ? 'navy' : 'aqua', onClick: this.onToggle.bind(this) }), index.h("div", { class: `
					dd-panel 
					dd-ql-panel
					${this.isOpen ? 'show' : 'hide'}
				` }, index.h("div", { class: "dd-panel-container dd-panel-grey" }, index.h("div", { class: "dd-panel-bg" }, index.h("div", { class: "hide-slot" }, index.h("slot", null)), options)))));
    }
    get slotElement() { return index.getElement(this); }
};
QuickLinks.style = dropdownCss;

const sideDrawerCss = ".side-drawer{min-width:400px;max-width:80%;height:100vh;max-height:100vh;-webkit-transition:left .3s ease-out;transition:left .3s ease-out;position:fixed;top:0;background-color:#363154;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);z-index:50;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.side-drawer.closed{left:-100%}.side-drawer.opened{left:0}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:#363154;z-index:40;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.backdrop.closed{opacity:0;pointer-events:none}.backdrop.opened{opacity:.75;pointer-events:auto}header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.header-icon-container{height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.close-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.side-drawer-main{display:-ms-flexbox;display:flex;width:100%;height:100%;margin-bottom:1rem;overflow-y:hidden}";

const SideDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showContactInfo = false;
    }
    async open() {
        this.opened = true;
    }
    onAppLogoClicked() {
        this.open();
    }
    onHandleCloseSideDrawer() {
        this.onCloseDraw();
    }
    stockSymbolChanged(newValue, oldValue) {
    }
    onCloseDraw() {
        this.opened = false;
    }
    // onContentChange(content: string){
    // 	this.showContactInfo = content === 'contact';
    // }
    render() {
        return [
            index.h("div", { onClick: this.onCloseDraw.bind(this), class: `
					backdrop
					${this.opened ? "opened" : "closed"}
				` }),
            index.h("aside", { class: `
					side-drawer
					${this.opened ? "opened" : "closed"}
				` }, index.h("header", null, index.h("div", { class: "header-icon-container" }, index.h("div", { class: "close-icon" }, index.h("tf-icon-button", { size: "large", icon: "close", colour: "white", onClick: this.onCloseDraw.bind(this) })))), index.h("main", { class: "side-drawer-main" }, index.h("slot", null)))
        ];
    }
    static get watchers() { return {
        "opened": ["stockSymbolChanged"]
    }; }
};
SideDrawer.style = sideDrawerCss;

const sideDrawerNavCss = ".side-nav{min-width:350px;display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;padding:.75rem;width:100%;max-height:100%;overflow-y:auto}.side-nav-items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";

const SideDrawerNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        // parse table header element
        const nodeEls = this.slotElement.getElementsByTagName('tf-side-drawer-nav-link');
        //
        const l = Array.from(nodeEls).length;
        const lastItem = Array.from(nodeEls)[l - 1];
        lastItem.setAttribute("show-bottom-border", "false");
    }
    render() {
        return (index.h("nav", { class: "side-nav" }, index.h("div", { class: "side-nav-items" }, index.h("slot", null))));
    }
    get slotElement() { return index.getElement(this); }
};
SideDrawerNav.style = sideDrawerNavCss;

const sideDrawerNavLinkCss = ".tailwind-side-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:Roboto Condensed,sans-serif;padding:.5rem .75rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#fff;background-color:#363154;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-side-nav-bottom-border{border:solid #4b5563;border-width:0 0 1px}.tailwind-side-nav:hover{color:#1d1a2e;background-color:#d0dfe3}.tailwind-side-nav:focus{outline:0;color:#1d1a2e;background-color:#d7e3e7}.tailwind-side-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;color:#fff;-ms-flex-align:center;align-items:center;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-toggle-icon.opened{color:#1d1a2e}tf-icon-chevron-down,tf-icon-chevron-up{width:20px;height:20px}.tailwind-side-nav.opened{color:#1d1a2e;background-color:#ecf2f3}.tailwind-side-nav:hover .tailwind-toggle-icon{color:#1d1a2e}.sub-nav-content{display:block;max-height:0;-webkit-transition:max-height .35s;transition:max-height .35s;overflow:hidden}.sub-nav-content.show{max-height:100vh}";

const SideDrawerNavLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isSubOpen = false;
        this.showBottomBorder = true;
        this.hasSubMenu = false;
        this.tfRouterLinkClicked = index.createEvent(this, "tfRouterLinkClicked", 7);
        this.tfCloseSideDrawer = index.createEvent(this, "tfCloseSideDrawer", 7);
    }
    //
    onLinkClicked() {
        this.isSubOpen = !this.isSubOpen;
    }
    //
    onRouterLinkClicked() {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    }
    //
    componentWillLoad() {
        this.hasSubMenu = !!this.slotElement.querySelector('[slot="sub"]');
    }
    render() {
        let sub = null;
        let linkButton = (index.h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: `
					tailwind-side-nav
					${this.showBottomBorder ? "tailwind-side-nav-bottom-border" : ""}
				` }, index.h("span", { class: "tailwind-side-nav-title" }, index.h("slot", null))));
        if (this.routerLink) {
            linkButton = (index.h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: `
						tailwind-side-nav
						${this.showBottomBorder ? "tailwind-side-nav-bottom-border" : ""}
					`
            }, index.h("span", { class: "tailwind-side-nav-title" }, index.h("slot", null))));
        }
        if (this.hasSubMenu) {
            sub = (index.h("div", { class: `sub-nav-content ${this.isSubOpen ? 'show' : 'hide'}` }, index.h("slot", { name: "sub" })));
            const icon = this.isSubOpen ? index.h("tf-icon-chevron-up", null) : index.h("tf-icon-chevron-down", null);
            linkButton = (index.h("div", { class: `
						tailwind-side-nav 
						${this.isSubOpen ? 'opened' : ''}
						${this.showBottomBorder ? "tailwind-side-nav-bottom-border" : ""}
					`, onClick: this.onLinkClicked.bind(this) }, index.h("span", { class: "tailwind-side-nav-title" }, index.h("slot", null)), index.h("span", { class: `tailwind-toggle-icon ${this.isSubOpen ? 'opened' : ''}` }, icon)));
        }
        return [linkButton, sub];
    }
    get slotElement() { return index.getElement(this); }
};
SideDrawerNavLink.style = sideDrawerNavLinkCss;

const sideDrawerSubNavCss = ".sub-nav-content{max-height:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);overflow:hidden;padding:.5rem;background-color:#d0dfe3;line-height:1.5}.opened{max-height:100vh}.sub-nav-items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";

const SideDrawerSubNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        // parse table header element
        const nodeEls = this.slotElement.getElementsByTagName('tf-side-drawer-sub-nav-link');
        //
        const l = Array.from(nodeEls).length;
        const lastItem = Array.from(nodeEls)[l - 1];
        lastItem.setAttribute("show-bottom-border", "false");
    }
    render() {
        return (index.h("div", { class: "sub-nav-content opened" }, index.h("div", { class: "sub-nav-items" }, index.h("slot", null))));
    }
    get slotElement() { return index.getElement(this); }
};
SideDrawerSubNav.style = sideDrawerSubNavCss;

const sideDrawerSubNavLinkCss = ".tailwind-sub-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#1d1a2e;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-sub-nav-bottom-border{border:solid #363154;border-width:0 0 1px}.tailwind-sub-nav:hover{color:#302c4b;background-color:#b1bdc1}.tailwind-sub-nav:focus{outline:0;color:#1d1a2e;background-color:#b1bdc1}.tailwind-sub-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";

const SideDrawerSubNavLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showBottomBorder = true;
        this.tfRouterLinkClicked = index.createEvent(this, "tfRouterLinkClicked", 7);
        this.tfCloseSideDrawer = index.createEvent(this, "tfCloseSideDrawer", 7);
    }
    onRouterLinkClicked() {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    }
    render() {
        let linkButton = (index.h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: `
					tailwind-sub-nav
					${this.showBottomBorder ? "tailwind-sub-nav-bottom-border" : ""}
				` }, index.h("span", { class: "tailwind-sub-nav-title" }, index.h("slot", null))));
        if (this.routerLink) {
            linkButton = (index.h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: `
						tailwind-sub-nav
						${this.showBottomBorder ? "tailwind-sub-nav-bottom-border" : ""}
					`
            }, index.h("span", { class: "tailwind-sub-nav-title" }, index.h("slot", null))));
        }
        return (linkButton);
    }
};
SideDrawerSubNavLink.style = sideDrawerSubNavLinkCss;

const elementsCss$2 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";

const SpanNormal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        return (index.h("span", { class: `
				span-normal 
				${utils.getColourClassname(this.colour)}
				${utils.getTextAlignClassname(this.textAlign)}
			` }, index.h("slot", null)));
    }
};
SpanNormal.style = elementsCss$2;

exports.tf_app_base_header = AppHeader;
exports.tf_app_client_logo = AppHeader$1;
exports.tf_button = Button;
exports.tf_card = Card;
exports.tf_card_container = CardContainer;
exports.tf_card_title = CardTitle;
exports.tf_client_logo = AppHeader$2;
exports.tf_contained_card = ContainedCard;
exports.tf_dropdown_option = DropdownOption;
exports.tf_dropdown_rendered_option = DropdownRenderedOption;
exports.tf_h2 = HTwoTag;
exports.tf_icon_button = IconButton;
exports.tf_icon_chevron_down = ChevronDown;
exports.tf_icon_chevron_up = ChevronUp;
exports.tf_main_content = MainContent;
exports.tf_modal_test = ModalTest;
exports.tf_node = Node;
exports.tf_p = PTag;
exports.tf_p_tag = ParaTag;
exports.tf_product_logo = ProductOutline;
exports.tf_quick_links = QuickLinks;
exports.tf_side_drawer = SideDrawer;
exports.tf_side_drawer_nav = SideDrawerNav;
exports.tf_side_drawer_nav_link = SideDrawerNavLink;
exports.tf_side_drawer_sub_nav = SideDrawerSubNav;
exports.tf_side_drawer_sub_nav_link = SideDrawerSubNavLink;
exports.tf_span_normal = SpanNormal;
