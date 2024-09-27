import { Provider } from "../entities/provider.entity";
export declare class CreateProviderDto extends Provider {
    providerName: string;
    providerEmail: string;
    providerPhoneNumber: string;
}
