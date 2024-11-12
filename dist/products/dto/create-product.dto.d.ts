import { Product } from "../entities/product.entity";
import { Provider } from "src/providers/entities/provider.entity";
export declare class CreateProductDto extends Product {
    productId: string;
    productName: string;
    price: number;
    countSeal: number;
    provider: Provider | string;
}
