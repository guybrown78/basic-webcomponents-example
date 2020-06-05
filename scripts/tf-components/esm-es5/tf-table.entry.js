import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';
var tableCss = "table{min-width:100%;border-collapse:collapse}th{padding:.25rem .5rem;border-bottom-width:1px;border-color:#d0dfe3;background-color:#d0dfe3;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;color:#363154;text-transform:uppercase;letter-spacing:.05em}tbody,tr{background-color:#fff}tr{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.125rem}td{padding:.25rem .5rem;white-space:nowrap;font-size:.875rem;line-height:1.25rem;color:#363154}td.bottom-border{border-top-color:#d0dfe3;border-left:0 solid #d0dfe3;border-bottom:1px solid #d0dfe3;border-right:0 solid #d0dfe3;border-top-style:solid}td.text-right{text-align:right;font-weight:500}.table-cell{background-color:0}";
var Table = /** @class */ (function () {
    function Table(hostRef) {
        registerInstance(this, hostRef);
        this.headerCellData = [];
        this.rowData = [];
    }
    //
    Table.prototype.componentWillLoad = function () {
        var _this = this;
        // parse table header element
        var headerItem = this.slotElement.querySelector('[slot="table-head"]');
        //
        var headerCells = headerItem.getElementsByTagName('tf-table-head-cell');
        //
        Array.from(headerCells).forEach(function (cell) {
            _this.headerCellData.push(String(cell.innerHTML).replace('<!---->', ''));
        });
        // parse table rows
        var rows = this.slotElement.getElementsByTagName('tf-table-row');
        //
        Array.from(rows).forEach(function (row) {
            var rowCellData = [];
            var cells = row.getElementsByTagName('tf-table-cell');
            Array.from(cells).forEach(function (cell) {
                rowCellData.push({
                    textAlign: cell.getAttribute('text-align'),
                    body: cell.innerHTML
                });
            });
            _this.rowData.push(rowCellData);
        });
        //
        this.slotElement.innerHTML = "";
    };
    Table.prototype.render = function () {
        return [
            h("table", null, h("thead", null, this.headerCellData.map(function (cell) { return h("th", null, cell); })), h("tbody", null, this.rowData.map(function (row) {
                return (h("tr", null, row.map(function (cell) { return h("td", { class: "table-cell bottom-border " + (cell.textAlign == 'right' ? 'text-right' : ''), innerHTML: cell.body }); })));
            })))
            // 	<div class="hide-slot">
            // 		<slot name="table-head" />
            // 	</div>
        ];
    };
    Object.defineProperty(Table.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Table;
}());
Table.style = tableCss;
export { Table as tf_table };
