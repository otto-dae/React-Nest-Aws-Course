import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { Response } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerManager(role: string, createUserDto: CreateUserDto, id: string): Promise<import("../employees/entities/employee.entity").Employee> | Promise<import("../managers/entities/manager.entity").Manager>;
    signup(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    login(loginUserDto: LoginUserDto, response: Response, cookies: any): Promise<void>;
    updateUser(userEmail: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
}
