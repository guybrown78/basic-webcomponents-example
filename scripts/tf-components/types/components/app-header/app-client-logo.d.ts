import { EventEmitter } from '../../stencil-public-runtime';
export declare class AppHeader {
    clientLogoSource: string;
    showUserAccount: boolean;
    isOpen: boolean;
    logoImageClass: string;
    dropdownItems: any[];
    tfUserAccountDropdownSelected: EventEmitter<any>;
    imgRef: HTMLImageElement;
    clientLogoSourcePropChanged(newValue: any, oldValue: any): void;
    handleClick(event: any): void;
    onHandleOptionClicked(event: any): void;
    slotElement: HTMLSlotElement;
    parsedOptions: any[];
    dropdownIdentifier: string;
    observer: MutationObserver;
    onToggle(): void;
    componentWillLoad(): void;
    initiateObserverMutation(): void;
    disconnectedCallback(): void;
    parseDropdownItems(): void;
    onClientLogoLoaded(): void;
    render(): any;
}
