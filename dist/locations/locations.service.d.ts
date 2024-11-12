import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { Manager } from 'src/managers/entities/manager.entity';
export declare class LocationsService {
    private locationRepository;
    private managerRepository;
    constructor(locationRepository: Repository<Location>, managerRepository: Repository<Manager>);
    create(createLocationDto: CreateLocationDto): Promise<CreateLocationDto & Location>;
    findAll(): Promise<Location[]>;
    findOne(id: number): Promise<Location>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
