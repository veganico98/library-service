import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppDataSource } from "./data-source"; // importa o que você já tem
import { LoanModule } from "./modules/loan/infrastructure/loan.module";
import { UserModule } from "./modules/users/infrastructure/user.module";
import { BookModule } from "./modules/book/infrastructure/book.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options, // 👈 reaproveita a config do DataSource
      autoLoadEntities: true,   // 👈 garante que as entidades sejam carregadas
    }),
    LoanModule,
    UserModule,
    BookModule,
  ],
})
export class AppModule {}
