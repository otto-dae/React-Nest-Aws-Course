"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const employee_entity_1 = require("../employees/entities/employee.entity");
const manager_entity_1 = require("../managers/entities/manager.entity");
let AuthService = class AuthService {
    constructor(userRepository, employeeRepository, managerRepository, jwtService) {
        this.userRepository = userRepository;
        this.employeeRepository = employeeRepository;
        this.managerRepository = managerRepository;
        this.jwtService = jwtService;
    }
    async registerEmployee(id, createUserDto) {
        const roles = createUserDto.userRoles;
        if (roles.includes("Admin") || roles.includes("Manager")) {
            throw new common_1.BadRequestException("Invalid");
        }
        createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5);
        const user = await this.userRepository.save(createUserDto);
        const employee = await this.employeeRepository.preload({
            employeeId: id,
        });
        employee.user = user;
        return this.employeeRepository.save(employee);
    }
    registerUser(createUserDto) {
        createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5);
        return this.userRepository.save(createUserDto);
    }
    async registerManager(id, createUserDto) {
        const roles = createUserDto.userRoles;
        if (roles.includes("Admin") || roles.includes("Employee")) {
            throw new common_1.BadRequestException("Invalid");
        }
        createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5);
        const user = await this.userRepository.save(createUserDto);
        const manager = await this.managerRepository.preload({
            managerId: id,
        });
        manager.user = user;
        return this.managerRepository.save(manager);
    }
    async loginUser(loginUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                userEmail: loginUserDto.userEmail,
            },
        });
        if (!user)
            throw new common_1.UnauthorizedException("No estas autorizado");
        const match = await bcrypt.compare(loginUserDto.userPassword, user.userPassword);
        if (!match)
            throw new common_1.UnauthorizedException("No estas autorizado");
        const payload = {
            userEmail: user.userEmail,
            userPassword: user.userPassword,
            userRoles: user.userRoles
        };
        const token = this.jwtService.sign(payload);
        return token;
    }
    async updateUser(id, updateUserDto) {
        updateUserDto.userPassword = bcrypt.hashSync(updateUserDto.userPassword, 5);
        const newUserData = await this.userRepository.preload({
            userId: id,
            ...updateUserDto
        });
        this.userRepository.save(newUserData);
        return newUserData;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __param(2, (0, typeorm_1.InjectRepository)(manager_entity_1.Manager)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map