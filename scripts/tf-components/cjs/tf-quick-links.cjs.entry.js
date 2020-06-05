'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const dropdownCss = ".dd-container{position:relative;display:inline-block;text-align:left}.dd-panel{position:absolute;margin-top:0.5rem;width:14rem;border-radius:0.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);z-index:40}.dd-ql-panel{width:200px;left:-75px;-webkit-transform-origin:top left;transform-origin:top left}.right{-webkit-transform-origin:top right;transform-origin:top right;right:0}.left{-webkit-transform-origin:top left;transform-origin:top left;left:0}.center{left:-70px;-webkit-transform-origin:center;transform-origin:center}.dd-panel.show{pointer-events:auto;opacity:1;--transform-scale-x:1;--transform-scale-y:1;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transition-duration:100ms;transition-duration:100ms}.dd-panel.hide{pointer-events:none;opacity:0;--transform-scale-x:.95;--transform-scale-y:.95;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 1, 1);transition-timing-function:cubic-bezier(0.4, 0, 1, 1);-webkit-transition-duration:75ms;transition-duration:75ms}.dd-panel-container{border-radius:0.375rem;background-color:#D0DFE3;-webkit-box-shadow:0 0 0 1px rgba(0, 0, 0, 0.05);box-shadow:0 0 0 1px rgba(0, 0, 0, 0.05)}.dd-panel-blue{background-color:#224595}.dd-panel-bg{padding-top:0.25rem;padding-bottom:0.25rem}";

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
				` }, index.h("div", { class: `dd-panel-container dd-panel-grey` }, index.h("div", { class: "dd-panel-bg" }, options)))));
    }
    get slotElement() { return index.getElement(this); }
};
QuickLinks.style = dropdownCss;

exports.tf_quick_links = QuickLinks;
