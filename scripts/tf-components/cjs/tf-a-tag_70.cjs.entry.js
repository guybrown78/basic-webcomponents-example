'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17ea994a.js');

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

const appHeaderCss = "header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}#app-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}#app-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#app-logo-icon{width:2.813rem;height:3.125rem;min-width:45px}#app-logo-initials{color:#ffffff;text-transform:uppercase;font-weight:400;font-size:1.25rem;text-align:center;}#app-logo-initials::-moz-selection{color:none;background:none}#app-logo-initials::selection{color:none;background:none}#app-logo-initials::-moz-selection{color:none;background:none}h1{margin:0 0 0 1.125rem;color:#ffffff;font-size:1.5rem;line-height:1.46;font-weight:normal}@media only screen and (max-width: 640px){#app-logo-title{display:none}}#central-contailer{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;padding:0 3.125rem;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}#quick-link-icon{color:#363154;font-size:1.25rem;text-align:center;}#quick-link-icon::-moz-selection{color:none;background:none}#quick-link-icon::selection{color:none;background:none}#quick-link-icon::-moz-selection{color:none;background:none}#client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;justify-self:flex-end;padding:0 0.5rem;-ms-flex-pack:center;justify-content:center;border-radius:0 0 5px 5px;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);background-color:#ffffff}#client-logo{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:112px;height:59px}#client-logo img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}#account-navigation-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:40px;height:59px}@media only screen and (max-width: 640px){#account-navigation-container{display:none}}#account-navigation-container tf-hexagon-button{width:27px;height:30px}";

const AppHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.appTitle = null;
        this.appInitials = null;
        this.showAppLogo = true;
        this.showClientLogo = false;
        this.clientLogoSource = null;
        this.tfAppLogoClicked = index.createEvent(this, "tfAppLogoClicked", 7);
    }
    onButtonClickHandler(event) {
        event.preventDefault();
        this.tfAppLogoClicked.emit();
    }
    render() {
        let clientLogo = null;
        if (this.clientLogoSource && (this.clientLogoSource && this.showClientLogo)) {
            clientLogo = (index.h("div", { id: "client-logo-container" }, index.h("div", { id: "client-logo" }, index.h("img", { src: this.clientLogoSource }))));
        }
        let appLogo = null;
        if (this.showAppLogo) {
            appLogo = (index.h("div", { id: "app-logo-container" }, index.h("div", { id: "app-logo" }, index.h("tf-hexagon-button", { color: "gradient", id: "app-logo-icon", onClick: this.onButtonClickHandler.bind(this) }, index.h("div", { id: "app-logo-initials" }, this.appInitials)), index.h("h1", { id: "app-logo-title" }, this.appTitle))));
        }
        return (index.h("header", null, appLogo, clientLogo));
    }
};
AppHeader.style = appHeaderCss;

const buttonCss = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;width:100%;border-radius:0.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}.tw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:\"Roboto Condensed\", sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}::slotted([slot=icon]){color:red}.size-xs,.size-extra-small{padding-left:0.625rem;padding-right:0.625rem;padding-top:0.375rem;padding-bottom:0.375rem;font-size:0.75rem;line-height:1rem;border-radius:0.25rem}.size-s,.size-small{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1rem;border-radius:0.375rem}.size-m,.size-medium,.size-default{padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;border-radius:0.375rem}.size-l,.size-large{padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1rem;line-height:1.5rem;border-radius:0.375rem}.size-xl,.size-extra-large{padding-left:1.5rem;padding-right:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:1rem;line-height:1.5rem;border-radius:0.375rem}.colour-blue,.colour-default{color:#ffffff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260A4}.colour-blue:active,.colour-default:active{outline:0;border-color:#32F7DC;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);background-color:#1E3D85}.colour-blue:focus,.colour-default:focus{outline:0;border-color:#1E3D85;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.colour-aqua{outline:0;color:#122551;background-color:#32F7DC}.colour-aqua:hover{outline:0;background-color:#84FAEA}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2AD2BB}.colour-aqua:focus{outline:0;border-color:#2AD2BB;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.colour-navy{color:#ffffff;background-color:#363154}.colour-navy:hover{background-color:#534F6D}.colour-navy:active{outline:0;border-color:#363154;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);background-color:#25223A}.colour-navy:focus{outline:0;border-color:#25223A;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.colour-grey{color:#122551;background-color:#D0DFE3}.colour-grey:hover{background-color:#D7E3E7}.colour-grey:active{outline:0;border-color:#D0DFE3;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);background-color:#B1BDC1}.colour-grey:focus{outline:0;border-color:#B1BDC1;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.disabled{color:#B1BDC1;background-color:#E7EFF1}.disabled:hover{color:#B1BDC1;background-color:#E7EFF1}.icon-xs-l,.icon-extra-small-l{margin-left:-0.125rem;margin-right:0.5rem;height:1rem;width:1rem}.icon-xs-r,.icon-extra-small-r{margin-left:0.5rem;margin-right:-0.125rem;height:1rem;width:1rem}.icon-s-l,.icon-small-l{margin-left:-0.125rem;margin-right:0.5rem;height:1rem;width:1rem}.icon-s-r,.icon-small-r{margin-left:0.5rem;margin-right:-0.125rem;height:1rem;width:1rem}.icon-m-l,.icon-medium-l,.icon-default-l{margin-left:-0.25rem;margin-right:0.5rem;height:1.25rem;width:1.25rem}.icon-m-r,.icon-medium-r,.icon-default-r{margin-left:0.5rem;margin-right:-0.25rem;height:1.25rem;width:1.25rem}.icon-l-l,.icon-large-l{margin-left:-0.25rem;margin-right:0.75rem;height:1.25rem;width:1.25rem}.icon-l-r,.icon-large-r{margin-left:0.75rem;margin-right:-0.25rem;height:1.25rem;width:1.25rem}.icon-xl-l,.icon-extra-large-l{margin-left:-0.25rem;margin-right:0.75rem;height:1.25rem;width:1.25rem}.icon-xl-r,.icon-extra-large-r{margin-left:0.75rem;margin-right:-0.25rem;height:1.25rem;width:1.25rem}.hex-container{display:-ms-flexbox;display:flex;position:relative;width:31px;height:30px}.hex-btn{border:none;width:100% !important;display:-ms-flexbox;display:flex;padding:0;margin:0;position:absolute;top:0;left:0px;width:114%;height:102%;-webkit-clip-path:polygon(44% 1.6076951546%, 44.5521140031% 1.3079217097%, 45.1191602831% 1.0374545083%, 45.6995846055% 0.797034882%, 46.2917960675% 0.5873218045%, 46.8941714588% 0.4088900845%, 47.5050597102% 0.2622287912%, 48.1227864195% 0.1477399129%, 48.7456584408% 0.0657372556%, 49.3719685251% 0.0164455829%, 50% 0%, 50.6280314749% 0.0164455829%, 51.2543415592% 0.0657372556%, 51.8772135805% 0.1477399129%, 52.4949402898% 0.2622287912%, 53.1058285412% 0.4088900845%, 53.7082039325% 0.5873218045%, 54.3004153945% 0.797034882%, 54.8808397169% 1.0374545083%, 55.4478859969% 1.3079217097%, 56% 1.6076951546%, 88.9089653438% 20.6076951546%, 89.444633764% 20.9359531847%, 89.9623883713% 21.2917960675%, 90.4608100364% 21.6742484625%, 90.9385326201% 22.0822620943%, 91.394246718% 22.5147186258%, 91.8267032495% 22.9704327237%, 92.2347168813% 23.4481553074%, 92.6171692763% 23.9465769725%, 92.9730121592% 24.4643315798%, 93.3012701892% 25%, 93.6010436341% 25.5521140031%, 93.8715108355% 26.1191602831%, 94.1119304618% 26.6995846055%, 94.3216435393% 27.2917960675%, 94.5000752593% 27.8941714588%, 94.6467365526% 28.5050597102%, 94.7612254309% 29.1227864195%, 94.8432280882% 29.7456584408%, 94.8925197609% 30.3719685251%, 94.9089653438% 31%, 94.9089653438% 69%, 94.8925197609% 69.6280314749%, 94.8432280882% 70.2543415592%, 94.7612254309% 70.8772135805%, 94.6467365526% 71.4949402898%, 94.5000752593% 72.1058285412%, 94.3216435393% 72.7082039325%, 94.1119304618% 73.3004153945%, 93.8715108355% 73.8808397169%, 93.6010436341% 74.4478859969%, 93.3012701892% 75%, 92.9730121592% 75.5356684202%, 92.6171692763% 76.0534230275%, 92.2347168813% 76.5518446926%, 91.8267032495% 77.0295672763%, 91.394246718% 77.4852813742%, 90.9385326201% 77.9177379057%, 90.4608100364% 78.3257515375%, 89.9623883713% 78.7082039325%, 89.444633764% 79.0640468153%, 88.9089653438% 79.3923048454%, 56% 98.3923048454%, 55.4478859969% 98.6920782903%, 54.8808397169% 98.9625454917%, 54.3004153945% 99.202965118%, 53.7082039325% 99.4126781955%, 53.1058285412% 99.5911099155%, 52.4949402898% 99.7377712088%, 51.8772135805% 99.8522600871%, 51.2543415592% 99.9342627444%, 50.6280314749% 99.9835544171%, 50% 100%, 49.3719685251% 99.9835544171%, 48.7456584408% 99.9342627444%, 48.1227864195% 99.8522600871%, 47.5050597102% 99.7377712088%, 46.8941714588% 99.5911099155%, 46.2917960675% 99.4126781955%, 45.6995846055% 99.202965118%, 45.1191602831% 98.9625454917%, 44.5521140031% 98.6920782903%, 44% 98.3923048454%, 11.0910346562% 79.3923048454%, 10.5553662361% 79.0640468153%, 10.0376116287% 78.7082039325%, 9.5391899636% 78.3257515375%, 9.0614673799% 77.9177379057%, 8.605753282% 77.4852813742%, 8.1732967505% 77.0295672763%, 7.7652831188% 76.5518446926%, 7.3828307237% 76.0534230275%, 7.0269878409% 75.5356684202%, 6.6987298108% 75%, 6.398956366% 74.4478859969%, 6.1284891646% 73.8808397169%, 5.8880695383% 73.3004153945%, 5.6783564608% 72.7082039325%, 5.4999247409% 72.1058285412%, 5.3532634476% 71.4949402898%, 5.2387745694% 70.8772135805%, 5.1567719123% 70.2543415593%, 5.1074802398% 69.628031475%, 5.0910346571% 69.0000000001%, 5.091034742% 31.0000000137%, 5.1074803253% 30.3719685388%, 5.1567719985% 29.7456584546%, 5.2387746566% 29.1227864334%, 5.353263536% 28.5050597243%, 5.4999248308% 27.8941714731%, 5.6783565529% 27.2917960821%, 5.8880696333% 26.6995846206%, 6.1284892635% 26.1191602988%, 6.3989564703% 25.5521140197%, 6.6987299224% 25.0000000178%, 7.0269879623% 24.4643315993%, 7.3828308583% 23.9465769942%, 7.7652832709% 23.4481553321%, 8.1732969261% 22.9704327525%, 8.6057534886% 22.5147186601%, 9.0614676277% 22.0822621361%, 9.5391902655% 21.6742485142%, 10.0376120016% 21.2917961323%, 10.5553667018% 20.9359532669%, 11.0910352431% 20.6076952598%);clip-path:polygon(44% 1.6076951546%, 44.5521140031% 1.3079217097%, 45.1191602831% 1.0374545083%, 45.6995846055% 0.797034882%, 46.2917960675% 0.5873218045%, 46.8941714588% 0.4088900845%, 47.5050597102% 0.2622287912%, 48.1227864195% 0.1477399129%, 48.7456584408% 0.0657372556%, 49.3719685251% 0.0164455829%, 50% 0%, 50.6280314749% 0.0164455829%, 51.2543415592% 0.0657372556%, 51.8772135805% 0.1477399129%, 52.4949402898% 0.2622287912%, 53.1058285412% 0.4088900845%, 53.7082039325% 0.5873218045%, 54.3004153945% 0.797034882%, 54.8808397169% 1.0374545083%, 55.4478859969% 1.3079217097%, 56% 1.6076951546%, 88.9089653438% 20.6076951546%, 89.444633764% 20.9359531847%, 89.9623883713% 21.2917960675%, 90.4608100364% 21.6742484625%, 90.9385326201% 22.0822620943%, 91.394246718% 22.5147186258%, 91.8267032495% 22.9704327237%, 92.2347168813% 23.4481553074%, 92.6171692763% 23.9465769725%, 92.9730121592% 24.4643315798%, 93.3012701892% 25%, 93.6010436341% 25.5521140031%, 93.8715108355% 26.1191602831%, 94.1119304618% 26.6995846055%, 94.3216435393% 27.2917960675%, 94.5000752593% 27.8941714588%, 94.6467365526% 28.5050597102%, 94.7612254309% 29.1227864195%, 94.8432280882% 29.7456584408%, 94.8925197609% 30.3719685251%, 94.9089653438% 31%, 94.9089653438% 69%, 94.8925197609% 69.6280314749%, 94.8432280882% 70.2543415592%, 94.7612254309% 70.8772135805%, 94.6467365526% 71.4949402898%, 94.5000752593% 72.1058285412%, 94.3216435393% 72.7082039325%, 94.1119304618% 73.3004153945%, 93.8715108355% 73.8808397169%, 93.6010436341% 74.4478859969%, 93.3012701892% 75%, 92.9730121592% 75.5356684202%, 92.6171692763% 76.0534230275%, 92.2347168813% 76.5518446926%, 91.8267032495% 77.0295672763%, 91.394246718% 77.4852813742%, 90.9385326201% 77.9177379057%, 90.4608100364% 78.3257515375%, 89.9623883713% 78.7082039325%, 89.444633764% 79.0640468153%, 88.9089653438% 79.3923048454%, 56% 98.3923048454%, 55.4478859969% 98.6920782903%, 54.8808397169% 98.9625454917%, 54.3004153945% 99.202965118%, 53.7082039325% 99.4126781955%, 53.1058285412% 99.5911099155%, 52.4949402898% 99.7377712088%, 51.8772135805% 99.8522600871%, 51.2543415592% 99.9342627444%, 50.6280314749% 99.9835544171%, 50% 100%, 49.3719685251% 99.9835544171%, 48.7456584408% 99.9342627444%, 48.1227864195% 99.8522600871%, 47.5050597102% 99.7377712088%, 46.8941714588% 99.5911099155%, 46.2917960675% 99.4126781955%, 45.6995846055% 99.202965118%, 45.1191602831% 98.9625454917%, 44.5521140031% 98.6920782903%, 44% 98.3923048454%, 11.0910346562% 79.3923048454%, 10.5553662361% 79.0640468153%, 10.0376116287% 78.7082039325%, 9.5391899636% 78.3257515375%, 9.0614673799% 77.9177379057%, 8.605753282% 77.4852813742%, 8.1732967505% 77.0295672763%, 7.7652831188% 76.5518446926%, 7.3828307237% 76.0534230275%, 7.0269878409% 75.5356684202%, 6.6987298108% 75%, 6.398956366% 74.4478859969%, 6.1284891646% 73.8808397169%, 5.8880695383% 73.3004153945%, 5.6783564608% 72.7082039325%, 5.4999247409% 72.1058285412%, 5.3532634476% 71.4949402898%, 5.2387745694% 70.8772135805%, 5.1567719123% 70.2543415593%, 5.1074802398% 69.628031475%, 5.0910346571% 69.0000000001%, 5.091034742% 31.0000000137%, 5.1074803253% 30.3719685388%, 5.1567719985% 29.7456584546%, 5.2387746566% 29.1227864334%, 5.353263536% 28.5050597243%, 5.4999248308% 27.8941714731%, 5.6783565529% 27.2917960821%, 5.8880696333% 26.6995846206%, 6.1284892635% 26.1191602988%, 6.3989564703% 25.5521140197%, 6.6987299224% 25.0000000178%, 7.0269879623% 24.4643315993%, 7.3828308583% 23.9465769942%, 7.7652832709% 23.4481553321%, 8.1732969261% 22.9704327525%, 8.6057534886% 22.5147186601%, 9.0614676277% 22.0822621361%, 9.5391902655% 21.6742485142%, 10.0376120016% 21.2917961323%, 10.5553667018% 20.9359532669%, 11.0910352431% 20.6076952598%)}.hex-btn{-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:\"Roboto Condensed\", sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.central-icon{height:16px;width:16px}";

const Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
        this.colour = 'default'; //ColourEnums.default;
        this.icon = null;
        this.iconPosition = 'default'; //PositionEnums.default;
        this.buttonId = null;
        this.buttonType = 'button'; //PositionEnums.default;
        this.disabled = false;
    }
    render() {
        let icon = null;
        if (this.icon) {
            const IconTag = `tf-icon-${this.icon}`;
            icon = index.h(IconTag, { class: `icon-${this.size}-${this.iconPosition === 'right' ? 'r' : 'l'}` });
        }
        return (index.h("span", { id: "button-containing-span" }, index.h("button", { class: `tw-btn size-${this.size} colour-${this.colour} ${this.disabled ? 'disabled' : ''}`, type: this.buttonType, id: this.buttonId, disabled: this.disabled }, (icon && (this.iconPosition == 'left' || this.iconPosition == 'default')) &&
            icon, index.h("slot", null), (icon && this.iconPosition == 'right') &&
            icon)));
    }
};
Button.style = buttonCss;

const buttonContainerCss = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;border-radius:0.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}";

const Button$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
    }
    render() {
        return (index.h("span", { id: "button-containing-span" }, index.h("slot", null)));
    }
};
Button$1.style = buttonContainerCss;

const cardCss = "section{padding:0.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:0.75rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16)}section.default,section.grey{background-color:#D0DFE3}section.navy{background-color:#363154}#card-content-container{margin-bottom:0.3125rem;background-color:#ffffff;border-radius:0.4375rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);padding:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}";

const Card = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'default';
    }
    render() {
        return (index.h("section", { class: this.colour }, index.h("slot", null)));
    }
};
Card.style = cardCss;

const cardContainerCss = "*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width: 640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:0.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:0.75rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#D0DFE3}#contained-card.navy{background-color:#363154}::slotted(*){width:100%}::slotted(tf-contained-card){display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;min-height:100%;height:auto;width:100%;margin-right:15px}@media only screen and (max-width: 640px){::slotted(tf-contained-card){margin-right:0}}::slotted(tf-contained-card:last-of-type){margin-right:0}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";

const CardContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'default';
    }
    render() {
        return (index.h("div", { id: "card-container" }, index.h("slot", null)));
    }
};
CardContainer.style = cardContainerCss;

const cardCss$1 = "section{padding:0.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:0.75rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16)}section.default,section.grey{background-color:#D0DFE3}section.navy{background-color:#363154}#card-content-container{margin-bottom:0.3125rem;background-color:#ffffff;border-radius:0.4375rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);padding:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}";

const Node = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { id: "card-content-container" }, index.h("slot", null)));
    }
};
Node.style = cardCss$1;

const cardTitleCss = "h2{-webkit-margin-before:20px;margin-block-start:20px;-webkit-margin-after:15px;margin-block-end:15px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-left:0;margin-right:0;font-family:\"Roboto Condensed\", sans-serif;font-size:22px;line-height:22px;font-weight:bold;display:block}h2.default,h2.blue{color:#224595}h2.white{color:#ffffff}";

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = "blue";
    }
    render() {
        return (index.h("h2", { class: this.colour }, index.h("slot", null)));
    }
};
CardTitle.style = cardTitleCss;

