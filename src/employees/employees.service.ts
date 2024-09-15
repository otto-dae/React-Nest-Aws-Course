/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
constructor(
  @InjectRepository(Employee)
  private employeeRepository: Repository<Employee>
){}
 async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.employeeRepository.save(createEmployeeDto)
     return employee
  }

  findAll() {
    return this.employeeRepository.find()
  }

  findOne(id: string) {
   const employee = this.employeeRepository.findOneBy(
    {
      employeeId: id
    }
   )
   return employee;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUpdate = this.findOne(id);
    employeeToUpdate ={
      ...employeeToUpdate,
      ...updateEmployeeDto,
    }
    this.employees = this.employees.map((employee)=> {
      if(employee.id === id){
        employee = employeeToUpdate;
      }
      if(!employeeToUpdate) throw new NotFoundException();
      return employee
    })
    return employeeToUpdate;
  }

  remove(id: string) {
    const employeeFound = this.findOne(id);
    this.employees = this.employees.filter((employee)=>employee.id != id);
    return this.employees;
  }
}
