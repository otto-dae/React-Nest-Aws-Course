import { Location } from "../entities/location.entity";
import { Region } from "src/regions/entities/region.entity";
export declare class CreateLocationDto extends Location {
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    region: Region;
    manager: string;
}
