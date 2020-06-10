'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const TableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textAlign = 'centre';
    }
    render() {
        return (index.h("slot", null));
    }
};

exports.tf_table_cell = TableCell;
