import { Component, h, Prop, State, Event } from '@stencil/core';
export class LoginForm {
    constructor() {
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
            forgotten = h("tf-a-tag", { url: "#", "tag-title": "Forgot your password?" }, "Forgot your password?");
        }
        return (h("div", { class: "login-container" },
            h("div", { class: "login-header" },
                h("h2", { class: "header-2" }, "Login")),
            h("div", { class: "login-body" },
                h("div", { class: "form-container" },
                    h("form", { onSubmit: this.onLogin.bind(this) },
                        h("tf-input", { name: "email", "input-type": "email", "item-required": true, label: "Email Address", ref: el => this.emailInputRef = el, "input-value": this.values.email, onInput: this.onUserInput.bind(this), autoComplete: "email" }),
                        h("tf-input", { name: "password", "input-type": "password", "item-required": true, label: "Password", ref: el => this.passwordInputRef = el, onInput: this.onUserInput.bind(this), autoComplete: "on" }),
                        h("div", { class: "login-footer" },
                            h("div", { class: "link-container" }, forgotten),
                            h("tf-button", { colour: "aqua", disabled: !this.formValid || this.loading, "button-type": "submit" }, "Login")))))));
    }
    static get is() { return "tf-login-form"; }
    static get originalStyleUrls() { return {
        "$": ["login-form.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["login-form.css"]
    }; }
    static get properties() { return {
        "forgottenUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "forgotten-url",
            "reflect": true,
            "defaultValue": "null"
        },
        "apiEndpoint": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "api-endpoint",
            "reflect": true,
            "defaultValue": "null"
        },
        "apiMethod": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "api-method",
            "reflect": true,
            "defaultValue": "\"POST\""
        },
        "apiHeaders": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "api-headers",
            "reflect": true,
            "defaultValue": "null"
        },
        "bodyPropEmail": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "body-prop-email",
            "reflect": true,
            "defaultValue": "\"email\""
        },
        "bodyPropPassword": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "body-prop-password",
            "reflect": true,
            "defaultValue": "\"password\""
        }
    }; }
    static get states() { return {
        "error": {},
        "loading": {},
        "formValid": {},
        "values": {}
    }; }
    static get events() { return [{
            "method": "tfLoginSuccess",
            "name": "tfLoginSuccess",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
