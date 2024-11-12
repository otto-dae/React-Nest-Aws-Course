import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
export declare class RegionsController {
    private readonly regionsService;
    constructor(regionsService: RegionsService);
    create(createRegionDto: CreateRegionDto): Promise<CreateRegionDto & import("./entities/region.entity").Region>;
    findAll(): Promise<import("./entities/region.entity").Region[]>;
    findOne(id: string): Promise<import("./entities/region.entity").Region>;
    update(id: string, updateRegionDto: UpdateRegionDto): Promise<import("./entities/region.entity").Region>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
