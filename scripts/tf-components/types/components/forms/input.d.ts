import { EventEmitter } from '../../stencil-public-runtime';
export declare class List {
    tfOnInput: EventEmitter<any>;
    showHint: boolean;
    showError: boolean;
    showLabel: boolean;
    showLeadingIcon: boolean;
    showTrailingIcon: boolean;
    showErrorIcon: boolean;
    name: string;
    label: string;
    value: string;
    hint: string;
    placeholder: string;
    required: boolean;
    autoComplete: string;
    inputType: string;
    errorMessage: string;
    error: boolean;
    hideLabel: boolean;
    icon: string;
    iconPosition: string;
    el: HTMLElement;
    itemRef: HTMLInputElement;
    errorChanged(newValue: boolean, oldValue: boolean): void;
    getValue(): Promise<string>;
    getItemRef(): Promise<HTMLInputElement>;
    componentWillLoad(): void;
    onUserInput(event: Event): Promise<void>;
    setError(): void;
    render(): any;
}
