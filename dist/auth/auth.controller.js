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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_constants_1 = require("./constants/jwt.constants");
const cookies_decorator_1 = require("./decorators/cookies.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registerManager(role, createUserDto, id) {
        if (role === "manager") {
            return this.authService.registerManager(id, createUserDto);
        }
        else if (role === "employee") {
            return this.authService.registerEmployee(id, createUserDto);
        }
        throw new common_1.BadRequestException("Rol inválido");
    }
    signup(createUserDto) {
        return this.authService.registerUser(createUserDto);
    }
    async login(loginUserDto, response, cookies) {
        const token = await this.authService.loginUser(loginUserDto);
        let expireDate = new Date();
        expireDate.setDate(expireDate.getDay() + 7);
        response.cookie(jwt_constants_1.TOKEN_NAME, token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            expires: expireDate,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });
        return;
    }
    updateUser(userEmail, updateUserDto) {
        return this.authService.updateUser(userEmail, updateUserDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("register/:id"),
    __param(0, (0, common_1.Query)("role")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerManager", null);
__decorate([
    (0, common_1.Post)("signup"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, cookies_decorator_1.Cookies)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Patch)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateUser", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map