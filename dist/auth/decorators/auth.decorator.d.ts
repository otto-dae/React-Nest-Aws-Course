import { ROLES } from "../constants/roles.constants";
export declare const Auth: (...roles: ROLES[]) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
