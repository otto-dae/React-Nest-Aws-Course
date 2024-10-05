import { ManagersService } from './managers.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
export declare class ManagersController {
    private readonly managersService;
    constructor(managersService: ManagersService);
    create(createManagerDto: CreateManagerDto): Promise<CreateManagerDto & import("./entities/manager.entity").Manager>;
    findAll(): Promise<import("./entities/manager.entity").Manager[]>;
    findOne(id: string): void;
    update(id: string, updateManagerDto: UpdateManagerDto): Promise<import("./entities/manager.entity").Manager>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
