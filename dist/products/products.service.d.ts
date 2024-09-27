import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<CreateProductDto & Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    findByProvider(id: string): Promise<Product[]>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
