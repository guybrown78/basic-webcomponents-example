import { r as registerInstance, c as createEvent, h, g as getElement } from './index-67a2bf30.js';

const clientLogoCss = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px}.client-logo-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}";

const AppHeader = class {
    constructor(hostRef) {
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
    render() {
        let userAccount = null;
        let userAccountDropdown = null;
        if (this.showUserAccount) {
            userAccount = (h("div", { class: "account-navigation-container" }, h("tf-icon-button", { icon: this.isOpen ? 'close' : 'user', size: "xs", colour: this.isOpen ? 'navy' : 'white', "outline-colour": "navy", onClick: this.onToggle.bind(this) })));
            //
            userAccountDropdown = (h("div", { class: `
					dd-panel 
					${this.isOpen ? 'show' : 'hide'}
				` }, h("div", { class: `dd-panel-container dd-panel-grey` }, h("div", { class: "dd-panel-bg" }, this.dropdownItems.map((item, index) => {
                return (h("tf-dropdown-rendered-option", { class: index + 1 < this.dropdownItems.length ? "show-dividing-border" : "", value: item.value, "element-title": item.label, colour: "grey", parent: this.dropdownIdentifier }, item.label));
            })))));
        }
        //
        return (h("div", { class: "outer-container" }, h("div", { class: "client-logo-container" }, h("div", { class: "client-logo" }, h("img", { class: "client-logo-image", src: this.clientLogoSource })), userAccount), userAccountDropdown));
    }
    get slotElement() { return getElement(this); }
};
AppHeader.style = clientLogoCss;

export { AppHeader as tf_app_client_logo };
