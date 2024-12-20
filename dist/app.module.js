"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employees_module_1 = require("./employees/employees.module");
const products_module_1 = require("./products/products.module");
const config_1 = require("@nestjs/config");
const providers_module_1 = require("./providers/providers.module");
const managers_module_1 = require("./managers/managers.module");
const locations_module_1 = require("./locations/locations.module");
const regions_module_1 = require("./regions/regions.module");
const auth_module_1 = require("./auth/auth.module");
const aws_module_1 = require("./aws/aws.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: process.env.host,
                port: +process.env.port,
                username: "postgres",
                password: 'TheBestPassword',
                database: process.env.name,
                entities: [],
                autoLoadEntities: true,
                synchronize: true,
            }),
            employees_module_1.EmployeesModule, products_module_1.ProductsModule, providers_module_1.ProvidersModule, managers_module_1.ManagersModule, locations_module_1.LocationsModule, regions_module_1.RegionsModule, auth_module_1.AuthModule, aws_module_1.AwsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map