import { EventEmitter } from '../../stencil-public-runtime';
export declare class List {
    tfOnSelect: EventEmitter<any>;
    showHint: boolean;
    showError: boolean;
    showLabel: boolean;
    showErrorIcon: boolean;
    name: string;
    label: string;
    value: string;
    hint: string;
    placeholder: string;
    required: boolean;
    errorMessage: string;
    error: boolean;
    hideLabel: boolean;
    icon: string;
    iconPosition: string;
    slotElement: HTMLSlotElement;
    parsedOptions: any[];
    itemRef: HTMLSelectElement;
    errorChanged(newValue: boolean, oldValue: boolean): void;
    getValue(): Promise<string>;
    getItemRef(): Promise<HTMLSelectElement>;
    componentWillLoad(): void;
    onUserInteraction(event: Event): Promise<void>;
    setError(): void;
    render(): any;
}
