import { Employee } from "../entities/employee.entity";
import { Location } from "src/locations/entities/location.entity";
export declare class CreateEmployeeDto extends Employee {
    employeeName: string;
    employeeLastName: string;
    employeePhoneNumber: string;
    employeeEmail: string;
    location: Location | string;
    emplyeePhoto: string;
}
