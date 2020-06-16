import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';

const checkboxCss = ".checkbox-wrapper{-ms-flex-direction:column;flex-direction:column;margin-top:1rem}.form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.input-label-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-container{width:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}*,input,input[type=checkbox]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.form-checkbox{-webkit-print-color-adjust:exact;color-adjust:exact;background-origin:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0;width:1.5rem;height:1.5rem;color:#224595;border-color:#d0dfe3;border-width:1px;border-radius:.25rem}.form-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-checkbox::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-checkbox:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-checkbox:checked:focus{border-color:transparent}.form-checkbox-styled{height:1rem;width:1rem;color:#224595;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-checkbox-error{color:#771d1d;border-color:#f8b4b4}.form-checkbox-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.bottom-text{margin-left:30px;margin-top:2px;font-size:.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#d0dfe3}";

const List = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.tfOnChecked = createEvent(this, "tfOnChecked", 7);
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
        this.checked = checked;
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
        let bottomText = h("p", { class: "bottom-text hide" }, "\u00A0");
        if (this.showHint) {
            bottomText = h("p", { class: "bottom-text hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "bottom-text error" }, this.errorMessage);
        }
        return (h("div", { class: "checkbox-wrapper" }, h("div", { class: "input-label-container" }, h("div", { class: "checkbox-container" }, h("input", { id: this.name, name: this.name, ref: el => this.itemRef = el, type: "checkbox", class: `
								form-checkbox 
								form-checkbox-styled 
								${this.showError ? 'form-checkbox-error' : ''} 
							`, checked: this.checked, required: this.required, onInput: this.onUserInteraction.bind(this) })), h("label", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`, htmlFor: this.name }, this.label)), bottomText));
    }
    static get watchers() { return {
        "error": ["errorChanged"]
    }; }
};
List.style = checkboxCss;

export { List as tf_checkbox };
