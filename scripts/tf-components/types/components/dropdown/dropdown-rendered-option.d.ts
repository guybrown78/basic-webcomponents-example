import { EventEmitter } from '../../stencil-public-runtime';
export declare class DropdownRenderedOption {
    colour: string;
    elementTitle: string;
    value: string;
    parent: string;
    tfDropdownOptionClicked: EventEmitter<any>;
    onDropdownOptionClicked(): void;
    render(): any;
}
