import { Manager } from "../entities/manager.entity";
import { Location } from "src/locations/entities/location.entity";
export declare class CreateManagerDto extends Manager {
    managerFullName: string;
    managerEmail: string;
    managerSalary: number;
    managerPhoneNumber: string;
    location: Location;
}
