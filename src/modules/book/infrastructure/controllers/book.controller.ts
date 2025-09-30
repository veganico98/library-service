import { Controller, Inject } from "@nestjs/common";
import { FindAllBookUseCase } from "../../aplications/use-cases/find-all-book.use-case";
import { FindByIdBookUseCase } from "../../aplications/use-cases/find-by-id.use-case";
import { CreateBookDto } from "./dto/create-book.dto";
import { CreateBookUseCase } from "../../aplications/use-cases/create-book.use-cases";
import { RemoveBookUseCase } from "../../aplications/use-cases/remove-book.use-case";

@Controller('book')
    export class BookController{
        @Inject(FindAllBookUseCase)
        private readonly findAllBookUseCase: FindAllBookUseCase;

        @Inject(FindByIdBookUseCase)
        private readonly findByIdBookUseCase: FindByIdBookUseCase;

        @Inject(CreateBookUseCase)
        private readonly createBookUseCase: CreateBookUseCase;

        @Inject(RemoveBookUseCase)
        private readonly removeBookUseCase: RemoveBookUseCase;

        
    }