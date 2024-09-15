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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
        this.products = [
            {
                productId: (0, uuid_1.v4)(),
                productName: "Sabritas",
                price: 29,
                countSeal: 3,
                provider: (0, uuid_1.v4)()
            },
            {
                productId: (0, uuid_1.v4)(),
                productName: "Coca-Cola",
                price: 40,
                countSeal: 2,
                provider: (0, uuid_1.v4)()
            },
            {
                productId: (0, uuid_1.v4)(),
                productName: "Agua Ciel",
                price: 15,
                countSeal: 2,
                provider: (0, uuid_1.v4)()
            }
        ];
    }
    create(createProductDto) {
        const product = this.productRepository.save(createProductDto);
        return product;
    }
    findAll() {
        return this.productRepository.find();
    }
    findOne(id) {
        const product = this.productRepository.findOneBy({
            productId: id,
        });
        return product;
    }
    findByProvider(id) {
        const productsFound = this.products.filter((product) => product.provider === id);
        if (productsFound.length == 0)
            throw new common_1.NotFoundException();
        return productsFound;
    }
    async update(id, updateProductDto) {
        const producToUpdate = await this.productRepository.preload({
            productId: id,
            ...updateProductDto
        });
        if (!producToUpdate)
            throw new common_1.NotFoundException();
        this.productRepository.save(producToUpdate);
        return producToUpdate;
    }
    async remove(id) {
        this.findOne(id);
        this.productRepository.delete({
            productId: id,
        });
        return {
            message: `objeto con ${id} eliminado`
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map