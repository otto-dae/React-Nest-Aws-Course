import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
export declare class AuthService {
    private userRepository;
    private employeeRepository;
    private managerRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, employeeRepository: Repository<Employee>, managerRepository: Repository<Manager>, jwtService: JwtService);
    registerEmployee(id: string, createUserDto: CreateUserDto): Promise<Employee>;
    registerUser(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    registerManager(id: string, createUserDto: CreateUserDto): Promise<Manager>;
    loginUser(loginUserDto: LoginUserDto): Promise<string>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>;
}
