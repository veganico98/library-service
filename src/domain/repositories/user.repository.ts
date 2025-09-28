import { User } from "../entities/user.entity";

export interface IUserRepository {
  create(data: Partial<User>): User;
  save(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  remove(id: string): Promise<void>;
}
