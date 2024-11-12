import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginUserDto{

    @ApiProperty({
        default: "UserExample@gmail.com"
    })
    @IsString()
    @IsEmail()
    userEmail: string;
    
    @ApiProperty({
        default: "p4ssw0rd"
    })
    @IsString()
    @MinLength(8)
    userPassword: string;
}