import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    registerUser(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    loginUser(loginUserDto: LoginUserDto): Promise<string>;
    updateUser(userEmail: string, updateUserDto: UpdateUserDto): Promise<User>;
}
