import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './entities/provider.entity';
import { Repository } from 'typeorm';
export declare class ProvidersService {
    private providerRepository;
    constructor(providerRepository: Repository<Provider>);
    create(createProviderDto: CreateProviderDto): Promise<CreateProviderDto & Provider>;
    findAll(): Promise<Provider[]>;
    findOne(id: string): Promise<Provider>;
    findByName(name: string): Promise<Provider[]>;
    update(id: string, updateProviderDto: UpdateProviderDto): Promise<Provider>;
    remove(id: string): {
        message: string;
    };
}
