import { Inject, Injectable } from "@nestjs/common";
import type { IUserRepository } from "../../repositories/user.repository";

@Injectable()
export class FindAllUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepo: IUserRepository,
  ) {}

  execute() {
    return this.userRepo.findAll();
  }
}
