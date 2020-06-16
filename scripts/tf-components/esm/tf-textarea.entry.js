import { r as registerInstance, c as createEvent, h, g as getElement } from './index-67a2bf30.js';

const textareaCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}*,input,input[type=text],input[type=textarea],textarea{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-textarea::-webkit-input-placeholder{color:#d7e3e7;opacity:1}.form-textarea:-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-textarea::-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-textarea:-ms-input-placeholder,.form-textarea::-moz-placeholder,.form-textarea::-ms-input-placeholder,.form-textarea::-webkit-input-placeholder,.form-textarea::placeholder{color:#d7e3e7;opacity:1}.form-textarea.form-textarea-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-textarea.form-textarea-error:-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-textarea.form-textarea-error::-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-textarea.form-textarea-error:-ms-input-placeholder,.form-textarea.form-textarea-error::-moz-placeholder,.form-textarea.form-textarea-error::-ms-input-placeholder,.form-textarea.form-textarea-error::-webkit-input-placeholder,.form-textarea.form-textarea-error::placeholder{color:#f8b4b4;opacity:1}.form-textarea:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-textarea-styled{display:block;width:100%;resize:vertical}.form-textarea-error{color:#771d1d;border-color:#f8b4b4}.form-textarea-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}@media (min-width:640px){.form-textarea-styled{font-size:.875rem;line-height:1.25rem}}";

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
        this.placeholder = '';
        this.required = false;
        this.autoComplete = 'off';
        this.rowCount = 3;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
        this.tfOnInput = createEvent(this, "tfOnInput", 7);
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
            bottomText = h("p", { class: "hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "error" }, this.errorMessage);
        }
        //
        return (h("div", { class: "label-input-container" }, h("label", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`, htmlFor: this.name }, this.label), h("div", { class: "input-container" }, h("textarea", { id: this.name, name: this.name, ref: el => this.itemRef = el, rows: this.rowCount, class: `
							form-textarea 
							form-textarea-styled 
							${this.showError ? 'form-textarea-error' : ''} 
						`, placeholder: this.placeholder, required: this.required, value: this.value, onInput: this.onUserInput.bind(this) })), bottomText));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "error": ["errorChanged"]
    }; }
};
List.style = textareaCss;

export { List as tf_textarea };
