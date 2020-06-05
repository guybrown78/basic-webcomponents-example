import { EventEmitter } from '../../stencil-public-runtime';
export declare class SideDrawerSubNavLink {
    tfRouterLinkClicked: EventEmitter<any>;
    hrefLink: string;
    hrefTitle: string;
    routerLink: string;
    showChevron: boolean;
    onRouterLinkClicked(): void;
    render(): any;
}
