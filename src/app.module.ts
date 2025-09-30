import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/users/domain/entities/user.entity';
import { UserModule } from './modules/users/infrastructure/user.module';
import { BookModule } from './modules/book/infrastructure/book.module';
import { Book } from './modules/book/domain/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'root',
      database: process.env.DB_NAME || 'library_service_db',
      entities: [User, Book],
      synchronize: true,
    }),
    UserModule, BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
