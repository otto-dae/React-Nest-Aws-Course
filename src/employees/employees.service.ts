/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EmployeesService {

  private employees: CreateEmployeeDto[] = [{
    id: uuidv4(),
    name: "alberto",
    lastName: "costas",
    phoneNumber: "2130948"
  },
{
  id: uuidv4(),
    name: "jose",
    lastName: "perez",
    phoneNumber: "65787689"
}]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = uuidv4();
    this.employees.push(createEmployeeDto);
    return createEmployeeDto
  }

  findAll() {
    return this.employees;
  }

  findOne(id: string) {
   const employee = this.employees.filter((employee)=>employee.id === id)[0];
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
      return employee
    })
    return employeeToUpdate;
  }

  remove(id: string) {
    this.employees = this.employees.filter((employee)=>employee.id != id);
    return this.employees;
  }
}
