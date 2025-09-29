import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/app/dto/user/create-user.dto";
import { User } from "src/domain/entities/user.entity";
import type { IUserRepository } from "src/repositories/user.repository";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject("IUserRepository")
    private readonly userRepo: IUserRepository,
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(createUserDto);

    const savedUser = await this.userRepo.save(user);

    console.log("🔥 Usuário salvo:", savedUser);

    return savedUser;
  }
}