import { IsEmail, IsNumber, IsObject, isObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";
import { Location } from "src/locations/entities/location.entity";

export class CreateManagerDto extends Manager{
    @IsString()
    @MaxLength(45)
    managerFullName: string;
    @IsString()
    @IsEmail()
    mangaerEmail: string;
    @IsNumber()
    managerFullSalary: number;
    @IsString()
    @MaxLength(16)
    managerPhoneNumber: string;
    @IsNumber()
    @IsOptional()
    location: Location;
}
