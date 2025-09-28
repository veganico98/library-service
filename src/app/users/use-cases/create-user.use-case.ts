import { Inject, Injectable } from '@nestjs/common';
import type { IUserRepository } from 'src/repositories/user.repository';
import { CreateUserDto } from '../dto/CreataUserDto';
import { User } from '@prisma/client';


@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private userRepo: IUserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    return this.userRepo.create({
      name: dto.name,
      email: dto.email,
      password: dto.password,
      role: dto.role,
    });
  }
}