import { EventEmitter } from '../../stencil-public-runtime';
export declare class List {
    tfOnChecked: EventEmitter<any>;
    showHint: boolean;
    showError: boolean;
    showLabel: boolean;
    showErrorIcon: boolean;
    name: string;
    label: string;
    hint: string;
    value: string;
    checked: boolean;
    required: boolean;
    errorMessage: string;
    error: boolean;
    hideLabel: boolean;
    itemRef: HTMLInputElement;
    errorChanged(newValue: boolean, oldValue: boolean): void;
    getChecked(): Promise<boolean>;
    getValue(): Promise<string>;
    getItemRef(): Promise<HTMLInputElement>;
    componentWillLoad(): void;
    onUserInteraction(event: Event): Promise<void>;
    setError(): void;
    render(): any;
}
