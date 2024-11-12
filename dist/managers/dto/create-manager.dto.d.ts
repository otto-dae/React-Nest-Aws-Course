import { Manager } from "../entities/manager.entity";
import { Location } from "src/locations/entities/location.entity";
export declare class CreateManagerDto extends Manager {
    managerFullName: string;
    mangaerEmail: string;
    managerFullSalary: number;
    managerPhoneNumber: string;
    location: Location;
}
