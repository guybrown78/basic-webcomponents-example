export declare class List {
    showHint: boolean;
    showError: boolean;
    showLabel: boolean;
    showLeadingIcon: boolean;
    showTrailingIcon: boolean;
    showErrorIcon: boolean;
    name: string;
    label: string;
    placeholder: string;
    inputRequired: boolean;
    inputAutoComplete: string;
    inputType: string;
    value: string;
    inputHint: string;
    inputError: string;
    error: boolean;
    hideLabel: boolean;
    icon: string;
    iconPosition: string;
    el: HTMLElement;
    inputRef: HTMLInputElement;
    errorChanged(newValue: boolean, oldValue: boolean): void;
    getValue(): Promise<string>;
    getInputRef(): Promise<HTMLInputElement>;
    componentWillLoad(): void;
    setError(): void;
    render(): any;
}
