import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): CreateEmployeeDto;
    findAll(): CreateEmployeeDto[];
    findOne(id: string): CreateEmployeeDto;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): CreateEmployeeDto;
    remove(id: string): CreateEmployeeDto[];
}
