var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-67a2bf30.js';
import { g as getSizeClassname, a as getColourClassname, b as getPaddingClassname, c as getTextAlignClassname } from './utils-f127cc8f.js';
var appHeaderCss = "header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.app-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.app-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.app-logo-icon{color:#224595}.app-logo-icon.clickable{cursor:pointer}.app-logo-initials{color:#fff;text-transform:uppercase;font-weight:400;font-size:1.25rem;text-align:center}.app-logo-initials::-moz-selection{color:none;background:none}.app-logo-initials::selection{color:none;background:none}.app-logo-initials::-moz-selection{color:none;background:none}h1{margin:0 0 0 .75rem;color:#fff;font-size:1.5rem;font-family:Roboto Condensed,sans-serif;line-height:1.5;font-weight:400}@media only screen and (max-width:640px){#app-logo-title{display:none}}#central-contailer{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;padding:0 3.125rem;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}@media only screen and (max-width:640px){#central-contailer{display:none}}#quick-link-icon{color:#363154;font-size:1.25rem;text-align:center}#quick-link-icon::-moz-selection{color:none;background:none}#quick-link-icon::selection{color:none;background:none}#quick-link-icon::-moz-selection{color:none;background:none}#client-logo-container{justify-self:flex-end}#client-logo{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:112px;height:59px}#client-logo img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}#account-navigation-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:40px;height:59px}@media only screen and (max-width:640px){#account-navigation-container{display:none}}";
var AppHeader = /** @class */ (function () {
    function AppHeader(hostRef) {
        registerInstance(this, hostRef);
        this.appTitle = null;
        this.appInitials = null;
        this.showAppLogo = true;
        this.isLogoClickable = true;
        this.showClientLogo = false;
        this.showUserAccount = false;
        this.clientLogoSource = null;
        this.tfAppLogoClicked = createEvent(this, "tfAppLogoClicked", 7);
    }
    AppHeader.prototype.onButtonClickHandler = function (event) {
        if (this.isLogoClickable) {
            event.preventDefault();
            this.tfAppLogoClicked.emit();
        }
    };
    AppHeader.prototype.componentWillLoad = function () {
        this.hasQuickLinksSlot = !!this.hostElement.querySelector('[slot="quicklinks"]');
        this.hasClientLogoSlot = !!this.hostElement.querySelector('[slot="clientlogo"]');
        //
        if (!this.hasClientLogoSlot && (this.showClientLogo || this.userAccountMenuItems || this.clientLogoSource)) {
            console.log("Client logo set in the App Header with parameters has depreciated. It is encouraged that the Client Logo and User Account navigation elements (tf-app-client-logo) are set in the slot slot=\"clientlogo\". See https://tf-web-components-angular.netlify.app/header for more information and examples");
        }
    };
    AppHeader.prototype.render = function () {
        var _this = this;
        var clientLogo = null;
        if (this.hasClientLogoSlot) {
            clientLogo = h("slot", { name: "clientlogo" });
        }
        else if (this.clientLogoSource && (this.clientLogoSource && this.showClientLogo)) {
            clientLogo = (h("div", { id: "client-logo-container" }, h("tf-client-logo", { "show-client-logo": this.showClientLogo, "client-logo-source": this.clientLogoSource, "show-user-account": this.showUserAccount, "user-account-menu-items": this.userAccountMenuItems })));
        }
        var appLogo = null;
        if (this.showAppLogo) {
            appLogo = (h("div", { class: "app-logo-container" }, h("div", { class: "app-logo" }, h("tf-product-logo", { class: "app-logo-icon " + (this.isLogoClickable ? "clickable" : ""), code: this.appInitials, colour: this.isLogoClickable ? "gradient" : "white", "initials-colour": this.isLogoClickable ? "white" : "blue", size: "large", "as-outline": "false", onClick: function (event) {
                    _this.onButtonClickHandler(event);
                    // this.onButtonClickHandler.bind(this);
                } }), h("h1", { class: "app-logo-title" }, this.appTitle))));
        }
        return (h("header", null, appLogo, h("div", { id: "central-contailer" }, h("slot", { name: "quicklinks" })), clientLogo));
    };
    Object.defineProperty(AppHeader.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return AppHeader;
}());
AppHeader.style = appHeaderCss;
var clientLogoCss = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px;position:relative}.client-logo-image{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.client-logo-image.image-eval{width:auto;height:auto;opacity:0}.client-logo-image.image-width-dominant{width:100%;height:auto;opacity:1}.client-logo-image.image-default,.client-logo-image.image-height-dominant{width:auto;height:100%;opacity:1}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);right:0;z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}.hide-slot{display:none}";
var AppHeader$1 = /** @class */ (function () {
    function AppHeader$1(hostRef) {
        registerInstance(this, hostRef);
        this.clientLogoSource = null;
        this.showUserAccount = false;
        // @Prop() userAccountMenuItems:any;
        this.isOpen = false;
        this.logoImageClass = "evaluate";
        this.dropdownItems = [];
        this.parsedOptions = [];
        this.dropdownIdentifier = "user-account-dd-nav";
        this.observer = null;
        this.tfUserAccountDropdownSelected = createEvent(this, "tfUserAccountDropdownSelected", 7);
    }
    AppHeader$1.prototype.clientLogoSourcePropChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.logoImageClass = "evaluate";
        }
    };
    AppHeader$1.prototype.handleClick = function (event) {
        if (this.isOpen) {
            var target = event.composedPath()[0];
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
    };
    AppHeader$1.prototype.onHandleOptionClicked = function (event) {
        if (this.isOpen && event.detail.parent === this.dropdownIdentifier) {
            event.preventDefault();
            event.stopPropagation();
            this.tfUserAccountDropdownSelected.emit(Object.assign({}, event.detail));
            this.isOpen = false;
        }
    };
    //
    AppHeader$1.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    AppHeader$1.prototype.componentWillLoad = function () {
        this.parseDropdownItems();
        this.initiateObserverMutation();
    };
    AppHeader$1.prototype.initiateObserverMutation = function () {
        // Options for the observer (which mutations to observe)
        var config = { attributes: true, childList: true, subtree: true };
        //
        var that = this;
        // Callback function to execute when mutations are observed
        var callback = function (mutationsList) {
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
    };
    AppHeader$1.prototype.disconnectedCallback = function () {
        // Stop observing the slotElement change
        this.observer.disconnect();
    };
    AppHeader$1.prototype.parseDropdownItems = function () {
        var optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        var items = [];
        Array.from(optionsEls).forEach(function (opt) {
            var label = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            items.push({
                value: opt.getAttribute('value'),
                label: label,
            });
        });
        if (items.length) {
            this.dropdownItems = __spreadArrays(items);
        }
    };
    AppHeader$1.prototype.onClientLogoLoaded = function () {
        if (this.imgRef.width > this.imgRef.height) {
            this.logoImageClass = "width-dom";
        }
        else {
            this.logoImageClass = "height-dom";
        }
    };
    AppHeader$1.prototype.render = function () {
        var _this = this;
        var userAccount = null;
        var userAccountDropdown = null;
        if (this.showUserAccount) {
            userAccount = (h("div", { class: "account-navigation-container" }, h("tf-icon-button", { icon: this.isOpen ? 'close' : 'user', size: "xs", colour: this.isOpen ? 'navy' : 'white', "outline-colour": "navy", onClick: this.onToggle.bind(this) })));
            //
            userAccountDropdown = (h("div", { class: "\n\t\t\t\t\tdd-panel \n\t\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t\t" }, h("div", { class: "dd-panel-container dd-panel-grey" }, h("div", { class: "dd-panel-bg" }, this.dropdownItems.map(function (item, index) {
                return (h("tf-dropdown-rendered-option", { class: index + 1 < _this.dropdownItems.length ? "show-dividing-border" : "", value: item.value, "element-title": item.label, colour: "grey", parent: _this.dropdownIdentifier }, item.label));
            })), h("div", { class: "hide-slot" }, h("slot", null)))));
        }
        //
        return (h("div", { class: "outer-container" }, h("div", { class: "client-logo-container" }, h("div", { class: "client-logo" }, h("img", { ref: function (el) { return _this.imgRef = el; }, class: "\n\t\t\t\t\t\t\t\tclient-logo-image\n\t\t\t\t\t\t\t\t" + (this.logoImageClass === "evaluate" ? "image-eval"
                : this.logoImageClass === "width-dom" ? "image-width-dominant"
                    : this.logoImageClass === "height-dom" ? "image-height-dominant"
                        : "image-default") + "\n\t\t\t\t\t\t\t", src: this.clientLogoSource, onLoad: this.onClientLogoLoaded.bind(this) })), userAccount), userAccountDropdown));
    };
    Object.defineProperty(AppHeader$1.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppHeader$1, "watchers", {
        get: function () {
            return {
                "clientLogoSource": ["clientLogoSourcePropChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return AppHeader$1;
}());
AppHeader$1.style = clientLogoCss;
var buttonCss = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.tw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.size-s{padding:.5rem .75rem;line-height:1rem}.size-default,.size-m,.size-s{font-size:.875rem;border-radius:.375rem}.size-default,.size-m{padding:.5rem 1rem;line-height:1.25rem}.size-l{padding:.5rem 1rem}.size-l,.size-xl{font-size:1rem;line-height:1.5rem;border-radius:.375rem}.size-xl{padding:.75rem 1.5rem}.colour-blue,.colour-default{color:#fff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260a4}.colour-blue:active,.colour-default:active{outline:0;border-color:#32f7dc;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45);background-color:#1e3d85}.colour-blue:focus,.colour-default:focus{outline:0;border-color:#1e3d85;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-aqua{outline:0;color:#122551;background-color:#32f7dc}.colour-aqua:hover{outline:0;background-color:#84faea}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2ad2bb}.colour-aqua:focus{outline:0;border-color:#2ad2bb;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:active{border-color:#363154;background-color:#25223a}.colour-navy:active,.colour-navy:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy:focus{border-color:#25223a}.colour-grey{color:#122551;background-color:#d0dfe3}.colour-grey:hover{background-color:#d7e3e7}.colour-grey:active{border-color:#d0dfe3;background-color:#b1bdc1}.colour-grey:active,.colour-grey:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-grey:focus{border-color:#b1bdc1}.colour-white{color:#122551;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:active{border-color:#ecf2f3;background-color:#e7eff1}.colour-white:active,.colour-white:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-white:focus{border-color:#e7eff1}.disabled,.disabled:hover{color:#b1bdc1;background-color:#e7eff1}.icon-xs-l{margin-left:-.125rem;margin-right:.5rem}.icon-xs-l,.icon-xs-r{height:1rem;width:1rem}.icon-xs-r{margin-left:.5rem;margin-right:-.125rem}.icon-s-l{margin-left:-.125rem;margin-right:.5rem}.icon-s-l,.icon-s-r{height:1rem;width:1rem}.icon-s-r{margin-left:.5rem;margin-right:-.125rem}.icon-default-l,.icon-m-l{margin-left:-.25rem;margin-right:.5rem;height:1.25rem;width:1.25rem}.icon-default-r,.icon-m-r{margin-left:.5rem;margin-right:-.25rem;height:1.25rem;width:1.25rem}.icon-l-l{margin-left:-.25rem;margin-right:.75rem}.icon-l-l,.icon-l-r{height:1.25rem;width:1.25rem}.icon-l-r{margin-left:.75rem;margin-right:-.25rem}.icon-xl-l{margin-left:-.25rem;margin-right:.75rem}.icon-xl-l,.icon-xl-r{height:1.25rem;width:1.25rem}.icon-xl-r{margin-left:.75rem;margin-right:-.25rem}.hex-container{display:-ms-flexbox;display:flex;position:relative}.hex-container.icon-btn-size-xs{width:30px;height:34px}.hex-container.icon-btn-size-s{width:35px;height:40px}.hex-container.icon-btn-size-default,.hex-container.icon-btn-size-m{width:40px;height:46px}.hex-container.icon-btn-size-l{width:45px;height:52px}.hex-container.icon-btn-size-xl{width:50px;height:58px}.central-icon{position:absolute;z-index:20;pointer-events:none}.icon-size-s,.icon-size-xs{width:15px;height:15px}.icon-size-default,.icon-size-m{width:16px;height:16px}.icon-size-l{width:18px;height:18px}.icon-size-xl{width:20px;height:20px}.hex-btn{padding:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border:1px transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;background-color:transparent}.hex-btn,.hex-fill,.hex-outline{-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.hex-fill,.hex-outline{fill:currentColor}.svg-colour-white{color:#fff}.svg-colour-aqua{color:#32f7dc}.svg-colour-blue,.svg-colour-default{color:#224595}.svg-colour-navy{color:#363154}.svg-colour-grey{color:#d0dfe3}.hex-btn:hover{border-style:none;background-color:transparent}.hex-btn:hover .svg-colour-white:hover{color:#f3f5f9}.hex-btn:hover .svg-colour-aqua:hover{color:#84faea}.hex-btn:hover .svg-colour-blue,.hex-btn:hover .svg-colour-default{color:#4260a4}.hex-btn:hover .svg-colour-navy{color:#534f6d}.hex-btn:hover .svg-colour-grey{color:#d7e3e7}.hex-btn:active{border-style:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.hex-btn:active .svg-colour-white:active{color:#ecf2f3}.hex-btn:active .svg-colour-aqua:active{color:#2ad2bb}.hex-btn:active .svg-colour-blue,.hex-btn:active .svg-colour-default{color:#1e3d85}.hex-btn:active .svg-colour-navy{color:#25223a}.hex-btn:active .svg-colour-grey{color:#b1bdc1}.hex-btn:focus{border-style:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.hex-btn:focus .svg-colour-white:active{color:#ecf2f3}.hex-btn:focus .svg-colour-aqua:focus{color:#2ad2bb}.hex-btn:focus .svg-colour-blue,.hex-btn:focus .svg-colour-default{color:#1e3d85}.hex-btn:focus .svg-colour-navy{color:#25223a}.hex-btn:focus .svg-colour-grey{color:#b1bdc1}.hexagon{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:10}.hexagon-svg{fill:rgba(255,255,0,0);width:100%;height:100%}";
var Button = /** @class */ (function () {
    function Button(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'default';
        this.colour = 'default';
        this.icon = null;
        this.iconPosition = 'default';
        this.buttonId = null;
        this.buttonType = 'button';
        this.disabled = false;
    }
    Button.prototype.getIconClassname = function (s, p) {
        var className = s === "xl" || s === "extra-large" ?
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
    };
    Button.prototype.render = function () {
        var icon = null;
        if (this.icon) {
            var IconTag = "tf-icon-" + this.icon;
            // icon = <IconTag class={`icon-${this.size}-${this.iconPosition === 'right' ? 'r' : 'l'}`}></IconTag>;
            icon = h(IconTag, { class: this.getIconClassname(this.size, this.iconPosition) });
        }
        return (h("span", { id: "button-containing-span" }, h("button", { class: "\n\t\t\t\t\t\ttw-btn \n\t\t\t\t\t\t" + getSizeClassname(this.size) + "\n\t\t\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t\t\t" + (this.disabled ? 'disabled' : '') + "\n\t\t\t\t\t", type: this.buttonType, id: this.buttonId, disabled: this.disabled }, (icon && (this.iconPosition == 'left' || this.iconPosition == 'default')) &&
            icon, h("slot", null), (icon && this.iconPosition == 'right') &&
            icon)));
    };
    return Button;
}());
Button.style = buttonCss;
var cardCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}section{padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}section.default,section.grey{background-color:#d0dfe3}section.white{background-color:#fff}section.navy{background-color:#363154}section.blue{background-color:#224595}section.aqua{background-color:#32f7dc}section.transparent{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}#card-content-container{margin-bottom:.3125rem;background-color:#fff;border-radius:.4375rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);padding:.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}";
var Card = /** @class */ (function () {
    function Card(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
        this.padding = 'default';
    }
    Card.prototype.render = function () {
        return (h("section", { class: "\n\t\t\t\t" + this.colour + " \n\t\t\t\t" + getPaddingClassname(this.padding) + "\n\t\t\t" }, h("slot", null)));
    };
    return Card;
}());
Card.style = cardCss;
var cardContainerCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width:640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#d0dfe3}#contained-card.navy{background-color:#363154}.parent-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;min-height:100%;height:auto;width:100%;margin-right:15px}@media only screen and (max-width:640px){.parent-card-slot-wrapper{margin-right:0;min-height:auto;margin-bottom:15px}}.parent-card-slot-wrapper:last-of-type{margin-right:0}.edge-ie-slot-fix,slot[name=slot1],slot[name=slot2],slot[name=slot3],tf-contained-card{display:block;width:100%}.hidden-slot{display:none}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";
var CardContainer = /** @class */ (function () {
    function CardContainer(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
        this.cardItems = [];
    }
    CardContainer.prototype.componentWillLoad = function () {
        var nodeEls = this.slotElement.getElementsByTagName('tf-contained-card');
        //
        this.totalCards = Array.from(nodeEls).length;
        // Array.from(nodeEls).forEach(n => {
        // 	this.cardItems.push({
        // 		html:n.innerHTML
        // 	})
        // 	n.innerHTML = ""
        // 	n = null;
        // })
    };
    CardContainer.prototype.render = function () {
        var slots = Array.apply(null, { length: this.totalCards })
            .map(function (n, i) {
            n = i + 1;
            var slotName = "slot" + n;
            return (h("div", { class: "parent-card-slot-wrapper" }, h("slot", { name: slotName })));
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
        return (h("div", { id: "card-container" }, slots));
    };
    Object.defineProperty(CardContainer.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CardContainer;
}());
CardContainer.style = cardContainerCss;
var cardTitleCss = "h2{-webkit-margin-before:20px;margin-block-start:20px;-webkit-margin-after:15px;margin-block-end:15px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;margin-left:0;margin-right:0;font-family:Roboto Condensed,sans-serif;font-size:22px;line-height:22px;font-weight:700;display:block}h2.blue,h2.default{color:#224595}h2.white{color:#fff}";
var CardTitle = /** @class */ (function () {
    function CardTitle(hostRef) {
        registerInstance(this, hostRef);
        this.colour = "blue";
    }
    CardTitle.prototype.render = function () {
        return (h("tf-h2", { colour: this.colour }, h("slot", null)));
    };
    return CardTitle;
}());
CardTitle.style = cardTitleCss;
var clientLogoCss$1 = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px;position:relative}.client-logo-image{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.client-logo-image.image-eval{width:auto;height:auto;opacity:0}.client-logo-image.image-width-dominant{width:100%;height:auto;opacity:1}.client-logo-image.image-default,.client-logo-image.image-height-dominant{width:auto;height:100%;opacity:1}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);right:0;z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}.hide-slot{display:none}";
var AppHeader$2 = /** @class */ (function () {
    function AppHeader$2(hostRef) {
        registerInstance(this, hostRef);
        this.showClientLogo = false;
        this.clientLogoSource = null;
        this.showUserAccount = false;
        this.isOpen = false;
        this.dropdownItems = [
            { label: 'My Account', value: 'userAccount' },
            { label: 'Log Out', value: 'signOut' }
        ];
        this.dropdownIdentifier = "user-account-dd-nav";
        this.tfUserAccountDropdownSelected = createEvent(this, "tfUserAccountDropdownSelected", 7);
    }
    AppHeader$2.prototype.userAccountMenuItemsPropChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setDropdownItems();
        }
    };
    AppHeader$2.prototype.handleClick = function (event) {
        if (this.isOpen) {
            var target = event.composedPath()[0];
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
    };
    AppHeader$2.prototype.onHandleOptionClicked = function (event) {
        if (this.isOpen && event.detail.parent === this.dropdownIdentifier) {
            event.preventDefault();
            event.stopPropagation();
            this.tfUserAccountDropdownSelected.emit(Object.assign({}, event.detail));
            this.isOpen = false;
        }
    };
    AppHeader$2.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    AppHeader$2.prototype.componentWillLoad = function () {
        this.setDropdownItems();
    };
    AppHeader$2.prototype.setDropdownItems = function () {
    };
    AppHeader$2.prototype.render = function () {
        var _this = this;
        var userAccount = null;
        var userAccountDropdown = null;
        if (this.showUserAccount) {
            userAccount = (h("div", { class: "account-navigation-container" }, h("tf-icon-button", { icon: this.isOpen ? 'close' : 'user', size: "xs", colour: this.isOpen ? 'navy' : 'white', "outline-colour": "navy", onClick: this.onToggle.bind(this) })));
            //
            userAccountDropdown = (h("div", { class: "\n\t\t\t\t\tdd-panel \n\t\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t\t" }, h("div", { class: "dd-panel-container dd-panel-grey" }, h("div", { class: "dd-panel-bg" }, this.dropdownItems.map(function (item, index) {
                return (h("tf-dropdown-rendered-option", { class: index + 1 < _this.dropdownItems.length ? "show-dividing-border" : "", value: item.value, "element-title": item.label, colour: "grey", parent: _this.dropdownIdentifier }, item.label));
            })))));
        }
        //
        return (h("div", { class: "outer-container" }, h("div", { class: "client-logo-container" }, h("div", { class: "client-logo" }, h("img", { class: "client-logo-image", src: this.clientLogoSource })), userAccount), userAccountDropdown));
    };
    Object.defineProperty(AppHeader$2, "watchers", {
        get: function () {
            return {
                "userAccountMenuItems": ["userAccountMenuItemsPropChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return AppHeader$2;
}());
AppHeader$2.style = clientLogoCss$1;
var cardContainerCss$1 = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width:640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#d0dfe3}#contained-card.navy{background-color:#363154}.parent-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;min-height:100%;height:auto;width:100%;margin-right:15px}@media only screen and (max-width:640px){.parent-card-slot-wrapper{margin-right:0;min-height:auto;margin-bottom:15px}}.parent-card-slot-wrapper:last-of-type{margin-right:0}.edge-ie-slot-fix,slot[name=slot1],slot[name=slot2],slot[name=slot3],tf-contained-card{display:block;width:100%}.hidden-slot{display:none}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";
var ContainedCard = /** @class */ (function () {
    function ContainedCard(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    ContainedCard.prototype.render = function () {
        return (h("div", { id: "contained-card", class: this.colour }, h("div", { id: "contained-card-slot-wrapper" }, h("slot", null))));
    };
    return ContainedCard;
}());
ContainedCard.style = cardContainerCss$1;
var DropdownOption = /** @class */ (function () {
    function DropdownOption(hostRef) {
        registerInstance(this, hostRef);
    }
    DropdownOption.prototype.render = function () {
        return (h("slot", null));
    };
    return DropdownOption;
}());
var dropdownLinkCss = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.dd-link:focus,.dd-link:hover{background-color:#b1bdc1}.dd-link:focus{outline:0}.colour-blue{color:#fff;background-color:#224595}.colour-blue:hover{background-color:#4260a4}.colour-blue:focus{outline:0;background-color:#1e3d85}.colour-aqua{color:#363154;background-color:#32f7dc}.colour-aqua:hover{background-color:#84faea}.colour-aqua:focus{outline:0;background-color:#2ad2bb}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:focus{outline:0;background-color:#25223a}.colour-default,.colour-grey{color:#363154;background-color:#d0dfe3}.colour-default:hover,.colour-grey:hover{background-color:#b1bdc1}.colour-default:focus,.colour-grey:focus{outline:0;background-color:#b1bdc1}.colour-white{color:#363154;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:focus{outline:0;background-color:#e7eff1}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;line-height:1.25rem}";
var DropdownRenderedOption = /** @class */ (function () {
    function DropdownRenderedOption(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'grey';
        this.elementTitle = '';
        this.value = '';
        this.parent = '';
        this.tfDropdownOptionClicked = createEvent(this, "tfDropdownOptionClicked", 7);
    }
    DropdownRenderedOption.prototype.onDropdownOptionClicked = function () {
        this.tfDropdownOptionClicked.emit({
            value: this.value,
            parent: this.parent
        });
    };
    DropdownRenderedOption.prototype.render = function () {
        return (h("div", { onClick: this.onDropdownOptionClicked.bind(this), "element-title": !this.elementTitle ? "" + this.value : this.elementTitle, class: "\n\t\t\t\t\tdd-link \n\t\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" }, h("span", { class: "dd-link-title" }, h("slot", null))));
    };
    return DropdownRenderedOption;
}());
DropdownRenderedOption.style = dropdownLinkCss;
var elementsCss = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var HTwoTag = /** @class */ (function () {
    function HTwoTag(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    HTwoTag.prototype.render = function () {
        return (h("h2", { class: "\n\t\t\t\ttag-h2 \n\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" + getTextAlignClassname(this.textAlign) + "\n\t\t\t" }, h("slot", null)));
    };
    return HTwoTag;
}());
HTwoTag.style = elementsCss;
var iconButtonCss = ".hex-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.button{cursor:pointer}.non-button{cursor:default}.hex-container.disabled{cursor:default;opacity:.5}.icon-btn-size-xs{width:30px;height:34px}.icon-btn-size-s{width:35px;height:40px}.icon-btn-size-default,.icon-btn-size-m{width:40px;height:46px}.icon-btn-size-l{width:45px;height:52px}.icon-btn-size-xl{width:50px;height:58px}.hexagon{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;z-index:10}.svg-colour-white{color:#fff}.svg-colour-aqua{color:#32f7dc}.svg-colour-blue,.svg-colour-default{color:#224595}.svg-colour-navy{color:#363154}.svg-colour-grey{color:#d0dfe3}.hexagon-svg{width:100%;height:100%}.hex-fill,.hex-outline{fill:currentColor;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.icon{position:absolute;z-index:20;pointer-events:none}.icon-size-xs{width:16px;height:16px;top:8px;left:7px}.icon-size-s{width:16px;height:16px;top:12px;left:9.5px}.icon-size-default,.icon-size-m{width:16px;height:16px;top:15px;left:12px}.icon-size-l{width:18px;height:18px;top:17px;left:13.5px}.icon-size-xl{width:20px;height:20px;top:19px;left:15px}.icon-svg{width:100%;height:100%}";
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
var IconButton = /** @class */ (function () {
    function IconButton(hostRef) {
        registerInstance(this, hostRef);
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
    IconButton.prototype.render = function () {
        var size = this.size;
        var oColour = !this.outlineColour ? this.colour : this.outlineColour;
        var colour = this.colour;
        var iColour = !this.iconColour ? getIconColourFromBG(colour) : this.iconColour;
        //
        var IconTag = "tf-icon-" + this.icon;
        var icon = h(IconTag, { class: "icon-svg" });
        return (h("div", { class: "\n\t\t\t\t\thex-container\n\t\t\t\t\t" + (size === "xl" || size === "extra-large" ? "icon-btn-size-xl"
                : size === "l" || size === "large" ? "icon-btn-size-l"
                    : size === "m" || size === "medium" ? "icon-btn-size-m"
                        : size === "s" || size === "small" ? "icon-btn-size-s"
                            : size === "xs" || size === "extra-small" ? "icon-btn-size-xs"
                                : "icon-btn-size-default") + "\n\t\t\t\t\t" + (this.asButton ? 'button' : 'non-button') + "\n\t\t\t\t\t" + (this.disabled ? 'disabled' : '') + "\n\t\t\t\t", role: "button", id: this.buttonId }, h("div", { class: "\n\t\t\t\t\t\thexagon\n\t\t\t\t\t\t" + (size === "xl" || size === "extra-large" ? "icon-btn-size-xl"
                : size === "l" || size === "large" ? "icon-btn-size-l"
                    : size === "m" || size === "medium" ? "icon-btn-size-m"
                        : size === "s" || size === "small" ? "icon-btn-size-s"
                            : size === "xs" || size === "extra-small" ? "icon-btn-size-xs"
                                : "icon-btn-size-default") + "\n\t\t\t\t\t" }, h("svg", { class: "hexagon-svg", viewBox: "0 0 44 50", xmlns: "http://www.w3.org/2000/svg" }, h("g", { stroke: "none", "stroke-width": "0", fill: "none", "fill-rule": "evenodd" }, h("path", { class: "\n\t\t\t\t\t\t\t\t\thex-outline \n\t\t\t\t\t\t\t\t\t" + (oColour === "white" ? "svg-colour-white"
                : oColour === "blue" ? "svg-colour-blue"
                    : oColour === "aqua" ? "svg-colour-aqua"
                        : oColour === "grey" ? "svg-colour-grey"
                            : oColour === "navy" ? "svg-colour-navy"
                                : "svg-colour-default") + "\n\t\t\t\t\t\t\t\t", d: "M22.0051334,50 C20.9875773,50 19.94393,49.7081067 19.0307386,49.12432 L2.85420568,39.6510548 C1.00173174,38.642696 -0.12018909,36.5994427 0.0102668206,34.4500464 L0.0102668206,15.5300517 C-0.12018909,13.3806554 1.00173174,11.3374021 2.88029686,10.3025076 L19.0307386,0.855778161 C20.8310302,-0.285259387 23.1792366,-0.285259387 24.9795282,0.855778161 L41.1560611,10.3290434 C42.9302615,11.4435452 44,13.4071912 44,15.503516 L44,34.4765822 C44,36.572907 42.9302615,38.5630888 41.1821523,39.6510548 L24.9795282,49.1508558 C24.0663368,49.7081067 23.0487807,50 22.0051334,50 Z" }), h("path", { class: "\n\t\t\t\t\t\t\t\t\thex-fill \n\t\t\t\t\t\t\t\t\t" + (colour === "white" ? "svg-colour-white"
                : colour === "blue" ? "svg-colour-blue"
                    : colour === "aqua" ? "svg-colour-aqua"
                        : colour === "grey" ? "svg-colour-grey"
                            : colour === "navy" ? "svg-colour-navy"
                                : "svg-colour-default") + "\n\t\t\t\t\t\t\t\t", d: "M21.991651,2 C21.2515462,2 20.5114415,2.20861678 19.8734201,2.62585034 L19.8478993,2.65192744 L4.0249702,11.9353741 C2.69788582,12.6655329 1.90673937,14.0997732 2.00882278,15.6122449 L2.00882278,15.6643991 L2.00882278,34.361678 C1.90673937,35.8741497 2.69788582,37.30839 3.99944934,38.0385488 L19.8734201,47.3741497 C21.1749837,48.2086168 22.8083183,48.2086168 24.1098818,47.3741497 L24.1354026,47.3480726 L39.9838526,38.0385488 C41.2343744,37.2562358 42,35.8219955 42,34.3095238 L42,15.6904762 C42,14.1780045 41.2343744,12.7437642 39.9583317,11.9353741 L24.1098818,2.59977324 C23.4718605,2.20861678 22.7317557,2 21.991651,2 Z" })))), h("div", { class: "\n\t\t\t\t\ticon\n\t\t\t\t\t" + (iColour === "white" ? "svg-colour-white"
                : iColour === "blue" ? "svg-colour-blue"
                    : iColour === "aqua" ? "svg-colour-aqua"
                        : iColour === "grey" ? "svg-colour-grey"
                            : iColour === "navy" ? "svg-colour-navy"
                                : "svg-colour-default") + "\n\t\t\t\t\t" + (size === "xl" || size === "extra-large" ? "icon-size-xl"
                : size === "l" || size === "large" ? "icon-size-l"
                    : size === "m" || size === "medium" ? "icon-size-m"
                        : size === "s" || size === "small" ? "icon-size-s"
                            : size === "xs" || size === "extra-small" ? "icon-size-xs"
                                : "icon-size-default") + "\n\t\t\t\t" }, icon)));
    };
    return IconButton;
}());
IconButton.style = iconButtonCss;
var iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var ChevronDown = /** @class */ (function () {
    function ChevronDown(hostRef) {
        registerInstance(this, hostRef);
    }
    ChevronDown.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })));
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
    };
    return ChevronDown;
}());
ChevronDown.style = iconsCss;
var iconsCss$1 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var ChevronUp = /** @class */ (function () {
    function ChevronUp(hostRef) {
        registerInstance(this, hostRef);
    }
    ChevronUp.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" })));
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
    };
    return ChevronUp;
}());
ChevronUp.style = iconsCss$1;
var mainContentCss = "main{padding:0 1.375rem;display:block}";
var MainContent = /** @class */ (function () {
    function MainContent(hostRef) {
        registerInstance(this, hostRef);
    }
    MainContent.prototype.render = function () {
        return (h("main", null, h("slot", null)));
    };
    return MainContent;
}());
MainContent.style = mainContentCss;
var modalCss = ".modal-wrapper{position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50}.modal-wrapper.show{pointer-events:auto}.modal-wrapper.hide{pointer-events:none}.backdrop-container{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-transition-property:opacity;transition-property:opacity}.backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#868398;opacity:.75}.backdrop.hide{pointer-events:none;opacity:0;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.backdrop.show{pointer-events:auto;opacity:.75;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal{background-color:#fff;border-radius:.5rem;padding:1.25rem 1rem 1rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.modal.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal.hide{pointer-events:none;opacity:0;--transform-translate-y:1rem;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.modal-header{display:-ms-flexbox;display:flex}.modal-header.header-style-default,.modal-header.header-style-modal{border:solid #32f7dc;border-width:0 0 4px}.title{-ms-flex:1 1 0%;flex:1 1 0%;font-weight:800;color:#363154}.title.header-style-default,.title.header-style-modal{margin-top:.75rem;margin-bottom:.75rem;font-size:1.5rem;line-height:1.75rem}.title.header-style-alert{margin-top:.5rem;margin-bottom:.75rem;font-size:1.25rem;line-height:1.25rem}.close-button{margin-left:10px}#app-logo-initials{color:#363154;text-align:center}tf-icon-close{height:16px;width:16px}.modal-body{margin-top:.5rem;margin-bottom:.5rem}.modal-footer{margin-top:1.25rem}.cancel-wrapper,.confirm-wrapper{display:-ms-flexbox;display:flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.cancel-wrapper{margin-top:.75rem}tf-button{width:100%}@media (min-width:640px){.modal-wrapper{top:0;right:0;bottom:0;left:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.modal{max-width:32rem;width:100%;padding:1.5rem}.modal.show{--transform-scale-x:1;--transform-scale-y:1}.modal.hide,.modal.show{--transform-translate-y:0}.modal.hide{--transform-scale-x:.95;--transform-scale-y:.95}.modal-footer{margin-top:1.5rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:.75rem;gap:.75rem;grid-auto-flow:row dense}.confirm-wrapper{grid-column-start:2}.cancel-wrapper{margin-top:0;grid-column-start:1}}";
var ModalTest = /** @class */ (function () {
    function ModalTest(hostRef) {
        registerInstance(this, hostRef);
        this.headerStyle = "modal";
        this.showCancel = true;
        this.showConfirm = true;
        this.showClose = true;
        this.cancelText = "Cancel";
        this.confirmText = "Confirm";
        this.cancelColour = "grey";
        this.confirmColour = "aqua";
        this.tfModalClosed = createEvent(this, "tfModalClosed", 7);
        this.tfModalConfirmed = createEvent(this, "tfModalConfirmed", 7);
    }
    ModalTest.prototype.onClose = function () {
        console.log("onClose");
    };
    ModalTest.prototype.onConfirm = function () {
        console.log("onConfirm");
    };
    ModalTest.prototype.render = function () {
        return (h("div", { class: "modal-wrapper show" }, h("div", { class: "backdrop-container" }, h("div", { class: "\n\t\t\t\t\tbackdrop\n\t\t\t\t\tshow\n\t\t\t\t" })), h("div", { class: "\n\t\t\t\tmodal\n\t\t\t\tshow\n\t\t\t" }, h("header", { class: "modal-header " + (this.headerStyle === "modal" ? "header-style-modal"
                : this.headerStyle === "modal" ? "header-style-alert"
                    : "header-style-default") }, h("h2", { class: "title " + (this.headerStyle === "modal" ? "header-style-modal"
                : this.headerStyle === "modal" ? "header-style-alert"
                    : "header-style-default") }, this.displayTitle), this.showClose &&
            h("div", { class: "close-button" }, h("tf-icon-button", { onClick: this.onClose.bind(this), colour: "grey", icon: "close" }))), h("section", { class: "modal-body" }, h("slot", null)), h("footer", { class: "modal-footer" }, this.showConfirm &&
            h("span", { class: "confirm-wrapper" }, h("tf-button", { onClick: this.onConfirm.bind(this), colour: this.confirmColour }, this.confirmText)), this.showCancel &&
            h("span", { class: "cancel-wrapper" }, h("tf-button", { onClick: this.onClose.bind(this), colour: this.cancelColour }, this.cancelText))))));
    };
    return ModalTest;
}());
ModalTest.style = modalCss;
var nodeCss = ".node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem;@apply flex flex-1;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}.flex{@apply flex flex-1;-ms-flex:1 1 0%;flex:1 1 0%}";
var Node = /** @class */ (function () {
    function Node(hostRef) {
        registerInstance(this, hostRef);
    }
    Node.prototype.render = function () {
        return (h("div", { class: "node-container" }, h("div", { class: "flex" }, h("slot", null))));
    };
    return Node;
}());
Node.style = nodeCss;
var elementsCss$1 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var PTag = /** @class */ (function () {
    function PTag(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    PTag.prototype.render = function () {
        var textAlign = this.textAlign;
        var colour = this.colour;
        return (h("p", { class: "\n\t\t\t\ttag-p \n\t\t\t\t" + (colour === "white" ? "colour-white"
                : colour === "blue" ? "colour-blue"
                    : colour === "aqua" ? "colour-aqua"
                        : colour === "grey" ? "colour-grey"
                            : colour === "navy" ? "colour-navy"
                                : "colour-default") + "\n\t\t\t\t" + (textAlign === "right" ? "text-align-right"
                : textAlign === "center" ? "text-align-center"
                    : textAlign === "justify" ? "text-align-justify"
                        : textAlign === "left" ? "text-align-left"
                            : "text-align-left") + "\n\t\t\t" }, h("slot", null)));
    };
    return PTag;
}());
PTag.style = elementsCss$1;
var ParaTag = /** @class */ (function () {
    function ParaTag(hostRef) {
        registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
        this.textAlign = "left";
    }
    ParaTag.prototype.render = function () {
        var styles = {
            textAlign: this.textAlign,
        };
        return (h("p", { style: styles }, h("slot", null)));
    };
    return ParaTag;
}());
ParaTag.style = "p{\n\t\t\tmargin-block-start: 10px;\n    \tmargin-block-end: 10px;\n    \tmargin-inline-start: 0px;\n\t\t\tmargin-inline-end: 0px;\n\t\t\tmargin-left:0;\n\t\t\tmargin-right\t:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:block;\n\t\t}";
var Bi = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M98.4,118.9l-4.7,4.7c-1,1-2.2,1.4-3.5,1.4H63.5V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7c1,1,1.5,2.2,1.5,3.6\n\tv6.5c0,1.4-0.5,2.6-1.5,3.6l-4.1,4.1l4.1,4.1c1,1,1.5,2.2,1.5,3.6v6.6C100,116.6,99.4,117.9,98.4,118.9z M91.3,88.3\n\tc0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H72.2V97h14.4c0.4,0,0.7-0.1,1-0.4l3.3-3.3c0.3-0.3,0.4-0.6,0.4-1V88.3z\n\t\tM91.3,109.9c0-0.4-0.1-0.7-0.4-1l-3.4-3.4c-0.3-0.3-0.6-0.4-1-0.4H72.2v11.8h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6\n\tc0.3-0.3,0.4-0.6,0.4-1V109.9z"), getPath("M118.5,125V98h-7.3v-7.2h15.4V125H118.5z M118,84.7v-9.2h9.2v9.2H118z")));
var CM = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M80.7,123.5c-1,1-2.2,1.5-3.6,1.5H61.6c-1.4,0-2.6-0.5-3.6-1.5l-5.9-5.9c-1-1-1.5-2.2-1.5-3.6V88\n\t\tc0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h15.6c1.4,0,2.6,0.5,3.6,1.5l6.2,6.2l-5.8,5.7l-4.9-4.9c-0.3-0.3-0.6-0.4-1-0.4\n\t\tH63.4c-0.4,0-0.7,0.1-1,0.4l-2.8,2.8c-0.3,0.3-0.4,0.6-0.4,1v23.1c0,0.4,0.1,0.7,0.4,1l2.8,2.8c0.3,0.3,0.6,0.4,1,0.4h11.9\n\t\tc0.4,0,0.7-0.1,1-0.4l4.9-4.9l5.8,5.7L80.7,123.5z"), getPath("M138.8,125V86.9L127.1,125h-8.9l-11.7-38.1V125H98V77.1h13.2l11.3,37.1L134,77.1h13.2V125H138.8z")));
var EL = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M64,125V77.1h32.1v8.2H72.6v11.6h23.5v8.2H72.6v11.7h23.5v8.2H64z"), getPath("M110.2,125V77.1h8.6v39.7h23.5v8.2H110.2z")));
var LM = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M53.6,125V77.1h8.6v39.7h23.5v8.2H53.6z"), getPath("M136,125V86.9L124.2,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H136z")));
var MP = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M92,125V86.9L80.3,125h-8.9L59.7,86.9V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H92z"), getPath("M151.4,99.9l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-18.1V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5C153,97.7,152.4,98.9,151.4,99.9z M144.3,88.3c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4h-16.2\n\t\tv12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z")));
var R3 = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M88.4,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-1.7L98.9,125H88.4z M86.9,88.3\n\t\tc0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H67.8v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z"), getPath("M137.2,120l-3.4,3.4c-1,1-2.2,1.6-3.7,1.6h-14.8c-1.4,0-2.7-0.6-3.7-1.6l-5-5l5.1-5l4,4\n\t\tc0.3,0.3,0.6,0.4,1.1,0.4h11.8c0.4,0,0.8-0.1,1.1-0.4l0.3-0.3c0.3-0.3,0.4-0.6,0.4-1v-9.8c0-0.4-0.1-0.7-0.4-1l-1.6-1.6\n\t\tc-0.3-0.3-0.6-0.4-1.1-0.4h-8.5v-7.2h8.5c0.4,0,0.8-0.1,1.1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V86c0-0.4-0.1-0.7-0.4-1l-0.3-0.3\n\t\tc-0.3-0.3-0.6-0.4-1.1-0.4h-11.8c-0.4,0-0.8,0.1-1.1,0.4l-4,4l-5.1-5l5-5c1-1,2.2-1.6,3.7-1.6h14.8c1.4,0,2.7,0.6,3.7,1.6l3.4,3.4\n\t\tc1,1,1.4,2.1,1.4,3.4v8.1c0,1.4-0.5,2.6-1.5,3.6l-2.5,2.5l2.6,2.6c1,1,1.4,2.1,1.4,3.4v10.8C138.6,117.9,138.2,119,137.2,120z")));
var RP = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M87.2,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125H58V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4H83L97.8,125H87.2z M85.8,88.3\n\t\tc0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H66.6v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z"), getPath("M144.8,99.9l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-18.1V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5C146.3,97.7,145.8,98.9,144.8,99.9z M137.7,88.3c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4\n\t\th-16.2v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z")));
var Si = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M102.6,117.6l-5.9,5.9c-1,1-2.2,1.5-3.6,1.5h-20c-1.4,0-2.6-0.5-3.6-1.5l-6.1-6.1l5.7-5.8l4.8,4.8\n\t\tc0.3,0.3,0.6,0.4,1,0.4h16.3c0.4,0,0.7-0.1,1-0.4l2.8-2.8c0.3-0.3,0.4-0.6,0.4-1v-4.6c0-0.7-0.6-1.4-1.4-1.4l-25.8-3.4\n\t\tc-2.8-0.4-5-2.9-5-5.6V88c0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h20c1.4,0,2.6,0.5,3.6,1.5l6.1,6.1l-5.7,5.8l-4.8-4.8\n\t\tc-0.3-0.3-0.6-0.4-1-0.4H76.2c-0.4,0-0.7,0.1-1,0.4l-2.8,2.8c-0.3,0.3-0.4,0.6-0.4,1v4.6c0,0.7,0.6,1.4,1.3,1.4L99.1,99\n\t\tc2.8,0.4,5,2.9,5,5.6v9.4C104.1,115.3,103.6,116.6,102.6,117.6z"), getPath("M122.7,125V98h-7.3v-7.2h15.4V125H122.7z M122.2,84.7v-9.2h9.2v9.2H122.2z")));
var SM = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M86.1,117.6l-5.9,5.9c-1,1-2.2,1.5-3.6,1.5h-20c-1.4,0-2.6-0.5-3.6-1.5l-6.1-6.1l5.7-5.8l4.8,4.8\n\t\tc0.3,0.3,0.6,0.4,1,0.4h16.3c0.4,0,0.7-0.1,1-0.4l2.8-2.8c0.3-0.3,0.4-0.6,0.4-1v-4.6c0-0.7-0.6-1.4-1.4-1.4l-25.8-3.4\n\t\tc-2.8-0.4-5-2.9-5-5.6V88c0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h20c1.4,0,2.6,0.5,3.6,1.5l6.1,6.1l-5.7,5.8l-4.8-4.8\n\t\tc-0.3-0.3-0.6-0.4-1-0.4H59.8c-0.4,0-0.7,0.1-1,0.4L56,88.5c-0.3,0.3-0.4,0.6-0.4,1v4.6c0,0.7,0.6,1.4,1.3,1.4L82.7,99\n\t\tc2.8,0.4,5,2.9,5,5.6v9.4C87.6,115.3,87.1,116.6,86.1,117.6z"), getPath("M141.4,125V86.9L129.7,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H141.4z")));
var T = (h("g", { fill: "currentColor", stroke: "currentColor", transform: "translate(55, 67)" }, getPath("M38.3497327,64.8842632 C38.2733272,65.9947036 38.6512172,67.0883792 39.3959848,67.9122876 C40.1407525,68.7361961 41.1878744,69.2189579 42.2951179,69.2488947 C43.4014548,69.232514 44.4546498,68.7692546 45.2171993,67.9635852 C45.9797488,67.1579158 46.3874421,66.0776779 46.3483412,64.9664737 L46.3483412,19.5825263 C46.3854153,18.4732976 45.9765863,17.3957694 45.2140427,16.5929183 C44.4514991,15.7900672 43.3994468,15.329493 42.2951179,15.3150526 C41.1909407,15.342137 40.145584,15.8208726 39.4008328,16.6405307 C38.6560815,17.4601888 38.2764456,18.5497709 38.3497327,19.6572632 L38.3497327,64.8842632 Z"), getPath("M4.41793239,0.367684211 C3.31292656,0.290902886 2.22460366,0.670651488 1.40472752,1.41908204 C0.584851387,2.16751258 0.104452313,3.2197845 0.0746619497,4.33247368 C0.0919266492,5.44526108 0.554254431,6.50421099 1.35738336,7.27051411 C2.16051228,8.03681724 3.23681227,8.44594453 4.34356132,8.40563158 L80.3768239,8.40563158 C81.4806238,8.44288806 82.5528785,8.03204828 83.3518003,7.26575433 C84.1507221,6.49946037 84.6090422,5.44223392 84.6234119,4.33247368 C84.5955131,3.22183908 84.1177848,2.17075034 83.3007286,1.42233091 C82.4836724,0.673911478 81.3980655,0.29299296 80.2950157,0.367684211 L4.41793239,0.367684211 Z")));
var TM = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M71.6,85.2V125H63V85.2H49.1v-8.2h36.3v8.2H71.6z"), getPath("M136.2,125V86.9L124.5,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H136.2z")));
var VL = (h("g", { fill: "currentColor", stroke: "currentColor" }, h("g", null, getPath("M78.1,125H67.8L52.3,77.1h8.9l11.9,38.6l12-38.6h8.7L78.1,125z"), getPath("M102.8,125V77.1h8.6v39.7h23.5v8.2H102.8z")), h("g", null, getPath("M138.3,81.4v8.5h-4.5v-8.5h-8.6v-4.5h8.6v-8.5h4.5v8.5h8.5v4.5H138.3z"))));
var VR = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M78,125H67.7L52.2,77.1h8.9L73,115.6l12-38.6h8.7L78,125z"), getPath("M131.9,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-1.7l14.8,18.9H131.9z M130.5,88.3\n\t\tc0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4h-16.2v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z")));
function getPath(d) {
    return h("path", { d: d });
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
var productCss = ".product-icon,.product-logo{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.product-logo{-webkit-transform:scale(1.185);transform:scale(1.185)}.product-logo svg{width:100%;height:100%;fill:transparent}.colour-default,.colour-white{color:#fff}.colour-navy{color:#363154}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.size-s{width:35px;height:40px;line-height:18px;font-size:18px}.size-default,.size-m{width:40px;height:46px;line-height:20px;font-size:20px}.size-l{width:45px;height:52px;line-height:21px;font-size:21px}.size-xl{width:50px;height:58px;line-height:23px;font-size:23px}.initials{display:-ms-flexbox;display:flex;position:absolute;z-index:5;text-transform:uppercase;font-weight:400;text-align:center}";
var fillData = "M84.7,188.6 C80.8,188.6 76.8,187.5 73.3,185.3 L11.3,149.6 C4.2,145.8 -0.1,138.1 0.4,130 L0.4,58.7 C-0.1,50.6 4.2,42.9 11.4,39 L73.3,3.4 C80.2,-0.9 89.2,-0.9 96.1,3.4 L158.1,39.1 C164.9,43.3 169,50.7 169,58.6 L169,130.1 C169,138 164.9,145.5 158.2,149.6 L96.1,185.4 C92.6,187.5 88.7,188.6 84.7,188.6 Z";
var outlineData = "M99.7,193.6c-3.9,0-7.9-1.1-11.4-3.3l-62-35.7c-7.1-3.8-11.4-11.5-10.9-19.6V63.7c-0.5-8.1,3.8-15.8,11-19.7\nL88.3,8.4c6.9-4.3,15.9-4.3,22.8,0l62,35.7c6.8,4.2,10.9,11.6,10.9,19.5v71.5c0,7.9-4.1,15.4-10.8,19.5l-62.1,35.8\nC107.6,192.5,103.7,193.6,99.7,193.6z M99.7,11.2c-2.9,0-5.8,0.8-8.3,2.4l-0.1,0.1l-62,35.6c-5.2,2.8-8.3,8.3-7.9,14.1v0.2v71.7\nc-0.4,5.8,2.7,11.3,7.8,14.1l62.2,35.8c5.1,3.2,11.5,3.2,16.6,0l0.1-0.1l62.1-35.7c4.9-3,7.9-8.5,7.9-14.3V63.7c0-5.8-3-11.3-8-14.4\nL108,13.5C105.5,12,102.6,11.2,99.7,11.2z";
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
var ProductOutline = /** @class */ (function () {
    function ProductOutline(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
        this.size = 'default';
        this.asOutline = true;
    }
    ProductOutline.prototype.render = function () {
        var initialsColourClass = this.initialsColour ? "colour-" + this.initialsColour : "colour-" + this.colour;
        if (!this.initialsColour && !this.asOutline) {
            initialsColourClass = "colour-" + getInitialsColourFromBG(this.colour);
        }
        var content = getClientInitials(this.code);
        var initialsFallback = null;
        if (!content) {
            initialsFallback = (h("div", { class: "initials " + initialsColourClass }, !this.initials ? this.code : this.initials));
        }
        return (h("div", { class: "\n\t\t\t\tproduct-logo \n\t\t\t\t" + (this.size === "xl" || this.size === "extra-large" ? "size-xl"
                : this.size === "l" || this.size === "large" ? "size-l"
                    : this.size === "m" || this.size === "medium" ? "size-m"
                        : this.size === "s" || this.size === "small" ? "size-s"
                            : this.size === "xs" || this.size === "extra-small" ? "size-s"
                                : "size-default") + " \n\t\t\t\t" + (this.colour === "white" ? "colour-white"
                : this.colour === "blue" ? "colour-blue"
                    : this.colour === "aqua" ? "colour-aqua"
                        : this.colour === "grey" ? "colour-grey"
                            : this.colour === "navy" ? "colour-navy"
                                : "colour-default") + " \n\t\t\t" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200" }, h("linearGradient", { id: "grad", x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, h("stop", { offset: "0%", "stop-color": "#005fab" }), h("stop", { offset: "30%", "stop-color": "#004997" }), h("stop", { offset: "67%", "stop-color": "#00297a" }), h("stop", { offset: "89%", "stop-color": "#00297a" }), h("stop", { offset: "89%", "stop-color": "#00287a" }), h("stop", { offset: "100%", "stop-color": "#161b4b" })), h("path", { fill: this.colour === "gradient" ? "url(#grad)" : "currentColor", stroke: this.colour === "gradient" ? "url(#grad)" : "currentColor", transform: this.asOutline ? '' : "translate(12 5)", d: this.asOutline ? outlineData : fillData }), h("g", { class: initialsColourClass }, content)), initialsFallback));
    };
    return ProductOutline;
}());
ProductOutline.style = productCss;
var dropdownCss = ".dd-container{position:relative;display:inline-block;text-align:left}.dd-panel{position:absolute;margin-top:.5rem;width:14rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-ql-panel{width:200px;left:-75px;-webkit-transform-origin:top left;transform-origin:top left}.right{-webkit-transform-origin:top right;transform-origin:top right;right:0}.left{-webkit-transform-origin:top left;transform-origin:top left;left:0}.center{left:-70px;-webkit-transform-origin:center;transform-origin:center}.dd-panel.show{pointer-events:auto;opacity:1;--transform-scale-x:1;--transform-scale-y:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel.hide{pointer-events:none;opacity:0;--transform-scale-x:.95;--transform-scale-y:.95;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:75ms;transition-duration:75ms}.dd-panel-container{border-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-navy{background-color:#363154}.colour-default,.colour-grey{background-color:#d0dfe3}.colour-white{background-color:#fff}.dd-panel-bg{padding-top:.25rem;padding-bottom:.25rem}.hide-slot{display:none}";
var QuickLinks = /** @class */ (function () {
    function QuickLinks(hostRef) {
        registerInstance(this, hostRef);
        this.generatedId = String(Math.floor(Math.random() * 99999));
        this.isOpen = false;
        // @Prop( {reflect: true, mutable:true }) displayTitle:string = "";
        this.dropdownId = null;
        // @Prop( {reflect: true}) size = 'default';
        // @Prop( {reflect: true}) colour = 'grey';
        this.disabled = false;
        this.parsedOptions = [];
        this.tfDropdownSelected = createEvent(this, "tfDropdownSelected", 7);
    }
    QuickLinks.prototype.handleClick = function (event) {
        if (this.isOpen) {
            var target = event.composedPath()[0];
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
    };
    QuickLinks.prototype.onHandleCloseDropdown = function () {
        this.isOpen = false;
    };
    QuickLinks.prototype.onHandleOptionClicked = function (event) {
        if (this.isOpen && event.detail.parent === this.generatedId) {
            event.preventDefault();
            event.stopPropagation();
            var dropdownId = this.dropdownId;
            this.tfDropdownSelected.emit(Object.assign(Object.assign({}, event.detail), { dropdownId: dropdownId }));
            //
            this.isOpen = false;
        }
    };
    QuickLinks.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    QuickLinks.prototype.componentWillLoad = function () {
        var _this = this;
        // parse table header element
        var optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        // 
        Array.from(optionsEls).forEach(function (opt) {
            var title = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            _this.parsedOptions.push({
                value: opt.getAttribute('value'),
                title: title,
            });
        });
    };
    QuickLinks.prototype.render = function () {
        var _this = this;
        var options = (h("slot", null));
        if (this.parsedOptions.length) {
            options = this.parsedOptions.map(function (opt) { return (h("tf-dropdown-rendered-option", { value: opt.value, "element-title": opt.title, colour: "grey", parent: _this.generatedId }, opt.title)); });
        }
        return (h("div", { class: "dd-container" }, h("tf-icon-button", { size: 'xl', icon: this.isOpen ? 'close' : 'add', colour: this.isOpen ? 'navy' : 'aqua', onClick: this.onToggle.bind(this) }), h("div", { class: "\n\t\t\t\t\tdd-panel \n\t\t\t\t\tdd-ql-panel\n\t\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t\t" }, h("div", { class: "dd-panel-container dd-panel-grey" }, h("div", { class: "dd-panel-bg" }, h("div", { class: "hide-slot" }, h("slot", null)), options)))));
    };
    Object.defineProperty(QuickLinks.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return QuickLinks;
}());
QuickLinks.style = dropdownCss;
var sideDrawerCss = ".side-drawer{min-width:400px;max-width:80%;height:100vh;max-height:100vh;-webkit-transition:left .3s ease-out;transition:left .3s ease-out;position:fixed;top:0;background-color:#363154;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);z-index:50;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.side-drawer.closed{left:-100%}.side-drawer.opened{left:0}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:#363154;z-index:40;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.backdrop.closed{opacity:0;pointer-events:none}.backdrop.opened{opacity:.75;pointer-events:auto}header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.header-icon-container{height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.close-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.side-drawer-main{display:-ms-flexbox;display:flex;width:100%;height:100%;margin-bottom:1rem;overflow-y:hidden}";
var SideDrawer = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.showContactInfo = false;
    }
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.opened = true;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.onAppLogoClicked = function () {
        this.open();
    };
    class_1.prototype.onHandleCloseSideDrawer = function () {
        this.onCloseDraw();
    };
    class_1.prototype.stockSymbolChanged = function (newValue, oldValue) {
    };
    class_1.prototype.onCloseDraw = function () {
        this.opened = false;
    };
    // onContentChange(content: string){
    // 	this.showContactInfo = content === 'contact';
    // }
    class_1.prototype.render = function () {
        return [
            h("div", { onClick: this.onCloseDraw.bind(this), class: "\n\t\t\t\t\tbackdrop\n\t\t\t\t\t" + (this.opened ? "opened" : "closed") + "\n\t\t\t\t" }),
            h("aside", { class: "\n\t\t\t\t\tside-drawer\n\t\t\t\t\t" + (this.opened ? "opened" : "closed") + "\n\t\t\t\t" }, h("header", null, h("div", { class: "header-icon-container" }, h("div", { class: "close-icon" }, h("tf-icon-button", { size: "large", icon: "close", colour: "white", onClick: this.onCloseDraw.bind(this) })))), h("main", { class: "side-drawer-main" }, h("slot", null)))
        ];
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "opened": ["stockSymbolChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
SideDrawer.style = sideDrawerCss;
var sideDrawerNavCss = ".side-nav{min-width:350px;display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;padding:.75rem;width:100%;max-height:100%;overflow-y:auto}.side-nav-items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";
var SideDrawerNav = /** @class */ (function () {
    function SideDrawerNav(hostRef) {
        registerInstance(this, hostRef);
    }
    SideDrawerNav.prototype.componentWillLoad = function () {
        // parse table header element
        var nodeEls = this.slotElement.getElementsByTagName('tf-side-drawer-nav-link');
        //
        var l = Array.from(nodeEls).length;
        var lastItem = Array.from(nodeEls)[l - 1];
        lastItem.setAttribute("show-bottom-border", "false");
    };
    SideDrawerNav.prototype.render = function () {
        return (h("nav", { class: "side-nav" }, h("div", { class: "side-nav-items" }, h("slot", null))));
    };
    Object.defineProperty(SideDrawerNav.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return SideDrawerNav;
}());
SideDrawerNav.style = sideDrawerNavCss;
var sideDrawerNavLinkCss = ".tailwind-side-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:Roboto Condensed,sans-serif;padding:.5rem .75rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#fff;background-color:#363154;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-side-nav-bottom-border{border:solid #4b5563;border-width:0 0 1px}.tailwind-side-nav:hover{color:#1d1a2e;background-color:#d0dfe3}.tailwind-side-nav:focus{outline:0;color:#1d1a2e;background-color:#d7e3e7}.tailwind-side-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;color:#fff;-ms-flex-align:center;align-items:center;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-toggle-icon.opened{color:#1d1a2e}tf-icon-chevron-down,tf-icon-chevron-up{width:20px;height:20px}.tailwind-side-nav.opened{color:#1d1a2e;background-color:#ecf2f3}.tailwind-side-nav:hover .tailwind-toggle-icon{color:#1d1a2e}.sub-nav-content{display:block;max-height:0;-webkit-transition:max-height .35s;transition:max-height .35s;overflow:hidden}.sub-nav-content.show{max-height:100vh}";
var SideDrawerNavLink = /** @class */ (function () {
    function SideDrawerNavLink(hostRef) {
        registerInstance(this, hostRef);
        this.isSubOpen = false;
        this.showBottomBorder = true;
        this.hasSubMenu = false;
        this.tfRouterLinkClicked = createEvent(this, "tfRouterLinkClicked", 7);
        this.tfCloseSideDrawer = createEvent(this, "tfCloseSideDrawer", 7);
    }
    //
    SideDrawerNavLink.prototype.onLinkClicked = function () {
        this.isSubOpen = !this.isSubOpen;
    };
    //
    SideDrawerNavLink.prototype.onRouterLinkClicked = function () {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    };
    //
    SideDrawerNavLink.prototype.componentWillLoad = function () {
        this.hasSubMenu = !!this.slotElement.querySelector('[slot="sub"]');
    };
    SideDrawerNavLink.prototype.render = function () {
        var sub = null;
        var linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "\n\t\t\t\t\ttailwind-side-nav\n\t\t\t\t\t" + (this.showBottomBorder ? "tailwind-side-nav-bottom-border" : "") + "\n\t\t\t\t" }, h("span", { class: "tailwind-side-nav-title" }, h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "\n\t\t\t\t\t\ttailwind-side-nav\n\t\t\t\t\t\t" + (this.showBottomBorder ? "tailwind-side-nav-bottom-border" : "") + "\n\t\t\t\t\t"
            }, h("span", { class: "tailwind-side-nav-title" }, h("slot", null))));
        }
        if (this.hasSubMenu) {
            sub = (h("div", { class: "sub-nav-content " + (this.isSubOpen ? 'show' : 'hide') }, h("slot", { name: "sub" })));
            var icon = this.isSubOpen ? h("tf-icon-chevron-up", null) : h("tf-icon-chevron-down", null);
            linkButton = (h("div", { class: "\n\t\t\t\t\t\ttailwind-side-nav \n\t\t\t\t\t\t" + (this.isSubOpen ? 'opened' : '') + "\n\t\t\t\t\t\t" + (this.showBottomBorder ? "tailwind-side-nav-bottom-border" : "") + "\n\t\t\t\t\t", onClick: this.onLinkClicked.bind(this) }, h("span", { class: "tailwind-side-nav-title" }, h("slot", null)), h("span", { class: "tailwind-toggle-icon " + (this.isSubOpen ? 'opened' : '') }, icon)));
        }
        return [linkButton, sub];
    };
    Object.defineProperty(SideDrawerNavLink.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return SideDrawerNavLink;
}());
SideDrawerNavLink.style = sideDrawerNavLinkCss;
var sideDrawerSubNavCss = ".sub-nav-content{max-height:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);overflow:hidden;padding:.5rem;background-color:#d0dfe3;line-height:1.5}.opened{max-height:100vh}.sub-nav-items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";
var SideDrawerSubNav = /** @class */ (function () {
    function SideDrawerSubNav(hostRef) {
        registerInstance(this, hostRef);
    }
    SideDrawerSubNav.prototype.componentWillLoad = function () {
        // parse table header element
        var nodeEls = this.slotElement.getElementsByTagName('tf-side-drawer-sub-nav-link');
        //
        var l = Array.from(nodeEls).length;
        var lastItem = Array.from(nodeEls)[l - 1];
        lastItem.setAttribute("show-bottom-border", "false");
    };
    SideDrawerSubNav.prototype.render = function () {
        return (h("div", { class: "sub-nav-content opened" }, h("div", { class: "sub-nav-items" }, h("slot", null))));
    };
    Object.defineProperty(SideDrawerSubNav.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return SideDrawerSubNav;
}());
SideDrawerSubNav.style = sideDrawerSubNavCss;
var sideDrawerSubNavLinkCss = ".tailwind-sub-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#1d1a2e;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-sub-nav-bottom-border{border:solid #363154;border-width:0 0 1px}.tailwind-sub-nav:hover{color:#302c4b;background-color:#b1bdc1}.tailwind-sub-nav:focus{outline:0;color:#1d1a2e;background-color:#b1bdc1}.tailwind-sub-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";
var SideDrawerSubNavLink = /** @class */ (function () {
    function SideDrawerSubNavLink(hostRef) {
        registerInstance(this, hostRef);
        this.showBottomBorder = true;
        this.tfRouterLinkClicked = createEvent(this, "tfRouterLinkClicked", 7);
        this.tfCloseSideDrawer = createEvent(this, "tfCloseSideDrawer", 7);
    }
    SideDrawerSubNavLink.prototype.onRouterLinkClicked = function () {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    };
    SideDrawerSubNavLink.prototype.render = function () {
        var linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "\n\t\t\t\t\ttailwind-sub-nav\n\t\t\t\t\t" + (this.showBottomBorder ? "tailwind-sub-nav-bottom-border" : "") + "\n\t\t\t\t" }, h("span", { class: "tailwind-sub-nav-title" }, h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "\n\t\t\t\t\t\ttailwind-sub-nav\n\t\t\t\t\t\t" + (this.showBottomBorder ? "tailwind-sub-nav-bottom-border" : "") + "\n\t\t\t\t\t"
            }, h("span", { class: "tailwind-sub-nav-title" }, h("slot", null))));
        }
        return (linkButton);
    };
    return SideDrawerSubNavLink;
}());
SideDrawerSubNavLink.style = sideDrawerSubNavLinkCss;
var elementsCss$2 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var SpanNormal = /** @class */ (function () {
    function SpanNormal(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    SpanNormal.prototype.render = function () {
        return (h("span", { class: "\n\t\t\t\tspan-normal \n\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" + getTextAlignClassname(this.textAlign) + "\n\t\t\t" }, h("slot", null)));
    };
    return SpanNormal;
}());
SpanNormal.style = elementsCss$2;
export { AppHeader as tf_app_base_header, AppHeader$1 as tf_app_client_logo, Button as tf_button, Card as tf_card, CardContainer as tf_card_container, CardTitle as tf_card_title, AppHeader$2 as tf_client_logo, ContainedCard as tf_contained_card, DropdownOption as tf_dropdown_option, DropdownRenderedOption as tf_dropdown_rendered_option, HTwoTag as tf_h2, IconButton as tf_icon_button, ChevronDown as tf_icon_chevron_down, ChevronUp as tf_icon_chevron_up, MainContent as tf_main_content, ModalTest as tf_modal_test, Node as tf_node, PTag as tf_p, ParaTag as tf_p_tag, ProductOutline as tf_product_logo, QuickLinks as tf_quick_links, SideDrawer as tf_side_drawer, SideDrawerNav as tf_side_drawer_nav, SideDrawerNavLink as tf_side_drawer_nav_link, SideDrawerSubNav as tf_side_drawer_sub_nav, SideDrawerSubNavLink as tf_side_drawer_sub_nav_link, SpanNormal as tf_span_normal };