const checkboxCss = ".checkbox-wrapper{-ms-flex-direction:column;flex-direction:column;margin-top:1rem}.form-label{display:block;font-size:0.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.input-label-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-container{width:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}input[type=checkbox],input{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.form-checkbox{-webkit-print-color-adjust:exact;color-adjust:exact;background-origin:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0;width:1.5rem;height:1.5rem;color:#224595;border-color:#D0DFE3;border-width:1px;border-radius:0.25rem}.form-checkbox:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}@media not print{.form-checkbox::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-checkbox:focus{outline:0;border-color:#8598C4;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.form-checkbox:checked:focus{border-color:transparent}.form-checkbox-styled{height:1rem;width:1rem;color:#224595;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.form-checkbox-error{color:#771d1d;border-color:#f8b4b4}.form-checkbox-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45);box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45)}.bottom-text{margin-left:30px;margin-top:2px;font-size:0.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#D0DFE3}";

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.checked = false;
        this.required = false;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.tfOnChecked = index.createEvent(this, "tfOnChecked", 7);
    }
    //
    errorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    }
    async getChecked() {
        try {
            return this.itemRef.checked;
        }
        catch (e) {
            throw `Can't find itemRef.checked for ${this.name} tf-checkbox. More details: ${e}`;
        }
    }
    async getValue() {
        try {
            return this.itemRef.value;
        }
        catch (e) {
            throw `Can't find itemRef.value for ${this.name} tf-checkbox. More details: ${e}`;
        }
    }
    async getItemRef() {
        try {
            return this.itemRef;
        }
        catch (e) {
            throw `Can't find itemRef for ${this.name} tf-checkbox. More details: ${e}`;
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
    }
    async onUserInteraction(event) {
        const checked = await this.getChecked();
        this.tfOnChecked.emit({
            id: this.name,
            checked,
            value: checked,
            proxyEvent: Object.assign({}, event)
        });
    }
    setError() {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the selection';
        }
        this.showErrorIcon = this.showError = this.error;
    }
    render() {
        let bottomText = index.h("p", { class: "bottom-text hide" }, "\u00A0");
        if (this.showHint) {
            bottomText = index.h("p", { class: "bottom-text hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = index.h("p", { class: "bottom-text error" }, this.errorMessage);
        }
        return (index.h("div", { class: "checkbox-wrapper" }, index.h("div", { class: "input-label-container" }, index.h("div", { class: "checkbox-container" }, index.h("input", { id: this.name, ref: el => this.itemRef = el, type: "checkbox", class: `
								form-checkbox 
								form-checkbox-styled 
								${this.showError ? 'form-checkbox-error' : ''} 
							`, checked: this.checked, required: this.required, onInput: this.onUserInteraction.bind(this) })), index.h("label", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`, htmlFor: this.name }, this.label)), bottomText));
    }
    static get watchers() { return {
        "error": ["errorChanged"]
    }; }
};
List.style = checkboxCss;

const cardContainerCss$1 = "*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width: 640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:0.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:0.75rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#D0DFE3}#contained-card.navy{background-color:#363154}::slotted(*){width:100%}::slotted(tf-contained-card){display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;min-height:100%;height:auto;width:100%;margin-right:15px}@media only screen and (max-width: 640px){::slotted(tf-contained-card){margin-right:0}}::slotted(tf-contained-card:last-of-type){margin-right:0}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";

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

const Divider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "wrapper" }, index.h("div", { class: "divvy" })));
    }
};
Divider.style = ".wrapper{\n\t\t\tmargin-top: 1.5rem;\n\t\t\tmargin-bottom: 1.5rem;\n\t\t\tmargin-right: auto;\n\t\t\tmargin-left: auto;\n\t\t\twidth: 100%;\n\t\t}\n\t\t.divvy{\n\t\t\tdisplay:flex;\n\t\t\twidth: 100%;\n\t\t\theight:1px;\n\t\t\tbackground-color:#cbd5e0;\n\t\t}";

const dropdownCss = ".dd-container{position:relative;display:inline-block;text-align:left}.dd-panel{position:absolute;margin-top:0.5rem;width:14rem;border-radius:0.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);z-index:40}.right{-webkit-transform-origin:top right;transform-origin:top right;right:0}.left{-webkit-transform-origin:top left;transform-origin:top left;left:0}.dd-panel.show{pointer-events:auto;opacity:1;--transform-scale-x:1;--transform-scale-y:1;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transition-duration:100ms;transition-duration:100ms}.dd-panel.hide{pointer-events:none;opacity:0;--transform-scale-x:.95;--transform-scale-y:.95;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 1, 1);transition-timing-function:cubic-bezier(0.4, 0, 1, 1);-webkit-transition-duration:75ms;transition-duration:75ms}.dd-panel-container{border-radius:0.375rem;background-color:#D0DFE3;-webkit-box-shadow:0 0 0 1px rgba(0, 0, 0, 0.05);box-shadow:0 0 0 1px rgba(0, 0, 0, 0.05)}.dd-panel-blue{background-color:#224595}.dd-panel-bg{padding-top:0.25rem;padding-bottom:0.25rem}";

const Dropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatedId = String(Math.floor(Math.random() * 99999));
        this.isOpen = false;
        this.displayTitle = "";
        this.dropdownId = null;
        this.size = 'default';
        this.colour = 'grey';
        this.disabled = false;
        this.position = "right";
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
        const pos = this.position.toLowerCase() === 'left' ? 'left' : 'right';
        let options = (index.h("slot", null));
        if (this.parsedOptions.length) {
            options = this.parsedOptions.map(opt => (index.h("tf-dropdown-rendered-option", { value: opt.value, "element-title": opt.title, colour: this.colour, parent: this.generatedId }, opt.title)));
        }
        return (index.h("div", { class: "dd-container" }, index.h("tf-button-container", { id: this.dropdownId }, index.h("tf-button", { size: 'm', icon: this.isOpen ? 'chevron-up' : 'chevron-down', "icon-position": "right", colour: this.colour, onClick: this.onToggle.bind(this) }, this.displayTitle)), index.h("div", { class: `
					dd-panel 
					${pos} 
					${this.isOpen ? 'show' : 'hide'}
				` }, index.h("div", { class: `dd-panel-container dd-panel-${this.colour}` }, index.h("div", { class: "dd-panel-bg" }, options)))));
    }
    get slotElement() { return index.getElement(this); }
};
Dropdown.style = dropdownCss;

const dropdownLinkCss = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#D0DFE3;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.dd-link:hover{background-color:#B1BDC1}.dd-link:focus{outline:0;background-color:#B1BDC1}.dd-link-blue{color:#ffffff;background-color:#224595}.dd-link-blue:hover{background-color:#4260A4}.dd-link-blue:focus{outline:0;background-color:#1E3D85}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.25rem}.dd-link-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";

const DropdownLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hrefTarget = "_self";
        this.colour = 'grey';
        this.tfDropdownLinkClicked = index.createEvent(this, "tfDropdownLinkClicked", 7);
        this.tfCloseDropdown = index.createEvent(this, "tfCloseDropdown", 7);
    }
    onDropdownLinkClicked() {
        this.tfDropdownLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseDropdown.emit();
    }
    render() {
        let linkButton = (index.h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, target: this.hrefTarget, class: `dd-link dd-link-${this.colour}` }, index.h("span", { class: "dd-link-title" }, index.h("slot", null))));
        if (this.routerLink) {
            linkButton = (index.h("a", { onClick: this.onDropdownLinkClicked.bind(this), title: !this.hrefTitle ? `Go to ${this.hrefLink}` : this.hrefTitle, class: `dd-link dd-link-${this.colour}` }, index.h("span", { class: "dd-link-title" }, index.h("slot", null))));
        }
        return (linkButton);
    }
};
DropdownLink.style = dropdownLinkCss;

const DropdownOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};

const dropdownLinkCss$1 = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#D0DFE3;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.dd-link:hover{background-color:#B1BDC1}.dd-link:focus{outline:0;background-color:#B1BDC1}.dd-link-blue{color:#ffffff;background-color:#224595}.dd-link-blue:hover{background-color:#4260A4}.dd-link-blue:focus{outline:0;background-color:#1E3D85}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.25rem}.dd-link-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";

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
        return (index.h("div", { onClick: this.onDropdownOptionClicked.bind(this), "element-title": !this.elementTitle ? `${this.value}` : this.elementTitle, class: `dd-link dd-link-${this.colour}` }, index.h("span", { class: "dd-link-title" }, index.h("slot", null))));
    }
};
DropdownRenderedOption.style = dropdownLinkCss$1;

const hexagonButtonCss = ":host{display:-ms-flexbox;display:flex;position:relative}::slotted(*){display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none}button{border:none;display:-ms-flexbox;display:flex;padding:0;margin:0;position:absolute;top:0;left:-3px;width:114%;height:102%;-webkit-clip-path:polygon(44% 1.6076951546%, 44.5521140031% 1.3079217097%, 45.1191602831% 1.0374545083%, 45.6995846055% 0.797034882%, 46.2917960675% 0.5873218045%, 46.8941714588% 0.4088900845%, 47.5050597102% 0.2622287912%, 48.1227864195% 0.1477399129%, 48.7456584408% 0.0657372556%, 49.3719685251% 0.0164455829%, 50% 0%, 50.6280314749% 0.0164455829%, 51.2543415592% 0.0657372556%, 51.8772135805% 0.1477399129%, 52.4949402898% 0.2622287912%, 53.1058285412% 0.4088900845%, 53.7082039325% 0.5873218045%, 54.3004153945% 0.797034882%, 54.8808397169% 1.0374545083%, 55.4478859969% 1.3079217097%, 56% 1.6076951546%, 88.9089653438% 20.6076951546%, 89.444633764% 20.9359531847%, 89.9623883713% 21.2917960675%, 90.4608100364% 21.6742484625%, 90.9385326201% 22.0822620943%, 91.394246718% 22.5147186258%, 91.8267032495% 22.9704327237%, 92.2347168813% 23.4481553074%, 92.6171692763% 23.9465769725%, 92.9730121592% 24.4643315798%, 93.3012701892% 25%, 93.6010436341% 25.5521140031%, 93.8715108355% 26.1191602831%, 94.1119304618% 26.6995846055%, 94.3216435393% 27.2917960675%, 94.5000752593% 27.8941714588%, 94.6467365526% 28.5050597102%, 94.7612254309% 29.1227864195%, 94.8432280882% 29.7456584408%, 94.8925197609% 30.3719685251%, 94.9089653438% 31%, 94.9089653438% 69%, 94.8925197609% 69.6280314749%, 94.8432280882% 70.2543415592%, 94.7612254309% 70.8772135805%, 94.6467365526% 71.4949402898%, 94.5000752593% 72.1058285412%, 94.3216435393% 72.7082039325%, 94.1119304618% 73.3004153945%, 93.8715108355% 73.8808397169%, 93.6010436341% 74.4478859969%, 93.3012701892% 75%, 92.9730121592% 75.5356684202%, 92.6171692763% 76.0534230275%, 92.2347168813% 76.5518446926%, 91.8267032495% 77.0295672763%, 91.394246718% 77.4852813742%, 90.9385326201% 77.9177379057%, 90.4608100364% 78.3257515375%, 89.9623883713% 78.7082039325%, 89.444633764% 79.0640468153%, 88.9089653438% 79.3923048454%, 56% 98.3923048454%, 55.4478859969% 98.6920782903%, 54.8808397169% 98.9625454917%, 54.3004153945% 99.202965118%, 53.7082039325% 99.4126781955%, 53.1058285412% 99.5911099155%, 52.4949402898% 99.7377712088%, 51.8772135805% 99.8522600871%, 51.2543415592% 99.9342627444%, 50.6280314749% 99.9835544171%, 50% 100%, 49.3719685251% 99.9835544171%, 48.7456584408% 99.9342627444%, 48.1227864195% 99.8522600871%, 47.5050597102% 99.7377712088%, 46.8941714588% 99.5911099155%, 46.2917960675% 99.4126781955%, 45.6995846055% 99.202965118%, 45.1191602831% 98.9625454917%, 44.5521140031% 98.6920782903%, 44% 98.3923048454%, 11.0910346562% 79.3923048454%, 10.5553662361% 79.0640468153%, 10.0376116287% 78.7082039325%, 9.5391899636% 78.3257515375%, 9.0614673799% 77.9177379057%, 8.605753282% 77.4852813742%, 8.1732967505% 77.0295672763%, 7.7652831188% 76.5518446926%, 7.3828307237% 76.0534230275%, 7.0269878409% 75.5356684202%, 6.6987298108% 75%, 6.398956366% 74.4478859969%, 6.1284891646% 73.8808397169%, 5.8880695383% 73.3004153945%, 5.6783564608% 72.7082039325%, 5.4999247409% 72.1058285412%, 5.3532634476% 71.4949402898%, 5.2387745694% 70.8772135805%, 5.1567719123% 70.2543415593%, 5.1074802398% 69.628031475%, 5.0910346571% 69.0000000001%, 5.091034742% 31.0000000137%, 5.1074803253% 30.3719685388%, 5.1567719985% 29.7456584546%, 5.2387746566% 29.1227864334%, 5.353263536% 28.5050597243%, 5.4999248308% 27.8941714731%, 5.6783565529% 27.2917960821%, 5.8880696333% 26.6995846206%, 6.1284892635% 26.1191602988%, 6.3989564703% 25.5521140197%, 6.6987299224% 25.0000000178%, 7.0269879623% 24.4643315993%, 7.3828308583% 23.9465769942%, 7.7652832709% 23.4481553321%, 8.1732969261% 22.9704327525%, 8.6057534886% 22.5147186601%, 9.0614676277% 22.0822621361%, 9.5391902655% 21.6742485142%, 10.0376120016% 21.2917961323%, 10.5553667018% 20.9359532669%, 11.0910352431% 20.6076952598%);clip-path:polygon(44% 1.6076951546%, 44.5521140031% 1.3079217097%, 45.1191602831% 1.0374545083%, 45.6995846055% 0.797034882%, 46.2917960675% 0.5873218045%, 46.8941714588% 0.4088900845%, 47.5050597102% 0.2622287912%, 48.1227864195% 0.1477399129%, 48.7456584408% 0.0657372556%, 49.3719685251% 0.0164455829%, 50% 0%, 50.6280314749% 0.0164455829%, 51.2543415592% 0.0657372556%, 51.8772135805% 0.1477399129%, 52.4949402898% 0.2622287912%, 53.1058285412% 0.4088900845%, 53.7082039325% 0.5873218045%, 54.3004153945% 0.797034882%, 54.8808397169% 1.0374545083%, 55.4478859969% 1.3079217097%, 56% 1.6076951546%, 88.9089653438% 20.6076951546%, 89.444633764% 20.9359531847%, 89.9623883713% 21.2917960675%, 90.4608100364% 21.6742484625%, 90.9385326201% 22.0822620943%, 91.394246718% 22.5147186258%, 91.8267032495% 22.9704327237%, 92.2347168813% 23.4481553074%, 92.6171692763% 23.9465769725%, 92.9730121592% 24.4643315798%, 93.3012701892% 25%, 93.6010436341% 25.5521140031%, 93.8715108355% 26.1191602831%, 94.1119304618% 26.6995846055%, 94.3216435393% 27.2917960675%, 94.5000752593% 27.8941714588%, 94.6467365526% 28.5050597102%, 94.7612254309% 29.1227864195%, 94.8432280882% 29.7456584408%, 94.8925197609% 30.3719685251%, 94.9089653438% 31%, 94.9089653438% 69%, 94.8925197609% 69.6280314749%, 94.8432280882% 70.2543415592%, 94.7612254309% 70.8772135805%, 94.6467365526% 71.4949402898%, 94.5000752593% 72.1058285412%, 94.3216435393% 72.7082039325%, 94.1119304618% 73.3004153945%, 93.8715108355% 73.8808397169%, 93.6010436341% 74.4478859969%, 93.3012701892% 75%, 92.9730121592% 75.5356684202%, 92.6171692763% 76.0534230275%, 92.2347168813% 76.5518446926%, 91.8267032495% 77.0295672763%, 91.394246718% 77.4852813742%, 90.9385326201% 77.9177379057%, 90.4608100364% 78.3257515375%, 89.9623883713% 78.7082039325%, 89.444633764% 79.0640468153%, 88.9089653438% 79.3923048454%, 56% 98.3923048454%, 55.4478859969% 98.6920782903%, 54.8808397169% 98.9625454917%, 54.3004153945% 99.202965118%, 53.7082039325% 99.4126781955%, 53.1058285412% 99.5911099155%, 52.4949402898% 99.7377712088%, 51.8772135805% 99.8522600871%, 51.2543415592% 99.9342627444%, 50.6280314749% 99.9835544171%, 50% 100%, 49.3719685251% 99.9835544171%, 48.7456584408% 99.9342627444%, 48.1227864195% 99.8522600871%, 47.5050597102% 99.7377712088%, 46.8941714588% 99.5911099155%, 46.2917960675% 99.4126781955%, 45.6995846055% 99.202965118%, 45.1191602831% 98.9625454917%, 44.5521140031% 98.6920782903%, 44% 98.3923048454%, 11.0910346562% 79.3923048454%, 10.5553662361% 79.0640468153%, 10.0376116287% 78.7082039325%, 9.5391899636% 78.3257515375%, 9.0614673799% 77.9177379057%, 8.605753282% 77.4852813742%, 8.1732967505% 77.0295672763%, 7.7652831188% 76.5518446926%, 7.3828307237% 76.0534230275%, 7.0269878409% 75.5356684202%, 6.6987298108% 75%, 6.398956366% 74.4478859969%, 6.1284891646% 73.8808397169%, 5.8880695383% 73.3004153945%, 5.6783564608% 72.7082039325%, 5.4999247409% 72.1058285412%, 5.3532634476% 71.4949402898%, 5.2387745694% 70.8772135805%, 5.1567719123% 70.2543415593%, 5.1074802398% 69.628031475%, 5.0910346571% 69.0000000001%, 5.091034742% 31.0000000137%, 5.1074803253% 30.3719685388%, 5.1567719985% 29.7456584546%, 5.2387746566% 29.1227864334%, 5.353263536% 28.5050597243%, 5.4999248308% 27.8941714731%, 5.6783565529% 27.2917960821%, 5.8880696333% 26.6995846206%, 6.1284892635% 26.1191602988%, 6.3989564703% 25.5521140197%, 6.6987299224% 25.0000000178%, 7.0269879623% 24.4643315993%, 7.3828308583% 23.9465769942%, 7.7652832709% 23.4481553321%, 8.1732969261% 22.9704327525%, 8.6057534886% 22.5147186601%, 9.0614676277% 22.0822621361%, 9.5391902655% 21.6742485142%, 10.0376120016% 21.2917961323%, 10.5553667018% 20.9359532669%, 11.0910352431% 20.6076952598%)}button.white{background:#ffffff;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}button.white:hover{background:#e6e6e6;background-color:#e6e6e6;color:#ffffff}button.white:active{background:white;background-color:white;color:#ffffff}button.white:focus{background:#ffffff;background-color:#ffffff;color:#ffffff}button.blue,button.primary{background:#224595;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}button.blue:hover,button.primary:hover{background:#19326b;background-color:#19326b;color:#ffffff}button.blue:active,button.primary:active{background:#3b69d2;background-color:#3b69d2;color:#ffffff}button.blue:focus,button.primary:focus{background:#224595;background-color:#224595;color:#ffffff}button.aqua,button.accent{background:#32f7dc;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}button.aqua:hover,button.accent:hover{background:#07bca3;background-color:#07bca3;color:#ffffff}button.aqua:active,button.accent:active{background:#c5fdf5;background-color:#c5fdf5;color:#ffffff}button.aqua:focus,button.accent:focus{background:#32f7dc;background-color:#32f7dc;color:#ffffff}button.grey{background:#d0dfe3;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}button.grey:hover{background:#b0c9d0;background-color:#b0c9d0;color:#ffffff}button.grey:active{background:white;background-color:white;color:#ffffff}button.grey:focus{background:#d0dfe3;background-color:#d0dfe3;color:#ffffff}button.navy,button.dark{background:#363154;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}button.navy:hover,button.dark:hover{background:#4b4474;background-color:#4b4474;color:#ffffff}button.navy:active,button.dark:active{background:#7a72ac;background-color:#7a72ac;color:#ffffff}button.navy:focus,button.dark:focus{background:#363154;background-color:#363154;color:#ffffff}button.white-dark{background:#ffffff;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}button.white-dark:hover{background:#4b4474;background-color:#4b4474;color:#ffffff}button.white-dark:active{background:#7a72ac;background-color:#7a72ac;color:#ffffff}button.white-dark:focus{background:#363154;background-color:#363154;color:#ffffff}button.gradient{background:#224595;background-image:-webkit-gradient(linear, left top, right top, from(#005fab), color-stop(30%, #004997), color-stop(67%, #00297a), color-stop(89%, #00297a), color-stop(89%, #00287a), to(#161b4b));background-image:linear-gradient(to right, #005fab 0%, #004997 30%, #00297a 67%, #00297a 89%, #00287a 89%, #161b4b 100%);cursor:pointer;outline:none;-webkit-transition:background-image 0.8s;transition:background-image 0.8s;background-position:center}";

const HexagonButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = "accent";
        this.buttonId = null;
        this.buttonType = 'button';
        this.disabled = false;
    }
    // onButtonClickHandler(event){
    // 	// pauses the native event from being dispatched to allow the 'click' effect on the button
    // 	event.preventDefault();
    // 	event.stopPropagation();
    // 	setTimeout(() => {
    // 		this.el.dispatchEvent(event);
    // 	}, 500);
    // }
    render() {
        return (index.h("button", { tabindex: "0", "aria-pressed": "false", type: this.buttonType, id: this.buttonId, disabled: this.disabled, class: `sass-hex ${this.color}` }, index.h("slot", null)));
    }
    get el() { return index.getElement(this); }
};
HexagonButton.style = hexagonButtonCss;

const buttonCss$1 = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;width:100%;border-radius:0.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}.tw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:\"Roboto Condensed\", sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}::slotted([slot=icon]){color:red}.size-xs,.size-extra-small{padding-left:0.625rem;padding-right:0.625rem;padding-top:0.375rem;padding-bottom:0.375rem;font-size:0.75rem;line-height:1rem;border-radius:0.25rem}.size-s,.size-small{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1rem;border-radius:0.375rem}.size-m,.size-medium,.size-default{padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;border-radius:0.375rem}.size-l,.size-large{padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1rem;line-height:1.5rem;border-radius:0.375rem}.size-xl,.size-extra-large{padding-left:1.5rem;padding-right:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:1rem;line-height:1.5rem;border-radius:0.375rem}.colour-blue,.colour-default{color:#ffffff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260A4}.colour-blue:active,.colour-default:active{outline:0;border-color:#32F7DC;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);background-color:#1E3D85}.colour-blue:focus,.colour-default:focus{outline:0;border-color:#1E3D85;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.colour-aqua{outline:0;color:#122551;background-color:#32F7DC}.colour-aqua:hover{outline:0;background-color:#84FAEA}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2AD2BB}.colour-aqua:focus{outline:0;border-color:#2AD2BB;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.colour-navy{color:#ffffff;background-color:#363154}.colour-navy:hover{background-color:#534F6D}.colour-navy:active{outline:0;border-color:#363154;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);background-color:#25223A}.colour-navy:focus{outline:0;border-color:#25223A;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.colour-grey{color:#122551;background-color:#D0DFE3}.colour-grey:hover{background-color:#D7E3E7}.colour-grey:active{outline:0;border-color:#D0DFE3;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);background-color:#B1BDC1}.colour-grey:focus{outline:0;border-color:#B1BDC1;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.disabled{color:#B1BDC1;background-color:#E7EFF1}.disabled:hover{color:#B1BDC1;background-color:#E7EFF1}.icon-xs-l,.icon-extra-small-l{margin-left:-0.125rem;margin-right:0.5rem;height:1rem;width:1rem}.icon-xs-r,.icon-extra-small-r{margin-left:0.5rem;margin-right:-0.125rem;height:1rem;width:1rem}.icon-s-l,.icon-small-l{margin-left:-0.125rem;margin-right:0.5rem;height:1rem;width:1rem}.icon-s-r,.icon-small-r{margin-left:0.5rem;margin-right:-0.125rem;height:1rem;width:1rem}.icon-m-l,.icon-medium-l,.icon-default-l{margin-left:-0.25rem;margin-right:0.5rem;height:1.25rem;width:1.25rem}.icon-m-r,.icon-medium-r,.icon-default-r{margin-left:0.5rem;margin-right:-0.25rem;height:1.25rem;width:1.25rem}.icon-l-l,.icon-large-l{margin-left:-0.25rem;margin-right:0.75rem;height:1.25rem;width:1.25rem}.icon-l-r,.icon-large-r{margin-left:0.75rem;margin-right:-0.25rem;height:1.25rem;width:1.25rem}.icon-xl-l,.icon-extra-large-l{margin-left:-0.25rem;margin-right:0.75rem;height:1.25rem;width:1.25rem}.icon-xl-r,.icon-extra-large-r{margin-left:0.75rem;margin-right:-0.25rem;height:1.25rem;width:1.25rem}.hex-container{display:-ms-flexbox;display:flex;position:relative;width:31px;height:30px}.hex-btn{border:none;width:100% !important;display:-ms-flexbox;display:flex;padding:0;margin:0;position:absolute;top:0;left:0px;width:114%;height:102%;-webkit-clip-path:polygon(44% 1.6076951546%, 44.5521140031% 1.3079217097%, 45.1191602831% 1.0374545083%, 45.6995846055% 0.797034882%, 46.2917960675% 0.5873218045%, 46.8941714588% 0.4088900845%, 47.5050597102% 0.2622287912%, 48.1227864195% 0.1477399129%, 48.7456584408% 0.0657372556%, 49.3719685251% 0.0164455829%, 50% 0%, 50.6280314749% 0.0164455829%, 51.2543415592% 0.0657372556%, 51.8772135805% 0.1477399129%, 52.4949402898% 0.2622287912%, 53.1058285412% 0.4088900845%, 53.7082039325% 0.5873218045%, 54.3004153945% 0.797034882%, 54.8808397169% 1.0374545083%, 55.4478859969% 1.3079217097%, 56% 1.6076951546%, 88.9089653438% 20.6076951546%, 89.444633764% 20.9359531847%, 89.9623883713% 21.2917960675%, 90.4608100364% 21.6742484625%, 90.9385326201% 22.0822620943%, 91.394246718% 22.5147186258%, 91.8267032495% 22.9704327237%, 92.2347168813% 23.4481553074%, 92.6171692763% 23.9465769725%, 92.9730121592% 24.4643315798%, 93.3012701892% 25%, 93.6010436341% 25.5521140031%, 93.8715108355% 26.1191602831%, 94.1119304618% 26.6995846055%, 94.3216435393% 27.2917960675%, 94.5000752593% 27.8941714588%, 94.6467365526% 28.5050597102%, 94.7612254309% 29.1227864195%, 94.8432280882% 29.7456584408%, 94.8925197609% 30.3719685251%, 94.9089653438% 31%, 94.9089653438% 69%, 94.8925197609% 69.6280314749%, 94.8432280882% 70.2543415592%, 94.7612254309% 70.8772135805%, 94.6467365526% 71.4949402898%, 94.5000752593% 72.1058285412%, 94.3216435393% 72.7082039325%, 94.1119304618% 73.3004153945%, 93.8715108355% 73.8808397169%, 93.6010436341% 74.4478859969%, 93.3012701892% 75%, 92.9730121592% 75.5356684202%, 92.6171692763% 76.0534230275%, 92.2347168813% 76.5518446926%, 91.8267032495% 77.0295672763%, 91.394246718% 77.4852813742%, 90.9385326201% 77.9177379057%, 90.4608100364% 78.3257515375%, 89.9623883713% 78.7082039325%, 89.444633764% 79.0640468153%, 88.9089653438% 79.3923048454%, 56% 98.3923048454%, 55.4478859969% 98.6920782903%, 54.8808397169% 98.9625454917%, 54.3004153945% 99.202965118%, 53.7082039325% 99.4126781955%, 53.1058285412% 99.5911099155%, 52.4949402898% 99.7377712088%, 51.8772135805% 99.8522600871%, 51.2543415592% 99.9342627444%, 50.6280314749% 99.9835544171%, 50% 100%, 49.3719685251% 99.9835544171%, 48.7456584408% 99.9342627444%, 48.1227864195% 99.8522600871%, 47.5050597102% 99.7377712088%, 46.8941714588% 99.5911099155%, 46.2917960675% 99.4126781955%, 45.6995846055% 99.202965118%, 45.1191602831% 98.9625454917%, 44.5521140031% 98.6920782903%, 44% 98.3923048454%, 11.0910346562% 79.3923048454%, 10.5553662361% 79.0640468153%, 10.0376116287% 78.7082039325%, 9.5391899636% 78.3257515375%, 9.0614673799% 77.9177379057%, 8.605753282% 77.4852813742%, 8.1732967505% 77.0295672763%, 7.7652831188% 76.5518446926%, 7.3828307237% 76.0534230275%, 7.0269878409% 75.5356684202%, 6.6987298108% 75%, 6.398956366% 74.4478859969%, 6.1284891646% 73.8808397169%, 5.8880695383% 73.3004153945%, 5.6783564608% 72.7082039325%, 5.4999247409% 72.1058285412%, 5.3532634476% 71.4949402898%, 5.2387745694% 70.8772135805%, 5.1567719123% 70.2543415593%, 5.1074802398% 69.628031475%, 5.0910346571% 69.0000000001%, 5.091034742% 31.0000000137%, 5.1074803253% 30.3719685388%, 5.1567719985% 29.7456584546%, 5.2387746566% 29.1227864334%, 5.353263536% 28.5050597243%, 5.4999248308% 27.8941714731%, 5.6783565529% 27.2917960821%, 5.8880696333% 26.6995846206%, 6.1284892635% 26.1191602988%, 6.3989564703% 25.5521140197%, 6.6987299224% 25.0000000178%, 7.0269879623% 24.4643315993%, 7.3828308583% 23.9465769942%, 7.7652832709% 23.4481553321%, 8.1732969261% 22.9704327525%, 8.6057534886% 22.5147186601%, 9.0614676277% 22.0822621361%, 9.5391902655% 21.6742485142%, 10.0376120016% 21.2917961323%, 10.5553667018% 20.9359532669%, 11.0910352431% 20.6076952598%);clip-path:polygon(44% 1.6076951546%, 44.5521140031% 1.3079217097%, 45.1191602831% 1.0374545083%, 45.6995846055% 0.797034882%, 46.2917960675% 0.5873218045%, 46.8941714588% 0.4088900845%, 47.5050597102% 0.2622287912%, 48.1227864195% 0.1477399129%, 48.7456584408% 0.0657372556%, 49.3719685251% 0.0164455829%, 50% 0%, 50.6280314749% 0.0164455829%, 51.2543415592% 0.0657372556%, 51.8772135805% 0.1477399129%, 52.4949402898% 0.2622287912%, 53.1058285412% 0.4088900845%, 53.7082039325% 0.5873218045%, 54.3004153945% 0.797034882%, 54.8808397169% 1.0374545083%, 55.4478859969% 1.3079217097%, 56% 1.6076951546%, 88.9089653438% 20.6076951546%, 89.444633764% 20.9359531847%, 89.9623883713% 21.2917960675%, 90.4608100364% 21.6742484625%, 90.9385326201% 22.0822620943%, 91.394246718% 22.5147186258%, 91.8267032495% 22.9704327237%, 92.2347168813% 23.4481553074%, 92.6171692763% 23.9465769725%, 92.9730121592% 24.4643315798%, 93.3012701892% 25%, 93.6010436341% 25.5521140031%, 93.8715108355% 26.1191602831%, 94.1119304618% 26.6995846055%, 94.3216435393% 27.2917960675%, 94.5000752593% 27.8941714588%, 94.6467365526% 28.5050597102%, 94.7612254309% 29.1227864195%, 94.8432280882% 29.7456584408%, 94.8925197609% 30.3719685251%, 94.9089653438% 31%, 94.9089653438% 69%, 94.8925197609% 69.6280314749%, 94.8432280882% 70.2543415592%, 94.7612254309% 70.8772135805%, 94.6467365526% 71.4949402898%, 94.5000752593% 72.1058285412%, 94.3216435393% 72.7082039325%, 94.1119304618% 73.3004153945%, 93.8715108355% 73.8808397169%, 93.6010436341% 74.4478859969%, 93.3012701892% 75%, 92.9730121592% 75.5356684202%, 92.6171692763% 76.0534230275%, 92.2347168813% 76.5518446926%, 91.8267032495% 77.0295672763%, 91.394246718% 77.4852813742%, 90.9385326201% 77.9177379057%, 90.4608100364% 78.3257515375%, 89.9623883713% 78.7082039325%, 89.444633764% 79.0640468153%, 88.9089653438% 79.3923048454%, 56% 98.3923048454%, 55.4478859969% 98.6920782903%, 54.8808397169% 98.9625454917%, 54.3004153945% 99.202965118%, 53.7082039325% 99.4126781955%, 53.1058285412% 99.5911099155%, 52.4949402898% 99.7377712088%, 51.8772135805% 99.8522600871%, 51.2543415592% 99.9342627444%, 50.6280314749% 99.9835544171%, 50% 100%, 49.3719685251% 99.9835544171%, 48.7456584408% 99.9342627444%, 48.1227864195% 99.8522600871%, 47.5050597102% 99.7377712088%, 46.8941714588% 99.5911099155%, 46.2917960675% 99.4126781955%, 45.6995846055% 99.202965118%, 45.1191602831% 98.9625454917%, 44.5521140031% 98.6920782903%, 44% 98.3923048454%, 11.0910346562% 79.3923048454%, 10.5553662361% 79.0640468153%, 10.0376116287% 78.7082039325%, 9.5391899636% 78.3257515375%, 9.0614673799% 77.9177379057%, 8.605753282% 77.4852813742%, 8.1732967505% 77.0295672763%, 7.7652831188% 76.5518446926%, 7.3828307237% 76.0534230275%, 7.0269878409% 75.5356684202%, 6.6987298108% 75%, 6.398956366% 74.4478859969%, 6.1284891646% 73.8808397169%, 5.8880695383% 73.3004153945%, 5.6783564608% 72.7082039325%, 5.4999247409% 72.1058285412%, 5.3532634476% 71.4949402898%, 5.2387745694% 70.8772135805%, 5.1567719123% 70.2543415593%, 5.1074802398% 69.628031475%, 5.0910346571% 69.0000000001%, 5.091034742% 31.0000000137%, 5.1074803253% 30.3719685388%, 5.1567719985% 29.7456584546%, 5.2387746566% 29.1227864334%, 5.353263536% 28.5050597243%, 5.4999248308% 27.8941714731%, 5.6783565529% 27.2917960821%, 5.8880696333% 26.6995846206%, 6.1284892635% 26.1191602988%, 6.3989564703% 25.5521140197%, 6.6987299224% 25.0000000178%, 7.0269879623% 24.4643315993%, 7.3828308583% 23.9465769942%, 7.7652832709% 23.4481553321%, 8.1732969261% 22.9704327525%, 8.6057534886% 22.5147186601%, 9.0614676277% 22.0822621361%, 9.5391902655% 21.6742485142%, 10.0376120016% 21.2917961323%, 10.5553667018% 20.9359532669%, 11.0910352431% 20.6076952598%)}.hex-btn{-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:\"Roboto Condensed\", sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.central-icon{height:16px;width:16px}";

const Button$2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonId = null;
        this.size = 'default';
        this.colour = 'default';
        this.icon = null;
        //
        this.buttonType = 'button';
        this.disabled = false;
    }
    render() {
        const IconTag = `tf-icon-${this.icon}`;
        const icon = index.h(IconTag, { class: `central-icon icon-size-${this.size}` });
        return (index.h("div", { class: "hex-container" }, index.h("button", { class: `hex-btn size-${this.size} colour-${this.colour} ${this.disabled ? 'disabled' : ''}`, type: this.buttonType, id: this.buttonId, disabled: this.disabled }, icon)));
        //   return (
        // <tf-hexagon-button 
        // 	class="icon-hex-btn"
        // 	button-type={this.buttonType}
        // 	button-id={this.buttonId}
        // 	disabled={this.disabled}
        // 	color={this.colour}
        // >
        // 	{ icon }
        // </tf-hexagon-button>
        //	);
    }
};
Button$2.style = buttonCss$1;

const iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const SVGIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M0 11l2-2 5 5L18 3l2 2L7 18z" })));
    }
};
SVGIcon.style = iconsCss;

const iconsCss$1 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

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
ChevronDown.style = iconsCss$1;

const iconsCss$2 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const SVGIcon$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" })));
    }
};
SVGIcon$1.style = iconsCss$2;

const iconsCss$3 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const SVGIcon$2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" })));
    }
};
SVGIcon$2.style = iconsCss$3;

const iconsCss$4 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

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
ChevronUp.style = iconsCss$4;

const iconsCss$5 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const SVGIcon$3 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" })));
    }
};
SVGIcon$3.style = iconsCss$5;

const iconsCss$6 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const Envelope = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", "fill-rule": "evenodd", d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z", "clip-rule": "evenodd" })));
    }
};
Envelope.style = iconsCss$6;

const iconsCss$7 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const SVGIcon$4 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z" })));
    }
};
SVGIcon$4.style = iconsCss$7;

const iconsCss$8 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const SVGIcon$5 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z" })));
    }
};
SVGIcon$5.style = iconsCss$8;

const iconsCss$9 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const Search = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" })));
    }
};
Search.style = iconsCss$9;

const iconsCss$a = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.lg{vertical-align:-0.225em}.svg-inline.w-1{width:0.0625em}.svg-inline.w-2{width:0.125em}.svg-inline.w-3{width:0.1875em}.svg-inline.w-4{width:0.25em}.svg-inline.w-5{width:0.3125em}.svg-inline.w-6{width:0.375em}.svg-inline-.w-7{width:0.4375em}.svg-inline.w-8{width:0.5em}.svg-inline.w-9{width:0.5625em}.svg-inline.w-10{width:0.625em}.svg-inline.w-11{width:0.6875em}.svg-inline.w-12{width:0.75em}.svg-inline.w-13{width:0.8125em}.svg-inline.w-14{width:0.875em}.svg-inline.w-15{width:0.9375em}.svg-inline.w-16{width:1em}.svg-inline.w-17{width:1.0625em}.svg-inline.w-18{width:1.125em}.svg-inline.w-19{width:1.1875em}.svg-inline.w-20{width:1.25em}.svg-inline.pull-left{margin-right:0.3em;width:auto}.svg-inline.pull-right{margin-left:0.3em;width:auto}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}.svg-inline.fw{width:1.25em}";

const SVGIcon$6 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, index.h("path", { fill: "currentColor", d: "M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" })));
    }
};
SVGIcon$6.style = iconsCss$a;

const inputCss = ".form-label{display:block;font-size:0.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}input[type=text],input[type=password],input{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:0.25rem;position:relative;border-radius:0.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#ffffff;border-color:#D0DFE3;border-width:1px;border-radius:0.375rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.form-input::-webkit-input-placeholder{color:#D7E3E7;opacity:1}.form-input::-webkit-input-placeholder,.form-input::-moz-placeholder,.form-input:-ms-input-placeholder,.form-input::-ms-input-placeholder,.form-input::placeholder{color:#D7E3E7;opacity:1}.form-input.form-input-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error::-webkit-input-placeholder,.form-input.form-input-error::-moz-placeholder,.form-input.form-input-error:-ms-input-placeholder,.form-input.form-input-error::-ms-input-placeholder,.form-input.form-input-error::placeholder{color:#f8b4b4;opacity:1}.form-input:focus{outline:0;border-color:#8598C4;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.form-input-styled{display:block;width:100%}.form-input-error{color:#771d1d;border-color:#f8b4b4}.form-input-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45);box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45)}.form-input-leading-icon{padding-left:2.5rem}.form-input-trailing-icon{padding-right:2.5rem}.hint{margin-top:0.5rem;font-size:0.875rem;color:#D0DFE3}.error{margin-top:0.5rem;font-size:0.875rem;color:#e02424}.svg-container{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none}.svg-leading{top:0;bottom:0;left:0;padding-left:0.75rem}.svg-trailing{top:0;bottom:0;right:0;padding-right:0.75rem}.svg-icon{height:1.25rem;width:1.25rem;color:#9fa6b2}.svg-error-icon{height:1.25rem;width:1.25rem;color:#f98080}@media (min-width: 640px){.form-input-styled{font-size:0.875rem;line-height:1.25rem}}";

const List$1 = class {
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
        return (index.h("div", { class: "label-input-container" }, index.h("label", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`, htmlFor: this.name }, this.label), index.h("div", { class: "input-container" }, leadingSVG, index.h("input", { id: this.name, ref: el => this.itemRef = el, class: `
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
List$1.style = inputCss;

const leadingIconLabelCss = ".container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:0.875rem;line-height:1.25rem;color:#6b7280}.icon-container{margin-right:0.5rem;height:1.25rem;width:1.25rem}::slotted([slot=icon]){height:1.25rem;width:1.25rem}";

const ListWrappingCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    render() {
        return (index.h("div", { class: "container" }, index.h("div", { class: "icon-container" }, index.h("slot", { name: "icon" })), index.h("span", null, index.h("slot", null))));
    }
};
ListWrappingCell.style = leadingIconLabelCss;

const listCss = ".list-container{overflow:hidden}ul{list-style-type:none;margin:0;padding:0}@media (min-width: 640px){.list-container{border-radius:0.375rem}}";

const List$2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "list-container" }, index.h("ul", null, index.h("slot", null))));
    }
};
List$2.style = listCss;

const listWrappingItemCss = "li{margin-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;border-radius:0.375rem;background-color:#ffffff;-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);overflow:hidden}.list-container{background-color:#ffffff;-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);overflow:hidden}a{display:block;text-decoration:none;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}a:hover{background-color:#FAFBFC}a:focus{outline:0;background-color:#f9fafb}.list-item-container{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.list-item{min-width:0;-ms-flex:1 1 0%;flex:1 1 0%}.chevron-container{margin-left:1.25rem;-ms-flex-negative:0;flex-shrink:0}.chevron-svg{height:1.25rem;width:1.25rem;color:#D0DFE3}@media (min-width: 640px){.list-container{border-radius:0.375rem}.list-item-container{padding-left:1.5rem;padding-right:1.5rem}.list-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}}";

const ListWrappingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getCellStyle(contentAlign) {
        return {
            display: 'flex',
            flex: '1',
            justifyContent: contentAlign,
        };
    }
    render() {
        return (index.h("li", null, index.h("slot", null)));
    }
    get slotElement() { return index.getElement(this); }
};
ListWrappingItem.style = listWrappingItemCss;

const ListWrappingCell$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    render() {
        return (index.h("div", { class: this.order ? 'wrap' : '' }, index.h("slot", null)));
    }
};
ListWrappingCell$1.style = "div{\n\t\t\t@apply flex-shrink-0;\n\t\t}\n\t\t.wrap{\n\t\t\t@apply mt-4;\n\t\t}\n\t\t@screen sm {\n\t\t\tdiv{\n\t\t\t\t@apply mt-0;\n\t\t\t}\n\t\t}";

const listWrappingItemCss$1 = "li{margin-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;border-radius:0.375rem;background-color:#ffffff;-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);overflow:hidden}.list-container{background-color:#ffffff;-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);overflow:hidden}a{display:block;text-decoration:none;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}a:hover{background-color:#FAFBFC}a:focus{outline:0;background-color:#f9fafb}.list-item-container{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.list-item{min-width:0;-ms-flex:1 1 0%;flex:1 1 0%}.chevron-container{margin-left:1.25rem;-ms-flex-negative:0;flex-shrink:0}.chevron-svg{height:1.25rem;width:1.25rem;color:#D0DFE3}@media (min-width: 640px){.list-container{border-radius:0.375rem}.list-item-container{padding-left:1.5rem;padding-right:1.5rem}.list-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}}";

const ListWrappingItem$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.itemData = [];
    }
    componentWillLoad() {
        // parse items
        //tf-list-wrapping-cell
        const items = this.slotElement.getElementsByTagName('tf-list-wrapping-cell');
        Array.from(items).forEach(cell => {
            this.itemData.push({
                contentAlign: cell.getAttribute('content-align'),
                body: cell.innerHTML
            });
        });
    }
    getCellStyle(contentAlign) {
        // let style = {
        // 	display: 'flex',
        // }
        //
        return {
            display: 'flex',
            flex: '1',
            justifyContent: contentAlign,
        };
    }
    render() {
        return (index.h("li", null, index.h("a", { href: "#" }, index.h("div", { class: "list-item-container" }, index.h("div", { class: "list-item" }, this.itemData.map((item, i) => (index.h("tf-list-wrapping-cell", { order: i, style: this.getCellStyle(item.contentAlign), innerHTML: item.body })))), index.h("div", { class: "chevron-container" }, index.h("svg", { class: "chevron-svg", fill: "currentColor", viewBox: "0 0 20 20" }, index.h("path", { "fill-rule": "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clip-rule": "evenodd" })))))));
    }
    get slotElement() { return index.getElement(this); }
};
ListWrappingItem$1.style = listWrappingItemCss$1;

const lmsDelegateNodeCss = "@media only screen and (max-width: 640px){.delegate-node{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;border-radius:0.4375rem}}tf-node{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;z-index:2}#status{width:5%}@media only screen and (max-width: 640px){#status{width:45px;height:100%}}tf-node-status-bookend{width:22px;height:42px}@media only screen and (max-width: 640px){tf-node-status-bookend{height:100%}}#delegate-details-container{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center}@media only screen and (max-width: 640px){#delegate-details-container{-ms-flex-direction:column;flex-direction:column;overflow:hidden}#delegate-details-container.show{height:174px;-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out}#delegate-details-container.hide{height:48px;-webkit-transition:height 0.4s ease-out;transition:height 0.4s ease-out}}#delegate-details,#course-details,#delegate-courses-count{width:33.3%;line-height:1.2;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width: 640px){#delegate-details,#course-details,#delegate-courses-count{width:100%;padding-top:0.4375rem;padding-bottom:0.4375rem}}@media only screen and (max-width: 640px){#course-details,#delegate-courses-count{-webkit-transition:all 0.4s ease-out;transition:all 0.4s ease-out}#course-details.show,#delegate-courses-count.show{opacity:1;pointer-events:all}#course-details.hide,#delegate-courses-count.hide{opacity:0;pointer-events:none}}@media only screen and (max-width: 640px){#course-details{border-top:solid 1px #d0dfe3;border-bottom:solid 1px #d0dfe3}}#delegate-dob,#course-code{font-size:0.75rem;color:#68657e}#detail-title{display:none;text-transform:uppercase;font-size:0.5625rem;color:#68657e;line-height:1.25rem}@media only screen and (max-width: 640px){#detail-title{display:block}}#delegate-action{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}@media only screen and (max-width: 640px){#delegate-action{width:27px;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:start;align-self:flex-start;margin-top:0.875rem}}@media only screen and (max-width: 640px){tf-node-select-menu{display:none}}#toggle-oppen-close-delegate{display:none;background-color:#d0dfe3;color:#363154;font-size:0.625rem;line-height:0.625rem;border:none;cursor:pointer;padding:0;margin:0;text-align:center;width:1.25rem;height:1.25rem;border-radius:0.625rem;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}#toggle-oppen-close-delegate:hover{background:#4b4474;background-color:#4b4474;color:#ffffff}#toggle-oppen-close-delegate:active{background:#7a72ac;background-color:#7a72ac;color:#ffffff}#toggle-oppen-close-delegate:focus{background:#363154;background-color:#363154;color:#ffffff}@media only screen and (max-width: 640px){#toggle-oppen-close-delegate{display:-ms-flexbox;display:flex}}#mobile-node-actions{background-color:#363154;padding:2.5rem 1.563rem 1.563rem;border-radius:0 0 0.4375rem 0.4375rem;margin-bottom:0.3125rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);min-height:50px;display:none;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;z-index:1}@media only screen and (max-width: 640px){#mobile-node-actions{display:-ms-flexbox;display:flex}#mobile-node-actions.show{-webkit-transition:all 0.4s 0.4s ease-out;transition:all 0.4s 0.4s ease-out;opacity:1;pointer-events:all;margin-top:-20px}#mobile-node-actions.hide{-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;opacity:0;pointer-events:none;margin-top:-172px}}.dropdown-item-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:0.75rem;border:none;cursor:pointer;padding:0;margin:0;text-align:center;border-radius:0.1875rem;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;width:48%;-ms-flex-pack:center;justify-content:center;margin-bottom:0.3125rem}.dropdown-item-btn:hover{background:#19326b;background-color:#19326b;color:#ffffff}.dropdown-item-btn:active{background:#3b69d2;background-color:#3b69d2;color:#ffffff}.dropdown-item-btn:focus{background:#224595;background-color:#224595;color:#ffffff}.dropdown-item-btn span{padding:0.9375rem;display:-ms-flexbox;display:flex}";

const LMSDelegateNode = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.delegateId = "-";
        this.delegateStatus = "none";
        this.delegateName = "-";
        this.delegateDob = "-";
        this.courseTitle = "-";
        this.courseCode = "-";
        this.isMobileViewOpen = false;
    }
    onMenuClicked() {
        this.isMobileViewOpen = !this.isMobileViewOpen;
    }
    render() {
        // LMS specific logic to set the bookend
        const statusColour = this.delegateStatus == "complete" ? 'green'
            : this.delegateStatus == "incomplete" ? 'red'
                : this.delegateStatus == "inprogress" ? 'amber'
                    : 'none';
        return (index.h("div", { id: `delegate-${this.delegateId}`, class: "delegate-node" }, index.h("tf-node", null, index.h("div", { id: "status" }, index.h("tf-node-status-bookend", { color: statusColour })), index.h("div", { id: "delegate-details-container", class: this.isMobileViewOpen ? 'show' : 'hide' }, index.h("div", { id: "delegate-details" }, index.h("div", { id: "delegate-name" }, this.delegateName), index.h("div", { id: "delegate-dob" }, this.delegateDob)), index.h("div", { id: "course-details", class: this.isMobileViewOpen ? 'show' : 'hide' }, index.h("div", { id: "detail-title" }, "Course:"), index.h("div", { id: "course-title" }, this.courseTitle), index.h("div", { id: "course-code" }, this.courseCode)), index.h("div", { id: "delegate-courses-count", class: this.isMobileViewOpen ? 'show' : 'hide' }, index.h("div", { id: "detail-title" }, "Number of Courses:"), index.h("div", { id: "course-count" }, this.delegateCoursesCount))), index.h("div", { id: "delegate-action" }, index.h("tf-node-select-menu", null), index.h("button", { onClick: this.onMenuClicked.bind(this), id: "toggle-oppen-close-delegate" }, index.h("span", null, "X")))), index.h("div", { id: "mobile-node-actions", class: this.isMobileViewOpen ? 'show' : 'hide' }, index.h("button", { class: "dropdown-item-btn", id: "" }, index.h("span", { id: "title" }, "View")), index.h("button", { class: "dropdown-item-btn", id: "" }, index.h("span", { id: "title" }, "Assign to Course")), index.h("button", { class: "dropdown-item-btn", id: "" }, index.h("span", { id: "title" }, "Assign to Cattegory")), index.h("button", { class: "dropdown-item-btn", id: "" }, index.h("span", { id: "title" }, "Remove")))));
    }
};
LMSDelegateNode.style = lmsDelegateNodeCss;

const loginFormCss = ".login-container{margin-bottom:1.5rem;min-height:100%;background-color:#ffffff;border-radius:0.5rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding-top:3rem;padding-bottom:3rem;padding-left:1.25rem;padding-right:1.25rem;margin-left:auto;margin-right:auto}.login-header{border-bottom-width:4px;border-color:#32F7DC;border-style:solid}.login-body{margin-top:2rem}.login-footer{margin-top:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.form-container{background-color:#ffffff;padding-bottom:2rem}.link-container{font-size:0.875rem;line-height:1.25rem}.header-2{margin-top:1rem;margin-bottom:1rem;font-size:1.875rem;line-height:2.25rem;font-weight:800;color:#363154}@media (min-width: 640px){.login-container{width:40%;padding-left:1.5rem;padding-right:1.5rem}.login-header{margin-left:auto;margin-right:auto;width:100%}.login-body{margin-left:auto;margin-right:auto;width:100%}.form-container{border-radius:0.5rem}}@media (min-width: 1024px){.login-container{padding-left:2rem;padding-right:2rem}}";

const LoginForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.tfLoginSuccess = index.createEvent(this, "tfLoginSuccess", 7);
    }
    async onLogin(event) {
        event.preventDefault();
        // can ask the tf-input directly for the value with getValue()
        const email = await this.emailInputRef.getValue();
        // or can ask the tf-input for a reference to it's input and then ust the input like any other html input
        const passwordRef = await this.passwordInputRef.getItemRef();
        this.fetchAPI(email, passwordRef.value);
    }
    fetchAPI(email, password) {
        this.loading = true;
        if (!this.apiEndpoint) {
            this.error = "No endpoint 'api-enpoint' declared";
            this.loading = false;
            return;
        }
        // use axios
        const opts = {
            [this.bodyPropEmail]: email,
            [this.bodyPropPassword]: password
        };
        let headers = {};
        if (this.apiHeaders) {
            const h = JSON.parse(this.apiHeaders.replace(/'/g, '"'));
            if (!this.isEmpty(h)) {
                headers = Object.assign({}, h);
            }
        }
        fetch(this.apiEndpoint, {
            method: this.apiMethod,
            body: JSON.stringify(opts),
            headers,
        })
            .then(res => {
            if (res.status !== 200) {
                throw new Error('Invalid!');
            }
            return res.json();
        })
            .then(parsedRes => {
            this.tfLoginSuccess.emit(parsedRes);
            // this.error = null;
            this.loading = false;
        })
            .catch(err => {
            console.log(err);
            // this.error = err.message;
            this.loading = false;
        });
    }
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    onUserInput(event) {
        const input = event.target;
        this.values[input.id] = input.value.trim();
        //
        if (!this.values.email || !this.values.password) {
            this.formValid = false;
            return;
        }
        this.formValid = this.values.email.length > 0 && this.values.password.length > 0;
    }
    render() {
        let forgotten = null;
        if (this.forgottenUrl) {
            forgotten = index.h("tf-a-tag", { url: "#", "tag-title": "Forgot your password?" }, "Forgot your password?");
        }
        return (index.h("div", { class: "login-container" }, index.h("div", { class: "login-header" }, index.h("h2", { class: "header-2" }, "Login")), index.h("div", { class: "login-body" }, index.h("div", { class: "form-container" }, index.h("form", { onSubmit: this.onLogin.bind(this) }, index.h("tf-input", { name: "email", "input-type": "email", "item-required": true, label: "Email Address", ref: el => this.emailInputRef = el, "input-value": this.values.email, onInput: this.onUserInput.bind(this), autoComplete: "email" }), index.h("tf-input", { name: "password", "input-type": "password", "item-required": true, label: "Password", ref: el => this.passwordInputRef = el, onInput: this.onUserInput.bind(this), autoComplete: "on" }), index.h("div", { class: "login-footer" }, index.h("div", { class: "link-container" }, forgotten), index.h("tf-button", { colour: "aqua", disabled: !this.formValid || this.loading, "button-type": "submit" }, "Login")))))));
    }
};
LoginForm.style = loginFormCss;

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

const modalCss = ".modal-wrapper{position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50}.modal-wrapper.show{pointer-events:auto}.modal-wrapper.hide{pointer-events:none}.backdrop-container{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-transition-property:opacity;transition-property:opacity}.backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#868398;opacity:0.75}.backdrop.hide{pointer-events:none;opacity:0;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 1, 1);transition-timing-function:cubic-bezier(0.4, 0, 1, 1);-webkit-transition-duration:200ms;transition-duration:200ms}.backdrop.show{pointer-events:auto;opacity:0.75;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transition-duration:300ms;transition-duration:300ms}.modal{background-color:#ffffff;border-radius:0.5rem;padding-left:1rem;padding-right:1rem;padding-top:1.25rem;padding-bottom:1rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.modal.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transition-duration:300ms;transition-duration:300ms}.modal.hide{pointer-events:none;opacity:0;--transform-translate-y:1rem;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 1, 1);transition-timing-function:cubic-bezier(0.4, 0, 1, 1);-webkit-transition-duration:200ms;transition-duration:200ms}.modal-header{display:-ms-flexbox;display:flex}.modal-header.header-style-modal{border-bottom-width:4px;border-top-width:0;border-left-width:0;border-right-width:0;border-color:#32F7DC;border-style:solid}.title{-ms-flex:1 1 0%;flex:1 1 0%;font-weight:800;color:#363154}.title.header-style-modal{margin-top:0.75rem;margin-bottom:0.75rem;font-size:1.5rem;line-height:1.75rem}.title.header-style-alert{margin-top:0.5rem;margin-bottom:0.75rem;font-size:1.25rem;line-height:1.25rem}.close-button{margin-left:10px}#close-hex{width:28px;height:30px}#app-logo-initials{color:#363154;text-align:center}tf-icon-close{height:16px;width:16px}.modal-body{margin-top:0.5rem;margin-bottom:0.5rem}.modal-footer{margin-top:1.25rem}.confirm-wrapper{display:-ms-flexbox;display:flex;width:100%;border-radius:0.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}.cancel-wrapper{margin-top:0.75rem;display:-ms-flexbox;display:flex;width:100%;border-radius:0.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}tf-button{width:100%}@media (min-width: 640px){.modal-wrapper{top:0;right:0;bottom:0;left:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.modal{max-width:32rem;width:100%;padding:1.5rem}.modal.show{--transform-scale-x:1;--transform-scale-y:1;--transform-translate-y:0}.modal.hide{--transform-scale-x:.95;--transform-scale-y:.95;--transform-translate-y:0}.modal-footer{margin-top:1.5rem;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));grid-gap:0.75rem;gap:0.75rem;grid-auto-flow:row dense}.confirm-wrapper{grid-column-start:2}.cancel-wrapper{margin-top:0;grid-column-start:1}}";

const Modal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isOpen = false;
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
    async open() {
        this.opened = true;
    }
    openedPropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            // can do something here, set timers etc
            this.isOpen = newValue;
        }
    }
    onClose() {
        this.opened = false;
        this.tfModalClosed.emit();
    }
    onConfirm() {
        this.opened = false;
        this.tfModalConfirmed.emit();
    }
    render() {
        return (index.h("div", { class: `modal-wrapper ${this.isOpen ? 'show' : 'hide'}` }, index.h("div", { class: "backdrop-container" }, index.h("div", { class: `
					backdrop
					${this.isOpen ? 'show' : 'hide'}
				` })), index.h("div", { class: `
				modal
				${this.isOpen ? 'show' : 'hide'}
			` }, index.h("header", { class: `modal-header header-style-${this.headerStyle}` }, index.h("h2", { class: `title header-style-${this.headerStyle}` }, this.displayTitle), this.showClose &&
            index.h("div", { class: "close-button" }, index.h("tf-icon-button", { onClick: this.onClose.bind(this), colour: "grey", icon: "close" }))), index.h("section", { class: "modal-body" }, index.h("slot", null)), index.h("footer", { class: "modal-footer" }, this.showConfirm &&
            index.h("span", { class: "confirm-wrapper" }, index.h("tf-button", { onClick: this.onConfirm.bind(this), colour: this.confirmColour }, this.confirmText)), this.showCancel &&
            index.h("span", { class: "cancel-wrapper" }, index.h("tf-button", { onClick: this.onClose.bind(this), colour: this.cancelColour }, this.cancelText))))));
    }
    static get watchers() { return {
        "opened": ["openedPropChanged"]
    }; }
};
Modal.style = modalCss;

const nodeCss = "#node-container{margin-bottom:0.3125rem;background-color:#ffffff;border-radius:0.4375rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);padding:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}#base-node{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center}::slotted(*){display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxl{display:-ms-flexbox;display:flex;margin-right:10px}#flex{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxr{display:-ms-flexbox;display:flex;margin-left:10px}";

const Node$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { id: "node-container" }, index.h("slot", null)));
    }
};
Node$1.style = nodeCss;

const nodeCss$1 = "#node-container{margin-bottom:0.3125rem;background-color:#ffffff;border-radius:0.4375rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);padding:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}#base-node{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center}::slotted(*){display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxl{display:-ms-flexbox;display:flex;margin-right:10px}#flex{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxr{display:-ms-flexbox;display:flex;margin-left:10px}";

const Node$2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { id: "base-node" }, index.h("div", { id: "flex" }, index.h("slot", { name: "flex" }))));
    }
};
Node$2.style = nodeCss$1;

const nodeCss$2 = "#node-container{margin-bottom:0.3125rem;background-color:#ffffff;border-radius:0.4375rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);padding:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}#base-node{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center}::slotted(*){display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxl{display:-ms-flexbox;display:flex;margin-right:10px}#flex{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxr{display:-ms-flexbox;display:flex;margin-left:10px}";

const Node$3 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.rWidth = null;
    }
    render() {
        let stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        return (index.h("div", { id: "base-node" }, index.h("div", { id: "flex" }, index.h("slot", { name: "flex" })), index.h("div", { id: "fxr", style: stylesR }, index.h("slot", { name: "fxr" }))));
    }
};
Node$3.style = nodeCss$2;

const nodeCss$3 = "#node-container{margin-bottom:0.3125rem;background-color:#ffffff;border-radius:0.4375rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);padding:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}#base-node{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center}::slotted(*){display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxl{display:-ms-flexbox;display:flex;margin-right:10px}#flex{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxr{display:-ms-flexbox;display:flex;margin-left:10px}";

const Node$4 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.lWidth = null;
    }
    render() {
        let stylesL = {};
        if (this.lWidth) {
            stylesL['width'] = this.lWidth;
        }
        return (index.h("div", { id: "base-node" }, index.h("div", { id: "fxl", style: stylesL }, index.h("slot", { name: "fxl" })), index.h("div", { id: "flex" }, index.h("slot", { name: "flex" }))));
    }
};
Node$4.style = nodeCss$3;

const nodeCss$4 = "#node-container{margin-bottom:0.3125rem;background-color:#ffffff;border-radius:0.4375rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);padding:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}#base-node{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center}::slotted(*){display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxl{display:-ms-flexbox;display:flex;margin-right:10px}#flex{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}#fxr{display:-ms-flexbox;display:flex;margin-left:10px}";

const Node$5 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.rWidth = null;
        this.lWidth = null;
    }
    render() {
        let stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        let stylesL = {};
        if (this.lWidth) {
            stylesL['width'] = this.lWidth;
        }
        return (index.h("div", { id: "base-node" }, index.h("div", { id: "fxl", style: stylesL }, index.h("slot", { name: "fxl" })), index.h("div", { id: "flex" }, index.h("slot", { name: "flex" })), index.h("div", { id: "fxr", style: stylesR }, index.h("slot", { name: "fxr" }))));
    }
};
Node$5.style = nodeCss$4;

const nodeHeaderCss = "#node-header{margin-bottom:2px;background-color:transparent;padding:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}::slotted(*){display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}";

const NodeHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { id: "node-header" }, index.h("slot", null)));
    }
};
NodeHeader.style = nodeHeaderCss;

const NodeHeader$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.justify = "flex-start";
    }
    render() {
        const styles = {
            justifyContent: this.justify,
        };
        return (index.h("span", { style: styles }, index.h("slot", null)));
    }
};
NodeHeader$1.style = "span{\n\t\t\tmargin-block-start: 2px;\n\t\t\tmargin-block-end: 2px;\n\t\t\tmargin-inline-start: 0px;\n\t\t\tmargin-inline-end: 0px;\n\t\t\tmargin-left:0;\n\t\t\tmargin-right\t:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 11px;\n\t\t\tline-height: 14px;\n\t\t\ttext-transform:uppercase;\n\t\t\tdisplay:flex;\n\t\t\tflex:1;\n\t\t\toverflow-x:hidden;\n\t\t}";

const nodeListCss = "ul{margin:0;padding:0;list-style:none}";

const NodeList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("ul", { id: "node-list" }, index.h("slot", null)));
    }
};
NodeList.style = nodeListCss;

const nodeSelectMenuCss = "#dropdown{position:relative;display:inline-block}#dropdown-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:0.75rem;border:none;cursor:pointer;padding:0;margin:0;text-align:left;border-radius:0.1875rem;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}#dropdown-btn:hover{background:#4b4474;background-color:#4b4474;color:#ffffff}#dropdown-btn:active{background:#7a72ac;background-color:#7a72ac;color:#ffffff}#dropdown-btn:focus{background:#363154;background-color:#363154;color:#ffffff}#dropdown-btn span{padding:0.8125rem;display:-ms-flexbox;display:flex}#dropdown-btn span#title{width:70px}#dropdown-btn span#icon{padding-left:0.375rem;padding-right:0.375rem;font-size:0.625rem;border-left:solid 1px #ffffff;-ms-flex-align:center;align-items:center;min-height:15px;height:auto}#dropdown-btn.active{background-color:#363154;color:#ffffff}#dropdown-content{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;right:0;background-color:#d0dfe3;min-width:160px;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);z-index:50;border-radius:0.1875rem;padding:0.4375rem;margin-top:5px;opacity:0;pointer-events:none}#dropdown-content.show{opacity:1;pointer-events:all}.dropdown-item-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:0.75rem;border:none;cursor:pointer;padding:0;margin:0;text-align:left;border-radius:1px;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;border-bottom:solid 1px rgba(54, 49, 84, 0.2)}.dropdown-item-btn:hover{background:#4b4474;background-color:#4b4474;color:#ffffff}.dropdown-item-btn:active{background:#7a72ac;background-color:#7a72ac;color:#ffffff}.dropdown-item-btn:focus{background:#363154;background-color:#363154;color:#ffffff}.dropdown-item-btn:last-of-type{border-bottom:none}.dropdown-item-btn span{padding:0.3125rem;display:-ms-flexbox;display:flex}.svg-icon{height:1rem;width:1rem}";

const NodeSelectMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // @Element() el: HTMLElement;
        this.isOpen = false;
        this.isOpenDelayed = false;
    }
    handleClick(event) {
        if (this.isOpen) {
            const target = event.composedPath()[0];
            if (!target.matches('.dropdown-item-btn') && !target.matches('#dropdown-content')) {
                this.isOpen = this.isOpenDelayed = false;
            }
        }
    }
    /*
131 856
581 913
*/
    onMenuClicked() {
        if (this.isOpen) {
            this.isOpen = this.isOpenDelayed = false;
        }
        else {
            this.isOpen = true;
            setTimeout(() => {
                this.isOpenDelayed = true;
            }, 400);
        }
    }
    render() {
        return (index.h("div", { id: "dropdown" }, index.h("button", { onClick: this.onMenuClicked.bind(this), id: "dropdown-btn", tabindex: "0", class: this.isOpenDelayed ? 'active' : '' }, index.h("span", { id: "title" }, "Actions"), index.h("span", { id: "icon" }, index.h("tf-icon-chevron-down", { class: "svg-icon" }))), index.h("div", { id: "dropdown-content", class: this.isOpen ? 'show' : '' }, index.h("button", { class: "dropdown-item-btn", id: "" }, index.h("span", { id: "title" }, "View")), index.h("button", { class: "dropdown-item-btn", id: "" }, index.h("span", { id: "title" }, "Assign to Course")), index.h("button", { class: "dropdown-item-btn", id: "" }, index.h("span", { id: "title" }, "Assign to Cattegory")), index.h("button", { class: "dropdown-item-btn", id: "" }, index.h("span", { id: "title" }, "Remove")))));
    }
};
NodeSelectMenu.style = nodeSelectMenuCss;

const nodeStatusBookendCss = ":host{display:-ms-flexbox;display:flex;position:relative}#delegate-status{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f3f5f9;border-radius:0.1875rem}#delegate-status.red{background-color:#b92950}#delegate-status.amber{background-color:#b97129}#delegate-status.green{background-color:#40c7a3}#delegate-status.blue{background-color:#224595}#delegate-status.grey{background-color:#d0dfe3}";

const NodeStatusBookend = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = "grey";
    }
    render() {
        return (index.h("div", { id: "delegate-status", class: `
					${this.color} 
					${this.showTooltip ? 'show-tooltip' : ''}
				` }));
    }
};
NodeStatusBookend.style = nodeStatusBookendCss;

const NodeText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.justify = "flex-start";
    }
    render() {
        const styles = {
            justifyContent: this.justify,
        };
        return (index.h("span", { id: "node-text-span", style: styles }, index.h("slot", null)));
    }
};
NodeText.style = "#node-text-span{\n\t\t\tmargin:0;\n\t\t\tpadding:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:flex;\n\t\t\tflex:1;\n\t\t}";

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

const radioCss = ".radio-wrapper{-ms-flex-direction:column;flex-direction:column;margin-top:0.5rem}.form-label{display:block;font-size:0.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.input-label-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.radio-container{width:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}input[type=checkbox],input{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.form-radio{-webkit-print-color-adjust:exact;color-adjust:exact;background-origin:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0;width:1.5rem;height:1.5rem;color:#224595;border-color:#D0DFE3;border-width:1px;border-radius:9999px}.form-radio:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}@media not print{.form-radio::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-radio:focus{outline:0;border-color:#8598C4;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.form-radio:checked:focus{border-color:transparent}.form-radio-styled{height:1rem;width:1rem;color:#224595;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.form-radio-error{color:#771d1d;border-color:#f8b4b4}.form-radio-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45);box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45)}.bottom-text{margin-left:30px;margin-top:2px;font-size:0.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#D0DFE3}";

const List$3 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.groupName = 'radioGroup';
        this.checked = false;
        this.required = false;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.tfOnChecked = index.createEvent(this, "tfOnChecked", 7);
        this.tfOnRadioSelected = index.createEvent(this, "tfOnRadioSelected", 7);
    }
    //
    errorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    }
    async getChecked() {
        try {
            return this.itemRef.checked;
        }
        catch (e) {
            throw `Can't find itemRef.checked for ${this.name} tf-radio. More details: ${e}`;
        }
    }
    async getValue() {
        try {
            return this.itemRef.value;
        }
        catch (e) {
            throw `Can't find itemRef.value for ${this.name} tf-radio. More details: ${e}`;
        }
    }
    async getItemRef() {
        try {
            return this.itemRef;
        }
        catch (e) {
            throw `Can't find itemRef for ${this.name} tf-radio. More details: ${e}`;
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
    }
    async onUserInteraction(event) {
        const checked = await this.getChecked();
        this.checked = checked;
        this.tfOnChecked.emit({
            id: this.name,
            groupName: this.groupName,
            checked,
            value: checked,
            proxyEvent: Object.assign({}, event)
        });
        this.tfOnRadioSelected.emit({
            id: this.name,
            groupName: this.groupName,
            checked,
            value: checked,
            proxyEvent: Object.assign({}, event)
        });
    }
    setError() {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the selection';
        }
        this.showErrorIcon = this.showError = this.error;
    }
    render() {
        let bottomText = index.h("p", { class: "bottom-text hide" }, "\u00A0");
        if (this.showHint) {
            bottomText = index.h("p", { class: "bottom-text hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = index.h("p", { class: "bottom-text error" }, this.errorMessage);
        }
        return (index.h("div", { class: "radio-wrapper" }, index.h("div", { class: "input-label-container" }, index.h("div", { class: "radio-container" }, index.h("input", { id: this.name, name: this.groupName, ref: el => this.itemRef = el, type: "radio", class: `
								form-radio
								form-radio-styled 
								${this.showError ? 'form-radio-error' : ''} 
							`, checked: this.checked, required: this.required, onInput: this.onUserInteraction.bind(this) })), index.h("label", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`, htmlFor: this.name }, this.label)), bottomText));
    }
    static get watchers() { return {
        "error": ["errorChanged"]
    }; }
};
List$3.style = radioCss;

const radioGroupCss = "*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}fieldset{margin:0;padding:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}.form-label{display:block;font-size:0.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.bottom-text{margin-left:0;margin-top:2px;font-size:0.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#D0DFE3}.description-text{margin-top:2px;display:block;font-size:0.875rem;font-weight:500;line-height:1.25rem}.description-text.desc{color:#6b7280}";

const List$4 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatedId = String(Math.floor(Math.random() * 99999));
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showErrorIcon = false;
        this.selectedItem = null;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.description = null;
        this.groupName = 'radioGroup';
        this.required = false;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.tfOnItemSelected = index.createEvent(this, "tfOnItemSelected", 7);
    }
    //
    errorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    }
    onHandleRadioSelected(event) {
        console.log(" ** RadioSelected ", this.name);
        if (event.detail.groupName === this.name) {
            event.preventDefault();
            event.stopPropagation();
            console.log(event.detail);
            if (this.selectedItem) {
                // remove prev selected radio
                this.selectedItem.checked = false;
            }
            this.selectedItem = event.target;
            this.value = event.detail.id;
            this.tfOnItemSelected.emit({
                id: this.name,
                value: this.value,
                proxyEvent: Object.assign({}, event)
            });
        }
    }
    async getValue() {
        try {
            return this.itemRef.value;
        }
        catch (e) {
            throw `Can't find itemRef.value for ${this.name} tf-radio. More details: ${e}`;
        }
    }
    async getItemRef() {
        try {
            return this.itemRef;
        }
        catch (e) {
            throw `Can't find itemRef for ${this.name} tf-radio. More details: ${e}`;
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
    }
    setError() {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the selection';
        }
        this.showErrorIcon = this.showError = this.error;
    }
    render() {
        let bottomText = index.h("p", { class: "bottom-text hide" }, "\u00A0");
        if (this.showHint) {
            bottomText = index.h("p", { class: "bottom-text hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = index.h("p", { class: "bottom-text error" }, this.errorMessage);
        }
        let descriptionText = null;
        if (this.description) {
            descriptionText = index.h("p", { class: "description-text desc" }, this.description);
        }
        return (index.h("fieldset", { class: "radio-group-wrapper" }, index.h("legend", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}` }, this.label), descriptionText, index.h("slot", null), bottomText));
    }
    static get watchers() { return {
        "error": ["errorChanged"]
    }; }
};
List$4.style = radioGroupCss;

const selectCss = "::slotted(*){color:red}.form-label{display:block;font-size:0.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}select{padding:0;line-height:inherit;color:inherit;text-transform:none;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.label-select-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:0.25rem;position:relative;border-radius:0.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}.form-select{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%239fa6b2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e\");-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;background-repeat:no-repeat;background-color:#ffffff;border-color:#d2d6dc;border-width:1px;border-radius:0.375rem;padding-top:0.5rem;padding-right:2.5rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5;background-position:right 0.5rem center;background-size:1.5em 1.5em;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.form-select::-ms-expand{color:#9fa6b2;border:none}@media not print{.form-select::-ms-expand{display:none}}@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none){.form-select{padding-right:0.75rem}}.form-select:focus{outline:none;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);border-color:#a4cafe}.form-select-styled{display:block;width:100%}.form-select-error{color:#771d1d;border-color:#f8b4b4}.form-select-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45);box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45)}.hint{margin-top:0.5rem;font-size:0.875rem;color:#D0DFE3}.error{margin-top:0.5rem;font-size:0.875rem;color:#e02424}tf-select-option{display:none}@media (min-width: 640px){.form-select-styled{font-size:0.875rem;line-height:1.25rem}}";

const List$5 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.placeholder = '';
        this.required = false;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
        //
        this.parsedOptions = [];
        this.tfOnSelect = index.createEvent(this, "tfOnSelect", 7);
    }
    //
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
            throw `Can't find itemRef.value for ${this.name} tf-select. More details: ${e}`;
        }
    }
    async getItemRef() {
        try {
            return this.itemRef;
        }
        catch (e) {
            throw `Can't find itemRef for ${this.name} tf-select. More details: ${e}`;
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
        // parse options
        const optionsEls = this.slotElement.getElementsByTagName('tf-select-option');
        // 
        Array.from(optionsEls).forEach(opt => {
            let title = (' ' + opt.innerHTML).slice(1);
            title = title.replace(/<\!--.*?-->/g, "");
            const value = (' ' + opt.getAttribute('value')).slice(1);
            const selected = opt.getAttribute('selected') !== null;
            this.parsedOptions.push({
                value,
                title,
                selected
            });
            opt.innerHTML = "";
            opt = null;
        });
        this.slotElement.innerHTML = "";
    }
    async onUserInteraction(event) {
        const value = await this.getValue();
        this.tfOnSelect.emit({
            id: this.name,
            value,
            proxyEvent: Object.assign({}, event)
        });
    }
    setError() {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the selection';
        }
        this.showErrorIcon = this.showError = this.error;
    }
    render() {
        let options = null;
        if (this.parsedOptions.length) {
            options = this.parsedOptions.map(opt => {
                if (opt.value === this.value || opt.selected) {
                    return (index.h("option", { value: opt.value, selected: true }, opt.title));
                }
                else {
                    return (index.h("option", { value: opt.value }, opt.title));
                }
            });
        }
        let bottomText = null;
        if (this.showHint) {
            bottomText = index.h("p", { class: "hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = index.h("p", { class: "error" }, this.errorMessage);
        }
        return (index.h("div", { class: "label-select-container" }, index.h("label", {
            // for="country" 
            htmlFor: this.name, class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`
        }, this.label), index.h("div", { class: "input-container" }, index.h("select", { id: this.name, ref: el => this.itemRef = el, class: `
							form-select 
							form-select-styled 
							${this.showError ? 'form-select-error' : ''} 
						`, required: this.required, onInput: this.onUserInteraction.bind(this) }, options)), bottomText));
    }
    get slotElement() { return index.getElement(this); }
    static get watchers() { return {
        "error": ["errorChanged"]
    }; }
};
List$5.style = selectCss;

const SelectOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};
SelectOption.style = "::slotted(*){\n\t\t\tcolor: red;\n\t\t}";

const sideDrawerCss = "aside{position:fixed;top:0;left:-100%;width:400px;max-width:80%;height:100vh;background-color:#363154;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);-webkit-transition:left 0.3s ease-out;transition:left 0.3s ease-out;z-index:100}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(54, 49, 84, 0.75);z-index:10;opacity:0;pointer-events:none;-webkit-transition:opacity 0.3s ease-out;transition:opacity 0.3s ease-out}:host([opened]) aside{left:0}:host([opened]) .backdrop{opacity:1;pointer-events:all}::slotted(*){display:-ms-flexbox;display:flex;color:#ffffff}::slotted(*) ul{list-style:none}header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}#app-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}#app-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#app-logo-icon{width:2.813rem;height:3.125rem}#app-logo-initials{color:#224595;text-transform:uppercase;font-weight:bolder;font-size:1.25rem;text-align:center;}#app-logo-initials::-moz-selection{color:none;background:none}#app-logo-initials::selection{color:none;background:none}#app-logo-initials::-moz-selection{color:none;background:none}tf-icon-close{height:20px;width:20px}";

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
    onContentChange(content) {
        this.showContactInfo = content === 'contact';
    }
    render() {
        let mainContent = index.h("slot", null);
        return [
            index.h("div", { onClick: this.onCloseDraw.bind(this), class: "backdrop" }),
            index.h("aside", null, index.h("header", null, index.h("div", { id: "app-logo-container" }, index.h("div", { id: "app-logo" }, index.h("tf-hexagon-button", { onClick: this.onCloseDraw.bind(this), color: "white", id: "app-logo-icon" }, index.h("div", { id: "app-logo-initials" }, index.h("tf-icon-close", null)))))), index.h("main", null, mainContent))
        ];
    }
    static get watchers() { return {
        "opened": ["stockSymbolChanged"]
    }; }
};
SideDrawer.style = sideDrawerCss;

const sideDrawerNavCss = "#side-nav{-ms-flex:1;flex:1;padding:0.75rem}::slotted(tf-side-drawer-nav-link){display:block;border-bottom:solid 1px #d0dfe3}::slotted(tf-side-drawer-nav-link:last-of-type){border-bottom:none}";

const SideDrawerNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("nav", { id: "side-nav", class: "side-nav" }, index.h("div", null, index.h("slot", null))));
    }
};
SideDrawerNav.style = sideDrawerNavCss;

const sideDrawerNavLinkCss = ".tailwind-side-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#ffffff;background-color:#363154;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.tailwind-side-nav:hover{color:#1D1A2E;background-color:#D0DFE3}.tailwind-side-nav:focus{outline:0;color:#1D1A2E;background-color:#D7E3E7}.tailwind-side-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;color:#ffffff;-ms-flex-align:center;align-items:center;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.tailwind-toggle-icon.opened{color:#1D1A2E}tf-icon-chevron-up,tf-icon-chevron-down{width:20px;height:20px}.tailwind-side-nav.opened{color:#1D1A2E;background-color:#ECF2F3}.tailwind-side-nav:hover .tailwind-toggle-icon{color:#1D1A2E}.sub-nav-content{display:block;max-height:0;-webkit-transition:max-height 0.35s;transition:max-height 0.35s;overflow:hidden}.sub-nav-content.show{max-height:100vh}";

const SideDrawerNavLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isSubOpen = false;
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
        let linkButton = (index.h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: "tailwind-side-nav" }, index.h("span", { class: "tailwind-side-nav-title" }, index.h("slot", null))));
        if (this.routerLink) {
            linkButton = (index.h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: "tailwind-side-nav"
            }, index.h("span", { class: "tailwind-side-nav-title" }, index.h("slot", null))));
        }
        if (this.hasSubMenu) {
            sub = (index.h("div", { class: `sub-nav-content ${this.isSubOpen ? 'show' : 'hide'}` }, index.h("slot", { name: "sub" })));
            const icon = this.isSubOpen ? index.h("tf-icon-chevron-up", null) : index.h("tf-icon-chevron-down", null);
            linkButton = (index.h("div", { class: `tailwind-side-nav ${this.isSubOpen ? 'opened' : ''}`, onClick: this.onLinkClicked.bind(this) }, index.h("span", { class: "tailwind-side-nav-title" }, index.h("slot", null)), index.h("span", { class: `tailwind-toggle-icon ${this.isSubOpen ? 'opened' : ''}` }, icon)));
        }
        return [linkButton, sub];
    }
    get slotElement() { return index.getElement(this); }
};
SideDrawerNavLink.style = sideDrawerNavLinkCss;

const sideDrawerSubNavCss = ".sub-nav-content{max-height:0;-webkit-transition:max-height 0.35s;transition:max-height 0.35s;overflow:hidden;padding:0.5rem;background-color:#D0DFE3;line-height:1.5}.opened{max-height:100vh}::slotted(tf-side-drawer-sub-nav-link){display:block;border-color:#363154;border-left-width:0;border-right-width:0;border-top-width:0;border-bottom-width:1px;border-style:solid}::slotted(tf-side-drawer-sub-nav-link:last-of-type){border-bottom-width:0}";

const SideDrawerSubNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "sub-nav-content opened" }, index.h("slot", null)));
    }
};
SideDrawerSubNav.style = sideDrawerSubNavCss;

const sideDrawerSubNavLinkCss = ".tailwind-sub-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#1D1A2E;background-color:#D0DFE3;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.tailwind-sub-nav:hover{color:#302C4B;background-color:#B1BDC1}.tailwind-sub-nav:focus{outline:0;color:#1D1A2E;background-color:#B1BDC1}.tailwind-sub-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";

const SideDrawerSubNavLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        let linkButton = (index.h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: "tailwind-sub-nav" }, index.h("span", { class: "tailwind-sub-nav-title" }, index.h("slot", null))));
        if (this.routerLink) {
            linkButton = (index.h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: "tailwind-sub-nav"
            }, index.h("span", { class: "tailwind-sub-nav-title" }, index.h("slot", null))));
        }
        return (linkButton);
    }
};
SideDrawerSubNavLink.style = sideDrawerSubNavLinkCss;

const statDataCardCss = ".stat-card-container{background-color:#ffffff;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);border-radius:0.5rem}dl{-webkit-margin-before:0px;margin-block-start:0px;-webkit-margin-after:0px;margin-block-end:0px;text-align:center}dt{padding-left:0.25rem;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;color:#25223A;line-height:1.25rem;font-weight:500;background-color:#D0DFE3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}dt.colour-default,dt.colour-blue{color:#ffffff;background-color:#224595}dt.colour-green{color:#ffffff;background-color:#40c7a3}dt.colour-amber{color:#ffffff;background-color:#b97129}dt.colour-red{color:#ffffff;background-color:#b92950}dd{-webkit-margin-start:0px;margin-inline-start:0px;padding-left:0.25rem;padding-right:0.25rem;padding-top:1.25rem;padding-bottom:1.25rem;margin-top:0.25rem;font-size:1.875rem;color:#25223A;line-height:2.25rem;font-weight:600}dd.colour-default,dd.colour-blue{color:#224595}dd.colour-green{color:#40c7a3}dd.colour-amber{color:#b97129}dd.colour-red{color:#b92950}@media (min-width: 640px){.stats-grid{grid-template-columns:repeat(3, minmax(0, 1fr))}}";

const StatDataCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'default';
    }
    render() {
        return (index.h("div", { class: "stat-card-container" }, index.h("div", { class: "stat-card" }, index.h("dl", null, index.h("dt", { class: `colour-${this.colour}` }, index.h("slot", { name: "title" })), index.h("dd", { class: `colour-${this.colour}` }, index.h("slot", { name: "data" }))))));
    }
};
StatDataCard.style = statDataCardCss;

const statsPanelCss = ".stats-grid{margin-top:0.25rem;margin-bottom:0.25rem;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));grid-gap:1.25rem;gap:1.25rem}@media (min-width: 640px){.stats-grid.grid-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.stats-grid.grid-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.stats-grid.grid-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.stats-grid.grid-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.stats-grid.grid-5{grid-template-columns:repeat(5, minmax(0, 1fr))}.stats-grid.grid-6{grid-template-columns:repeat(6, minmax(0, 1fr))}}";

const StatsPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cardCount = 3;
        this.maxCardCount = 6;
    }
    componentWillLoad() {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    }
    render() {
        return (index.h("tf-card", { colour: "navy" }, index.h("div", { class: `stats-grid grid-${this.cardCount}` }, index.h("slot", null))));
    }
    get slotElement() { return index.getElement(this); }
};
StatsPanel.style = statsPanelCss;

const statusCss = "span{padding-left:0.75rem;padding-right:0.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:0.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}span.colour-none{background-color:#ECF2F3;color:#9BA7AA}span.colour-red{background-color:#b92950;color:#ECF2F3}span.colour-amber,span.colour-orange{background-color:#b97129;color:#ECF2F3}span.colour-green{background-color:#40c7a3;color:#ECF2F3}";

const Status = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.trafficLightColour = 'none';
    }
    render() {
        return (index.h("span", { class: `colour-${this.trafficLightColour}` }, index.h("slot", null)));
    }
};
Status.style = statusCss;

const tableCss = "::slotted([slot=table-head]){display:none}.hide-slot{display:none}.div-1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.div-2{margin-top:-0.5rem;margin-bottom:-0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;overflow-x:auto}.div-3{vertical-align:middle;display:inline-block;min-width:100%;overflow:hidden}table{min-width:100%;border-collapse:collapse}th{padding-left:1.5rem;padding-right:1.5rem;padding-top:0.25rem;padding-bottom:0.25rem;border-bottom-width:1px;border-color:#D0DFE3;background-color:#D0DFE3;text-align:left;font-size:0.75rem;line-height:1rem;font-weight:500;color:#363154;text-transform:uppercase;letter-spacing:0.05em}tbody{background-color:#ffffff}td{padding-left:1.5rem;padding-right:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;white-space:nowrap;font-size:0.875rem;line-height:1.25rem;color:#6b7280}td.bottom-border{border-bottom-width:1px;border-right-width:0;border-left-width:0;border-color:#D0DFE3;border-style:solid}td.text-right{text-align:right;font-weight:500}.flex-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.avatar{height:2.5rem;width:2.5rem;border-radius:9999px}@media (min-width: 640px){.div-2{margin-left:-1.5rem;margin-right:-1.5rem;padding-left:1.5rem;padding-right:1.5rem}.div-3{border-radius:0.5rem}}a{color:#224595}a:hover{color:#362f78}a:focus{outline:0;text-decoration:underline}@media (min-width: 1024px){.div-2{margin-left:-2rem;margin-right:-2rem;padding-left:2rem;padding-right:2rem}}";

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headerCellData = [];
        this.rowData = [];
    }
    //
    componentWillLoad() {
        // parse table header element
        const headerItem = this.slotElement.querySelector('[slot="table-head"]');
        //
        const headerCells = headerItem.getElementsByTagName('tf-table-head-cell');
        //
        Array.from(headerCells).forEach(cell => {
            this.headerCellData.push(String(cell.innerHTML).replace('<!---->', ''));
        });
        // parse table rows
        const rows = this.slotElement.getElementsByTagName('tf-table-row');
        //
        Array.from(rows).forEach(row => {
            let rowCellData = [];
            const cells = row.getElementsByTagName('tf-table-cell');
            Array.from(cells).forEach(cell => {
                rowCellData.push({
                    textAlign: cell.getAttribute('text-align'),
                    body: cell.innerHTML
                });
            });
            this.rowData.push(rowCellData);
        });
    }
    render() {
        return [
            index.h("div", { class: "div-1" }, index.h("div", { class: "div-2" }, index.h("div", { class: "div-3" }, index.h("table", null, index.h("thead", null, this.headerCellData.map(cell => index.h("th", null, cell))), index.h("tbody", null, this.rowData.map(row => {
                return (index.h("tr", null, row.map(cell => index.h("td", { class: `bottom-border ${cell.textAlign == 'right' ? 'text-right' : ''}`, innerHTML: cell.body }))));
            })))))),
            index.h("div", { class: "hide-slot" }, index.h("slot", { name: "table-head" }))
        ];
    }
    get slotElement() { return index.getElement(this); }
};
Table.style = tableCss;

const TableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textAlign = 'centre';
    }
    render() {
        return (index.h("slot", null));
    }
};

const TableHead = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};

const TableHeadCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};

const TableHead$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};

const textareaCss = ".form-label{display:block;font-size:0.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}input[type=text],input[type=textarea],textarea,input{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:0.25rem;position:relative;border-radius:0.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}.form-textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#ffffff;border-color:#D0DFE3;border-width:1px;border-radius:0.375rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.form-textarea::-webkit-input-placeholder{color:#D7E3E7;opacity:1}.form-textarea::-webkit-input-placeholder,.form-textarea::-moz-placeholder,.form-textarea:-ms-input-placeholder,.form-textarea::-ms-input-placeholder,.form-textarea::placeholder{color:#D7E3E7;opacity:1}.form-textarea.form-textarea-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-textarea.form-textarea-error::-webkit-input-placeholder,.form-textarea.form-textarea-error::-moz-placeholder,.form-textarea.form-textarea-error:-ms-input-placeholder,.form-textarea.form-textarea-error::-ms-input-placeholder,.form-textarea.form-textarea-error::placeholder{color:#f8b4b4;opacity:1}.form-textarea:focus{outline:0;border-color:#8598C4;-webkit-box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45);box-shadow:0 0 0 3px rgba(164, 202, 254, 0.45)}.form-textarea-styled{display:block;width:100%;resize:vertical}.form-textarea-error{color:#771d1d;border-color:#f8b4b4}.form-textarea-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45);box-shadow:0 0 0 3px rgba(248, 180, 180, 0.45)}.hint{margin-top:0.5rem;font-size:0.875rem;color:#D0DFE3}.error{margin-top:0.5rem;font-size:0.875rem;color:#e02424}@media (min-width: 640px){.form-textarea-styled{font-size:0.875rem;line-height:1.25rem}}";

const List$6 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.placeholder = '';
        this.required = false;
        this.autoComplete = 'off';
        this.rowCount = 3;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
        this.tfOnInput = index.createEvent(this, "tfOnInput", 7);
    }
    //
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
            throw `Can't find itemRef.value for ${this.name} tf-textarea. More details: ${e}`;
        }
    }
    async getItemRef() {
        try {
            return this.itemRef;
        }
        catch (e) {
            throw `Can't find itemRef for ${this.name} tf-textarea. More details: ${e}`;
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
    }
    async onUserInput(event) {
        const value = await this.getValue();
        this.tfOnInput.emit({
            id: this.name,
            value,
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
        return (index.h("div", { class: "label-input-container" }, index.h("label", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`, htmlFor: this.name }, this.label), index.h("div", { class: "input-container" }, index.h("textarea", { id: this.name, ref: el => this.itemRef = el, rows: this.rowCount, class: `
							form-textarea 
							form-textarea-styled 
							${this.showError ? 'form-textarea-error' : ''} 
						`, placeholder: this.placeholder, required: this.required, value: this.value, onInput: this.onUserInput.bind(this) })), bottomText));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "error": ["errorChanged"]
    }; }
};
List$6.style = textareaCss;

const userCss = ".flex-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.avatar-container{-ms-flex-negative:0;flex-shrink:0;height:2.5rem;width:2.5rem}.avatar{height:2.5rem;width:2.5rem;border-radius:9999px}.details{margin-left:1rem}";

const User = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "flex-row" }, index.h("div", { class: "avater-container" }, index.h("img", { class: "avatar", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" })), index.h("div", { class: "details" }, index.h("tf-value-pair", null, index.h("span", { slot: "dark" }, "Bernard Lane"), index.h("span", { slot: "light" }, "bernardlane@example.com")))));
    }
};
User.style = userCss;

const valuePairCss = ".value-pair{-ms-flex-direction:column;flex-direction:column}.dark{font-size:1.125rem;line-height:1.25rem;font-weight:500;color:#161e2e}.light{font-size:0.875rem;line-height:1.25rem;color:#6b7280}";

const ValuePair = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "value-pair" }, index.h("div", { class: 'dark' }, index.h("slot", { name: "dark" })), index.h("div", { class: 'light' }, index.h("slot", { name: "light" }))));
    }
};
ValuePair.style = valuePairCss;

exports.tf_a_tag = AnchorTag;
exports.tf_app_base_header = AppHeader;
exports.tf_button = Button;
exports.tf_button_container = Button$1;
exports.tf_card = Card;
exports.tf_card_container = CardContainer;
exports.tf_card_content = Node;
exports.tf_card_title = CardTitle;
exports.tf_checkbox = List;
exports.tf_contained_card = ContainedCard;
exports.tf_divider = Divider;
exports.tf_dropdown = Dropdown;
exports.tf_dropdown_link = DropdownLink;
exports.tf_dropdown_option = DropdownOption;
exports.tf_dropdown_rendered_option = DropdownRenderedOption;
exports.tf_hexagon_button = HexagonButton;
exports.tf_icon_button = Button$2;
exports.tf_icon_check = SVGIcon;
exports.tf_icon_chevron_down = ChevronDown;
exports.tf_icon_chevron_left = SVGIcon$1;
exports.tf_icon_chevron_right = SVGIcon$2;
exports.tf_icon_chevron_up = ChevronUp;
exports.tf_icon_close = SVGIcon$3;
exports.tf_icon_envelope = Envelope;
exports.tf_icon_exclamation = SVGIcon$4;
exports.tf_icon_notification = SVGIcon$5;
exports.tf_icon_search = Search;
exports.tf_icon_user = SVGIcon$6;
exports.tf_input = List$1;
exports.tf_leading_icon_label = ListWrappingCell;
exports.tf_list = List$2;
exports.tf_list_item = ListWrappingItem;
exports.tf_list_wrapping_cell = ListWrappingCell$1;
exports.tf_list_wrapping_item = ListWrappingItem$1;
exports.tf_lms_delegate_node = LMSDelegateNode;
exports.tf_login_form = LoginForm;
exports.tf_main_content = MainContent;
exports.tf_modal = Modal;
exports.tf_node = Node$1;
exports.tf_node_flex = Node$2;
exports.tf_node_flex_fxr = Node$3;
exports.tf_node_fxl_flex = Node$4;
exports.tf_node_fxl_flex_fxr = Node$5;
exports.tf_node_header = NodeHeader;
exports.tf_node_header_title = NodeHeader$1;
exports.tf_node_list = NodeList;
exports.tf_node_select_menu = NodeSelectMenu;
exports.tf_node_status_bookend = NodeStatusBookend;
exports.tf_node_text = NodeText;
exports.tf_p_tag = ParaTag;
exports.tf_radio = List$3;
exports.tf_radio_group = List$4;
exports.tf_select = List$5;
exports.tf_select_option = SelectOption;
exports.tf_side_drawer = SideDrawer;
exports.tf_side_drawer_nav = SideDrawerNav;
exports.tf_side_drawer_nav_link = SideDrawerNavLink;
exports.tf_side_drawer_sub_nav = SideDrawerSubNav;
exports.tf_side_drawer_sub_nav_link = SideDrawerSubNavLink;
exports.tf_stat_data_card = StatDataCard;
exports.tf_stats_panel = StatsPanel;
exports.tf_status = Status;
exports.tf_table = Table;
exports.tf_table_cell = TableCell;
exports.tf_table_head = TableHead;
exports.tf_table_head_cell = TableHeadCell;
exports.tf_table_row = TableHead$1;
exports.tf_textarea = List$6;
exports.tf_user = User;
exports.tf_value_pair = ValuePair;
