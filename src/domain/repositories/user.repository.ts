import { User } from "../entities/user.entity";

export interface IUserRepository {
  create(data: Partial<User>): User;
  save(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  remove(id: number): Promise<void>;
}
