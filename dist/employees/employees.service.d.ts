import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
export declare class EmployeesService {
    private employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<CreateEmployeeDto & Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
    remove(id: string): any;
}
