export declare class NodeRow {
    slotElement: HTMLSlotElement;
    isMobile: boolean;
    mobileWrap: boolean;
    cells: any[];
    onPageResize(event: any): void;
    checkScreenWidth(screenWidth: any): void;
    componentWillLoad(): void;
    render(): any;
}
