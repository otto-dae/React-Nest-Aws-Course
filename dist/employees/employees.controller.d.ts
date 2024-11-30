import { EmployeesService } from "./employees.service";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "./entities/employee.entity";
import { AwsService } from "src/aws/aws.service";
export declare class EmployeesController {
    private readonly employeesService;
    private readonly awsService;
    constructor(employeesService: EmployeesService, awsService: AwsService);
    create(createEmployeeDto: CreateEmployeeDto, file: Express.Multer.File): Promise<CreateEmployeeDto & Employee>;
    uploadPhoto(id: string, file: Express.Multer.File): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    findAllLocation(id: string): Promise<Employee[]>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto, file: Express.Multer.File): Promise<Employee>;
    remove(id: string): {
        message: string;
    };
}
