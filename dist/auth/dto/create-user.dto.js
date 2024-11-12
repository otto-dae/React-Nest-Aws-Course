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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../entities/user.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto extends user_entity_1.User {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        default: "user@gmail.com"
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: "u987423jas"
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: "Employee"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(["Admin", "Employee", "Manager"]),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "userRoles", void 0);
//# sourceMappingURL=create-user.dto.js.map