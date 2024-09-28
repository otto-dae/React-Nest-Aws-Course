import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";

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
}
