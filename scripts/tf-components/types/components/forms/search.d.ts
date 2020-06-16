import { EventEmitter } from '../../stencil-public-runtime';
export declare class List {
    tfOnInput: EventEmitter<any>;
    tfOnSearch: EventEmitter<any>;
    isFocused: boolean;
    name: string;
    value: string;
    placeholder: string;
    autoComplete: string;
    inputType: string;
    itemRef: HTMLInputElement;
    getValue(): Promise<string>;
    getItemRef(): Promise<HTMLInputElement>;
    onHandleOptionClicked(event: any): void;
    slotElement: HTMLSlotElement;
    observer: MutationObserver;
    onUserInput(event: Event): Promise<void>;
    onInputFocus(): void;
    onInputBlur(): void;
    onKeyPress(event: KeyboardEvent): any;
    emitSearchValue(): void;
    componentWillLoad(): void;
    initiateObserverMutation(): void;
    disconnectedCallback(): void;
    updatedChildItems(): void;
    render(): any;
}
