import { User } from "../entities/user.entity";
export declare class CreateUserDto extends User {
    userEmail: string;
    userPassword: string;
}
