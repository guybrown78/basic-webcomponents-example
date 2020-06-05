export declare class ListWrappingItem {
    slotElement: HTMLSlotElement;
    itemData: any[];
    componentWillLoad(): void;
    getCellStyle(contentAlign: any): {
        display: string;
        flex: string;
        justifyContent: any;
    };
    render(): any;
}
