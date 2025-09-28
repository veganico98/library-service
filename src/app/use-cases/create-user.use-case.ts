import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "src/domain/entities/user.entity";
import type { IUserRepository } from "src/repositories/user.repository";

@Injectable()
export class CreateUserUseCase {
  constructor(
        @Inject('IUserRepository')
        private userRepo: IUserRepository,
    ) {}

    async execute(createUserDto: CreateUserDto){
        const user = new User(createUserDto);
        await user.password;
        await this.userRepo.create(user);
        return user;
    }
}