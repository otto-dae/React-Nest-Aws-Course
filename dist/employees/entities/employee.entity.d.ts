import { User } from "src/auth/entities/user.entity";
import { Location } from "src/locations/entities/location.entity";
export declare class Employee {
    employeeId: string;
    employeeName: string;
    employeeLastName: string;
    employeePhoneNumber: string;
    employeeEmail: string;
    employeePhotoUrl: string;
    location: Location;
    user: User;
}
