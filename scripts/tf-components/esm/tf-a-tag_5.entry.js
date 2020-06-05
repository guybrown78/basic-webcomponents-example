import { r as registerInstance, h } from './index-67a2bf30.js';

const AnchorTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
    }
    render() {
        return (h("a", { href: this.url, title: this.tagTitle }, h("slot", null)));
    }
};
AnchorTag.style = "a{\n\t\t\t@apply font-medium text-blue-600 transition ease-in-out duration-150;\n\t\t}\n\t\ta:hover{\n\t\t\t@apply text-blue-500;\n\t\t}\n\t\ta:focus{\n\t\t\t@apply outline-none underline;\n\t\t}";

const formStylesCss = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";

const FormCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    render() {
        return (h("div", { class: `form-card colour-${this.colour}` }, h("slot", null)));
    }
};
FormCard.style = formStylesCss;

const formStylesCss$1 = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";

const FormTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    render() {
        return (h("div", { class: `form-title colour-${this.colour}` }, h("slot", null)));
    }
};
FormTitle.style = formStylesCss$1;

const formStylesCss$2 = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";

const FormTitle$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: `form-wrapper` }, h("slot", null)));
    }
};
FormTitle$1.style = formStylesCss$2;

const elementsCss = ".underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-h1{margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem}.tag-h1,.tag-h2{font-family:Roboto Condensed,sans-serif;font-weight:800}.tag-h2{margin-top:1rem;font-size:1.5rem;line-height:1.75rem}.span-title{margin-top:.5rem;margin-bottom:.5rem;font-size:1.125rem;line-height:1.5rem;font-weight:800;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description,.span-title{display:block;font-family:Roboto Condensed,sans-serif}.span-description{margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold{font-family:Roboto Condensed,sans-serif;font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";

const HOneTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        return (h("h2", { class: `tag-h1 color-${this.colour} text-align-${this.textAlign}` }, h("slot", null)));
    }
};
HOneTag.style = elementsCss;

export { AnchorTag as tf_a_tag, FormCard as tf_form_card, FormTitle as tf_form_title, FormTitle$1 as tf_form_wrapper, HOneTag as tf_h1 };
