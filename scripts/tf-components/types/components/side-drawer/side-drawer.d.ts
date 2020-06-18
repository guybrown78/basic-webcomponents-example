export declare class SideDrawer {
    showContactInfo: boolean;
    displayTitle: string;
    opened: boolean;
    open(): Promise<void>;
    onAppLogoClicked(): void;
    onHandleCloseSideDrawer(): void;
    stockSymbolChanged(newValue: boolean, oldValue: boolean): void;
    onCloseDraw(): void;
    render(): any[];
}
