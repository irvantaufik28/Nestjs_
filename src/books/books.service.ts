import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { FilterBookDto } from './dto/filter-books.dto';
import { BookRepository } from './repository/book.repository';
import { Book } from './entity/book.entity';



@Injectable()
export class BooksService {
  constructor(
    private bookRepository: BookRepository,
    ) {}

  async getBooks(filter: FilterBookDto): Promise<Book[]> {
    const { title, author, category, min_year, max_year } = filter;

    const books = this.bookRepository.getBooks(filter);
    return books;
  }

  async getBookById(id: string): Promise<Book> {
    const book = await this.bookRepository.getBookById(id);
    if (!book) {
        throw new NotFoundException(`Book with id ${id} is not found`); 
    }
    return book;
  }


}
