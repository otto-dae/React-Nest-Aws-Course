import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesService {
    private employees;
    create(createEmployeeDto: CreateEmployeeDto): CreateEmployeeDto;
    findAll(): CreateEmployeeDto[];
    findOne(id: string): CreateEmployeeDto;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): CreateEmployeeDto;
    remove(id: string): CreateEmployeeDto[];
}
