import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book } from "./modules/book/domain/entities/book.entity";
import { User } from "./modules/users/domain/entities/user.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: process.env.DB_NAME || "library_service_db",
  entities: [User, Book],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
});
