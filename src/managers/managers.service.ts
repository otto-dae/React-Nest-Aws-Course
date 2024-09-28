import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Manager)
    private managerRepository: Repository<Manager>
  ){}
  create(createRegionDto: CreateManagerDto) {
    return this.managerRepository.save(createRegionDto);
  }

  findAll() {
    return this.managerRepository.find();
  }

  findOne(id: string) {
    const region =  this.managerRepository.findBy(
      {
        managerId: id
      }
    )
    if(!region) throw new NotFoundException(" womp womp");
  }

  async update(id: string, updateRegionDto: UpdateManagerDto) {
    const regionToUpdate = await this.managerRepository.preload({
      managerId: id,
      ... updateRegionDto
    })
    if(!regionToUpdate) throw new NotFoundException("Region to update no found")
      return this.managerRepository.save(regionToUpdate)
  }


  remove(id: string) {
    return this.managerRepository.delete(
      {
        managerId: id,
        ... UpdateManagerDto
      }
    )
  }
}

