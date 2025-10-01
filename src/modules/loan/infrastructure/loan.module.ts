import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoanController } from "./controllers/loan.controller";
import { Loan } from "../domain/entities/loan.entity";
import { LoanTypeOrmRepository } from "../domain/repository/loan.repository";
import { CreateLoanUseCase } from "../aplications/use-cases/create-loan.use-cases";
import { FindAllLoansUseCase } from "../aplications/use-cases/find-all-loands.use-case";
import { FindByIdLoanUseCase } from "../aplications/use-cases/find-by-id-loan.use-case";
import { ReturnLoanUseCase } from "../aplications/use-cases/return-loan.use-case";
import { BookModule } from "src/modules/book/infrastructure/book.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Loan]),
    BookModule, 
  ],
  controllers: [LoanController],
  providers: [
    {
      provide: "ILoanRepository",
      useClass: LoanTypeOrmRepository,
    },
    CreateLoanUseCase,
    FindAllLoansUseCase,
    FindByIdLoanUseCase,
    ReturnLoanUseCase,
  ],
  exports: ["ILoanRepository"],
})
export class LoanModule {}
