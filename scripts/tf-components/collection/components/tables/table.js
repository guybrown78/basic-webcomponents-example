import { h } from "@stencil/core";
export class Table {
    constructor() {
        this.headerCellData = [];
        this.rowData = [];
    }
    //
    componentWillLoad() {
        // parse table header element
        const headerItem = this.slotElement.querySelector('[slot="table-head"]');
        //
        const headerCells = headerItem.getElementsByTagName('tf-table-head-cell');
        //
        Array.from(headerCells).forEach(cell => {
            this.headerCellData.push(String(cell.innerHTML).replace('<!---->', ''));
        });
        // parse table rows
        const rows = this.slotElement.getElementsByTagName('tf-table-row');
        //
        Array.from(rows).forEach(row => {
            let rowCellData = [];
            const cells = row.getElementsByTagName('tf-table-cell');
            Array.from(cells).forEach(cell => {
                rowCellData.push({
                    textAlign: cell.getAttribute('text-align'),
                    body: cell.innerHTML
                });
            });
            this.rowData.push(rowCellData);
        });
    }
    render() {
        return [
            h("div", { class: "div-1" },
                h("div", { class: "div-2" },
                    h("div", { class: "div-3" },
                        h("table", null,
                            h("thead", null, this.headerCellData.map(cell => h("th", null, cell))),
                            h("tbody", null, this.rowData.map(row => {
                                return (h("tr", null, row.map(cell => h("td", { class: `bottom-border ${cell.textAlign == 'right' ? 'text-right' : ''}`, innerHTML: cell.body }))));
                            })))))),
            h("div", { class: "hide-slot" },
                h("slot", { name: "table-head" }))
        ];
    }
    static get is() { return "tf-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["table.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["table.css"]
    }; }
    static get elementRef() { return "slotElement"; }
}
