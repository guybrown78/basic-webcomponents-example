import { EventEmitter } from '../../stencil-public-runtime';
export declare class List {
    generatedId: string;
    tfOnItemSelected: EventEmitter<any>;
    showHint: boolean;
    showError: boolean;
    showLabel: boolean;
    showErrorIcon: boolean;
    selectedItem: HTMLTfRadioElement;
    name: string;
    label: string;
    hint: string;
    description: string;
    value: string;
    groupName: string;
    required: boolean;
    errorMessage: string;
    error: boolean;
    hideLabel: boolean;
    itemRef: HTMLInputElement;
    errorChanged(newValue: boolean, oldValue: boolean): void;
    onHandleRadioSelected(event: any): void;
    getValue(): Promise<string>;
    getItemRef(): Promise<HTMLInputElement>;
    componentWillLoad(): void;
    setError(): void;
    render(): any;
}
