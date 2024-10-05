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
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const location_entity_1 = require("./entities/location.entity");
const typeorm_2 = require("@nestjs/typeorm");
let LocationsService = class LocationsService {
    constructor(locationRepository) {
        this.locationRepository = locationRepository;
    }
    create(createLocationDto) {
        return this.locationRepository.save(createLocationDto);
    }
    findAll() {
        return this.locationRepository.find();
    }
    findOne(id) {
        const location = this.locationRepository.findOneBy({
            locationId: id,
        });
        if (!location)
            throw new common_1.NotFoundException("Location not found ");
        return location;
    }
    async update(id, updateLocationDto) {
        const location = await this.locationRepository.preload({
            locationId: id,
            ...updateLocationDto
        });
        return location;
    }
    remove(id) {
        return this.locationRepository.delete({
            locationId: id,
        });
    }
};
exports.LocationsService = LocationsService;
exports.LocationsService = LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(location_entity_1.Location)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LocationsService);
//# sourceMappingURL=locations.service.js.map