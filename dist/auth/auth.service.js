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
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    registerUser(createUserDto) {
        createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5);
        return this.userRepository.save(createUserDto);
    }
    async loginUser(loginUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                userEmail: loginUserDto.userEmail
            }
        });
        if (!user)
            throw new common_1.UnauthorizedException("You are not authorized");
        const match = await bcrypt.compare(loginUserDto.userPassword, user.userPassword);
        if (!match)
            throw new common_1.UnauthorizedException("No authorized");
        const payload = {
            userEmail: user.userEmail,
            userPassword: user.userPassword,
            userRoles: user.userRoles
        };
        const token = this.jwtService.sign(payload);
        return token;
    }
    async updateUser(userEmail, updateUserDto) {
        const newUserData = await this.userRepository.preload({
            userEmail,
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
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map