import { ArrayNotEmpty, IsArray, IsString, MaxLength } from "class-validator";
import { Location } from "../entities/location.entity";

export class CreateLocationDto extends Location{
    @IsString()
    @MaxLength(35)
    locationName: string;
    @IsString()
    @MaxLength(120)
    locationAdress: string;
    @IsArray()
    @ArrayNotEmpty()
    locationLatLng: number[];
}
