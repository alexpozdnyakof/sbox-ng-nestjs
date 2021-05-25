import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products';
import { AppLogger } from './utils/logger.service';

import { FilesModule } from './files';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from './products/models';

@Module({
  imports: [
    FilesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      entities: [ProductModel],
      synchronize: false,
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppLogger],
})
export class AppModule {}

