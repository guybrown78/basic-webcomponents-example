import { EventEmitter } from '../../stencil-public-runtime';
export declare class DropdownLink {
    tfDropdownLinkClicked: EventEmitter<any>;
    tfCloseDropdown: EventEmitter<string>;
    hrefLink: string;
    hrefTitle: string;
    hrefTarget: string;
    colour: string;
    routerLink: string;
    onDropdownLinkClicked(): void;
    render(): any;
}
