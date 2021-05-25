import { Inject, Injectable, Optional } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './types';
import { CreateProductDTO } from './dto';
import { join } from 'path';
import { ProductModel } from './models';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProductsService {

  async findAll(orderBy?: string, page = 1, perPage = 10): Promise<ProductModel[]> {
    const order = {}
    order[orderBy] = "ASC"
    const skip = perPage * page - perPage;
    const take = perPage;
    console.log(order);

    return await this.productRepository.find({order, skip, take});
  }

  async paginate(options: IPaginationOptions, orderBy?: string): Promise<Pagination<ProductModel>> {
    const queryBuilder = this.productRepository.createQueryBuilder('c');
    if(orderBy) {
      queryBuilder.orderBy(`c.${orderBy}`, 'ASC');
    }
    return paginate<ProductModel>(queryBuilder, options);
  }

  async create(product: ProductModel): Promise<ProductModel> {
    return await this.productRepository.save(product);
  }

  async findOne(id): Promise<ProductModel> {
    return await this.productRepository.findOne({id});
  }

  async update(product: ProductModel): Promise<UpdateResult> {
    return await this.productRepository.update(product.id, product);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }

  constructor(
    @InjectRepository(ProductModel)
    private productRepository: Repository<ProductModel>
  ) {}

}
