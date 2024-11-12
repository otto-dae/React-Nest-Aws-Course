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
exports.RegionsController = void 0;
const common_1 = require("@nestjs/common");
const regions_service_1 = require("./regions.service");
const create_region_dto_1 = require("./dto/create-region.dto");
const update_region_dto_1 = require("./dto/update-region.dto");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const roles_constants_1 = require("../auth/constants/roles.constants");
const api_decorators_1 = require("../auth/decorators/api.decorators");
const swagger_1 = require("@nestjs/swagger");
let RegionsController = class RegionsController {
    constructor(regionsService) {
        this.regionsService = regionsService;
    }
    create(createRegionDto) {
        return this.regionsService.create(createRegionDto);
    }
    findAll() {
        return this.regionsService.findAll();
    }
    findOne(id) {
        return this.regionsService.findOne(+id);
    }
    update(id, updateRegionDto) {
        return this.regionsService.update(+id, updateRegionDto);
    }
    remove(id) {
        return this.regionsService.remove(+id);
    }
};
exports.RegionsController = RegionsController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_region_dto_1.CreateRegionDto]),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "create", null);
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.EMPLOYEE, roles_constants_1.ROLES.MANAGER),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "findAll", null);
__decorate([
    (0, auth_decorator_1.Auth)(roles_constants_1.ROLES.EMPLOYEE, roles_constants_1.ROLES.MANAGER),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_region_dto_1.UpdateRegionDto]),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "update", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegionsController.prototype, "remove", null);
exports.RegionsController = RegionsController = __decorate([
    (0, api_decorators_1.ApiAuth)(),
    (0, swagger_1.ApiTags)('Regions'),
    (0, common_1.Controller)('regions'),
    __metadata("design:paramtypes", [regions_service_1.RegionsService])
], RegionsController);
//# sourceMappingURL=regions.controller.js.map