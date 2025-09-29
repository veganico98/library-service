import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/domain/entities/user.entity";
import { UserController } from "../controllers/user.controller";
import { UserService } from "src/domain/services/user.service";
import { CreateUserUseCase } from "src/app/use-cases/user/create-user.use-case";
import { FindAllUserUseCase } from "src/app/use-cases/user/find-all-user.use-case";
import { FindByIdUserUseCase } from "src/app/use-cases/user/find-by-id-user.use-case";
import { RemoveUserUseCase } from "src/app/use-cases/user/remove-ser.use-case";
import { SetDeptoUserUseCase } from "src/app/use-cases/user/set-depto-user.use-case";
import { UpdateUserUseCase } from "src/app/use-cases/user/update-user.use-case";
import { UserTypeOrmRepository } from "src/repositories/user.repository";


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [
        UserService,
        CreateUserUseCase,
        FindAllUserUseCase,
        FindByIdUserUseCase,
        RemoveUserUseCase,
        SetDeptoUserUseCase,
        UpdateUserUseCase,
        UserTypeOrmRepository,
        {
            provide: "IUserRepository",
            useExisting: UserTypeOrmRepository,
        },
    ],
})
export class UserModule {}