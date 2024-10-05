import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
export declare class LocationsService {
    private locationRepository;
    constructor(locationRepository: Repository<Location>);
    create(createLocationDto: CreateLocationDto): Promise<CreateLocationDto & Location>;
    findAll(): Promise<Location[]>;
    findOne(id: number): Promise<Location>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
