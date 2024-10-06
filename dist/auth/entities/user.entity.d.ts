import { Manager } from "src/managers/entities/manager.entity";
export declare class User {
    userId: string;
    userEmail: string;
    userPassword: string;
    userRoles: string[];
    manager: Manager;
}
