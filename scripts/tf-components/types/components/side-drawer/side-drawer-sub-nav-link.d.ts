import { EventEmitter } from '../../stencil-public-runtime';
export declare class SideDrawerSubNavLink {
    tfRouterLinkClicked: EventEmitter<any>;
    tfCloseSideDrawer: EventEmitter<string>;
    hrefLink: string;
    hrefTitle: string;
    routerLink: string;
    showBottomBorder: boolean;
    onRouterLinkClicked(): void;
    render(): any;
}
