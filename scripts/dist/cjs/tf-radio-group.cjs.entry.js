'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const radioGroupCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}fieldset{margin:0;padding:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.bottom-text{margin-left:0;margin-top:2px;font-size:.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#d0dfe3}.description-text{margin-top:2px;display:block;font-size:.875rem;font-weight:500;line-height:1.25rem}.description-text.desc{color:#6b7280}";

const List = class {
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
        if (event.detail.groupName === this.name) {
            event.preventDefault();
            event.stopPropagation();
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
List.style = radioGroupCss;

exports.tf_radio_group = List;
