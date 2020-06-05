var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';
var loginFormCss = ".login-container{margin-bottom:1.5rem;min-height:100%;background-color:#fff;border-radius:.5rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:3rem 1.25rem;margin-left:auto;margin-right:auto}.login-header{border-bottom:4px;border-style:solid;border-color:#32f7dc}.login-body{margin-top:2rem}.login-footer{margin-top:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.form-container{background-color:#fff;padding-bottom:2rem}.link-container{font-size:.875rem;line-height:1.25rem}.header-2{margin-top:1rem;margin-bottom:1rem;font-size:1.875rem;line-height:2.25rem;font-weight:800;color:#363154}@media (min-width:640px){.login-container{width:40%;padding-left:1.5rem;padding-right:1.5rem}.login-body,.login-header{margin-left:auto;margin-right:auto;width:100%}.form-container{border-radius:.5rem}}@media (min-width:1024px){.login-container{padding-left:2rem;padding-right:2rem}}";
var LoginForm = /** @class */ (function () {
    function class_1(hostRef) {
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
    class_1.prototype.onLogin = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var email, passwordRef;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        return [4 /*yield*/, this.emailInputRef.getValue()];
                    case 1:
                        email = _a.sent();
                        return [4 /*yield*/, this.passwordInputRef.getItemRef()];
                    case 2:
                        passwordRef = _a.sent();
                        this.fetchAPI(email, passwordRef.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.fetchAPI = function (email, password) {
        var _a;
        var _this = this;
        this.loading = true;
        if (!this.apiEndpoint) {
            this.error = "No endpoint 'api-enpoint' declared";
            this.loading = false;
            return;
        }
        // use axios
        var opts = (_a = {},
            _a[this.bodyPropEmail] = email,
            _a[this.bodyPropPassword] = password,
            _a);
        var headers = {};
        if (this.apiHeaders) {
            var h_1 = JSON.parse(this.apiHeaders.replace(/'/g, '"'));
            if (!this.isEmpty(h_1)) {
                headers = Object.assign({}, h_1);
            }
        }
        fetch(this.apiEndpoint, {
            method: this.apiMethod,
            body: JSON.stringify(opts),
            headers: headers,
        })
            .then(function (res) {
            if (res.status !== 200) {
                throw new Error('Invalid!');
            }
            return res.json();
        })
            .then(function (parsedRes) {
            _this.tfLoginSuccess.emit(parsedRes);
            // this.error = null;
            _this.loading = false;
        })
            .catch(function (err) {
            console.log(err);
            // this.error = err.message;
            _this.loading = false;
        });
    };
    class_1.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    class_1.prototype.onUserInput = function (event) {
        var input = event.target;
        this.values[input.id] = input.value.trim();
        //
        if (!this.values.email || !this.values.password) {
            this.formValid = false;
            return;
        }
        this.formValid = this.values.email.length > 0 && this.values.password.length > 0;
    };
    class_1.prototype.render = function () {
        var _this = this;
        var forgotten = null;
        if (this.forgottenUrl) {
            forgotten = h("tf-a-tag", { slot: "flex", url: this.forgottenUrl, "tag-title": "Forgot your password?" }, "Forgot your password?");
        }
        console.log(" ------------- ");
        console.log(forgotten);
        return (h("tf-form-card", null, h("tf-form-title", null, h("tf-h1", null, "Login")), h("tf-form-wrapper", null, h("form", { onSubmit: this.onLogin.bind(this) }, h("tf-input", { name: "email", "input-type": "email", "item-required": true, label: "Email Address", ref: function (el) { return _this.emailInputRef = el; }, "input-value": this.values.email, onInput: this.onUserInput.bind(this), autoComplete: "email" }), h("tf-input", { name: "password", "input-type": "password", "item-required": true, label: "Password", ref: function (el) { return _this.passwordInputRef = el; }, onInput: this.onUserInput.bind(this), autoComplete: "on" }), h("tf-node-flex-fxr", null, forgotten, h("tf-button", { slot: "fxr", colour: "aqua", "button-type": "submit" }, "Login"))))));
    };
    return class_1;
}());
LoginForm.style = loginFormCss;
export { LoginForm as tf_login_form };
