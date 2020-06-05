var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-67a2bf30.js';
var clientLogoCss = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-left:0.25rem;padding-right:0.25rem;border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);background-color:#ffffff;height:100%;z-index:50}.client-logo{width:112px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.client-logo-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:0.5rem;border-radius:0.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transition-duration:200ms;transition-duration:200ms}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 1, 1);transition-timing-function:cubic-bezier(0.4, 0, 1, 1);-webkit-transition-duration:100ms;transition-duration:100ms}.dd-panel-container{border-bottom-right-radius:0.375rem;border-bottom-left-radius:0.375rem;background-color:#D0DFE3;-webkit-box-shadow:0 0 0 1px rgba(0, 0, 0, 0.05);box-shadow:0 0 0 1px rgba(0, 0, 0, 0.05)}.dd-panel-bg{padding-top:0.75rem;padding-bottom:0.25rem;padding-left:0.25rem;padding-right:0.25rem}.show-dividing-border{display:block;border-left-width:0;border-right-width:0;border-top-width:0;border-bottom-width:1px;border-style:solid;border-color:#363154}";
var AppHeader = /** @class */ (function () {
    function AppHeader(hostRef) {
        registerInstance(this, hostRef);
        this.clientLogoSource = null;
        this.showUserAccount = false;
        // @Prop() userAccountMenuItems:any;
        this.isOpen = false;
        this.dropdownItems = [];
        this.parsedOptions = [];
        this.dropdownIdentifier = "user-account-dd-nav";
        this.observer = null;
        this.tfUserAccountDropdownSelected = createEvent(this, "tfUserAccountDropdownSelected", 7);
    }
    AppHeader.prototype.handleClick = function (event) {
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
    AppHeader.prototype.onHandleOptionClicked = function (event) {
        if (this.isOpen && event.detail.parent === this.dropdownIdentifier) {
            event.preventDefault();
            event.stopPropagation();
            this.tfUserAccountDropdownSelected.emit(Object.assign({}, event.detail));
            this.isOpen = false;
        }
    };
    //
    AppHeader.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    AppHeader.prototype.componentWillLoad = function () {
        this.parseDropdownItems();
        this.initiateObserverMutation();
    };
    AppHeader.prototype.initiateObserverMutation = function () {
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
    AppHeader.prototype.disconnectedCallback = function () {
        // Stop observing the slotElement change
        this.observer.disconnect();
    };
    AppHeader.prototype.parseDropdownItems = function () {
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
    AppHeader.prototype.render = function () {
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
    Object.defineProperty(AppHeader.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return AppHeader;
}());
AppHeader.style = clientLogoCss;
export { AppHeader as tf_app_client_logo };
