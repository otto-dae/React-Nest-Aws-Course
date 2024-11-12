import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(createAuthDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    signUser(loginUserDto: LoginUserDto, response: Response, cookies: any): Promise<void>;
    updateUser(userEmail: string, updateUserdto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
}
