import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';
import { Repository } from 'typeorm';
export declare class RegionsService {
    private regionRepository;
    constructor(regionRepository: Repository<Region>);
    create(createRegionDto: CreateRegionDto): Promise<CreateRegionDto & Region>;
    findAll(): Promise<Region[]>;
    findOne(id: number): void;
    update(id: number, updateRegionDto: UpdateRegionDto): Promise<Region>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
