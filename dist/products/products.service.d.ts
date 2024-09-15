import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private products;
    create(createProductDto: CreateProductDto): CreateProductDto;
    findAll(): CreateProductDto[];
    findOne(id: string): CreateProductDto;
    findByProvider(id: string): CreateProductDto[];
    update(id: string, updateProductDto: UpdateProductDto): CreateProductDto;
    remove(id: string): CreateProductDto[];
}
