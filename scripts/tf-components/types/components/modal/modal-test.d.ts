import { EventEmitter } from '../../stencil-public-runtime';
export declare class ModalTest {
    displayTitle: string;
    headerStyle: string;
    showCancel: boolean;
    showConfirm: boolean;
    showClose: boolean;
    cancelText: string;
    confirmText: string;
    cancelColour: string;
    confirmColour: string;
    tfModalClosed: EventEmitter<any>;
    tfModalConfirmed: EventEmitter<any>;
    onClose(): void;
    onConfirm(): void;
    render(): any;
}
