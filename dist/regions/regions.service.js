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
exports.RegionsService = void 0;
const common_1 = require("@nestjs/common");
const update_region_dto_1 = require("./dto/update-region.dto");
const typeorm_1 = require("@nestjs/typeorm");
const region_entity_1 = require("./entities/region.entity");
const typeorm_2 = require("typeorm");
let RegionsService = class RegionsService {
    constructor(regionRepository) {
        this.regionRepository = regionRepository;
    }
    create(createRegionDto) {
        return this.regionRepository.save(createRegionDto);
    }
    findAll() {
        return this.regionRepository.find();
    }
    findOne(id) {
        const region = this.regionRepository.findBy({
            regionId: id
        });
        if (!region)
            throw new common_1.NotFoundException(" womp womp");
    }
    async update(id, updateRegionDto) {
        const regionToUpdate = await this.regionRepository.preload({
            regionId: id,
            ...updateRegionDto
        });
        if (!regionToUpdate)
            throw new common_1.NotFoundException("Region to update no found");
        return this.regionRepository.save(regionToUpdate);
    }
    remove(id) {
        return this.regionRepository.delete({
            regionId: id,
            ...update_region_dto_1.UpdateRegionDto
        });
    }
};
exports.RegionsService = RegionsService;
exports.RegionsService = RegionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(region_entity_1.Region)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegionsService);
//# sourceMappingURL=regions.service.js.map