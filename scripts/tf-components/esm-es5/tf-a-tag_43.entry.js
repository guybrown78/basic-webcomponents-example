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
import { r as registerInstance, h, c as createEvent, g as getElement } from './core-61a8ff81.js';
var ListWrappingCell = /** @class */ (function () {
    function ListWrappingCell(hostRef) {
        registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
    }
    ListWrappingCell.prototype.render = function () {
        return (h("a", { href: this.url, title: this.tagTitle }, h("slot", null)));
    };
    Object.defineProperty(ListWrappingCell, "style", {
        get: function () { return "a{font-weight:500;color:#224595;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}a:hover{color:#4260a4}a:focus{outline:0;text-decoration:underline}"; },
        enumerable: true,
        configurable: true
    });
    return ListWrappingCell;
}());
var AppHeader = /** @class */ (function () {
    function AppHeader(hostRef) {
        registerInstance(this, hostRef);
        this.tfAppLogoClicked = createEvent(this, "tfAppLogoClicked", 7);
    }
    AppHeader.prototype.onButtonClickHandler = function (event) {
        event.preventDefault();
        this.tfAppLogoClicked.emit();
    };
    AppHeader.prototype.render = function () {
        return (h("header", null, h("div", { id: "app-logo-container" }, h("div", { id: "app-logo" }, h("tf-hexagon-button", { color: "gradient", id: "app-logo-icon", onClick: this.onButtonClickHandler.bind(this) }, h("div", { id: "app-logo-initials" }, this.appInitials)), h("h1", { id: "app-logo-title" }, this.appTitle))), h("div", { id: "central-contailer" }, h("div", { id: "app-logo" }, h("tf-hexagon-button", { color: "accent", id: "app-logo-icon" }, h("div", { id: "quick-link-icon" }, "+")))), h("div", { id: "client-logo-container" }, h("div", { id: "client-logo" }, h("img", { src: this.clientLogoSource })))));
    };
    Object.defineProperty(AppHeader, "style", {
        get: function () { return "header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;-ms-flex-pack:justify;justify-content:space-between}#app-logo-container,header{display:-ms-flexbox;display:flex}#app-logo-container{-ms-flex-align:end;align-items:flex-end}#app-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#app-logo-icon{width:2.813rem;height:3.125rem;min-width:45px}#app-logo-initials{color:#fff;text-transform:uppercase;font-weight:800;font-size:1.25rem;text-align:center}#app-logo-initials::selection{color:none;background:none}#app-logo-initials::-moz-selection{color:none;background:none}h1{margin:0 0 0 1.125rem;color:#fff;font-size:1.5rem;line-height:1.46;font-weight:400}\@media only screen and (max-width:640px){#app-logo-title{display:none}}#central-contailer{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;padding:0 3.125rem;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}#quick-link-icon{color:#363154;font-size:1.25rem;text-align:center}#quick-link-icon::selection{color:none;background:none}#quick-link-icon::-moz-selection{color:none;background:none}#client-logo-container{-ms-flex-direction:row;flex-direction:row;justify-self:flex-end;padding:0 .5rem;border-radius:0 0 5px 5px;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);background-color:#fff}#client-logo,#client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}#client-logo{width:112px;height:59px}#client-logo img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}#account-navigation-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:40px;height:59px}\@media only screen and (max-width:640px){#account-navigation-container{display:none}}#account-navigation-container tf-hexagon-button{width:27px;height:30px}"; },
        enumerable: true,
        configurable: true
    });
    return AppHeader;
}());
var Button = /** @class */ (function () {
    function Button(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
        this.colour = 'default'; //ColourEnums.default;
        this.icon = null;
        this.iconPosition = 'default'; //PositionEnums.default;
        this.buttonType = 'button'; //PositionEnums.default;
        this.disabled = false;
    }
    Button.prototype.render = function () {
        var icon = null;
        if (this.icon) {
            var IconTag = "tf-icon-" + this.icon;
            icon = h(IconTag, { class: "icon-" + this.size + "-" + (this.iconPosition === 'right' ? 'r' : 'l') });
        }
        return (h("span", null, h("button", { class: "tw-btn size-" + this.size + " colour-" + this.colour + " " + (this.disabled ? 'disabled' : ''), type: this.buttonType, disabled: this.disabled }, (icon && (this.iconPosition == 'left' || this.iconPosition == 'default')) &&
            icon, h("slot", null), (icon && this.iconPosition == 'right') &&
            icon)));
    };
    Object.defineProperty(Button, "style", {
        get: function () { return "span{border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.tw-btn,span{display:-ms-inline-flexbox;display:inline-flex}.tw-btn{-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}::slotted([slot=icon]){color:red}.size-extra-small,.size-xs{padding-left:.625rem;padding-right:.625rem;padding-top:.375rem;padding-bottom:.375rem;font-size:.75rem;line-height:1rem;border-radius:.25rem}.size-s,.size-small{padding-left:.75rem;padding-right:.75rem;line-height:1rem}.size-default,.size-m,.size-medium,.size-s,.size-small{padding-top:.5rem;padding-bottom:.5rem;font-size:.875rem;border-radius:.375rem}.size-default,.size-m,.size-medium{padding-left:1rem;padding-right:1rem;line-height:1.25rem}.size-l,.size-large{padding-left:1rem;padding-right:1rem;padding-top:.5rem;padding-bottom:.5rem}.size-extra-large,.size-l,.size-large,.size-xl{font-size:1rem;line-height:1.5rem;border-radius:.375rem}.size-extra-large,.size-xl{padding-left:1.5rem;padding-right:1.5rem;padding-top:.75rem;padding-bottom:.75rem}.colour-blue,.colour-default{color:#fff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260a4}.colour-blue:active,.colour-default:active{border-color:#32f7dc;background-color:#1e3d85}.colour-blue:active,.colour-blue:focus,.colour-default:active,.colour-default:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-blue:focus,.colour-default:focus{border-color:#1e3d85}.colour-aqua{outline:0;color:#122551;background-color:#32f7dc}.colour-aqua:hover{outline:0;background-color:#84faea}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2ad2bb}.colour-aqua:focus{outline:0;border-color:#2ad2bb;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:active{border-color:#363154;background-color:#25223a}.colour-navy:active,.colour-navy:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy:focus{border-color:#25223a}.colour-grey{color:#122551;background-color:#d0dfe3}.colour-grey:hover{background-color:#d7e3e7}.colour-grey:active{border-color:#d0dfe3;background-color:#b1bdc1}.colour-grey:active,.colour-grey:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-grey:focus{border-color:#b1bdc1}.disabled,.disabled:hover{color:#b1bdc1;background-color:#e5edef}.icon-extra-small-l,.icon-xs-l{margin-left:-.125rem;margin-right:.5rem;height:1rem;width:1rem}.icon-extra-small-r,.icon-xs-r{margin-left:.5rem;margin-right:-.125rem;height:1rem;width:1rem}.icon-s-l,.icon-small-l{margin-left:-.125rem;margin-right:.5rem;height:1rem;width:1rem}.icon-s-r,.icon-small-r{margin-left:.5rem;margin-right:-.125rem;height:1rem;width:1rem}.icon-default-l,.icon-m-l,.icon-medium-l{margin-left:-.25rem;margin-right:.5rem;height:1.25rem;width:1.25rem}.icon-default-r,.icon-m-r,.icon-medium-r{margin-left:.5rem;margin-right:-.25rem;height:1.25rem;width:1.25rem}.icon-l-l,.icon-large-l{margin-left:-.25rem;margin-right:.75rem;height:1.25rem;width:1.25rem}.icon-l-r,.icon-large-r{margin-left:.75rem;margin-right:-.25rem;height:1.25rem;width:1.25rem}.icon-extra-large-l,.icon-xl-l{margin-left:-.25rem;margin-right:.75rem;height:1.25rem;width:1.25rem}.icon-extra-large-r,.icon-xl-r{margin-left:.75rem;margin-right:-.25rem;height:1.25rem;width:1.25rem}"; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
var Card = /** @class */ (function () {
    function Card(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    Card.prototype.render = function () {
        return (h("section", { class: this.colour }, h("slot", null)));
    };
    Object.defineProperty(Card, "style", {
        get: function () { return "section{padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16)}section.default,section.grey{background-color:#d0dfe3}section.navy{background-color:#363154}"; },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
var HexagonButton = /** @class */ (function () {
    function HexagonButton(hostRef) {
        registerInstance(this, hostRef);
        this.color = "accent";
    }
    HexagonButton.prototype.onButtonClickHandler = function (event) {
        var _this = this;
        // pauses the native event from being dispatched to allow the 'click' effect on the button
        event.preventDefault();
        event.stopPropagation();
        setTimeout(function () {
            _this.el.dispatchEvent(event);
        }, 500);
    };
    HexagonButton.prototype.render = function () {
        return (h("button", { tabindex: "0", role: "button", "aria-pressed": "false", class: "sass-hex " + this.color, onClick: this.onButtonClickHandler.bind(this) }, h("slot", null)));
    };
    Object.defineProperty(HexagonButton.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HexagonButton, "style", {
        get: function () { return ":host{position:relative}::slotted(*),:host{display:-ms-flexbox;display:flex}::slotted(*){width:100%;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none}button{border:none;display:-ms-flexbox;display:flex;padding:0;margin:0;position:absolute;top:0;left:-3px;width:114%;height:102%;-webkit-clip-path:polygon(44% 1.6076951546%,44.5521140031% 1.3079217097%,45.1191602831% 1.0374545083%,45.6995846055% .797034882%,46.2917960675% .5873218045%,46.8941714588% .4088900845%,47.5050597102% .2622287912%,48.1227864195% .1477399129%,48.7456584408% .0657372556%,49.3719685251% .0164455829%,50% 0,50.6280314749% .0164455829%,51.2543415592% .0657372556%,51.8772135805% .1477399129%,52.4949402898% .2622287912%,53.1058285412% .4088900845%,53.7082039325% .5873218045%,54.3004153945% .797034882%,54.8808397169% 1.0374545083%,55.4478859969% 1.3079217097%,56% 1.6076951546%,88.9089653438% 20.6076951546%,89.444633764% 20.9359531847%,89.9623883713% 21.2917960675%,90.4608100364% 21.6742484625%,90.9385326201% 22.0822620943%,91.394246718% 22.5147186258%,91.8267032495% 22.9704327237%,92.2347168813% 23.4481553074%,92.6171692763% 23.9465769725%,92.9730121592% 24.4643315798%,93.3012701892% 25%,93.6010436341% 25.5521140031%,93.8715108355% 26.1191602831%,94.1119304618% 26.6995846055%,94.3216435393% 27.2917960675%,94.5000752593% 27.8941714588%,94.6467365526% 28.5050597102%,94.7612254309% 29.1227864195%,94.8432280882% 29.7456584408%,94.8925197609% 30.3719685251%,94.9089653438% 31%,94.9089653438% 69%,94.8925197609% 69.6280314749%,94.8432280882% 70.2543415592%,94.7612254309% 70.8772135805%,94.6467365526% 71.4949402898%,94.5000752593% 72.1058285412%,94.3216435393% 72.7082039325%,94.1119304618% 73.3004153945%,93.8715108355% 73.8808397169%,93.6010436341% 74.4478859969%,93.3012701892% 75%,92.9730121592% 75.5356684202%,92.6171692763% 76.0534230275%,92.2347168813% 76.5518446926%,91.8267032495% 77.0295672763%,91.394246718% 77.4852813742%,90.9385326201% 77.9177379057%,90.4608100364% 78.3257515375%,89.9623883713% 78.7082039325%,89.444633764% 79.0640468153%,88.9089653438% 79.3923048454%,56% 98.3923048454%,55.4478859969% 98.6920782903%,54.8808397169% 98.9625454917%,54.3004153945% 99.202965118%,53.7082039325% 99.4126781955%,53.1058285412% 99.5911099155%,52.4949402898% 99.7377712088%,51.8772135805% 99.8522600871%,51.2543415592% 99.9342627444%,50.6280314749% 99.9835544171%,50% 100%,49.3719685251% 99.9835544171%,48.7456584408% 99.9342627444%,48.1227864195% 99.8522600871%,47.5050597102% 99.7377712088%,46.8941714588% 99.5911099155%,46.2917960675% 99.4126781955%,45.6995846055% 99.202965118%,45.1191602831% 98.9625454917%,44.5521140031% 98.6920782903%,44% 98.3923048454%,11.0910346562% 79.3923048454%,10.5553662361% 79.0640468153%,10.0376116287% 78.7082039325%,9.5391899636% 78.3257515375%,9.0614673799% 77.9177379057%,8.605753282% 77.4852813742%,8.1732967505% 77.0295672763%,7.7652831188% 76.5518446926%,7.3828307237% 76.0534230275%,7.0269878409% 75.5356684202%,6.6987298108% 75%,6.398956366% 74.4478859969%,6.1284891646% 73.8808397169%,5.8880695383% 73.3004153945%,5.6783564608% 72.7082039325%,5.4999247409% 72.1058285412%,5.3532634476% 71.4949402898%,5.2387745694% 70.8772135805%,5.1567719123% 70.2543415593%,5.1074802398% 69.628031475%,5.0910346571% 69.0000000001%,5.091034742% 31.0000000137%,5.1074803253% 30.3719685388%,5.1567719985% 29.7456584546%,5.2387746566% 29.1227864334%,5.353263536% 28.5050597243%,5.4999248308% 27.8941714731%,5.6783565529% 27.2917960821%,5.8880696333% 26.6995846206%,6.1284892635% 26.1191602988%,6.3989564703% 25.5521140197%,6.6987299224% 25.0000000178%,7.0269879623% 24.4643315993%,7.3828308583% 23.9465769942%,7.7652832709% 23.4481553321%,8.1732969261% 22.9704327525%,8.6057534886% 22.5147186601%,9.0614676277% 22.0822621361%,9.5391902655% 21.6742485142%,10.0376120016% 21.2917961323%,10.5553667018% 20.9359532669%,11.0910352431% 20.6076952598%);clip-path:polygon(44% 1.6076951546%,44.5521140031% 1.3079217097%,45.1191602831% 1.0374545083%,45.6995846055% .797034882%,46.2917960675% .5873218045%,46.8941714588% .4088900845%,47.5050597102% .2622287912%,48.1227864195% .1477399129%,48.7456584408% .0657372556%,49.3719685251% .0164455829%,50% 0,50.6280314749% .0164455829%,51.2543415592% .0657372556%,51.8772135805% .1477399129%,52.4949402898% .2622287912%,53.1058285412% .4088900845%,53.7082039325% .5873218045%,54.3004153945% .797034882%,54.8808397169% 1.0374545083%,55.4478859969% 1.3079217097%,56% 1.6076951546%,88.9089653438% 20.6076951546%,89.444633764% 20.9359531847%,89.9623883713% 21.2917960675%,90.4608100364% 21.6742484625%,90.9385326201% 22.0822620943%,91.394246718% 22.5147186258%,91.8267032495% 22.9704327237%,92.2347168813% 23.4481553074%,92.6171692763% 23.9465769725%,92.9730121592% 24.4643315798%,93.3012701892% 25%,93.6010436341% 25.5521140031%,93.8715108355% 26.1191602831%,94.1119304618% 26.6995846055%,94.3216435393% 27.2917960675%,94.5000752593% 27.8941714588%,94.6467365526% 28.5050597102%,94.7612254309% 29.1227864195%,94.8432280882% 29.7456584408%,94.8925197609% 30.3719685251%,94.9089653438% 31%,94.9089653438% 69%,94.8925197609% 69.6280314749%,94.8432280882% 70.2543415592%,94.7612254309% 70.8772135805%,94.6467365526% 71.4949402898%,94.5000752593% 72.1058285412%,94.3216435393% 72.7082039325%,94.1119304618% 73.3004153945%,93.8715108355% 73.8808397169%,93.6010436341% 74.4478859969%,93.3012701892% 75%,92.9730121592% 75.5356684202%,92.6171692763% 76.0534230275%,92.2347168813% 76.5518446926%,91.8267032495% 77.0295672763%,91.394246718% 77.4852813742%,90.9385326201% 77.9177379057%,90.4608100364% 78.3257515375%,89.9623883713% 78.7082039325%,89.444633764% 79.0640468153%,88.9089653438% 79.3923048454%,56% 98.3923048454%,55.4478859969% 98.6920782903%,54.8808397169% 98.9625454917%,54.3004153945% 99.202965118%,53.7082039325% 99.4126781955%,53.1058285412% 99.5911099155%,52.4949402898% 99.7377712088%,51.8772135805% 99.8522600871%,51.2543415592% 99.9342627444%,50.6280314749% 99.9835544171%,50% 100%,49.3719685251% 99.9835544171%,48.7456584408% 99.9342627444%,48.1227864195% 99.8522600871%,47.5050597102% 99.7377712088%,46.8941714588% 99.5911099155%,46.2917960675% 99.4126781955%,45.6995846055% 99.202965118%,45.1191602831% 98.9625454917%,44.5521140031% 98.6920782903%,44% 98.3923048454%,11.0910346562% 79.3923048454%,10.5553662361% 79.0640468153%,10.0376116287% 78.7082039325%,9.5391899636% 78.3257515375%,9.0614673799% 77.9177379057%,8.605753282% 77.4852813742%,8.1732967505% 77.0295672763%,7.7652831188% 76.5518446926%,7.3828307237% 76.0534230275%,7.0269878409% 75.5356684202%,6.6987298108% 75%,6.398956366% 74.4478859969%,6.1284891646% 73.8808397169%,5.8880695383% 73.3004153945%,5.6783564608% 72.7082039325%,5.4999247409% 72.1058285412%,5.3532634476% 71.4949402898%,5.2387745694% 70.8772135805%,5.1567719123% 70.2543415593%,5.1074802398% 69.628031475%,5.0910346571% 69.0000000001%,5.091034742% 31.0000000137%,5.1074803253% 30.3719685388%,5.1567719985% 29.7456584546%,5.2387746566% 29.1227864334%,5.353263536% 28.5050597243%,5.4999248308% 27.8941714731%,5.6783565529% 27.2917960821%,5.8880696333% 26.6995846206%,6.1284892635% 26.1191602988%,6.3989564703% 25.5521140197%,6.6987299224% 25.0000000178%,7.0269879623% 24.4643315993%,7.3828308583% 23.9465769942%,7.7652832709% 23.4481553321%,8.1732969261% 22.9704327525%,8.6057534886% 22.5147186601%,9.0614676277% 22.0822621361%,9.5391902655% 21.6742485142%,10.0376120016% 21.2917961323%,10.5553667018% 20.9359532669%,11.0910352431% 20.6076952598%)}button.white{background:#fff;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}button.white:hover{background:#e6e6e6;background-color:#e6e6e6;color:#fff}button.white:active,button.white:focus{background:#fff;background-color:#fff;color:#fff}button.primary{background:#224595;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}button.primary:hover{background:#19326b;background-color:#19326b;color:#fff}button.primary:active{background:#3b69d2;background-color:#3b69d2;color:#fff}button.primary:focus{background:#224595;background-color:#224595;color:#fff}button.accent{background:#32f7dc;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}button.accent:hover{background:#07bca3;background-color:#07bca3;color:#fff}button.accent:active{background:#c5fdf5;background-color:#c5fdf5;color:#fff}button.accent:focus{background:#32f7dc;background-color:#32f7dc;color:#fff}button.grey{background:#d0dfe3;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}button.grey:hover{background:#b0c9d0;background-color:#b0c9d0;color:#fff}button.grey:active{background:#fff;background-color:#fff;color:#fff}button.grey:focus{background:#d0dfe3;background-color:#d0dfe3;color:#fff}button.dark{background:#363154;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}button.dark:hover{background:#4b4474;background-color:#4b4474;color:#fff}button.dark:active{background:#7a72ac;background-color:#7a72ac;color:#fff}button.dark:focus{background:#363154;background-color:#363154;color:#fff}button.white-dark{background:#fff;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}button.white-dark:hover{background:#4b4474;background-color:#4b4474;color:#fff}button.white-dark:active{background:#7a72ac;background-color:#7a72ac;color:#fff}button.white-dark:focus{background:#363154;background-color:#363154;color:#fff}button.gradient{background:#224595;background-image:-webkit-gradient(linear,left top,right top,from(#005fab),color-stop(30%,#004997),color-stop(67%,#00297a),color-stop(89%,#00297a),color-stop(89%,#00287a),to(#161b4b));background-image:linear-gradient(90deg,#005fab 0,#004997 30%,#00297a 67%,#00297a 89%,#00287a 0,#161b4b);cursor:pointer;outline:none;-webkit-transition:background-image .8s;transition:background-image .8s;background-position:50%}"; },
        enumerable: true,
        configurable: true
    });
    return HexagonButton;
}());
var SVGIcon = /** @class */ (function () {
    function SVGIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M0 11l2-2 5 5L18 3l2 2L7 18z" })));
    };
    Object.defineProperty(SVGIcon, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return SVGIcon;
}());
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
    Object.defineProperty(ChevronDown, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return ChevronDown;
}());
var SVGIcon$1 = /** @class */ (function () {
    function SVGIcon$1(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$1.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" })));
    };
    Object.defineProperty(SVGIcon$1, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return SVGIcon$1;
}());
var SVGIcon$2 = /** @class */ (function () {
    function SVGIcon$2(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$2.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" })));
    };
    Object.defineProperty(SVGIcon$2, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return SVGIcon$2;
}());
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
    Object.defineProperty(ChevronUp, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return ChevronUp;
}());
var SVGIcon$3 = /** @class */ (function () {
    function SVGIcon$3(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$3.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" })));
    };
    Object.defineProperty(SVGIcon$3, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return SVGIcon$3;
}());
var Envelope = /** @class */ (function () {
    function Envelope(hostRef) {
        registerInstance(this, hostRef);
    }
    Envelope.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", "fill-rule": "evenodd", d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z", "clip-rule": "evenodd" })));
    };
    Object.defineProperty(Envelope, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return Envelope;
}());
var SVGIcon$4 = /** @class */ (function () {
    function SVGIcon$4(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$4.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z" })));
    };
    Object.defineProperty(SVGIcon$4, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return SVGIcon$4;
}());
var SVGIcon$5 = /** @class */ (function () {
    function SVGIcon$5(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$5.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z" })));
    };
    Object.defineProperty(SVGIcon$5, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return SVGIcon$5;
}());
var Search = /** @class */ (function () {
    function Search(hostRef) {
        registerInstance(this, hostRef);
    }
    Search.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" })));
    };
    Object.defineProperty(Search, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return Search;
}());
var SVGIcon$6 = /** @class */ (function () {
    function SVGIcon$6(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$6.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" })));
    };
    Object.defineProperty(SVGIcon$6, "style", {
        get: function () { return ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-.225em}.svg-inline.w-1{width:.0625em}.svg-inline.w-2{width:.125em}.svg-inline.w-3{width:.1875em}.svg-inline.w-4{width:.25em}.svg-inline.w-5{width:.3125em}.svg-inline.w-6{width:.375em}.svg-inline-.w-7{width:.4375em}.svg-inline.w-8{width:.5em}.svg-inline.w-9{width:.5625em}.svg-inline.w-10{width:.625em}.svg-inline.w-11{width:.6875em}.svg-inline.w-12{width:.75em}.svg-inline.w-13{width:.8125em}.svg-inline.w-14{width:.875em}.svg-inline.w-15{width:.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:.3em;width:auto}.svg-inline.pull-right{margin-left:.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}"; },
        enumerable: true,
        configurable: true
    });
    return SVGIcon$6;
}());
var List = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showLeadingIcon = false;
        this.showTrailingIcon = false;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.placeholder = '';
        this.inputRequired = false;
        this.inputAutoComplete = 'on';
        this.inputType = 'text';
        this.value = null;
        //
        this.inputHint = null;
        this.inputError = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
    }
    //
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
                    return [2 /*return*/, this.inputRef.value];
                }
                catch (e) {
                    console.log('caught error', e);
                    // Handle exceptions
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getInputRef = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.inputRef];
                }
                catch (e) {
                    console.log('caught error', e);
                    // Handle exceptions
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        if (this.inputHint) {
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
    // componentDidLoad() {
    // 	//
    // }
    // onUserInput(event:Event) {
    // 	console.log("input")
    // 	event.preventDefault();
    // 	event.stopPropagation();
    // 	this.el.dispatchEvent(event);
    // }
    class_1.prototype.setError = function () {
        if (!this.inputError) {
            this.inputError = 'Error with the input field';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_1.prototype.render = function () {
        var _this = this;
        var bottomText = null;
        if (this.showHint) {
            bottomText = h("p", { class: "hint" }, this.inputHint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "error" }, this.inputError);
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
        return (h("div", { class: "label-input-container" }, h("label", { class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only'), htmlFor: this.name }, this.label), h("div", { class: "input-container" }, leadingSVG, h("input", { id: this.name, ref: function (el) { return _this.inputRef = el; }, class: "\n\t\t\t\t\t\t\tform-input \n\t\t\t\t\t\t\tform-input-styled \n\t\t\t\t\t\t\t" + (this.showError ? 'form-input-error' : '') + " \n\t\t\t\t\t\t\t" + (this.showLeadingIcon ? 'form-input-leading-icon' : '') + " \n\t\t\t\t\t\t\t" + (this.showTrailingIcon || this.showErrorIcon ? 'form-input-trailing-icon' : '') + "\n\t\t\t\t\t\t", placeholder: this.placeholder, required: this.inputRequired, type: this.inputType, value: this.value, autoComplete: this.inputAutoComplete }), trailingSVG), bottomText));
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
    Object.defineProperty(class_1, "style", {
        get: function () { return ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}*,:after,:before,input,input[type=password],input[type=text]{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding-top:.5rem;padding-bottom:.5rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5}.form-input::-webkit-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder,.form-input::-moz-placeholder,.form-input::-ms-input-placeholder,.form-input::-webkit-input-placeholder,.form-input::placeholder{color:#d7e3e7;opacity:1}.form-input.form-input-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder,.form-input.form-input-error::-moz-placeholder,.form-input.form-input-error::-ms-input-placeholder,.form-input.form-input-error::-webkit-input-placeholder,.form-input.form-input-error::placeholder{color:#f8b4b4;opacity:1}.form-input:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-input-styled{display:block;width:100%}.form-input-error{color:#771d1d;border-color:#f8b4b4}.form-input-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.form-input-leading-icon{padding-left:2.5rem}.form-input-trailing-icon{padding-right:2.5rem}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}.svg-container{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none}.svg-leading{top:0;bottom:0;left:0;padding-left:.75rem}.svg-trailing{top:0;bottom:0;right:0;padding-right:.75rem}.svg-icon{color:#9fa6b2}.svg-error-icon,.svg-icon{height:1.25rem;width:1.25rem}.svg-error-icon{color:#f98080}\@media (min-width:640px){.form-input-styled{font-size:.875rem;line-height:1.25rem}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var ListWrappingCell$1 = /** @class */ (function () {
    function ListWrappingCell$1(hostRef) {
        registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    ListWrappingCell$1.prototype.render = function () {
        return (h("div", { class: "" }, h("slot", { name: "icon" }), h("span", null, h("slot", null))));
    };
    Object.defineProperty(ListWrappingCell$1, "style", {
        get: function () { return "div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.25rem;color:#6b7280}::slotted([slot=icon]){margin-right:.5rem;height:1.25rem;width:1.25rem}"; },
        enumerable: true,
        configurable: true
    });
    return ListWrappingCell$1;
}());
var List$1 = /** @class */ (function () {
    function List$1(hostRef) {
        registerInstance(this, hostRef);
    }
    List$1.prototype.render = function () {
        return (h("div", { class: "list-container" }, h("ul", null, h("slot", null))));
    };
    Object.defineProperty(List$1, "style", {
        get: function () { return ".list-container{overflow:hidden}ul{list-style-type:none;margin:0;padding:0}\@media (min-width:640px){.list-container{border-radius:.375rem}}"; },
        enumerable: true,
        configurable: true
    });
    return List$1;
}());
var ListWrappingCell$2 = /** @class */ (function () {
    function ListWrappingCell$2(hostRef) {
        registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    ListWrappingCell$2.prototype.render = function () {
        return (h("div", { class: this.order ? 'wrap' : '' }, h("slot", null)));
    };
    Object.defineProperty(ListWrappingCell$2, "style", {
        get: function () { return "div{-ms-flex-negative:0;flex-shrink:0}.wrap{margin-top:1rem}\@media (min-width:640px){div{margin-top:0}}"; },
        enumerable: true,
        configurable: true
    });
    return ListWrappingCell$2;
}());
var ListWrappingItem = /** @class */ (function () {
    function ListWrappingItem(hostRef) {
        registerInstance(this, hostRef);
        this.itemData = [];
    }
    ListWrappingItem.prototype.componentWillLoad = function () {
        var _this = this;
        // parse items
        //tf-list-wrapping-cell
        var items = this.slotElement.getElementsByTagName('tf-list-wrapping-cell');
        Array.from(items).forEach(function (cell) {
            _this.itemData.push({
                contentAlign: cell.getAttribute('content-align'),
                body: cell.innerHTML
            });
        });
    };
    ListWrappingItem.prototype.getCellStyle = function (contentAlign) {
        // let style = {
        // 	display: 'flex',
        // }
        //
        return {
            display: 'flex',
            flex: '1',
            justifyContent: contentAlign,
        };
    };
    ListWrappingItem.prototype.render = function () {
        var _this = this;
        return (h("li", null, h("a", { href: "#" }, h("div", { class: "list-item-container" }, h("div", { class: "list-item" }, this.itemData.map(function (item, i) { return (h("tf-list-wrapping-cell", { order: i, style: _this.getCellStyle(item.contentAlign), innerHTML: item.body })); })), h("div", { class: "chevron-container" }, h("svg", { class: "chevron-svg", fill: "currentColor", viewBox: "0 0 20 20" }, h("path", { "fill-rule": "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clip-rule": "evenodd" })))))));
    };
    Object.defineProperty(ListWrappingItem.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListWrappingItem, "style", {
        get: function () { return "li{margin-bottom:.5rem;border-radius:.375rem}.list-container,li{background-color:#fff;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);overflow:hidden}a{display:block;text-decoration:none;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}a:hover{background-color:#fafbfc}a:focus{outline:0;background-color:#f9fafb}.list-item-container{padding-left:.5rem;padding-right:.5rem;padding-top:.5rem;padding-bottom:.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.list-item{min-width:0;-ms-flex:1 1 0%;flex:1 1 0%}.chevron-container{margin-left:1.25rem;-ms-flex-negative:0;flex-shrink:0}.chevron-svg{height:1.25rem;width:1.25rem;color:#d0dfe3}\@media (min-width:640px){.list-container{border-radius:.375rem}.list-item-container{padding-left:1.5rem;padding-right:1.5rem}.list-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}}"; },
        enumerable: true,
        configurable: true
    });
    return ListWrappingItem;
}());
var LMSDelegateNode = /** @class */ (function () {
    function LMSDelegateNode(hostRef) {
        registerInstance(this, hostRef);
        this.delegateId = "-";
        this.delegateStatus = "none";
        this.delegateName = "-";
        this.delegateDob = "-";
        this.courseTitle = "-";
        this.courseCode = "-";
        this.isMobileViewOpen = false;
    }
    LMSDelegateNode.prototype.onMenuClicked = function () {
        this.isMobileViewOpen = !this.isMobileViewOpen;
    };
    LMSDelegateNode.prototype.render = function () {
        // LMS specific logic to set the bookend
        var statusColour = this.delegateStatus == "complete" ? 'green'
            : this.delegateStatus == "incomplete" ? 'red'
                : this.delegateStatus == "inprogress" ? 'amber'
                    : 'none';
        return (h("div", { id: "delegate-" + this.delegateId, class: "delegate-node" }, h("tf-node", null, h("div", { id: "status" }, h("tf-node-status-bookend", { color: statusColour })), h("div", { id: "delegate-details-container", class: this.isMobileViewOpen ? 'show' : 'hide' }, h("div", { id: "delegate-details" }, h("div", { id: "delegate-name" }, this.delegateName), h("div", { id: "delegate-dob" }, this.delegateDob)), h("div", { id: "course-details", class: this.isMobileViewOpen ? 'show' : 'hide' }, h("div", { id: "detail-title" }, "Course:"), h("div", { id: "course-title" }, this.courseTitle), h("div", { id: "course-code" }, this.courseCode)), h("div", { id: "delegate-courses-count", class: this.isMobileViewOpen ? 'show' : 'hide' }, h("div", { id: "detail-title" }, "Number of Courses:"), h("div", { id: "course-count" }, this.delegateCoursesCount))), h("div", { id: "delegate-action" }, h("tf-node-select-menu", null), h("button", { onClick: this.onMenuClicked.bind(this), id: "toggle-oppen-close-delegate" }, h("span", null, "X")))), h("div", { id: "mobile-node-actions", class: this.isMobileViewOpen ? 'show' : 'hide' }, h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "View")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Assign to Course")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Assign to Cattegory")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Remove")))));
    };
    Object.defineProperty(LMSDelegateNode, "style", {
        get: function () { return "\@media only screen and (max-width:640px){.delegate-node{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;border-radius:.4375rem}}tf-node{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;z-index:2}#status{width:5%}\@media only screen and (max-width:640px){#status{width:45px;height:100%}}tf-node-status-bookend{width:22px;height:42px}\@media only screen and (max-width:640px){tf-node-status-bookend{height:100%}}#delegate-details-container{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center}\@media only screen and (max-width:640px){#delegate-details-container{-ms-flex-direction:column;flex-direction:column;overflow:hidden}#delegate-details-container.show{height:174px;-webkit-transition:height .2s ease-out;transition:height .2s ease-out}#delegate-details-container.hide{height:48px;-webkit-transition:height .4s ease-out;transition:height .4s ease-out}}#course-details,#delegate-courses-count,#delegate-details{width:33.3%;line-height:1.2;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}\@media only screen and (max-width:640px){#course-details,#delegate-courses-count,#delegate-details{width:100%;padding-top:.4375rem;padding-bottom:.4375rem}}\@media only screen and (max-width:640px){#course-details,#delegate-courses-count{-webkit-transition:all .4s ease-out;transition:all .4s ease-out}#course-details.show,#delegate-courses-count.show{opacity:1;pointer-events:all}#course-details.hide,#delegate-courses-count.hide{opacity:0;pointer-events:none}}\@media only screen and (max-width:640px){#course-details{border-top:1px solid #d0dfe3;border-bottom:1px solid #d0dfe3}}#course-code,#delegate-dob{font-size:.75rem;color:#68657e}#detail-title{display:none;text-transform:uppercase;font-size:.5625rem;color:#68657e;line-height:1.25rem}\@media only screen and (max-width:640px){#detail-title{display:block}}#delegate-action{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}\@media only screen and (max-width:640px){#delegate-action{width:27px;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:start;align-self:flex-start;margin-top:.875rem}}\@media only screen and (max-width:640px){tf-node-select-menu{display:none}}#toggle-oppen-close-delegate{display:none;background-color:#d0dfe3;color:#363154;font-size:.625rem;line-height:.625rem;border:none;padding:0;margin:0;text-align:center;width:1.25rem;height:1.25rem;border-radius:.625rem;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}#toggle-oppen-close-delegate:hover{background:#4b4474;background-color:#4b4474;color:#fff}#toggle-oppen-close-delegate:active{background:#7a72ac;background-color:#7a72ac;color:#fff}#toggle-oppen-close-delegate:focus{background:#363154;background-color:#363154;color:#fff}\@media only screen and (max-width:640px){#toggle-oppen-close-delegate{display:-ms-flexbox;display:flex}}#mobile-node-actions{background-color:#363154;padding:2.5rem 1.563rem 1.563rem;border-radius:0 0 .4375rem .4375rem;margin-bottom:.3125rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);min-height:50px;display:none;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;z-index:1}\@media only screen and (max-width:640px){#mobile-node-actions{display:-ms-flexbox;display:flex}#mobile-node-actions.show{-webkit-transition:all .4s ease-out .4s;transition:all .4s ease-out .4s;opacity:1;pointer-events:all;margin-top:-20px}#mobile-node-actions.hide{-webkit-transition:all .2s ease-out;transition:all .2s ease-out;opacity:0;pointer-events:none;margin-top:-172px}}.dropdown-item-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:.75rem;border:none;padding:0;margin:0;text-align:center;border-radius:.1875rem;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s;width:48%;-ms-flex-pack:center;justify-content:center;margin-bottom:.3125rem}.dropdown-item-btn:hover{background:#19326b;background-color:#19326b;color:#fff}.dropdown-item-btn:active{background:#3b69d2;background-color:#3b69d2;color:#fff}.dropdown-item-btn:focus{background:#224595;background-color:#224595;color:#fff}.dropdown-item-btn span{padding:.9375rem;display:-ms-flexbox;display:flex}"; },
        enumerable: true,
        configurable: true
    });
    return LMSDelegateNode;
}());
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
                        return [4 /*yield*/, this.passwordInputRef.getInputRef()];
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
        this.formValid = this.values.email.length > 0 && this.values.password.length > 0;
    };
    class_2.prototype.render = function () {
        var _this = this;
        var forgotten = null;
        if (this.forgottenUrl) {
            forgotten = h("tf-a-tag", { url: "#", "tag-title": "Forgot your password?" }, "Forgot your password?");
        }
        return (h("div", { class: "login-container" }, h("div", { class: "login-header" }, h("h2", null, "Login")), h("div", { class: "login-body" }, h("div", { class: "form-container" }, h("form", { onSubmit: this.onLogin.bind(this) }, h("tf-input", { name: "email", "input-type": "email", "input-required": true, label: "Email Address", ref: function (el) { return _this.emailInputRef = el; }, value: this.values.email, onInput: this.onUserInput.bind(this), inputAutoComplete: "email" }), h("tf-input", { name: "password", "input-type": "password", "input-required": true, label: "Password", ref: function (el) { return _this.passwordInputRef = el; }, onInput: this.onUserInput.bind(this), inputAutoComplete: "on" }), h("div", { class: "login-footer" }, h("div", { class: "link-container" }, forgotten), h("tf-button", { colour: "aqua", disabled: !this.formValid || this.loading, "button-type": "submit" }, "Login")))))));
    };
    Object.defineProperty(class_2, "style", {
        get: function () { return ".login-container{margin-bottom:1.5rem;min-height:100%;background-color:#fff;border-radius:.5rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding-top:3rem;padding-bottom:3rem;padding-left:1.25rem;padding-right:1.25rem}.login-header{border-bottom-width:4px;border-color:#32f7dc;border-style:solid}h2{margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800;color:#161e2e}.login-body{margin-top:2rem}.login-footer{margin-top:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.form-container{background-color:#fff;padding-bottom:2rem}.link-container{font-size:.875rem;line-height:1.25rem}\@media (min-width:640px){.login-container{padding-left:1.5rem;padding-right:1.5rem}.login-body,.login-header{margin-left:auto;margin-right:auto;width:100%;max-width:28rem}.form-container{border-radius:.5rem}}\@media (min-width:1024px){.login-container{padding-left:2rem;padding-right:2rem}}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var MainContent = /** @class */ (function () {
    function MainContent(hostRef) {
        registerInstance(this, hostRef);
    }
    MainContent.prototype.render = function () {
        return (h("main", null, h("slot", null)));
    };
    Object.defineProperty(MainContent, "style", {
        get: function () { return "main{padding:0 1.375rem;display:block}"; },
        enumerable: true,
        configurable: true
    });
    return MainContent;
}());
var Node = /** @class */ (function () {
    function Node(hostRef) {
        registerInstance(this, hostRef);
    }
    Node.prototype.render = function () {
        return (h("div", { id: "node-container" }, h("slot", null)));
    };
    Object.defineProperty(Node, "style", {
        get: function () { return "#node-container{margin-bottom:.3125rem;background-color:#fff;border-radius:.4375rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);padding:.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}"; },
        enumerable: true,
        configurable: true
    });
    return Node;
}());
var NodeList = /** @class */ (function () {
    function NodeList(hostRef) {
        registerInstance(this, hostRef);
    }
    NodeList.prototype.render = function () {
        return (h("ul", { id: "node-list" }, h("slot", null)));
    };
    Object.defineProperty(NodeList, "style", {
        get: function () { return "ul{margin:0;padding:0;list-style:none}"; },
        enumerable: true,
        configurable: true
    });
    return NodeList;
}());
var NodeSelectMenu = /** @class */ (function () {
    function NodeSelectMenu(hostRef) {
        registerInstance(this, hostRef);
        // @Element() el: HTMLElement;
        this.isOpen = false;
        this.isOpenDelayed = false;
    }
    NodeSelectMenu.prototype.handleClick = function (event) {
        if (this.isOpen) {
            var target = event.composedPath()[0];
            if (!target.matches('.dropdown-item-btn') && !target.matches('#dropdown-content')) {
                this.isOpen = this.isOpenDelayed = false;
            }
        }
    };
    /*
131 856
581 913
*/
    NodeSelectMenu.prototype.onMenuClicked = function () {
        var _this = this;
        if (this.isOpen) {
            this.isOpen = this.isOpenDelayed = false;
        }
        else {
            this.isOpen = true;
            setTimeout(function () {
                _this.isOpenDelayed = true;
            }, 400);
        }
    };
    NodeSelectMenu.prototype.render = function () {
        return (h("div", { id: "dropdown" }, h("button", { onClick: this.onMenuClicked.bind(this), id: "dropdown-btn", tabindex: "0", class: this.isOpenDelayed ? 'active' : '' }, h("span", { id: "title" }, "Actions"), h("span", { id: "icon" }, h("tf-icon-chevron-down", { class: "svg-icon" }))), h("div", { id: "dropdown-content", class: this.isOpen ? 'show' : '' }, h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "View")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Assign to Course")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Assign to Cattegory")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Remove")))));
    };
    Object.defineProperty(NodeSelectMenu, "style", {
        get: function () { return "#dropdown{position:relative;display:inline-block}#dropdown-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:.75rem;border:none;padding:0;margin:0;text-align:left;border-radius:.1875rem;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}#dropdown-btn:hover{background:#4b4474;background-color:#4b4474;color:#fff}#dropdown-btn:active{background:#7a72ac;background-color:#7a72ac;color:#fff}#dropdown-btn:focus{background:#363154;background-color:#363154;color:#fff}#dropdown-btn span{padding:.8125rem;display:-ms-flexbox;display:flex}#dropdown-btn span#title{width:70px}#dropdown-btn span#icon{padding-left:.375rem;padding-right:.375rem;font-size:.625rem;border-left:1px solid #fff;-ms-flex-align:center;align-items:center;min-height:15px;height:auto}#dropdown-btn.active{background-color:#363154;color:#fff}#dropdown-content{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;right:0;background-color:#d0dfe3;min-width:160px;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);z-index:50;border-radius:.1875rem;padding:.4375rem;margin-top:5px;opacity:0;pointer-events:none}#dropdown-content.show{opacity:1;pointer-events:all}.dropdown-item-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:.75rem;border:none;padding:0;margin:0;text-align:left;border-radius:1px;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s;border-bottom:1px solid rgba(54,49,84,.2)}.dropdown-item-btn:hover{background:#4b4474;background-color:#4b4474;color:#fff}.dropdown-item-btn:active{background:#7a72ac;background-color:#7a72ac;color:#fff}.dropdown-item-btn:focus{background:#363154;background-color:#363154;color:#fff}.dropdown-item-btn:last-of-type{border-bottom:none}.dropdown-item-btn span{padding:.3125rem;display:-ms-flexbox;display:flex}.svg-icon{height:1rem;width:1rem}"; },
        enumerable: true,
        configurable: true
    });
    return NodeSelectMenu;
}());
var NodeStatusBookend = /** @class */ (function () {
    function NodeStatusBookend(hostRef) {
        registerInstance(this, hostRef);
        this.color = "grey";
    }
    NodeStatusBookend.prototype.render = function () {
        return (h("div", { id: "delegate-status", class: "\n\t\t\t\t\t" + this.color + " \n\t\t\t\t\t" + (this.showTooltip ? 'show-tooltip' : '') + "\n\t\t\t\t" }));
    };
    Object.defineProperty(NodeStatusBookend, "style", {
        get: function () { return ":host{position:relative}#delegate-status,:host{display:-ms-flexbox;display:flex}#delegate-status{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f3f5f9;border-radius:.1875rem}#delegate-status.red{background-color:#b92950}#delegate-status.amber{background-color:#b97129}#delegate-status.green{background-color:#40c7a3}#delegate-status.blue{background-color:#224595}#delegate-status.grey{background-color:#d0dfe3}"; },
        enumerable: true,
        configurable: true
    });
    return NodeStatusBookend;
}());
var SideDrawer = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        this.showContactInfo = false;
    }
    class_3.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.opened = true;
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.onAppLogoClicked = function () {
        this.open();
    };
    class_3.prototype.stockSymbolChanged = function (newValue, oldValue) {
    };
    class_3.prototype.onCloseDraw = function () {
        this.opened = false;
    };
    class_3.prototype.onContentChange = function (content) {
        this.showContactInfo = content === 'contact';
    };
    class_3.prototype.render = function () {
        var mainContent = h("slot", null);
        return [
            h("div", { onClick: this.onCloseDraw.bind(this), class: "backdrop" }),
            h("aside", null, h("header", null, h("div", { id: "app-logo-container" }, h("div", { id: "app-logo" }, h("tf-hexagon-button", { onClick: this.onCloseDraw.bind(this), color: "white", id: "app-logo-icon" }, h("div", { id: "app-logo-initials" }, "X"))))), h("main", null, mainContent))
        ];
    };
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "opened": ["stockSymbolChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return "aside{left:-100%;width:400px;max-width:80%;background-color:#363154;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);-webkit-transition:left .3s ease-out;transition:left .3s ease-out;z-index:100}.backdrop,aside{position:fixed;top:0;height:100vh}.backdrop{left:0;width:100%;background-color:rgba(54,49,84,.75);z-index:10;opacity:0;pointer-events:none;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out}:host([opened]) aside{left:0}:host([opened]) .backdrop{opacity:1;pointer-events:all}::slotted(*){display:-ms-flexbox;display:flex;color:#fff}::slotted(*) ul{list-style:none}header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;-ms-flex-pack:justify;justify-content:space-between}#app-logo-container,header{display:-ms-flexbox;display:flex}#app-logo-container{-ms-flex-align:end;align-items:flex-end}#app-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#app-logo-icon{width:2.813rem;height:3.125rem}#app-logo-initials{color:#224595;text-transform:uppercase;font-weight:bolder;font-size:1.25rem;text-align:center}#app-logo-initials::selection{color:none;background:none}#app-logo-initials::-moz-selection{color:none;background:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var SideDrawerNav = /** @class */ (function () {
    function SideDrawerNav(hostRef) {
        registerInstance(this, hostRef);
    }
    SideDrawerNav.prototype.render = function () {
        return (h("nav", { id: "side-nav", class: "side-nav" }, h("div", null, h("slot", null))));
    };
    Object.defineProperty(SideDrawerNav, "style", {
        get: function () { return "#side-nav{-ms-flex:1;flex:1;padding:.75rem}::slotted(tf-side-drawer-nav-link){display:block;border-bottom:1px solid #d0dfe3}::slotted(tf-side-drawer-nav-link:last-of-type){border-bottom:none}"; },
        enumerable: true,
        configurable: true
    });
    return SideDrawerNav;
}());
var SideDrawerNavLink = /** @class */ (function () {
    function SideDrawerNavLink(hostRef) {
        registerInstance(this, hostRef);
        this.isSubOpen = false;
        this.hasSubMenu = false;
    }
    //
    SideDrawerNavLink.prototype.onLinkClicked = function () {
        this.isSubOpen = !this.isSubOpen;
    };
    //
    SideDrawerNavLink.prototype.componentWillLoad = function () {
        this.hasSubMenu = !!this.slotElement.querySelector('[slot="sub"]');
    };
    SideDrawerNavLink.prototype.render = function () {
        var sub = null;
        var linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "tailwind-side-nav" }, h("span", { class: "tailwind-side-nav-title" }, h("slot", null))));
        if (this.hasSubMenu) {
            sub = (h("div", { class: "sub-nav-content " + (this.isSubOpen ? 'show' : 'hide') }, h("slot", { name: "sub" })));
            var icon = this.isSubOpen ? h("tf-icon-chevron-up", null) : h("tf-icon-chevron-down", null);
            linkButton = (h("div", { class: "tailwind-side-nav " + (this.isSubOpen ? 'opened' : ''), onClick: this.onLinkClicked.bind(this) }, h("span", { class: "tailwind-side-nav-title" }, h("slot", null)), h("span", { class: "tailwind-toggle-icon" }, icon)));
        }
        return [linkButton, sub];
    };
    Object.defineProperty(SideDrawerNavLink.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideDrawerNavLink, "style", {
        get: function () { return ".tailwind-side-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:.75rem;padding-right:.75rem;padding-top:.5rem;padding-bottom:.5rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#fff;background-color:#363154;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-side-nav:hover{color:#1d1a2e;background-color:#d0dfe3}.tailwind-side-nav:focus{outline:0;color:#1d1a2e;background-color:#d7e3e7}.tailwind-side-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.tailwind-side-nav.opened{color:#1d1a2e;background-color:#ecf2f3}.sub-nav-content{display:block;max-height:0;-webkit-transition:max-height .35s;transition:max-height .35s;overflow:hidden}.sub-nav-content.show{max-height:100vh}"; },
        enumerable: true,
        configurable: true
    });
    return SideDrawerNavLink;
}());
var SideDrawerSubNav = /** @class */ (function () {
    function SideDrawerSubNav(hostRef) {
        registerInstance(this, hostRef);
    }
    SideDrawerSubNav.prototype.render = function () {
        return (h("div", { class: "sub-nav-content opened" }, h("slot", null)));
    };
    Object.defineProperty(SideDrawerSubNav, "style", {
        get: function () { return ".sub-nav-content{max-height:0;-webkit-transition:max-height .35s;transition:max-height .35s;overflow:hidden;padding:.5rem;background-color:#d0dfe3;line-height:1.5}.opened{max-height:100vh}::slotted(tf-side-drawer-sub-nav-link){display:block;border-color:#363154;border-left-width:0;border-right-width:0;border-top-width:0;border-bottom-width:1px;border-style:solid}::slotted(tf-side-drawer-sub-nav-link:last-of-type){border-bottom-width:0}"; },
        enumerable: true,
        configurable: true
    });
    return SideDrawerSubNav;
}());
var SideDrawerSubNavLink = /** @class */ (function () {
    function SideDrawerSubNavLink(hostRef) {
        registerInstance(this, hostRef);
    }
    SideDrawerSubNavLink.prototype.render = function () {
        return (h("a", { href: this.hrefLink, title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "tailwind-sub-nav" }, h("span", { class: "tailwind-sub-nav-title" }, h("slot", null))));
    };
    Object.defineProperty(SideDrawerSubNavLink, "style", {
        get: function () { return ".tailwind-sub-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:.75rem;padding-right:.75rem;padding-top:.5rem;padding-bottom:.5rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#1d1a2e;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-sub-nav:hover{color:#302c4b;background-color:#b1bdc1}.tailwind-sub-nav:focus{outline:0;color:#1d1a2e;background-color:#b1bdc1}.tailwind-sub-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}"; },
        enumerable: true,
        configurable: true
    });
    return SideDrawerSubNavLink;
}());
var StatDataCard = /** @class */ (function () {
    function StatDataCard(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    StatDataCard.prototype.render = function () {
        return (h("div", { class: "stat-card-container" }, h("div", { class: "stat-card" }, h("dl", null, h("dt", { class: "colour-" + this.colour }, h("slot", { name: "title" })), h("dd", { class: "colour-" + this.colour }, h("slot", { name: "data" }))))));
    };
    Object.defineProperty(StatDataCard, "style", {
        get: function () { return ".stat-card-container{background-color:#fff;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.5rem}dl{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;text-align:center}dt{padding-left:.25rem;padding-right:.25rem;padding-top:.5rem;padding-bottom:.5rem;font-size:.875rem;color:#25223a;line-height:1.25rem;font-weight:500;background-color:#d0dfe3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}dt.colour-blue,dt.colour-default{color:#fff;background-color:#224595}dt.colour-green{color:#fff;background-color:#40c7a3}dt.colour-amber{color:#fff;background-color:#b97129}dt.colour-red{color:#fff;background-color:#b92950}dd{-webkit-margin-start:0;margin-inline-start:0;padding-left:.25rem;padding-right:.25rem;padding-top:1.25rem;padding-bottom:1.25rem;margin-top:.25rem;font-size:1.875rem;color:#25223a;line-height:2.25rem;font-weight:600}dd.colour-blue,dd.colour-default{color:#224595}dd.colour-green{color:#40c7a3}dd.colour-amber{color:#b97129}dd.colour-red{color:#b92950}\@media (min-width:640px){.stats-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}"; },
        enumerable: true,
        configurable: true
    });
    return StatDataCard;
}());
var StatsPanel = /** @class */ (function () {
    function StatsPanel(hostRef) {
        registerInstance(this, hostRef);
        this.cardCount = 3;
        this.maxCardCount = 6;
    }
    StatsPanel.prototype.componentWillLoad = function () {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    };
    StatsPanel.prototype.render = function () {
        return (h("tf-card", { colour: "navy" }, h("div", { class: "stats-grid grid-" + this.cardCount }, h("slot", null))));
    };
    Object.defineProperty(StatsPanel.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatsPanel, "style", {
        get: function () { return ".stats-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}\@media (min-width:640px){.stats-grid.grid-1{grid-template-columns:repeat(1,minmax(0,1fr))}.stats-grid.grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}.stats-grid.grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.stats-grid.grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}.stats-grid.grid-5{grid-template-columns:repeat(5,minmax(0,1fr))}.stats-grid.grid-6{grid-template-columns:repeat(6,minmax(0,1fr))}}"; },
        enumerable: true,
        configurable: true
    });
    return StatsPanel;
}());
var Status = /** @class */ (function () {
    function Status(hostRef) {
        registerInstance(this, hostRef);
        this.trafficLightColour = 'none';
    }
    Status.prototype.render = function () {
        return (h("span", { class: "colour-" + this.trafficLightColour }, h("slot", null)));
    };
    Object.defineProperty(Status, "style", {
        get: function () { return "span{padding-left:.75rem;padding-right:.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}span.colour-none{background-color:#ecf2f3;color:#9ba7aa}span.colour-red{background-color:#b92950;color:#ecf2f3}span.colour-amber,span.colour-orange{background-color:#b97129;color:#ecf2f3}span.colour-green{background-color:#40c7a3;color:#ecf2f3}"; },
        enumerable: true,
        configurable: true
    });
    return Status;
}());
var Table = /** @class */ (function () {
    function Table(hostRef) {
        registerInstance(this, hostRef);
        this.headerCellData = [];
        this.rowData = [];
    }
    //
    Table.prototype.componentWillLoad = function () {
        var _this = this;
        // parse table header element
        var headerItem = this.slotElement.querySelector('[slot="table-head"]');
        //
        var headerCells = headerItem.getElementsByTagName('tf-table-head-cell');
        //
        Array.from(headerCells).forEach(function (cell) {
            _this.headerCellData.push(String(cell.innerHTML).replace('<!---->', ''));
        });
        // parse table rows
        var rows = this.slotElement.getElementsByTagName('tf-table-row');
        //
        Array.from(rows).forEach(function (row) {
            var rowCellData = [];
            var cells = row.getElementsByTagName('tf-table-cell');
            Array.from(cells).forEach(function (cell) {
                rowCellData.push({
                    textAlign: cell.getAttribute('text-align'),
                    body: cell.innerHTML
                });
            });
            _this.rowData.push(rowCellData);
        });
    };
    Table.prototype.render = function () {
        return [
            h("div", { class: "div-1" }, h("div", { class: "div-2" }, h("div", { class: "div-3" }, h("table", null, h("thead", null, this.headerCellData.map(function (cell) { return h("th", null, cell); })), h("tbody", null, this.rowData.map(function (row) {
                return (h("tr", null, row.map(function (cell) { return h("td", { class: "bottom-border " + (cell.textAlign == 'right' ? 'text-right' : ''), innerHTML: cell.body }); })));
            })))))),
            h("div", { class: "hide-slot" }, h("slot", { name: "table-head" }))
        ];
    };
    Object.defineProperty(Table.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table, "style", {
        get: function () { return ".hide-slot,::slotted([slot=table-head]){display:none}.div-1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.div-2{margin-top:-.5rem;margin-bottom:-.5rem;padding-top:.5rem;padding-bottom:.5rem;overflow-x:auto}.div-3{vertical-align:middle;display:inline-block;overflow:hidden}.div-3,table{min-width:100%}table{border-collapse:collapse}th{padding-left:1.5rem;padding-right:1.5rem;padding-top:.25rem;padding-bottom:.25rem;border-bottom-width:1px;border-color:#d0dfe3;background-color:#d0dfe3;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;color:#363154;text-transform:uppercase;letter-spacing:.05em}tbody{background-color:#fff}td{padding-left:1.5rem;padding-right:1.5rem;padding-top:.75rem;padding-bottom:.75rem;white-space:nowrap;font-size:.875rem;line-height:1.25rem;color:#6b7280}td.bottom-border{border-bottom-width:1px;border-right-width:0;border-left-width:0;border-color:#d0dfe3;border-style:solid}td.text-right{text-align:right;font-weight:500}.flex-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.avatar{height:2.5rem;width:2.5rem;border-radius:9999px}\@media (min-width:640px){.div-2{margin-left:-1.5rem;margin-right:-1.5rem;padding-left:1.5rem;padding-right:1.5rem}.div-3{border-radius:.5rem}}a{color:#224595}a:hover{color:#362f78}a:focus{outline:0;text-decoration:underline}\@media (min-width:1024px){.div-2{margin-left:-2rem;margin-right:-2rem;padding-left:2rem;padding-right:2rem}}"; },
        enumerable: true,
        configurable: true
    });
    return Table;
}());
var TableCell = /** @class */ (function () {
    function TableCell(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = 'centre';
    }
    TableCell.prototype.render = function () {
        return (h("slot", null));
    };
    return TableCell;
}());
var TableHead = /** @class */ (function () {
    function TableHead(hostRef) {
        registerInstance(this, hostRef);
    }
    TableHead.prototype.render = function () {
        return (h("slot", null));
    };
    return TableHead;
}());
var TableHeadCell = /** @class */ (function () {
    function TableHeadCell(hostRef) {
        registerInstance(this, hostRef);
    }
    TableHeadCell.prototype.render = function () {
        return (h("slot", null));
    };
    return TableHeadCell;
}());
var TableHead$1 = /** @class */ (function () {
    function TableHead$1(hostRef) {
        registerInstance(this, hostRef);
    }
    TableHead$1.prototype.render = function () {
        return (h("slot", null));
    };
    return TableHead$1;
}());
var User = /** @class */ (function () {
    function User(hostRef) {
        registerInstance(this, hostRef);
    }
    User.prototype.render = function () {
        return (h("div", { class: "flex-row" }, h("div", { class: "avater-container" }, h("img", { class: "avatar", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" })), h("div", { class: "details" }, h("tf-value-pair", null, h("span", { slot: "dark" }, "Bernard Lane"), h("span", { slot: "light" }, "bernardlane@example.com")))));
    };
    Object.defineProperty(User, "style", {
        get: function () { return ".flex-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.avatar-container{-ms-flex-negative:0;flex-shrink:0}.avatar,.avatar-container{height:2.5rem;width:2.5rem}.avatar{border-radius:9999px}.details{margin-left:1rem}"; },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var ValuePair = /** @class */ (function () {
    function ValuePair(hostRef) {
        registerInstance(this, hostRef);
    }
    ValuePair.prototype.render = function () {
        return (h("div", { class: "value-pair" }, h("div", { class: 'dark' }, h("slot", { name: "dark" })), h("div", { class: 'light' }, h("slot", { name: "light" }))));
    };
    Object.defineProperty(ValuePair, "style", {
        get: function () { return ".value-pair{-ms-flex-direction:column;flex-direction:column}.dark{font-size:1.125rem;font-weight:500;color:#161e2e}.dark,.light{line-height:1.25rem}.light{font-size:.875rem;color:#6b7280}"; },
        enumerable: true,
        configurable: true
    });
    return ValuePair;
}());
export { ListWrappingCell as tf_a_tag, AppHeader as tf_app_header, Button as tf_button, Card as tf_card, HexagonButton as tf_hexagon_button, SVGIcon as tf_icon_check, ChevronDown as tf_icon_chevron_down, SVGIcon$1 as tf_icon_chevron_left, SVGIcon$2 as tf_icon_chevron_right, ChevronUp as tf_icon_chevron_up, SVGIcon$3 as tf_icon_close, Envelope as tf_icon_envelope, SVGIcon$4 as tf_icon_exclamation, SVGIcon$5 as tf_icon_notification, Search as tf_icon_search, SVGIcon$6 as tf_icon_user, List as tf_input, ListWrappingCell$1 as tf_leading_icon_label, List$1 as tf_list, ListWrappingCell$2 as tf_list_wrapping_cell, ListWrappingItem as tf_list_wrapping_item, LMSDelegateNode as tf_lms_delegate_node, LoginForm as tf_login_form, MainContent as tf_main_content, Node as tf_node, NodeList as tf_node_list, NodeSelectMenu as tf_node_select_menu, NodeStatusBookend as tf_node_status_bookend, SideDrawer as tf_side_drawer, SideDrawerNav as tf_side_drawer_nav, SideDrawerNavLink as tf_side_drawer_nav_link, SideDrawerSubNav as tf_side_drawer_sub_nav, SideDrawerSubNavLink as tf_side_drawer_sub_nav_link, StatDataCard as tf_stat_data_card, StatsPanel as tf_stats_panel, Status as tf_status, Table as tf_table, TableCell as tf_table_cell, TableHead as tf_table_head, TableHeadCell as tf_table_head_cell, TableHead$1 as tf_table_row, User as tf_user, ValuePair as tf_value_pair };
