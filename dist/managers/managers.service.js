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
exports.ManagersService = void 0;
const common_1 = require("@nestjs/common");
const update_manager_dto_1 = require("./dto/update-manager.dto");
const manager_entity_1 = require("./entities/manager.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ManagersService = class ManagersService {
    constructor(managerRepository) {
        this.managerRepository = managerRepository;
    }
    create(createRegionDto) {
        return this.managerRepository.save(createRegionDto);
    }
    findAll() {
        return this.managerRepository.find();
    }
    findOne(id) {
        const region = this.managerRepository.findBy({
            managerId: id
        });
        if (!region)
            throw new common_1.NotFoundException(" womp womp");
    }
    async update(id, updateRegionDto) {
        const regionToUpdate = await this.managerRepository.preload({
            managerId: id,
            ...updateRegionDto
        });
        if (!regionToUpdate)
            throw new common_1.NotFoundException("Region to update no found");
        return this.managerRepository.save(regionToUpdate);
    }
    remove(id) {
        return this.managerRepository.delete({
            managerId: id,
            ...update_manager_dto_1.UpdateManagerDto
        });
    }
};
exports.ManagersService = ManagersService;
exports.ManagersService = ManagersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(manager_entity_1.Manager)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ManagersService);
//# sourceMappingURL=managers.service.js.map