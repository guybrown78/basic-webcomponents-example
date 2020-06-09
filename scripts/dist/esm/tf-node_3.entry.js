import { r as registerInstance, h } from './index-67a2bf30.js';

const nodeCss = "#node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl{margin-right:1rem}#flex,#fxl{display:-ms-flexbox;display:flex}#flex{-ms-flex:1 1 0%;flex:1 1 0%}#fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";

const Node = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { id: "node-container" }, h("slot", null)));
    }
};
Node.style = nodeCss;

const nodeSelectMenuCss = "#dropdown{position:relative;display:inline-block}#dropdown-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:.75rem;border:none;padding:0;margin:0;text-align:left;border-radius:.1875rem;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s}#dropdown-btn:hover{background:#4b4474;background-color:#4b4474;color:#fff}#dropdown-btn:active{background:#7a72ac;background-color:#7a72ac;color:#fff}#dropdown-btn:focus{background:#363154;background-color:#363154;color:#fff}#dropdown-btn span{padding:.8125rem;display:-ms-flexbox;display:flex}#dropdown-btn span#title{width:70px}#dropdown-btn span#icon{padding-left:.375rem;padding-right:.375rem;font-size:.625rem;border-left:1px solid #fff;-ms-flex-align:center;align-items:center;min-height:15px;height:auto}#dropdown-btn.active{background-color:#363154;color:#fff}#dropdown-content{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;right:0;background-color:#d0dfe3;min-width:160px;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);z-index:50;border-radius:.1875rem;padding:.4375rem;margin-top:5px;opacity:0;pointer-events:none}#dropdown-content.show{opacity:1;pointer-events:all}.dropdown-item-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:.75rem;padding:0;margin:0;text-align:left;border-radius:1px;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all .4s;transition:all .4s;border:none;border-bottom:1px solid rgba(54,49,84,.2)}.dropdown-item-btn:hover{background:#4b4474;background-color:#4b4474;color:#fff}.dropdown-item-btn:active{background:#7a72ac;background-color:#7a72ac;color:#fff}.dropdown-item-btn:focus{background:#363154;background-color:#363154;color:#fff}.dropdown-item-btn:last-of-type{border-bottom:none}.dropdown-item-btn span{padding:.3125rem;display:-ms-flexbox;display:flex}.svg-icon{height:1rem;width:1rem}";

const NodeSelectMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // @Element() el: HTMLElement;
        this.isOpen = false;
        this.isOpenDelayed = false;
    }
    handleClick(event) {
        if (this.isOpen) {
            const target = event.composedPath()[0];
            if (!target.matches('.dropdown-item-btn') && !target.matches('#dropdown-content')) {
                this.isOpen = this.isOpenDelayed = false;
            }
        }
    }
    /*
131 856
581 913
*/
    onMenuClicked() {
        if (this.isOpen) {
            this.isOpen = this.isOpenDelayed = false;
        }
        else {
            this.isOpen = true;
            setTimeout(() => {
                this.isOpenDelayed = true;
            }, 400);
        }
    }
    render() {
        return (h("div", { id: "dropdown" }, h("button", { onClick: this.onMenuClicked.bind(this), id: "dropdown-btn", tabindex: "0", class: this.isOpenDelayed ? 'active' : '' }, h("span", { id: "title" }, "Actions"), h("span", { id: "icon" }, h("tf-icon-chevron-down", { class: "svg-icon" }))), h("div", { id: "dropdown-content", class: this.isOpen ? 'show' : '' }, h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "View")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Assign to Course")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Assign to Cattegory")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Remove")))));
    }
};
NodeSelectMenu.style = nodeSelectMenuCss;

const nodeStatusBookendCss = "#delegate-status{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f3f5f9;border-radius:.1875rem}#delegate-status.red{background-color:#b92950}#delegate-status.amber{background-color:#b97129}#delegate-status.green{background-color:#40c7a3}#delegate-status.blue{background-color:#224595}#delegate-status.grey{background-color:#d0dfe3}";

const NodeStatusBookend = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = "grey";
    }
    render() {
        return (h("div", { id: "delegate-status", class: `
					${this.color} 
					${this.showTooltip ? 'show-tooltip' : ''}
				` }));
    }
};
NodeStatusBookend.style = nodeStatusBookendCss;

export { Node as tf_node, NodeSelectMenu as tf_node_select_menu, NodeStatusBookend as tf_node_status_bookend };
