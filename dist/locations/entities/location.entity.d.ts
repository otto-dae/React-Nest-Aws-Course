import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
export declare class Location {
    locationId: number;
    locationName: string;
    locationAdress: string;
    locationLatLng: number[];
    manager: Manager;
    region: Region;
    employee: Employee;
}
