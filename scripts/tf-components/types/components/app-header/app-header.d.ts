import { EventEmitter } from '../../stencil.core';
export declare class AppHeader {
    appTitle: string;
    appInitials: string;
    clientLogoSource: string;
    tfAppLogoClicked: EventEmitter<string>;
    onButtonClickHandler(event: any): void;
    render(): any;
}
