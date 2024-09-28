import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class LocationsService {
  constructor(
    private locationRepository: Repository<Location>
  ){}
  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationRepository.find()
  }

  findOne(id: number) {
    const location = this.locationRepository.findOneBy({
      locationId: id,
    })
    if(!location) throw new NotFoundException("Location not found ");

  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    const location = this.locationRepository.preload({
      locationId: id,
      ... updateLocationDto
    })
  }

  remove(id: number) {
    return this.locationRepository.delete({
      locationId: id,
    })
  }
}
