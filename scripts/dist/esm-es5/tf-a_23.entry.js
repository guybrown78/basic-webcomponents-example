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
import { r as registerInstance, h, c as createEvent, g as getElement } from './index-67a2bf30.js';
var elementsCss = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var ATag = /** @class */ (function () {
    function ATag(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
        this.underlined = true;
        this.url = null;
        this.tagTitle = null;
        this.target = "_self";
    }
    ATag.prototype.render = function () {
        return (h("a", { class: "\n\t\t\t\t\t" + (this.underlined ? 'underlined' : 'not-underlined') + " \n\t\t\t\t\ttag-a \n\t\t\t\t\tcolour-" + this.colour + " \n\t\t\t\t\t" + (this.colour === "white" ? "colour-white"
                : this.colour === "blue" ? "colour-blue"
                    : this.colour === "aqua" ? "colour-aqua"
                        : this.colour === "grey" ? "colour-grey"
                            : this.colour === "navy" ? "colour-navy"
                                : "colour-default") + " \n\t\t\t\t\t" + (this.textAlign === "right" ? "text-align-right"
                : this.colour === "center" ? "text-align-center"
                    : this.colour === "justify" ? "text-align-justify"
                        : this.colour === "left" ? "text-align-left"
                            : "text-align-left") + " \n\t\t\t\t", href: this.url, target: this.target, title: this.tagTitle, tabindex: "0" }, h("slot", null)));
    };
    return ATag;
}());
ATag.style = elementsCss;
var AnchorTag = /** @class */ (function () {
    function AnchorTag(hostRef) {
        registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
    }
    AnchorTag.prototype.render = function () {
        return (h("a", { href: this.url, title: this.tagTitle }, h("slot", null)));
    };
    return AnchorTag;
}());
AnchorTag.style = "a{\n\t\t\t@apply font-medium text-blue-600 transition ease-in-out duration-150;\n\t\t}\n\t\ta:hover{\n\t\t\t@apply text-blue-500;\n\t\t}\n\t\ta:focus{\n\t\t\t@apply outline-none underline;\n\t\t}";
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
        var clientLogo = null;
        if (this.hasClientLogoSlot) {
            clientLogo = h("slot", { name: "clientlogo" });
        }
        else if (this.clientLogoSource && (this.clientLogoSource && this.showClientLogo)) {
            clientLogo = (h("div", { id: "client-logo-container" }, h("tf-client-logo", { "show-client-logo": this.showClientLogo, "client-logo-source": this.clientLogoSource, "show-user-account": this.showUserAccount, "user-account-menu-items": this.userAccountMenuItems })));
        }
        var appLogo = null;
        if (this.showAppLogo) {
            appLogo = (h("div", { class: "app-logo-container" }, h("div", { class: "app-logo" }, h("tf-product-logo", { class: "app-logo-icon " + (this.isLogoClickable ? "clickable" : ""), code: this.appInitials, colour: this.isLogoClickable ? "gradient" : "white", "initials-colour": this.isLogoClickable ? "white" : "blue", size: "large", "as-outline": "false", onClick: this.onButtonClickHandler.bind(this) }), h("h1", { class: "app-logo-title" }, this.appTitle))));
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
var buttonCss = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.tw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.colour-blue,.colour-default{color:#fff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260a4}.colour-blue:active,.colour-default:active{outline:0;border-color:#32f7dc;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45);background-color:#1e3d85}.colour-blue:focus,.colour-default:focus{outline:0;border-color:#1e3d85;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-aqua{outline:0;color:#122551;background-color:#32f7dc}.colour-aqua:hover{outline:0;background-color:#84faea}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2ad2bb}.colour-aqua:focus{outline:0;border-color:#2ad2bb;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:active{border-color:#363154;background-color:#25223a}.colour-navy:active,.colour-navy:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy:focus{border-color:#25223a}.colour-grey{color:#122551;background-color:#d0dfe3}.colour-grey:hover{background-color:#d7e3e7}.colour-grey:active{border-color:#d0dfe3;background-color:#b1bdc1}.colour-grey:active,.colour-grey:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-grey:focus{border-color:#b1bdc1}.colour-white{color:#122551;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:active{border-color:#ecf2f3;background-color:#e7eff1}.colour-white:active,.colour-white:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-white:focus{border-color:#e7eff1}.disabled,.disabled:hover{color:#b1bdc1;background-color:#e7eff1}.hex-container{display:-ms-flexbox;display:flex;position:relative}.central-icon{position:absolute;z-index:50;pointer-events:none}.hex-btn{padding:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border:1px transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;background-color:transparent}.hex-btn,.hex-fill,.hex-outline{-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.hex-fill,.hex-outline{fill:currentColor}.hex-btn:hover{border-style:none;background-color:transparent}.hex-btn:active,.hex-btn:focus{border-style:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.hexagon{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:40}.hexagon-svg{fill:rgba(255,255,0,0);width:100%;height:100%}";
var Button = /** @class */ (function () {
    function Button(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
        this.colour = 'default'; //ColourEnums.default;
        this.icon = null;
        this.iconPosition = 'default'; //PositionEnums.default;
        this.buttonId = null;
        this.buttonType = 'button'; //PositionEnums.default;
        this.disabled = false;
    }
    Button.prototype.render = function () {
        var icon = null;
        if (this.icon) {
            var IconTag = "tf-icon-" + this.icon;
            icon = h(IconTag, { class: "icon-" + this.size + "-" + (this.iconPosition === 'right' ? 'r' : 'l') });
        }
        return (h("span", { id: "button-containing-span" }, h("button", { class: "tw-btn size-" + this.size + " colour-" + this.colour + " " + (this.disabled ? 'disabled' : ''), type: this.buttonType, id: this.buttonId, disabled: this.disabled }, (icon && (this.iconPosition == 'left' || this.iconPosition == 'default')) &&
            icon, h("slot", null), (icon && this.iconPosition == 'right') &&
            icon)));
    };
    return Button;
}());
Button.style = buttonCss;
var clientLogoCss = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px}.client-logo-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}";
var AppHeader$1 = /** @class */ (function () {
    function AppHeader$1(hostRef) {
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
    AppHeader$1.prototype.userAccountMenuItemsPropChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setDropdownItems();
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
    AppHeader$1.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    AppHeader$1.prototype.componentWillLoad = function () {
        this.setDropdownItems();
    };
    AppHeader$1.prototype.setDropdownItems = function () {
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
            })))));
        }
        //
        return (h("div", { class: "outer-container" }, h("div", { class: "client-logo-container" }, h("div", { class: "client-logo" }, h("img", { class: "client-logo-image", src: this.clientLogoSource })), userAccount), userAccountDropdown));
    };
    Object.defineProperty(AppHeader$1, "watchers", {
        get: function () {
            return {
                "userAccountMenuItems": ["userAccountMenuItemsPropChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return AppHeader$1;
}());
AppHeader$1.style = clientLogoCss;
var dropdownLinkCss = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.dd-link:focus,.dd-link:hover{background-color:#b1bdc1}.dd-link:focus{outline:0}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;line-height:1.25rem}";
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
        return (h("div", { onClick: this.onDropdownOptionClicked.bind(this), "element-title": !this.elementTitle ? "" + this.value : this.elementTitle, class: "dd-link dd-link-" + this.colour }, h("span", { class: "dd-link-title" }, h("slot", null))));
    };
    return DropdownRenderedOption;
}());
DropdownRenderedOption.style = dropdownLinkCss;
var formStylesCss = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormCard = /** @class */ (function () {
    function FormCard(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    FormCard.prototype.render = function () {
        return (h("div", { class: "\n\t\t\t\t\tform-card \n\t\t\t\t\t" + (this.colour === "white" ? "colour-white"
                : this.colour === "blue" ? "colour-blue"
                    : this.colour === "aqua" ? "colour-aqua"
                        : this.colour === "grey" ? "colour-grey"
                            : this.colour === "navy" ? "colour-navy"
                                : "colour-default") + " \n\t\t\t\t" }, h("slot", null)));
    };
    return FormCard;
}());
FormCard.style = formStylesCss;
var formStylesCss$1 = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormTitle = /** @class */ (function () {
    function FormTitle(hostRef) {
        registerInstance(this, hostRef);
    }
    FormTitle.prototype.render = function () {
        return (h("div", { class: "form-title" }, h("slot", null)));
    };
    return FormTitle;
}());
FormTitle.style = formStylesCss$1;
var formStylesCss$2 = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormTitle$1 = /** @class */ (function () {
    function FormTitle$1(hostRef) {
        registerInstance(this, hostRef);
    }
    FormTitle$1.prototype.render = function () {
        return (h("div", { class: "form-wrapper" }, h("slot", null)));
    };
    return FormTitle$1;
}());
FormTitle$1.style = formStylesCss$2;
var elementsCss$1 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var HOneTag = /** @class */ (function () {
    function HOneTag(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    HOneTag.prototype.render = function () {
        return (h("h2", { class: "tag-h1 color-" + this.colour + " text-align-" + this.textAlign }, h("slot", null)));
    };
    return HOneTag;
}());
HOneTag.style = elementsCss$1;
var elementsCss$2 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var HTwoTag = /** @class */ (function () {
    function HTwoTag(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    HTwoTag.prototype.render = function () {
        return (h("h2", { class: "tag-h2 color-" + this.colour + " text-align-" + this.textAlign }, h("slot", null)));
    };
    return HTwoTag;
}());
HTwoTag.style = elementsCss$2;
var buttonCss$1 = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.tw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.colour-blue,.colour-default{color:#fff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260a4}.colour-blue:active,.colour-default:active{outline:0;border-color:#32f7dc;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45);background-color:#1e3d85}.colour-blue:focus,.colour-default:focus{outline:0;border-color:#1e3d85;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-aqua{outline:0;color:#122551;background-color:#32f7dc}.colour-aqua:hover{outline:0;background-color:#84faea}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2ad2bb}.colour-aqua:focus{outline:0;border-color:#2ad2bb;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:active{border-color:#363154;background-color:#25223a}.colour-navy:active,.colour-navy:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy:focus{border-color:#25223a}.colour-grey{color:#122551;background-color:#d0dfe3}.colour-grey:hover{background-color:#d7e3e7}.colour-grey:active{border-color:#d0dfe3;background-color:#b1bdc1}.colour-grey:active,.colour-grey:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-grey:focus{border-color:#b1bdc1}.colour-white{color:#122551;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:active{border-color:#ecf2f3;background-color:#e7eff1}.colour-white:active,.colour-white:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-white:focus{border-color:#e7eff1}.disabled,.disabled:hover{color:#b1bdc1;background-color:#e7eff1}.hex-container{display:-ms-flexbox;display:flex;position:relative}.central-icon{position:absolute;z-index:50;pointer-events:none}.hex-btn{padding:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border:1px transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;background-color:transparent}.hex-btn,.hex-fill,.hex-outline{-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.hex-fill,.hex-outline{fill:currentColor}.hex-btn:hover{border-style:none;background-color:transparent}.hex-btn:active,.hex-btn:focus{border-style:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.hexagon{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:40}.hexagon-svg{fill:rgba(255,255,0,0);width:100%;height:100%}";
var Button$1 = /** @class */ (function () {
    function Button$1(hostRef) {
        registerInstance(this, hostRef);
        this.buttonId = null;
        this.size = 'default';
        this.colour = 'default';
        this.outlineColour = null;
        this.icon = null;
        //
        this.buttonType = 'button';
        this.disabled = false;
    }
    Button$1.prototype.render = function () {
        var IconTag = "tf-icon-" + this.icon;
        var icon = h(IconTag, { class: "central-icon icon-size-" + this.size });
        return (h("div", { class: "hex-container icon-btn-size-" + this.size }, h("button", { class: "hex-btn size-" + this.size + " colour-" + this.colour + " " + (this.disabled ? 'disabled' : ''), type: this.buttonType, id: this.buttonId, disabled: this.disabled }, icon, h("div", { class: "hexagon" }, h("svg", { class: "hexagon-svg", viewBox: "0 0 44 50", xmlns: "http://www.w3.org/2000/svg" }, h("g", { stroke: "none", "stroke-width": "0", fill: "none", "fill-rule": "evenodd" }, h("path", { class: "hex-outline svg-colour-" + (!this.outlineColour ? this.colour : this.outlineColour), d: "M22.0051334,50 C20.9875773,50 19.94393,49.7081067 19.0307386,49.12432 L2.85420568,39.6510548 C1.00173174,38.642696 -0.12018909,36.5994427 0.0102668206,34.4500464 L0.0102668206,15.5300517 C-0.12018909,13.3806554 1.00173174,11.3374021 2.88029686,10.3025076 L19.0307386,0.855778161 C20.8310302,-0.285259387 23.1792366,-0.285259387 24.9795282,0.855778161 L41.1560611,10.3290434 C42.9302615,11.4435452 44,13.4071912 44,15.503516 L44,34.4765822 C44,36.572907 42.9302615,38.5630888 41.1821523,39.6510548 L24.9795282,49.1508558 C24.0663368,49.7081067 23.0487807,50 22.0051334,50 Z" }), h("path", { class: "hex-fill svg-colour-" + this.colour, d: "M21.991651,2 C21.2515462,2 20.5114415,2.20861678 19.8734201,2.62585034 L19.8478993,2.65192744 L4.0249702,11.9353741 C2.69788582,12.6655329 1.90673937,14.0997732 2.00882278,15.6122449 L2.00882278,15.6643991 L2.00882278,34.361678 C1.90673937,35.8741497 2.69788582,37.30839 3.99944934,38.0385488 L19.8734201,47.3741497 C21.1749837,48.2086168 22.8083183,48.2086168 24.1098818,47.3741497 L24.1354026,47.3480726 L39.9838526,38.0385488 C41.2343744,37.2562358 42,35.8219955 42,34.3095238 L42,15.6904762 C42,14.1780045 41.2343744,12.7437642 39.9583317,11.9353741 L24.1098818,2.59977324 C23.4718605,2.20861678 22.7317557,2 21.991651,2 Z" })))))));
    };
    return Button$1;
}());
Button$1.style = buttonCss$1;
var iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon = /** @class */ (function () {
    function SVGIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("g", { transform: "translate(8.000000, 2.000000)" }, h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "0 0 4 0 4 10 0 10" }), h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "0 12 4 12 4 16 0 16" }))));
    };
    return SVGIcon;
}());
SVGIcon.style = iconsCss;
var inputCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}*,input,input[type=password],input[type=text]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input::-webkit-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-input::-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder,.form-input::-moz-placeholder,.form-input::-ms-input-placeholder,.form-input::-webkit-input-placeholder,.form-input::placeholder{color:#d7e3e7;opacity:1}.form-input.form-input-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error::-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder,.form-input.form-input-error::-moz-placeholder,.form-input.form-input-error::-ms-input-placeholder,.form-input.form-input-error::-webkit-input-placeholder,.form-input.form-input-error::placeholder{color:#f8b4b4;opacity:1}.form-input:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-input-styled{display:block;width:100%}.form-input-error{color:#771d1d;border-color:#f8b4b4}.form-input-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.form-input-leading-icon{padding-left:2.5rem}.form-input-trailing-icon{padding-right:2.5rem}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}.svg-container{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none}.svg-leading{top:0;bottom:0;left:0;padding-left:.75rem}.svg-trailing{top:0;bottom:0;right:0;padding-right:.75rem}.svg-icon{color:#9fa6b2}.svg-error-icon,.svg-icon{height:1.25rem;width:1.25rem}.svg-error-icon{color:#f98080}@media (min-width:640px){.form-input-styled{font-size:.875rem;line-height:1.25rem}}";
var List = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
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
        this.tfOnInput = createEvent(this, "tfOnInput", 7);
    }
    class_1.prototype.errorChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    };
    class_1.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.value];
                }
                catch (e) {
                    throw "Can't find itemRef.value for " + this.name + " tf-input. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getItemRef = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef];
                }
                catch (e) {
                    throw "Can't find itemRef for " + this.name + " tf-input. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
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
    };
    class_1.prototype.onUserInput = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getValue()];
                    case 1:
                        _a.value = _b.sent();
                        this.tfOnInput.emit({
                            id: this.name,
                            value: this.value,
                            proxyEvent: Object.assign({}, event)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.setError = function () {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the input field';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_1.prototype.render = function () {
        var _this = this;
        var bottomText = null;
        if (this.showHint) {
            bottomText = h("p", { class: "hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "error" }, this.errorMessage);
        }
        //
        var leadingSVG = null;
        var trailingSVG = null;
        var IconTag = null;
        //
        if (this.showLeadingIcon || this.showTrailingIcon) {
            IconTag = "tf-icon-" + this.icon;
        }
        if (this.showLeadingIcon) {
            leadingSVG = (h("div", { class: "svg-container svg-leading" }, h(IconTag, { class: "svg-icon" })));
        }
        //
        if (this.showTrailingIcon) {
            trailingSVG = (h("div", { class: "svg-container svg-trailing" }, h(IconTag, { class: "svg-icon" })));
        }
        else if (this.showErrorIcon) {
            trailingSVG = (h("div", { class: "svg-container svg-trailing" }, h("tf-icon-exclamation", { class: "svg-error-icon" })));
        }
        //
        return (h("div", { class: "label-input-container" }, h("label", { class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only'), htmlFor: this.name }, this.label), h("div", { class: "input-container" }, leadingSVG, h("input", { id: this.name, ref: function (el) { return _this.itemRef = el; }, class: "\n\t\t\t\t\t\t\tform-input \n\t\t\t\t\t\t\tform-input-styled \n\t\t\t\t\t\t\t" + (this.showError ? 'form-input-error' : '') + " \n\t\t\t\t\t\t\t" + (this.showLeadingIcon ? 'form-input-leading-icon' : '') + " \n\t\t\t\t\t\t\t" + (this.showTrailingIcon || this.showErrorIcon ? 'form-input-trailing-icon' : '') + "\n\t\t\t\t\t\t", placeholder: this.placeholder, required: this.required, type: this.inputType, value: this.value, autoComplete: this.autoComplete, onInput: this.onUserInput.bind(this) }), trailingSVG), bottomText));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "error": ["errorChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
List.style = inputCss;
var loginFormCss = ".login-container{margin-bottom:1.5rem;min-height:100%;background-color:#fff;border-radius:.5rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:3rem 1.25rem;margin-left:auto;margin-right:auto}.login-header{border-bottom:4px;border-style:solid;border-color:#32f7dc}.login-body{margin-top:2rem}.login-footer{margin-top:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.form-container{background-color:#fff;padding-bottom:2rem}.link-container{font-size:.875rem;line-height:1.25rem}.header-2{margin-top:1rem;margin-bottom:1rem;font-size:1.875rem;line-height:2.25rem;font-weight:800;color:#363154}@media (min-width:640px){.login-container{width:40%;padding-left:1.5rem;padding-right:1.5rem}.login-body,.login-header{margin-left:auto;margin-right:auto;width:100%}.form-container{border-radius:.5rem}}@media (min-width:1024px){.login-container{padding-left:2rem;padding-right:2rem}}";
var LoginForm = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.loading = false;
        this.formValid = false;
        this.values = {
            email: null,
            password: null,
        };
        this.forgottenUrl = null;
        this.apiEndpoint = null;
        this.apiMethod = "POST";
        this.apiHeaders = null;
        this.bodyPropEmail = "email";
        this.bodyPropPassword = "password";
        this.emailInputRef = null;
        this.passwordInputRef = null;
        this.tfLoginSuccess = createEvent(this, "tfLoginSuccess", 7);
    }
    class_2.prototype.onLogin = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var email, passwordRef;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        return [4 /*yield*/, this.emailInputRef.getValue()];
                    case 1:
                        email = _a.sent();
                        return [4 /*yield*/, this.passwordInputRef.getItemRef()];
                    case 2:
                        passwordRef = _a.sent();
                        this.fetchAPI(email, passwordRef.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.fetchAPI = function (email, password) {
        var _a;
        var _this = this;
        this.loading = true;
        if (!this.apiEndpoint) {
            this.error = "No endpoint 'api-enpoint' declared";
            this.loading = false;
            return;
        }
        // use axios
        var opts = (_a = {},
            _a[this.bodyPropEmail] = email,
            _a[this.bodyPropPassword] = password,
            _a);
        var headers = {};
        if (this.apiHeaders) {
            var h_1 = JSON.parse(this.apiHeaders.replace(/'/g, '"'));
            if (!this.isEmpty(h_1)) {
                headers = Object.assign({}, h_1);
            }
        }
        fetch(this.apiEndpoint, {
            method: this.apiMethod,
            body: JSON.stringify(opts),
            headers: headers,
        })
            .then(function (res) {
            if (res.status !== 200) {
                throw new Error('Invalid!');
            }
            return res.json();
        })
            .then(function (parsedRes) {
            _this.tfLoginSuccess.emit(parsedRes);
            // this.error = null;
            _this.loading = false;
        })
            .catch(function (err) {
            console.log(err);
            // this.error = err.message;
            _this.loading = false;
        });
    };
    class_2.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    class_2.prototype.onUserInput = function (event) {
        var input = event.target;
        this.values[input.id] = input.value.trim();
        //
        if (!this.values.email || !this.values.password) {
            this.formValid = false;
            return;
        }
        this.formValid = this.values.email.length > 0 && this.values.password.length > 0;
    };
    class_2.prototype.render = function () {
        var _this = this;
        var forgotten = null;
        if (this.forgottenUrl) {
            forgotten = h("tf-a-tag", { slot: "flex", url: this.forgottenUrl, "tag-title": "Forgot your password?" }, "Forgot your password?");
        }
        console.log(" ------------- ");
        console.log(forgotten);
        return (h("tf-form-card", null, h("tf-form-title", null, h("tf-h1", null, "Login")), h("tf-form-wrapper", null, h("form", { onSubmit: this.onLogin.bind(this) }, h("tf-input", { name: "email", "input-type": "email", "item-required": true, label: "Email Address", ref: function (el) { return _this.emailInputRef = el; }, "input-value": this.values.email, onInput: this.onUserInput.bind(this), autoComplete: "email" }), h("tf-input", { name: "password", "input-type": "password", "item-required": true, label: "Password", ref: function (el) { return _this.passwordInputRef = el; }, onInput: this.onUserInput.bind(this), autoComplete: "on" }), h("tf-node-flex-fxr", null, forgotten, h("tf-button", { slot: "fxr", colour: "aqua", "button-type": "submit" }, "Login"))))));
    };
    return class_2;
}());
LoginForm.style = loginFormCss;
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
var nodeCss = "#node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl{margin-right:1rem}#flex,#fxl{display:-ms-flexbox;display:flex}#flex{-ms-flex:1 1 0%;flex:1 1 0%}#fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node = /** @class */ (function () {
    function Node(hostRef) {
        registerInstance(this, hostRef);
        this.rWidth = null;
    }
    Node.prototype.render = function () {
        var stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        return (h("div", { id: "base-node" }, h("div", { id: "flex" }, h("slot", { name: "flex" })), h("div", { id: "fxr", style: stylesR }, h("slot", { name: "fxr" }))));
    };
    return Node;
}());
Node.style = nodeCss;
var elementsCss$3 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var PTag = /** @class */ (function () {
    function PTag(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    PTag.prototype.render = function () {
        return (h("p", { class: "tag-p color-" + this.colour + " text-align-" + this.textAlign }, h("slot", null)));
    };
    return PTag;
}());
PTag.style = elementsCss$3;
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
var productCss = ".product-icon,.product-logo{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.product-logo{-webkit-transform:scale(1.185);transform:scale(1.185)}.product-logo svg{width:100%;height:100%;fill:transparent}.colour-default,.colour-white{color:#fff}.colour-navy{color:#363154}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.initials{display:-ms-flexbox;display:flex;position:absolute;z-index:5;text-transform:uppercase;font-weight:400;text-align:center}";
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
        return (h("div", { class: "product-logo colour-" + this.colour + " size-" + this.size }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200" }, h("linearGradient", { id: "grad", x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, h("stop", { offset: "0%", "stop-color": "#005fab" }), h("stop", { offset: "30%", "stop-color": "#004997" }), h("stop", { offset: "67%", "stop-color": "#00297a" }), h("stop", { offset: "89%", "stop-color": "#00297a" }), h("stop", { offset: "89%", "stop-color": "#00287a" }), h("stop", { offset: "100%", "stop-color": "#161b4b" })), h("path", { fill: this.colour === "gradient" ? "url(#grad)" : "currentColor", stroke: "currentColor", transform: this.asOutline ? '' : "translate(12 5)", d: this.asOutline ? outlineData : fillData }), h("g", { class: initialsColourClass }, content)), initialsFallback));
    };
    return ProductOutline;
}());
ProductOutline.style = productCss;
var elementsCss$4 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var SpanBold = /** @class */ (function () {
    function SpanBold(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    SpanBold.prototype.render = function () {
        return (h("span", { class: "span-bold color-" + this.colour + " text-align-" + this.textAlign }, h("slot", null)));
    };
    return SpanBold;
}());
SpanBold.style = elementsCss$4;
var elementsCss$5 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var SpanItalic = /** @class */ (function () {
    function SpanItalic(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    SpanItalic.prototype.render = function () {
        return (h("span", { class: "span-italic color-" + this.colour + " text-align-" + this.textAlign }, h("slot", null)));
    };
    return SpanItalic;
}());
SpanItalic.style = elementsCss$5;
var elementsCss$6 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var SpanItalicBold = /** @class */ (function () {
    function SpanItalicBold(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    SpanItalicBold.prototype.render = function () {
        return (h("span", { class: "span-italic-bold color-" + this.colour + " text-align-" + this.textAlign }, h("slot", null)));
    };
    return SpanItalicBold;
}());
SpanItalicBold.style = elementsCss$6;
var elementsCss$7 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var SpanNormal = /** @class */ (function () {
    function SpanNormal(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    SpanNormal.prototype.render = function () {
        return (h("span", { class: "span-normal color-" + this.colour + " text-align-" + this.textAlign }, h("slot", null)));
    };
    return SpanNormal;
}());
SpanNormal.style = elementsCss$7;
export { ATag as tf_a, AnchorTag as tf_a_tag, AppHeader as tf_app_base_header, Button as tf_button, AppHeader$1 as tf_client_logo, DropdownRenderedOption as tf_dropdown_rendered_option, FormCard as tf_form_card, FormTitle as tf_form_title, FormTitle$1 as tf_form_wrapper, HOneTag as tf_h1, HTwoTag as tf_h2, Button$1 as tf_icon_button, SVGIcon as tf_icon_exclamation, List as tf_input, LoginForm as tf_login_form, MainContent as tf_main_content, Node as tf_node_flex_fxr, PTag as tf_p, ProductOutline as tf_product_logo, SpanBold as tf_span_bold, SpanItalic as tf_span_italic, SpanItalicBold as tf_span_italic_bold, SpanNormal as tf_span_normal };
