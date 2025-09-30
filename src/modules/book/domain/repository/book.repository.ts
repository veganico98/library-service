import { Book } from "../entities/book.entity";

export interface IBookRepository {
    create(data: Partial<Book>): Book;       
    save(book: Book): Promise<Book>;          
    update(book: Book): Promise<Book>;       
    remove(id: number): Promise<void>;        
    findAll(): Promise<Book[]>;
    findById(id: number): Promise<Book>; 
}