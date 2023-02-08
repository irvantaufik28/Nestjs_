import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Book } from "src/books/entity/book.entity";
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.HOST,
    port: 5432,
    username: 'irvan',
    password: 'admin',
    database: 'book_api',
    entities: [Book],
    logging: true,
    synchronize: false

    
}