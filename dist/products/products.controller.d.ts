import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): CreateProductDto;
    findAll(): CreateProductDto[];
    findOne(id: string): CreateProductDto;
    findByProvider(id: string): CreateProductDto[];
    update(id: string, updateProductDto: UpdateProductDto): CreateProductDto;
    remove(id: string): CreateProductDto[];
}
