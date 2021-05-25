import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { products } from './data';
import { ProductsService } from './products.service';
import { ProductModel } from './models';

@Controller('products')
export class ProductsController {

  @Get()
  async findAll(@Res() res, @Query() query) {
    const page = query.page ? Number(query.page) : 1;
    const limit = query.limit || 10;
    const orderBy = query.orderBy || 'id';
    const products = await this.productsService.paginate({
      limit,
      page
    }, orderBy)

    return res.status(HttpStatus.OK).json(products);
  }

  @Post()
  async addProduct(@Res() res, @Body() product: ProductModel) {
    const newProduct = await this.productsService.create(product);
    return res.status(HttpStatus.CREATED).json(product);
  }

  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productsService.findOne(productID);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(product);
  }

  @Put()
  async updateProduct(@Res() res, @Body() product: ProductModel) {
    const newProduct = await this.productsService.update(
      product
    );
    return res.status(HttpStatus.OK).json(product);
  }

  @Delete('/:productID')
  async deleteProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productsService.delete(productID);
    if (!product) throw new NotFoundException('product does not exist');
    return res.status(HttpStatus.OK).json(product);
  }

  constructor(
    private productsService: ProductsService,
  ) {}
}
