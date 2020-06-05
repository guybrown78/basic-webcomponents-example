import { r as registerInstance, h } from './index-67a2bf30.js';
var TableCell = /** @class */ (function () {
    function TableCell(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = 'centre';
    }
    TableCell.prototype.render = function () {
        return (h("slot", null));
    };
    return TableCell;
}());
export { TableCell as tf_table_cell };
