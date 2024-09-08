/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {

  private employees: CreateEmployeeDto[] = [{
    id: 1,
    name: "alberto",
    lastName: "costas",
    phoneNumber: "2130948"
  },
{
  id: 2,
    name: "jose",
    lastName: "perez",
    phoneNumber: "65787689"
}]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = this.employees.length + 1;
    this.employees.push(createEmployeeDto);
    return createEmployeeDto
  }

  findAll() {
    return this.employees;
  }

  findOne(id: number) {
   const employee = this.employees.filter((employee)=>employee.id === id);
   return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
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

  remove(id: number) {
    this.employees = this.employees.filter((employee)=>employee.id != id);
    return this.employees;
  }
}
