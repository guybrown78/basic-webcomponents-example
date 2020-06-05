import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';

const tableCss = "table{min-width:100%;border-collapse:collapse}th{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;border-bottom-width:1px;border-color:#D0DFE3;background-color:#D0DFE3;text-align:left;font-size:0.75rem;line-height:1rem;font-weight:500;color:#363154;text-transform:uppercase;letter-spacing:0.05em}tbody{background-color:#ffffff}tr{background-color:#ffffff;-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);border-radius:0.125rem}td{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;white-space:nowrap;font-size:0.875rem;line-height:1.25rem;color:#363154}td.bottom-border{border-bottom-width:1px;border-right-width:0;border-left-width:0;border-color:#D0DFE3;border-style:solid}td.text-right{text-align:right;font-weight:500}.table-cell{background-color:0}";

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        //
        this.slotElement.innerHTML = "";
    }
    render() {
        return [
            h("table", null, h("thead", null, this.headerCellData.map(cell => h("th", null, cell))), h("tbody", null, this.rowData.map(row => {
                return (h("tr", null, row.map(cell => h("td", { class: `table-cell bottom-border ${cell.textAlign == 'right' ? 'text-right' : ''}`, innerHTML: cell.body }))));
            })))
            // 	<div class="hide-slot">
            // 		<slot name="table-head" />
            // 	</div>
        ];
    }
    get slotElement() { return getElement(this); }
};
Table.style = tableCss;

export { Table as tf_table };
