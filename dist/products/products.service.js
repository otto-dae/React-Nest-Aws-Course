"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let ProductsService = class ProductsService {
    constructor() {
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
        createProductDto.productId = (0, uuid_1.v4)();
        this.products.push(createProductDto);
        return createProductDto;
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const productFound = this.products.filter((product) => product.productId === id)[0];
        if (!productFound)
            throw new common_1.NotFoundException;
        return productFound;
    }
    findByProvider(id) {
        const productsFound = this.products.filter((product) => product.provider === id);
        if (!productsFound)
            throw new common_1.NotFoundException;
        return productsFound;
    }
    update(id, updateProductDto) {
        let product = this.findOne(id);
        product = {
            ...product,
            ...updateProductDto
        };
        return product;
    }
    remove(id) {
        const { productId } = this.findOne(id);
        this.products = this.products.filter((product) => product.productId !== productId);
        return this.products;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map