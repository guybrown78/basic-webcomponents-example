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
    inputHint: string;
    inputError: string;
    error: boolean;
    hideLabel: boolean;
    icon: string;
    iconPosition: string;
    errorChanged(newValue: boolean, oldValue: boolean): void;
    componentWillLoad(): void;
    setError(): void;
    render(): any;
}
