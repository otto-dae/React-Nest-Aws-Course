import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm';
export declare class ManagersService {
    private managerRepository;
    constructor(managerRepository: Repository<Manager>);
    create(createRegionDto: CreateManagerDto): Promise<CreateManagerDto & Manager>;
    findAll(): Promise<Manager[]>;
    findOne(id: string): Promise<Manager>;
    update(id: string, updateRegionDto: UpdateManagerDto): Promise<Manager>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
