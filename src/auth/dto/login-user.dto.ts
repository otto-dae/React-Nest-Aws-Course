import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MaxLength, MinLength, minLength } from "class-validator";

export class LoginUserDto{

    @ApiProperty({
        default: "otto@gmai.com"
    })
    @IsString()
    @IsEmail()
    userEmail: string;
    
    @ApiProperty({
        default: "pasjd32308eru"
    })
    @IsString()
    @MinLength(8)
    userPassword: string;
}