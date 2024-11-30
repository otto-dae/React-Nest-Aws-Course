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
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const employees_service_1 = require("./employees.service");
const create_employee_dto_1 = require("./dto/create-employee.dto");
const update_employee_dto_1 = require("./dto/update-employee.dto");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const roles_constants_1 = require("../auth/constants/roles.constants");
const swagger_1 = require("@nestjs/swagger");
const aws_service_1 = require("../aws/aws.service");
const api_decorators_1 = require("../auth/decorators/api.decorators");
let EmployeesController = class EmployeesController {
    constructor(employeesService, awsService) {
        this.employeesService = employeesService;
        this.awsService = awsService;
    }
    async create(createEmployeeDto, file) {
        if (!file) {
            return this.employeesService.create(createEmployeeDto);
        }
        else {
            const photoUrl = await this.awsService.uploadFile(file);
            createEmployeeDto.employeePhoto = photoUrl;
            return this.employeesService.create(createEmployeeDto);
        }
    }
    async uploadPhoto(id, file) {
        const response = await this.awsService.uploadFile(file);
        return this.employeesService.update(id, {
            emplyeePhoto: response,
        });
    }
    findAll() {
        return this.employeesService.findAll();
    }
    findOne(id) {
        return this.employeesService.findOne(id);
    }
    findAllLocation(id) {
        return this.employeesService.findByLocation(+id);
    }
    async update(id, updateEmployeeDto, file) {
        if (file.originalname == "undefined") {
            return this.employeesService.update(id, updateEmployeeDto);
        }
        else {
            const fileUrl = await this.awsService.uploadFile(file);
            updateEmployeeDto.employeePhoto = fileUrl;
            return this.employeesService.update(id, updateEmployeeDto);
        }
    }
    remove(id) {
        return this.employeesService.remove(id);
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.MANAGER),
    (0, swagger_1.ApiResponse)({
        status: 201,
        example: {
            employeeId: "UUID",
            employeeName: "Otto",
            employeeEmail: "Otto@gmail.com",
            employeeLastName: "De Acha",
            employeePhoneNumber: "4421112233",
        },
    }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("employeePhoto")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "create", null);
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.MANAGER, roles_constants_1.ROLES.EMPLOYEE),
    (0, common_1.Post)(":id/upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "uploadPhoto", null);
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.MANAGER),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findAll", null);
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.MANAGER),
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseUUIDPipe({ version: "4" }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.MANAGER),
    (0, common_1.Get)("/location/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findAllLocation", null);
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.EMPLOYEE),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("employeePhoto")),
    (0, common_1.Patch)("/:id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_dto_1.UpdateEmployeeDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "update", null);
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.MANAGER),
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseUUIDPipe({ version: "4" }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "remove", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, api_decorators_1.ApiAuth)(),
    (0, swagger_1.ApiTags)("Employees"),
    (0, common_1.Controller)("employees"),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService,
        aws_service_1.AwsService])
], EmployeesController);
//# sourceMappingURL=employees.controller.js.map