import { EventEmitter } from '../../stencil-public-runtime';
export declare class AppHeader {
    showClientLogo: boolean;
    clientLogoSource: string;
    showUserAccount: boolean;
    userAccountMenuItems: any;
    isOpen: boolean;
    dropdownItems: any[];
    tfUserAccountDropdownSelected: EventEmitter<any>;
    dropdownIdentifier: string;
    userAccountMenuItemsPropChanged(newValue: any, oldValue: any): void;
    handleClick(event: any): void;
    onHandleOptionClicked(event: any): void;
    onToggle(): void;
    componentWillLoad(): void;
    setDropdownItems(): void;
    render(): any;
}
