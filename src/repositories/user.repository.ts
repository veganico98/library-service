import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/entities/user.entity";
import { Repository } from "typeorm";

export interface IUserRepository {
    create(data: Partial<User>): User;       
    save(user: User): Promise<User>;          
    update(user: User): Promise<User>;       
    remove(id: string): Promise<void>;        
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
}

@Injectable()
export class UserTypeOrmRepository implements IUserRepository {
    constructor(
        @InjectRepository(User)
        private readonly typeOrmRepo: Repository<User>,
    ) {}

    create(data: Partial<User>): User {
        return this.typeOrmRepo.create(data);
    }

    async save(user: User): Promise<User> {
  console.log("💾 Chamando save no repo:", user);
  const result = await this.typeOrmRepo.save(user);
  console.log("✅ Resultado do save:", result);
  return result;
}

    async update(user: User): Promise<User> {
        await this.typeOrmRepo.update(user.id, user);
        return this.findById(user.id);
    }

    async remove(id: string): Promise<void> {
        await this.typeOrmRepo.delete(id);
    }

    findAll(): Promise<User[]> {
        return this.typeOrmRepo.find();
    }

    findById(id: string): Promise<User> {
        return this.typeOrmRepo.findOneOrFail({ where: { id } });
    }
}
