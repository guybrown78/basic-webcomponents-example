export declare class SideDrawer {
    showContactInfo: boolean;
    displayTitle: string;
    opened: boolean;
    open(): Promise<void>;
    onAppLogoClicked(): void;
    stockSymbolChanged(newValue: boolean, oldValue: boolean): void;
    onCloseDraw(): void;
    onContentChange(content: string): void;
    render(): any[];
}
