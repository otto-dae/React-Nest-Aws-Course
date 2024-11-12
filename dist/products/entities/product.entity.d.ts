import { Provider } from "src/providers/entities/provider.entity";
export declare class Product {
    productId: string;
    productName: string;
    price: number;
    countSeal: number;
    provider: Provider | string;
}
