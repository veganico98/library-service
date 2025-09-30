import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "../domain/entities/book.entity";
import { BookController } from "./controllers/book.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers: [BookController],
    providers: []  
})

export class BookModule {}