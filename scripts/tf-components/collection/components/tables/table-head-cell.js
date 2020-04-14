import { h } from "@stencil/core";
export class TableHeadCell {
    render() {
        return (h("slot", null));
    }
    static get is() { return "tf-table-head-cell"; }
}
