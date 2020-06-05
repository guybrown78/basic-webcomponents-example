import { EventEmitter } from '../../../stencil-public-runtime';
export declare class Modal {
    isOpen: boolean;
    hasShownOnce: boolean;
    autoOpen: boolean;
    autoOpenDelay: number;
    opened: boolean;
    showDuration: number;
    alertId: string;
    icon: string;
    colour: string;
    message: string;
    showButton: boolean;
    buttonTitle: string;
    buttonColour: string;
    buttonSize: string;
    tfAlertTransitionedOut: EventEmitter<any>;
    alertRef: HTMLElement;
    open(): Promise<void>;
    openedPropChanged(newValue: boolean, oldValue: boolean): void;
    onClose(): void;
    onTransitionEnd(event: any): void;
    componentWillLoad(): void;
    render(): any;
}
