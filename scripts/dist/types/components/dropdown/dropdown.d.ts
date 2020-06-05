import { EventEmitter } from '../../stencil-public-runtime';
export declare class Dropdown {
    generatedId: string;
    isOpen: boolean;
    displayTitle: string;
    dropdownId: any;
    size: string;
    colour: string;
    disabled: boolean;
    position: string;
    tfDropdownSelected: EventEmitter<any>;
    handleClick(event: any): void;
    onHandleCloseDropdown(): void;
    onHandleOptionClicked(event: any): void;
    slotElement: HTMLSlotElement;
    parsedOptions: any[];
    onToggle(): void;
    componentWillLoad(): void;
    render(): any;
}
