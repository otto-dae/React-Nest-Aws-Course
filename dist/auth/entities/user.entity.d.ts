import { Manager } from "src/managers/entities/manager.entity";
import { Employee } from "src/employees/entities/employee.entity";
export declare class User {
    userId: string;
    userEmail: string;
    userPassword: string;
    userRoles: string[];
    manager: Manager;
    employee: Employee;
}
