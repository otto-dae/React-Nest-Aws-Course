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
exports.CreateManagerDto = void 0;
const class_validator_1 = require("class-validator");
const manager_entity_1 = require("../entities/manager.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
class CreateManagerDto extends manager_entity_1.Manager {
}
exports.CreateManagerDto = CreateManagerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(45),
    __metadata("design:type", String)
], CreateManagerDto.prototype, "managerFullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateManagerDto.prototype, "managerEmail", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateManagerDto.prototype, "managerSalary", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(16),
    __metadata("design:type", String)
], CreateManagerDto.prototype, "managerPhoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", location_entity_1.Location)
], CreateManagerDto.prototype, "location", void 0);
//# sourceMappingURL=create-manager.dto.js.map