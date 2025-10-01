import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import type { ILoanRepository } from "../../domain/repository/loan.repository";
import type { IBookRepository } from "src/modules/book/domain/repository/book.repository";
import { Loan } from "../../domain/entities/loan.entity";

@Injectable()
export class CreateLoanUseCase {
  constructor(
    @Inject("ILoanRepository")
    private readonly loanRepo: ILoanRepository,

    @Inject("IBookRepository")      
    private readonly bookRepo: IBookRepository,
  ) {}

  async execute(bookId: number, borrowerId: number, dueAt?: Date): Promise<Loan> {
    const book = await this.bookRepo.findById(bookId);

    if (!book.available) {
      throw new BadRequestException("Este livro não está disponível para empréstimo");
    }

    const loan = this.loanRepo.create({ bookId, borrowerId, dueAt });
    const saved = await this.loanRepo.save(loan);

    book.available = false;
    await this.bookRepo.save(book);

    return saved;
  }
}
