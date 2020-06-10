import { EventEmitter } from '../../stencil-public-runtime';
export declare class SideDrawerNavLink {
    tfRouterLinkClicked: EventEmitter<any>;
    tfCloseSideDrawer: EventEmitter<string>;
    isSubOpen: boolean;
    hrefLink: string;
    hrefTitle: string;
    routerLink: string;
    slotElement: HTMLSlotElement;
    hasSubMenu: boolean;
    onLinkClicked(): void;
    onRouterLinkClicked(): void;
    componentWillLoad(): void;
    render(): any[];
}
