import { Inject, Injectable } from "@nestjs/common";
import type { IUserRepository } from "../../repositories/user.repository";

@Injectable()
export class FindByIdUserUseCase{
    constructor(
        @Inject('IUserRepository')
        private userRepo: IUserRepository,
    ) {}

    execute(id: number){
        return this.userRepo.findById(id);
    }
}