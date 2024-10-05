import { IsEmail, IsString, MaxLength, MinLength, minLength } from "class-validator";

export class LoginUserDto{
    @IsString()
    @IsEmail()
    userEmail: string;
    @IsString()
    @MinLength(8)
    userPassword: string;
}