import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(createAuthDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    signUser(loginUserDto: LoginUserDto): Promise<string>;
}
