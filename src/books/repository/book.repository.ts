import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { Book } from '../entity/book.entity';
import { FilterBookDto } from '../dto/filter-books.dto';

@Injectable()
export class BookRepository extends Repository<Book> {
  constructor(private dataSoucre: DataSource) {
    super(Book, dataSoucre.createEntityManager());
  }

  async getBooks(filter: FilterBookDto): Promise<Book[]> {
    const { title, author, category, min_year, max_year } = filter;

    const query = this.createQueryBuilder('book');

    if (title) {
      query.andWhere('lower(book.title) LIKE :title', {
        title: `%${title.toLocaleLowerCase()}%`,
      });
    }
    if (author) {
      query.andWhere('lower(book.author) LIKE :author', {
        author: `%${author.toLocaleLowerCase()}%`,
      });
    }
    if (category) {
      query.andWhere('lower(book.category) LIKE :category', {
        category: `%${category.toLocaleLowerCase()}`,
      });
    }
    if (min_year) {
      query.andWhere('book.year >= :min_year', { min_year });
    }
    if (max_year) {
      query.andWhere('book.yaer <= :max_yaer', { max_year });
    }
    return await query.getRawMany();
  }

  async getBookById(id: string): Promise<Book> {
    const result = await this.createQueryBuilder('book')
      .where('Book.id = id', { id })
      .getOne();
    return result;
  }
//   async createBook()
}
