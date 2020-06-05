import { EventEmitter } from '../stencil-public-runtime';
export declare class StatDataCard {
    cardTitle: string;
    productCode: string;
    productInitials: string;
    productTitle: string;
    productDescription: string;
    productCta: string;
    productId: string;
    isActive: boolean;
    marketingCtaAsButton: boolean;
    tfPhOverviewButtonClicked: EventEmitter<any>;
    tfPhOverviewFindOutMoreClicked: EventEmitter<any>;
    onProductButtonClicked(): void;
    onProductFindOutMoreClicked(): void;
    componentWillLoad(): void;
    render(): any[];
}
