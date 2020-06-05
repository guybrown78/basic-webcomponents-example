import { EventEmitter } from '../../stencil-public-runtime';
export declare class AppHeader {
    appTitle: string;
    appInitials: string;
    clientLogoSource: string;
    tfAppLogoClicked: EventEmitter<string>;
    onButtonClickHandler(event: any): void;
    render(): any;
}
