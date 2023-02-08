import { Controller, Get, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { FilterBookDto} from './dto/filter-books.dto';
import { Book } from './entity/book.entity';
@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Get()
    async getBooks(@Query() filter: FilterBookDto): Promise<Book[]> {
        return this.booksService.getBooks(filter)
    }
    @Get('/:id')
    async getBookById(@Param('id') id: string): Promise<Book> {
        const result = await this.booksService.getBookById(id)
        return result;
    }
}
