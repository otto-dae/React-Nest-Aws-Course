import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
    create(createProviderDto: CreateProviderDto): Promise<CreateProviderDto & import("./entities/provider.entity").Provider>;
    findAll(): Promise<import("./entities/provider.entity").Provider[]>;
    findByName(name: string): Promise<import("./entities/provider.entity").Provider[]>;
    findOne(id: string): Promise<import("./entities/provider.entity").Provider>;
    update(id: string, updateProviderDto: UpdateProviderDto): Promise<import("./entities/provider.entity").Provider>;
    remove(id: string): void;
}
