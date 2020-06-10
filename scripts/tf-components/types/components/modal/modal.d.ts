import { EventEmitter } from '../../stencil-public-runtime';
export declare class Modal {
    isOpen: boolean;
    displayTitle: string;
    headerStyle: string;
    opened: boolean;
    showCancel: boolean;
    showConfirm: boolean;
    showClose: boolean;
    cancelText: string;
    confirmText: string;
    cancelColour: string;
    confirmColour: string;
    open(): Promise<void>;
    openedPropChanged(newValue: boolean, oldValue: boolean): void;
    tfModalClosed: EventEmitter<any>;
    tfModalConfirmed: EventEmitter<any>;
    onClose(): void;
    onConfirm(): void;
    render(): any;
}
