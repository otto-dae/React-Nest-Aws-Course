import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<CreateEmployeeDto & Employee>;
    uploadPhoto(file: Express.Multer.File): string;
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    findAllLocation(id: string): Promise<Employee[]>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
    remove(id: string): {
        message: string;
    };
}
