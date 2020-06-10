'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const radioCss = ".radio-wrapper{-ms-flex-direction:column;flex-direction:column;margin-top:.5rem}.form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.input-label-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.radio-container{width:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}*,input,input[type=checkbox]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.form-radio{-webkit-print-color-adjust:exact;color-adjust:exact;background-origin:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0;width:1.5rem;height:1.5rem;color:#224595;border-color:#d0dfe3;border-width:1px;border-radius:9999px}.form-radio:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-radio::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-radio:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-radio:checked:focus{border-color:transparent}.form-radio-styled{height:1rem;width:1rem;color:#224595;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-radio-error{color:#771d1d;border-color:#f8b4b4}.form-radio-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.bottom-text{margin-left:30px;margin-top:2px;font-size:.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#d0dfe3}";

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
List.style = radioCss;

exports.tf_radio = List;
