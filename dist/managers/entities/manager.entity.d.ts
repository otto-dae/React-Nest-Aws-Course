import { User } from "src/auth/entities/user.entity";
import { Location } from "src/locations/entities/location.entity";
export declare class Manager {
    managerId: string;
    managerFullName: string;
    managerFullSalary: number;
    mangaerEmail: string;
    managerPhoneNumber: string;
    location: Location | string;
    user: User;
}
