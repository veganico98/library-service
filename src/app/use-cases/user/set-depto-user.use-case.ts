import { Inject, Injectable } from "@nestjs/common";
import { UpdateUserDto } from "src/app/dto/user/update-user.dto";
import type { IUserRepository } from "src/repositories/user.repository";

@Injectable()
export class SetDeptoUserUseCase{
    constructor(
        @Inject('IUserRepository')
        private userRepo: IUserRepository,
    ) {}

    async execute(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.userRepo.findById(id);

        user.verifyUser(user);
        if (updateUserDto.depto) user.updateDepto(updateUserDto.depto);

        await this.userRepo.update(user);

        return user;
    }
}