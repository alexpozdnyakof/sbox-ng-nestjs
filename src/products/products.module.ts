import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from './models/productModel.entity';
import { ProductProviders } from './providers/product.providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductModel]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
