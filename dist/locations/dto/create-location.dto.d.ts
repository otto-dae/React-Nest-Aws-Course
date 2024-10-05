import { Location } from "../entities/location.entity";
export declare class CreateLocationDto extends Location {
    locationName: string;
    locationAdress: string;
    locationLatLng: number[];
}
