import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';

const loginFormCss = ".login-container{margin-bottom:1.5rem;min-height:100%;background-color:#fff;border-radius:.5rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:3rem 1.25rem;margin-left:auto;margin-right:auto}.login-header{border-bottom:4px;border-style:solid;border-color:#32f7dc}.login-body{margin-top:2rem}.login-footer{margin-top:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.form-container{background-color:#fff;padding-bottom:2rem}.link-container{font-size:.875rem;line-height:1.25rem}.header-2{margin-top:1rem;margin-bottom:1rem;font-size:1.875rem;line-height:2.25rem;font-weight:800;color:#363154}@media (min-width:640px){.login-container{width:40%;padding-left:1.5rem;padding-right:1.5rem}.login-body,.login-header{margin-left:auto;margin-right:auto;width:100%}.form-container{border-radius:.5rem}}@media (min-width:1024px){.login-container{padding-left:2rem;padding-right:2rem}}";

const LoginForm = class {
    constructor(hostRef) {
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
            forgotten = h("tf-a-tag", { slot: "flex", url: this.forgottenUrl, "tag-title": "Forgot your password?" }, "Forgot your password?");
        }
        console.log(" ------------- ");
        console.log(forgotten);
        return (h("tf-form-card", null, h("tf-form-title", null, h("tf-h1", null, "Login")), h("tf-form-wrapper", null, h("form", { onSubmit: this.onLogin.bind(this) }, h("tf-input", { name: "email", "input-type": "email", "item-required": true, label: "Email Address", ref: el => this.emailInputRef = el, "input-value": this.values.email, onInput: this.onUserInput.bind(this), autoComplete: "email" }), h("tf-input", { name: "password", "input-type": "password", "item-required": true, label: "Password", ref: el => this.passwordInputRef = el, onInput: this.onUserInput.bind(this), autoComplete: "on" }), h("tf-node-flex-fxr", null, forgotten, h("tf-button", { slot: "fxr", colour: "aqua", "button-type": "submit" }, "Login"))))));
    }
};
LoginForm.style = loginFormCss;

export { LoginForm as tf_login_form };
