import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../../domain/entities/user.entity";
import type { IUserRepository } from "../../repositories/user.repository";

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