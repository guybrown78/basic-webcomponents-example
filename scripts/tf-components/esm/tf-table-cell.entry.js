import { r as registerInstance, h } from './index-67a2bf30.js';

const TableCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = 'centre';
    }
    render() {
        return (h("slot", null));
    }
};

export { TableCell as tf_table_cell };
