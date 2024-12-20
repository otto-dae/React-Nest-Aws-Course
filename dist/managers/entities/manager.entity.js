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
exports.Manager = void 0;
const user_entity_1 = require("../../auth/entities/user.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
const typeorm_1 = require("typeorm");
let Manager = class Manager {
};
exports.Manager = Manager;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Manager.prototype, "managerId", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Manager.prototype, "managerFullName", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Manager.prototype, "managerSalary", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        unique: true
    }),
    __metadata("design:type", String)
], Manager.prototype, "managerEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Manager.prototype, "managerPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => location_entity_1.Location),
    (0, typeorm_1.JoinColumn)({
        name: "locationId"
    }),
    __metadata("design:type", Object)
], Manager.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({
        name: "UserId"
    }),
    __metadata("design:type", user_entity_1.User)
], Manager.prototype, "user", void 0);
exports.Manager = Manager = __decorate([
    (0, typeorm_1.Entity)()
], Manager);
//# sourceMappingURL=manager.entity.js.map