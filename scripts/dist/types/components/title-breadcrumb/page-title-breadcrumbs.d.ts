import { EventEmitter } from '../../stencil-public-runtime';
export declare class PageTitleBreadcrumbs {
    showBackButton: boolean;
    backButtonColour: string;
    isOpen: boolean;
    tfBackButtonClicked: EventEmitter<any>;
    onBackButtonClicked(): void;
    render(): any;
}
