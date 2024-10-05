import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Provider } from 'src/providers/entities/provider.entity';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
  private productRepository: Repository<Product>){}

  create(createProductDto: CreateProductDto) {
   const product = this.productRepository.save(createProductDto);
    return product;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    const product = this.productRepository.findOneBy({
      productId: id,
    })
    if(!product) throw new NotFoundException()
    return product
  }

  findByProvider(id: string){
    return this.productRepository.findBy(
      {
        provider: {
          providerId: id,
        }
      }
    )
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const producToUpdate = await this.productRepository.preload({
    productId: id,
    ...updateProductDto
    })
    if(!producToUpdate) throw new NotFoundException();
    this.productRepository.save(producToUpdate);
    return producToUpdate;
  }

  async remove(id: string) {
    this.findOne(id);
    this.productRepository.delete({
      productId: id,
    })
    return {
      message: `objeto con ${id} eliminado`
    }
  }
}
