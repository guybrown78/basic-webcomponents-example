import { EventEmitter } from '../../stencil-public-runtime';
export declare class AppHeader {
    appTitle: string;
    appInitials: string;
    showAppLogo: boolean;
    isLogoClickable: boolean;
    showClientLogo: boolean;
    showUserAccount: boolean;
    clientLogoSource: string;
    userAccountMenuItems: any;
    tfAppLogoClicked: EventEmitter<string>;
    hostElement: HTMLTfAppBaseHeaderElement;
    hasQuickLinksSlot: boolean;
    hasClientLogoSlot: boolean;
    onButtonClickHandler(event: any): void;
    componentWillLoad(): void;
    render(): any;
}
