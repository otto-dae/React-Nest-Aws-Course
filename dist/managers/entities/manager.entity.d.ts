import { User } from "src/auth/entities/user.entity";
import { Location } from "src/locations/entities/location.entity";
export declare class Manager {
    managerId: string;
    managerFullName: string;
    managerSalary: number;
    managerEmail: string;
    managerPhoneNumber: string;
    location: Location | string;
    user: User;
}
