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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const employee_entity_1 = require("../../employees/entities/employee.entity");
const manager_entity_1 = require("../../managers/entities/manager.entity");
const region_entity_1 = require("../../regions/entities/region.entity");
const typeorm_1 = require("typeorm");
let Location = class Location {
};
exports.Location = Location;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Location.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Location.prototype, "locationName", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Location.prototype, "locationAdress", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Location.prototype, "locationLatLng", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => manager_entity_1.Manager),
    (0, typeorm_1.JoinColumn)({
        name: "managerId"
    }),
    __metadata("design:type", manager_entity_1.Manager)
], Location.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => region_entity_1.Region, (region) => region.location),
    (0, typeorm_1.JoinColumn)({
        name: "regionId",
    }),
    __metadata("design:type", region_entity_1.Region)
], Location.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_entity_1.Employee, (employee) => employee.location),
    __metadata("design:type", employee_entity_1.Employee)
], Location.prototype, "employee", void 0);
exports.Location = Location = __decorate([
    (0, typeorm_1.Entity)()
], Location);
//# sourceMappingURL=location.entity.js.map