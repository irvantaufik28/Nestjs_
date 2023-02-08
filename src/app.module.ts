import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BooksModule } from './books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BooksModule],
  })
export class AppModule {}
