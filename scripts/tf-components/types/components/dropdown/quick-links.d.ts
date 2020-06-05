import { EventEmitter } from '../../stencil-public-runtime';
export declare class QuickLinks {
    generatedId: string;
    isOpen: boolean;
    dropdownId: any;
    disabled: boolean;
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
