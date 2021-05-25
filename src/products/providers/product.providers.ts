import { Connection, Repository } from 'typeorm';
import { ProductModel } from '../models';

export const ProductProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ProductModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
